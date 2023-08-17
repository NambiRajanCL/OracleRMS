void CommissionTransactions.uploadingTransactionFile(int recID)
{
	commissionRecID = Commission[ID == recID];
	policyCRMID = Policies[ID == commissionRecID.Policy].Zoho_CRM_ID;
	getCommissionFolderID = zoho.crm.getRecordById("Policies_Life",policyCRMID.toLong());
	if(getCommissionFolderID.contains("id"))
	{
		commmissionFolderID = getCommissionFolderID.get("Commission_Folder_ID");
		if(commissionRecID.Layout != "Trailing/Bonus Commissions")
		{
			createTransactionFolder = zoho.workdrive.createFolder(commissionRecID.Commission_Name,commmissionFolderID,"creator");
		}
		else
		{
			createTransactionFolder = zoho.workdrive.createFolder(commissionRecID.Commission_Name,"lmvqucb92a4b2a902414e8ccfe27573b2a7a1","creator");
		}
		if(createTransactionFolder.contains("errors") == false)
		{
			info createTransactionFolder;
			createTransactionFolderID = createTransactionFolder.get("data").get("id");
			for each  subRec in commissionRecID.Transaction
			{
				urlLink = "https://creator.zoho.com/api/v2/johnferraro1/oracle-life-insurance/report/Commission_Transactions_Report/" + subRec.ID + "/File_upload/download";
				getFile = invokeurl
				[
					url :urlLink
					type :GET
					connection:"creator"
				];
				fileName = subRec.File_upload;
				uploadFile = zoho.workdrive.uploadFile(getFile,createTransactionFolderID,fileName,false,"creator");
				if(uploadFile.contains("errors") == false)
				{
					fileURL = uploadFile.get("data").get(0).get("attributes").get("Permalink");
					info fileURL;
					fileID = uploadFile.get("data").get(0).get("attributes").get("resource_id");
					subRec.File_Url=fileURL;
					subRec.File_ID=fileID;
				}
			}
			if(createTransactionFolderID != null && createTransactionFolderID != "")
			{
				commissionRecID.Commission_Folder_ID=createTransactionFolderID;
			}
		}
	}
}
