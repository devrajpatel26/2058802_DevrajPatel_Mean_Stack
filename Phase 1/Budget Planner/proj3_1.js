var list = [];
class Values {
    constructor(s1, s2, s3) {
      this.s1 = s1;
      this.s2 =s2;
      this.s3=s3;
    }
  }

function add(){
    var input1 = document.getElementById('s1').value;
    var input2=document.getElementById('s2').value;
    var input3=document.getElementById('s3').value;



    obj1= new Values(input1,input2,input3);
//var obj= {'client': input1, 'project': input2, 'budget':input3};
var id = 0; // ...so we can track the id/number of submits.

console.log("Data store in session and local storage")


list.push(obj1);  






console.log(list);
//document.write("input "+obj.name +"  Age: "  + obj.age);
sessionStorage.setItem("list" , JSON.stringify(list));



<script>

    var tables=0;
    var chairs=0;
      var empObj = sessionStorage.getItem("list1")
    var cart = JSON.parse(empObj)

    console.log(cart);
    cart.forEach(element => {
      
        if(element=="chair"){
            chairs++;
        }
        if(element=="table"){
            tables++;
        }




    });
    
   
    document.write(chairs);

    document.write(tables);




</script>








}



function c1(){
    
    document.getElementById("s1").value=" ";
    document.getElementById("s2").value=" ";
    document.getElementById("s3").value=" ";
}



function displayData() {
    let empObj = sessionStorage.getItem("list");
    let empJson = JSON.parse(empObj)
    var tableContent=""
    var startTable ="<table border=1><tr><th>Id</th><th>Name</th><th>Age</th></tr>"
    
    tableContent ="<tr><td>"+empJson+"</td><td>"
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;
}