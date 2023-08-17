void FactFind.fetchingMergeFields()
{
	/* 	mergeField = zoho.writer.v1.getAllFields("so3zb82b62c8d28c84b79a0633daf9baced9c", "workdrive_oauth_connection");
	info mergeField; */
	document_id = "ponazfea04477109f4681a831e7177d96bc40";
	getAllFieldsResponse = invokeurl
	[
		url :"https://writer.zoho.com/api/v1/documents/so3zb82b62c8d28c84b79a0633daf9baced9c/fields"
		type :GET
		connection:"workdrive_oauth_connection"
	];
	info getAllFieldsResponse;
}
