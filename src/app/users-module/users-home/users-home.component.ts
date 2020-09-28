import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataApiService } from 'src/app/shared/services/data-api-service/data-api.service';
import { SharedDataService } from 'src/app/shared/services/shared-data-service/shared-data.service';
import { UserModel } from 'src/app/shared/view-models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersComponent {
  public searchPanelOpen = true;
  public showEditComponent = false;
  public dataSource: MatTableDataSource<UserModel>;
  public selectedUserId: number;
  public displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'status', 'updated_at', 'actions'];
  constructor(private dataApiService: DataApiService, private sharedDataService: SharedDataService) {
    this.sharedDataService.currentView = 'Users';
    this.getAllUsers();
  }

  @ViewChild(MatSort) sort: MatSort;

  getAllUsers = () => {
    this.sharedDataService.openLoadingSpinner();
    this.dataApiService.getAllUSersService().subscribe(response => {
      this.sharedDataService.closeLoadingSpinner();
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.sharedDataService.openSnackBar('Users data retrived successfully.')
    }, error => {
      this.sharedDataService.closeLoadingSpinner();
      this.sharedDataService.openSnackBar('Failed to get data. Please try again.', 15000)
    });
  }

  editUser = (id: number) => {
    this.selectedUserId = id;
    this.showEditComponent = true;
  }

  userUpdateDone = (updateDone: boolean) => {
    this.showEditComponent = false;
    if (updateDone) {
      this.sharedDataService.openSnackBar('Updated Successfully.', 5000)
      this.getAllUsers();
    }
  }

  confirmDelete = (userid: number) => {
    this.sharedDataService.openConfirmDeleteDialog().subscribe(response => {
      if (response) {
        this.sharedDataService.openLoadingSpinner();
        this.dataApiService.deleteUserService(userid).subscribe(response => {
          this.sharedDataService.closeLoadingSpinner();
          this.getAllUsers();
          this.sharedDataService.openSnackBar('Deleted successfully!.', 5000);
        }, error => {
          this.sharedDataService.closeLoadingSpinner();
          this.sharedDataService.openSnackBar('Error occured. Please try again.', 15000);
        });
      }
    });
  }
}
