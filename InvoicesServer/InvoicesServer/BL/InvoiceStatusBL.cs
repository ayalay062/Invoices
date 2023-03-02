using AutoMapper;
using DAL;
using Entities;

namespace BL
{
    public class InvoiceStatusBL : IInvoiceStatusBL
    {
        private readonly IMapper _mapper;

        public InvoiceStatusBL(IMapper mapper)
        {
            _mapper = mapper;
        }

        public async Task<List<InvoiceStatusEntity>> GetInvoiceStatusList()
        {
            using (var db = new InvoiceDBContext())
            {
                var inList = db.InvoiceStatus.ToList();
                return _mapper.Map<List<InvoiceStatusEntity>>(inList);
            }
        }


    }
}
