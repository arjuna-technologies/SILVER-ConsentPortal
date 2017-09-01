import { Component, OnInit } from '@angular/core';

@Component
({
    selector:    'silver-consent-pages',
    templateUrl: './consent-pages.component.html',
    styleUrls:   [ './consent-pages.component.scss' ]
})
export class ConsentPagesComponent implements OnInit
{
    public informationType: string;
    public organization:    string;
    public purposeType:     string;

    public newConsent:      boolean;

    constructor()
    {
        this.informationType = '';
        this.organization    = '';
        this.purposeType     = '';

        this.newConsent      = true;
    }

    ngOnInit()
    {
    }

    public get completeConsent(): boolean
    {
        return (this.informationType != '') && (this.organization != '') && (this.purposeType != '');
    }
}
