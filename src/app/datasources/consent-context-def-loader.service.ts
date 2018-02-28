//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//             Open Lab, Newcastle University, Newcastle upon Tyne, England,
//             Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//             All rights reserved.
//

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { ConsentContextDef } from './consent-context-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentContextDefLoaderService
{
    constructor(private httpClient: HttpClient, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentContextDefs(consenterId: string): Promise<ConsentContextDef[]>
    {
        return this.httpClient.get(this.datasourcesConfigService.listConsentContextDefLoaderBaseURL + '?consenterid=' + consenterId)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentContextDefsSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentContextDefsErrorHandler(response)));
    }

    public getConsentContextDef(id: string): Promise<ConsentContextDef>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentContextDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentContextDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentContextDefErrorHandler(response)));
    }

    public setConsentContextDef(id: string, consentContextDef: ConsentContextDef): Promise<boolean>
    {
        return this.httpClient.post(this.datasourcesConfigService.getConsentContextDefLoaderBaseURL + '/' + id, consentContextDef.toObject())
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.setConsentContextDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.setConsentContextDefErrorHandler(response)));
    }

    public removeConsentContextDef(id: string): Promise<boolean>
    {
        return this.httpClient.delete(this.datasourcesConfigService.deleteConsentContextDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.deleteConsentContextDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.deleteConsentContextDefErrorHandler(response)));
    }

    private getConsentContextDefsSuccessHandler(response: HttpResponse<any>): ConsentContextDef[]
    {
        const consentContextDefs: ConsentContextDef[] = [];

        for (const consentContextDefObject of response.body)
        {
            const consentContextDef = new ConsentContextDef();

            consentContextDef.fromObject(consentContextDefObject);
            consentContextDefs.push(consentContextDef);
        }

        return consentContextDefs;
    }

    private getConsentContextDefsErrorHandler(error: HttpResponse<any> | any): ConsentContextDef[]
    {
        console.log('Error while loading Consent Contexts: ' + (error.message || error));

        return [];
    }

    private getConsentContextDefSuccessHandler(response: HttpResponse<any>): ConsentContextDef
    {
        const consentContextDef = new ConsentContextDef();

        consentContextDef.fromObject(response.body);

        return consentContextDef;
    }

    private getConsentContextDefErrorHandler(error: HttpResponse<any> | any): ConsentContextDef
    {
        console.log('Error while loading Consent Context: ' + (error.message || error));

        return null;
    }

    private setConsentContextDefSuccessHandler(response: HttpResponse<any>): boolean
    {
        return true;
    }

    private setConsentContextDefErrorHandler(error: HttpResponse<any> | any): boolean
    {
        console.log('Error while saving Consent Context: ' + (error.message || error));

        return false;
    }

    private deleteConsentContextDefSuccessHandler(response: HttpResponse<any>): boolean
    {
        return true;
    }

    private deleteConsentContextDefErrorHandler(error: HttpResponse<any> | any): boolean
    {
        console.log('Error while deleting Consent Context: ' + (error.message || error));

        return false;
    }
}
