import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component
({
    selector:    'silver-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent
{
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
            loginDialogRef.afterClosed().subscribe((result) => this.username = result);
        }
        else
            this.username = '';
    }
}
