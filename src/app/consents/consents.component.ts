//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';

import { ConsentContextModel } from './model/consent-context-model';

@Component
({
    selector:    'silver-consents',
    templateUrl: './consents.component.html',
    styleUrls:   ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit
{
    private consentContexts: ConsentContextModel[];

    constructor()
    {
        this.consentContexts = [];

        this.consentContexts.push(new ConsentContextModel());
        this.consentContexts.push(new ConsentContextModel());
        this.consentContexts.push(new ConsentContextModel());
        this.consentContexts.push(new ConsentContextModel());
        this.consentContexts[0].name = 'Test Contest 0';
        this.consentContexts[1].name = 'Test Contest 1';
        this.consentContexts[2].name = 'Test Contest 2';
        this.consentContexts[3].name = 'Test Contest 3';
    }

    ngOnInit()
    {
    }
}
