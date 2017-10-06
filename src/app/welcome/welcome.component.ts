import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component
({
    selector: 'silver-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit
{
    public username: string;

    constructor(private dialog: MatDialog, private router: Router)
    {
    }

    ngOnInit()
    {
    }

    public openLoginDialog(): void
    {
        if (this.username === '')
        {
            const loginDialogRef = this.dialog.open(LoginDialogComponent);
            loginDialogRef.afterClosed().subscribe((username) => { this.username = username; this.router.navigate([], [{ consents: { popup: null }}]) });
        }
        else
            this.username = '';
    }
}
