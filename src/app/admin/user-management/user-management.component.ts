import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  userList: any[] = [];
  searchText: string = '';

  constructor(private userProfileManagement: UserProfileManagementService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userProfileManagement.fetchAllUsersData().subscribe((res) => {
      this.userList = res.data;
  });
  //     this.userList = res
  // );
  }

  //     {
  //       username: 'ankith@033',
  //       mobile: '1234567890',
  //       profilePic: 'assets/images/image1.png'
  //     },
  //     {
  //       username: 'ankith@033',
  //       mobile: '1234567890',
  //       profilePic: 'assets/images/image1.png'
  //     },
  //     {
  //       username: 'ankith@033',
  //       mobile: '1234567890',
  //       profilePic: 'assets/images/image1.png'
  //     },
  //     {
  //       username: 'ankith@033',
  //       mobile: '1234567890',
  //       profilePic: 'assets/images/image1.png'
  //     },
  //     {
  //       username: 'ankith@033',
  //       mobile: '1234567890',
  //       profilePic: 'assets/images/image1.png'
  //     }
  //   ];
  // }

  addNew(){
    this.router.navigate(['/admin/add-user']);
  }

  editUser(user: any): void {
    console.log('Editing user:', user);
  }

  deleteUser(user: any): void {
    console.log('Deleted user:', user);
  }

}
