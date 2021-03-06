import { Component, Injector, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  
  constructor(injector: Injector) {
  super(injector);
  }

  category: any;
  ngOnInit(): void {
    this._api
      .get('api/itemgroup/get-menu')
      .takeUntil(this.unsubscribe)
      .subscribe((res) => {
        this.category = res;
      });
    }
}


