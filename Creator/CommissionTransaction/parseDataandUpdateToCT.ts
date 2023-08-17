void CommissionTransactions.parseDataandUpdatetoCT(int importCTID)
{
	try 
	{
		//3645670000000182013
		fetchImportfile = Import_Commission_Transaction[ID == importCTID];
		cnt = fetchImportfile.File_upload.content;
		rowslist = cnt.toList("\n");
		// 	info "CNT " + cnt;
		count = 0;
		successRecord = 0;
		for each  rl in rowslist
		{
			elementsList = rl.tolist(",");
			// 			info "elementsList" + elementsList;
			count = count + 1;
			if(elementsList.size() > 0 && !elementsList.isEmpty())
			{
				if(elementsList.get(0) != "")
				{
					// info "Hai";
					//	info "ele 0 " + elementsList.get(0);
					if(count > 1)
					{
						getTrans = Commission_Transactions[Transaction_ID == elementsList.get(0)];
						if(getTrans.ID != null)
						{
							successRecord = successRecord + 1;
						}
						else
						{
							addfailedData = insert into Failed_Import_Records
							[
								Added_User=zoho.loginuser
								Transaction_Number=elementsList.get(0)
							];
						}
						// 					info getTrans + elementsList.get(3);
						getTrans.Commission_Paid=elementsList.get(3);
						// 					info getTrans.Commission_Paid;
						getTrans.Date_Commission_Paid=elementsList.get(4);
						// 					info "date " + getTrans.Date_Commission_Paid;
						getTrans.Modified_Type="Import Update";
					}
				}
				//	info elementsList.get(5);
			}
		}
		// 	info count;
		fetchImportfile.Total_Records=ifNull(rowslist.size(),2) - 2;
		fetchImportfile.Successful_Import=ifNull(successRecord,0);
		fetchImportfile.Failure_Import=ifNull(rowslist.size(),2) - 2 - ifNull(successRecord,0);
	}
	catch (e)
	{
		//log
	}
}
