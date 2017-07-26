//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//             Open Lab, Newcastle University, Newcastle upon Tyne, England,
//             Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//             All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentContextDef } from './consent-context-def';

@Injectable()
export class ConsentContextDefLoaderService
{
    private listBaseURL = 'http://10.1.20.248:8080/api/consentcontexts';
    private loadBaseURL = 'http://10.1.20.248:8080/api/consentcontext';

    constructor(private http: Http)
    {
    }

    public getConsentContextDefs(): Promise<ConsentContextDef[]>
    {
        return this.http.get(this.listBaseURL)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentContextDefsSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentContextDefsErrorHandler(response)));
    }

    public getConsentDef(id: string): Promise<ConsentContextDef>
    {
        return this.http.get(this.loadBaseURL + '/' + id)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentContextDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentContextDefErrorHandler(response)));
    }

    private getConsentContextDefsSuccessHandler(response: Response): ConsentContextDef[]
    {
        const consentContextDefs: ConsentContextDef[] = [];

        for (const consentContextDefObject of response.json())
        {
            const consentContextDef = new ConsentContextDef();

            consentContextDef.fromObject(consentContextDefObject);
            consentContextDefs.push(consentContextDef);
        }

        return consentContextDefs;
    }

    private getConsentContextDefsErrorHandler(error: Response | any): ConsentContextDef[]
    {
        console.log('Error while loading Consent Contexts: ' + (error.message || error));

        return [];
    }

    private getConsentContextDefSuccessHandler(response: Response): ConsentContextDef
    {
        const consentContextDef = new ConsentContextDef();

        consentContextDef.fromObject(response.json());

        return consentContextDef;
    }

    private getConsentContextDefErrorHandler(error: Response | any): ConsentContextDef
    {
        console.log('Error while loading Consent Context: ' + (error.message || error));

        return null;
    }
}
