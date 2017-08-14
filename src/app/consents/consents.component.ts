//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsentContextModel } from './model/consent-context-model';

import { ConsentContextDef } from './datasource/consent-context-def';
import { ConsentContextDefLoaderService } from './datasource/consent-context-def-loader.service';

@Component
({
    selector:    'silver-consents',
    templateUrl: './consents.component.html',
    styleUrls:   ['./consents.component.scss']
})
export class ConsentsComponent
{
    public consentContexts: ConsentContextModel[];

    constructor(private route: ActivatedRoute, private consentContextDefLoaderService: ConsentContextDefLoaderService)
    {
        this.consentContexts = [];

        this.load(route.snapshot.params.username);
    }

    private load(username: string): void
    {
        if (username !== '')
            this.loadConsentContextDefs(username);
        else
            this.updateModel([]);
    }

    private loadConsentContextDefs(username: string)
    {
        this.consentContextDefLoaderService.getConsentContextDefs(username)
            .then((consentContextDefs) => { this.updateModel(consentContextDefs) })
            .catch(() => { this.updateModel([]) } );
    }

    private updateModel(consentContextDefs: ConsentContextDef[]): void
    {
        this.consentContexts = [];

        for (const consentContextDef of consentContextDefs)
        {
            const consentContext: ConsentContextModel = new ConsentContextModel();

            consentContext.id               = consentContextDef.id;
            consentContext.consentId        = consentContextDef.consentId;
            consentContext.consenterId      = consentContextDef.consenterId;
            consentContext.name             = consentContextDef.name;
            consentContext.createdDate      = consentContextDef.createdDate;
            consentContext.lastModifiedDate = consentContextDef.lastModifiedDate;
            consentContext.isAStyleable     = true;
            consentContext.isBStyleable     = (consentContextDef.consentId === '9001');

            this.consentContexts.push(consentContext);
        }
    }
}
