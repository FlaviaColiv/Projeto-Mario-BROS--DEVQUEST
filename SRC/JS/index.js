/*
Objetivos:

1-Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do Trailer.
    1.1 - dar um jeito de pegar o elemento que representa o botão na tela usando JS.
    1.2 - dar um jeito de identificar quando o usuário clicar no botão.
    1.3 - dar um jeito de pegar o elemento da modal no JS.
    1.4 - abrir a modal na tela.

2- quando o usuário clicar no x, devemos fechar a modal.
    2.1 - dar um jeito de pegar o elemento de fechar modal usando o js.
    2.2 - dar um jeito de identificar quando o usuario clicar no x.
    2.3 - fechar a modal.

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

// console.log(document);

// console.log(document.querySelector(".botao-trailer"));

function alternarModal () {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
} );

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
} );
