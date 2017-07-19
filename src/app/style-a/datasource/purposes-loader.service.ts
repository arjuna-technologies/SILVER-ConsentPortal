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
export class PurposesLoaderService
{
//    private loadBaseURL = 'http://10.1.20.172:3000/api/purposes';
    private loadBaseURL = 'assets/purposes.json';

    constructor(private http: Http)
    {
    }

    public getPurposesText(): Promise<string>
    {
        return this.http.get(this.loadBaseURL)
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
