var BillingCountry = ZDK.Page.getField('Billing_Country').getValue();
var BillingProvince = ZDK.Page.getField("Billing_State_Province1");
BillingProvince.setCriteria("(Country:equals:" + BillingCountry + ")", { filterOnSearch: true });
BillingProvince.setValue("");
