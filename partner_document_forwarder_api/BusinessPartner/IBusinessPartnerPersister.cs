namespace partner_document_forwarder_api.BusinessPartner
{
    /// <summary>
    /// An IBusinessPartnerPersister provides CRUD functionality for long-term storage of BusinessPartners.
    /// </summary>
    public interface IBusinessPartnerPersister
    {
        ICollection<BusinessPartner> GetBusinessPartners();
    }

    public class NoDatabaseBusinessPartnerPersister : IBusinessPartnerPersister
    {
        public ICollection<BusinessPartner> GetBusinessPartners() {
            return new List<BusinessPartner>() { 
                new BusinessPartner(){ 
                    name = "Eastman Genetics",
                    id = 1
                },
                new BusinessPartner(){
                    name = "Beltotech",
                    id = 2
                },
                new BusinessPartner(){
                    name = "The Carl Veiss Institute",
                    id = 3
                }
            };
        }
    }
}
