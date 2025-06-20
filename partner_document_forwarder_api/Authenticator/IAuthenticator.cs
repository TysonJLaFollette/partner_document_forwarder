using System.Net;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;

namespace partner_document_forwarder_api.Authenticator
{
    /// <summary>
    /// The IAuthenticator provides a single interface for all authx functionality for users and
    /// also for authenticating with other systems, such as company SSO and the AI image editing API.
    /// </summary>
    public interface IAuthenticator
    {
        IResult UserLogin(string username, string password);
        //IResult AIServiceLogin(string secret);
    }
    public class ExampleCoAuthService :IAuthenticator
    {
        public string secretKey;
        public SymmetricSecurityKey signingKey;
        public SigningCredentials credentials;

        public ExampleCoAuthService(string secretKey) {
            this.secretKey = secretKey;
            this.signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            this.credentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
        }

        public IResult UserLogin(string username, string password) {
            ExternalAuthResult externalAuthResult = TestCredentials(username, password);

            if (externalAuthResult.isAuthenticated)
            {
                string token = CreateToken();
                return Results.Ok(new { token = token });
            }

            return Results.Unauthorized();
        }

        public ExternalAuthResult TestCredentials(string username, string password)
        {
            //In a real app, this function would contact a remote auth service for single sign on.
            if (username == "you-should" && password == "hire-me")
            {
                return new ExternalAuthResult()
                {
                    username = username,
                    userId = 1,
                    isAuthenticated = true
                };
            }
            else
            {
                return new ExternalAuthResult()
                {
                    username = username,
                    userId = null,
                    isAuthenticated = false
                };
            }
        }

        private string CreateToken()
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity([
                        new Claim(JwtRegisteredClaimNames.Sub, "admin")
                    ]),
                Expires = DateTime.UtcNow.AddMinutes(60),
                SigningCredentials = credentials,
                Issuer = "partner_document_forwarder_api",
                Audience = "partner_document_forwarder_frontend"
            };

            var handler = new JsonWebTokenHandler();
            string token = handler.CreateToken(tokenDescriptor);

            return token;
        }
    }

    public class ExternalAuthResult
    {
        public string username;
        public int? userId;
        public bool isAuthenticated;
    }
}
