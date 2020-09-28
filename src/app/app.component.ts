import { Component } from '@angular/core';
import { SharedDataService } from './shared/services/shared-data-service/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sample';
  currentView = 'Home';

  constructor(public sharedDataService: SharedDataService) {

  }
}
