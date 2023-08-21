var Country = ZDK.Page.getField('Billing_Country').getValue();
var Province = ZDK.Page.getField("Billing_State_Province");
Province.setCriteria("(Country:equals:" + Country + ")", { filterOnSearch: true });
log(Country);
Province.setValue("");
