using System.Reflection.Metadata;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using partner_document_forwarder_api.Authenticator;
using partner_document_forwarder_api.BusinessPartner;
using partner_document_forwarder_api.Client;
using partner_document_forwarder_api.Document;

string secretKey = "your-32-character-very-secret-key!!";
SymmetricSecurityKey signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter your JWT token **without** the 'Bearer ' prefix."
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});
builder.Services.AddSingleton<IAuthenticator>(new ExampleCoAuthService(secretKey));
builder.Services.AddTransient<IBusinessPartnerPersister>(c => new NoDatabaseBusinessPartnerPersister());
builder.Services.AddTransient<BusinessPartnerToolbox>(c => new BusinessPartnerToolbox());
builder.Services.AddTransient<IClientPersister>(c => new NoDatabaseClientPersister());
builder.Services.AddTransient<ClientToolbox>(c => new ClientToolbox());
builder.Services.AddTransient<IDocumentPersister>(c => new NoDatabaseDocumentPersister());
builder.Services.AddTransient<DocumentToolbox>(c => new DocumentToolbox());

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "partner_document_forwarder_api",

            ValidateAudience = true,
            ValidAudience = "partner_document_forwarder_frontend",

            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero,

            ValidateIssuerSigningKey = true,
            IssuerSigningKey = signingKey
        };
    });

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseAuthentication();
app.UseAuthorization();

app.MapPost("/login", (UserLogin login) =>
{
    return app.Services.GetRequiredService<IAuthenticator>().UserLogin(login.Username, login.Password);
});

app.MapGet("/secret", () => "You are authorized!")
   .RequireAuthorization();

app.MapGet("/businessPartners", () => {
    ICollection<BusinessPartner> businessPartners 
        = app.Services.GetRequiredService<IBusinessPartnerPersister>().GetBusinessPartners();
    Dictionary<int,string> businessPartnersDictionary
        = app.Services.GetRequiredService<BusinessPartnerToolbox>().MakeDictionary(businessPartners);
    return businessPartnersDictionary;
}).RequireAuthorization();

app.MapGet("/clients", () => {
    ICollection<Client> clients
        = app.Services.GetRequiredService<IClientPersister>().GetClients();
    Dictionary<int, string> clientsDictionary
        = app.Services.GetRequiredService<ClientToolbox>().MakeDictionary(clients);
    return clientsDictionary;
}).RequireAuthorization();

app.MapGet("/documents/{businessPartnerId}", (int businessPartnerId) => {
    ICollection<partner_document_forwarder_api.Document.Document> documents
        = app.Services.GetRequiredService<IDocumentPersister>().GetDocuments()
        .Where(x => x.businessPartnerId == businessPartnerId)
        .ToList();
    Dictionary<int, string> documentsDictionary
        = app.Services.GetRequiredService<DocumentToolbox>().MakeDictionary(documents);
    return documentsDictionary;
}).RequireAuthorization();

app.MapGet("/document/{documentId}", (int documentId) => {
    if (documentId == 1)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else if (documentId == 2)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else if (documentId == 3)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else if (documentId == 4)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else if (documentId == 5)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else if (documentId == 6)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else if (documentId == 7)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else if (documentId == 8)
    {
        var imagePath = "wwwroot/images/example.png"; // adjust path as needed
        var contentType = "image/png"; // or "image/jpeg", etc.
        return Results.File(imagePath, contentType);
    }
    else {
        return Results.NoContent();
    }
}).RequireAuthorization();

app.MapGet("/censored/{documentId}", (int documentId) => {
    //Send the selected image to the AI for censoring.
}).RequireAuthorization();

app.UseHttpsRedirection();

app.Run();

record UserLogin(string Username, string Password);