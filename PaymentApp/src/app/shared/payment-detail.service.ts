import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  readonly baseURL = 'https://localhost:44349/api/PaymentDetails';

  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => this.list = res as PaymentDetail[]);
  }
  // refreshList(): Observable<any[]> {
  //   return this.http
  //     .get<any[]>(this.baseURL)
  //     // .toPromise()
  //     // .then((res) => (this.list = res as PaymentDetail[]));
  // }
}
