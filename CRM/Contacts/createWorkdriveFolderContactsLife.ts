getContactDetails = zoho.crm.getRecordById("Contacts_Life",contactID);
cliProfileID = getContactDetails.get("Primary_Client_profile").get("id");
info getContactDetails;
getClientProf = zoho.crm.getRecordById("Client_Profile_Life",cliProfileID);
info getClientProf.get("Client_Profile_Folder_ID");
//   Auto Number  *******************************
query_map = Map();
query_map.put("sort_order","desc");
query_map.put("sort_by","Workdrive_Folder_No");
res = zoho.crm.getRecords("Contacts_Life",1,10,query_map);
// info res;
autoNumber = ifNull(res.get(0).get("Workdrive_Folder_No"),0);
finalNumber = autoNumber + 1;
WorkdriveFolderNumber = finalNumber.leftpad(6).replaceAll(" ",0);
info WorkdriveFolderNumber;
// *******************************************
FolderName = ifNull(getContactDetails.get("Name")," ") + "_" + ifNull(getContactDetails.get("Last_Name")," ") + "-" + "CO" + "_" + WorkdriveFolderNumber;
updateMap = Map();
updateMap.put("Workdrive_Folder_No",WorkdriveFolderNumber);
updateMap.put("Contact_Folder_Name",FolderName);
updateinfo = zoho.crm.updateRecord("Contacts_Life",contactID,updateMap);
// info updateinfo;
// info FolderName;
// info createContactFolder;
try 
{
	if(getClientProf.get("Client_Profile_Folder_ID") == null)
	{
		clientProfileFolder = zoho.workdrive.createFolder(getClientProf.get("Name"),"2gpa0cb24b1d7e9d74bad807350f51b537b75","workdrive");
		clientProfileFolderID = clientProfileFolder.get("data").get("id");
		clientProfileFolderURL = clientProfileFolder.get("data").get("attributes").get("permalink");
		createContactFolder = zoho.workdrive.createFolder(FolderName.toString(),clientProfileFolderID,"workdrive");
		ContactFolderID = createContactFolder.get("data").get("id");
		ContactFolderURL = createContactFolder.get("data").get("attributes").get("permalink");
		//update client profile and contact ID & URL
		clientQueryMap = Map();
		clientQueryMap.put("Client_Profile_Folder_ID",clientProfileFolderID);
		clientQueryMap.put("Client_Profile_Folder_URL",clientProfileFolderURL);
		zoho.crm.updateRecord("Client_Profile_Life",cliProfileID,clientQueryMap);
		try 
		{
			dataList = List();
			data = Map();
			data.put("$link_url",clientProfileFolderURL);
			data.put("File_Name",FolderName);
			data.put("$resource_id",cliProfileID);
			data.put("$type","teamdrive");
			dataList.add(data);
			info "dataList " + dataList;
			data = {"data":dataList};
			payload = "attachments=" + zoho.encryption.urlEncode(data.toString());
			info "payload " + payload;
			resp = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v4/Client_Profile_Life/" + cliProfileID + "/Attachments"
				type :POST
				parameters:payload
				connection:"crm"
				content-type:"application/x-www-form-urlencoded"
			];
			info "resp " + resp;
		}
		catch (e)
		{
			AttachmenterrorResponse = Map();
			AttachmenterrorResponse.put("Module","Contacts-Life");
			AttachmenterrorResponse.put("Process_Description","Attachment Creation in Contacts-Life (Workflow-createWorkdriveFolderContactsLife) Folder Name :" + FolderName);
			AttachmenterrorResponse.put("In_Data","Contact ID = " + contactID + " Client Profile ID = " + cliProfileID);
			AttachmenterrorResponse.put("Out_Response",e.message);
			otherparams = Map();
			res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",AttachmenterrorResponse,otherparams,"zohocreator");
			info res;
		}
		contactQueryMap = Map();
		contactQueryMap.put("Contact_Folder_ID",ContactFolderID);
		contactQueryMap.put("Contact_Folder_URL",ContactFolderURL);
		zoho.crm.updateRecord("Contacts_Life",contactID,contactQueryMap);
		/*	try 
		{
			dataList = List();
			data = Map();
			data.put("$link_url",ContactFolderURL);
			data.put("File_Name",contactID);
			data.put("$resource_id",cliProfileID);
			data.put("$type","teamdrive");
			dataList.add(data);
			info "dataList " + dataList;
			data = {"data":dataList};
			payload = "attachments=" + zoho.encryption.urlEncode(data.toString());
			info "payload " + payload;
			resp = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v4/Contacts_Life/" + contactID + "/Attachments"
				type :POST
				parameters:payload
				connection:"crm"
				content-type:"application/x-www-form-urlencoded"
			];
			info "resp " + resp;
		}
		catch (e)
		{
			AttachmenterrorResponse = Map();
			AttachmenterrorResponse.put("Module","Contacts-Life");
			AttachmenterrorResponse.put("Process_Description","Attachment Creation in Contacts-Life (Workflow-createWorkdriveFolderContactsLife) Folder Name :" + FolderName);
			AttachmenterrorResponse.put("In_Data",contactID);
			AttachmenterrorResponse.put("Out_Response",e.message);
			otherparams = Map();
			res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",AttachmenterrorResponse,otherparams,"zohocreator");
			info res;
		}*/
	}
	else
	{
		createContactFolder = zoho.workdrive.createFolder(FolderName.toString(),getClientProf.get("Client_Profile_Folder_ID"),"workdrive");
		// 	info createContactFolder;
		ContactFolderID = createContactFolder.get("data").get("id");
		ContactFolderURL = createContactFolder.get("data").get("attributes").get("permalink");
		ctQueryMap = Map();
		ctQueryMap.put("Contact_Folder_ID",ContactFolderID);
		ctQueryMap.put("Contact_Folder_URL",ContactFolderURL);
		zoho.crm.updateRecord("Contacts_Life",contactID,ctQueryMap);
		/*	try 
		{
			dataList = List();
			data = Map();
			data.put("$link_url",ContactFolderURL);
			data.put("File_Name",FolderName);
			data.put("$resource_id",contactID);
			data.put("$type","teamdrive");
			dataList.add(data);
			info "dataList " + dataList;
			data = {"data":dataList};
			payload = "attachments=" + zoho.encryption.urlEncode(data.toString());
			info "payload " + payload;
			resp = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v4/Contacts_Life/" + contactID + "/Attachments"
				type :POST
				parameters:payload
				connection:"crm"
				content-type:"application/x-www-form-urlencoded"
			];
			info "resp " + resp;
		}
		catch (e)
		{
			AttachmenterrorResponse = Map();
			AttachmenterrorResponse.put("Module","Contacts-Life");
			AttachmenterrorResponse.put("Process_Description","Attachment Creation in Contacts-Life (Workflow-createWorkdriveFolderContactsLife) Folder Name :" + FolderName);
			AttachmenterrorResponse.put("In_Data",contactID);
			AttachmenterrorResponse.put("Out_Response",e.message);
			otherparams = Map();
			res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",AttachmenterrorResponse,otherparams,"zohocreator");
			info res;
		}*/
	}
}
catch (e)
{
	errorResponse = Map();
	errorResponse.put("Module","Contacts-Life");
	errorResponse.put("Process_Description","Folder Creation in Workdrive (Workflow-createWorkdriveFolderContactsLife)");
	errorResponse.put("In_Data",contactID);
	errorResponse.put("Out_Response",e.message);
	otherparams = Map();
	res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",errorResponse,otherparams,"zohocreator");
	info res;
}
// query_map = Map();
// query_map.put("sort_order","desc");
// res = zoho.crm.getRecords("Contacts_Life",1,10,query_map);
// // info res;
// autoNumber = ifNull(res.get(0).get("Workdrive_Folder_No"),0);
// // autoNumber = 1;
// finalNumber = autoNumber + 1;
// WorkdriveFolderNumber = finalNumber.leftpad(6).replaceAll(" ",0);
// // info WorkdriveFolderNumber;
// updateMap = Map();
// updateMap.put("Workdrive_Folder_No",WorkdriveFolderNumber);
// info zoho.crm.updateRecord("Contacts_Life",contactID,updateMap);
// getContactDetails = zoho.crm.getRecordById("Contacts_Life",contactID);
// // info getContactDetails;
// FolderName = ifNull(getContactDetails.get("Name")," ") + "_" + ifNull(getContactDetails.get("Last_Name")," ") + "_" + WorkdriveFolderNumber;
// // info FolderName;
// createContactFolder = zoho.workdrive.createFolder(FolderName.toString(),"2gpa0cb24b1d7e9d74bad807350f51b537b75","workdrive");
// // info createContactFolder;
// // permaLink = createContactFolder.get("data").get("permalink");
// contactFolderWorkdriveID = createContactFolder.get("data").get("id");
// ComplianceDocuments = zoho.workdrive.createFolder("Compliance Documents",contactFolderWorkdriveID.toString(),"workdrive");
// CompliancePermaLink = ComplianceDocuments.get("data").get("permalink");
// ComplianceID = ComplianceDocuments.get("data").get("id");
// NeedAnalysis = zoho.workdrive.createFolder("Need Analysis",ComplianceID,"workdrive");
// NeedAnalysisID = NeedAnalysis.get("data").get("id");
// NeedAnalysisPermaLink = NeedAnalysis.get("data").get("permalink");
