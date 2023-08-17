var totalIncomeClient1Monthly = 0;
var totalIncomeClient2Monthly = 0;
var totalIncomeClient1Annual = 0;
var totalIncomeClient2Annual = 0;
var totalDebtClient1 = 0;
var totalDebtClient2 = 0;
/**
  * This function is to reset the form after submit and prevent page reload
  */
function resetForm() {
    $("#rmsForm")[0].reset();
    $("span").text("");
    $("textarea").text("");
}

function collectFormData() {

    var factAndFindData = {};

    factAndFindData['Lead_Source'] = "Self";

    //General Information Tab
    if ($("#date").val() != "") {
        factAndFindData['Date_field'] = moment($("#date").val()).format('DD-MMM-YYYY');
    } else {
        factAndFindData['Date_field'] = "";
    }
    
    factAndFindData['Advisor_Name'] = $("#advisorName").val();
    factAndFindData['Referral'] = $("#referredBy option:selected").val();
    factAndFindData['First_Name'] = $("#firstName1").val();
    factAndFindData['Last_Name'] = $("#lastName1").val();
    factAndFindData['Name'] = $("#firstName1").val() + " " + $("#lastName1").val();
    factAndFindData['Date_of_Birth'] = moment($('#dateOfBirth1').val()).format('DD-MMM-YYYY');
    
    factAndFindData['Leads_Life_Owner'] = $("#leadOwner option:selected").val();
    factAndFindData['Advisor'] = $("#advisor_Name option:selected").val();
    factAndFindData['Created_By'] = $("#advisorName").val();
    // console.log($("#clientProfileName").val());
    // console.log($("#policyName").val());
    factAndFindData['Company'] = $("#clientProfileName").val();
    factAndFindData['Policy_Name'] = $("#policyName").val();
    // Client_profile_Name
    // Policy_Name
    
    // factAndFindData['Address'] = $('#address').val();
    
    //Address Information 
    factAndFindData['Street'] = $("#street").val();
    factAndFindData['Country'] = $("#country option:selected").val();
    factAndFindData['Unit_Suite'] = $("#unit").val();
    factAndFindData['State_Province'] = $("#state option:selected").val();
    factAndFindData['City'] = $("#city").val();
    factAndFindData['Postal_Code'] = $("#postalCode").val();
    
    factAndFindData['Client_1_Email'] = $('#email1').val();
    factAndFindData['Client_1_Home_Phone'] = $('#phone1').val();
    factAndFindData['Client_1_Mobile'] = $('#mobile1').val();
    factAndFindData['Relationship'] = $('#relationship').val();
    factAndFindData['Dependent_1'] = $('#dependent1').val();
    factAndFindData['Dependent_2'] = $('#dependent2').val();
    factAndFindData['Client_2_Dependent_1'] = $('#dependent3').val();
    factAndFindData['Client_2_Dependent_2'] = $('#dependent4').val();
    
    //Occuppation Tab
    factAndFindData['Employer'] = $("#employer1").val();
    factAndFindData['Position'] = $("#position1").val();
    factAndFindData['Nature_of_Business1'] = $("#natureOfBusiness1").val();
    factAndFindData['Employment_Type'] = $("input[name='employmentType1']:checked").val();
    factAndFindData['Notes'] = $("#notes1").val();
    
    
    //Income Tab
    factAndFindData['Monthly_Gross_Income'] = Number($("#grossIncomemonthly1").val());
    factAndFindData['Annual_Gross_Income'] = Number($("#grossIncomeannual1").val());
    factAndFindData['Monthly_Self_Employed'] = Number($("#selfEmployedmonthly1").val());
    factAndFindData['Annual_Self_Employed'] = Number($("#selfEmployedannual1").val());
    factAndFindData['Monthly_Bonus'] = Number($("#bonusmonthly1").val());
    factAndFindData['Annual_Bonus'] = Number($("#bonusannual1").val());
    factAndFindData['Monthly_Commissions'] = Number($("#commissionsmonthly1").val());
    factAndFindData['Annual_Commissions'] = Number($("#commissionsannual1").val());
    factAndFindData['Monthly_Interest_Income'] = Number($("#intIncomemonthly1").val());
    factAndFindData['Annual_Interest_Income'] = Number($("#intIncomeannual1").val());
    factAndFindData['Monthly_Dividend_Income'] = Number($("#divIncomemonthly1").val());
    factAndFindData['Annual_Dividend_Income'] = Number($("#divIncomeannual1").val());
    factAndFindData['Monthly_Investment_Property'] = Number($("#invPromonthly1").val());
    factAndFindData['Annual_Investment_Property'] = Number($("#invProannual1").val());
    factAndFindData['Monthly_Pension'] = Number($("#pensionmonthly1").val());
    factAndFindData['Annual_Pension'] = Number($("#pensionannual1").val());
    factAndFindData['Monthly_Annuity'] = Number($("#annuitymonthly1").val());
    factAndFindData['Annual_Annuity'] = Number($("#annuityannual1").val());
    factAndFindData['Monthly_CPP_OAS_GIS'] = Number($("#cogmonthly1").val());
    factAndFindData['Annual_CPP_OAS_GIS'] = Number($("#cogannual1").val());
    factAndFindData['Monthly_Other1'] = Number($("#othermonthly1").val());
    factAndFindData['Annual_Other1'] = Number($("#otherannual1").val());
    factAndFindData['Monthly_Total1'] = Number($("#totalmonthly1").val());
    factAndFindData['Annual_Total1'] = Number($("#totalannual1").val());
    
    
    //Debt Tab
    factAndFindData['Residential_Mortgage'] = Number($("#resMor1").val());
    factAndFindData['Other_Mortgage_s'] = Number($("#othMor1").val());
    factAndFindData['Line_of_Credit'] = Number($("#loc1").val());
    factAndFindData['Credit_Card'] = Number($("#creditcard1").val());
    factAndFindData['Student_Loan'] = Number($("#studentLoan1").val());
    factAndFindData['Other1'] = Number($("#other1_1").val());
    factAndFindData['Other_2'] = Number($("#other1_2").val());
    factAndFindData['Total2'] = Number($("#totaldebt1").val());
    
    
    //Existing Insurance Tab
    var subFormInsuranceData = [];
    $("#existingInsuarnce tbody tr").each(function (index, element) {
        // if (index != 0) {
        var currentRow = $(this);
        var insuranceType = currentRow.find("td:eq(0) .insuranceType").val();
        var policyNumber = currentRow.find("td:eq(1) .policyNumber").val();
        var carrierValue = currentRow.find("td:eq(2) .carrier").val();
        var ownerValue = currentRow.find("td:eq(3) .owner").val();
        var insuredValue = currentRow.find("td:eq(4) .insured").val();
        var beneficiaryValue = currentRow.find("td:eq(5) .beneficiary").val();
        var benefitAmount = currentRow.find("td:eq(6) .benefit").val();
        var premiumValue = currentRow.find("td:eq(7) .premium").val();
        var notes = currentRow.find("td:eq(8) .notes").val();
    
        var insuranceRowObject = {};
    
        insuranceRowObject.Type_field = insuranceType;
        insuranceRowObject.Policy = policyNumber;
        insuranceRowObject.Carrier = carrierValue;
        insuranceRowObject.Owner = ownerValue;
        insuranceRowObject.Insured = insuredValue;
        insuranceRowObject.Beneficiary2 = Number(beneficiaryValue);
        insuranceRowObject.Benefit_Amount = Number(benefitAmount);
        insuranceRowObject.Premium = premiumValue;
        insuranceRowObject.Notes = notes;
    
        // console.log(insuranceRowObject);
        subFormInsuranceData.push(insuranceRowObject);
        // }
    });
    
    // console.log(JSON.stringify(subFormInsuranceData));
    factAndFindData['Existing_Insurance'] = subFormInsuranceData;
    factAndFindData['Are_you_planning_on_replacing_or_cancelling_any_of_the_above_policies'] = $("#planningNotes").val();
    
    //Health Tab
    factAndFindData['Smoking_Status_Client_1'] = $("#smokingStatus1").val();
    factAndFindData['Health_Client_1'] = $("#health1").val();
    factAndFindData['Height_Weight_Client_1'] = $("#heightWeight1").val();
    factAndFindData['Family_History_Client_1_Required_for_Critical_illness'] = $("#familyHistory1").val();
    
    
    //Life Insurance - Needs Analysis
    factAndFindData['Notes3'] = $("#lifeAnalysis").val();
    
    //Disability Insurance - Needs Analysis
    factAndFindData['Notes4'] = $("#disabilityAnalysis").val();
    
    //CRITICAL ILLNESS INSURANCE - NEEDS ANALYSIS
    factAndFindData['Income_Suplement_Client_1'] = $("#incomeSupp1").val();
    factAndFindData['Spousal_Income_Supplement'] = $("#spousualincomeSupp1").val();
    factAndFindData['Everyday_Living_Expenses'] = $("#everydayLivingExpenses1").val();
    factAndFindData['Other_Medical_Related_Costs'] = $("#othmedrelcost1").val();
    factAndFindData['Household_Support'] = $("#houseHoldSupp1").val();
    factAndFindData['Savings_and_Investments_Plans'] = $("#savingsandInv1").val();
    factAndFindData['Other_Lifestyle_Expenses'] = $("#otherLifeExp1").val();
    factAndFindData['Additional_Notes_Comments'] = $("#additionalNotes").val();
    factAndFindData['Lead_Type'] = "Client 1";
    // console.log("formData:" + factAndFindData);
    return factAndFindData;
}

function collectFormDataClient2() {
    var factAndFindData2 = {};
    // console.log("collectformdata");

    // Lead Details
    factAndFindData2['Lead_Source'] = "Self";

    //General Information Tab
    if ($("#date").val() != "") {
        factAndFindData2['Date_field'] = moment($("#date").val()).format('DD-MMM-YYYY');
    } else {
        factAndFindData2['Date_field'] = "";
    }

    factAndFindData2['Advisor_Name'] = $("#advisorName").val();
    factAndFindData2['Referral'] = $("#referredBy option:selected").val();
    factAndFindData2['First_Name'] = $("#firstName2").val();
    factAndFindData2['Last_Name'] = $("#lastName2").val();
    factAndFindData2['Name'] = $("#firstName2").val() + " " + $("#lastName2").val();
    if ($('#dateOfBirth2').val() != "") {
        factAndFindData2['Date_of_Birth'] = moment($('#dateOfBirth2').val()).format('DD-MMM-YYYY');
    }
    else {
        factAndFindData2['Date_of_Birth'] = "";
    }
    factAndFindData2['Relationship'] = $('#relationship2').val();
    factAndFindData2['Leads_Life_Owner'] = $("#leadOwner option:selected").val();
    factAndFindData2['Advisor'] = $("#advisor_Name option:selected").val();
    factAndFindData2['Created_By'] = $("#advisorName").val();
    factAndFindData2['Company'] = $("#clientProfileName").val();
    factAndFindData2['Policy_Name'] = $("#policyName").val();
    
    // factAndFindData2['Address'] = $('#address').val();

    //Address Information 
    factAndFindData2['Street'] = $("#street").val();
    factAndFindData2['Country'] = $("#country option:selected").val();
    factAndFindData2['Unit_Suite'] = $("#unit").val();
    factAndFindData2['State_Province'] = $("#state option:selected").val();
    factAndFindData2['City'] = $("#city").val();
    factAndFindData2['Postal_Code'] = $("#postalCode").val();

    factAndFindData2['Client_1_Email'] = $('#email2').val();
    factAndFindData2['Client_1_Home_Phone'] = $('#phone2').val();
    factAndFindData2['Client_1_Mobile'] = $('#mobile2').val();
    factAndFindData2['Dependent_1'] = $('#dependent1').val();
    factAndFindData2['Dependent_2'] = $('#dependent2').val();
    factAndFindData2['Client_2_Dependent_1'] = $('#dependent3').val();
    factAndFindData2['Client_2_Dependent_2'] = $('#dependent4').val();


    //Occuppation Tab
    factAndFindData2['Employer'] = $("#employer2").val();
    factAndFindData2['Position'] = $("#position2").val();
    factAndFindData2['Nature_of_Business1'] = $("#natureOfBusiness2").val();
    factAndFindData2['Employment_Type'] = $("input[name='employmentType2']:checked").val();
    factAndFindData2['Notes'] = $("#notes2").val();

    //Income Tab
    factAndFindData2['Monthly_Gross_Income'] = Number($("#grossIncomemonthly2").val());
    factAndFindData2['Annual_Gross_Income'] = Number($("#grossIncomeannual2").val());
    factAndFindData2['Monthly_Self_Employed'] = Number($("#selfEmployedmonthly2").val());
    factAndFindData2['Annual_Self_Employed'] = Number($("#selfEmployedannual2").val());
    factAndFindData2['Monthly_Bonus'] = Number($("#bonusmonthly2").val());
    factAndFindData2['Annual_Bonus'] = Number($("#bonusannual2").val());
    factAndFindData2['Monthly_Commissions'] = Number($("#commissionsmonthly2").val());
    factAndFindData2['Annual_Commissions'] = Number($("#commissionsannual2").val());
    factAndFindData2['Monthly_Interest_Income'] = Number($("#intIncomemonthly2").val());
    factAndFindData2['Annual_Interest_Income'] = Number($("#intIncomeannual2").val());
    factAndFindData2['Monthly_Dividend_Income'] = Number($("#divIncomemonthly2").val());
    factAndFindData2['Annual_Dividend_Income'] = Number($("#divIncomeannual2").val());
    factAndFindData2['Monthly_Investment_Property'] = Number($("#invPromonthly2").val());
    factAndFindData2['Annual_Investment_Property'] = Number($("#invProannual2").val());
    factAndFindData2['Monthly_Pension'] = Number($("#pensionmonthly2").val());
    factAndFindData2['Annual_Pension'] = Number($("#pensionannual2").val());
    factAndFindData2['Monthly_Annuity'] = Number($("#annuitymonthly2").val());
    factAndFindData2['Annual_Annuity'] = Number($("#annuityannual2").val());
    factAndFindData2['Monthly_CPP_OAS_GIS'] = Number($("#cogmonthly2").val());
    factAndFindData2['Annual_CPP_OAS_GIS'] = Number($("#cogannual2").val());
    factAndFindData2['Monthly_Other1'] = Number($("#otherannual2").val());
    factAndFindData2['Annual_Other1'] = Number($("#othermonthly2").val());
    factAndFindData2['Monthly_Total1'] = Number($("#totalmonthly2").val());
    factAndFindData2['Annual_Total1'] = Number($("#totalannual2").val());

    //Debt Tab
    factAndFindData2['Residential_Mortgage'] = Number($("#resMor2").val());
    factAndFindData2['Other_Mortgage_s'] = Number($("#othMor2").val());
    factAndFindData2['Line_of_Credit'] = Number($("#loc2").val());
    factAndFindData2['Credit_Card'] = Number($("#creditcard2").val());
    factAndFindData2['Student_Loan'] = Number($("#studentLoan2").val());
    factAndFindData2['Other1'] = Number($("#other2_1").val())
    factAndFindData2['Other_2'] = Number($("#other2_2").val());
    factAndFindData2['Total2'] = Number($("#totaldebt2").val());

    //Existing Insurance Tab
    var subFormInsuranceData = [];
    $("#existingInsuarnce tbody tr").each(function (index, element) {
        // if (index != 0) {
        var currentRow = $(this);
        var insuranceType = currentRow.find("td:eq(0) .insuranceType").val();
        var policyNumber = currentRow.find("td:eq(1) .policyNumber").val();
        var carrierValue = currentRow.find("td:eq(2) .carrier").val();
        var ownerValue = currentRow.find("td:eq(3) .owner").val();
        var insuredValue = currentRow.find("td:eq(4) .insured").val();
        var beneficiaryValue = currentRow.find("td:eq(5) .beneficiary").val();
        var benefitAmount = currentRow.find("td:eq(6) .benefit").val();
        var premiumValue = currentRow.find("td:eq(7) .premium").val();
        var notes = currentRow.find("td:eq(8) .notes").val();

        var insuranceRowObject = {};

        insuranceRowObject.Type_field = insuranceType;
        insuranceRowObject.Policy = policyNumber;
        insuranceRowObject.Carrier = carrierValue;
        insuranceRowObject.Owner = ownerValue;
        insuranceRowObject.Insured = insuredValue;
        insuranceRowObject.Beneficiary = beneficiaryValue;
        insuranceRowObject.Benefit_Amount = Number(benefitAmount);
        insuranceRowObject.Premium = premiumValue;
        insuranceRowObject.Notes = notes;

        // console.log(insuranceRowObject);
        subFormInsuranceData.push(insuranceRowObject);
        // }
    });

    // console.log(JSON.stringify(subFormInsuranceData));
    factAndFindData2['Existing_Insurance'] = subFormInsuranceData;
    factAndFindData2['Are_you_planning_on_replacing_or_cancelling_any_of_the_above_policies'] = $("#planningNotes").val();

    //Health Tab
    factAndFindData2['Smoking_Status_Client_1'] = $("#smokingStatus2").val();
    factAndFindData2['Health_Client_1'] = $("#health2").val();
    factAndFindData2['Height_Weight_Client_1'] = $("#heightWeight2").val();
    factAndFindData2['Family_History_Client_1_Required_for_Critical_illness'] = $("#familyHistory2").val();

    //Life Insurance - Needs Analysis
    factAndFindData2['Notes3'] = $("#lifeAnalysis").val();

    //Disability Insurance - Needs Analysis
    factAndFindData2['Notes4'] = $("#disabilityAnalysis").val();

    //CRITICAL ILLNESS INSURANCE - NEEDS ANALYSIS
    factAndFindData2['Income_Suplement_Client_1'] = $("#incomeSupp2").val();
    factAndFindData2['Spousal_Income_Supplement'] = $("#spousualincomeSupp2").val();
    factAndFindData2['Everyday_Living_Expenses'] = $("#everydayLivingExpenses2").val();
    factAndFindData2['Other_Medical_Related_Costs'] = $("#othmedrelcost2").val();
    factAndFindData2['Household_Support'] = $("#houseHoldSupp2").val();
    factAndFindData2['Savings_and_Investments_Plans'] = $("#savingsandInv2").val();
    factAndFindData2['Other_Lifestyle_Expenses'] = $("#otherLifeExp2").val();
    factAndFindData2['Additional_Notes_Comments'] = $("#additionalNotes").val();
    factAndFindData2['Lead_Type'] = "Client 2";
    // factAndFindData2['Parent_ID'] =  ""
    // console.log("formData:" + factAndFindData2);
    return factAndFindData2;
}
/**
 * This function is to calcualte the monthly total for client 1 in Income Section
 */
function calcualteIncomeTotalClient1Monthly(client1Monthly) {
    $("#totalmonthly1").val("");
    $("#totalannual1").val("");
    var nextTD = $(client1Monthly).closest('td').next().find('input');
    var annualValue = Number($(client1Monthly).val()) * 12;
    totalIncomeClient1Annual += annualValue;
    nextTD.val(annualValue);
    totalIncomeClient1Monthly += Number($(client1Monthly).val());
    $("#totalmonthly1").val(Number(totalIncomeClient1Monthly));
    $("#totalannual1").val(Number(totalIncomeClient1Annual));

}
/**
* This function is to calcualte the annual total for client 1 in Income Section
*/
function calcualteIncomeTotalClient1Annual(client1Annual) {
    $("#totalannual1").val("");
    totalIncomeClient1Annual += Number($(client1Annual).val());
    $("#totalannual1").val(Number(totalIncomeClient1Annual));
}
/**
* This function is to calcualte the monthly total for client 2 in Income Section
*/
function calcualteIncomeTotalClient2Monthly(client2Monthly) {
    $("#totalmonthly2").val("");
    $("#totalannual2").val("");
    var nextTD = $(client2Monthly).closest('td').next().find('input');
    var annualValue = Number($(client2Monthly).val()) * 12;
    totalIncomeClient2Annual += annualValue;
    nextTD.val(annualValue);
    totalIncomeClient2Monthly += Number($(client2Monthly).val());
    $("#totalmonthly2").val(Number(totalIncomeClient2Monthly));
    $("#totalannual2").val(Number(totalIncomeClient2Annual));

}
/**
* This function is to calcualte the annual total for client 2 in Income Section
*/
function calcualteIncomeTotalClient2Annual(client2Annual) {
    $("#totalannual2").val("");
    totalIncomeClient2Annual += Number($(client2Annual).val());
    $("#totalannual2").val(Number(totalIncomeClient2Annual));

}
/**
 * This function is to calculate total for Client 1 in Debt section
 */
function calculateClient1TotalDebt(selectorID) {
    $("#totaldebt1").val("");
    totalDebtClient1 += Number($(selectorID).val());
    $("#totaldebt1").val(Number(totalDebtClient1));
}
/**
* This function is to calculate total for Client 2 in Debt section
*/
function calculateClient2TotalDebt(selectorID) {
    $("#totaldebt2").val("");
    totalDebtClient2 += Number($(selectorID).val());
    $("#totaldebt2").val(Number(totalDebtClient2));
}

/**
* 
* @param {} factAndFindData 
*/
function factAndFindAdd(factAndFindData,factAndFindData2) {

    // factAndFindData = {"Advisor_Name":"Internal Test Advisor","Referred_By":"Test Referred By Widget","Name":"Test Client 1","Relationship":"Daughter","Address":"Hosur","Client_1_Email":"test@abc.com","Dependent_1":"Father","Dependent_2":"Mother "};
    // $("#loadingDiv").css("display","block");
    $('#cover-spin').show(0);
    var factAndFindDataDetails = {};
    var factAndFindDataDetails2 = {};
    ZOHO.CREATOR.init().then(function (data) {

        factAndFindDataDetails = {
            "data": factAndFindData
        }
        // console.log(JSON.stringify(factAndFindDataDetails));

        if($('#recordID').val() == "" && $('#recordIDC2').val() == "")
        {
        var config = {
            appName: "oracle-life-insurance",
            formName: "Leads",
            data: factAndFindDataDetails
        }
        console.log(config);

        ZOHO.CREATOR.API.addRecord(config).then(function (response) {
            console.log(response);
            if (response.code == 3000) {

                // Second Client insert record
                if($("#firstName2").val() != "" && $("#email2").val() != "" )
                {
                factAndFindData2['Parent_ID'] = response.data.ID;
                factAndFindDataDetails2 = {
                    "data": factAndFindData2
                }

                var config2 = {
                    appName: "oracle-life-insurance",
                    formName: "Leads",
                    data: factAndFindDataDetails2
                }

                ZOHO.CREATOR.API.addRecord(config2).then(function (response2) {

                    console.log(response2);
                    if (response2.code == 3000) {
                            console.log(response2);
                    }
                    else 
                    {
                        console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
                        $('#cover-spin').hide();
                    }


                }).catch(err => {
                    $('#cover-spin').hide();
                    console.log("error message c2:" + JSON.stringify(err));
                });
            }
                // Second Client insert record
               

                
                $('#cover-spin').hide();

                swal({
                    title: "Success",
                    text: "Data has been Added Successfully",
                    type: "success"
                });

                var leadRecordID = response.data.ID;
                getSpecificRecordFromLead(leadRecordID);
                
            } else {
                console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
                $('#cover-spin').hide();
            }
        }).catch(err => {
            $('#cover-spin').hide();
            console.log("error message c1:" + JSON.stringify(err));
        });
        } else {

    // update function

        var config = { 
            appName : "oracle-life-insurance",
            reportName : "All_Leads_Report", 
            id : $('#recordID').val(),
            data : factAndFindDataDetails 
     } 
     
     ZOHO.CREATOR.API.updateRecord(config).then(function(response){
         if(response.code == 3000){

            if($('#recordIDC2').val() != ""){
                factAndFindData2['Parent_ID'] = response.data.ID;
                factAndFindDataDetails2 = {
                    "data": factAndFindData2
                }

                var config2 = {
                    appName: "oracle-life-insurance",
                    reportName : "All_Leads_Report", 
                    id : $('#recordIDC2').val(),
                    data: factAndFindDataDetails2
                }

                ZOHO.CREATOR.API.updateRecord(config2).then(function(response2){
                    if (response2.code == 3000) {
                        console.log(response2);
                }
                else 
                {
                    console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
                    $('#cover-spin').hide();
                }

            }).catch(err => {
                $('#cover-spin').hide();
                console.log("error message c2:" + JSON.stringify(err));
            });
            }

            else 
            {
                if($("#firstName2").val() != "" && $("#email2").val() != "" )
                {
                factAndFindData2['Parent_ID'] = response.data.ID;
                factAndFindDataDetails2 = {
                    "data": factAndFindData2
                }

                var config2 = {
                    appName: "oracle-life-insurance",
                    formName: "Leads",
                    data: factAndFindDataDetails2
                }

                ZOHO.CREATOR.API.addRecord(config2).then(function (response2) {

                    console.log(response2);
                    if (response2.code == 3000) {
                            console.log(response2);
                    }
                    else 
                    {
                        console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
                        $('#cover-spin').hide();
                    }


                }).catch(err => {
                    $('#cover-spin').hide();
                    console.log("error message c2:" + JSON.stringify(err));
                });
            }
                // Second Client insert record
            }

            


            $('#cover-spin').hide();
            swal({
                title: "Success",
                text: "Data has been Updated Successfully",
                type: "success"
            });
             console.log("Record updated successfully");
             var leadRecordID = response.data.ID;
                // console.log("data ID inserted to variable");
            getSpecificRecordFromLead(leadRecordID);
            // console.log("data ID inserted to variable");
 
            console.log("data completed");
            // location.reload(true);
         } 
         else {
            console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
            $('#cover-spin').hide();
         }
     }).catch(err => {
        $('#cover-spin').hide();
        console.log("error message:" + JSON.stringify(err));
    });
        }
    });
}

function getSpecificRecordFromLead(leadRecordID)
{
    // console.log("data ID updated to function");
    var config = {
        appName : "oracle-life-insurance",
        reportName : "All_Leads_Report", 
        id : leadRecordID
     } 
    
    ZOHO.CREATOR.API.getRecordById(config).then(function(response){
     console.log(response.data);
    console.log("data get ID response to make URL Open");
     window.open("https://crm.zoho.com/crm/org635619803/tab/CustomModule13/"+response.data.ZCRM_ID,"_parent");
    });
}


function populateLoggedInUser() {
    var currentDate = new Date();
    var curr_date = currentDate.getDate();
    var curr_month = currentDate.getMonth() + 1; //Months are zero based
    var curr_year = currentDate.getFullYear();

    var dateValue = curr_year + "-" + curr_month + "-" + curr_date;
    // console.log(dateValue);
    // console.log(dateValue.toString());
    // console.log('"'+dateValue + '"');
    var currentDate = moment(new Date()).format('YYYY-MM-DD');
    // console.log(currentDate);
    var currentDateValue = '"'+currentDate +'"';
    // console.log(currentDateValue);
    // $("#date").val("2023-06-07");
    // console.log("inside populate logged in user");
    ZOHO.CREATOR.init().then(function (data) {
        var loggedinUserData = { "Dummy_Field": "Test Record" };
        loggedInDataDetails = {
            "data": loggedinUserData
        }

        var config = {
            appName: "oracle-life-insurance",
            formName: "LoggedInUserForm",
            data: loggedInDataDetails
        }
        // console.log(config);

        ZOHO.CREATOR.API.addRecord(config).then(function (response) {
            console.log(response);
            if (response.code == 3000) {
                console.log("Record added successfully");
                populateAdvisorName(response.data.ID);
            } else {
                console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
            }
        }).catch(err => {
            console.log("error message:" + JSON.stringify(err));
        });
    });
}
function populateAdvisorName(recordID) {

    // var recordID = dataList.ID;
    // console.log(recordID);

    ZOHO.CREATOR.init().then(function (data) {
        addressDetailsConfig = {
            appName: "oracle-life-insurance",
            reportName: "LoggedInUserForm_Report",
            id: recordID
        }
        // console.log(addressDetailsConfig);
        ZOHO.CREATOR.API.getRecordById(addressDetailsConfig).then(function (response) {
            // console.log(JSON.stringify(response.data));
            if (response.code == 3000) {
                // console.log("successs");
                $("#advisorName").val(response.data.Logged_In_User);
            } else {
                console.log(response.code);
                console.log(response.err);
            }

        });
    });
}
/**
 * This fucntion is fetch all referred By Details
 */
function getReferredByDetails() {
    var creatorSdk = ZOHO.CREATOR.init();

    creatorSdk.then(function (data) {
        getReferredByData("1");
    });
    async function getReferredByData(pageNum) {
        config = {
            appName: "oracle-life-insurance",
            reportName: "All_Referrals",
            page: pageNum,
            pageSize: 200
        }
        var getRecords = ZOHO.CREATOR.API.getAllRecords(config);
        getRecords.then(function (response) {
            $.each(response.data, function (idx, dataList) {
                $('#referredBy').append('<option value="' + dataList.ID + '">' + dataList.Referred_By + ' - ' + dataList.Email + '</option>');
            });
            var recordsLength = Object.keys(response.data).length;
            if (recordsLength == 200) {
                getReferredByData(parseInt(pageNum) + 1);
            }
            else {
                console.log("Less than 200");
            }
        }).catch(err => console.log("No matching records"));
    }
}

function getLeadOwnerDetails(){
    // alert("LeadOwner");
    var creatorSdk = ZOHO.CREATOR.init();
    creatorSdk.then(function (data) {
        getLeadOwnerData("1");
    });
    async function getLeadOwnerData(pageNum) {
        config = {
            appName: "oracle-life-insurance",
            reportName: "All_Users",
            page: pageNum,
            pageSize: 200
        }
        var getRecords = ZOHO.CREATOR.API.getAllRecords(config);
        getRecords.then(function (response) {
            $.each(response.data, function (idx, dataList) {
                if(dataList.Permission.indexOf('Lead Owner') >= 0 && dataList.Permission != null)
                {
                    // console.log(dataList.Permission.indexOf('Lead Owner'));
                    $('#leadOwner').append('<option value="' + dataList.ID + '">' + dataList.User_Name + ' - ' + dataList.Email + '</option>');
                }
                if(dataList.Permission.indexOf('Advisor') >= 0 && dataList.Permission != null)
                {
                    $('#advisor_Name').append('<option value="' + dataList.ID + '">' + dataList.User_Name + ' - ' + dataList.Email + '</option>');
                }
                else if(dataList.Permission.indexOf('Lead Owner') >= 0 && dataList.Permission.indexOf('Advisor') >= 0 && dataList.Permission != null){
                    $('#advisor_Name').append('<option value="' + dataList.ID + '">' + dataList.User_Name + ' - ' + dataList.Email + '</option>');
                    $('#leadOwner').append('<option value="' + dataList.ID + '">' + dataList.User_Name + ' - ' + dataList.Email + '</option>');
                }
                // $('#leadOwner').append('<option value="' + dataList.ID + '">' + dataList.User_Name + '</option>');
            });
            var recordsLength = Object.keys(response.data).length;
            if (recordsLength == 200) {
                getLeadOwnerData(parseInt(pageNum) + 1);
            }
            else {
                console.log("Less than 200");
            }
        }).catch(err => console.log("No matching records"));
    }
}
/**
 * This function is to populate country and on change of country populate state
 */
function populateStateOnCountrySelection() {
    // $("#date").val("2023-07-06");
    $('#state').empty();
    // console.log("on change of country");
    var creatorSdk = ZOHO.CREATOR.init();
    creatorSdk.then(function (data) {
        getStateDetails();
    });
    var selectedCountryName = $("#country option:selected").val();
    async function getStateDetails(pageNum) {
        getStateDetailsConfig = {
            appName: "oracle-life-insurance",
            reportName: "State_Province_Report",
            criteria: "(Country == \"" + selectedCountryName + "\" )",
        };
        // console.log(getStateDetailsConfig);
        var firstOption = "<option value=''>None</option>";
        $('#state').append(firstOption);
        var getRecords = ZOHO.CREATOR.API.getAllRecords(getStateDetailsConfig);
        getRecords.then(function (response) {
            // console.log("item Details:"+JSON.stringify(response.data));
            $.each(response.data, function (index, dataList) {

                selectValue = '<option value="' + dataList.ID + '">' + dataList.State + '</option>';
                
                $('#state').append(selectValue);
            });
            var recordsLength = Object.keys(response.data).length;
            // console.log(recordsLength);
            // if (recordsLength == 200) {
            //     getStateDetails(parseInt(pageNum) + 1);
            // }
            // else {
            //   console.log("No more Items to Fetch");
            // }
        }).catch(err => console.log("No matching records"));
    }
}

// checkAndDisableclient2();
// dataToSaveFirstForm = collectFormData();
// dataToSaveFirstForm2 = collectFormDataClient2();
// factAndFindAddWhileSave(dataToSaveFirstForm,dataToSaveFirstForm2);

function factAndFindAddWhileSave(factAndFindDataGI,factAndFindDataGI2)
{
 
    $('#cover-spin').show(0);
    var factAndFindDataSave = {};
    var factAndFindDataSave2 = {};
    ZOHO.CREATOR.init().then(function (data) {

        factAndFindDataSave = {
            "data": factAndFindDataGI
        }
        
        if($('#recordID').val() == "")
        {
            // create function
            

        var config = {
            appName: "oracle-life-insurance",
            formName: "Leads",
            data: factAndFindDataSave
        }
        ZOHO.CREATOR.API.addRecord(config).then(function (response) {
            console.log(response);
            if (response.code == 3000) {
            
                // second record insert
                if($("#firstName2").val() != "" && $("#email2").val() != "" )
                {
                console.log("entred inside sec");
                factAndFindDataGI2['Parent_ID'] = response.data.ID;

                factAndFindDataSave2 = {
                    "data": factAndFindDataGI2
                }
                console.log("Map setteled sec");
                var config2 = {
                    appName: "oracle-life-insurance",
                    formName: "Leads",
                    data: factAndFindDataSave2
                }
                console.log("config settled inside sec");
                
                ZOHO.CREATOR.API.addRecord(config2).then(function (response2) {

                    // console.log(response2);
                    console.log(response2);
                    console.log("entred inside insert api sec");
                    if (response2.code == 3000) {
                        console.log("inserted sec");
                            console.log(response2);
                            $('#recordIDC2').val(response2.data.ID);
                    }
                    else 
                    {
                        console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response2.code);
                        $('#cover-spin').hide();
                    }


                }).catch(err => {
                    $('#cover-spin').hide();
                    console.log("error message c2:" + JSON.stringify(err));
                });
            }

            // second record insert finished

                $('#cover-spin').hide();
                swal({
                    title: "Success",
                    text: "Data has been Saved Successfully",
                    type: "success"
                });
                console.log("Record added successfully");
                $('#recordID').val(response.data.ID);
            } else {
                console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
                $('#cover-spin').hide();
            }
        }).catch(err => {
            $('#cover-spin').hide();
            console.log("error message:" + JSON.stringify(err));
        });
    } 
    else 
    {
        // update function
        var config = { 
            appName : "oracle-life-insurance",
            reportName : "All_Leads_Report", 
            id : $('#recordID').val(),
            data : factAndFindDataSave 
     } 
     
     ZOHO.CREATOR.API.updateRecord(config).then(function(response){
         if(response.code == 3000){

            // Second record update
            if($('#recordIDC2').val() != ""){
                factAndFindDataGI2['Parent_ID'] = response.data.ID;
                factAndFindDataSave2 = {
                    "data": factAndFindDataGI2
                }

                var config2 = {
                    appName: "oracle-life-insurance",
                    reportName : "All_Leads_Report", 
                    id : $('#recordIDC2').val(),
                    data: factAndFindDataSave2
                }

                ZOHO.CREATOR.API.updateRecord(config2).then(function(response2){
                    if (response2.code == 3000) {
                        console.log(response2);
                }
                else 
                {
                    console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
                    $('#cover-spin').hide();
                }


            }).catch(err => {
                $('#cover-spin').hide();
                console.log("error message c2:" + JSON.stringify(err));
            });
            }
            else{
                if($("#firstName2").val() != "" && $("#email2").val() != "" )
                {
                console.log("entred inside sec");
                factAndFindDataGI2['Parent_ID'] = response.data.ID;

                factAndFindDataSave2 = {
                    "data": factAndFindDataGI2
                }
                console.log("Map setteled sec");
                var config2 = {
                    appName: "oracle-life-insurance",
                    formName: "Leads",
                    data: factAndFindDataSave2
                }
                console.log("config settled inside sec");
                
                ZOHO.CREATOR.API.addRecord(config2).then(function (response2) {

                    // console.log(response2);
                    console.log(response2);
                    console.log("entred inside insert api sec");
                    if (response2.code == 3000) {
                        console.log("inserted sec");
                            console.log(response2);
                        $('#recordIDC2').val(response2.data.ID);
                    }
                    else 
                    {
                        console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response2.code);
                        $('#cover-spin').hide();
                    }


                }).catch(err => {
                    $('#cover-spin').hide();
                    console.log("error message c2:" + JSON.stringify(err));
                });
            }
            }
// Second record update finish




            $('#cover-spin').hide();
            swal({
                title: "Success",
                text: "Data has been Updated Successfully",
                type: "success"
            });
             console.log("Record updated successfully");
         } 
         else {
            console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
            $('#cover-spin').hide();
         }
     }).catch(err => {
        $('#cover-spin').hide();
        console.log("error message:" + JSON.stringify(err));
    });
    }
    });
}

function saveOnEachTab()
{
    if (!validateForm()) {
        // console.log("inside if");
        return false;
    }
    else {
        checkAndDisableclient2();
        dataToSaveFirstForm = collectFormData();
        dataToSaveFirstForm2 = collectFormDataClient2();
        factAndFindAddWhileSave(dataToSaveFirstForm,dataToSaveFirstForm2);
    }
    
}

function getUrlVars()
{
    console.log("inside url getting Function");
    queryParams = "";
    ZOHO.CREATOR.init().then(function (data) {
       
        // var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();
        var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();
        
        // &RecordIDC2=3645670000000386119

        $("#recordID").val(queryParams.RecordID);
        if(queryParams.RecordIDC2 != undefined)
        {
             
            $("#recordIDC2").val(queryParams.RecordIDC2);
        }
        
        

        if($("#recordID").val() != "")
        {
            console.log("got URL from query params");
            
            // value setting
            var config = {
                appName : "oracle-life-insurance",
                reportName : "All_Leads_Report", 
                id : queryParams.RecordID
             } 
            
            ZOHO.CREATOR.API.getRecordById(config).then(function(response){
            //  console.log(response.data.Existing_Insurance);
            console.log(response);
            console.log(response.data);
            

             var defaultDate = response.data.Date_field;
             const convertdate = moment(defaultDate, "DD-MMM-YYYY").format("YYYY-MM-DD");
             $("#dateOfBirth1").val(convertdate);
            // console.log(response.data.Client_1_Home_Phone.slice(2));
             $("#referredBy").val(response.data.Referral.ID.toString());
             $("#leadOwner").val(response.data.Leads_Life_Owner.ID.toString());
             $("#advisor_Name").val(response.data.Advisor.ID.toString());
             $("#street").val(response.data.Street);
             $("#unit").val(response.data.Unit_Suite);
             $("#city").val(response.data.City);
             $("#postalCode").val(response.data.Postal_Code);
             $("#relationship").val(response.data.Relationship);
             $("#advisorName").val(response.data.Created_By);
             $("#country").val(response.data.Country);
             if(response.data.State_Province != "")
             {
                $("#state").val(response.data.State_Province.ID.toString());
             }
             $("#clientProfileName").val(response.data.Company);
             $("#policyName").val(response.data.Policy_Name);
             
  
             $("#dependent1").val(response.data.Dependent_1);
             $("#dependent2").val(response.data.Dependent_2);
             $("#dependent3").val(response.data.Client_2_Dependent_1);
             $("#dependent4").val(response.data.Client_2_Dependent_2);
        
             //General Information Tab - client 1
             $("#firstName1").val(response.data.First_Name);
             $("#lastName1").val(response.data.Last_Name);
              // factAndFindData['Date_of_Birth'] = moment($('#dateOfBirth1').val()).format('DD-MMM-YYYY');
              var dob1 = response.data.Date_of_Birth;
            const convertdatedob1 = moment(dob1, "DD-MMM-YYYY").format("YYYY-MM-DD");
            $("#dateOfBirth1").val(convertdatedob1);
              
             $('#email1').val(response.data.Client_1_Email);
             $('#phone1').val(response.data.Client_1_Home_Phone.slice(2));
             $('#mobile1').val(response.data.Client_1_Mobile.slice(2));
        
         
             
             
        
            // Occupation Tab
            //Occuppation Tab - c1
            $("#employer1").val(response.data.Employer);
            $("#position1").val(response.data.Position);
            $("#natureOfBusiness1").val(response.data.Nature_of_Business1);
            $("#notes1").val(response.data.Notes);

            var empType1 = "";
            // console.log(response2.data.Employment_Type);
            if(response.data.Employment_Type.includes("-"))
            {
                empType1 = response.data.Employment_Type.replace('-', '');
            }
            else{
                empType1 = response.data.Employment_Type;
            }
            $("#"+empType1.charAt(0).toLowerCase() + empType1.slice(1)+"1").prop('checked', true);


            // incomeTab
            $("#grossIncomemonthly1").val(Number(response.data.Monthly_Gross_Income));
            $("#grossIncomeannual1").val(Number(response.data.Annual_Gross_Income));
            $("#selfEmployedmonthly1").val(Number(response.data.Monthly_Self_Employed));
            $("#selfEmployedannual1").val(Number(response.data.Annual_Self_Employed));
            $("#bonusmonthly1").val(Number(response.data.Monthly_Bonus));
            $("#bonusannual1").val(Number(response.data.Annual_Bonus));
            $("#commissionsmonthly1").val(Number(response.data.Monthly_Commissions));
            $("#commissionsannual1").val(Number(response.data.Annual_Commissions));
            $("#intIncomemonthly1").val(Number(response.data.Monthly_Interest_Income));
            $("#intIncomeannual1").val(Number(response.data.Annual_Interest_Income));
            $("#divIncomemonthly1").val(Number(response.data.Monthly_Dividend_Income));
            $("#divIncomeannual1").val(Number(response.data.Annual_Dividend_Income));
            $("#invPromonthly1").val(Number(response.data.Monthly_Investment_Property));
            $("#invProannual1").val(Number(response.data.Annual_Investment_Property));
            $("#pensionmonthly1").val(Number(response.data.Monthly_Pension));
            $("#pensionannual1").val(Number(response.data.Annual_Pension));
            $("#annuitymonthly1").val(Number(response.data.Monthly_Annuity));
            $("#annuityannual1").val(Number(response.data.Annual_Annuity));
            $("#cogmonthly1").val(Number(response.data.Monthly_CPP_OAS_GIS));
            $("#cogannual1").val(Number(response.data.Annual_CPP_OAS_GIS));
            $("#othermonthly1").val(Number(response.data.Monthly_Other1));
            $("#otherannual1").val(Number(response.data.Annual_Other1));
            $("#totalmonthly1").val(Number(response.data.Monthly_Total1));
            $("#totalannual1").val(Number(response.data.Annual_Total1));

            //Debt Tab
            $("#resMor1").val(Number(response.data.Residential_Mortgage));
            $("#othMor1").val(Number(response.data.Other_Mortgage_s));
            $("#loc1").val(Number(response.data.Line_of_Credit));
            $("#creditcard1").val(Number(response.data.Credit_Card));
            $("#studentLoan1").val(Number(response.data.Student_Loan));
            $("#other1_1").val(Number(response.data.Other1));
            $("#other1_2").val(Number(response.data.Other_2));
            $("#totaldebt1").val(Number(response.data.Total2));

            i=0;
            
            $(response.data.Existing_Insurance).each(function(index,element){
                // console.log(element.display_value);
                separatedArray = element.display_value.split('//');

                for (let i = 0; i < 5 ; i++) {
                    // const element = array[index];
                    if(i == index)
                    {

                        var rowNo = i + 1; 
  
                        $("#extIntype"+ rowNo).val(separatedArray[0]);
                        $("#extInpol"+ rowNo).val(separatedArray[1]);
                        $("#extInCarr"+ rowNo).val(separatedArray[2]);
                        $("#extInOwn"+ rowNo).val(separatedArray[3]);
                        $("#extInIns"+ rowNo).val(separatedArray[4]);
                        $("#extInBenefic"+ rowNo).val(separatedArray[5]);
                        $("#extInBenAm"+ rowNo).val(separatedArray[6]);
                        $("#extInPre"+ rowNo).val(separatedArray[7]);
                        $("#extInNot"+ rowNo).val(separatedArray[8]);
                        
                    }
                }
            });
            



        $("#planningNotes").val(response.data.Are_you_planning_on_replacing_or_cancelling_any_of_the_above_policies);

             //Health Tab
             $("#smokingStatus1").val(response.data.Smoking_Status_Client_1);
            $("#health1").val(response.data.Health_Client_1);
            $("#heightWeight1").val(response.data.Height_Weight_Client_1);
            $("#familyHistory1").val(response.data.Family_History_Client_1_Required_for_Critical_illness);
    

            //Life Insurance - Needs Analysis
            $("#lifeAnalysis").val(response.data.Notes3);

            //Disability Insurance - Needs Analysis
            $("#disabilityAnalysis").val(response.data.Notes4);

    //CRITICAL ILLNESS INSURANCE - NEEDS ANALYSIS
    $("#incomeSupp1").val(response.data.Income_Suplement_Client_1);
    $("#spousualincomeSupp1").val(response.data.Spousal_Income_Supplement);
    $("#everydayLivingExpenses1").val(response.data.Everyday_Living_Expenses);
    $("#othmedrelcost1").val(response.data.Other_Medical_Related_Costs);
    $("#houseHoldSupp1").val(response.data.Household_Support);
    $("#savingsandInv1").val(response.data.Savings_and_Investments_Plans);
    $("#otherLifeExp1").val(response.data.Other_Lifestyle_Expenses);
    $("#additionalNotes").val(response.data.Additional_Notes_Comments);

            });

    // value setting client 2
    if(queryParams.RecordIDC2 != undefined)
    {

    
    var config2 = {
        appName : "oracle-life-insurance",
        reportName : "All_Leads_Report", 
        id : queryParams.RecordIDC2
     } 
    
    ZOHO.CREATOR.API.getRecordById(config2).then(function(response2){
        // console.log(response2.data);

        //General Information Tab - client 2
    
         $("#firstName2").val(response2.data.First_Name);
         $("#lastName2").val(response2.data.Last_Name);
         $("#email2").val(response2.data.Client_1_Email);
         var dob2 = response2.data.Date_of_Birth;
         const convertdob2 = moment(dob2, "DD-MMM-YYYY").format("YYYY-MM-DD");
         $("#dateOfBirth2").val(convertdob2);
         $("#mobile2").val(response2.data.Client_1_Mobile.slice(2));
        $("#phone2").val(response2.data.Client_1_Home_Phone.slice(2));
        // $("#policyName").val(response.data.Policy_Name);
        $("#relationship2").val(response2.data.Relationship);

        
        // Occupation Tab

        $("#employer2").val(response2.data.Employer);
        $("#position2").val(response2.data.Position);
        $("#natureOfBusiness2").val(response2.data.Nature_of_Business1);
        $("#notes2").val(response2.data.Notes);
        // selfEmployed2
        // self-Employed2
        var empType = "";
        // console.log(response2.data.Employment_Type);
        if(response2.data.Employment_Type.includes("-"))
        {
            empType = response2.data.Employment_Type.replace('-', '');
            console.log(empType);
        }
        else{
            empType = response2.data.Employment_Type;
        }
        $("#"+empType.charAt(0).toLowerCase() + empType.slice(1)+"2").prop('checked', true);
            
// incomeTab


$("#grossIncomemonthly2").val(Number(response2.data.Monthly_Gross_Income));
$("#grossIncomeannual2").val(Number(response2.data.Annual_Gross_Income));
$("#selfEmployedmonthly2").val(Number(response2.data.Monthly_Self_Employed));
$("#selfEmployedannual2").val(Number(response2.data.Annual_Self_Employed));
$("#bonusmonthly2").val(Number(response2.data.Monthly_Bonus));
$("#bonusannual2").val(Number(response2.data.Monthly_Bonus));
$("#commissionsmonthly2").val(Number(response2.data.Monthly_Commissions));
$("#commissionsannual2").val(Number(response2.data.Annual_Commissions));
$("#intIncomemonthly2").val(Number(response2.data.Monthly_Interest_Income));
$("#intIncomeannual2").val(Number(response2.data.Annual_Interest_Income));
$("#divIncomemonthly2").val(Number(response2.data.Monthly_Dividend_Income));
$("#divIncomeannual2").val(Number(response2.data.Annual_Dividend_Income));
$("#invPromonthly2").val(Number(response2.data.Monthly_Investment_Property));
$("#invProannual2").val(Number(response2.data.Annual_Investment_Property));
$("#pensionmonthly2").val(Number(response2.data.Monthly_Pension));
$("#pensionannual2").val(Number(response2.data.Annual_Pension));
$("#annuitymonthly2").val(Number(response2.data.Monthly_Annuity));
$("#annuityannual2").val(Number(response2.data.Annual_Annuity));
$("#cogmonthly2").val(Number(response2.data.Monthly_CPP_OAS_GIS));
$("#cogannual2").val(Number(response2.data.Annual_CPP_OAS_GIS));
$("#otherannual2").val(Number(response2.data.Monthly_Other1));
$("#othermonthly2").val(Number(response2.data.Annual_Other1));
$("#totalmonthly2").val(Number(response2.data.Monthly_Total1));
$("#totalannual2").val(Number(response2.data.Annual_Total1));

//Debt Tab

$("#resMor2").val(Number(response2.data.Residential_Mortgage));
$("#othMor2").val(Number(response2.data.Other_Mortgage_s));
$("#loc2").val(Number(response2.data.Line_of_Credit));
$("#creditcard2").val(Number(response2.data.Credit_Card));
$("#studentLoan2").val(Number(response2.data.Student_Loan));
$("#other2_1").val(Number(response2.data.Other1));
$("#other2_2").val(Number(response2.data.Other_2));
$("#totaldebt2").val(Number(response2.data.Total2));

//Health Tab

$("#smokingStatus2").val(response2.data.Smoking_Status_Client_1);
$("#health2").val(response2.data.Health_Client_1);
$("#heightWeight2").val(response2.data.Height_Weight_Client_1);
$("#familyHistory2").val(response2.data.Family_History_Client_1_Required_for_Critical_illness);

 //CRITICAL ILLNESS INSURANCE - NEEDS ANALYSIS
 $("#incomeSupp2").val(response2.data.Income_Suplement_Client_1);
 $("#spousualincomeSupp2").val(response2.data.Spousal_Income_Supplement);
 $("#everydayLivingExpenses2").val(response2.data.Everyday_Living_Expenses);
 $("#othmedrelcost2").val(response2.data.Other_Medical_Related_Costs);
 $("#houseHoldSupp2").val(response2.data.Household_Support);
 $("#savingsandInv2").val(response2.data.Savings_and_Investments_Plans);
 $("#otherLifeExp2").val(response2.data.Other_Lifestyle_Expenses);
 $("#additionalNotes").val(response2.data.Additional_Notes_Comments);

    });

    }

        }

    });   
}




    
