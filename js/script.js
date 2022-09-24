(function() {

    cardMove()
    nameWrite()
    imgMove()

})();






// setTimeout(() => elemento.innerHTML = teste, 22 * i);

//console.log(teste)

// textoArray.forEach(function(item, indice, array) {
//   console.log(item, indice);

//setTimeout(() => console.log(i), 300 * i);

//setTimeout(() => elemento.innerHTML += letra, 0);
// textoArray.lenght

//setTimeout(() => elemento.innerHTML = 'sdas', 3700);

//setTimeout(() => textoArray.splice(i), 150 * 10)
//setTimeout(function() {

//  console.log(i);
//  textoArray.splice(i);
// console.log(textoArray.join().replaceAll(',', ''))

//elemento.innerHTML = textoArray.join().replaceAll(',', '');

//  console.log(textoArray);
// textoArray.splice(i);

// console.log(textoArray.join().replaceAll(',', ''));

//   elemento.innerHTML = textoArray.join().replaceAll(',', '');

//  textoArray.splice(17, 18)
//  elemento.innerHTML = textoArray.join().replaceAll(',', '')
// elemento.innerHTML = textoArray.splice(0, 16).join().replaceAll(',', '')
// elemento.innerHTML = textoArray.splice(0, 15).join().replaceAll(',', ''), time;
//elemento.innerHTML = textoArray.splice(0, 14).join().replaceAll(',', ''), time;
//  console.log(textoArray.join().replaceAll(',', ''))



// escrever na tela

//myImg

//movimentação do card

function cardMove() {
    let tempo = 1
    const card = document.querySelector('.pldev-img');

    card.addEventListener("mousemove", cardEffect);
    card.addEventListener("mouseleave", cardBack);
    card.addEventListener("mouseenter", cardEnter);


    function cardEffect(event) {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = card.offsetTop + cardHeight / 2;
        const positionX = event.clientX - centerX;
        const positionY = event.clientY - centerY;

        const rotateX = ((+1) * 25 * positionY / (cardHeight / 2).toFixed(2));
        const rotateY = ((-1) * 25 * positionX / (cardWidth / 2).toFixed(2));

        card.style.transform = ` perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        //console.log(rotateX, rotateY);
    }

    function cardBack(event) {
        card.style.transform = ` perspective(500px) rotateX(0deg) rotateY(0deg)`;
        cardTransition();
    }

    function cardTransition() {
        clearInterval(card.transitionId)
        card.style.transition = 'transform 400ms';
        card.transitionId = setTimeout(() => {
            card.style.transition = '';
        }, 400);
    }

    function cardEnter(event) {
        cardTransition();
    }
}


//aguardando melhoria no codigo
function nameWrite() {
    function addNome() {
        nameSelf.innerHTML = nome;
        typeWrite(titulo)
    }
    let i = 1
    const nome = "patrick luiz duque"
    const titulo = document.getElementById('nameSelf');
    //console.log(titulo);
    // nameSelf.innerHTML = '  ';

    function typeWrite(elemento) {
        const textoArray = elemento.innerHTML.split('');
        nameSelf.innerHTML = ''

        //console.log(textoArray);


        textoArray.forEach(function(letra, i) {
            //console.log(textoArray)
            //console.log(i)
            let time = 150 * i;

            setTimeout(() => elemento.innerHTML += letra, time);

        });

        //aguardando melhoria no codigo

        setTimeout(() => elemento.innerHTML = 'patrick luiz duqu', 3500 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz duq', 3700 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz du', 3900 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz d', 4200 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz de', 4400 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz dev', 4600 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz dev .', 4800 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz dev ..', 4900 * i);
        setTimeout(() => elemento.innerHTML = 'patrick luiz dev ...', 5000 * i);
        setTimeout(() => elemento.innerHTML = ' ', 8000 * i);
        setTimeout(() => addNome(), 8100 * i);
        i++
    }
    typeWrite(titulo);

}


function imgMove() {
    let tempo = 1
    const card = document.querySelector('.imgmove');

    card.addEventListener("mousemove", cardEffect);
    card.addEventListener("mouseleave", cardBack);
    card.addEventListener("mouseenter", cardEnter);


    function cardEffect(event) {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = card.offsetTop + cardHeight / 2;
        const positionX = event.clientX - centerX;
        const positionY = event.clientY - centerY;

        const rotateX = ((+1) * 3.14 * positionY / (cardHeight / 2).toFixed(2));
        const rotateY = ((-1) * 3.14 * positionX / (cardWidth / 2).toFixed(2));

        card.style.transform = ` perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        //console.log(rotateX, rotateY);
    }

    function cardBack(event) {
        card.style.transform = ` perspective(500px) rotateX(0deg) rotateY(0deg)`;
        cardTransition();
    }

    function cardTransition() {
        clearInterval(card.transitionId)
        card.style.transition = 'transform 100ms';
        card.transitionId = setTimeout(() => {
            card.style.transition = '';
        }, 400);
    }

    function cardEnter(event) {
        cardTransition();
    }
}