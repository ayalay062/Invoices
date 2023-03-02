using Microsoft.AspNetCore.Mvc;
using System.Data;
using BL;
using Models;

namespace WebDynamicTableSpServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : ControllerBase

    {
        private IInvoiceBL _invoiceBL;

        public InvoiceController(IInvoiceBL invoiceBL)
        {

            _invoiceBL = invoiceBL;
        }

        [HttpPost]
        [Route("GetInvoicesList")]
        public async Task<InvoiceTableResponseModel> GetInvoicesList(InvoiceRequestModel requestModel)
        {
            return await _invoiceBL.GetInvoices(requestModel.Page, requestModel.PageLength);
        }
        [HttpPost]
        [Route("AddInvoice")]
        public async Task<Entities.InvoiceEntity> AddInvoice(Entities.InvoiceEntity invoiceEntity)
        {
            return await _invoiceBL.AddInvoice(invoiceEntity);
        }
        [HttpPut]
        [Route("UpdateInvoice/{id}")]
        public async Task<Entities.InvoiceEntity> UpdateInvoice(int id, Entities.InvoiceEntity invoiceEntity)
        {
            return await _invoiceBL.UpdateInvoice(id, invoiceEntity);
        }
        [HttpPut]
        [Route("DeletedInvoice/{id}")]
        public async Task<bool> DeletedInvoice(int id)
        {
            return await _invoiceBL.DeletedInvoice(id);
        }
    }

}