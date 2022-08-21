import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersObservable?: Observable<any[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.ordersObservable = this.httpClient.get<any[]>("assets/data/orders.json");
  }

}
