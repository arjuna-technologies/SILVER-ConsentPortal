//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentRendererDef } from './consent-renderer-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentRendererDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentRendererDefByCampaignId(campaignId: string, consentRendererType: string): Promise<ConsentRendererDef>
    {
        return this.http.get(this.datasourcesConfigService.getConsentRendererDefByCampaignIdLoaderBaseURL + '?campaignid=' + campaignId + '&consentrenderertype=' + consentRendererType)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentRendererDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentRendererDefErrorHandler(response)));
    }

    private getConsentRendererDefSuccessHandler(response: Response): ConsentRendererDef
    {
        const consentRendererDef = new ConsentRendererDef();

        consentRendererDef.fromObject(response.json());

        return consentRendererDef;
    }

    private getConsentRendererDefErrorHandler(error: Response | any): ConsentRendererDef
    {
        console.log('Error while loading Consent Renderer: ' + (error.message || error));

        return null;
    }
}
