namespace partner_document_forwarder_api.Document
{
    /// <summary>
    /// An IDocumentPersister provides CRUD functionality for long-term storage of Documents.
    /// </summary>
    public interface IDocumentPersister
    {
        ICollection<Document> GetDocuments();
    }

    public class NoDatabaseDocumentPersister : IDocumentPersister
    {
        public ICollection<Document> GetDocuments() {
            return new List<Document>() { 
                new Document(){ 
                    name = "Gas Usage Summary",
                    id = 1,
                    businessPartnerId = 1
                },
                new Document(){
                    name = "Stormwater Citations",
                    id = 2,
                    businessPartnerId = 1
                },
                new Document(){
                    name = "Payroll Annualization",
                    id = 3,
                    businessPartnerId = 1
                },
                new Document(){
                    name = "Land Use Proposal",
                    id = 4,
                    businessPartnerId = 2
                },
                new Document(){
                    name = "Maintenance Schedule",
                    id = 5,
                    businessPartnerId = 2
                },
                new Document(){
                    name = "Legal Fee Adjustment",
                    id = 6,
                    businessPartnerId = 2
                },
                new Document(){
                    name = "Travel Itinerary",
                    id = 7,
                    businessPartnerId = 3
                },
                new Document(){
                    name = "Lift Forecast",
                    id = 8,
                    businessPartnerId = 3
                },
            };
        }
    }
}
