import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [],
})
export class PaymentDetailFormComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {

    if(this.service.formData.paymentDetailId == 0) {
      this.insertRecord(form);
    }else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.toast.success('Data saved!', 'Payment Detail Register');
      },
      (err) => {
        this.toast.error(
          `An error happened: ${err}`,
          'Payment Detail Register'
        );
      }
    );
  }

   updateRecord(form: NgForm){
    this.service.putPaymentDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toast.info('Data saved!', 'Payment Detail Register');
      },
      (err) => {
        this.toast.error(
          `An error happened: ${err}`,
          'Payment Detail Register'
        );
      }
    );
   }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
