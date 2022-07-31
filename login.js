function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="newton" && password=="student")
    {
        alert("login succefully");
        return false;
    }
    else{
        alert("login fail");
    }
}