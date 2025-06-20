namespace partner_document_forwarder_api.Client
{
    /// <summary>
    /// An IClientPersister provides CRUD functionality for long-term storage of Clients.
    /// </summary>
    public interface IClientPersister
    {
        ICollection<Client> GetClients();
    }

    public class NoDatabaseClientPersister : IClientPersister
    {
        public ICollection<Client> GetClients() {
            return new List<Client>() { 
                new Client(){ 
                    name = "Elizabeth Yan",
                    id = 1
                },
                new Client(){
                    name = "Manshukar Haljoze",
                    id = 2
                },
                new Client(){
                    name = "Isaac Vuukar",
                    id = 3
                }
            };
        }
    }
}
