import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { ClauseListsComponent } from './style-b/clause-lists/clause-lists.component';
import { ClauseListComponent } from './style-b/clause-list/clause-list.component';
import { ClauseComponent } from './style-b/clause/clause.component';

import { ConsentDefLoaderService } from './datasource/consent-def-loader.service';
import { ConsentRendererDefLoaderService } from './datasource/consent-renderer-def-loader.service';
import { DetailsLoaderService } from './datasource/details-loader.service';
import { PurposesLoaderService } from './datasource/purposes-loader.service';

@NgModule
({
    declarations:
    [
        AppComponent,
        LoginDialogComponent,
        ClauseListsComponent,
        ClauseListComponent,
        ClauseComponent
    ],
    imports:
    [
        BrowserModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MdToolbarModule,
        MdTabsModule,
        MdCardModule,
        MdListModule,
        MdInputModule,
        MdSelectModule,
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdSidenavModule,
        MdProgressBarModule,
        MdDialogModule
    ],
    entryComponents:
    [
        LoginDialogComponent
    ],
    providers:
    [
        ConsentDefLoaderService,
        ConsentRendererDefLoaderService,
        DetailsLoaderService,
        PurposesLoaderService
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
}
