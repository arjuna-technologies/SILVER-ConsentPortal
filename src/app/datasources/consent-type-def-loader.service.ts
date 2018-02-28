//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//             Open Lab, Newcastle University, Newcastle upon Tyne, England,
//             Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//             All rights reserved.
//

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { ConsentTypeDef } from './consent-type-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentTypeDefLoaderService
{
    constructor(private httpClient: HttpClient, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentTypeDefs(): Promise<ConsentTypeDef[]>
    {
        return this.httpClient.get(this.datasourcesConfigService.listConsentTypeDefLoaderBaseURL)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentTypeDefsSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentTypeDefsErrorHandler(response)));
    }

    public getConsentTypeDef(id: string): Promise<ConsentTypeDef>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentTypeDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentTypeDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentTypeDefErrorHandler(response)));
    }

    public setConsentTypeDef(id: string, consentTypeDef: ConsentTypeDef): Promise<boolean>
    {
        return this.httpClient.post(this.datasourcesConfigService.getConsentTypeDefLoaderBaseURL + '/' + id, consentTypeDef.toObject())
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.setConsentTypeDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.setConsentTypeDefErrorHandler(response)));
    }

    private getConsentTypeDefsSuccessHandler(httpResponse: HttpResponse<any>): ConsentTypeDef[]
    {
        const consentTypeDefs: ConsentTypeDef[] = [];

        for (const consentTypeDefObject of httpResponse.body())
        {
             const consentTypeDef = new ConsentTypeDef();

             consentTypeDef.fromObject(consentTypeDefObject);
             consentTypeDefs.push(consentTypeDef);
        }

        return consentTypeDefs;
    }

    private getConsentTypeDefsErrorHandler(error: HttpResponse<any> | any): ConsentTypeDef[]
    {
        console.log('Error while loading Consent Types: ' + (error.message || error));

        return [];
    }

    private getConsentTypeDefSuccessHandler(response: HttpResponse<any>): ConsentTypeDef
    {
        const consentTypeDef = new ConsentTypeDef();

        consentTypeDef.fromObject(response.body());

        return consentTypeDef;
    }

    private getConsentTypeDefErrorHandler(error: HttpResponse<any> | any): ConsentTypeDef
    {
        console.log('Error while loading Consent Type: ' + (error.message || error));

        return null;
    }

    private setConsentTypeDefSuccessHandler(response: HttpResponse<any>): boolean
    {
        return true;
    }

    private setConsentTypeDefErrorHandler(error: HttpResponse<any> | any): boolean
    {
        console.log('Error while saving Consent Type: ' + (error.message || error));

        return false;
    }
}
