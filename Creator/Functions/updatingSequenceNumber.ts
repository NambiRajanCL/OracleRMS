void CRM.updatingSequenceNumber(int recID, string type)
{
	seqNumber = Find_Fact_Sequence[Type_field == type];
	if(type == "Contact")
	{
		updateMap = Map();
		updateMap.put("Sequence_Number",seqNumber.Next_Number);
		updateMap.put("Number",seqNumber.Number);
		updateRec = zoho.crm.updateRecord("Contacts_Life",recID.toLong(),updateMap);
		info updateRec;
		seqNumber.Previous_Number=seqNumber.Current_Number;
		seqNumber.Current_Number=seqNumber.Next_Number;
		nextNumber = seqNumber.Number + 1;
		rightpadNum = 14 - nextNumber.tostring().len();
		nextNumberString = "Contact_".rightpad(rightpadNum).replaceAll(" ","0") + nextNumber;
		seqNumber.Next_Number=nextNumberString;
		seqNumber.Number=nextNumber;
		/* 	nextNumber = seqNumber.Number+1;
	rightpadNum = 14 - nextNumber.tostring().len();
	 nextNumber = "Contact_".rightpad(rightpadNum).replaceAll(" ","0") + nextNumber; */
	}
	else if(type == "Client")
	{
		updateMap = Map();
		updateMap.put("Sequence_Number",seqNumber.Next_Number);
		updateMap.put("Number",seqNumber.Number);
		updateRec = zoho.crm.updateRecord("Client_Profile_Life",recID.toLong(),updateMap);
		seqNumber.Previous_Number=seqNumber.Current_Number;
		seqNumber.Current_Number=seqNumber.Next_Number;
		nextNumber = seqNumber.Number + 1;
		rightpadNum = 13 - nextNumber.tostring().len();
		nextNumberString = "Client_".rightpad(rightpadNum).replaceAll(" ","0") + nextNumber;
		seqNumber.Next_Number=nextNumberString;
		seqNumber.Number=nextNumber;
	}
	else if(type == "Lead")
	{
		updateMap = Map();
		updateMap.put("Workdrive_Folder_Name",seqNumber.Next_Number);
		//Sequence number  API name - Workdrive_Folder_Name
		updateMap.put("Workdrive_Auto_No",seqNumber.Number);
		//Number API Name - Workdrive_Auto_No
		updateRec = zoho.crm.updateRecord("Leads_Life",recID.toLong(),updateMap);
		seqNumber.Previous_Number=seqNumber.Current_Number;
		seqNumber.Current_Number=seqNumber.Next_Number;
		nextNumber = seqNumber.Number + 1;
		rightpadNum = 11 - nextNumber.tostring().len();
		nextNumberString = "Lead_".rightpad(rightpadNum).replaceAll(" ","0") + nextNumber;
		seqNumber.Next_Number=nextNumberString;
		seqNumber.Number=nextNumber;
	}
}
