import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home-component/home.component';
import { DataApiService } from './shared/services/data-api-service/data-api.service';
import { SharedDataService } from './shared/services/shared-data-service/shared-data.service';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentsModule } from './shared/material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingDialogComponent } from './shared/components/loading-dialog/loading-dialog.component';
import { ConfirmDeleteComponent } from './shared/components/confirm-delete/confirm-delete.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'users', loadChildren: () => import('./users-module/users.module').then(module => module.UsersModule)
  },
  {
    path: 'reports', loadChildren: () => import('./reports-module/reports.module').then(module => module.ReportsModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingDialogComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [DataApiService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
