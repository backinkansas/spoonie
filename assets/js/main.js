const badges = document.querySelectorAll('.badge')
let points = document.getElementById('score_p')
// const spoons = document.querySelectorAll('.spoon')

function removeSpoon() {
    let colheres = document.querySelector('#all_spoons')
    let colher = document.querySelector('.spoon')
    colheres.removeChild(colher)
}

function addSpoon() {
    // let myspoon = document.getElementById('#all_spoons').innerHTML('<img src="./assets/img/teaspoon.svg" alt="ícone de colher. Você só pode pegar medalhas se tiver colheres." class="spoon">')
}

for (const img of badges) {
    img.addEventListener('click', function changeBadge() {

        if (img.src === "file:///D:/Asus/Documents/Reprograma/projeto_spoonie/assets/img/greymedal.svg") {
            img.setAttribute('src', './assets/img/medal.svg')
            points.textContent = parseInt(points.textContent) + 1
            removeSpoon()
        } else {
            img.setAttribute('src', './assets/img/greymedal.svg')
            points.textContent = parseInt(points.textContent) - 1
            addSpoon()
        }
    })
}