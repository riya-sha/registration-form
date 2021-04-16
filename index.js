function display() {
    var name=document.getElementById("name").value;
    localStorage.setItem("name",name);

    var tel=document.getElementById("tel").value;
    localStorage.setItem("tel",tel);

    var email=document.getElementById("email").value;
    localStorage.setItem("email",email);

    
    return true;
}