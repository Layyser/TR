const title = document.getElementById("title");
const titulo = document.getElementById("titulo");
const username = document.getElementById("username");
const realname = document.getElementById("realname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const gender = document.getElementById("gender");

const one = document.getElementById("1");
one.addEventListener("click", (e)=>{ 

});

const two = document.getElementById("2");
two.addEventListener("click", (e)=>{ 

});

var currentUrl = window.location.href
splitUrl = currentUrl.substring(0, currentUrl.length - 7);
console.log(splitUrl);

const three = document.getElementById("3");
three.addEventListener("click", (e)=>{ 
    window.location.replace(`${splitUrl}home`)
});




axios.post("/profile",{
    
}).then((response)=>{
    if (response.data.name){
        if(response.data.loggedIn == true){
            title.innerHTML = `Perfil de ${response.data.name} - MercaSanvi`
            titulo.innerHTML = `Perfil de ${response.data.name}`
            username.innerHTML = response.data.name
            axios.post("/request-user-data",{

            }).then((response)=>{
                age.innerHTML = response.data[0].age;
                email.innerHTML = response.data[0].email;
                gender.innerHTML = response.data[0].gender;
                realname.innerHTML = response.data[0].name;
                let profPic = "data:image/png;base64,"+response.data[0].picture
                console.log(profPic)
                const imageToReplace = document.getElementById("prof-pic");
                if (response.data[0].picture != "null") {
                    imageToReplace.setAttribute("src", profPic);
                }
                
            })
        }
    }
    else {
        title.innerHTML = `Debes iniciar sesión.`
        let Window = window.location.href
        window.location.replace(Window.replace("profile", "login"));
    }
});


const replaceName = document.getElementById("replace-name");
const replaceGender = document.getElementById("replace-gender");
const replaceBday = document.getElementById("replace-bday");
const replacePicture = document.getElementById("replace-pic");
replacePicture.style.display = "none";
replaceName.style.display = "none";
replaceBday.style.display = "none";
replaceGender.style.display = "none";

const Rep = document.getElementById("pic");
Rep.addEventListener("click", (e)=>{
    replacePicture.style.display = "block";
});

const nam = document.getElementById("nam");
nam.addEventListener("click", (e)=>{
    replaceName.style.display = "block";
});

const yea = document.getElementById("yea");
yea.addEventListener("click", (e)=>{
    replaceBday.style.display = "block";
});

const gen = document.getElementById("gen");
gen.addEventListener("click", (e)=>{
    replaceGender.style.display = "block";
});




// CLOSE
const close0 = document.getElementById("close0");
close0.addEventListener("click", (e)=>{
    replacePicture.style.display = "none";
});
const close02 = document.getElementById("close02");
close02.addEventListener("click", (e)=>{
    replacePicture.style.display = "none";
});
const close1 = document.getElementById("close1");
close1.addEventListener("click", (e)=>{
    replaceName.style.display = "none";
});
const close12 = document.getElementById("close12");
close12.addEventListener("click", (e)=>{
    replaceName.style.display = "none";
});
const close2 = document.getElementById("close2");
close2.addEventListener("click", (e)=>{
    replaceBday.style.display = "none";
});
const close22 = document.getElementById("close22");
close22.addEventListener("click", (e)=>{
    replaceBday.style.display = "none";
});
const close3 = document.getElementById("close3");
close3.addEventListener("click", (e)=>{
    replaceGender.style.display = "none";
});
const close32 = document.getElementById("close32");
close32.addEventListener("click", (e)=>{
    replaceGender.style.display = "none";
});




// Change data


const pictureChange = document.getElementById("send-picture");
pictureChange.addEventListener('click', (e)=> {
    var newPicture = document.getElementById("replace-picture").value;
    console.log(typeof(newPicture));
    if (newPicture != ''){
        axios.post("/profile",{

        }).then((response)=>{
            var user = response.data.name;
            axios.post("/change-pic-name",{
                "user" : user
            }).then((response)=>{
                if (response.data == 'Changed'){
                    window.location.replace("/profile");
                }
            })
        })
    }
});

const inpFile = document.getElementById("replace-picture");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const backgroundImg = document.getElementById("background-img");

inpFile.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewImage.style.display = "block";
        backgroundImg.style.border = "0px"

        reader.addEventListener("load", function(){
            console.log(this);
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});






const sendName = document.getElementById("send-name");
sendName.addEventListener("click", (e)=>{
    var newName = document.getElementById("replace-user").value;
    console.log(newName);
    if (newName != ''){
        axios.post("/profile",{
    
        }).then((response)=>{
            console.log(response.data.name);
            var user = response.data.name;
            axios.post("/change-name",{
                "user" : user,
                "name" : newName
            }).then((response)=>{
                // if (response.data == 'Changed'){
                //     window.location.replace("/profile");
                // }
            })
        })
    }
});

const sendGender = document.getElementById("send-gender");
sendGender.addEventListener("click", (e)=>{
    var newGender = document.getElementById("gender-select").value;
    if (newGender != ''){
        axios.post("/profile",{
    
        }).then((response)=>{
            var user = response.data.name
            axios.post("/change-gender",{
                "user" : user,
                "gender" : newGender
            }).then((response)=>{
                // if (response.data == 'Changed'){
                //     window.location.replace("/profile");
                // }
            })
        })
    }
})

const sendBday = document.getElementById("send-bday");
sendBday.addEventListener("click", (e)=>{
    var newBday = document.getElementById("agee").value;
    if (newBday != '' || newBday != 'undefined'){
        axios.post("/profile",{
    
        }).then((response)=>{
            var user = response.data.name
            axios.post("/change-bday",{ 
                "user" : user,
                "age" : newBday
            }).then((response)=>{
                // if (response.data == 'Changed'){
                //     window.location.replace("/profile");
                // }
            })
        })
    }
    
})