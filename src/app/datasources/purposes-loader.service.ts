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
export class PurposesLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getPurposesText(consentTypeId: string): Promise<string>
    {
        return this.http.get(this.datasourcesConfigService.loadPurposesBaseURL + consentTypeId)
               .toPromise()
               .then((response) => Promise.resolve(this.getPurposesTextSuccessHandler(response)))
               .catch((response) => Promise.resolve(this.getPurposesTextErrorHandler(response)));
    }

    private getPurposesTextSuccessHandler(response: Response): string
    {
        const purposesTexts = response.json();

        if (purposesTexts && (purposesTexts.length > 0))
        {
            const index = Math.floor(Math.random() * purposesTexts.length);

            return purposesTexts[index];
        }
        else
            return '';
    }

    private getPurposesTextErrorHandler(error: Response | any): string
    {
        console.log('Error while loading Purposes: ' + (error.message || error));

        return 'Error';
    }
}
