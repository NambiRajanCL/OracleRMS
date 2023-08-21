var Country = ZDK.Page.getField('Country').getValue();
var Province = ZDK.Page.getField("State_Province1");
Province.setCriteria("(Country:equals:" + Country + ")", { filterOnSearch: true });
Province.setValue("");
