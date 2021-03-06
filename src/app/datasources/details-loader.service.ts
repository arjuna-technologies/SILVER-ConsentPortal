//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class DetailsLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getDetailsText(consentTypeId: string): Promise<string>
    {
        return this.http.get(this.datasourcesConfigService.getConsentTypeDetailsLoaderBaseURL + '/' + consentTypeId)
               .toPromise()
               .then((response) => Promise.resolve(this.getDetailsTextSuccessHandler(response)))
               .catch((response) => Promise.resolve(this.getDetailsTextErrorHandler(response)));
    }

    private getDetailsTextSuccessHandler(response: Response): string
    {
        const details = response.json();

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
