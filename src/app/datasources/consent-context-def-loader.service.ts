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
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentContextDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentContextDefs(consenterId: string): Promise<ConsentContextDef[]>
    {
        return this.http.get(this.datasourcesConfigService.listConsentContextDefLoaderBaseURL + '?consenterid=' + consenterId)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentContextDefsSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentContextDefsErrorHandler(response)));
    }

    public getConsentContextDef(id: string): Promise<ConsentContextDef>
    {
        return this.http.get(this.datasourcesConfigService.getConsentContextDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentContextDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentContextDefErrorHandler(response)));
    }

    public setConsentContextDef(id: string, consentContextDef: ConsentContextDef): Promise<boolean>
    {
        return this.http.post(this.datasourcesConfigService.getConsentContextDefLoaderBaseURL + '/' + id, consentContextDef.toObject())
                   .toPromise()
                   .then((response) => Promise.resolve(this.setConsentContextDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.setConsentContextDefErrorHandler(response)));
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

    private setConsentContextDefSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private setConsentContextDefErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saving Consent Context: ' + (error.message || error));

        return false;
    }
}
