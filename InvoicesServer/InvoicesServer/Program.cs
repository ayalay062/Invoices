using AutoMapper;
using BL;
using Entities;
using Microsoft.EntityFrameworkCore;

var invoiceCors = "invoiceCors";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddControllers().AddNewtonsoftJson();
builder.Services.AddDbContext<DAL.InvoiceDBContext>((provider, options) =>
{
    IConfiguration config = provider.GetRequiredService<IConfiguration>();
    string connectionString = config.GetConnectionString("InvoiceDBConnection");
    options.UseSqlServer(connectionString);
});
var mapperConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MappingProfile());
});

IMapper mapper = mapperConfig.CreateMapper();
builder.Services.AddSingleton(mapper);
builder.Services.AddScoped<IInvoiceBL, InvoiceBL>();
builder.Services.AddScoped<IInvoiceStatusBL, InvoiceStatusBL>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: invoiceCors,
                      policy =>
                      {
                          policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                      });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseCors(invoiceCors);
app.UseAuthorization();

app.MapRazorPages();
app.MapControllers();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
app.Run();
