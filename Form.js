/*global console, alert*/

function noEmpty() {
    var name = document.forms["myform"]["user-name"].value,
        email = document.forms["myform"]["email"].value,
        password = document.forms["myform"]["password"].value,
        mobile = document.forms["myform"]["mobile"].value;    
    
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    else if (email === "") {
        alert("E-mail must be filled out");
        return false;
    }
    else if (password === "") {
        alert("Password must be filled out");
        return false;
    }
    else if (mobile === "") {
        alert("Mobile must be filled out");
        return false;
    }
    else { 
        return true;
    }
}

function checkMail() {
    var email = document.forms["myform"]["email"].value;
    if ((email.indexOf('@') == -1) || (email.indexOf('.com') == -1)) {
        alert("You must be write a valid E-mail");
        return false;
    }
}

function checkPhone() {
    var mobile = document.forms["myform"]["mobile"].value;
    
    if (mobile.length == 11)
        {
            if(mobile.charAt(0) == '0' && mobile.charAt(1) == '1')
            {
                if(mobile.charAt(2) == '0' || mobile.charAt(2) == '1' || mobile.charAt(2) == '2'){
                        return true;
                }
            }  
        }
    
    else {
        alert("Mobile must be filled out");
        return false;
    }
}

function sayItAll(){
    noEmpty();
    checkMail();
    checkPhone(); 
    if (noEmpty() == false || checkMail() == false || checkPhone() == false )
        {return false;}
    
    else {return true;}
}
