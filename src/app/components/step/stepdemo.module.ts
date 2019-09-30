import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';

import { StepDemoRoutingModule } from './stepdemo-routing.module';
import { StepDemoComponent } from './stepdemo.component';
import { StepModule } from '../../../../projects/truly-ui/src/components/step';
import { ShowcaseCardModule } from '../../shared/components/showcase-card/showcase-card.module';
import { ShowcaseTablePropertiesModule } from '../../shared/components/showcase-table-properties/showcase-table-properties.module';
import { ShowcaseTableEventsModule } from '../../shared/components/showcase-table-events/showcase-table-events.module';
import { ShowcaseHeaderModule } from '../../shared/components/showcase-header/showcase-header.module';
import {InputModule} from '../../../../projects/truly-ui/src/components/input';
import {FormModule} from '../../../../projects/truly-ui/src/components/form';
import {ButtonModule} from '../../../../projects/truly-ui/src/components/button';
import {CheckBoxModule} from '../../../../projects/truly-ui/src/components/checkbox';
import {IconsModule} from '../../../../projects/truly-ui/src/components/icons';

@NgModule({
  declarations: [
    StepDemoComponent
  ],
  imports: [
    StepDemoRoutingModule,
    StepModule,
    CommonModule,
    InputModule.forRoot(null, {height: '30px'}),
    ButtonModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule,
    HighlightJsModule,
    ShowcaseCardModule,
    ShowcaseTablePropertiesModule,
    ShowcaseTableEventsModule,
    ShowcaseHeaderModule,
    CheckBoxModule,
    IconsModule
  ],
  exports: [
    StepDemoComponent
  ]
})
export class StepDemoModule {}
