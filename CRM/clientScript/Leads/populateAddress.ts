if (ZDK.Page.getField('Address_Personal_is_same_as_Address_Billing').getValue() == false)
{
    ZDK.Page.getField('Billing_Street').setValue(ZDK.Page.getField('Street').getValue());
    ZDK.Page.getField('Billing_City').setValue(ZDK.Page.getField('City').getValue());
    ZDK.Page.getField('Billing_Unit_Suite').setValue(ZDK.Page.getField('Unit_Suite').getValue());
    ZDK.Page.getField('Billing_State_Province1').setValue(ZDK.Page.getField('State_Province1').getValue());
    ZDK.Page.getField('Billing_Postal_Code').setValue(ZDK.Page.getField('Zip_Code').getValue());
    ZDK.Page.getField('Billing_Country').setValue(ZDK.Page.getField('Country').getValue());
      
}
else
{
    ZDK.Page.getField('Billing_Street').setValue("");
    ZDK.Page.getField('Billing_City').setValue("");
    ZDK.Page.getField('Billing_Unit_Suite').setValue("");
    ZDK.Page.getField('Billing_State_Province1').setValue("");
    ZDK.Page.getField('Billing_Postal_Code').setValue("");
     ZDK.Page.getField('Billing_Country').setValue("");
}
