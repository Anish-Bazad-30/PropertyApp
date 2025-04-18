import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  userList: any[] = [];
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userList = [
      {
        username: 'ankith@033',
        mobile: '1234567890',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        profilePic: 'assets/images/image1.png'
      }
    ];
  }

  addNew(): void {}

  editUser(user: any): void {
    console.log('Editing user:', user);
  }

  deleteUser(user: any): void {
    console.log('Deleted user:', user);
  }

  }
