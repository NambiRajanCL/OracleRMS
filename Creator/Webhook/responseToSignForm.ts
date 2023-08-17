void Webhook.responseToSignForm(int webid)
{
	getResponse = Webhook_Response[ID == webid];
	reponseList = getResponse.Response.toMap();
	requests = reponseList.get("payload").get("requests");
	notification = reponseList.get("payload").get("notifications");
	getZohoSign = Zoho_Sign_Documents[Request_ID == requests.get("request_id") && Recipient_Email == requests.get("actions").get(0).get("recipient_email")];
	if(getZohoSign.count() == 0)
	{
		info "insert";
		insertZohoSign = insert into Zoho_Sign_Documents
		[
			Added_User=zoho.loginuser
			Requests_Status=if(requests.get("request_status") != null && requests.get("request_status") != "",requests.get("request_status"),"")
			Documents_Name=if(requests.get("document_ids").get(0).get("document_name") != null && requests.get("document_ids").get(0).get("document_name") != "",requests.get("document_ids").get(0).get("document_name"),"")
			Document_ID=if(requests.get("document_ids").get(0).get("document_id") != null && requests.get("document_ids").get(0).get("document_name") != "",requests.get("document_ids").get(0).get("document_id"),"")
			Request_Name=if(requests.get("request_name") != null && requests.get("request_name") != "",requests.get("request_name"),"")
			Modified_Time1=if(requests.get("modified_time") != null,requests.get("modified_time"),null)
			Action_Time=if(requests.get("action_time") != null,requests.get("action_time"),null)
			Is_Deleted=if(requests.get("is_deleted") != null,requests.get("is_deleted"),null)
			Is_Sequential=if(requests.get("is_sequential") != null,requests.get("is_sequential"),null)
			Owner_First_Name=if(requests.get("owner_first_name") != null && requests.get("owner_first_name") != "",requests.get("owner_first_name"),"")
			Owner_Last_Name=if(requests.get("owner_last_name") != null && requests.get("owner_last_name") != "",requests.get("owner_last_name"),"")
			Request_Type_Name=if(requests.get("request_type_name") != null && requests.get("request_type_name") != "",requests.get("request_type_name"),"")
			Request_ID=if(requests.get("request_id") != null && requests.get("request_id") != "",requests.get("request_id"),"")
			Request_Type_ID=if(requests.get("request_type_id") != null && requests.get("request_type_id") != "",requests.get("request_type_id"),"")
			ZDocument_ID=if(requests.get("zsdocumentid") != null && requests.get("zsdocumentid") != "",requests.get("zsdocumentid"),"")
			Recipient_Email=if(requests.get("actions").get(0).get("recipient_email") != null,requests.get("actions").get(0).get("recipient_email"),null)
			Recipient_Name=if(requests.get("actions").get(0).get("recipient_name") != null && requests.get("actions").get(0).get("recipient_name") != "",requests.get("actions").get(0).get("recipient_name"),"")
			Action_Status=if(requests.get("actions").get(0).get("action_status") != null && requests.get("actions").get(0).get("action_status") != "",requests.get("actions").get(0).get("action_status"),"")
			Webhook_ID=webid
		];
	}
	else
	{
		if(notification.get("activity") == "Document successfully signed")
		{
			info "update";
			getZohoSign.Action_Status=if(requests.get("actions").get(0).get("action_status") != null && requests.get("actions").get(0).get("action_status") != "",requests.get("actions").get(0).get("action_status"),"");
			getZohoSign.Webhook_ID=webid;
			if(requests.get("actions").get(0).get("action_status") == "SIGNED")
			{
				//	thisapp.FactFind.downloadSignDocPDF(requests.get("actions").get(0).get("recipient_email"),requests.get("request_id"));
			}
		}
	}
}
