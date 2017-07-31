//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClauseListsModel } from '../model/clause-lists-model';
import { ClauseListModel } from '../model/clause-list-model';
import { ClauseModel } from '../model/clause-model';

@Component
({
    selector:    'silver-clause-lists',
    templateUrl: './clause-lists.component.html',
    styleUrls:   [ './clause-lists.component.scss' ]
})
export class ClauseListsComponent
{
    @Input()
    public clauseLists: ClauseListModel[];

    constructor(private route: ActivatedRoute)
    {
        this.clauseLists = [];

        this.setup(route.snapshot.params.consentid);
    }

    public setup(consentid: string): void
    {
        this.clauseLists = [];

        const dataClauseList = new ClauseListModel();
        dataClauseList.heading = 'Data';
        dataClauseList.clauses = [];
        this.clauseLists.push(dataClauseList);

            const purposeClauseList = new ClauseListModel();
            purposeClauseList.heading = 'Purpose';
            purposeClauseList.clauses = [];
            this.clauseLists.push(purposeClauseList);

            const organizationClauseList = new ClauseListModel();
            organizationClauseList.heading = 'Organization';
            organizationClauseList.clauses = [];
            this.clauseLists.push(organizationClauseList);

            const emsClause = new ClauseModel();
            emsClause.title = 'School Information';
            emsClause.description = 'Attendance and Exclustion Information';
            dataClauseList.clauses.push(emsClause);

            const policeClause = new ClauseModel();
            policeClause.title = 'Police Information';
            policeClause.description = 'Arrest and Domestic Violance Information';
            dataClauseList.clauses.push(policeClause);

            const mentalHealthClause = new ClauseModel();
            mentalHealthClause.title = 'Mental Health Information';
            mentalHealthClause.description = 'Mental Health Information';
            dataClauseList.clauses.push(mentalHealthClause);

            const medicalResearchClause = new ClauseModel();
            medicalResearchClause.title = 'Medical Research';
            medicalResearchClause.description = 'Medical Research';
            purposeClauseList.clauses.push(medicalResearchClause);

            const processImprovementClause = new ClauseModel();
            processImprovementClause.title = 'Process Improvement';
            processImprovementClause.description = 'Process Improvement';
            purposeClauseList.clauses.push(processImprovementClause);

            const northTynesideCouncilClause = new ClauseModel();
            northTynesideCouncilClause.title = 'North Tyneside Council';
            northTynesideCouncilClause.description = 'North Tyneside Council';
            organizationClauseList.clauses.push(northTynesideCouncilClause);

            const sunderlandCityCouncilClause = new ClauseModel();
            sunderlandCityCouncilClause.title = 'Sunderland City Council';
            sunderlandCityCouncilClause.description = 'Sunderland City Council';
            organizationClauseList.clauses.push(sunderlandCityCouncilClause);

            const southTynesideCouncilClause = new ClauseModel();
            southTynesideCouncilClause.title = 'South Tyneside Council';
            southTynesideCouncilClause.description = 'South Tyneside Council';
            organizationClauseList.clauses.push(southTynesideCouncilClause);

            const newcastleCityCouncilClause = new ClauseModel();
            newcastleCityCouncilClause.title = 'Newcastle City Council';
            newcastleCityCouncilClause.description = 'Newcastle City Council';
            organizationClauseList.clauses.push(newcastleCityCouncilClause);

            const northumberlandCountyCouncilClause = new ClauseModel();
            northumberlandCountyCouncilClause.title = 'Northumberland County Council';
            northumberlandCountyCouncilClause.description = 'Northumberland County Council';
            organizationClauseList.clauses.push(northumberlandCountyCouncilClause);
    }
}
