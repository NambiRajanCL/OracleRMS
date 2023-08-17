// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab);
var dataToForm = [];
var dataToForm2 = [];

function showTab(n) {
    // alert(n);
    console.log(n);
    var x = document.getElementsByClassName("tab");
  
    $(x).each(function(index,element){
        if(index == n){

         x[n].style.display = "block";
        //  x[n].className += " active";
        //  nextPrev(n);
         currentTab = n;
        //  x[n].className.replace(" active", " finish")
        document.getElementsByClassName("step1")[currentTab].className += " finish";
        fixStepIndicator(n);
        }
        else{
            console.log("elemrnt remaining " + index); 
         x[index].style.display = "none";  
        }
        
   });

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
        //document.getElementById("nextBtn").disabled = true;
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // fixStepIndicator(n);
}


function nextPrev(n) {
    console.log(currentTab);
    // n = ;
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) {
        // console.log("inside if");
        return false;
    } else {
        // console.log("inside else");
        checkAndDisableclient2();
        dataToForm = collectFormData();
        dataToForm2 = collectFormDataClient2();
        console.log("datatoForm ::" + dataToForm);
    }
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        // console.log("before api call");
        factAndFindAdd(dataToForm,dataToForm2);
        //  document.getElementById("rmsForm").submit();
        return false;
    }
    // console.log(currentTab);
    showTab(currentTab);
}

function fixStepIndicator(n) {
    console.log(n);
    var i, x = document.getElementsByClassName("step1");
    // console.log(x);
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
        // x[i].innerHTML = i + 1;
    }
    x[n].className += " active";
}
/**
 * This function is validate the date of birth and restrict future date
 */
function validateDateOfBirth() {
    var currentDate = moment(new Date(), 'DD-MMM-YYYY');
    var selectedDateForClient1 = moment(new Date($("#dateOfBirth1").val()), 'DD-MMM-YYYY');
    var dDiff = currentDate.diff(selectedDateForClient1);
    // console.log(dDiff);
    if (dDiff < 0) {
        swal({
            title: "Please select appropriate date",
            text: "Date of Birth cannot be future date",
            type: "error"
        });
        $("#dateOfBirth1").val("");
        return false;
    }
    if ($("#dateOfBirth2").val() != "") {
        var selectedDateForClient2 = moment(new Date($("#dateOfBirth2").val()), 'DD-MMM-YYYY');
        var dateDiff = currentDate.diff(selectedDateForClient2);
        // console.log(dateDiff);
        if (dateDiff < 0) {
            swal({
                title: "Please select appropriate date",
                text: "Date of Birth cannot be future date",
                type: "error"
            });
            $("#dateOfBirth2").val("");
            return false;
        }
    }
    return true;
}
/**
 * This function is to validate form for mandatory fields
 * @returns valid
 */
function validateForm() {
    // $("#leadOwner option:selected").val();
    // $("#advisorName").val();
    // $("#advisor_Name option:selected").val();
    // factAndFindData['Created_By']

    // $("#policyName2").removeClass("invalid");
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    if ($("#referredBy option:selected").val() == "" || $("#leadOwner option:selected").val() == "" || $("#advisor_Name option:selected").val() == "" || $("#firstName1").val() == "" || $("#dateOfBirth1").val() == "" || $("#email1").val() == "" || $("#phone1").val() == "" || $("#clientProfileName").val() == "" || $("#policyName").val() == "" )
     {
        $("#firstName1").val() == "" ? $("#firstName1").addClass("invalid") : $("#firstName1").removeClass("invalid");
        $("#lastName1").val() == "" ? $("#lastName1").addClass("invalid") : $("#lastName1").removeClass("invalid");
        $("#dateOfBirth1").val() == "" ? $("#dateOfBirth1").addClass("invalid") : $("#dateOfBirth1").removeClass("invalid");
        $("#email1").val() == "" ? $("#email1").addClass("invalid") : $("#email1").removeClass("invalid");
        $("#phone1").val() == "" ? $("#phone1").addClass("invalid") : $("#phone1").removeClass("invalid");
        $("#referredBy").val() == "" ? $("#referredBy").addClass("invalid") : $("#referredBy").removeClass("invalid");
        $("#leadOwner").val() == "" ? $("#leadOwner").addClass("invalid") : $("#leadOwner").removeClass("invalid");
        $("#advisor_Name").val() == "" ? $("#advisor_Name").addClass("invalid") : $("#advisor_Name").removeClass("invalid");
        $("#clientProfileName").val() == "" ? $("#clientProfileName").addClass("invalid") : $("#clientProfileName").removeClass("invalid");
        $("#policyName").val() == "" ? $("#policyName").addClass("invalid") : $("#policyName").removeClass("invalid");
        // addValidOrInvalid();
       
        valid = false;
    } else {

        
        // 
        // 
        // $("#email1").removeClass("invalid");
        // $("#phone1").removeClass("invalid");
        // $("#referredBy").removeClass("invalid");
        // $("#leadOwner").removeClass("invalid");
        // $("#advisor_Name").removeClass("invalid");

        if (!validateDateOfBirth()) {
            valid = false;
        } 
        else if (!validateClient2Form()) {
            valid = false;
        } 
        else {
            valid = true;
        }
    }
    if (valid) {
        document.getElementsByClassName("step1")[currentTab].className += " finish";
    }
    return valid;
}
/**
 * This function is to validate fields in client 2 section
 */
function validateClient2Form() {

    var valid = true;

     if($("#firstName2").val() == "" && $("#lastName2").val() == "" && $("#dateOfBirth2").val() == "" && $("#email2").val() == "" && $("#phone2").val() == "" )
    {
        // $("#policyName2").val() == ""
        $("#firstName2").removeClass("invalid");
        $("#lastName2").removeClass("invalid");
        $("#dateOfBirth2").removeClass("invalid");
        $("#email2").removeClass("invalid");
        $("#phone2").removeClass("invalid");
        // $("#policyName2").removeClass("invalid");
        valid = true;

    }
   
    else if ($("#firstName2").val() == "" || $("#lastName2").val() == "" || $("#dateOfBirth2").val() == "" || $("#email2").val() == "" || $("#phone2").val() == "" ){

        // firstName $("#policyName2").val() == ""
        if($("#firstName2").val() == ""){
            $("#firstName2").addClass("invalid");
        }
        else {
            $("#firstName2").removeClass("invalid");
        }

        // lastName
        if($("#lastName2").val() == ""){
            $("#lastName2").addClass("invalid");
        }
        else {
            $("#lastName2").removeClass("invalid");
        }

        // dateofBirth
        if($("#dateOfBirth2").val() == ""){

            $("#dateOfBirth2").addClass("invalid");
        }
        else{
            $("#dateOfBirth2").removeClass("invalid");
        }

        // email
        if($("#email2").val() == ""){

            $("#email2").addClass("invalid");
        }
        else{
            $("#email2").removeClass("invalid");
        }
        
        // phone
        if($("#phone2").val() == ""){

            $("#phone2").addClass("invalid");
        }
        else{
            $("#phone2").removeClass("invalid");
        }

        // policy name
        // if($("#policyName2").val() == ""){

        //     $("#policyName2").addClass("invalid");
        // }
        // else{
        //     $("#policyName2").removeClass("invalid");
        // }
        
        
        valid = false;
    }
    
    else 
    {
        $("#firstName2").removeClass("invalid");
        $("#lastName2").removeClass("invalid");
        $("#dateOfBirth2").removeClass("invalid");
        $("#email2").removeClass("invalid");
        $("#phone2").removeClass("invalid");
        // $("#policyName2").removeClass("invalid");
        valid = true;
    }
    return valid;
}
/**
 * 
 * @param {*} n 
 */

/**
 * This function is to disable client 2 in all sections if client 2 is not provided in General section
 */
function checkAndDisableclient2() {
    console.log("inside disable");
    var x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // console.log(y[4]);
    if ($("#firstName2").val() == "" && $("#lastName2").val() == "") {
        $("#occupation tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(1) input").attr("disabled", true);
            currentRow.find("td:eq(1) textarea").prop("disabled", true);
        });

        $("#income tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(3) input").attr("disabled", true);
            currentRow.find("td:eq(4) input").attr("disabled", true);
        });

        $("#debt tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(2) input").attr("disabled", true);
        });

        $("#health tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(2) textarea").prop("disabled", true);
        });

        $("#criticalIllness tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(2) input").attr("disabled", true);
            currentRow.find("td:eq(2) textarea").prop("disabled", true);
        });

    }
    else {
        // $("#email2").addClass("invalid");
        $("#occupation tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(1) input").attr("disabled", false);
            currentRow.find("td:eq(1) textarea").prop("disabled", false);
        });

        $("#income tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(3) input").attr("disabled", false);
            currentRow.find("td:eq(4) input").attr("disabled", false);
        });

        $("#debt tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(2) input").attr("disabled", false);
        });

        $("#health tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(2) textarea").prop("disabled", false);
        });

        $("#criticalIllness tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td:eq(2) input").attr("disabled", false);
            currentRow.find("td:eq(2) textarea").prop("disabled", false);
        });

    }
}

function refferedBy()
{
    // alert("hahaha");
   console.log($("#referredBy").val());
    // $("#")
}

function addValidOrInvalid(element)
{
    $(element).val() == "" ? $(element).addClass("invalid") : $(element).removeClass("invalid");
}

