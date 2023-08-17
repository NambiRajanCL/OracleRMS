void FactFind.downloadSignDocPDF(int ZSD_ID)
{
	getZohoSignDocument = Zoho_Sign_Documents[ID == ZSD_ID];
	getLead = Leads[ZCRM_ID == getZohoSignDocument.CRM_ID.toString()];
	recDet = zoho.crm.getRecordById("Leads_Life",getZohoSignDocument.CRM_ID);
	//recDet = zoho.crm.searchRecords("Leads_Life","(Client_1_Email:equals:" + mailId + ")");
	info recDet;
	leadID = recDet.get("id");
	folderID = recDet.get("WorkDrive_Folder_ID");
	folderLink = recDet.get("Workdrive_URL");
	getAccessToken = invokeurl
	[
		url :"https://accounts.zoho.com/oauth/v2/token?client_id=1000.DOF5WNBJ00YTV16ZS1UY8MDIB2U54J&client_secret=ec37140313ca7743e6c1b3fcc3f069232cdebaa8e6&refresh_token=1000.7c2fa60bf1f25a10f6af216d3e5d7c3e.9a4844aeb58f2eca24be75b66177315c&grant_type=refresh_token"
		type :POST
	];
	info getAccessToken;
	headerMap = Map();
	headerMap.put("Authorization","Zoho-oauthtoken " + getAccessToken.get("access_token"));
	downLoadUrl = invokeurl
	[
		url :"https://sign.zoho.com/api/v1/requests/" + getZohoSignDocument.Request_ID + "/pdf"
		type :GET
		headers:headerMap
	];
	//	info downLoadUrl;
	//uploading file to ZFS System
	//leadID = create_rec.get("data").get(0).get("details").get("id");
	//creating folder
	//createFolder = zoho.workdrive.createFolder(leadID.tostring(),"2gpa0cb24b1d7e9d74bad807350f51b537b75","workdrive_oauth_connection");
	//uploading file
	FileName = getLead.Sequence_Number + "_" + getLead.First_Name + "_" + getLead.Last_Name + "_" + getLead.ZCRM_ID + "_SIGNED.pdf";
	response = zoho.workdrive.uploadFile(downLoadUrl,folderID,FileName,false,"workdrive_oauth_connection");
	//info "createFolder " + createFolder;
	//updating workdrive url
	//	factFindrec.WorkDrive_URL=response.get("data").get(0).get("attributes").get("permalink");
	URL_Link = folderLink;
	Name = "Ananth";
	info "URL ---> " + URL_Link;
	//Content-Type:application/pdf
	//headers: <expression>
	//	connection: <connection>
}
