$(function () {
    // $("#one").html("This is Hello World by JQuery");
    // $('li:eq(0)').addClass("bottomBorder");
    // $('li').addClass('upperCase');
    // $('li.active').addClass('elemColor');
    // $('li:eq(1)').addClass('bc')


    var gallery = $('<div>');  ////kreiram div
    $(gallery).addClass('gallery'); //// galeiji dodajem klasu
    $('body').append(gallery);//// selektujes bodi i doda mu galeriju, prazan je body pa moze bilo gde



    var imgUrls = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];/////arey sa linkovima
    for (var i = 0; i < imgUrls.length; i++) {
        var image = $('<img>');/////kreiram sliku
        $(image).attr('src', imgUrls[i]);////dodeljuem atribut
        $(gallery).append(image);///i onda sliku ubaci u div 
    }


    $('.gallery img').each(function (index, element) {/////udje u galeru o odnda eahc uzme svaku random im daje velicinu
        // var rand = Math.floor(Math.random() * 500); ///mathfloor zaokruzi na nizi broj( math random vraca broj 0-1 nasumice) i onda ga pomnozi sa 1200 najeveca rezolucija
        var rand = Math.floor((900 - 200) * Math.random() + 200); ///formula kako se pise za opseg 
        $(this).width(rand + 'px');///this taj objekat // setuj sirinu i randu dodaj stigu upis jedinicu


    })

    $('.gallery img').each(function (index, element) {////each metoda radi tako sto vrti elemente dok dok anonimna funkcija ne vrati falsezato ibacuje ako nije prva slika ta
        if ((parseInt($(this).width())) < 500) {////pars int je da string koji smo dobili gore pretvori u broj pa da ta sirina manja od 500 odnosno broj
            $(this).addClass('border')
        } else {
            return false;
        }
    })

    







});









