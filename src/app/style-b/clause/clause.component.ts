//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { transition } from '@angular/animations';

import { ClauseModel } from '../model/clause-model';

@Component
({
    selector: 'silver-clause',
    templateUrl: './clause.component.html',
    styleUrls: ['./clause.component.scss'],
    animations:
    [
        trigger
        (
            'selectedState',
            [
                state
                (
                    'unselected',
                    style( { } )
                ),
                state
                (
                    'selected',
                    style( { color: 'white', backgroundColor: '#3f51b5' } )
                ),
                transition( 'unselected => selected', animate('100ms ease-in') ),
                transition( 'selected => unselected', animate('100ms ease-out') )
            ]
        )
    ]
})
export class ClauseComponent implements OnInit
{
    @Input()
    public title:       string;
    @Input()
    public description: string;
    public selected:    string;

    constructor()
    {
        this.title       = '';
        this.description = '';
        this.selected    = 'unselected';
    }

    ngOnInit(): void
    {
    }

    toggleSelected(): void
    {
        if (this.selected === 'selected')
            this.selected = 'unselected';
        else
            this.selected = 'selected';
    }
}
