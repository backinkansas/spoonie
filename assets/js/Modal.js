class Modal {
    constructor({ restart }) {
        this.view = document.getElementById('modal_reprove')
        this.buttonPlayAgain = document.getElementById('button_again')
        this.buttonGiveUp = document.getElementById('button_end')
        this.textResponse = document.querySelector('.modal_text-content')
        this.restart = restart
    }

    shouldShow() {
        this.view.classList.remove('is-hiddenModal')
        this.view.classList.add('is-shownModal')
        this.prepareButtonGiveUp()
        this.prepareButtonPlayAgain()
    }

    shouldHide() {
        this.view.classList.remove('is-shownModal')
        this.view.classList.add('is-hiddenModal')
    }

    updateTextResponse(result) {
        this.textResponse.textContent = result
    }

    prepareButtonGiveUp() {
        this.buttonGiveUp.addEventListener('click', () => window.location = 'results.html')
    }

    prepareButtonPlayAgain() {
        this.buttonPlayAgain.addEventListener('click', () => {
            this.restart()
            this.shouldHide()
        })
    }
}

export default Modal