class Attempts {
    constructor() {
        this.viewContainer = document.getElementById('all_spoons')
        this.currentAttempts = this.getUpdatedAttempts()
    }

    handle() {
        this.removeAttempt()
    }

    removeAttempt() {
        document.querySelector('.spoon').remove()
    }

    buildMarkUp() {
        const MAXIMUM_SPOON_NUMBER = 6

        this.updateAttempts()
        while (this.currentAttempts < MAXIMUM_SPOON_NUMBER) {
            this.addAttempt()
            this.updateAttempts()
        }
    }

    addAttempt() {
        this.viewContainer.innerHTML += `<img src="./assets/img/teaspoon.svg" alt="Ícone de colher. Você só pode pegar medalhas se tiver colheres." class="spoon">`
    }

    updateAttempts() {
        this.currentAttempts = this.getUpdatedAttempts()
    }

    getUpdatedAttempts() {
        return this.viewContainer.children.length
    }
}

export default Attempts