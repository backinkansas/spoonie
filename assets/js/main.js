const badges = document.querySelectorAll('.badge')
let points = document.getElementById('score_p')
let modal = document.getElementById('my_modal')
let modalAlert = document.getElementById('modal_alert')
const buttonOut = document.querySelector('#button_out')
const buttonEnd = document.querySelector('#button_end')
let interactionText = document.querySelector('#interactionText')
let selected = []
const tryWin = document.getElementById('try_win')
const buttonGiveUp = document.getElementById('button_giveup')
const buttonContinue = document.getElementById('button_continue')

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
    selected.push(img.getAttribute('value'))
}

function removePointChangeBadge(img) {
    img.setAttribute('src', './assets/img/greymedal.svg')
    points.textContent = parseInt(points.textContent) - 1
}

function alertMissingCurrency() {
    modal.style.display = "block"
}

function verify(action) {
    return selected.includes(action)
}

function notVerified(text) {
    interactionText.textContent = text
    modalAlert.style.display = "block"
}

buttonOut.onclick = function() {
    modal.style.display = 'none';
    for (const badge of badges) {
        badge.setAttribute('src', './assets/img/greymedal.svg')
    }
    points.textContent = 0
    for (let i =0; i < 6; i++) {
        addSpoon()
    }
}

buttonEnd.onclick = function() {
    window.location = 'results.html'
}

buttonGiveUp.onclick = function() {
    window.location = 'results.html'
}

buttonContinue.onclick = function() {
    modalAlert.style.display = 'none';
}

for (const img of badges) {
    img.addEventListener('click', function setGame() {
        let spoonCondition = document.querySelectorAll('.spoon')
        let imagePath = img.src
        if (imagePath.includes('greymedal.svg')) {
            spoonCondition.length > 0 ? addPointChangeBadge(img) : alertMissingCurrency()
            console.log(selected)
        } else {
            removePointChangeBadge(img)
            addSpoon()
            let taskValue = img.getAttribute('value')
            if (selected.includes(taskValue)) {
                let index = selected.indexOf(taskValue)
                selected.splice(index, 1)
                console.log(selected)
            } else {
                console.log('não tinha')
            }
        }
    })
}

tryWin.addEventListener('click', function checkOptions() {
    if (selected.length < 6) {
        notVerified('Você ainda tem colheres que pode utilizar!')
    } else {
        switch (false) {
            case verify("levantou"):
                notVerified('Você não levantou da cama hoje. Tem dias mais difíceis que outros.');
                break;
            case verify("saiu"):
                notVerified('Não deu pra sair de casa hoje, mas tudo bem! Você pode tentar novamente amanhã!');
                break;
            case verify("remédios"):
                notVerified('Você não tomou seus remédios hoje. Além de ser perigoso, você perderá os próximos 2 dias por falta de energia');
                break;
            case verify("comeu"):
                notVerified('Você esqueceu de comer e por isso passou mal. Tente se alimentar, você vai se sentir melhor!');
                break;
            case verify('produziu'):
                notVerified('Não deu pra trabalhar direito e seu chefe te deu bronca. É bem ruim quando o mundo não entende sua doença crônica, não é?')
                break;
            case verify('exercícios'):
                notVerified('Sem praticar exercícios seus níveis de serotonina ficaram muito baixos. Descanse por hoje e tente novamente amanhã. Talvez seja hora de procurar seu médico!');
                break;
            default:
                window.location = 'results.html'
        }
    }
})