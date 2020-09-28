import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/services/shared-data-service/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    this.sharedDataService.currentView = 'Home';
  }

  ngOnInit(): void {
  }

}
