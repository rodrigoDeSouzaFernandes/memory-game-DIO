let order = [];
let clickedOrder = [];
let score = 0;

// 0 1 2 3 => verde vermelho amarelo azul;

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
      let elementColor = createColorElement(order[i]);
      lightColor(elementColor, Number(i) + 1)
  }
}

const lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  });
}

const checkOrder = () => {
  for(let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação ${score}\n Você acertou, iniciando proximo nivel!`)
    nextLevel();
  }
}

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

  setTimeout( ()=> {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

const createColorElement = (color) => {
  if (color == 0) return green;
  else if (color == 1) return red;
  else if (color == 2) return yellow;
  else if (color == 3) return blue;
}

const nextLevel = () => {
  score ++;
  shuffleOrder();
}

const gameOver = () => {
  alert(`Pontuação ${score}\n Você perdeu! \n Clique em 'OK' para iniciar um novo jogo`)
  order = [];
  clickedOrder = []

  playGame();
}

const playGame = () => {
  score = 0;
  alert ('Bem vindo ao Gênesis!\n Iniciando novo jogo')
  
  nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();