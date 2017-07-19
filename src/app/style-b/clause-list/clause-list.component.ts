//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { ClauseModel } from '../model/clause-model';

@Component
({
    selector:    'app-clause-list',
    templateUrl: './clause-list.component.html',
    styleUrls:   [ './clause-list.component.scss' ]
})
export class ClauseListComponent implements OnInit
{
    @Input()
    public heading: string;
    @Input()
    public clauses: ClauseModel[];

    constructor()
    {
        this.heading = '';
        this.clauses = [];
    }

    ngOnInit(): void
    {
    }
}
