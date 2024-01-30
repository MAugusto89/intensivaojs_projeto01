const nomeCapitulo =  document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo'); 
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
/****************************************************************/
const  numeroCapitulos =  10;
let taTocando = false;
let capituloAtual = 1;
/****************************************************************/
function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audioCapitulo.play();
    taTocando = true;
}
function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audioCapitulo.pause();
    taTocando = false;
}
function tocarOuPausar(){
    if(taTocando === true){
        pausarFaixa();
    }else{
        tocarFaixa();
    }
}
/********************************************************************/
function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}
function proximaFaixa(){
    if(capituloAtual < numeroCapitulos){
        capituloAtual += 1;
    }else{
        capituloAtual = 1;
    }
    audioCapitulo.src = "/books/dom-casmurro/" + capituloAtual + ".mp3";
    trocarNomeFaixa();
    tocarFaixa();
}
/*********************************************************************/
function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    }else{
        capituloAtual -= 1;
    }
    audioCapitulo.src = "/books/dom-casmurro/" + capituloAtual + ".mp3";
    trocarNomeFaixa();
    tocarFaixa();
}
/***********************************************************************/
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
/**********************************************************************/

