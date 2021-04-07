import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from './../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
})
export class PaymentDetailsComponent implements OnInit {


  constructor(public service: PaymentDetailService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this?')) {
      this.service.deletePaymentDetail(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toast.warning('Data deleted!', 'Payment Detail Register');
        },
        (err) => {
          this.toast.error(
            `An error happened: ${err}`,
            'Payment Detail Register'
          );
        }
      );
    }
  }
}
