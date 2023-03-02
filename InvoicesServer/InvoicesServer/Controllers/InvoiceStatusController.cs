using Microsoft.AspNetCore.Mvc;
using System.Data;
using BL;
using Models;

namespace WebDynamicTableSpServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceStatusController : ControllerBase

    {
        private IInvoiceStatusBL _invoiceStatusBL;

        public InvoiceStatusController(IInvoiceStatusBL invoiceStatusBL)
        {

            _invoiceStatusBL = invoiceStatusBL;
        }

        [HttpGet]
        [Route("GetInvoiceStatusList")]
        public async Task<List<Entities.InvoiceStatusEntity>> GetInvoiceStatusList()
        {
            return await _invoiceStatusBL.GetInvoiceStatusList();
        }
      
    }

}