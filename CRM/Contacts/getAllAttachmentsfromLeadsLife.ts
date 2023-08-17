response = invokeurl
[
	url :"https://www.zohoapis.com/crm/v3/Leads_Life/" + leadid + "/Attachments"
	type :GET
	connection:"crm"
];
info response;
// relatedrecords = zoho.crm.getRelatedRecords("Attachments","Leads_Life",leadid);
// filelist = List();
// for each  ele in relatedrecords
// {
// 	attachmentId = ele.get("id");
// 	filename = ele.get("File_Name");
// 	name = encodeurl(filename).toString();
// 	file = invokeurl
// 	[
// 		url :"https://www.zohoapis.com/crm/v4/Leads/" + leadid + "/Attachments/" + attachmentId
// 		type :GET
// 		connection:"crm"
// 	];
// 	info "file " + file;
// 	file.setparamname("file");
// 	resp = invokeurl
// 	[
// 		url :"https://www.zohoapis.com/crm/v4/files"
// 		type :POST
// 		files:file
// 		connection:"crm"
// 	];
// 	info resp;
// 	fileid = resp.getJSON("data").get(0).getJSON("details").getJSON("id");
// 	fmp = Map();
// 	fmp.put("file_id",fileid);
// 	filelist.add(fmp);
// }
// // mp = Map();
// // mp.put("File_Upload",filelist);
// // update = zoho.crm.updateRecord("Leads",LeadID,mp);
// contactID = 2147750000112149008;
// update = zoho.crm.attachFile("Contacts_Life", contactID, filelist);
// info update;
// getLeadsAttachments = zoho.crm.getRelatedRecords("Attachments","Leads_Life",leadid);
// info getLeadsAttachments;
// info "----------";
// newlist = list();
// newmap = map();
// newmap.put("$file_id","spddy5a34f7e3d0b244c8a66af5905beaad92");
// newlist.add(newmap);
// contactID = 2147750000112149008;
// attachmentresponse = zoho.crm.attachFile("Contacts_Life",contactID, newlist);
// info attachmentresponse;
