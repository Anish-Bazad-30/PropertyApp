import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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
    fill: false, // Enable fill
    tension: 0.5, // Smooth curve
    backgroundColor: 'rgba(201, 179, 255, 0.3)', // Fill area
    borderColor: '#c9b3ff',
    pointBackgroundColor: '#ffffff',
    pointBorderColor: '#c9b3ff',
    pointRadius: 5,
    pointHoverRadius: 6
  }
];
public lineChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        color: '#c9b3ff'
      }
    }
  },
  scales: {
    x: {
      ticks: { color: 'white' },
      grid: {
        color: '#406273',
        // @ts-ignore
        borderDash: [4, 4]
      }
    },
    y: {
      min: 0,
      max: 100,
      ticks: { color: 'white' },
      grid: {
        color: '#406273',
        // @ts-ignore
        borderDash: [10, 2]
      }
    }
  }
};

// public lineChartOptions: ChartConfiguration["options"] = {
//   responsive: true,
//   scales: {
//     x: {
//       display: true,
//       grid: {
//         display: false
//       },
//     },

//     y: {
      

//       position: "top", // Position the y-axis on the left side
    
//     },
//   },

//   plugins: {
//     legend: {
//       display: false,
//       position: "bottom",
//       align: "center",


//     },
//     tooltip: {},
//   },
// }
}
