//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//             Open Lab, Newcastle University, Newcastle upon Tyne, England,
//             Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//             All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentHistoryDef } from './consent-history-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentHistoryDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentHistoryDef(id: string): Promise<ConsentHistoryDef>
    {
        return this.http.get(this.datasourcesConfigService.getConsentHistoryDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentHistoryDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentHistoryDefErrorHandler(response)));
    }

    private getConsentHistoryDefSuccessHandler(response: Response): ConsentHistoryDef
    {
        const consentHistoryDef = new ConsentHistoryDef();

        consentHistoryDef.fromObject(response.json());

        return consentHistoryDef;
    }

    private getConsentHistoryDefErrorHandler(error: Response | any): ConsentHistoryDef
    {
        console.log('Error while loading Consent History: ' + (error.message || error));

        return null;
    }
}
