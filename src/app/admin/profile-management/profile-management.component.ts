import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss'],
})
export class ProfileManagementComponent  implements OnInit {
  roleType: string = 'user';
  constructor(private router: Router) { }

  ngOnInit() {}
  selectRole(role: string) {
    this.roleType = role;
    // this.router.navigate(["admin/",this.roleType]);
}
}


