//
// Copyright (c) 2017-2018, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                          Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                          Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                          All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component
({
    selector:    'silver-consent-pages',
    templateUrl: './consent-pages.component.html',
    styleUrls:   [ './consent-pages.component.scss' ]
})
export class ConsentPagesComponent implements OnInit
{
    public selectedIndex:   number;

    public informationType: string;
    public organization:    string;
    public purposeType:     string;

    public newConsent:      boolean;

    constructor(private location: Location)
    {
        this.selectedIndex   = 0;

        this.informationType = '';
        this.organization    = '';
        this.purposeType     = '';

        this.newConsent      = true;
    }

    ngOnInit()
    {
    }

    public doNext(): void
    {
        this.selectedIndex = (this.selectedIndex + 1) % 3;
    }

    public doPrevious(): void
    {
        this.selectedIndex = (this.selectedIndex + 2) % 3;
    }

    public doClear(): void
    {
        this.informationType = '';
        this.organization    = '';
        this.purposeType     = '';
    }

    public get completeConsent(): boolean
    {
        return (this.informationType !== '') && (this.organization !== '') && (this.purposeType !== '');
    }

    public doCreateConsent(): void
    {
        this.location.back();
    }

    public doUpdateConsent(): void
    {
        this.location.back();
    }

    public doRemoveConsent(): void
    {
        this.location.back();
    }

    public doCancel(): void
    {
        this.location.back();
    }
}
