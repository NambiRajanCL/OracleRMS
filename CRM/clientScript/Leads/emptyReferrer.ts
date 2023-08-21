var Lead_Source = ZDK.Page.getField('Lead_Source');
if (Lead_Source != "Employee Referral")
{
  var referValue = ZDK.Page.getField('Referral_by').setValue(null);
  var referemail = ZDK.Page.getField('Referral_Email_Address').setValue("");
}
else
{
  var referValue = ZDK.Page.getField('Referral_by');
}
