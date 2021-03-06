//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    public consentId: string;
    public events: any[];

    constructor(private router: Router, private route: ActivatedRoute, private location: Location, private consentHistoryDefLoaderService: ConsentHistoryDefLoaderService)
    {
        if (route.snapshot.params.consentid)
            this.consentId = route.snapshot.params.consentid;
        else
            this.consentId = '';

        this.events = [];

        if (this.consentId !== '')
            this.loadConsentHistoryDef(this.consentId);
    }

    ngOnInit()
    {
    }

    public doDone(): void
    {
        this.location.back();
    }

    private loadConsentHistoryDef(consentId: string): void
    {
        this.consentHistoryDefLoaderService.getConsentHistoryDef(consentId)
            .then((consentContextDef) => { this.processConsentHistoryDef(consentContextDef) })
            .catch(() => { this.processConsentHistoryDef(null) } );
    }

    private processConsentHistoryDef(consentHistoryDef: ConsentHistoryDef): void
    {
        this.events = consentHistoryDef.events;
        for (const event of this.events)
        {
            event.properties = [];
            for (const key in event.info)
                event.properties.push({ 'name': key, 'value': event.info[key] });
        }
    }
}
