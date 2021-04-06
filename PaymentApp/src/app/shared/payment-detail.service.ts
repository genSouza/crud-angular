import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor() { }

  readonly baseURL = 'https://localhost:44349/api/PaymentDetails';

  formData: PaymentDetail = new PaymentDetail();
}
