var aniSearch;
window.onload = function (){
    Slides();
};

/*SLIDES*/
var count = 0;
function Slides(){
    var slides = document.getElementsByClassName('img-slide');
    for(var i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
    }
    count++;
    if (count > slides.length) {
        count = 1
    }
    slides[count-1].style.display = "block";
    setTimeout(Slides,4000);
}
/*FIM SLIDES*/