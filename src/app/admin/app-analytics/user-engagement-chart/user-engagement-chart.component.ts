import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-engagement-chart',
  templateUrl: './user-engagement-chart.component.html',
  styleUrls: ['./user-engagement-chart.component.scss'],
})
export class UserEngagementChartComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

userEngagementData = [
  {
    data: [45, 95, 30, 20, 25, 65, 70, 40, 30, 60, 90, 85],
    label: 'User Engagement',
    fill: false,
    tension: 0.4,
    pointBackgroundColor: 'white',
    borderColor: '#c9b3ff',
    pointBorderColor: '#c9b3ff'
  }
];

lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#c9b3ff'
      }
    }
  },
  scales: {
    x: {
      ticks: { color: 'white' },
      grid: { color: '#406273' }
    },
    y: {
      ticks: { color: 'white' },
      grid: { color: '#406273' },
      min: 0,
      max: 100
    }
  }
};

lineChartColors = [
  {
    backgroundColor: 'transparent',
    borderColor: '#c9b3ff'
  }
];

}
