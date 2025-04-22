import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-engagement-donut-chart',
  templateUrl: './user-engagement-donut-chart.component.html',
  styleUrls: ['./user-engagement-donut-chart.component.scss'],
})
export class UserEngagementDonutChartComponent  implements OnInit {
            
  constructor() { }

  ngOnInit() {
    this.createPlacementChart();
  }
  @ViewChild('placementChart', { static: true }) placementChart!: ElementRef;

  createPlacementChart() {
    if (this.placementChart) {
      new Chart(this.placementChart.nativeElement, {
        type: 'bar',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: 'No. of Companies',
              data: [150, 500, 350, 800, 570],
              backgroundColor: '#8979FF'
            },
            {
              label: 'Internships',
              data: [90, 230, 200, 250, 350],
              backgroundColor: '#FF928A'
            },
            {
              label: 'Offers',
              data: [240, 410, 640, 700, 850],
              backgroundColor: '#3CC3DF'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                color: 'rgba(150, 150, 150, 0.1)',
              },
              ticks: {
                color: '#333', 
                font: {
                  size: 14,
                }
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                display: true,  
                color: 'rgba(166, 166, 166, 0.2)', 
                lineWidth: 1,  
                
                drawTicks: false,  
              },
              ticks: {
                stepSize: 100, 
                color: '#333', 
                font: {
                  size: 14, 
                }
              }
            }
          }
        }
      });
    }
  }
}
