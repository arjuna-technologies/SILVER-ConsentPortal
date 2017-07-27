//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';

import { ConsentContextModel } from './model/consent-context-model';

import { ConsentContextDef } from './datasource/consent-context-def';
import { ConsentContextDefLoaderService } from './datasource/consent-context-def-loader.service';

@Component
({
    selector:    'silver-consents',
    templateUrl: './consents.component.html',
    styleUrls:   ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit
{
    public consentContexts: ConsentContextModel[];

    public consentContextDefs: ConsentContextDef[];

    constructor(private consentContextDefLoaderService: ConsentContextDefLoaderService)
    {
        this.consentContextDefs = [];

        this.consentContexts = [];
    }

    ngOnInit()
    {
    }

    public load(username: string): void
    {
        if (username !== '')
            this.loadConsentContextDefs(username);
        else
        {
            this.consentContextDefs = [];
            this.updateModel();
        }
    }

    private loadConsentContextDefs(username: string)
    {
        this.consentContextDefLoaderService.getConsentContextDefs(username)
            .then((consentContextDefs) => { this.consentContextDefs = consentContextDefs; this.updateModel() })
            .catch(() => { this.consentContextDefs = []; this.updateModel() } );
    }

    private updateModel(): void
    {
        console.log('updateModel ' + this.consentContexts.length);
        this.consentContexts = [];

        for (const consentContextDef of this.consentContextDefs)
        {
            const consentContext: ConsentContextModel = new ConsentContextModel();

            consentContext.id               = consentContextDef.id;
            consentContext.consentId        = consentContextDef.consentId;
            consentContext.consenterId      = consentContextDef.consenterId;
            consentContext.name             = consentContextDef.name;
            consentContext.createdDate      = consentContextDef.createdDate;
            consentContext.lastModifiedDate = consentContextDef.lastModifiedDate;

            this.consentContexts.push(consentContext);
        }
    }
}
