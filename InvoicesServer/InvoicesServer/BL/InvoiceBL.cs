using AutoMapper;
using DAL;
using Entities;
using Microsoft.EntityFrameworkCore;
using Models;
namespace BL
{
    public class InvoiceBL : IInvoiceBL
    {
        private readonly IMapper _mapper;

        public InvoiceBL(IMapper mapper)
        {
            _mapper = mapper;
        }
        public async Task<InvoiceEntity> AddInvoice(InvoiceEntity invoice)
        {
            using (var db = new InvoiceDBContext())
            {
                var newInvoice = _mapper.Map<Invoice>(invoice);
                await db.Invoices.AddAsync(newInvoice);
                await db.SaveChangesAsync();
                return _mapper.Map<InvoiceEntity>(newInvoice);
            }
        }

        public async Task<bool> DeletedInvoice(int id)
        {
            using (var db = new InvoiceDBContext())
            {
                var invoice = await db.Invoices.FindAsync(id);
                db.Remove(invoice);
                await db.SaveChangesAsync();
                return true;
            }
        }

        public async Task<InvoiceTableResponseModel> GetInvoices(int page, int pageLength)
        {
            var invoiceTable = new InvoiceTableResponseModel();
            using (var db = new InvoiceDBContext())
            {
                page = page == 1 ? 0 : (page - 1) * pageLength;
                var inList = db.Invoices.Include("InvoiceStatus").Skip(page).Take(pageLength).ToList();
                invoiceTable.Invoices= _mapper.Map<List<InvoiceEntity>>(inList);
                invoiceTable.Total = db.Invoices.Count();


                return invoiceTable;           }
        }

        public async Task<InvoiceEntity> UpdateInvoice(int id, InvoiceEntity invoice)
        {
            using (var db = new InvoiceDBContext())
            {
                var upInvoice = await db.Invoices.FindAsync(id);
                upInvoice.UpdatedDate = DateTime.Now;
                upInvoice.StatusId = invoice.StatusId;
                upInvoice.CustomerName = invoice.CustomerName;
                await db.SaveChangesAsync();
                return _mapper.Map<InvoiceEntity>(upInvoice);
            }
        }
    }
}
