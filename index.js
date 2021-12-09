const fs = require ('fs')
const { response } = require('express');
const express = require('express');
const app = express();
const http = require('http');
const https = require('https');
const multer = require('multer');   

const upload = multer({storage:multer.memoryStorage()});

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const hostname = '192.168.0.12';
const httpPort = 80;
const httpsPort = 443;

const httpsOptions = {
    cert: fs.readFileSync('./ssl/bin/certificate.crt'),
    ca: fs.readFileSync('./ssl/bin/CA.pl'),
    key: fs.readFileSync('./ssl/bin/private.key')
}

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);





// redireccion a https
app.use((request, response, next) => {
    if(request.protocol === 'http') {
        response.redirect(301, `https://${request.headers.host}${request.url}`);
    }
    next();
})











/**
* Secure Hash Algorithm (SHA256)
* http://www.webtoolkit.info/
* Original code by Angel Marin, Paul Johnston
**/

function SHA256(s){
    var chrsz = 8;
    var hexcase = 0;
   
    function safe_add (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
    }
   
    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
   
    function core_sha256 (m, l) {
    var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
    var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2;
   
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;
   
    for ( var i = 0; i<m.length; i+=16 ) {
    a = HASH[0];
    b = HASH[1];
    c = HASH[2];
    d = HASH[3];
    e = HASH[4];
    f = HASH[5];
    g = HASH[6];
    h = HASH[7];
   
    for ( var j = 0; j<64; j++) {
    if (j < 16) W[j] = m[j + i];
    else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
   
    T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
    T2 = safe_add(Sigma0256(a), Maj(a, b, c));
   
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
    }
   
    HASH[0] = safe_add(a, HASH[0]);
    HASH[1] = safe_add(b, HASH[1]);
    HASH[2] = safe_add(c, HASH[2]);
    HASH[3] = safe_add(d, HASH[3]);
    HASH[4] = safe_add(e, HASH[4]);
    HASH[5] = safe_add(f, HASH[5]);
    HASH[6] = safe_add(g, HASH[6]);
    HASH[7] = safe_add(h, HASH[7]);
    }
    return HASH;
    }
   
    function str2binb (str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for(var i = 0; i < str.length * chrsz; i += chrsz) {
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
    }
    return bin;
    }
   
    function Utf8Encode(string) {
    string = string.replace(/\r\n/g,'\n');
    var utftext = '';
   
    for (var n = 0; n < string.length; n++) {
   
    var c = string.charCodeAt(n);
   
    if (c < 128) {
    utftext += String.fromCharCode(c);
    }
    else if((c > 127) && (c < 2048)) {
    utftext += String.fromCharCode((c >> 6) | 192);
    utftext += String.fromCharCode((c & 63) | 128);
    }
    else {
    utftext += String.fromCharCode((c >> 12) | 224);
    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
    utftext += String.fromCharCode((c & 63) | 128);
    }
   
    }
   
    return utftext;
    }
   
    function binb2hex (binarray) {
    var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
    var str = '';
    for(var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i % 4)*8+4)) & 0xF) +
    hex_tab.charAt((binarray[i>>2] >> ((3 - i % 4)*8 )) & 0xF);
    }
    return str;
    }
   
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}
   
// MIDDLEWARES

// urlencoded
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Dotenv
const dotenv = require('dotenv')
dotenv.config({path:'./env/.env'})

// Public
app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '/public'))

// modulo de conexion de la base de datos
const conexion = require('./database/db.js');
const { fstat } = require('fs');

// express-session
const session = require('express-session');
app.use(session({
    name: 'user',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    loggedIn: false,

}))












// register y login routes
app.get('/login-register.css', (request, response) => {
    response.sendFile(__dirname+'/public/login/login-register.css'); 
});
app.get('/login', (request, response) => {   
    response.sendFile(__dirname+'/public/login/login.html');  
});
app.get('/register', (request, response) => {   
    response.sendFile(__dirname+'/public/register/register.html');  
});
app.get('/register.js', (request, response) => {   
    response.sendFile(__dirname+'/public/register/register.js');  
});
app.get('/login.js', (request, response) => {
    response.sendFile(__dirname+'/public/login/login.js')
});









// registro
app.post('/register', async (request, response)=>{
    const user = request.body.user;
    const name = request.body.name;
    const pass = request.body.pass;
    const email = request.body.email;
    const age = request.body.age;
    const gender = request.body.gender;
    
    console.log({user:user, name:name, email:email, age:age, gender:gender, pass:pass});
    let passwordHash = await SHA256(pass);
    if (gender != '' &&
    user != '' &&
    name != '' &&
    pass != '' &&
    email != '' &&
    age != '' &&
    gender != 'undefined' &&
    user != 'undefined' &&
    name != 'undefined' &&
    pass != 'undefined' &&
    email != 'undefined' &&
    age != 'undefined') {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(regexEmail)) {
            let userCheck = `SELECT * from users_table WHERE BINARY user = '${user}'`;
            conexion.query(userCheck, (error, results)=> {
                console.log(results);
                if(results == '') {
                    let sql = `INSERT INTO users_table (user, name, email, age, gender, pass, admin) VALUES ('${user}', '${name}', '${email}', '${age}', '${gender}', '${passwordHash}', '0')`;
                    conexion.query(sql, (error, results)=> {
                        console.log(error);
                    })
                    response.send('OK');
                }
                else {
                    console.log("error");
                }
            });
        } 
    }
});






// autentificacion
app.post('/auth', async (request, response) => {
    const user = request.body.user;
    const pass = request.body.pass;
    let passwordHash = SHA256(pass);
    if(user && pass) {

        let askUsersPasswords = `SELECT user, pass FROM users_table WHERE user='${user}'`;          
        conexion.query(askUsersPasswords, function (error, results) {     
            if(results == 'undefined'){
                console.log('No se ha iniciado sesión')
            }
            if (results.length == 0 || passwordHash != results[0].pass){
                console.log('No se ha iniciado sesión');
            }
            else{
                console.log('Sesión iniciada');
                request.session.loggedIn = true;
                request.session.name = user;
                console.log(request.session);
                response.send('OK');
            }
        })
    }
});





// logout
app.get('/logout', (request, response) => {
    request.session.destroy(()=>{
        response.redirect('/home');
        console.log('Se ha cerrado sesión')
    }) 
})

app.post('/test', function (req, res) {
    res.send('POST request to the homepage');
});













// ROUTES






// LOAD HOME

app.get('/home.css', (request, response) => {
    response.sendFile(__dirname+'/public/home/home.css'); 
});
app.get('/home', (request, response) => {   
    response.sendFile(__dirname+'/public/home/home.html');
});
app.get('/home.js', (request, response) => {   
    response.sendFile(__dirname+'/public/home/home.js');  
});
app.get('/home2.js', (request, response) => {   
    response.sendFile(__dirname+'/public/home/home2.js');  
});
app.post('/home', (request, response) => {
    console.log(request.session);
    response.send(request.session);
});

app.post('/check-if-admin', (request, response) => {
    console.log(request.session);
    let name = request.session.name;
    let IsUserAdmin = `SELECT admin FROM users_table WHERE user='${name}'`
    conexion.query(IsUserAdmin, function(error, results){
        console.log(results[0]);
        response.send(results[0]);
    });
});



// LOAD HOME IMAGES
app.get('/home/image1', function (req, res) {
    res.sendFile(__dirname+'/public/home/images/image1.png');
});
app.get('/home/image2', function (req, res) {
    res.sendFile(__dirname+'/public/home/images/image2.png');
});




// CAROUSEL (rename every jpg with "banner-image+id+.jpg")

const jpgSuffix = '.jpg'

app.get('/home/carousel/:id', function(request, response) {
    response.sendFile(__dirname+'/public/home/images/banner-image'+request.params.id+jpgSuffix);
});

app.get('/home/slider.js', function(request, response) {
    response.sendFile(__dirname+'/public/home/slider.js')
});

// LOAD SVGS (rename every svg with "id+.svg")

let svgSuffix = ".svg"

app.get("/svgs/:id"+svgSuffix, (request, response) => {
    response.sendFile(__dirname+'/public/svgs/'+request.params.id+svgSuffix);
});






// UPLOAD
app.get("/upload", (request, response) => {
    let name = request.session.name;
    if (typeof(name) !== 'undefined'){
        let IsUserAdmin = `SELECT admin FROM users_table WHERE user='${name}'`
        console.log (IsUserAdmin);
        conexion.query(IsUserAdmin, function(error, results){
            console.log(results);

            if (results[0].admin == 1) {
                response.sendFile(__dirname+'/public/upload/upload.html');
            }
            else {
                response.redirect('https://192.168.0.12/home');
            }
        });
    }
    else {
        response.redirect('https://192.168.0.12/home');
    }
});



app.get("/upload.js", (request, response) => {
    response.sendFile(__dirname+'/public/upload/upload.js');
});
app.get("/switch-upload.js", (request, response) => {
    response.sendFile(__dirname+'/public/upload/switch-upload.js');
})
app.get("/upload.css", (request, response) => {
    response.sendFile(__dirname+'/public/upload/upload.css');
});












// Profile + changes

app.get("/profile", (request, response) => {
    response.sendFile(__dirname+'/public/profiles/profile.html');
})
app.get("/profile.js", (request, response) => {
    response.sendFile(__dirname+'/public/profiles/profile.js');
})
app.get("/profile.css", (request, response) => {
    response.sendFile(__dirname+'/public/profiles/profile.css');
})

app.post('/profile', (request, response) => {
    console.log(request.session);
    response.send(request.session);
});

app.post('/request-user-data', async (request, response) => {
    let user = request.session.name;
    let askUsersData = `SELECT user, name, email, age, gender, picture FROM users_table WHERE user='${user}'`
    conexion.query(askUsersData, function (error, results) {     
        response.send(results);
    })
});


//load prof img
// app.get("/profile-img", (request, response) => {
//     response.sendFile(directory+'/public/Profiles/profile.html');
// })



//changes \/

app.post('/change-pic',upload.single("ProfileImage"),(request, response) => {
    pic = request.file.buffer.toString('base64');
    // const user = request.body.user;
    // console.log(user);
    console.log(pic);
    app.post('/change-pic-name', (request, response) => {
        const user = request.body.user;
        console.log(user);
        if (pic !='' && user !='' || pic !='undefined' && user !='undefined'){
            let ChangePic = `UPDATE users_table SET picture='${pic}' WHERE user='${user}'`;
            console.log(ChangePic);
            conexion.query(ChangePic, function (error, results){
                console.log('Foto cambiada con exito');
            })
            response.send('Changed');
        }
    })
    // if (pic !='' && user !='' || pic !='undefined' && user !='undefined'){
    //     let ChangePicture = `UPDATE users_table SET picture='${pic}' WHERE user='Layser'`; //${user}
    //     console.log(ChangePicture);
    //     conexion.query(ChangePicture, function (error, results){
    //         console.log('Foto cambiada con exito');
    //     })
    //     response.send('Changed');
    // }
});



app.post('/change-name', (request, response) => {
    const name = request.body.name;
    const user = request.body.user;
    console.log(name);
    console.log(user);
    if (name !='' && user !='' || name !='undefined' && user !='undefined'){
        let ChangeName = `UPDATE users_table SET name='${name}' WHERE user='${user}'`;
        console.log(ChangeName);
        conexion.query(ChangeName, function (error, results){
            console.log('Nombre cambiado con exito');
        })
        response.send('Changed');
    }
});

app.post('/change-gender', (request, response) => {
    const gender = request.body.gender;
    const user = request.body.user;
    console.log(`${user}+${gender}`)
    if (gender !='' && user !='' || gender !='undefined' && user !='undefined'){
        let ChangeGender = `UPDATE users_table SET gender='${gender}' WHERE user='${user}'`;
        console.log(ChangeGender);
        conexion.query(ChangeGender, function (error, results){
            console.log('Género cambiado con exito')
        })
        response.send('Changed');
    }
});

app.post('/change-bday', (request, response) => {
    const age = request.body.age;
    const user = request.body.user;
    if (age !='' && user !='' || age !='undefined' && user !='undefined'){
        console.log(age);
        let ChangeBirthday = `UPDATE users_table SET age='${age}' WHERE user='${user}'`;
        conexion.query(ChangeBirthday, function (error, results){
            console.log('Cumple cambiado con exito')
        })
        response.send('Changed');
    }
});











// Upload products

app.post('/upload-product', async (request, response)=>{
    const productname = request.body.productname;
    const colors = request.body.colors;
    const sizes = request.body.sizes;
    const price = request.body.price;
    const units = request.body.units;
    const searchAlias = request.body.searchalias;
    // const image1 = request.body.image1;
    // const image2 = request.body.image2;
    // const image3 = request.body.image3;
    // const image4 = request.body.image4;
    const desc = request.body.desc;
    const keywords = request.body.keywords;
    const details = request.body.details;
    let today = new Date()
    let date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`
    
    console.log({productname:productname, searchalias:searchAlias, colors:colors, sizes:sizes, price:price, units:units, desc:desc, keywords:keywords, details:details});

    if (productname != '' &&
    price != '' &&
    price != ',' &&
    desc != '' &&
    details != '')
    {
        var pet = `INSERT INTO products_table (productname, searchalias, colors, sizes, price, units, image1, image2, image3, image4, dsription, keywords, details, dy) VALUES ('${productname}', '${searchAlias}', '${colors}', '${sizes}', '${price}', '${units}', '0', '0', '0', '0', '${desc}', '${keywords}', '${details}', '${date}')`;
        console.log(pet);
        conexion.query(pet, (error, results)=> {
            console.log('Enviados los datos');
        });
    }
});

//images

app.post('/upload-images1', (request, response) => {
    
    const productname = request.body.productname;
    const image1 = request.body.image1;
    // console.log(image1);
    if (productname != '' &&
    image1 != '')
    {
        let pet1 = `UPDATE products_table SET image1='${image1}' WHERE productname='${productname}'`
        conexion.query(pet1, (error, results)=> {
            console.log('Foto subida');
        });
    }  
});
app.post('/upload-images2', async (request, response)=>{
    const productname = request.body.productname;
    const image2 = request.body.image2;


    if (productname != '' &&
    image2 != '' && image2 != 'https://192.168.0.12/svgs/36.svg')
    {
        let pet2 = `UPDATE products_table SET image2='${image2}' WHERE productname='${productname}'`
        // console.log(pet2);
        conexion.query(pet2, (error, results)=> {
            console.log('hola');
            response.send('OK');
        });
    }
});

app.post('/upload-images3', async (request, response)=>{
    const productname = request.body.productname;
    const image3 = request.body.image3;

    if (productname != '' &&
    image3 != '' && image3 != 'https://192.168.0.12/svgs/36.svg')
    {
        let pet3 = `UPDATE products_table SET image3='${image3}' WHERE productname='${productname}'`
        // console.log(pet3);
        conexion.query(pet3, (error, results)=> {
            console.log('hola');
            response.send('OK');
        });
    }
});

app.post('/upload-images4', async (request, response)=>{
    const productname = request.body.productname;
    const image4 = request.body.image4;

    if (productname != '' &&
    image4 != '' && image4 != 'https://192.168.0.12/svgs/36.svg')
    {
        let pet4 = `UPDATE products_table SET image4='${image4}' WHERE productname='${productname}'`
        // console.log(pet4);
        conexion.query(pet4, (error, results)=> {
           console.log('hola');
           response.send('OK');
        });
    }
});



// SEARCH

app.get('/s', (request, response) => {   
    response.sendFile(__dirname+'/public/search/search.html');
});
app.get('/s/:id', (request, response) => {   
    response.sendFile(__dirname+'/public/search/search.html');
}); 
app.get('/s/search-alias=*/:id', (request, response) => {   
    response.sendFile(__dirname+'/public/search/search.html');
}); 
app.get('/search.js', (request, response) => {   
    response.sendFile(__dirname+'/public/search/search.js');  
});


// LOAD

app.get('/load.js', (request, response) => {   
    response.sendFile(__dirname+'/public/search/load.js');  
});

app.post('/loaditems', async (request, response) => {
    let searchKeyword = request.body.search
    let searchAlias = request.body.searchAlias
    if (searchAlias != "search-alias=aps"){
        let askAliasMatch = `SELECT productname, price, image1, id FROM products_table WHERE searchalias='${searchAlias}' AND keywords LIKE '%${searchKeyword}%'`
        conexion.query(askAliasMatch, function (error, results){
            console.log(results);
            response.send(results);
            
        });
    }
    else {
        let askAliasMatch = `SELECT productname, price, image1, id FROM products_table WHERE keywords LIKE '%${searchKeyword}%'`
        conexion.query(askAliasMatch, function (error, results){
            console.log(results);
            response.send(results);
            
        });
    }
    


});




// WATCH PRODUCTS
app.get("/product/:id", (request, response) => {
    response.sendFile(__dirname+'/public/product/product.html');
});

app.get('/product.js', (request, response) => {   
    response.sendFile(__dirname+'/public/product/product.js');  
});
app.get("/product.css", (request, response) => {
    response.sendFile(__dirname+'/public/product/product.css');
});

app.post('/request-products-data', (request, response) => {
    const id = request.body.id
    console.log(id);
    let askProductsData = `SELECT productname, searchalias, colors, sizes, price, units, image1, image2, image3, image4, dsription, keywords, details FROM products_table WHERE id='${id}'`
    conexion.query(askProductsData, function (error, results) {     
        response.send(results);
    })
});

app.post('/best-valued', (request, response) => {
    let askForBestValued = `SELECT productname, price, image1, id FROM products_table ORDER BY rate DESC LIMIT 4`
    console.log(askForBestValued);
    conexion.query(askForBestValued, function (error, results) {     
        response.send(results)
    })
});

app.post('/new', (request, response) => {
    let askForBestValued = `SELECT productname, price, image1, id FROM products_table ORDER BY dy DESC LIMIT 4`
    console.log(askForBestValued);
    conexion.query(askForBestValued, function (error, results) {     
        response.send(results);
    })
});

app.post('/best-selled', (request, response) => {
    let askForBestValued = `SELECT productname, price, image1, id FROM products_table ORDER BY sold DESC LIMIT 4`
    console.log(askForBestValued);
    conexion.query(askForBestValued, function (error, results) {     
        response.send(results);
    })
});




// Cesta

app.get("/cart", (request, response) => {
    response.sendFile(__dirname+'/public/cesta/cesta.html');
})
app.get("/cesta.js", (request, response) => {
    response.sendFile(__dirname+'/public/cesta/cesta.js');
})
app.get("/search.css", (request, response) => {
    response.sendFile(__dirname+'/public/search/search.css');
})
app.post('/load-cart', (request, response) => {
    console.log(request.session.name);
    let name = request.session.name;
    let askForCart = `SELECT cesta FROM users_table WHERE user='${name}'`
    console.log(askForCart);
    conexion.query(askForCart, function(error, results){
        response.send(results)
    });
});

app.post('/load-item', (request, response) => {
    console.log(request.session.name);
    let id = request.body.loadthis;
    let askForCart = `SELECT productname, price, image1, id FROM products_table WHERE id='${id}'`
    console.log(askForCart);
    conexion.query(askForCart, function(error, results){
        response.send(results)
    });
});




app.post('/add-to-cart', (request, response) => {
    console.log(request.session.name);
    let name = request.session.name;
    let p = request.body.product;
    let askForCart = `SELECT cesta FROM users_table WHERE user='${name}'`
    console.log(askForCart);
    conexion.query(askForCart, function(error, results){
        console.log(results[0]);
        let r = results[0].cesta;
        console.log(r);
        console.log(p);
        let addToCart = `UPDATE users_table SET cesta='${r}.${p}' WHERE user='${name}'`;
        console.log(addToCart);
        conexion.query(addToCart, function(error, results){
            response.send('y');
        });
    });
});


httpServer.listen(httpPort, hostname);
httpsServer.listen(httpsPort, hostname);




// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })