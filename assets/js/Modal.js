class Modal {
    constructor(attempts, tasks, score) {
        this.view = document.getElementById('modal_reprove')
        this.buttonPlayAgain = document.getElementById('button_again')
        this.buttonGiveUp = document.getElementById('button_end')
        this.attempts = attempts
        this.tasks = tasks
        this.score = score
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

    prepareButtonGiveUp() {
        this.buttonGiveUp.addEventListener('click', () => window.location = 'results.html')
    }

    prepareButtonPlayAgain() {
        this.buttonPlayAgain.addEventListener('click', () => {
            this.attempts.buildMarkUp()
            this.tasks.buildMarkUp()
            this.shouldHide()
            this.score.restartScore()
        })
    }
}

export default Modal