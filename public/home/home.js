var username

const botonLogin = document.getElementById("login-button");
const botonMas = document.getElementById("register");
const botonProfile = document.getElementById("prof");
const botonUpload = document.getElementById("upload-button");

axios.post("/home",{
    
}).then((response)=>{
    if (response.data.name){
        botonLogin.removeAttribute("href");
        botonLogin.classList.add('login2');
        botonLogin.classList.remove('login');
        botonLogin.innerHTML = response.data.name;
        botonMas.parentNode.removeChild(botonMas);
    }
    else {
        console.log('Inicia sesión para disfrutar de la web');
        botonProfile.parentNode.removeChild(botonProfile);
    }
});


axios.post("/check-if-admin",{
    
}).then((response)=>{
    console.log(response.data.admin);
    if (response.data.admin == 1){
        botonUpload.style.display = "block";
        botonProfile.style.display = "block";
    }
    else {
        botonUpload.style.display = "none";
        botonProfile.style.display = "block";
    }
});