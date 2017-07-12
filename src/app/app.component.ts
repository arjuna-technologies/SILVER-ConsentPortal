import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { ClauseListsComponent } from './style-b/clause-lists/clause-lists.component';
import { DeclarationComponent } from './style-a/declaration/declaration.component';

@Component
({
    selector:    'silver-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent
{
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

    public openLoginDialog(): void
    {
        if (this.username === '')
        {
            let loginDialogRef = this.dialog.open(LoginDialogComponent);
            loginDialogRef.afterClosed().subscribe((result) => { this.username = result; this.styleA.load(this.username); this.styleB.load(this.username) });
        }
        else
        {
            this.username = '';
            this.styleA.load(this.username);
            this.styleB.load(this.username);
        }
    }
}
