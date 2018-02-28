//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { ConsentDef } from './consent-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentDefLoaderService
{
    constructor(private httpClient: HttpClient, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentDefs(consenterId: string): Promise<ConsentDef[]>
    {
        return this.httpClient.get(this.datasourcesConfigService.listConsentDefLoaderBaseURL + '?consenterid=' + consenterId)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentDefsSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentDefsErrorHandler(response)));
    }

    public postConsentDef(id: string, consentDef: ConsentDef): Promise<boolean>
    {
        return this.httpClient.post(this.datasourcesConfigService.postConsentDefLoaderBaseURL + '/' + id, consentDef.toObject())
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.postConsentDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.postConsentDefErrorHandler(response)));
    }

    public getConsentDef(id: string): Promise<ConsentDef>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentDefErrorHandler(response)));
    }

    public putConsentDef(id: string, consentDef: ConsentDef): Promise<boolean>
    {
        return this.httpClient.put(this.datasourcesConfigService.putConsentDefLoaderBaseURL + '/' + id, consentDef.toObject())
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.putConsentDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.putConsentDefErrorHandler(response)));
    }

    public deleteConsentDef(id: string): Promise<boolean>
    {
        return this.httpClient.delete(this.datasourcesConfigService.deleteConsentDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.deleteConsentDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.deleteConsentDefErrorHandler(response)));
    }

    private getConsentDefsSuccessHandler(response: HttpResponse<any>): ConsentDef[]
    {
        const consentDefs: ConsentDef[] = [];

        for (const consentDefObject of response.body)
        {
            const consentDef = new ConsentDef();

            consentDef.fromObject(consentDefObject);
            consentDefs.push(consentDef);
        }

        return consentDefs;
    }

    private getConsentDefsErrorHandler(error: HttpResponse<any> | any): ConsentDef[]
    {
        console.log('Error while loading Consents: ' + (error.message || error));

        return [];
    }

    private postConsentDefSuccessHandler(response: HttpResponse<any>): boolean
    {
        return true;
    }

    private postConsentDefErrorHandler(error: HttpResponse<any> | any): boolean
    {
        console.log('Error while saveing Consent: ' + (error.message || error));

        return false;
    }

    private getConsentDefSuccessHandler(response: HttpResponse<any>): ConsentDef
    {
        const consentDef = new ConsentDef();

        consentDef.fromObject(response.body);

        return consentDef;
    }

    private getConsentDefErrorHandler(error: HttpResponse<any> | any): ConsentDef
    {
        console.log('Error while loading Consent: ' + (error.message || error));

        return null;
    }

    private putConsentDefSuccessHandler(response: HttpResponse<any>): boolean
    {
        return true;
    }

    private putConsentDefErrorHandler(error: HttpResponse<any> | any): boolean
    {
        console.log('Error while saveing Consent: ' + (error.message || error));

        return false;
    }

    private deleteConsentDefSuccessHandler(response: HttpResponse<any>): boolean
    {
        return true;
    }

    private deleteConsentDefErrorHandler(error: HttpResponse<any> | any): boolean
    {
        console.log('Error while deleteing Consent: ' + (error.message || error));

        return false;
    }
}
