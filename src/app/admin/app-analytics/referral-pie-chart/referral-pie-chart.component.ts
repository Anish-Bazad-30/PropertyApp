import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-referral-pie-chart',
  templateUrl: './referral-pie-chart.component.html',
  styleUrls: ['./referral-pie-chart.component.scss'],
})
export class ReferralPieChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Pie Chart Labels
  public pieChartLabels: string[] = ['Referred Users', 'Non-Referred Users'];

  // Pie Chart Data
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#7cd6ff', '#ff7f7f'],
        hoverOffset: 8,
        borderWidth : 0,
      }
    ]
  };

  // Pie Chart Type
  public pieChartType: ChartType = 'pie';

  // Pie Chart Options with Circular Legends
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      // title: {
      //   display: true,
      //   text: 'Referral Distribution',
      //   color: 'white'
      // }
    }
  };
}
