import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environments/environment';
import { Invoice } from 'app/models/invoice';
import { InvoiceStatus } from 'app/models/invoiceStatus';
const _api = environment.api+ 'invoiceStatus/';
@Injectable({
  providedIn: 'root'
})
export class InvoiceStatusService {

  constructor(private http: HttpClient) { }
  getInvoiceStatus() {
    return this.http.get<InvoiceStatus[]>(_api + 'getInvoiceStatusList');

  }
 
}
