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
export class PurposesLoaderService
{
    constructor(private httpClient: HttpClient, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getPurposesText(consentTypeId: string): Promise<string>
    {
        return this.httpClient.get(this.datasourcesConfigService.getConsentTypePurposesLoaderBaseURL + '/' + consentTypeId)
               .toPromise()
               .then((response: HttpResponse<any>) => Promise.resolve(this.getPurposesTextSuccessHandler(response)))
               .catch((response: HttpResponse<any>) => Promise.resolve(this.getPurposesTextErrorHandler(response)));
    }

    private getPurposesTextSuccessHandler(httpResponse: HttpResponse<any>): string
    {
        const purposes = httpResponse.body();

        if (purposes && httpResponse.body)
            return purposes.body.text;
        else
            return '';
    }

    private getPurposesTextErrorHandler(error: Response | any): string
    {
        console.log('Error while loading Purposes: ' + (error.message || error));

        return 'Error';
    }
}
