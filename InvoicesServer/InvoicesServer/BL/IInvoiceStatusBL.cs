using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using System.Data;

namespace BL
{
    public interface IInvoiceStatusBL
    {

        Task<List<Entities.InvoiceStatusEntity>> GetInvoiceStatusList();
       
    }
}
