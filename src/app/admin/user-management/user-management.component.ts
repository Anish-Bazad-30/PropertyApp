import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  searchText: string = '';
userListOriginal: any[] = [];  // unfiltered list from backend
userList: any[] = [];
currentPage=1;
itemsPerPage=10;

  constructor(
    private userProfileManagement: UserProfileManagementService, 
    private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userProfileManagement.fetchAllUsersData().subscribe((res) => {
      this.userListOriginal = res.data;
      this.userList = [...this.userListOriginal];
  });
  }
  filterUsers() {
    const query = this.searchText.toLowerCase();
    this.userList = this.userListOriginal.filter(user =>
      user.username.toLowerCase().includes(query)
    );
  }

  addNew(){
    this.router.navigate(['/admin/add-user']);
  }

  editUser(user: any): void {
    this.router.navigate(['/admin/edit-user']);
    this.userProfileManagement.setUserData(user);
  }

  deleteUser(user: any): void {
    this.userProfileManagement.deleteUserProfile(user).subscribe((res)=>{
      this.loadUsers();
    })
  }
  get userlistview() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.userList.slice(startIndex, startIndex + this.itemsPerPage);
  }
 
  getTotalPages(): number {
    return Math.ceil(this.userList.length / this.itemsPerPage);
  }
 
  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }

}
