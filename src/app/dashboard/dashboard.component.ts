import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  //Charts
  type = 'line';
  type2 = 'bar';
  dataa = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [{
            label: "Salse",
            data: [15, 30, 55, 45, 70, 65, 85],
            backgroundColor: "rgba(235, 22, 22, .7)",
            fill: true
        },
        {
            label: "Revenue",
            data: [99, 135, 170, 130, 190, 180, 270],
            backgroundColor: "rgba(235, 22, 22, .5)",
            fill: true
        }
    ]
    }
    dataaa = {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      datasets: [{
              label: "Salse",
              data: [15, 30, 55, 45, 70, 65, 85],
              backgroundColor: "rgba(235, 22, 22, .7)",
              fill: true
          },
          {
              label: "Revenue",
              data: [99, 135, 170, 130, 190, 180, 270],
              backgroundColor: "rgba(235, 22, 22, .5)",
              fill: true
          }
      ]
      }
           options = {
             
              
              maintainAspectRatio: true,
              scales: {
                  yAxes : [{
                      ticks : {
                          max : 90,    
                          min : 30
                      }
                  }]
              }
          };
  }