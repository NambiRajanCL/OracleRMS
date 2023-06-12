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
    console.log("collectformdata");

    // Lead Details
    factAndFindData['Lead_Source'] = "Self";

    //General Information Tab
    if ($("#date").val() != "") {
        factAndFindData['Date_field'] = moment($("#date").val()).format('DD-MMM-YYYY');
    } else {
        factAndFindData['Date_field'] = "";
    }

    factAndFindData['Advisor_Name'] = $("#advisorName").val();
    factAndFindData['Referred_By'] = $("#referredBy option:selected").text();
    factAndFindData['First_Name'] = $("#firstName1").val();
    factAndFindData['Last_Name'] = $("#lastName1").val();
    factAndFindData['Name'] = $("#firstName1").val() + " " + $("#lastName1").val();
    factAndFindData['Date_of_Birth'] = moment($('#dateOfBirth1').val()).format('DD-MMM-YYYY');
    factAndFindData['Relationship'] = $('#relationship').val();
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
    factAndFindData['Dependent_1'] = $('#dependent1').val();
    factAndFindData['Dependent_2'] = $('#dependent2').val();
    factAndFindData['First_Name_Client_2'] = $("#firstName2").val();
    factAndFindData['Last_Name_Client_2'] = $("#lastName2").val();
    factAndFindData['Client_2_Name'] = $("#firstName2").val() + " " + $("#lastName2").val();

    if ($('#dateOfBirth2').val() != "") {
        factAndFindData['Client_2_Date_of_Birth'] = moment($('#dateOfBirth2').val()).format('DD-MMM-YYYY');
    }
    else {
        factAndFindData['Client_2_Date_of_Birth'] = "";
    }

    factAndFindData['Client_2_Email'] = $('#email2').val();
    factAndFindData['Client_2_Home_Phone'] = $('#phone2').val();
    factAndFindData['Client_2_Mobile'] = $('#mobile2').val();
    factAndFindData['Client_2_Dependent_1'] = $('#dependent3').val();
    factAndFindData['Client_2_Dependent_2'] = $('#dependent4').val();

    //Occuppation Tab
    factAndFindData['Employer'] = $("#employer1").val();
    factAndFindData['Position'] = $("#position1").val();
    factAndFindData['Nature_of_Business1'] = $("#natureOfBusiness1").val();
    factAndFindData['Employment_Type'] = $("input[name='employmentType2']:checked").val();
    factAndFindData['Notes'] = $("#notes1").val();
    factAndFindData['Employer1'] = $("#employer2").val();
    factAndFindData['Position1'] = $("#position2").val();
    factAndFindData['Nature_Of_Business'] = $("#natureOfBusiness2").val();
    factAndFindData['Employment_Type2'] = $("input[name='employmentType2']:checked").val();
    factAndFindData['Notes1'] = $("#notes2").val();

    //Income Tab
    factAndFindData['Monthly_Gross_Income'] = Number($("#grossIncomemonthly1").val());
    factAndFindData['Annual_Gross_Income'] = Number($("#grossIncomeannual1").val());
    factAndFindData['Monthly_Gross_Income1'] = Number($("#grossIncomemonthly2").val());
    factAndFindData['Annual_Gross_Income1'] = Number($("#grossIncomeannual2").val());
    factAndFindData['Monthly_Self_Employed'] = Number($("#selfEmployedmonthly1").val());
    factAndFindData['Annual_Self_Employed'] = Number($("#selfEmployedannual1").val());
    factAndFindData['Monthly_Self_Employed1'] = Number($("#selfEmployedmonthly2").val());
    factAndFindData['Annual_Self_Employed1'] = Number($("#selfEmployedannual2").val());
    factAndFindData['Monthly_Bonus'] = Number($("#bonusmonthly1").val());
    factAndFindData['Annual_Bonus'] = Number($("#bonusannual1").val());
    factAndFindData['Monthly_Bonus1'] = Number($("#bonusmonthly2").val());
    factAndFindData['Annual_Bonus1'] = Number($("#bonusannual2").val());
    factAndFindData['Monthly_Commissions'] = Number($("#commissionsmonthly1").val());
    factAndFindData['Annual_Commissions'] = Number($("#commissionsannual1").val());
    factAndFindData['Monthly_Commissions1'] = Number($("#commissionsmonthly2").val());
    factAndFindData['Annual_Commissions1'] = Number($("#commissionsannual2").val());
    factAndFindData['Monthly_Interest_Income'] = Number($("#intIncomemonthly1").val());
    factAndFindData['Annual_Interest_Income'] = Number($("#intIncomeannual1").val());
    factAndFindData['Monthly_Interest_Income1'] = Number($("#intIncomemonthly2").val());
    factAndFindData['Annual_Interest_Income1'] = Number($("#intIncomeannual2").val());
    factAndFindData['Monthly_Dividend_Income'] = Number($("#divIncomemonthly1").val());
    factAndFindData['Annual_Dividend_Income'] = Number($("#divIncomeannual1").val());
    factAndFindData['Monthly_Dividend_Income1'] = Number($("#divIncomemonthly2").val());
    factAndFindData['Annual_Dividend_Income1'] = Number($("#divIncomeannual2").val());
    factAndFindData['Monthly_Investment_Property'] = Number($("#invPromonthly1").val());
    factAndFindData['Annual_Investment_Property'] = Number($("#invProannual1").val());
    factAndFindData['Monthly_Investment_Property1'] = Number($("#invPromonthly2").val());
    factAndFindData['Annual_Investment_Property1'] = Number($("#invProannual2").val());
    factAndFindData['Monthly_Pension'] = Number($("#pensionmonthly1").val());
    factAndFindData['Annual_Pension'] = Number($("#pensionannual1").val());
    factAndFindData['Monthly_Pension1'] = Number($("#pensionmonthly2").val());
    factAndFindData['Annual_Pension1'] = Number($("#pensionannual2").val());
    factAndFindData['Monthly_Annuity'] = Number($("#annuitymonthly1").val());
    factAndFindData['Annual_Annuity'] = Number($("#annuityannual1").val());
    factAndFindData['Monthly_Annuity1'] = Number($("#annuitymonthly2").val());
    factAndFindData['Annual_Annnuity_1'] = Number($("#annuityannual2").val());
    factAndFindData['Monthly_CPP_OAS_GIS'] = Number($("#cogmonthly1").val());
    factAndFindData['Annual_CPP_OAS_GIS'] = Number($("#cogannual1").val());
    factAndFindData['Monthly_CPP_OAS_GIS1'] = Number($("#cogmonthly2").val());
    factAndFindData['Annual_CPP_OAS_GIS1'] = Number($("#cogannual2").val());
    factAndFindData['Monthly_Other1'] = Number($("#othermonthly1").val());
    factAndFindData['Annual_Other1'] = Number($("#otherannual1").val());
    factAndFindData['Monthly_Other'] = Number($("#otherannual2").val());
    factAndFindData['Annual_Other'] = Number($("#othermonthly2").val());
    factAndFindData['Monthly_Total1'] = Number($("#totalmonthly1").val());
    factAndFindData['Annual_Total1'] = Number($("#totalannual1").val());
    factAndFindData['Monthly_Total'] = Number($("#totalmonthly2").val());
    factAndFindData['Annual_Total'] = Number($("#totalannual2").val());

    //Debt Tab
    factAndFindData['Residential_Mortgage'] = Number($("#resMor1").val());
    factAndFindData['Other_Mortgage_s'] = Number($("#othMor1").val());
    factAndFindData['Line_of_Credit'] = Number($("#loc1").val());
    factAndFindData['Credit_Card'] = Number($("#creditcard1").val());
    factAndFindData['Student_Loan'] = Number($("#studentLoan1").val());
    factAndFindData['Other1'] = Number($("#other1_1").val());
    factAndFindData['Other_2'] = Number($("#other1_2").val());
    factAndFindData['Total2'] = Number($("#totaldebt1").val());
    factAndFindData['Residential_Mortgage1'] = Number($("#resMor2").val());
    factAndFindData['Other_Mortgage_s1'] = Number($("#othMor2").val());
    factAndFindData['Line_of_Credit1'] = Number($("#loc2").val());
    factAndFindData['Credit_Card1'] = Number($("#creditcard2").val());
    factAndFindData['Student_Loan1'] = Number($("#studentLoan2").val());
    factAndFindData['Other3'] = Number($("#other2_1").val());
    factAndFindData['Other_21'] = Number($("#other2_2").val());
    factAndFindData['Total'] = Number($("#totaldebt2").val());

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

    console.log(JSON.stringify(subFormInsuranceData));
    factAndFindData['Existing_Insurance'] = subFormInsuranceData;
    factAndFindData['Are_you_planning_on_replacing_or_cancelling_any_of_the_above_policies'] = $("#planningNotes").val();

    //Health Tab
    factAndFindData['Smoking_Status_Client_1'] = $("#smokingStatus1").val();
    factAndFindData['Smoking_Status_Client_2'] = $("#smokingStatus2").val();
    factAndFindData['Health_Client_1'] = $("#health1").val();
    factAndFindData['Health_Client_2'] = $("#health2").val();
    factAndFindData['Height_Weight_Client_1'] = $("#heightWeight1").val();
    factAndFindData['Height_Weight_Client_2'] = $("#heightWeight2").val();
    factAndFindData['Family_History_Client_1_Required_for_Critical_illness'] = $("#heightWeight1").val();
    factAndFindData['Family_History_Client_2_Required_for_Critical_illness'] = $("#heightWeight2").val();

    //Life Insurance - Needs Analysis
    factAndFindData['Notes3'] = $("#lifeAnalysis").val();

    //Disability Insurance - Needs Analysis
    factAndFindData['Notes4'] = $("#disabilityAnalysis").val();

    //CRITICAL ILLNESS INSURANCE - NEEDS ANALYSIS
    factAndFindData['Income_Suplement_Client_1'] = $("#incomeSupp1").val();
    factAndFindData['Spousal_Income_Supplement'] = $("#incomeSupp2").val();
    factAndFindData['Everyday_Living_Expenses'] = $("#spousualincomeSupp1").val();
    factAndFindData['Other_Medical_Related_Costs'] = $("#spousualincomeSupp2").val();
    factAndFindData['Household_Support'] = $("#everydayLivingExpenses1").val();
    factAndFindData['Savings_and_Investments_Plans'] = $("#everydayLivingExpenses2").val();
    factAndFindData['Other_Lifestyle_Expenses'] = $("#othmedrelcost1").val();
    factAndFindData['Additional_Notes_Comments'] = $("#othmedrelcost2").val();
    factAndFindData['Income_Supplement'] = $("#houseHoldSupp1").val();
    factAndFindData['Spousal_Income_Supplement1'] = $("#houseHoldSupp2").val();
    factAndFindData['Everyday_Living_Expenses1'] = $("#savingsandInv1").val();
    factAndFindData['Other_Medical_Related_Costs1'] = $("#savingsandInv2").val();
    factAndFindData['Household_Support1'] = $("#otherLifeExp1").val();
    factAndFindData['Savings_and_Investments_Plans1'] = $("#otherLifeExp2").val();
    factAndFindData['Other_Lifestyle_Expenses1'] = $("#additionalNotes").val();
    factAndFindData['Additional_Notes_Comments1'] = $("#additionalNotes").val();

    console.log("formData:" + factAndFindData);
    return factAndFindData;
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
function factAndFindAdd(factAndFindData) {

    // factAndFindData = {"Advisor_Name":"Internal Test Advisor","Referred_By":"Test Referred By Widget","Name":"Test Client 1","Relationship":"Daughter","Address":"Hosur","Client_1_Email":"test@abc.com","Dependent_1":"Father","Dependent_2":"Mother "};
    // $("#loadingDiv").css("display","block");
    $('#cover-spin').show(0);
    var factAndFindDataDetails = {};
    ZOHO.CREATOR.init().then(function (data) {

        factAndFindDataDetails = {
            "data": factAndFindData
        }
        console.log(JSON.stringify(factAndFindDataDetails));

        var config = {
            appName: "oracle-life-insurance",
            formName: "Leads",
            data: factAndFindDataDetails
        }
        console.log(config);

        ZOHO.CREATOR.API.addRecord(config).then(function (response) {
            console.log(response);
            if (response.code == 3000) {
                //alert(response.message);
                $('#cover-spin').hide();
                // $("#spanID").hide();
                // $("#nextBtn").hide();
                // $("#prevBtn").hide();
                // $("#nextBtn").attr("disabled",true);
                // $("#prevBtn").attr("disabled",true);
                //alert("Data Added Successfully");
                swal({
                    title: "Success",
                    text: "Data has been Added Successfully",
                    type: "success"
                });
                location.reload(true);
                console.log("Record added successfully");
            } else {
                console.log("Error Calling Creator API- Add Record - On Form Submit from Widgets:" + response.code);
                $('#cover-spin').hide();
            }
        }).catch(err => {
            $('#cover-spin').hide();
            console.log("error message:" + JSON.stringify(err));
        });
    });
}
function populateLoggedInUser() {
    var currentDate = new Date();
    var curr_date = currentDate.getDate();
    var curr_month = currentDate.getMonth() + 1; //Months are zero based
    var curr_year = currentDate.getFullYear();

    var dateValue = curr_year + "-" + curr_month + "-" + curr_date;
    console.log(dateValue);
    console.log(dateValue.toString());
    console.log('"'+dateValue + '"');
    var currentDate = moment(new Date()).format('YYYY-MM-DD');
    console.log(currentDate);
    var currentDateValue = '"'+currentDate +'"';
    console.log(currentDateValue);
    // $("#date").val("2023-06-07");
    console.log("inside populate logged in user");
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
        console.log(config);

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
    console.log(recordID);

    ZOHO.CREATOR.init().then(function (data) {
        addressDetailsConfig = {
            appName: "oracle-life-insurance",
            reportName: "LoggedInUserForm_Report",
            id: recordID
        }
        console.log(addressDetailsConfig);
        ZOHO.CREATOR.API.getRecordById(addressDetailsConfig).then(function (response) {
            console.log(JSON.stringify(response.data));
            if (response.code == 3000) {
                console.log("successs");
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
                $('#referredBy').append('<option value="' + dataList.ID + '">' + dataList.Referred_By + '</option>');
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
/**
 * This function is to populate country and on change of country populate state
 */
function populateStateOnCountrySelection() {
    // $("#date").val("2023-07-06");
    $('#state').empty();
    console.log("on change of country");
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
        console.log(getStateDetailsConfig);
        var firstOption = "<option value=''>None</option>";
        $('#state').append(firstOption);
        var getRecords = ZOHO.CREATOR.API.getAllRecords(getStateDetailsConfig);
        getRecords.then(function (response) {
            // console.log("item Details:"+JSON.stringify(response.data));
            $.each(response.data, function (index, dataList) {

                selectValue = '<option value="' + dataList.State + '">' + dataList.State + '</option>';
                
                $('#state').append(selectValue);
            });
            var recordsLength = Object.keys(response.data).length;
            console.log(recordsLength);
            // if (recordsLength == 200) {
            //     getStateDetails(parseInt(pageNum) + 1);
            // }
            // else {
            //   console.log("No more Items to Fetch");
            // }
        }).catch(err => console.log("No matching records"));
    }
} 