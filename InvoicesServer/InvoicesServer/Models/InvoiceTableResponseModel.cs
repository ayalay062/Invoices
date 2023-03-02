using Entities;

namespace Models
{
    public class InvoiceTableResponseModel
    {
        public List<InvoiceEntity> Invoices { get; set; }
        public int Total { get; set; }
    }
}
