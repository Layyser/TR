let searchInput = document.getElementById("inputsearch");
let searchValue = searchInput.value;
let searchSend = document.getElementById("inputsubmitsearch");
let title0 = document.getElementById("title");
let searchFilter = document.getElementById("sel");


var currentUrl = window.location.href
console.log(currentUrl)
splitUrl = currentUrl.split("/");
console.log(splitUrl[5]);   
let s = splitUrl[5];


searchSend.addEventListener("click", (e)=> {
    let searchInput = document.getElementById("inputsearch");
    let searchValue = searchInput.value;
    let searchAli = searchFilter.value;
    console.log(searchAli)
    window.location.replace(`${splitUrl[0]}/${splitUrl[1]}/${splitUrl[2]}/s/${searchAli}/${searchValue}`);
})

if (title0.innerHTML == "Buscar - en MercaSanvi"){
    title0.innerHTML = `Buscar ${s} en MercaSanvi`  
}