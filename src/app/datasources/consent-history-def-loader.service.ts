//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//             Open Lab, Newcastle University, Newcastle upon Tyne, England,
//             Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//             All rights reserved.
//

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { ConsentHistoryDef } from './consent-history-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentHistoryDefLoaderService
{
    constructor(private httpClient: HttpClient, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentHistoryDef(id: string): Promise<ConsentHistoryDef>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentHistoryDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response: HttpResponse<any>) => Promise.resolve(this.getConsentHistoryDefSuccessHandler(response)))
                   .catch((response: HttpResponse<any>) => Promise.resolve(this.getConsentHistoryDefErrorHandler(response)));
    }

    private getConsentHistoryDefSuccessHandler(response: HttpResponse<any>): ConsentHistoryDef
    {
        const consentHistoryDef = new ConsentHistoryDef();

        consentHistoryDef.fromObject(response.body);

        return consentHistoryDef;
    }

    private getConsentHistoryDefErrorHandler(error: HttpResponse<any> | any): ConsentHistoryDef
    {
        console.log('Error while loading Consent History: ' + (error.message || error));

        return null;
    }
}
