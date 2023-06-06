// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab);
var dataToForm = [];

function showTab(n) {
    var x = document.getElementsByClassName("tab");

    x[n].style.display = "block";
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
    fixStepIndicator(n);
}
function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) {
        console.log("inside if");
        return false;
    } else {
        console.log("inside else");
        checkAndDisableclient2();
        dataToForm = collectFormData();
        console.log("datatoForm ::" + dataToForm);

    }
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        console.log("before api call");
        factAndFindAdd(dataToForm);
        //  document.getElementById("rmsForm").submit();
        return false;
    }
    showTab(currentTab);

}
/**
 * This function is validate the date of birth and restrict future date
 */
function validateDateOfBirth() {
    var currentDate = moment(new Date(), 'DD-MMM-YYYY');
    var selectedDateForClient1 = moment(new Date($("#dateOfBirth1").val()), 'DD-MMM-YYYY');
    var dDiff = currentDate.diff(selectedDateForClient1);
    console.log(dDiff);
    if (dDiff < 0) {
        swal({
            title: "Please select appropriate date",
            text: "Date of Birth cannot be future date",
            type: "error"
        });
        return false;
    }
    if ($("#dateOfBirth2").val() != "") {
        var selectedDateForClient2 = moment(new Date($("#dateOfBirth2").val()), 'DD-MMM-YYYY');
        var dateDiff = currentDate.diff(selectedDateForClient2);
        console.log(dateDiff);
        if (dateDiff < 0) {
            swal({
                title: "Please select appropriate date",
                text: "Date of Birth cannot be future date",
                type: "error"
            });
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
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    if ($("#name1").val() == "" || $("#dateOfBirth1") == "" || $("#email1").val() == "" || $("#phone1").val() == "") {
        $("#name1").addClass("invalid");
        $("#dateOfBirth1").addClass("invalid");
        $("#email1").addClass("invalid");
        $("#phone1").addClass("invalid");
        valid = false;
    } else {
        if (!validateDateOfBirth()) {
            valid = false;
        } else if (!validateClient2Form()) {
            valid = false;
        } else {
            valid = true;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}
/**
 * This function is to validate fields in client 2 section
 */
function validateClient2Form() {
    var valid = true;
    if ($("#name2").val() != "" && $("#dateOfBirth2").val() == "") {
        $("#dateOfBirth2").addClass("invalid");
        valid = false;
    } else if ($("#dateOfBirth2").val() != "" && (($("#name2").val() == ""))) {
        $("#name2").addClass("invalid");
        valid = false;
    } else if ($("#email2").val() != "" && (($("#name2").val() == "" || ($("#dateOfBirth2").val() == "")))) {
        $("#name2").addClass("invalid");
        $("#dateOfBirth2").addClass("invalid");
        valid = false;
    } else if ($("#phone2").val() != "" && (($("#name2").val() == "" || ($("#dateOfBirth2").val() == "")) || $("#email2").val() == "")) {
        $("#name2").addClass("invalid");
        $("#dateOfBirth2").addClass("invalid");
        $("#email2").addClass("invalid");
        valid = false;
    } else {
        console.log("inside else");
        $("#name2").removeClass("invalid");
        $("#dateOfBirth2").removeClass("invalid");
        $("#email2").removeClass("invalid");
        valid = true;
    }
    return valid;
}
/**
 * 
 * @param {*} n 
 */
function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
        x[i].innerHTML = i + 1;
    }
    x[n].className += " active";
}
/**
 * This function is to disable client 2 in all sections if client 2 is not provided in General section
 */
function checkAndDisableclient2() {
    console.log("inside disable");
    var x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // console.log(y[4]);
    if ($("#name2").val() == "") {
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