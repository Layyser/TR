var user
var name
var pass
var gender
var age
var email

const botonEnviar = document.getElementById("send");

botonEnviar.addEventListener("click", (e)=>{
    var user = document.getElementById("user").value;
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    if (gender != '' &&
    user != '' &&
    name != '' &&
    pass != '' &&
    email != '' &&
    age != ''
    ){
        axios.post("/register",{
            "user" : user, 
            "name" : name, 
            "email" : email, 
            "age" : age,
            "pass" : pass,
            "gender" : gender
        }).then((response)=>{
            console.log(response.data);
            if (response.data == 'OK'){
                window.location.replace("/login");
            }
        })
        
    }
});