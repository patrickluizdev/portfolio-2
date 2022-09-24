//Scroll
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('stick', window.scrollY > 0);
})

function toggleMenu(){
    var menutoggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menutoggle.classList.toggle('active');
    menu.classList.toggle('active');
}

//Texto que escreve 
var texto = "I'm Systems Analyst and Developer."
var info

var count = 0
function digitar(){
    info = document.getElementById("info")
    window.setTimeout(function() {inserir(texto[count])}, 50)
}
function inserir(letra){  
    info.innerHTML += letra
    count++
    if(count < texto.length)
    window.setTimeout(function(){ inserir(texto[count])}, 50)
}
window.onload = digitar


// Texto que escreve a apaga aos poucos
var div = document.getElementById('write');
var textos = ['Analista de Sistemas', 'Cybersecurity', 'DevOps', 'Desenvolvedor de Infraestrutura', 'LGPD'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 700); // time
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);

/////////////////////////////////////////////////////

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/ 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass)
        }
        console.log(element.offsetTop);
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})


//Quando rolar para baixo, mostre o botão
var backToTop = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    }else {
        backToTop.style.display = "none";
      }
    }

function topFunction() { //Quando no botão, rolar para o topo do documento
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





/*AQUI*/
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}


/**Footer */
var d = new Date();
var n = d.getFullYear();
document.getElementById("hora").innerHTML = n;