//código do ator
let xAtor = 170;
let yAtor = 732;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 60, 60);
}

function movimentaAtorY(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 8;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 5;
    }
  }
}

function movimentaAtorX(){
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 8;
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMover()){
      xAtor += 5;
    }
  }
}



function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 732;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(50);
  fill(color(255, 240, 60))
  text(meusPontos, width / 10, 54);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 732;
}






