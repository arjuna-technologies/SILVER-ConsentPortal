import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { ClauseListsModel } from '../model/clause-lists-model';
import { ClauseListModel } from '../model/clause-list-model';
import { ClauseModel } from '../model/clause-model';

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

    constructor()
    {
        this.clauseLists = [];

        this.load('');
    }

    ngOnInit(): void
    {
    }

    public load(username: string)
    {
        this.clauseLists = [];

        const dataClauseList = new ClauseListModel();
        dataClauseList.heading = 'Data';
        dataClauseList.clauses = [];
        const emsClause = new ClauseModel();
        emsClause.title = 'School Information';
        emsClause.description = 'Attendance and Exclustion Information';
        dataClauseList.clauses.push(emsClause);
        this.clauseLists.push(dataClauseList);

        const clauseList1 = new ClauseListModel();
        clauseList1.heading = 'Purpose';
        const clauseList2 = new ClauseListModel();
        clauseList2.heading = 'Organization';
        this.clauseLists.push(clauseList1);
        this.clauseLists.push(clauseList2);
    }
}
