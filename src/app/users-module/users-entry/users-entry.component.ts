import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api-service/data-api.service';
import { SharedDataService } from 'src/app/shared/services/shared-data-service/shared-data.service';
import { UserModel } from 'src/app/shared/view-models/user.model';

@Component({
  selector: 'app-users-entry',
  templateUrl: './users-entry.component.html',
  styleUrls: ['./users-entry.component.scss']
})
export class UsersEntryComponent implements OnInit {

  public currentUser: UserModel;
  public isLoading = true;
  constructor(private dataApiService: DataApiService, private sharedDataService: SharedDataService) {
  }

  @Input() user: number;
  @Output() userUpdated = new EventEmitter<boolean>();

  ngOnInit() {
    this.getUserinfo();
  }
  getUserinfo = () => {
    this.sharedDataService.openLoadingSpinner();
    this.dataApiService.getUserService(this.user).subscribe(response => {
      this.currentUser = response;
      this.isLoading = false;
      this.sharedDataService.closeLoadingSpinner();
    }, error => {
      this.sharedDataService.closeLoadingSpinner();
      this.sharedDataService.openSnackBar('Failed to get data.', 15000);
    });
  }

  updateUserinfo = () => {
    this.sharedDataService.openLoadingSpinner();
    console.log(this.currentUser);
    this.dataApiService.updateUserService(this.currentUser).subscribe(response => {
      this.currentUser = response;
      this.sharedDataService.closeLoadingSpinner();
      this.updateDone(true);
    }, error => {
      this.sharedDataService.closeLoadingSpinner();
      this.sharedDataService.openSnackBar('Failed to get data.', 15000)
    });
  }

  updateDone = (updateDone: boolean) => {
    this.userUpdated.emit(updateDone);
  }
}
