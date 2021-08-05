var count=0;

function add(){




    var paragraph = document.getElementById("test");

var g=document.createElement('div')

g.className="col"
    g.id=count;
    var text = document.createTextNode("This just got added");

var title=document.getElementById("title1").value;
var con=document.getElementById("articles").value;
var src=document.getElementById("img2").value;
paragraph.appendChild(g);
document.getElementById(g.id).innerHTML ="<h2>"+title +"</h2>"+ "  <br>  " + con +"<br>";
  
var img = document.createElement("img");
 
img.src = src;
var src = document.getElementById(g.id);
 
src.appendChild(img);


    count++;
}