import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<ejs-chart id='chart-container'></ejs-chart>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'genzstore'; status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  data:any;
  constructor(private http: HttpClient){
  //get request from web api
    this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(data => {
      this.data = data;
    
          }, error => console.error(error));
        }

}
