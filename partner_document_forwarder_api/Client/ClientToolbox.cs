namespace partner_document_forwarder_api.Client
{
    /// <summary>
    /// The ClientToolbox contains a variety of widely used helper functions for 
    /// working with Client information. 
    /// </summary>
    public class ClientToolbox
    {
        public Dictionary<int, string> MakeDictionary(ICollection<Client> clients)
        {
            Dictionary<int, string> dropdown = new Dictionary<int, string>();
            foreach (Client client in clients)
            {
                dropdown.Add(client.id, client.name);
            }
            return dropdown;
        }
    }
}
