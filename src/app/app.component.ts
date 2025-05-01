import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  userName!: string;
  constructor() {}
  ngOnInit(): void {
    const storedUserName = sessionStorage.getItem('userName');
      this.userName = storedUserName !== null ? storedUserName : '';
  }

}
