import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartsConfig } from 'src/app/shared/charts-config.constant';
import { DataApiService } from 'src/app/shared/services/data-api-service/data-api.service';
import { SharedDataService } from 'src/app/shared/services/shared-data-service/shared-data.service';
import { MonthlyStatsModel } from 'src/app/shared/view-models/charts.model';
declare let d3: any;


@Component({
  selector: 'app-reports',
  templateUrl: './reports-component.component.html',
  styleUrls: ['./reports-component.component.scss', '../../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportsComponent implements OnInit {
  public chartsConfig = ChartsConfig;
  public monthlyChartData: MonthlyStatsModel[];
  constructor(private sharedDataService: SharedDataService, private dataApiService: DataApiService) {
    this.sharedDataService.currentView = 'Reports';
  }
  ngOnInit() {
    this.getReports();
  }
  getReports = () => {
    this.sharedDataService.openLoadingSpinner();
    this.dataApiService.getCurrentMonthStats().subscribe(response => {
      this.monthlyChartData = response;
      this.sharedDataService.closeLoadingSpinner();
      this.sharedDataService.openSnackBar('Reports data retrived successfully.', 5000)
    });
  }
}
