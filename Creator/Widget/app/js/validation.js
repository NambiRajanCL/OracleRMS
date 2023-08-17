$(document).ready(function () {
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab);
//     $("#date").val("2023-07-06");
//     var currentDate = moment(new Date()).format('DD-MM-YYYY');
//     console.log(currentDate);
//     var currentDateValue = '"'+currentDate +'"';
//     console.log(currentDateValue);
//     //var dateValue = new Date().toJSON().slice(0,10);
//     var d = new Date();
// var curr_date = d.getDate();
// var curr_month = d.getMonth() + 1; //Months are zero based
// var curr_year = d.getFullYear();
// console.log(curr_date + "-" + curr_month + "-" + curr_year);
// var dateValue = curr_date + "-" + curr_month + "-" + curr_year;
//     document.getElementById("date").value = dateValue;
//     $("#date").val(dateValue);

    $(".recID1").hide();
    $(".recID2").hide();
    document.getElementById("date").value = new Date().toISOString().substring(0, 10);
    // getUrlVars();
    populateStateOnCountrySelection();
    getLeadOwnerDetails();
    populateLoggedInUser();
    getReferredByDetails();
    getUrlVars();
    $("#name").on({
        keyup:function(){
            formatUserName($(this));
        },
        blur:function(){
            formatUserName($(this));
        }
    });
});

function formatUserName(userNameValue){
    //alert(userNameValue);
    var $regexname= "/^([a-zA-Z])$/";
    if (!userNameValue.match($regexname)) {
           $('#name').removeClass('hidden');
           $('#name').show();
       }
     else{
          $('#name').addClass('hidden');
         }
}
function formatNumber(n) {
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function formatCurrency(input, blur) {
  var input_val = input.val();
  if (input_val === "") { return; }
  var original_len = input_val.length;
  var caret_pos = input.prop("selectionStart");
  if (input_val.indexOf(".") >= 0) {
    var decimal_pos = input_val.indexOf(".");
  
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);
    left_side = formatNumber(left_side);
    right_side = formatNumber(right_side);
    if (blur === "blur") {
      right_side += "00";
    }
    right_side = right_side.substring(0, 2);
    input_val = "$" + left_side + "." + right_side;

  } else {
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  input.val(input_val);
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

function validateEmailC1()
{
  // var emailc1 = $("#email1").val();
  if($("#email1").val() != "")
  {
    if($("#email1").hasClass("invalid"))
    {
      $("#email1").removeClass("invalid");
    }
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if($("#email1").val().match(emailFormat))
    {
    return true;
    }
    else
    {
      swal({
        title: "Invalid Email",
        text: "You have entered an invalid email address!",
        type: "error"
    });
      $("#email1").val("");
      return false;
    }
  }
  else
  {
    $("#email1").addClass("invalid"); 
  }
}

function validateEmailC2()
{
  // var emailc1 = $("#email1").val();
  if($("#email2").val() != "")
  {
    if($("#email2").hasClass("invalid"))
    {
      $("#email2").removeClass("invalid");
    }
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if($("#email2").val().match(emailFormat))
    {
    return true;
    }
    else
    {
      swal({
        title: "Invalid Email",
        text: "You have entered an invalid email address!",
        type: "error"
    });
      $("#email2").val("");
      return false;
    }
  }
  else
  {
    $("#email2").addClass("invalid"); 
  }
}

function numberValidation(fieldVar)
{

  if($(fieldVar).val() != "")
  {
    if($(fieldVar).hasClass("invalid"))
    {
      $(fieldVar).removeClass("invalid");
    }
    var emailFormat = /^[0-9-+]+$/;
    if($("#phone1").val().match(emailFormat))
    {
    return true;
    }
    else
    {
      swal({
        title: "Invalid phone number",
        text: "You have entered an invalid phone number!",
        type: "error"
    });
      $(fieldVar).val("");
      return false;
    }
  }
  else
  {
    $(fieldVar).addClass("invalid"); 
  }

}

