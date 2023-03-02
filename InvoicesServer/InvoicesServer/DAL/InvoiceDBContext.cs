using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class InvoiceDBContext : DbContext
    {
        public DbSet<Invoice> Invoices { get; set; }

        public DbSet<InvoiceStatus> InvoiceStatus { get; set; }




        public InvoiceDBContext(DbContextOptions<InvoiceDBContext> options) : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }
        public InvoiceDBContext() : base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                var connectionString = configuration.GetConnectionString("InvoiceDBConnection");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }
    }
}
