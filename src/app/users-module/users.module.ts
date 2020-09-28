import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users-home/users-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentsModule } from '../shared/material-components.module';
import { UsersEntryComponent } from './users-entry/users-entry.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: UsersComponent
      }
    ]
  }
];

@NgModule({
  declarations: [UsersComponent, UsersEntryComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,    
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }