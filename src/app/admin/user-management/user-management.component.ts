import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  searchTerm: string = '';

  users = [
    { name: 'User A', email: 'usera@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'User B', email: 'userb@gmail.com', status: 'Inactive', profilePicture: 'assets/images/image1.png' },
    { name: 'User C', email: 'userc@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'User D', email: 'userd@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'User E', email: 'usere@gmail.com', status: 'Inactive', profilePicture: 'assets/images/image1.png' },
    { name: 'User F', email: 'userf@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'User G', email: 'userg@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    
  ];

  filteredUsers = [...this.users];

  constructor() {}

  ngOnInit(): void {}

  updateSearchTerm(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(value) || 
      user.email.toLowerCase().includes(value)
    );
  }
  confirmDelete(user: any) {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      this.users = this.users.filter(p => p !== user);
      this.filteredUsers = this.filteredUsers.filter(p => p !== user);
      alert("User deleted successfully!");
}

  }
}

  
