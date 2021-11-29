var user
var pass

const botonEnviar = document.getElementById("send");
const passw = document.getElementById("pass");


function SendData(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (user != '' && pass != '' || user != '' && pass != ''){
        axios.post("/auth",{
            "user" : user,  
            "pass" : pass
        }).then((response)=>{
            console.log(response.data);
            if (response.data == 'OK'){
                window.location.replace("/home");
            }    
        })
    }
}

botonEnviar.addEventListener("click", (e)=>{
    SendData();
});

var el = document.getElementById("pass");
el.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        SendData();
    }
});

var il = document.getElementById("user");
il.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        SendData();
    }
});


