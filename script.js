function validate(){
    var email=document.getElementById("email").value;
    var reg=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\._])+.([a-z]+)(.[a-z]+)?$/;
    var result= reg.test(email);
    if(result==false){
        alert("sorry Invalied E-mail")
        return false;
    }     
    return true; 

}