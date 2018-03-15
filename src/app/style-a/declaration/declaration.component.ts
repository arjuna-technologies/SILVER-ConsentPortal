//
// Copyright (c) 2017-2018, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                          Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                          Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                          All rights reserved.
//

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { transition } from '@angular/animations';

import { ConsentModel } from '../model/consent-model';
import { ConsentRendererModel } from '../model/consent-renderer-model';
import { ComponentModel } from '../model/component-model';
import { ConstraintModel } from '../model/constraint-model';
import { ConstraintOptionModel } from '../model/constraint-option-model';

import { ConstraintDef } from '../../datasources/constraint-def';
import { ConsentRendererDef } from '../../datasources/consent-renderer-def';
import { ComponentRendererDef } from '../../datasources/component-renderer-def';
import { TextComponentRendererDef } from '../../datasources/text-component-renderer-def';
import { ConstraintComponentRendererDef } from '../../datasources/constraint-component-renderer-def';
import { InhealthcareConsentDef } from '../../datasources/inhealthcare-consent-def';

import { InhealthcareDefLoaderService } from '../../datasources/inhealthcare-def-loader.service';
import { ConsentRendererDefLoaderService } from '../../datasources/consent-renderer-def-loader.service';
import { DetailsLoaderService } from '../../datasources/details-loader.service';
import { PurposesLoaderService } from '../../datasources/purposes-loader.service';

@Component
({
    selector:    'silver-declaration',
    templateUrl: './declaration.component.html',
    styleUrls:   ['./declaration.component.scss'],
    animations:
    [
        trigger('changingState',
        [
            state('none', style({ color: '#222222' })),
            state('underway', style({ color: 'gold' })),
            transition('none => underway', animate('1000ms ease-out')),
            transition('underway => none', animate('1000ms ease-out'))
        ]),
        trigger('highlightState',
        [
            state('none', style({ backgroundColor: '#ffffff' })),
            state('highlight', style({ backgroundColor: 'gold' })),
            transition('none => highlight', animate('1000ms ease-out')),
            transition('highlight => none', animate('1000ms ease-out'))
        ])
    ]
})
export class DeclarationComponent
{
    public campaignId:      string;
    public userId:          string;
    public password:        string;
    public consentTypeId:   string;
    public components:      ComponentModel[];
    public constraints:     ConstraintModel[];
    public detailsLoading:  boolean;
    public detailsText:     string;
    public purposesLoading: boolean;
    public purposesText:    string;

    public constructor(private router: Router, private route: ActivatedRoute, private location: Location,
                       private inhealthcareDefLoaderService: InhealthcareDefLoaderService, private consentRendererDefLoaderService: ConsentRendererDefLoaderService,
                       private detailsLoaderService: DetailsLoaderService, private purposesLoaderService: PurposesLoaderService)
    {
        if (route.snapshot.queryParams.campaignid)
            this.campaignId = route.snapshot.queryParams.campaignid;
        else
            this.campaignId = '';
        if (route.snapshot.queryParams.userid)
            this.userId = route.snapshot.queryParams.userid;
        else
            this.userId = '';
        if (route.snapshot.queryParams.password)
            this.password = route.snapshot.queryParams.password;
        else
            this.password = '';
        this.consentTypeId   = '';
        this.components      = [];
        this.constraints     = [];
        this.detailsLoading  = false;
        this.detailsText     = '';
        this.purposesLoading = false;
        this.purposesText    = '';

        if (this.campaignId !== '')
            this.loadConsentRendererForCampaignId(this.campaignId);
    }

    public doSendInhealthcareMessage(): void
    {
        const inhealthcareConsentDef: InhealthcareConsentDef = new InhealthcareConsentDef();

        inhealthcareConsentDef.id             = (1000000000 *  Math.random()).toString(16);;
        inhealthcareConsentDef.userId         = this.userId;
        inhealthcareConsentDef.password       = this.password;
        inhealthcareConsentDef.typeId         = this.consentTypeId;
        inhealthcareConsentDef.constraintDefs = [];
        for (const constraint of this.constraints)
        {
            const constraintDef: ConstraintDef = new ConstraintDef();

            constraintDef.id    = constraint.id;
            constraintDef.value = constraint.value;

            inhealthcareConsentDef.constraintDefs.push(constraintDef);
        }

        this.inhealthcareDefLoaderService.postInhealthcareConsentDef(this.userId, this.password);
    }

    private loadConsentRendererForCampaignId(campaignId: string): void
    {
        this.consentRendererDefLoaderService.getConsentRendererDefByCampaignId(campaignId, 'StyleA')
            .then
            (
                (consentRendererDef) =>
                {
                    this.consentTypeId = consentRendererDef.consentTypeId;

                    this.updateModel(consentRendererDef);
                }
            )
            .catch(() => this.updateModel(null));
    }

    private updateModel(consentRendererDef: ConsentRendererDef): void
    {
        this.components    = [];
        this.constraints   = [];
        if (consentRendererDef != null)
        {
            for (const componentRendererDef of consentRendererDef.componentRendererDefs)
            {
                const component = new ComponentModel();

                if (componentRendererDef instanceof TextComponentRendererDef)
                {
                    const textComponentRendererDef = componentRendererDef as TextComponentRendererDef;

                    component.id     = null;
                    component.text   = textComponentRendererDef.valueTextComponentRendererDefs[0].text;
                    component.colour = '#aaaaaa';
                    component.state  = 'passive';
                }
                else if (componentRendererDef instanceof ConstraintComponentRendererDef)
                {
                    const constraintComponentRendererDef = componentRendererDef as ConstraintComponentRendererDef;

                    component.id     = constraintComponentRendererDef.id;
                    component.text   = null;
                    component.colour = '#777777';
                    component.state  = 'none';

                    const constraint = new ConstraintModel();

                    constraint.id    = constraintComponentRendererDef.id;
                    constraint.text  = constraintComponentRendererDef.descriptionRendererDefs[0].text;
                    constraint.value = constraintComponentRendererDef.valueConstraintComponentRendererDefs[0].id;

                    constraint.options = [];
                    for (const valueConstraintComponentRendererDef of constraintComponentRendererDef.valueConstraintComponentRendererDefs)
                    {
                        const constraintOption = new ConstraintOptionModel();

                        constraintOption.id    = valueConstraintComponentRendererDef.id;
                        constraintOption.label = valueConstraintComponentRendererDef.descriptionRendererDefs[0].text;

                        if (constraint.value === constraintOption.id)
                            component.text = constraintOption.label;

                        constraint.options.push(constraintOption);
                    }

                    this.constraints.push(constraint);
                }
                else
                {
                    component.id     = 'Error';
                    component.text   = 'Other';
                    component.colour = '#dd2222';
                    component.state  = 'passive';
                }

                this.components.push(component);
            }
        }

        this.detailsLoading = true;
        this.detailsText = '';
        this.detailsLoaderService.getDetailsText(consentRendererDef.consentTypeId)
            .then((detailsText) => { this.detailsText = detailsText; this.detailsLoading = false; })
            .catch(() => this.detailsLoading = false);

        this.purposesLoading = true;
        this.purposesText = '';
        this.purposesLoaderService.getPurposesText(consentRendererDef.consentTypeId)
            .then((purposesText) => { this.purposesText = purposesText; this.purposesLoading = false; })
            .catch(() => this.purposesLoading = false);
    }

    public componentEnter(component: ComponentModel): void
    {
        for (const constraint of this.constraints)
            if (component.id === constraint.id)
                constraint.state = 'highlight';
    }

    public componentLeave(component: ComponentModel): void
    {
        for (const constraint of this.constraints)
            if (component.id === constraint.id)
                constraint.state = 'none';
    }

    public constraintEnter(constraint: ConstraintModel): void
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                component.state = 'underway';
    }

    public constraintLeave(constraint: ConstraintModel): void
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                component.state = 'none';
    }

    public constraintChange(constraint: ConstraintModel): void
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                for (const constraintOption of constraint.options)
                    if (constraint.value === constraintOption.id)
                        component.text = constraintOption.label;
    }
}
