let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0;
let puntosComputadora = 0;
//referencias html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const cartasJugador = document.querySelector('#jugador-cartas');
const cartasComputadora = document.querySelector('#ordenador-cartas');
const puntosHTML = document.querySelectorAll("small");

const crearDeck = () => {
    deck = [];
    for (let index = 2; index < 10; index++) {
        for (const tipo of tipos) {
         deck.push(index+tipo);   
        }
    }

    for (let tipo of tipos){
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck); 
}

//tomar carta

const pedirCarta = () => {
    if(deck.length === 0){
        throw'No hay cartas en el deck';
    }
    const carta = deck.pop()
    return carta;
}

const valorCarta = (carta) => {
     const valor = carta.substring(0, carta.length -1);
    // let puntos = 0;
    // if( isNaN(valor) ){
    //     console.log("no es un numero");
    //     puntos = (valor === 'A') ? 11 : 10;
    // } else {
    //     console.log("es un numero");
    //     puntos = valor * 1;
    // }

    // console.log(puntos);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
}



function addCard(isPlayer, card) {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${card}.png`
    imgCarta.classList.add('carta');
    if(isPlayer){
        cartasJugador.append(imgCarta);
    } else {
        cartasComputadora.append(imgCarta)
    }
    
}

// Función para mostrar alerts al final
function showAlert(message) {
    setTimeout(() => alert(message), 100);
}

function checkStatusJugador(puntosJugador) {
    if(puntosJugador > 21){
        console.warn("perdiste");
        showAlert('perdiste');
        btnPedir.disabled = true;
    } else if(puntosJugador === 21){
        console.warn("21, genial");
        showAlert('ganaste');
        btnPedir.disabled = true;
    }
}

function checkStatusComputadora(puntosComputadora, puntosMinimos){
    if(puntosComputadora > 21){
        console.warn('empate');
        showAlert('empate');
        return true;
    } else if(puntosComputadora === 21){
        console.warn('el ordenador ganó por blackjack');
        showAlert("el ordenador ganó por blackjack");
        return true;
    } else if (puntosComputadora > puntosMinimos){
        console.warn('el ordenador ganó');
        showAlert('el pc ganó por sacar más puntos');
        return true;
    }
    return false;
}

const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
        addCard(false,carta);
        if (checkStatusComputadora(puntosComputadora, puntosMinimos)) {
            break;
        }
    } while (puntosComputadora<puntosMinimos);
}


//Eventos
btnPedir.addEventListener('click', () => { //esa función es un callback,
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    addCard(true, carta);
    checkStatusJugador(puntosJugador);
}) 

btnDetener.addEventListener('click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
})

btnNuevo.addEventListener('click', () =>{
    puntosComputadora = 0;
    puntosJugador = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    cartasJugador.innerHTML = '';
    cartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    crearDeck();
})

crearDeck();
