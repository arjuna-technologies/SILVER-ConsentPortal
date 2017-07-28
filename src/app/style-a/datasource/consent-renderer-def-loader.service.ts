//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentRendererDef } from './consent-renderer-def';

@Injectable()
export class ConsentRendererDefLoaderService
{
    private listBaseURL = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderers';
    private loadBaseURL = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderer';
//    private listBaseURL = 'assets/consentrenderers.json';
//    private loadBaseURL = 'assets/consentrenderer';

    constructor(private http: Http)
    {
    }

    public getConsentRendererDefs(): Promise<ConsentRendererDef[]>
    {
        return this.http.get(this.listBaseURL)
               .toPromise()
               .then((response) => Promise.resolve(this.getConsentRendererDefsSuccessHandler(response)))
               .catch((response) => Promise.resolve(this.getConsentRendererDefsErrorHandler(response)));
    }

    public getConsentRendererDef(id: string): Promise<ConsentRendererDef>
    {
        return this.http.get(this.loadBaseURL + '/' + id)
               .toPromise()
               .then((response) => Promise.resolve(this.getConsentRendererDefSuccessHandler(response)))
               .catch((response) => Promise.resolve(this.getConsentRendererDefErrorHandler(response)));
    }

    private getConsentRendererDefsSuccessHandler(response: Response): ConsentRendererDef[]
    {
        const consentRendererDefs: ConsentRendererDef[] = [];

        for (const consentRendererDefObject of response.json())
        {
            const consentRendererDef = new ConsentRendererDef();

            consentRendererDef.fromObject(consentRendererDefObject);
            consentRendererDefs.push(consentRendererDef);
        }

        return consentRendererDefs;
    }

    private getConsentRendererDefsErrorHandler(error: Response | any): ConsentRendererDef[]
    {
        console.log('Error while loading Consent Renderers: ' + (error.message || error));

        return [];
    }

    private getConsentRendererDefSuccessHandler(response: Response): ConsentRendererDef
    {
        const consentRendererDef = new ConsentRendererDef();

        consentRendererDef.fromObject(response.json());

        return consentRendererDef;
    }

    private getConsentRendererDefErrorHandler(error: Response | any): ConsentRendererDef
    {
        console.log('Error while loading Consent Renderer: ' + (error.message || error));

        return null;
    }
}
