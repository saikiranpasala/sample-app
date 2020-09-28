import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports-component/reports-component.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentsModule } from '../shared/material-components.module';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

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
    NvD3Module,
    RouterModule.forChild(routes)
  ]
})
export class ReportsModule { }
