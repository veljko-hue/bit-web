// var sec = function () {
//     var items = document.querySelectorAll(".sec li");


//     for (var i = 0; i < items.length; i++) {
//         items[i].className = "red";
//     }

// }

// sec();










var sect = function () {
    var items = document.querySelector(".active");
    items.className = "";
    items.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";


}

setTimeout(sect, 3000);


var al = function () {
    var it = document.querySelector(".five");
    var text = it.firstElementChild.textContent;

    alert(text)

}

setTimeout(al, 2000);
//////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////
var arr = ["one", "two", "thee"];
var select = document.getElementById("sel");


for (var i = 0; i < arr.length; i++) {
    document.createElement("one")
    document.createElement("two")
    document.createElement("three")
}

//////////////////////////////////////////////////////////////////////



var arr = ["one", "two", "thee"];
var select = document.createElement("select");


for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option")

    option.textContent = arr[i];
    select.appendChild(option)

}

var body = document.querySelector("body");
var select = document.createElement("label");


//////////////////////////////////////////////////////////////////////

// var form = document.querySelector("form");
// function addElement(type, label) {
//     var input = document.createElement("input");
//     var labelEl = document.createElement("label");
//     var text = document.createTextNode(label);



//     input.setAttribute("type", type);
//     labelEl.appendChild(text);



//     form.appendChild(labelEl);
//     form.appendChild(input);
// }


// addElement("password", "Password")
// addElement("email", "Email", true)
// addElement("text", "Name")


var div = document.createElement("div":
div.className = "slider";


var arr = ["image1.jpg", "image2.jpg", "image3.jpg"];

var images = function (arr) {
    for (var i = 0; arr.length; i++) {

    }
}
