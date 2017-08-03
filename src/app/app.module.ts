//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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

import { WelcomeComponent } from './welcome/welcome.component';
import { ConsentsComponent } from './consents/consents.component';
import { DeclarationComponent } from './style-a/declaration/declaration.component';
import { ClauseListsComponent } from './style-b/clause-lists/clause-lists.component';
import { ClauseListComponent } from './style-b/clause-list/clause-list.component';
import { ClauseComponent } from './style-b/clause/clause.component';

import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

import { ConsentContextDefLoaderService } from './consents/datasource/consent-context-def-loader.service';
import { ConsentDefLoaderService } from './style-a/datasource/consent-def-loader.service';
import { ConsentRendererDefLoaderService } from './style-a/datasource/consent-renderer-def-loader.service';
import { DetailsLoaderService } from './style-a/datasource/details-loader.service';
import { PurposesLoaderService } from './style-a/datasource/purposes-loader.service';
import { DatasourcesConfigService } from './config/datasources-config.service';

const appRoutes: Routes =
[
    { path: '',                   component: WelcomeComponent },
    { path: 'consents/:username', component: ConsentsComponent },
    { path: 'stylea/:consentid',  component: DeclarationComponent },
    { path: 'styleb/:consentid',  component: ClauseListsComponent },
    { path: '**',                 component: PageNotFoundComponent }
];

@NgModule
({
    declarations:
    [
        AppComponent,
        LoginDialogComponent,
        DeclarationComponent,
        ClauseListsComponent,
        ClauseListComponent,
        ClauseComponent,
        ConsentsComponent,
        PageNotFoundComponent,
        WelcomeComponent
    ],
    imports:
    [
        BrowserModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
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
        ConsentContextDefLoaderService,
        ConsentRendererDefLoaderService,
        DetailsLoaderService,
        PurposesLoaderService,
        DatasourcesConfigService
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
}
