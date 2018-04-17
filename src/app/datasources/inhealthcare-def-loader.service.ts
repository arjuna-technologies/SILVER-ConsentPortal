//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response, RequestMethod, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { InhealthcareConsentDef } from './inhealthcare-consent-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class InhealthcareDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public postInhealthcareConsent(username: string, password: string, inhealthcareConsent: InhealthcareConsentDef): Promise<string>
    {
        return this.http.post(this.datasourcesConfigService.postInhealthcareConsentBaseURL + "?username=" + username + "&password=" + password, inhealthcareConsent)
                   .toPromise()
                   .then((response) => Promise.resolve(this.postInhealthcareConsentSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.postInhealthcareConsentErrorHandler(response)));
    }

    private postInhealthcareConsentSuccessHandler(response: Response): string
    {
        console.log('postInhealthcareConsentSuccessHandler: ' + JSON.stringify(response));

        return response.json();
    }

    private postInhealthcareConsentErrorHandler(error: Response | any): string
    {
        console.log('Error while posting consent: ' + (error.message || error));

        return null;
    }
}

