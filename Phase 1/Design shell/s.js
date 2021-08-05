function storeData(){


    sessionStorage.setItem("obj1", "Raj")
    localStorage.setItem("obj2", "Raju")

    console.log("Data store in ession and local")
}

function getData(){
let abc=sessionStorage.getItem("obj1")
let xyz = sessionStorage.getItem("obj2")

console.log("VALUE  "+ abc);
console.log("VALUE  "+ xyz)
}


function removeData(){


    sessionStorage.removeItem("obj1");
    sessionStorage.removeItem("obj2");

}