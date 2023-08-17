getLeadsDetails = zoho.crm.getRecordById("Leads_Life",LeadID);
info "lead Details " + getLeadsDetails.get("WorkDrive_Folder_ID");
Advisor = getLeadsDetails.get("Advisor").get("id");
Referrer = getLeadsDetails.get("Referred");
//Referred_by  Producer_Referrer
// ************* Auto Number *******************
fetchNumberseq = zoho.creator.getRecords("johnferraro1","oracle-life-insurance","All_Fact_Sequences","",1,200,"zohocreator");
info fetchNumberseq;
query_map = Map();
query_map.put("sort_order","desc");
query_map.put("sort_by","Workdrive_Auto_No");
res = zoho.crm.getRecords("Leads_Life",1,10,query_map);
// info res;
autoNumber = ifNull(res.get(0).get("Workdrive_Auto_No"),0);
finalNumber = autoNumber + 1;
WorkdriveFolderNumber = finalNumber.leftpad(6).replaceAll(" ",0);
info WorkdriveFolderNumber;
// info updateinfo;
//************************************************
try 
{
	if(getLeadsDetails.get("WorkDrive_Folder_ID") == null && getLeadsDetails.get("WorkDrive_Folder_ID") == "")
	{
		info "if condition ";
		updateMap = Map();
		updateMap.put("Workdrive_Auto_No",WorkdriveFolderNumber);
		FolderName = ifNull(getLeadsDetails.get("First_Name")," ") + " " + ifNull(getLeadsDetails.get("Name")," ") + "-Lead_" + WorkdriveFolderNumber;
		// 		FolderName = "From CRM";
		updateMap.put("Workdrive_Folder_Name",FolderName);
		updateinfo = zoho.crm.updateRecord("Leads_Life",LeadID,updateMap);
		LeadFolder = zoho.workdrive.createFolder(FolderName,"cy5wrc9b1d71c7aad478bb9c20eba5fc87234","workdrive");
		// 2gpa0cb24b1d7e9d74bad807350f51b537b75
		LeadFolderID = LeadFolder.get("data").get("id");
		LeadFolderURL = LeadFolder.get("data").get("attributes").get("permalink");
		FolderQueryMap = Map();
		FolderQueryMap.put("WorkDrive_Folder_ID",LeadFolderID);
		FolderQueryMap.put("Workdrive_URL",LeadFolderURL);
		updateFolderID = zoho.crm.updateRecord("Leads_Life",LeadID,FolderQueryMap);
		info "Folder URL Update " + updateFolderID;
		// Attachment 
		try 
		{
			dataList = List();
			data = Map();
			data.put("$link_url",LeadFolderURL);
			data.put("File_Name",FolderName);
			data.put("$resource_id",LeadID);
			data.put("$type","teamdrive");
			dataList.add(data);
			info "dataList " + dataList;
			data = {"data":dataList};
			payload = "attachments=" + zoho.encryption.urlEncode(data.toString());
			info "payload " + payload;
			resp = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v4/Leads_Life/" + LeadID + "/Attachments"
				type :POST
				parameters:payload
				connection:"crm"
				content-type:"application/x-www-form-urlencoded"
			];
			info "Attachment Resp " + resp;
		}
		catch (e)
		{
			AttachmenterrorResponse = Map();
			AttachmenterrorResponse.put("Module","Leads-Life");
			AttachmenterrorResponse.put("Process_Description","Attachment Creation in Leads-Life (Workflow-createWorkdriveFolderLeadsLife) Folder Name :" + FolderName);
			AttachmenterrorResponse.put("In_Data",LeadID);
			AttachmenterrorResponse.put("Out_Response",e.message);
			otherparams = Map();
			res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",AttachmenterrorResponse,otherparams,"zohocreator");
			info res;
		}
	}
	// if ending	
	info getLeadsDetails.get("Parent_ID") + " Test " + getLeadsDetails.get("Lead_Type");
	if(getLeadsDetails.get("Parent_ID") == "" || getLeadsDetails.get("Parent_ID") == null && getLeadsDetails.get("Lead_Type") == "Client 1")
	{
		policyCreationMap = Map();
		policyCreationMap.put("Name",ifNull(getLeadsDetails.get("Policy_Name"),""));
		policyCreationMap.put("Lead_Name",LeadID);
		policyCreationMap.put("Module_Stage","Lead Stage");
		policyCreationMap.put("Policy_created_from","Lead Module");
		policyCreationMap.put("Policy_Stages","Prospect");
		policyCreationMap.put("Policy_Stage","Lead");
		policyCreationMap.put("Advisor",Advisor);
		policyCreationMap.put("Referred_by",Referrer);
		policyCreationMap.put("Policy_Number","Pending");
		//policyCreationMap.put("Producer_Referrer",Referrer);
		policyCreationMap.put("Owner",getLeadsDetails.get("Owner").get("id"));
		policyCreation = zoho.crm.createRecord("Policies_Life",policyCreationMap,{"trigger":{"workflow"}});
		//,{"trigger":{"workflow"}}
		//info "policy Creation" + policyCreation.get("id");
		getpolicyDetails = zoho.crm.getRecordById("Policies_Life",policyCreation.get("id"));
		info "policy " + getpolicyDetails;
	}
}
catch (e)
{
	errorResponse = Map();
	errorResponse.put("Module","Leads-Life");
	errorResponse.put("Process_Description","Folder Creation in Workdrive (Workflow-createWorkdriveFolderLeadsLife)");
	errorResponse.put("In_Data",LeadID);
	errorResponse.put("Out_Response",e.message);
	otherparams = Map();
	res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",errorResponse,otherparams,"zohocreator");
	info res;
}
// try 
// {
// 	if(getLeadsDetails.get("WorkDrive_Folder_ID") == null || getLeadsDetails.get("") == "")
// 	{
// 		updateMap = Map();
// 		updateMap.put("Workdrive_Auto_No",WorkdriveFolderNumber);
// 		FolderName = ifNull(getLeadsDetails.get("First_Name")," ") + " " + ifNull(getLeadsDetails.get("Name")," ") + "_LD-" + WorkdriveFolderNumber;
// 		updateMap.put("Workdrive_Folder_Name",FolderName);
// 		updateinfo = zoho.crm.updateRecord("Leads_Life",LeadID,updateMap);
// 		LeadFolder = zoho.workdrive.createFolder(FolderName,"2gpa0cb24b1d7e9d74bad807350f51b537b75","workdrive");
// 		LeadFolderID = LeadFolder.get("data").get("id");
// 		LeadFolderURL = LeadFolder.get("data").get("attributes").get("permalink");
// 		FolderQueryMap = Map();
// 		FolderQueryMap.put("WorkDrive_Folder_ID",LeadFolderID);
// 		FolderQueryMap.put("Workdrive_URL",LeadFolderURL);
// 		updateFolderID = zoho.crm.updateRecord("Leads_Life",LeadID,FolderQueryMap);
// 		info updateFolderID;
// 		try 
// 		{
// 			dataList = List();
// 			data = Map();
// 			data.put("$link_url",LeadFolderURL);
// 			data.put("File_Name",FolderName);
// 			data.put("$resource_id",LeadID);
// 			data.put("$type","teamdrive");
// 			dataList.add(data);
// 			info "dataList " + dataList;
// 			data = {"data":dataList};
// 			payload = "attachments=" + zoho.encryption.urlEncode(data.toString());
// 			info "payload " + payload;
// 			resp = invokeurl
// 			[
// 				url :"https://www.zohoapis.com/crm/v4/Leads_Life/" + LeadID + "/Attachments"
// 				type :POST
// 				parameters:payload
// 				connection:"crm"
// 				content-type:"application/x-www-form-urlencoded"
// 			];
// 			info "resp " + resp;
// 		}
// 		catch (e)
// 		{
// 			AttachmenterrorResponse = Map();
// 			AttachmenterrorResponse.put("Module","Leads-Life");
// 			AttachmenterrorResponse.put("Process_Description","Attachment Creation in Leads-Life (Workflow-createWorkdriveFolderLeadsLife) Folder Name :" + FolderName);
// 			AttachmenterrorResponse.put("In_Data",LeadID);
// 			AttachmenterrorResponse.put("Out_Response",e.message);
// 			otherparams = Map();
// 			res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",AttachmenterrorResponse,otherparams,"zohocreator");
// 			info res;
// 		}
// 	}
// }
// catch (e)
// {
// 	errorResponse = Map();
// 	errorResponse.put("Module","Leads-Life");
// 	errorResponse.put("Process_Description","Folder Creation in Workdrive (Workflow-createWorkdriveFolderLeadsLife)");
// 	errorResponse.put("In_Data",LeadID);
// 	errorResponse.put("Out_Response",e.message);
// 	otherparams = Map();
// 	res = zoho.creator.createRecord("johnferraro1","oracle-life-insurance","Developer_Log",errorResponse,otherparams,"zohocreator");
// 	info res;
// }
/*
		//         policyParam = map();
// 		policyParam.put("policiesID",policyCreation.get("id"));
// 		createPolicy = invokeurl
//         [
//         	url: "https://www.zohoapis.com/crm/v2/functions/createworkdrivefolderpolicies/actions/execute?auth_type=apikey&zapikey=1003.b45de3c293abb67bae6d43ded2b770fe.f34353b70f91aa84a7db84eab745567c"
//         	type: POST
//         	parameters: policyParam
//         ];
// 		info "CreatePolicy " + createPolicy;
		*/
