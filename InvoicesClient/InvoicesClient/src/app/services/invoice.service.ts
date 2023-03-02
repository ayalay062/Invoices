import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environments/environment';
import { Invoice } from 'app/models/invoice';
import { InvoiceTable } from 'app/models/invoiceTable';
const _api = environment.api + 'invoice/';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }
  getInvoices(page: number, pageLength: number) {
    return this.http.post<InvoiceTable>(_api + 'GetInvoicesList', {
      page, pageLength
    })

  }
  addInvoice(invoice: Invoice) {
    return this.http.post<Invoice>(_api +
      'AddInvoice', invoice)

  }
  editInvoice(invoice: Invoice) {
    return this.http.put<Invoice>(_api +
      'UpdateInvoice/' + invoice.id, invoice)

  }
  removeInvoice(invoiceId: number) {
    return this.http.delete<Invoice>(_api +
      'DeletedInvoice/' + invoiceId)

  }
}
