import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit {

  spinnerVisible: any;

  constructor(private loader: LoaderService) {

    this.loader.spinnerVisibility$.subscribe(
      (visibility) => (this.spinnerVisible = visibility)
    );
   }

  ngOnInit() {}
}
