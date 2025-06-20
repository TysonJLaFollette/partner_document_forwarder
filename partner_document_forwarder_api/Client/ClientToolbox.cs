namespace partner_document_forwarder_api.Client
{
    /// <summary>
    /// The BusinessPartnerToolbox contains a variety of widely used helper functions for 
    /// working with BusinessPartner information. 
    /// </summary>
    public class ClientToolbox
    {
        public Dictionary<int, string> MakeDictionary(ICollection<Client> businessPartners)
        {
            Dictionary<int, string> dropdown = new Dictionary<int, string>();
            foreach (Client partner in businessPartners)
            {
                dropdown.Add(partner.id, partner.name);
            }
            return dropdown;
        }
    }
}
