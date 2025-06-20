namespace partner_document_forwarder_api.BusinessPartner
{
    /// <summary>
    /// The BusinessPartnerToolbox contains a variety of widely used helper functions for 
    /// working with BusinessPartner information. 
    /// </summary>
    public class BusinessPartnerToolbox
    {
        public Dictionary<int, string> MakeDictionary(ICollection<BusinessPartner> businessPartners)
        {
            Dictionary<int, string> dropdown = new Dictionary<int, string>();
            foreach (BusinessPartner partner in businessPartners)
            {
                dropdown.Add(partner.id, partner.name);
            }
            return dropdown;
        }
    }
}
