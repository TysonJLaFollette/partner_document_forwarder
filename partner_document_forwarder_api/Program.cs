//using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;

var builder = WebApplication.CreateBuilder(args);

IdentityModelEventSource.ShowPII = true;
IdentityModelEventSource.LogCompleteSecurityArtifact = true;

var secretKey = "your-32-character-very-secret-key!!";
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
var credentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });

    // Add JWT Authentication
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter 'Bearer' [space] and then your valid JWT token.\n\nExample: Bearer abc123xyz"
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

// Add JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Events = new JwtBearerEvents
        {
            OnAuthenticationFailed = context =>
            {
                Console.WriteLine($"Authentication failed: {context.Exception}");
                return Task.CompletedTask;
            },
            OnMessageReceived = context =>
            {
                var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
                if (!string.IsNullOrEmpty(token))
                {
                    var handler = new JsonWebTokenHandler();
                    var jwt = handler.ReadToken(token);
                    //Console.WriteLine($"Incoming JWT kid: {jwt.Header.Kid ?? "(none)"}");
                }
                return Task.CompletedTask;
            },
        };
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "partner_document_forwarder_api",

            ValidateAudience = true,
            ValidAudience = "partner_document_forwarder_frontend",

            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = signingKey,
            IssuerSigningKeys = null,

            ClockSkew = TimeSpan.Zero
        };
        Console.WriteLine("IssuerSigningKey: " + options.TokenValidationParameters.IssuerSigningKey?.KeyId);
        Console.WriteLine("IssuerSigningKeys: " + options.TokenValidationParameters.IssuerSigningKeys?.ToList().ToString());
    });

// Add Authorization
builder.Services.AddAuthorization();

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

// ? Add middleware
app.UseAuthentication();
app.UseAuthorization();

// Public endpoint (login)
app.MapPost("/login", (UserLogin login) =>
{
    if (login.Username == "admin" && login.Password == "password")
    {
        //var claims = new[]
        //{
        //    new Claim(ClaimTypes.Name, login.Username),
        //};

        //var token = new JwtSecurityToken(
        //    issuer: "partner_document_forwarder_api",
        //    audience: "partner_document_forwarder_frontend",
        //    claims: claims,
        //    expires: DateTime.UtcNow.AddHours(1),
        //    signingCredentials: credentials
        //);

        //var tokenString = new JwtSecurityTokenHandler().WriteToken(token);



        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity([
                new Claim(JwtRegisteredClaimNames.Sub, "me")
            ]),
            Expires = DateTime.UtcNow.AddMinutes(60),
            SigningCredentials = credentials,
            Issuer = "partner_document_forwarder_api",
            Audience = "partner_document_forwarder_frontend"
        };

        var handler = new JsonWebTokenHandler();
        string token = handler.CreateToken(tokenDescriptor);

        return Results.Ok(new { token = token });
    }

    return Results.Unauthorized();
});

// Protected endpoint
app.MapGet("/secret", () => "You are authorized!")
   .RequireAuthorization();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();

record UserLogin(string Username, string Password);