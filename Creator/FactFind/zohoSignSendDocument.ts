void FactFind.zohoSignSendDocument()
{
	getFindFact = Leads[ID == 3645670000000206003];
	response = zoho.sign.getTemplates();
	//	info response;
	temp = response.get("templates");
	for each  temp in response.get("templates")
	{
		if(temp.get("template_id") == 221739000002524067)
		{
			//	 info temp;
			tempinfo = zoho.sign.getTemplateById(221739000002524067).get("templates").get("actions");
			//info tempinfo;
			actionid = tempinfo.get(0).get("action_id");
			info "actionid " + actionid;
			info zoho.currentdate.toString("MMM dd yyyy");
			actionMap = Map();
			fieldTextData = Map();
			fieldDateData = Map();
			fieldTextData.put("Referred By",getFindFact.Referred_By);
			fieldTextData.put("Advisor Name",getFindFact.Advisor_Name);
			fieldTextData.put("Gross Income1",getFindFact.Monthly_Gross_Income);
			fieldDateData.put("DOB1",getFindFact.Date_of_Birth.toString("MMM dd yyyy"));
			fieldDateData.put("Date - 1",getFindFact.Date_field.toString("MMM dd yyyy"));
			/* 			fieldTextData.put();
				fieldTextData.put();
				fieldTextData.put(); */
			insertMap = Map();
			insertMap.put("field_date_data",fieldDateData);
			insertMap.put("field_text_data",fieldTextData);
			actionMap.put("field_data",insertMap);
			eachActionMap1 = Map();
			eachActionMap1.put("recipient_name","Ananth");
			eachActionMap1.put("recipient_email","ananth@cloudlion.org");
			eachActionMap1.put("action_type","SIGN");
			eachActionMap1.put("action_id",actionid);
			fieldList = List();
			fieldList.add(eachActionMap1);
			actionMap.put("actions",fieldList);
			submitMap = Map();
			submitMap.put("templates",actionMap);
			params = Map();
			params.put("is_quicksend","true");
			params.put("data",submitMap);
			resp = zoho.sign.createUsingTemplate(221739000002524067,params);
			info "response " + resp;
			info "values passed in map-->" + params;
		}
	}
}
