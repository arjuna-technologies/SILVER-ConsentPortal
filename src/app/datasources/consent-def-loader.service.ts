//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentDef } from './consent-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentDefs(consenterId: string): Promise<ConsentDef[]>
    {
        return this.http.get(this.datasourcesConfigService.listConsentDefLoaderBaseURL + '?consenterid=' + consenterId)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentDefsSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentDefsErrorHandler(response)));
    }

    public postConsentDef(id: string, consentDef: ConsentDef): Promise<boolean>
    {
        return this.http.post(this.datasourcesConfigService.postConsentDefLoaderBaseURL + '/' + id, consentDef.toObject())
                   .toPromise()
                   .then((response) => Promise.resolve(this.postConsentDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.postConsentDefErrorHandler(response)));
    }

    public getConsentDef(id: string): Promise<ConsentDef>
    {
        return this.http.get(this.datasourcesConfigService.getConsentDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentDefErrorHandler(response)));
    }

    public putConsentDef(id: string, consentDef: ConsentDef): Promise<boolean>
    {
        return this.http.put(this.datasourcesConfigService.putConsentDefLoaderBaseURL + '/' + id, consentDef.toObject())
                   .toPromise()
                   .then((response) => Promise.resolve(this.putConsentDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.putConsentDefErrorHandler(response)));
    }

    public deleteConsentDef(id: string): Promise<boolean>
    {
        return this.http.delete(this.datasourcesConfigService.deleteConsentDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response) => Promise.resolve(this.deleteConsentDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.deleteConsentDefErrorHandler(response)));
    }

    private getConsentDefsSuccessHandler(response: Response): ConsentDef[]
    {
        const consentDefs: ConsentDef[] = [];

        for (const consentDefObject of response.json())
        {
            const consentDef = new ConsentDef();

            consentDef.fromObject(consentDefObject);
            consentDefs.push(consentDef);
        }

        return consentDefs;
    }

    private getConsentDefsErrorHandler(error: Response | any): ConsentDef[]
    {
        console.log('Error while loading Consents: ' + (error.message || error));

        return [];
    }

    private postConsentDefSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private postConsentDefErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saveing Consent: ' + (error.message || error));

        return false;
    }

    private getConsentDefSuccessHandler(response: Response): ConsentDef
    {
        const consentDef = new ConsentDef();

        consentDef.fromObject(response.json());

        return consentDef;
    }

    private getConsentDefErrorHandler(error: Response | any): ConsentDef
    {
        console.log('Error while loading Consent: ' + (error.message || error));

        return null;
    }

    private putConsentDefSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private putConsentDefErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saveing Consent: ' + (error.message || error));

        return false;
    }

    private deleteConsentDefSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private deleteConsentDefErrorHandler(error: Response | any): boolean
    {
        console.log('Error while deleteing Consent: ' + (error.message || error));

        return false;
    }
}
