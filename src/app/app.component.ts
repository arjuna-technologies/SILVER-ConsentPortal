//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { ConsentsComponent } from './consents/consents.component';
import { ClauseListsComponent } from './style-b/clause-lists/clause-lists.component';
import { DeclarationComponent } from './style-a/declaration/declaration.component';

@Component
({
    selector:    'silver-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    @ViewChild(ConsentsComponent)
    public consents: ConsentsComponent;
    @ViewChild(ClauseListsComponent)
    public styleA: ClauseListsComponent;
    @ViewChild(DeclarationComponent)
    public styleB: DeclarationComponent;
    @ViewChild('stylec')
    public styleC: ElementRef;

    public username: string;

    public constructor(private dialog: MdDialog)
    {
        this.username = '';
    }

    ngOnInit()
    {
        this.openLoginDialog();
    }

    public openLoginDialog(): void
    {
        if (this.username === '')
        {
            const loginDialogRef = this.dialog.open(LoginDialogComponent);
            loginDialogRef.afterClosed().subscribe((result) => { this.username = result; this.consents.load(this.username); this.styleA.load(this.username); this.styleB.load(this.username) });
        }
        else
        {
            this.username = '';
            this.consents.load(this.username);
            this.styleA.load(this.username);
            this.styleB.load(this.username);
        }
    }
}
