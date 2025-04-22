import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral-pie-chart',
  templateUrl: './referral-pie-chart.component.html',
  styleUrls: ['./referral-pie-chart.component.scss'],
})
export class ReferralPieChartComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  referralChartData = {
    datasets: [{
      data: [60, 40]
    }]
  };
  
  pieChartColors = [{
    backgroundColor: [' #7cd6ff', '#ff7f7f']
  }];
  
  pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }
      }
    }
  };
}
