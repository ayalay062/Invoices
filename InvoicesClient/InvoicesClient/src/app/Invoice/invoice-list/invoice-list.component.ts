import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Invoice } from 'app/models/invoice';
import { InvoiceService } from 'app/services/invoice.service';
import { SetInvoiceComponent } from '../set-invoice/set-invoice.component';
import { ViewInvoiceComponent } from '../view-invoice/view-invoice.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  dataSource: MatTableDataSource<Invoice> | undefined;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator | null;
  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {


  }
  filterName = '';
  page = 1;
  pageLength = 5;
  displayedColumns: string[] = [
    'id',
    'customerName',
    'createdDate',
    'amount',
    'status',
    'actions',
  ];
  totalLength = 0;


  ngOnInit(): void {
    this.getInvoices(this.page);
  }
  addInvoice() {
    this.openSetInvoiceModal();
  }
  editInvoice(invoice: Invoice) {
    this.openSetInvoiceModal(invoice);
  }
  viewInvoice(invoice: Invoice) {
    const dialogRef = this.dialog.open(ViewInvoiceComponent, {
      data: { invoice },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openSetInvoiceModal(invoice?: Invoice) {
    const dialogRef = this.dialog.open(SetInvoiceComponent, {
      data: { invoice },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.getInvoices(this.page);
    });
  }
  deleteInvoice(id: number) { }
  getInvoices(page: number) {
    this.invoiceService.getInvoices(page, this.pageLength).subscribe(
      x => {
        this.dataSource = new MatTableDataSource(x.invoices)
        this.totalLength = x.total;
      })
  }
  getInvoicesE(pageE: PageEvent) {
    this.page = pageE.pageIndex + 1;
   this.getInvoices(this.page);
  }
}
