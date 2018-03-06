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

    public postInhealthcareConsentDef(inhealthcareConsentDef: InhealthcareConsentDef): Promise<boolean>
    {
        return this.http.post(this.datasourcesConfigService.postInhealthcareLoaderBaseURL, inhealthcareConsentDef.toObject())
                   .toPromise()
                   .then((response) => Promise.resolve(this.postInhealthcareConsentDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.postInhealthcareConsentDefErrorHandler(response)));
    }

    private postInhealthcareConsentDefSuccessHandler(response: Response): boolean
    {
        console.log('postInhealthcareConsentDefSuccessHandler: ' + JSON.stringify(response));

        return null;
    }

    private postInhealthcareConsentDefErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saveing Consent: ' + (error.message || error));

        return null;
    }
}
