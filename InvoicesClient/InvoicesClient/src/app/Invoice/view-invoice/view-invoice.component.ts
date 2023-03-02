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
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ViewInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }


  ngOnInit(): void {
  }
  close() {
    if (this.dialogRef && this.dialogRef.close) {
      this.dialogRef.close({ data: 'Order' });
    }
  }
}
