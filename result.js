window.addEventListener('load', () => {

    
    document.getElementById("result-name").innerHTML = localStorage.getItem("name");
    document.getElementById("result-phone").innerHTML = localStorage.getItem("tel");
    document.getElementById('result-email').innerHTML = localStorage.getItem("email");

})
