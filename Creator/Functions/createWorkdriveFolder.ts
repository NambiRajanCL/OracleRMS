		getLead = zoho.crm.getRecordById("Leads_Life",LeadID);
		getClient = zoho.crm.getRecordById("Client_Profile_Life",ClientID);
		getContact = zoho.crm.getRecordById("Contacts_Life",contactRecID);
		ContactID = getContact.get("id");
		FolderName = getClient.get("Name");
		if(clientvalue == "new")
		{
			ClientFolder = zoho.workdrive.createFolder(FolderName,"2gpa0cb24b1d7e9d74bad807350f51b537b75","workdrive_oauth_connection");
			ClientFolderID = ClientFolder.get("data").get("id");
			ClientFolderURL = ClientFolder.get("data").get("attributes").get("permalink");
			dataList = List();
			data = Map();
			data.put("$link_url",ClientFolderURL);
			data.put("File_Name",FolderName);
			data.put("$resource_id",ClientID);
			data.put("$type","teamdrive");
			dataList.add(data);
			//info "dataList " + dataList;
			data = {"data":dataList};
			payload = "attachments=" + zoho.encryption.urlEncode(data.toString());
			// 		clientresp = zoho.crm.attachFile("Client_Profile_Life",ClientID, data.tostring());
			// 		info clientresp ;
			info "payload " + payload;
			resp = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v4/Client_Profile_Life/" + ClientID + "/Attachments"
				type :POST
				parameters:payload
				connection:"workdrive_oauth_connection"
				content-type:"application/x-www-form-urlencoded"
			];
			info "respClient " + resp;
		}
		else
		{
			//getClient = zoho.crm.getRecordById("Client_Profile_Life",ClientID);
			ClientFolderID = getClient.get("Client_Profile_Folder_ID");
			ClientFolderURL = getClient.get("Client_Profile_Folder_URL");
		}
		//		ContactFolder = zoho.workdrive.createFolder("Contact",ClientFolderID,"workdrive_oauth_connection");
		ContactFolderID = getLead.get("WorkDrive_Folder_ID");
		ContactFolderURL = getLead.get("Workdrive_URL");
		contactName = getContact.get("Full_Name") + " " + getContact.get("Last_Name");
		dataConList = List();
		dataCon = Map();
		dataCon.put("$link_url",ContactFolderURL);
		dataCon.put("File_Name",contactName);
		dataCon.put("$resource_id",ContactID);
		dataCon.put("$type","teamdrive");
		dataConList.add(dataCon);
		//info "dataList " + dataConList;
		contactdata = {"data":dataConList};
		payloadCon = "attachments=" + zoho.encryption.urlEncode(contactdata.toString());
		header = Map();
		header.put("Accept","application/vnd.api+json");
		data = Map();
		data_param1 = Map();
		att_param1 = Map();
		att_param1.put("name",contactName);
		data_param1.put("attributes",att_param1);
		data_param1.put("type","files");
		data.put("data",data_param1);
		response = invokeurl
		[
			url :"https://www.zohoapis.com/workdrive/api/v1/files/" + getLead.get("WorkDrive_Folder_ID")
			type :PATCH
			parameters:data.toString()
			headers:header
			connection:"workdrive_oauth_connection"
		];
		info response;
		//Move Lead Folder to Contact
		header = Map();
		header.put("Accept","application/vnd.api+json");
		data = Map();
		data_param1 = Map();
		att_param1 = Map();
		att_param1.put("parent_id",ClientFolderID);
		data_param1.put("attributes",att_param1);
		data_param1.put("type","files");
		data.put("data",data_param1);
		response1 = invokeurl
		[
			url :"https://www.zohoapis.com/workdrive/api/v1/files/" + getLead.get("WorkDrive_Folder_ID")
			type :PATCH
			parameters:data.toString()
			headers:header
			connection:"workdrive_oauth_connection"
		];
		info "Folder Move " + response1;
		updateClientMap = Map();
		updateClientMap.put("Client_Profile_Folder_ID",ClientFolderID);
		updateClientMap.put("Client_Profile_Folder_URL",ClientFolderURL);
		updateClientMap.put("Contact_Life_Folder_ID",ContactFolderID);
		updateClientMap.put("Contact_Folder_URL",ContactFolderURL);
		updateClient = zoho.crm.updateRecord("Client_Profile_Life",ClientID,updateClientMap);
		updateContactMap = Map();
		updateContactMap.put("Client_Profile_ID",ClientFolderID);
		updateContactMap.put("Client_Profile_URL",ClientFolderURL);
		updateContactMap.put("Contact_Folder_ID",ContactFolderID);
		updateContactMap.put("Contact_Folder_URL",ContactFolderURL);
		updateClient = zoho.crm.updateRecord("Contacts_Life",ContactID.toLong(),updateContactMap);
