LeadRecords = zoho.crm.getRecordById("Leads_Life",leadID);
addressMap = Map();
if(LeadRecords.get("Address_Personal_is_same_as_Address_Billing") == false)
{
	if(LeadRecords.get("State_Province1") != null)
	{
		addressMap.put("Billing_State_Province1",LeadRecords.get("State_Province1").get("id"));
	}
	addressMap.put("Billing_Street",LeadRecords.get("Street"));
	addressMap.put("Billing_City",LeadRecords.get("City"));
	addressMap.put("Billing_Country",LeadRecords.get("Country"));
	addressMap.put("Billing_Postal_Code",LeadRecords.get("Zip_Code"));
	addressMap.put("Billing_Unit_Suite",LeadRecords.get("Unit_Suite"));
}
else
{
	if(LeadRecords.get("Billing_State_Province1") != null)
	{
		addressMap.put("Billing_State_Province1",LeadRecords.get("Billing_State_Province1").get("id"));
	}
	addressMap.put("Billing_Street",LeadRecords.get("Billing_Street"));
	addressMap.put("Billing_City",LeadRecords.get("Billing_City"));
	addressMap.put("Billing_Country",LeadRecords.get("Billing_Country"));
	addressMap.put("Billing_Postal_Code",LeadRecords.get("Billing_Postal_Code"));
	addressMap.put("Billing_Unit_Suite",LeadRecords.get("Billing_Unit_Suite"));
}
updateLeadRecords = zoho.crm.updateRecord("Leads_Life",leadID,addressMap);
// {
// }
