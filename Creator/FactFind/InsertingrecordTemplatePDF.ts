void FactFind.InsertingrecordTemplatePDF(int recid)
{
	factFindrec = Leads[ID == recid];
	//info createFolder.get("data").get("id");
	downLoadUrl = "https://creatorapp.zohopublic.com/johnferraro1/oracle-life-insurance/record-pdf/All_Leads_Report/" + recid + "/test/vPpYCpW8f8nvBgrknXkAsPbgf0TVqNmVgFFZPq1seaJ9KGQOCstbAfzA88rDCngNngRu7Fys6szh7S5JJakxgAdXZKzT8qdehsQT";
	//	downLoadUrl = "https://creatorapp.zoho.com/export/johnferraro1/oracle-life-insurance/pdf/Fact_Find_Test/?RecID=" + recid + "&isc5page=true";
	//	downLoadUrl = "https://creatorapp.zohopublic.com/export/johnferraro1/oracle-life-insurance/print/Fact_Find_Test/O8Uk14B9qO1KND2e1MVFC3RK5934Y1yEU5YzqTUZX3NWOuPHQzBrr9JSkHgkUp0kW475MqthGB0zpJztrmeGYHupJHMrXH6t4dZt/?isc5page=true";
	getrec = invokeurl
	[
		url :downLoadUrl
		type :GET
	];
	//info getrec;
	leadID = factFindrec.ZCRM_ID.toLong();
	info "Lead ID " + leadID;
	FolderName = factFindrec.First_Name + " " + factFindrec.Last_Name + "-" + factFindrec.Sequence_Number;
	createFolder = zoho.workdrive.createFolder(FolderName.tostring(),"cy5wrc9b1d71c7aad478bb9c20eba5fc87234","workdrive_oauth_connection");
	URL_Link = createFolder.get("data").get("attributes").get("permalink");
	info URL_Link;
	updateMap = Map();
	updateMap.put("WorkDrive_Folder_ID",createFolder.get("data").get("id").toString());
	updateMap.put("Workdrive_URL",URL_Link);
	otherMap = Map();
	info updateMap;
	//Update_rec = zoho.crm.updateRecord("Leads_Life",leadID.toLong(),updateMap);
	Update_rec = zoho.crm.updateRecord("Leads_Life",leadID.toLong(),updateMap,otherMap,"workdrive_oauth_connection");
	info Update_rec;
	//uploading file
	// 	FileName = factFindrec.Sequence_Number + "_" + factFindrec.First_Name + "_" + factFindrec.Last_Name + "_" + factFindrec.ZCRM_ID + ".pdf";
	FileName = factFindrec.First_Name + " " + factFindrec.Last_Name + "-" + factFindrec.Sequence_Number + ".pdf";
	response = zoho.workdrive.uploadFile(getrec,createFolder.get("data").get("id"),FileName,false,"workdrive_oauth_connection");
	info "createFolder " + createFolder;
	//updating workdrive url
	factFindrec.WorkDrive_URL=response.get("data").get(0).get("attributes").get("permalink");
	factFindrec.File_ID=response.get("data").get(0).get("attributes").get("resource_id");
	Name = factFindrec.Name;
	info "URL ---> " + URL_Link;
	//New Code
	dataList = List();
	data = Map();
	data.put("$link_url",URL_Link);
	data.put("File_Name",FolderName);
	data.put("$resource_id",leadID);
	data.put("$type","teamdrive");
	dataList.add(data);
	info "dataList " + dataList;
	data1 = {"data":dataList};
	payload = "attachments=" + zoho.encryption.urlEncode(data1.toString());
	info "payload " + payload;
	resp = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v4/Leads_Life/" + leadID + "/Attachments"
		type :POST
		parameters:payload
		connection:"workdrive_oauth_connection"
		content-type:"application/x-www-form-urlencoded"
	];
	info "resp " + resp;
	//connection:"workdrive_oauth_connection"
	//https://help.zoho.com/portal/en/community/topic/attach-zoho-workdrive-folder-to-deal-using-deluge
	// --- End workdrive folder as an attachment -------
	// 				update_Link = Map();
	// 				update_Link.put("Workdrive_Link",Url_Link);
	// 				update_Link.put("Workdrive_Attach",true);
	// 				info update_Link;
	// 				update_crm = zoho.crm.updateRecord("Contacts",id,update_Link);
	//
}
