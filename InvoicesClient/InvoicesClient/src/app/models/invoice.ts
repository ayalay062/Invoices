import { InvoiceStatus } from "./invoiceStatus";

export interface Invoice {
    id: number;
    customerName: string;
    amount: number;
    createdDate: string;
    updatedDate: string;
    statusId: number;
    invoiceStatus: InvoiceStatus;
  
}
