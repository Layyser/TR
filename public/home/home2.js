
const but = document.getElementById("but2");

but.addEventListener("click", (e)=>{
    let currentUrl = window.location.href;
    console.log(currentUrl);
    splitUrl = currentUrl.split("/");
    window.location.replace(`${splitUrl[0]}/${splitUrl[1]}/${splitUrl[2]}/s/search-alias=aps/`);
});



// mejor valorados
axios.post("/best-valued",{

}).then((response)=>{
    for (let i = 1; i < response.data.length+1 ; i++) {
        document.getElementById(`title${i}`).innerHTML = response.data[(i-1)].productname;
        document.getElementById(`price${i}`).innerHTML = response.data[(i-1)].price;
        document.getElementById(`img${i}`).setAttribute("src", response.data[(i-1)].image1);
        let r = response.data[(i-1)].id;
        document.getElementById(`${i}`).href = `${splitUrl[0]}/${splitUrl[1]}/${splitUrl[2]}/product/${r}`;
    }
});


// novedades
axios.post("/new",{

}).then((response)=>{
    for (let i = 5; i < response.data.length+5 ; i++) {
        document.getElementById(`title${i}`).innerHTML = response.data[(i-5)].productname;
        document.getElementById(`price${i}`).innerHTML = response.data[(i-5)].price;
        document.getElementById(`img${i}`).setAttribute("src", response.data[(i-5)].image1);
        let r = response.data[(i-5)].id;
        document.getElementById(`${i}`).href = `${splitUrl[0]}/${splitUrl[1]}/${splitUrl[2]}/product/${r}`;
    }
});



// mejor vendids
axios.post("/best-selled",{

}).then((response)=>{
    console.log(response)
    console.log(response.data[0].productname)
    for (let i = 9; i < 14 ; i++) {
        document.getElementById(`title${i}`).innerHTML = response.data[(i-9)].productname;
        document.getElementById(`price${i}`).innerHTML = response.data[(i-9)].price;
        document.getElementById(`img${i}`).setAttribute("src", response.data[(i-9)].image1);
        let r = response.data[(i-9)].id;
        document.getElementById(`${i}`).href = `${splitUrl[0]}/${splitUrl[1]}/${splitUrl[2]}/product/${r}`;
    }
});





