namespace partner_document_forwarder_api.Document
{
    /// <summary>
    /// The DocumentToolbox contains a variety of widely used helper functions for 
    /// working with Document information. 
    /// </summary>
    public class DocumentToolbox
    {
        public Dictionary<int, string> MakeDictionary(ICollection<Document> documents)
        {
            Dictionary<int, string> dropdown = new Dictionary<int, string>();
            foreach (Document document in documents)
            {
                dropdown.Add(document.id, document.name);
            }
            return dropdown;
        }
    }
}
