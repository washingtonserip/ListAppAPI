import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PanelComponent } from './panel.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule
  ],
  declarations: [PanelComponent]
})
export class PanelModule { }
