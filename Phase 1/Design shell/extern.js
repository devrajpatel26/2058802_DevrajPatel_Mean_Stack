alert("DEVRAJ FIRST EXTERNAL JS")


function addData(){

    var name= document.getElementById("name").value;
    var age= document.getElementById("age").value;


    var mytag=document.createElement("p");
    var tagcon=document.createTextNode("name     "+ name+"age       "+age);


    mytag.appendChild(tagcon);


    document.getElementById("info").appendChild(mytag);
}