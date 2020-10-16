import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EShop'; 
  public persondata = [];
  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
     this.myservice.getData().subscribe((data) => {
        Object.keys(data).forEach(key => {
          this.persondata.push(data[key]);
        });
        console.log(this.persondata);
     });
  }
}