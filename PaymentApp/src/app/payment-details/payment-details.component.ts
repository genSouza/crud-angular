import { PaymentDetailService } from './../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) {}


  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

}
