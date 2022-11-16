function showTime(){                            
    var dateTime = new Date();
    document.getElementById("DateTime").innerHTML = dateTime.toLocaleString();
}       
setInterval(showTime, 1000);        

function checkEmptyInFind()
{
    if((document.getElementById("dog").checked==false) && (document.getElementById("cat").checked==false))
    {
        alert("please select Dog or Cat.");

    }
    else if(document.getElementById("breed").value == "Select option")
    {
        alert("Please select the breed of your pet.");

    }
    else if(document.getElementById("age").value == "Select option")
    {
        alert("Please select the age category.");

    }
    else if((document.getElementById("gender-male").checked==false) && (document.getElementById("gender-female").checked==false))
    {
            alert("please select the preffered gender : male or female ?");

    }
    else if((document.getElementById("get-along-dog").checked==false) && (document.getElementById("get-along-cat").checked==false) && (document.getElementById("get-along-children").checked==false))
    {
                alert("Please select with whom shall the pet get along !! ");

    }
}

function checkEmptyInGive()
{
    if((document.getElementById("dog").checked==false) && (document.getElementById("cat").checked==false))
    {
        alert("please select Dog or Cat.");

    }
    else if((document.getElementById("breed").value == "") )
    {
        alert("Please enter the breed.");

    }
    else if(document.getElementById("age").value == "Select option")
    {
        alert("Please select the age category.");

    }
    else if((document.getElementById("gender-male").checked==false) && (document.getElementById("gender-female").checked==false))
    {
            alert("please select the preffered gender : male or female ?");

    }
    else if((document.getElementById("get-along-dog").checked==false) && (document.getElementById("get-along-cat").checked==false) && (document.getElementById("get-along-children").checked==false))
    {
                alert("Please select with whom shall the pet get along !! ");

    }
    else if((document.getElementById("about pet").value == "") )
    {
        alert("Please enter something about your pet !!");

    }
    else if((document.getElementById("fname").value == "") )
    {
        alert("Please enter your First name !");

    }
    else if((document.getElementById("lname").value == "") )
    {
        alert("Please enter your Last name !");

    }
    else if((document.getElementById("ownerEmail").value == "") )
    {
        alert("Please enter your email !");

    }

}

function checkEmail(){

    var emailFormat = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";
    var email = document.getElementById("ownerEmail");

    if(email.value.match(emailFormat)){

    }else{
        alert("Invalid email format!");
    }
}
