void CommissionTransactions.uploadingSingleTransactionFile(int recID)
{
	transactionRecID = Commission_Transactions[ID == recID];
	policyCRMID = Policies[ID == transactionRecID.Policies].Zoho_CRM_ID;
	commissionData = Commission[ID == transactionRecID.Commission];
	info commissionData.Commission_Folder_ID;
	if(commissionData.Layout != "Trailing/Bonus Commissions")
	{
		if(commissionData.Commission_Folder_ID != null && commissionData.Commission_Folder_ID != "")
		{
			urlLink = "https://creator.zoho.com/api/v2/johnferraro1/oracle-life-insurance/report/Commission_Transactions_Report/" + recID + "/File_upload/download";
			getFile = invokeurl
			[
				url :urlLink
				type :GET
				connection:"creator"
			];
			uploadFile = zoho.workdrive.uploadFile(getFile,commissionData.Commission_Folder_ID,transactionRecID.Transaction_ID + ".pdf",false,"creator");
			info uploadFile;
			if(uploadFile.contains("errors") == false)
			{
				fileURL = uploadFile.get("data").get(0).get("attributes").get("Permalink");
				info fileURL;
				fileID = uploadFile.get("data").get(0).get("attributes").get("resource_id");
				transactionRecID.File_Url=fileURL;
				transactionRecID.File_ID=fileID;
			}
		}
	}
}
