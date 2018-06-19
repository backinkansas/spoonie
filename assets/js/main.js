const badges = document.querySelectorAll('.badge')
let points = document.getElementById('score_p')
let modal = document.getElementById('myModal')
let buttonOut = document.querySelector('#button_out')
let buttonEnd = document.querySelector('#button_end')

function removeSpoon() {
    let spoonContainer = document.querySelector('#all_spoons')
    let spoonSingle = document.querySelector('.spoon')
    let spoonCondition = document.querySelectorAll('.spoon')
    spoonCondition.length > 0 ? spoonContainer.removeChild(spoonSingle) : console.log('Não há colheres para remover')
}

function addSpoon() {
    let spoonContainer = document.querySelector('#all_spoons')
    let spoonSingle = document.createElement('img')
    spoonSingle.classList.add('spoon')
    spoonSingle.setAttribute('src', './assets/img/teaspoon.svg')
    spoonSingle.setAttribute('alt','ícone de colher. Você só pode pegar medalhas se tiver colheres.')
    spoonContainer.appendChild(spoonSingle)
}

function addPointChangeBadge(img) {
    img.setAttribute('src', './assets/img/medal.svg')
    points.textContent = parseInt(points.textContent) + 1
    removeSpoon()
}

function removePointChangeBadge(img) {
    img.setAttribute('src', './assets/img/greymedal.svg')
    points.textContent = parseInt(points.textContent) - 1
}

function alertMissingCurrency() {
    modal.style.display = "block"
}

buttonOut.onclick = function() {
    modal.style.display = 'none';
    for (const medalhinha of badges) {
        medalhinha.setAttribute('src', './assets/img/greymedal.svg')
    }
    points.textContent = 0
    for (let i =0; i < 6; i++) {
        addSpoon()
    }
}

buttonEnd.onclick = function() {
    window.location = 'results.html'
}

for (const img of badges) {
    img.addEventListener('click', function setGame() {
        let spoonCondition = document.querySelectorAll('.spoon')
        if (img.src === "file:///D:/Asus/Documents/Reprograma/projeto_spoonie/assets/img/greymedal.svg") {
            spoonCondition.length > 0 ? addPointChangeBadge(img) : alertMissingCurrency()
        } else {
            removePointChangeBadge(img)
            addSpoon()
        }
    })
}