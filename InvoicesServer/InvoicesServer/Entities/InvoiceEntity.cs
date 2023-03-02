using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class InvoiceEntity
    {
        public int Id { get; set; }

        public string CustomerName { get; set; }

        public decimal Amount { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }

        

        public int StatusId { get; set; }

        public InvoiceStatusEntity? InvoiceStatus { get; set; }
    }
}
