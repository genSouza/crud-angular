import { PaymentDetailService } from './../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) {}


  ngOnInit(): void {
    this.service.refreshList();
  }


}
