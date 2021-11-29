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






const title = document.getElementById("title");
const titulo = document.getElementById("titulo");
const searchAlias = document.getElementById("searchAlias");
const colors = document.getElementById("colors");
const sizes = document.getElementById("sizes");
const price = document.getElementById("price");
const units = document.getElementById("units");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const description = document.getElementById("description");
const keywords = document.getElementById("keywords");
const details = document.getElementById("details");

const keyword1 = document.getElementById("keyword1");
const keyword2 = document.getElementById("keyword2");
const keyword3 = document.getElementById("keyword3");
const keyword4 = document.getElementById("keyword4");
const keyword5 = document.getElementById("keyword5");
const keyword6 = document.getElementById("keyword6");



const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");

const slidesbox1 = document.getElementById("slidesbox1");
const slidesbox2 = document.getElementById("slidesbox2");
const slidesbox3 = document.getElementById("slidesbox3");
const slidesbox4 = document.getElementById("slidesbox4");

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const color6 = document.getElementById("color6");
const color7 = document.getElementById("color7");
const color8 = document.getElementById("color8");
const color9 = document.getElementById("color9");
const color10 = document.getElementById("color10");
const color11 = document.getElementById("color11");
const color12 = document.getElementById("color12");
const color13 = document.getElementById("color13");
const color14 = document.getElementById("color14");
const color15 = document.getElementById("color15");

const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");
const xlarge = document.getElementById("x-large");
const xxlarge = document.getElementById("xx-large");

const small1 = document.getElementById("small1");
const medium1 = document.getElementById("medium1");
const large1 = document.getElementById("large1");
const xlarge1 = document.getElementById("x-large1");
const xxlarge1 = document.getElementById("xx-large1");

const sizesBox = document.getElementById("sizes-box");
const colorsPalette = document.getElementById("colors-palette");
// <div id="colors"></div>
// <div id="sizes"></div>
// <div id="price"></div>
// <div id="units"></div>
// <img id="image1" src="">
// <img id="image2" src="">
// <img id="image3" src="">
// <img id="image4" src="">
// <div id="description"></div>
// <div id="keywords"></div>
// <div id="details"></div>




var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);

axios.post("/request-products-data",{
    "id" : id
}).then((response)=>{
    title.innerHTML = `${response.data[0].productname} - MercaSanvi`;
    titulo.innerHTML = response.data[0].productname;
    searchAlias.innerHTML = response.data[0].searchalias;
    let colors = response.data[0].colors.split(".");
    let sizes = response.data[0].sizes.split(".");
    price.innerHTML = response.data[0].price;
    units.innerHTML = response.data[0].units;
    if (colors[0] == 1){
        color1.style.display = "block";
    }
    if (colors[1] == 1){
        color2.style.display = "block";
    }
    if (colors[2] == 1){
        color3.style.display = "block";
    }
    if (colors[3] == 1){
        color4.style.display = "block";
    }
    if (colors[4] == 1){
        color5.style.display = "block";
    }
    if (colors[5] == 1){
        color6.style.display = "block";
    }
    if (colors[6] == 1){
        color7.style.display = "block";
    }
    if (colors[7] == 1){
        color8.style.display = "block";
    }
    if (colors[8] == 1){
        color8.style.display = "block";
    }
    if (colors[9] == 1){
        color10.style.display = "block";
    }
    if (colors[10] == 1){
        color11.style.display = "block";
    }
    if (colors[11] == 1){
        color12.style.display = "block";
    }
    if (colors[12] == 1){
        color13.style.display = "block";
    }
    if (colors[13] == 1){
        color14.style.display = "block";
    }
    if (colors[14] == 1){
        color15.style.display = "block";
    }

    if (sizes[0] == 1){
        small.style.display = "block";
        small1.style.display = "block";
    }

    if (sizes[1] == 1){
        medium.style.display = "block";
        medium1.style.display = "block";
    }

    if (sizes[2] == 1){
        large.style.display = "block";
        large1.style.display = "block";
    }

    if (sizes[3] == 1){
        xlarge.style.display = "block";
        xlarge1.style.display = "block";
    }

    if (sizes[4] == 1){
        xxlarge.style.display = "block";
        xxlarge1.style.display = "block";
    }

    var boxAmount = 0;
    for (let i = 0; i < 5; i++) {
        if (sizes[i] == 1){
            var boxAmount = boxAmount+1
        }
    }

    sizesBox.style.gridTemplateRows = "0.0001fr 1fr";
    if (boxAmount == 0) {
        sizesBox.style.gridTemplateColumns = "0fr";
    }
    if (boxAmount == 1) {
        sizesBox.style.gridTemplateColumns = "1fr";
    }
    if (boxAmount == 2) {
        sizesBox.style.gridTemplateColumns = "1fr 1fr";
    }
    if (boxAmount == 3) {
        sizesBox.style.gridTemplateColumns = "1fr 1fr 1fr";
    }
    if (boxAmount == 4) {
        sizesBox.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    }
    if (boxAmount == 5) {
        sizesBox.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    }
    

    var colorsAmount = 0;
    for (let i = 0; i < 15; i++) {
        if (colors[i] == 1){
            var colorsAmount = colorsAmount+1
        }
    }

    console.log(colorsAmount)
    if (colorsAmount < 6) {
        colorsPalette.style.gridTemplateRows = "1fr";
    }
    if (colorsAmount >= 6) {
        colorsPalette.style.gridTemplateRows = "1fr 1fr";
    }
    if (colorsAmount > 10) {
        colorsPalette.style.gridTemplateRows = "1fr 1fr 1fr";
    }


    //IMAGES
    let image1src = response.data[0].image1;
    if (response.data[0].image1 != "0") {
        image1.setAttribute("src", image1src);
    }
    else {
        alert('imagen no cargada')
    }


    let image2src = response.data[0].image2;
    if (response.data[0].image2 != "0") {
        image2.setAttribute("src", image2src);
    }
    else {
        image2.remove();
        dot2.remove();
        slidesbox2.remove();
    }


    let image3src = response.data[0].image3;
    if (response.data[0].image3 != "0") {
        image3.setAttribute("src", image3src);
    }
    else {
        image3.remove();
        dot3.remove();
        slidesbox3.remove();
    }


    let image4src = response.data[0].image4;
    if (response.data[0].image4 != "0") {
        image4.setAttribute("src", image4src);
    }
    else {
        image4.remove();
        dot4.remove();
        slidesbox4.remove();
    }

    description.innerHTML = response.data[0].description;
    let keyword = response.data[0].keywords.split(".");
    keyword1.innerHTML = keyword[0];
    keyword2.innerHTML = keyword[1];
    keyword3.innerHTML = keyword[2];
    keyword4.innerHTML = keyword[3];
    keyword5.innerHTML = keyword[4];
    keyword6.innerHTML = keyword[5];


    details.innerHTML = response.data[0].details;
});




// AUTO UNCHECK


color1.addEventListener ("click", (e)=>{
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color2.addEventListener ("click", (e)=>{
    color1.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color3.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color4.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color5.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color6.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color7.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color8.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color9.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color10.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color11.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color12.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color13.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color13.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color14.checked = false;
    color15.checked = false;
});
color14.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color15.checked = false;
});
color15.addEventListener ("click", (e)=>{
    color1.checked = false;
    color2.checked = false;
    color3.checked = false;
    color4.checked = false;
    color5.checked = false;
    color6.checked = false;
    color7.checked = false;
    color8.checked = false;
    color9.checked = false;
    color10.checked = false;
    color11.checked = false;
    color12.checked = false;
    color13.checked = false;
    color14.checked = false;
});

small.addEventListener ("click", (e)=>{
    medium.checked = false;
    large.checked = false;
    xlarge.checked = false;
    xxlarge.checked = false;
});
medium.addEventListener ("click", (e)=>{
    small.checked = false;
    large.checked = false;
    xlarge.checked = false;
    xxlarge.checked = false;
});
large.addEventListener ("click", (e)=>{
    small.checked = false;
    medium.checked = false;
    xlarge.checked = false;
    xxlarge.checked = false;
});
xlarge.addEventListener ("click", (e)=>{
    small.checked = false;
    medium.checked = false;
    large.checked = false;
    xxlarge.checked = false;
});
xxlarge.addEventListener ("click", (e)=>{
    small.checked = false;
    medium.checked = false;
    large.checked = false;
    xlarge.checked = false;
});

// SIMPLIFICAR