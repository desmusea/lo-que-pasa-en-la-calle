let fueraInterval;
let dentroTimeout;
let dentroSecondTimeout;
let dentroGlobalTimeout;
const dentro = document.getElementById('dentro');
const fuera = document.getElementById('fuera');
const home = document.getElementById('home');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');

const lockButton = document.getElementById('lockButton');
const infoButton = document.getElementById('infoButton');
const fueraButton = document.getElementById('fueraButton');
const dentroButton = document.getElementById('dentroButton');
const audioFuera = document.getElementById('exterioraudio');
const audioDentro = document.getElementById('dentroaudio');
const text = document.getElementById('text');

function setInterior() {
  setFirstInterior()
  dentroTimeout = setTimeout(setSecondInterior, 7000);
  dentroSecondTimeout = setTimeout(setThirdInterior, 32000);
}

function setRandomBackground() {
  const locations = [
    './src/exterior/exterior_paris.jpg',
    './src/exterior/exterior_newyork.jpg',
    './src/exterior/exterior_montevideo.jpg',
    './src/exterior/exterior_buenosaires.jp'
  ]
  const index = Math.floor(Math.random() * 2);
  const newLocation = locations[index]
  fuera.setAttribute('src', newLocation)
}

function setFirstInterior() {
  dentro.setAttribute('src', './src/interior/1.jpg')
}

function setSecondInterior() {
  dentro.setAttribute('src', './src/interior/2.jpg')
}

function setThirdInterior() {
  dentro.setAttribute('src', './src/interior/3.jpg')
}

function hideBoxes() {
  text.classList.add('hidden')
  lockButton.innerText = '🔓'
  box1.classList.add('hidden')
  box2.classList.add('hidden')
  box3.classList.add('hidden')
  box4.classList.add('hidden')
}

function showBoxes() {
  text.classList.remove('hidden')
  lockButton.innerText = '🔒'
  box1.classList.remove('hidden')
  box2.classList.remove('hidden')
  box3.classList.remove('hidden')
  box4.classList.remove('hidden')
}

function goHome() {
  hideBoxes()
  text.classList.remove('hidden')
  lockButton.classList.add('hidden')
  text.innerText = ''
  text.innerText = 'Con motivo del FAP-TEK, Festival de Arte y Pensamiento TEK del Centro Cultural de España en Montevideo, Desmusea propuso un ejercicio de mediación digital en torno al Museo de Arte Precolombino e Indígena. Dos lecturas que, desde las lógicas y poéticas de la virtualidad, intervinieran dos espacios 360º del MAPI sacados de Google Street View para enriquecerlos con dimensiones emocionales, narrativas y propias. El espacio de fuera reflexiona así sobre el museo y el espacio circundante, mientras que el de dentro aborda las ambivalencias que ocupan el interior.'
  home.setAttribute('visible', 'true')
  document.getElementById('fuera').setAttribute('visible', 'false')
  dentro.setAttribute('visible', 'false')
  audioFuera.components.sound.stopSound();
  audioDentro.components.sound.stopSound();

  infoButton.classList.add('selected')
  fueraButton.classList.remove('selected')
  dentroButton.classList.remove('selected')

  clearInterval(dentroGlobalTimeout);
  dentroTimeout && clearTimeout(dentroTimeout);
  dentroSecondTimeout && clearTimeout(dentroSecondTimeout);
  clearInterval(fueraInterval);
}

function toggleInfo() {
  if (text.classList.contains('hidden')) {
    showBoxes()
  } else {
    hideBoxes()
  }
}

function goFuera() {
  lockButton.classList.remove('hidden')
  showBoxes()
  text.innerText = ''
  text.innerText = 'El MAPI a través de su programa de actividades “El MAPI va a la calle” usa desde hace tiempo la ciudad como escenario museográfico. Su barrio, Ciudad Vieja, es una zona de identidad cambiante y multicultural. La vista de Google Street View del exterior del museo no registra los diferentes acentos que se escuchan en la zona, los olores de la comida que ofrecen sus restaurantes, ni el proceso de gentrificación que está atravesando. La herencia colonial de su arquitectura hace que Ciudad Vieja sea con frecuencia además un escenario para rodajes de series y películas. La ciudad se disfraza entonces de otras ciudades: a veces es París, otras veces Nueva York… Partiendo de esas dimensiones perdidas, y en el ejercicio de imaginar otros ‘fueras’ para el MAPI, convertimos esta visión extinta de la calle 25 de Mayo en otras ciudades posibles, y nos preguntamos: si el museo tiene la potencialidad de afectar el barrio, ¿cómo afecta el barrio al museo?'
  home.setAttribute('visible', 'false')
  document.getElementById('fuera').setAttribute('visible', 'true')
  dentro.setAttribute('visible', 'false')
  audioFuera.components.sound.playSound();
  audioDentro.components.sound.stopSound();
  clearInterval(dentroGlobalTimeout);
  dentroTimeout && clearTimeout(dentroTimeout);
  dentroSecondTimeout && clearTimeout(dentroSecondTimeout);
  fueraInterval = setInterval(setRandomBackground, 6000);
  fueraButton.classList.add('selected')
  dentroButton.classList.remove('selected')
  infoButton.classList.remove('selected')
  fuera.setAttribute('src', './src/exterior/exterior_montevideo.jpg')
}

function goDentro() {
  lockButton.classList.remove('hidden')
  showBoxes()
  text.innerText = ''
  text.innerText = 'El interior del MAPI nos habla de un devenir temporal, un relato histórico, social, identitario, que tuvo lugar en su espacio y que ha quedado súbitamente detenido en un presente pandémico, ocupado por la ausencia. O quizás cabe imaginar este museo vacío como un museo futuro, post-humano. En este juego de temporalidades especulativas, el interior del MAPI regresa a un pasado que pudo ser y nunca fue (su origen arquitectónico como establecimiento hidro-terápico) Y más atrás aún, regresa a un pasado que quizás fue: una selva precolombina que se abre paso a través de los muros, donde las piezas de las vitrinas conectan con su contexto originario, para regresar después al silencio inicial, lleno de interrogantes. '
  audioFuera.components.sound.stopSound();
  audioDentro.components.sound.playSound();
  dentro.setAttribute('src', './src/interior/1.jpg')
  clearInterval(fueraInterval);
  setInterior()
  dentroGlobalTimeout = setInterval(setInterior, 62000)
  dentroButton.classList.add('selected')
  fueraButton.classList.remove('selected')
  infoButton.classList.remove('selected')
  home.setAttribute('visible', 'false')
  dentro.setAttribute('visible', 'true')
  fuera.setAttribute('visible', 'false')
}