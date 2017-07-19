//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DetailsLoaderService
{
//    private loadBaseURL = 'http://10.1.20.172:3000/api/details';
    private loadBaseURL = 'assets/details.json';

    constructor(private http: Http)
    {
    }

    public getDetailsText(): Promise<string>
    {
        return this.http.get(this.loadBaseURL)
               .toPromise()
               .then((response) => Promise.resolve(this.getDetailsTextSuccessHandler(response)))
               .catch((response) => Promise.resolve(this.getDetailsTextErrorHandler(response)));
    }

    private getDetailsTextSuccessHandler(response: Response): string
    {
        const detailsTexts = response.json();

        if (detailsTexts && (detailsTexts.length > 0))
        {
            const index = Math.floor(Math.random() * detailsTexts.length);

            return detailsTexts[index];
        }
        else
            return '';
    }

    private getDetailsTextErrorHandler(error: Response | any): string
    {
        console.log('Error while loading Details: ' + (error.message || error));

        return 'Error';
    }
}
