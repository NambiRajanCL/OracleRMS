getPolicy = zoho.crm.getRecordById("Leads_Life",LeadID);
//LeadID = getPolicy.get("Lead_Name");
getRelatedPolicies = zoho.crm.getRelatedRecords("Lead_Name1","Leads_Life",LeadID);
//info getRelatedPolicies;
for each  rec in getRelatedPolicies
{
	info rec.get("id");
	updateMap = Map();
	updateMap.put("Policy_Stage",getPolicy.get("Policy_Stages"));
	updateRec = zoho.crm.updateRecord("Policies_Life",rec.get("id"),updateMap);
	info updateRec;
}
// if ( LeadID != null ) 
// {
// updateMap = Map();
// updateMap.put("Policy_Stage", getPolicy.get("Policy_Stages"));
// updateRec = zoho.crm.updateRecord("Policies_Life", LeadID.get("id"), updateMap);
// }
// getPolicy = zoho.crm.getRecordById("Policies_Life", PolicyID);
// LeadID = getPolicy.get("Lead_Name");
// if ( LeadID != null ) 
// {
// updateMap = Map();
// updateMap.put("Policy_Stages", getPolicy.get("Policy_Stage"));
// updateRec = zoho.crm.updateRecord("Leads_Life", LeadID.get("id"), updateMap);
// }
