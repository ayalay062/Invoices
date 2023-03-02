import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validation } from 'app/components/_helpers/validations';
import { Invoice } from 'app/models/invoice';
import { InvoiceStatus } from 'app/models/invoiceStatus';
import { InvoiceService } from 'app/services/invoice.service';
import { InvoiceStatusService } from 'app/services/invoiceStatus.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-set-invoice',
  templateUrl: './set-invoice.component.html',
  styleUrls: ['./set-invoice.component.scss']
})
export class SetInvoiceComponent implements OnInit {
  form: FormGroup | undefined;
  statusList: Observable<InvoiceStatus[]> = new Observable();
  constructor(private dialogRef: MatDialogRef<SetInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private invoiceStatusService: InvoiceStatusService) { }


  ngOnInit(): void {
    const invoiceData = <Invoice>this.data.invoice;
    this.form = this.fb.group({
      id: this.fb.control(invoiceData ? invoiceData.id : '0'),
      customerName: this.fb.control(invoiceData ? invoiceData.customerName : '', [Validators.required, Validators.minLength(2)]),
      amount: this.fb.control((invoiceData ? invoiceData.amount : ''),
        Validators.compose([
          Validators.required,

          Validators.pattern(
            validation.resources.regularExpressions.numbers
          ),
        ])),
      createdDate: this.fb.control(invoiceData ? new Date(invoiceData.createdDate).toISOString().substring(0, 10)
        : new Date().toISOString().substring(0, 10),
        [Validators.required]),
      statusId: this.fb.control(invoiceData ? invoiceData.statusId : '', [Validators.required, Validators.minLength(2)]),
 
 
    });
    this.statusList = this.invoiceStatusService.getInvoiceStatus();
  }
  close() {
    if (this.dialogRef && this.dialogRef.close) {
      this.dialogRef.close({ data: 'Order' });
    }
  }
  addInvoice(invoice: Invoice) {
    this.invoiceService.addInvoice(invoice).subscribe(res => {

      Swal.fire('', 'Success update invoice ', 'success');
      this.close();

    },
      (err) => {

        Swal.fire('', "Failed to update invoice", 'error');


      });
  }
  updateInvoice(invoice: Invoice) {
    this.invoiceService.editInvoice(invoice).subscribe(res => {

      Swal.fire('', 'Success update invoice ', 'success');
      this.close();

    },
      (err) => {

        Swal.fire('', "Failed to update invoice", 'error');


      });
  }
  save() {
    const invoice = <Invoice>this.form?.value;
    invoice.createdDate = new Date(invoice.createdDate).toISOString().toString()
      .substring(0, 10);

    if (this.data.invoice) {
      this.updateInvoice(invoice);
    }
    else {
      this.addInvoice(invoice);

    }
  }
}
