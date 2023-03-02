using AutoMapper;
using DAL;
namespace Entities
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
           
            CreateMap<InvoiceEntity, Invoice>();
            CreateMap<Invoice, InvoiceEntity>();


            CreateMap<InvoiceStatusEntity, InvoiceStatus>();
            CreateMap<InvoiceStatus, InvoiceStatusEntity>();
            
        }
    }
}