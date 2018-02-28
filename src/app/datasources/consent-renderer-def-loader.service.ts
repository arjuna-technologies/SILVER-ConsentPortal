//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { ConsentRendererDef } from './consent-renderer-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentRendererDefLoaderService
{
    constructor(private httpClient: HttpClient, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentRendererDefs(): Promise<ConsentRendererDef[]>
    {
        return this.httpClient.get(this.datasourcesConfigService.listConsentRendererDefLoaderBaseURL)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentRendererDefsSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentRendererDefsErrorHandler(response)));
    }

    public getConsentRendererDef(id: string): Promise<ConsentRendererDef>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentRendererDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentRendererDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentRendererDefErrorHandler(response)));
    }

    public getConsentRendererDefByType(consentTypeId: string, consentRendererType: string): Promise<ConsentRendererDef>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentRendererDefByTypesLoaderBaseURL + '?consenttypeid=' + consentTypeId + '&consentrenderertype=' + consentRendererType)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentRendererDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentRendererDefErrorHandler(response)));
    }

    private getConsentRendererDefsSuccessHandler(response: HttpResponse<any>): ConsentRendererDef[]
    {
        const consentRendererDefs: ConsentRendererDef[] = [];

        for (const consentRendererDefObject of response.body)
        {
            const consentRendererDef = new ConsentRendererDef();

            consentRendererDef.fromObject(consentRendererDefObject);
            consentRendererDefs.push(consentRendererDef);
        }

        return consentRendererDefs;
    }

    private getConsentRendererDefsErrorHandler(error: HttpResponse<any> | any): ConsentRendererDef[]
    {
        console.log('Error while loading Consent Renderers: ' + (error.message || error));

        return [];
    }

    private getConsentRendererDefSuccessHandler(response: HttpResponse<any>): ConsentRendererDef
    {
        const consentRendererDef = new ConsentRendererDef();

        consentRendererDef.fromObject(response.body);

        return consentRendererDef;
    }

    private getConsentRendererDefErrorHandler(error: Response | any): ConsentRendererDef
    {
        console.log('Error while loading Consent Renderer: ' + (error.message || error));

        return null;
    }
}
