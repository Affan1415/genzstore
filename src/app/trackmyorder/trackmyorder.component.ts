import { Component } from '@angular/core';

@Component({
  selector: 'app-trackmyorder',
  templateUrl: './trackmyorder.component.html',
  styleUrls: ['./trackmyorder.component.css']
})
export class TrackMyOrderComponent {
  trackingId: string='';
  orderStatus: string='';
  showResult: boolean = false;

  onSubmit() {
    // TODO: Implement API call to get order status using tracking ID
    // For now, we just set the order status to a hardcoded value
    this.orderStatus = 'Order shipped';
    this.showResult = true;
  }
}
