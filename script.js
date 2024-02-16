$(document).ready(function() {
    var accountData = [];
  
    $("#saveInfo").click(function() {
      var accountId = $("#accountId").val();
      var accountName = $("#accountName").val();
      var accountType = $("#accountType").val();
      var balance = $("#balance").val();
      var creationDate = $("#creationDate").val();
  
      var isValid = true;
  
      // Validate fields
      if (accountId === "" || accountName === "" || accountType === "" || balance === "" || creationDate === "") {
        isValid = false;
        alert("All fields are mandatory.");
      } else if (isNaN(balance)) {
        isValid = false;
        alert("Balance must be numeric.");
      }
    else if(parseFloat(balance) < 5000)
    {
        isValid = false;
        alert("Balance cannot be below Rs 5000.");
    }
  console.log(typeof(creationDate));
      if (isValid) {
        var accountObj = {
          accountId: accountId,
          accountName: accountName,
          accountType: accountType,
          balance: parseFloat(balance),
          creationDate: creationDate
        };
        accountData.push(accountObj);
        console.log("Account saved successfully!");
       
        $("#accountDetails")[0].reset(); // Clear the form
      }
    });
  
    $("#accountInfo").click(function() {
      console.log("Account Information:");
      console.log(accountData);
    });
  });
  