import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent extends BaseComponent implements OnInit {
  total: any;
  items: any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for (let x of this.items) {
        x.money = x.quantity * x.list_price;
        this.total += x.quantity * x.list_price;
      }
    });
  }
  clearCart() {
    this._cart.clearCart();
    alert('Xóa thành công!');
  }
  addQty(item, quantity) {
    if (item.quantity >= quantity) {
      item.quantity = quantity;
      item.money = Number.parseInt(item.quantity) * item.price;
      this._cart.addQty(item);
    } else {
      alert('Số lượng không đủ!');
    }
  }
}