import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { ClauseListModel } from '../model/clause-list-model';

@Component
({
    selector:    'app-clause-lists',
    templateUrl: './clause-lists.component.html',
    styleUrls:   [ './clause-lists.component.scss' ]
})
export class ClauseListsComponent implements OnInit
{
    @Input()
    public clauseLists: ClauseListModel[];
    public text: string;

    constructor()
    {
        this.clauseLists = [];
        this.text        = 'test test';
    }

    ngOnInit(): void
    {
    }
}
