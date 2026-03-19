using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddAuthorization();
builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("PeopleOpsDefault", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(options => {
        options.WithTitle("People-Ops API Gateway")
               .WithTheme(ScalarTheme.Purple);
    });
}

app.MapGet("/", () => "People-Ops API Gateway is running. Access /scalar/v1 for API docs.");

app.UseCors();
app.MapReverseProxy();

app.Run();
