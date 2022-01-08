var error=0;
function fname()
{
     user=form.name.value;
     var nameformat = /^[A-Za-z]+$/;
    if(user=="")
    {
        document.getElementById("fn").innerHTML="Enter Full name";
        form.name.focus();
        error=1;
        
    }
    else if(user.length <=3 || !user.match(nameformat))
    {
        document.getElementById("fn").innerHTML="Its not a Full name ";
        form.name.focus();
        error=1;
    }
    else
    {
        document.getElementById("fn").innerHTML=" "; 
        error=0;
    }
}   
function eml()
{
    ema=form.email.value;
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(ema=="")
    {
        document.getElementById("em").innerHTML="Enter Email";
        form.email.focus();
        error=1;
    }
    else if(!ema.match(format))
    {
        document.getElementById("em").innerHTML="Enter Valid Email Format";
        form.email.focus();  
        error=1;
    }
    else
    {
        document.getElementById("em").innerHTML=""; 
        error=0;
    }
}
function phon()
{
    ph=form.phone.value;
    if(ph=="")
    {
        document.getElementById("ph").innerHTML="Enter Phone number";
        form.phone.focus();
        error=1;
    }

    else if(isNaN(ph))
    {
        document.getElementById("ph").innerHTML="Enter Valid Phone number";
        form.phone.focus();
        error=1;
    }
    else if(ph.length !=10)
    {
     document.getElementById("ph").innerHTML="Enter 10 digits number";
     form.phone.focus();
     error=1;
    }
    else
    {
        document.getElementById("ph").innerHTML=" "; 
        error=0;
    }
}


function validate()
{
if(error==1)
{
    fname();
    eml();
    phon();
 
    document.getElementById("err").innerHTML="Please Input all Fields Correctly"; 
    return false;
   
}
else
{
    document.getElementById("err").innerHTML="";
    return true;

}

}

function home()
{
    document.getElementById("frame").src="home.html";
}

function addpatient()
{
    document.getElementById("frame").src="addpatient.html";
}