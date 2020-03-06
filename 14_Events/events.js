// var div = document.querySelector("first-div");
// function changeBack(){
//   if(div.classList === "blue");
//   div.classList.toggle("blue");
// }


// function turnoff() {
//     var div = document.querySelector("#firs-div")
//     div.classList.remove("blue");
// }





// var movePlayer = function () {
//     var a = document.querySelector("body")
//     var player = document.querySelector("img")

//     a.addEventListener("click", function (event) {
//         player.style.top = event.clientY + "px";
//         player.style.left = event.clientX + "px";
//     })
// }

// movePlayer()

// //////////////////////////////////////////////
// var movePlayer = function () {
//     var body = document.querySelector("body")
//     var player = document.querySelector("img")

//     body.addEventListener("click", function (event) {
//         player.style.top = event.clientY + "px";
//         player.style.left = event.clientX + "px";
//     })

// }

////////////////////////////////////////////// jquery


$(function () {


    $('body').on('click', function () {
        var player = $('.player');
        player.css('left', event.clientX + "px");
        player.css('top', event.clientY + "px");
    })

});
