import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports-component/reports-component.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentsModule } from '../shared/material-components.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ReportsComponent
      }
    ]
  }
];


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportsModule { }
