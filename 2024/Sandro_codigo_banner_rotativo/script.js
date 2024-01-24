var imagens = ["img/img01", "img/img02.png", "img/img03.png"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 3;
document.querySelector('.bannersPNG img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 3000); 