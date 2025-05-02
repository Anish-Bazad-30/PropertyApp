import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-user-engagement-donut-chart',
  templateUrl: './user-engagement-donut-chart.component.html',
  styleUrls: ['./user-engagement-donut-chart.component.scss']
})
export class UserEngagementDonutChartComponent {
  public doughnutChartLabels: string[] = ['Active', 'Inactive'];
  public doughnutChartData = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['#FE6C6C', '#96E1FF'],
        hoverOffset: 5,
        borderWidth:0,
        cutout: '70%',
        radius: '90%',

      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      // title: {
      //   display: true,
      //   text: 'User Engagement Overview'
      // },
      legend: {
        position: 'bottom',
        display : true,
        labels: {
          color:"#fff",
          usePointStyle : true,
          pointStyle : 'circle',
          padding: 10,
          font: {
            size: 10
          }
        }
        }
        
      },
      
    
  };
}
