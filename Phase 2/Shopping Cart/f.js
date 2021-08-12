var list1 = [];
var count = 0;
var chairs = 0;
var tables = 0;
var lamps = 0;
var beds = 0;
var chairs_Total = -0;
var tables_Total = -0;
var lamps_Total = -0;
var beds_Total = -0;
var total = 0;
function addtable() {
    var message = "table";
    list1.push(message);
    console.log(list1);
    sessionStorage.setItem("list1", JSON.stringify(list1));
    count++;
    console.log(count);
    document.getElementById("count").innerHTML = "Cart Size:" + count + "&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + "<a href= checkout.html>Checkout </a>    ";
}
function addChair() {
    var message = "chair";
    list1.push(message);
    console.log(list1);
    sessionStorage.setItem("list1", JSON.stringify(list1));
    count++;
    console.log(count);
    document.getElementById("count").innerHTML = "Cart Size:" + count + "&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + "<a href= checkout.html>Checkout </a>    ";
}
function addLamp() {
    var message = "lamp";
    list1.push(message);
    console.log(list1);
    sessionStorage.setItem("list1", JSON.stringify(list1));
    count++;
    console.log(count);
    document.getElementById("count").innerHTML = "Cart Size:" + count + "&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + "<a href= checkout.html>Checkout </a>    ";
}
function addBed() {
    var message = "bed";
    list1.push(message);
    console.log(list1);
    sessionStorage.setItem("list1", JSON.stringify(list1));
    count++;
    console.log(count);
    document.getElementById("count").innerHTML = "Cart Size:" + count + "&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + "<a href= checkout.html>Checkout </a>    ";
}
function display() {
    var empObj = sessionStorage.getItem("list1");
    var cart = JSON.parse(empObj);
    console.log(cart);
    cart.forEach(function (element) {
        if (element == "chair") {
            chairs = chairs + 1;
        }
        if (element == "table") {
            tables++;
        }
        if (element == "lamp") {
            lamps++;
        }
        if (element == "bed") {
            beds++;
        }
    });
    // document.write(chairs.toString());
    // document.write(tables.toString());
    var table = document.getElementById("cart");
    tables_Total = tables * 50;
    chairs_Total = chairs * 25;
    lamps_Total = lamps * 10;
    beds_Total = beds * 100;
    total = tables_Total + chairs_Total + lamps_Total + beds_Total;
    if (tables > 0) {
        table.innerHTML += "<tr><td>Tables</td><td> 50</td>" + "<td>" + tables + "</td>" + "<td>" + tables_Total + "</td>";
    }
    if (chairs > 0) {
        table.innerHTML += "<tr><td>Chairs</td><td> 25</td>" + "<td>" + chairs + "</td>" + "<td>" + chairs_Total + "</td>";
    }
    if (lamps > 0) {
        table.innerHTML += "<tr><td>Lamps</td><td> 10</td>" + "<td>" + lamps + "</td>" + "<td>" + lamps_Total + "</td>";
    }
    if (beds > 0) {
        table.innerHTML += "<tr><td>Beds</td><td> 100</td>" + "<td>" + beds + "</td>" + "<td>" + beds_Total + "</td>";
    }
    table.innerHTML += "<tr><td></td><td> </td><td> </td><td>" + total + "</td></tr>";
}
