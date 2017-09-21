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
import { MdRadioModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { ConsentsComponent } from './consents/consents.component';
import { DeclarationComponent } from './style-a/declaration/declaration.component';
import { ClauseListsComponent } from './style-b/clause-lists/clause-lists.component';
import { ClauseListComponent } from './style-b/clause-list/clause-list.component';
import { ClauseComponent } from './style-b/clause/clause.component';
import { ConsentHistoryComponent } from './consent-history/consent-history.component';
import { ConsentPagesComponent } from './style-c/consent-pages/consent-pages.component';

import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

import { DatasourcesConfigService } from './config/datasources-config.service';
import { ConsentContextDefLoaderService } from './datasources/consent-context-def-loader.service';
import { ConsentDefLoaderService } from './datasources/consent-def-loader.service';
import { ConsentTypeDefLoaderService } from './datasources/consent-type-def-loader.service';
import { ConsentHistoryDefLoaderService } from './datasources/consent-history-def-loader.service';
import { ConsentRendererDefLoaderService } from './datasources/consent-renderer-def-loader.service';
import { DetailsLoaderService } from './datasources/details-loader.service';
import { PurposesLoaderService } from './datasources/purposes-loader.service';
import { EditorComponent } from './style-a-edit/editor/editor.component';

const appRoutes: Routes =
[
    { path: '',                                                                  component: WelcomeComponent },
    { path: 'consents/:username',                                                component: ConsentsComponent },
    { path: 'stylea/:consentcontextid',                                          component: DeclarationComponent },
    { path: 'stylea_create/:newconsentname/:newconsentername/:newconsenttypeid', component: DeclarationComponent },
    { path: 'styleb/:consentcontextid',                                          component: ClauseListsComponent },
    { path: 'stylec/:consentcontextid',                                          component: ConsentPagesComponent },
    { path: 'history/:consentid',                                                component: ConsentHistoryComponent },
    { path: '**',                                                                component: PageNotFoundComponent }
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
        ConsentPagesComponent,
        ConsentsComponent,
        PageNotFoundComponent,
        WelcomeComponent,
        ConsentHistoryComponent,
        EditorComponent
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
        MdRadioModule,
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
        DatasourcesConfigService,
        ConsentDefLoaderService,
        ConsentTypeDefLoaderService,
        ConsentHistoryDefLoaderService,
        ConsentContextDefLoaderService,
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
