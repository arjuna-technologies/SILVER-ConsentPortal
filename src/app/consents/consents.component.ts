//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsentContextModel } from './model/consent-context-model';
import { ConsentTemplateModel } from './model/consent-template-model';

import { ConsentContextDef } from '../datasources/consent-context-def';
import { ConsentContextDefLoaderService } from '../datasources/consent-context-def-loader.service';
import { ConsentTypeDefLoaderService } from '../datasources/consent-type-def-loader.service';

@Component
({
    selector:    'silver-consents',
    templateUrl: './consents.component.html',
    styleUrls:   ['./consents.component.scss']
})
export class ConsentsComponent
{
    public consentContexts:  ConsentContextModel[];
    public newConsentName:   string;
    public newConsenterName: string;
    public newConsentTypeId: string;
    public consentTemplates: ConsentTemplateModel[];

    constructor(private route: ActivatedRoute, private consentContextDefLoaderService: ConsentContextDefLoaderService, private consentTypeDefLoaderService: ConsentTypeDefLoaderService)
    {
        this.consentContexts  = [];
        this.newConsentName   = '';
        if (route.snapshot.params.username)
            this.newConsenterName = route.snapshot.params.username;
        else
            this.newConsenterName = '';
        this.newConsentTypeId = '';
        this.consentTemplates = [];

        if (this.newConsenterName !== '')
            this.loadExistingConsents(this.newConsenterName);
        this.loadConsentTemplates();
    }

    private loadExistingConsents(username: string): void
    {
        if (username !== '')
            this.loadConsentContextDefs(username);
        else
            this.updateModel([]);
    }

    private loadConsentContextDefs(username: string): void
    {
        this.consentContextDefLoaderService.getConsentContextDefs(username)
            .then((consentContextDefs) => { this.updateModel(consentContextDefs) })
            .catch(() => { this.updateModel([]) } );
    }

    private loadConsentTemplates(): void
    {
        this.consentTypeDefLoaderService.getConsentTypeDefs()
            .then
            (
                (consentTypeDefs) =>
                {
                    this.consentTemplates = [];
                    for (const consentTypeDef of consentTypeDefs)
                    {
                        const consentTemplates: ConsentTemplateModel = new ConsentTemplateModel();

                        consentTemplates.name          = consentTypeDef.name;
                        consentTemplates.consentTypeId = consentTypeDef.id;

                        this.consentTemplates.push(consentTemplates);
                    }
                }
            )
            .catch(() => { this.consentTemplates = [] } );
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
            consentContext.isCStyleable     = (consentContextDef.consentId === '9001');

            this.consentContexts.push(consentContext);
        }
    }
}
