//código do carro

let xCarros = [1000,1400,1200,1200,1200,1200];
let yCarros = [80, 192, 300, 420, 540, 636];
let velocidadeCarros = [10, 15, 12, 8, 7, 2];
let comprimentoCarro = 100;
let alturaCarro = 80;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 1200;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 80;
}





