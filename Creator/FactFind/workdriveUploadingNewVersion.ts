void FactFind.uploadingNewVersion(int recordID)
{
	leadDetail = Leads[ID == recordID];
	header = Map();
	header.put("Accept","application/vnd.api+json");
	response = invokeurl
	[
		url :"https://www.zohoapis.com/workdrive/api/v1/files/" + leadDetail.File_ID
		type :GET
		headers:header
		connection:"creator"
	];
	//info response;
	fileName = response.get("data").get("attributes").get("name");
	info fileName;
	parentID = response.get("data").get("attributes").get("parent_id");
	info parentID;
	urlLink = "https://creatorapp.zohopublic.com/johnferraro1/oracle-life-insurance/record-pdf/All_Leads_Report/" + recordID + "/test/vPpYCpW8f8nvBgrknXkAsPbgf0TVqNmVgFFZPq1seaJ9KGQOCstbAfzA88rDCngNngRu7Fys6szh7S5JJakxgAdXZKzT8qdehsQT";
	file = invokeurl
	[
		url :urlLink
		type :GET
	];
	list_of_text = List();
	list_of_text.add({"paramName":"filename","content":fileName,"stringPart":"true"});
	list_of_text.add({"paramName":"parent_id","content":parentID,"stringPart":"true"});
	list_of_text.add({"paramName":"override-name-exist","content":"true","stringPart":"true"});
	list_of_text.add({"paramName":"content","content":file,"stringPart":"false"});
	uploadNewVersion = invokeurl
	[
		url :"https://www.zohoapis.com/workdrive/api/v1/upload"
		type :POST
		headers:header
		files:list_of_text
		connection:"creator"
	];
	info uploadNewVersion;
}
