// axios.post("/check-if-logged",{
    
// }).then((response)=>{
//     console.log(response.data.id);
//     if (response.data.id == 0 || typeof(response.data.admin) === 'undefined'){
//         let Window = window.location.href
//         window.location.replace(Window.replace("upload", "home"));
//     }
// });


var currentUrl = window.location.href;
console.log(currentUrl);
splitUrl = currentUrl.split("/");

axios.post("/load-cart",{
    
}).then((response)=>{
    let respuesta = response.data[0].cesta;
    let respuestaSplit = respuesta.split(".");
    console.log(respuestaSplit);
    for (let i = 0; i < respuestaSplit.length; i++) {
        console.log("ok");
        axios.post(`/load-item`,{
            "loadthis" : respuestaSplit[i]
        }).then((response)=>{
            console.log(response);
            document.getElementById(`title${i+1}`).innerHTML = response.data[0].productname;
            document.getElementById(`price${i+1}`).innerHTML = response.data[0].price;
            document.getElementById(`img${i+1}`).setAttribute("src", response.data[0].image1);
            document.getElementById(`${i+1}`).style.display = "grid";
            let r = response.data[0].id;
            document.getElementById(`${i+1}`).href = `${splitUrl[0]}/${splitUrl[1]}/${splitUrl[2]}/product/${r}`;
            
        });
        
    }
    
});