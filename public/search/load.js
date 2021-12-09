var currentUrl = window.location.href;
console.log(currentUrl);
splitUrl = currentUrl.split("/");
console.log(splitUrl[5]);

axios.post("/loaditems",{
    "search" : splitUrl[5],
    "searchAlias" : splitUrl[4]
}).then((response)=>{

    console.log(response.data.length)
    for (let i = 1; i < response.data.length+1 ; i++) {
        document.getElementById(`title${i}`).innerHTML = response.data[(i-1)].productname;
        document.getElementById(`price${i}`).innerHTML = response.data[(i-1)].price;
        document.getElementById(`img${i}`).setAttribute("src", response.data[(i-1)].image1);
        let r = response.data[(i-1)].id;
        document.getElementById(`${i}`).href = `${splitUrl[0]}/${splitUrl[1]}/${splitUrl[2]}/product/${r}`;
    }

    var currentUrl = window.location.href;
    for (let i = 1; i < 25 ; i++) {
        if (document.getElementById(`${i}`).href !== currentUrl){
            document.getElementById(`${i}`).style.display = "grid";
        }
    }
});