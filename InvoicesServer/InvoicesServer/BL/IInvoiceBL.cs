using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using System.Data;
using Models;

namespace BL
{
    public interface IInvoiceBL
    {

        Task<InvoiceTableResponseModel> GetInvoices(int page, int pageLength);
        Task<Entities.InvoiceEntity> UpdateInvoice(int id,Entities.InvoiceEntity invoice);
        Task<Entities.InvoiceEntity> AddInvoice(Entities.InvoiceEntity invoice);
        Task<bool> DeletedInvoice(int id);
    }
}
