const DIV1 = document.getElementById("DIV1");
const DIV2 = document.getElementById("DIV2");
const DIV3 = document.getElementById("DIV3");
const DIV4 = document.getElementById("DIV4");
const DIV5 = document.getElementById("DIV5");
const DIV6 = document.getElementById("DIV6");
const DIV7 = document.getElementById("DIV7");

const LI1 = document.getElementById("LI1");
const LI2 = document.getElementById("LI2");
const LI3 = document.getElementById("LI3");
const LI4 = document.getElementById("LI4");
const LI5 = document.getElementById("LI5");
const LI6 = document.getElementById("LI6");
const LI7 = document.getElementById("LI7");

const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");
const B5 = document.getElementById("B5");
const B6 = document.getElementById("B6");
const B7 = document.getElementById("B7");

const BN2 = document.getElementById("BN2");
const BN3 = document.getElementById("BN3");
const BN4 = document.getElementById("BN4");
const BN5 = document.getElementById("BN5");
const BN6 = document.getElementById("BN6");
const BN7 = document.getElementById("BN7");


axios.post("/check-if-admin",{
    
}).then((response)=>{
    console.log(response.data.admin);
    if (response.data.admin == 0 || typeof(response.data.admin) === 'undefined'){
        let Window = window.location.href
        window.location.replace(Window.replace("upload", "home"));
    }
});



//SIMPLIFICAR ESTE JS MAS!!!

// ventanas
function closeAll(){
    DIV1.style.display = "none";
    LI1.setAttribute("class", "LI1");

    DIV2.style.display = "none";
    LI2.setAttribute("class", "LI2");

    DIV3.style.display = "none";
    LI3.setAttribute("class", "LI3");

    DIV4.style.display = "none";
    LI4.setAttribute("class", "LI4");

    DIV5.style.display = "none";
    LI5.setAttribute("class", "LI5");

    DIV6.style.display = "none";
    LI6.setAttribute("class", "LI6");

    DIV7.style.display = "none";
    LI7.setAttribute("class", "LI7");
}


closeAll();
DIV1.style.display = "grid";
LI1.setAttribute("class", "h");

LI1.addEventListener("click", (e) => {
    closeAll();
    DIV1.style.display = "grid";
    LI1.setAttribute("class", "h");
});
LI2.addEventListener("click", (e) => {
    closeAll();
    DIV2.style.display = "grid";
    LI2.setAttribute("class", "h");
});
LI3.addEventListener("click", (e) => {
    closeAll();
    DIV3.style.display = "grid";
    LI3.setAttribute("class", "h");
});
LI4.addEventListener("click", (e) => {
    closeAll();
    DIV4.style.display = "grid";
    LI4.setAttribute("class", "h");
});
LI5.addEventListener("click", (e) => {
    closeAll();
    DIV5.style.display = "grid";
    LI5.setAttribute("class", "h");
});
LI6.addEventListener("click", (e) => {
    closeAll();
    DIV6.style.display = "grid";
    LI6.setAttribute("class", "h");
});
LI7.addEventListener("click", (e) => {
    closeAll();
    DIV7.style.display = "grid";
    LI7.setAttribute("class", "h");
});



// botones
//PARA IR A LA 1
BN2.addEventListener("click", (e) => {
    closeAll();
    DIV1.style.display = "grid";
    LI1.setAttribute("class", "h");
});

//PARA IR A LA 2
B1.addEventListener("click", (e) => {
    closeAll();
    DIV2.style.display = "grid";
    LI2.setAttribute("class", "h");
});
BN3.addEventListener("click", (e) => {
    closeAll();
    DIV2.style.display = "grid";
    LI2.setAttribute("class", "h");
});

//PARA IR A LA 3
B2.addEventListener("click", (e) => {
    closeAll();
    DIV3.style.display = "grid";
    LI3.setAttribute("class", "h");
});
BN4.addEventListener("click", (e) => {
    closeAll();
    DIV3.style.display = "grid";
    LI3.setAttribute("class", "h");
});

//PARA IR A LA 4
B3.addEventListener("click", (e) => {
    closeAll();
    DIV4.style.display = "grid";
    LI4.setAttribute("class", "h");
});
BN5.addEventListener("click", (e) => {
    closeAll();
    DIV4.style.display = "grid";
    LI4.setAttribute("class", "h");
});

// PARA IR A LA 5
B4.addEventListener("click", (e) => {
    closeAll();
    DIV5.style.display = "grid";
    LI5.setAttribute("class", "h");
});
BN6.addEventListener("click", (e) => {
    closeAll();
    DIV5.style.display = "grid";
    LI5.setAttribute("class", "h");
});

// PARA IR A LA 6
B5.addEventListener("click", (e) => {
    closeAll();
    DIV6.style.display = "grid";
    LI6.setAttribute("class", "h");
});
BN7.addEventListener("click", (e) => {
    closeAll();
    DIV6.style.display = "grid";
    LI6.setAttribute("class", "h");
});

// PARA IR A LA 7
B6.addEventListener("click", (e) => {
    closeAll();
    DIV7.style.display = "grid";
    LI7.setAttribute("class", "h");
});






// PRECIO

const priceSentence = document.getElementById("price-sentence");
const priceInput = document.getElementById("price");
const unitsInput = document.getElementById("units");
const centimosInput = document.getElementById("centimos");

priceSentence.innerHTML = `Tu producto se venderá por 0,00€ cada 1 unidad(es)`;

priceInput.addEventListener("input", (e) => {
    frasePrecio();
});

unitsInput.addEventListener("input", (e) => {
    frasePrecio();
});

centimosInput.addEventListener("input", (e) => {
    frasePrecio();
});

function frasePrecio() {
    let units = document.getElementById("units").value;
    let price = document.getElementById("price").value;
    let centimos = document.getElementById("centimos").value;
    priceSentence.innerHTML = `Tu producto se venderá por ${price},${centimos}€ cada ${units} unidad(es)`;
}




// IMAGENES

const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");


inpFile.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewImage.style.display = "block";
        previewImage.style.objectFit = "cover";

        reader.addEventListener("load", function(){
            console.log(this);
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});

const inpFile2 = document.getElementById("inpFile2");
const previewContainer2 = document.getElementById("imagePreview2");
const previewImage2 = previewContainer2.querySelector(".image-preview__image2");

inpFile2.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewImage2.style.display = "block";
        previewImage2.style.objectFit = "cover";

        reader.addEventListener("load", function(){
            console.log(this);
            previewImage2.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});

const inpFile3 = document.getElementById("inpFile3");
const previewContainer3 = document.getElementById("imagePreview3");
const previewImage3 = previewContainer3.querySelector(".image-preview__image3");

inpFile3.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewImage3.style.display = "block";
        previewImage3.style.objectFit = "cover";

        reader.addEventListener("load", function(){
            console.log(this);
            previewImage3.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});

const inpFile4 = document.getElementById("inpFile4");
const previewContainer4 = document.getElementById("imagePreview4");
const previewImage4 = previewContainer4.querySelector(".image-preview__image4");

inpFile4.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewImage4.style.display = "block";
        previewImage4.style.objectFit = "cover";

        reader.addEventListener("load", function(){
            console.log(this);
            previewImage4.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});



// DESCRIPCION

const descInput = document.getElementById("contar-palabras");
const currentWords = document.getElementById("currentWords");

function countWords(){
	let valor = document.getElementById("contar-palabras").value;
    let cantidad = valor.length;
    currentWords.innerHTML = `Letras restantes: `+(2000-`${cantidad}`);
}


descInput.addEventListener("input", (e) => {
    countWords();
});







const descInput2 = document.getElementById("contar-palabras2");
const currentWords2 = document.getElementById("currentWords2");

function countWords2(){
	let valor = document.getElementById("contar-palabras2").value;
    let cantidad = valor.length;
    currentWords2.innerHTML = `Letras restantes: `+(2000-`${cantidad}`);
}

descInput2.addEventListener("input", (e) => {
    countWords2();
});











// UPLOAD PRODUCT


B7.addEventListener("click", (e)=>{
    //productname
    let productname = document.getElementById("productname").value;




    // OPTION SEARCH ALIAS
    let sel = document.getElementById("sel");
    let searchAlias = sel.value;
    console.log(searchAlias);

    //price
    let forprice = document.getElementById("price").value;
    let centimos = document.getElementById("centimos").value;

    let price = `${forprice}.${centimos}€`;

    console.log(price);

    //units
    let units = document.getElementById("units").value;
    console.log(units);

    //colors
    function getid(id) {
        if (document.getElementById(id).checked == true) {
            value = '1';
        }
        else {
            value = '0';
        }
        return value;
    }
    
    let color1 = getid("color1");
    let color2 = getid("color2");
    let color3 = getid("color3");
    let color4 = getid("color4");
    let color5 = getid("color5");
    let color6 = getid("color6");
    let color7 = getid("color7");
    let color8 = getid("color8");
    let color9 = getid("color9");
    let color10 = getid("color10");
    let color11 = getid("color11");
    let color12 = getid("color12");
    let color13 = getid("color13");
    let color14 = getid("color14");
    let color15 = getid("color15");

    let colors = `${color1}.${color2}.${color3}.${color4}.${color5}.${color6}.${color7}.${color8}.${color9}.${color10}.${color11}.${color12}.${color13}.${color14}.${color15}`
    console.log(colors);


    //sizes

    let small = getid("small");
    let medium = getid("medium");
    let large = getid("large");
    let xlarge = getid("x-large");
    let xxlarge = getid("xx-large");

    let sizes = `${small}.${medium}.${large}.${xlarge}.${xxlarge}`
    console.log(sizes)

    //images
    // function getimage(imageid) {
    //     if (document.getElementById(imageid).value != "svgs/36.svg"){
    //         value = document.getElementById(imageid).src
    //     }
    //     else{
    //         value = '0';
    //     }
    //     return value
    // }

    let image1 = document.getElementById("image1").src;
    console.log(image1);
    let image2 = document.getElementById("image2").src;
    let image3 = document.getElementById("image3").src;
    let image4 = document.getElementById("image4").src; 




    let desc = document.getElementById("contar-palabras").value;
    console.log(desc);

    //keywords

    function getkeywords(keywordid, vars) {
        if (document.getElementById(keywordid).value != 'undefined' && document.getElementById(keywordid).value != ''){
            value = document.getElementById(keywordid).value;
        }
        else{
            value = '0';
        }
        return value;
    }

    let keyword1 = getkeywords("keyword1");
    let keyword2 = getkeywords("keyword2");
    let keyword3 = getkeywords("keyword3");
    let keyword4 = getkeywords("keyword4");
    let keyword5 = getkeywords("keyword5");
    let keyword6 = getkeywords("keyword6");

    let keywords = `${keyword1}.${keyword2}.${keyword3}.${keyword4}.${keyword5}.${keyword6}`
    console.log(keywords);

    //details
    let details = document.getElementById("contar-palabras2").value;
    console.log(details);


    if (productname != '' &&
    price != '' &&
    price != ',' &&
    image1 != '0' &&
    desc != '' &&
    details != '')
    {
        console.log("peticion enviada");
        axios.post("/upload-product",{
            "productname" : productname, 
            "searchalias" : searchAlias,
            "colors" : colors, 
            "sizes" : sizes, 
            "price" : price,
            "units" : units,
            "desc" : desc,
            "keywords" : keywords,
            "details" : details
        }) //.then((response)=>{
        //     console.log(response.data);
        //     if (response.data == 'OK'){
        //         window.location.replace("/home");
        //     }
        // })
        
    }

    if (productname != '')
    {
        console.log(productname);
        axios.post("/upload-images1",{
            "productname" : productname,
            "image1" : image1
        })
    }

    if (productname != '' && image2 !='svgs/36.svg')
    {
        console.log(productname);
        axios.post("/upload-images2",{
            "productname" : productname,
            "image2" : image2
        })
    }

    if (productname != '' && image3 !='svgs/36.svg')
    {
        console.log(productname);
        axios.post("/upload-images3",{
            "productname" : productname,
            "image3" : image3
        })
    }

    if (productname != '' && image4 !='svgs/36.svg')
    {
        console.log(productname);
        axios.post("/upload-images4",{
            "productname" : productname,
            "image4" : image4
        })
        
    }

    let Window = window.location.href
    window.location.replace(Window.replace("upload", "home"));
});