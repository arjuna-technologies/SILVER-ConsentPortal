//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConsentHistoryDef } from '../datasources/consent-history-def';
import { ConsentHistoryDefLoaderService } from '../datasources/consent-history-def-loader.service';

@Component
({
    selector:    'silver-consent-history',
    templateUrl: './consent-history.component.html',
    styleUrls:   ['./consent-history.component.scss']
})
export class ConsentHistoryComponent implements OnInit
{
    public consentContextId: string;

    constructor(private router: Router, private route: ActivatedRoute, private consentHistoryDefLoaderService: ConsentHistoryDefLoaderService)
    {
        if (route.snapshot.params.consentcontextid)
            this.consentContextId = route.snapshot.params.consentcontextid;
        else
            this.consentContextId = '';

        if (this.consentContextId !== '')
            this.loadConsentHistoryDef(this.consentContextId);
    }

    ngOnInit()
    {
    }

    private loadConsentHistoryDef(consentContextId: string): void
    {
        this.consentHistoryDefLoaderService.getConsentHistoryDef(consentContextId)
            .then((consentContextDef) => { this.processConsentHistoryDef(consentContextDef) })
            .catch(() => { this.processConsentHistoryDef(null) } );
    }

    private processConsentHistoryDef(consentHistoryDef: ConsentHistoryDef): void
    {
        console.log(JSON.stringify(consentHistoryDef));
    }
}
