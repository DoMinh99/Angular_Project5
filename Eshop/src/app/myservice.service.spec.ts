import { TestBed } from '@angular/core/testing';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {
  let service: MyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

@Injectable({
  providedIn: 'root'
})
export class MyservieService {
  private finaldata = [];
  private apiurl = "api/";
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get(this.apiurl);
  }
}