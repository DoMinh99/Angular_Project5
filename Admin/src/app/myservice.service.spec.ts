import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) { }
  getData() {
     return this.httpClient.get(this.apiurl);
  }
}