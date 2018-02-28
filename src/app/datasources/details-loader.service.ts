//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class DetailsLoaderService
{
    constructor(private httpClient: HttpClient, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getDetailsText(consentTypeId: string): Promise<string>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentTypeDetailsLoaderBaseURL + '/' + consentTypeId)
               .toPromise()
               .then((response: HttpResponse<any>) => Promise.resolve(this.getDetailsTextSuccessHandler(response)))
               .catch((response: HttpResponse<any>) => Promise.resolve(this.getDetailsTextErrorHandler(response)));
    }

    private getDetailsTextSuccessHandler(response: HttpResponse<any>): string
    {
        const details = response.body();

        if (details && details.detailsJSON)
            return details.detailsJSON.text;
        else
            return '';
    }

    private getDetailsTextErrorHandler(error: Response | any): string
    {
        console.log('Error while loading Details: ' + (error.message || error));

        return 'Error';
    }
}
