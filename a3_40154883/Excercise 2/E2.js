function TotalCost() {
    var xHtml = document.getElementById("xhtmlQuantity").value;
    var Php = document.getElementById("phpQuantity").value;
    var jQuery = document.getElementById("jqueryQuantity").value;

    var num = "/\d+/";
    if(xHtml == "" || xHtml.match(num) || Php == "" || Php.match(num) || jQuery == "" || jQuery.match(num))
    {
      alert("please enter book quantity, it can not be blank or unspecified.");
    }
    else{

      var htmlTotal = xHtml * 19.99;
      var phpTotal = Php * 86;
      var jqueryTotal = jQuery * 55;

      var totalCost = (xHtml * 19.99) + (Php * 86) + (jQuery * 55);

      document.getElementById("1").innerHTML = "<b>Basic XHTML (Quantity = " + xHtml +" ):</b> $" + htmlTotal;
      document.getElementById("2").innerHTML = "<b>Intro to  PHP (Quantity = " + Php +" ):</b> $" + phpTotal;
      document.getElementById("3").innerHTML = "<b>Advanced JQuery (Quantity = " + jQuery +" ):</b> $" + jqueryTotal;
      var a = document.getElementById("4")
      a.innerHTML = "<b>Final Cost:</b> $" + totalCost; 
    }
  }