//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';

import { AppComponent } from './app.component';

import { DeclarationComponent } from './style-a/declaration/declaration.component';

import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

import { DatasourcesConfigService } from './config/datasources-config.service';
import { InhealthcareDefLoaderService } from './datasources/inhealthcare-def-loader.service';
import { ConsentRendererDefLoaderService } from './datasources/consent-renderer-def-loader.service';
import { DetailsLoaderService } from './datasources/details-loader.service';
import { PurposesLoaderService } from './datasources/purposes-loader.service';

const appRoutes: Routes =
[
    { path: '',   component: DeclarationComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule
({
    declarations:
    [
        AppComponent,
        DeclarationComponent,
        PageNotFoundComponent
    ],
    imports:
    [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FlexLayoutModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatDialogModule
    ],
    providers:
    [
        DatasourcesConfigService,
        InhealthcareDefLoaderService,
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
