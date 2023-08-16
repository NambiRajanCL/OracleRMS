void FactFind.getZohoSignDocument(int RecordID)
{
	getDocumentRec = Zoho_Sign_Documents[ID == RecordID];
	getSignDoc = zoho.sign.getDocumentById(getDocumentRec.Request_ID.toLong(),"zohosignconnection");
	status = getSignDoc.get("requests").get("actions");
	getDocumentRec.Action_Status=status.get(0).get("action_status");
	if(status.get(0).get("action_status") == "SIGNED")
	{
		thisapp.FactFind.downloadSignDocPDF(getDocumentRec.ID);
		info "Yes";
	}
}
