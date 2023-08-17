void CRM.commissionfileMoveToFolder(int recordID)
{
	//"https://<base_url>/api/v2/<account_owner_name>/<app_link_name>/report/<report_link_name>/<record_ID>/<field_link_name>/download"
	urlLink = "https://creator.zoho.com/api/v2/johnferraro1/oracle-life-insurance/report/All_Commissions/" + recordID + "/Upload_File/download";
	getFile = invokeurl
	[
		url :urlLink
		type :GET
		connection:"creator"
	];
	info getFile;
	getRecDetails = Commission[ID == recordID];
	policyDetail = Policies[ID == getRecDetails.Policy];
	if(policyDetail.Zoho_CRM_ID != null && policyDetail.Zoho_CRM_ID != "")
	{
		policyCrmDetail = zoho.crm.getRecordById("Policies_Life",policyDetail.Zoho_CRM_ID.toLong());
		info policyCrmDetail;
		info policyCrmDetail.get("Commission_Folder_ID");
		if(policyCrmDetail.get("Commission_Folder_ID") != null && policyCrmDetail.get("Commission_Folder_ID") != "")
		{
			uploadFile = zoho.workdrive.uploadFile(getFile,policyCrmDetail.get("Commission_Folder_ID"),getRecDetails.Commission_Name + ".pdf",false,"creator");
			info uploadFile;
		}
	}
}
