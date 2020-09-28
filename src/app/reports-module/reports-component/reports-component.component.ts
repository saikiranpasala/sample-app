import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/services/shared-data-service/shared-data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports-component.component.html',
  styleUrls: ['./reports-component.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    this.sharedDataService.currentView = 'Reports';
  }

  ngOnInit(): void {
  }

}
