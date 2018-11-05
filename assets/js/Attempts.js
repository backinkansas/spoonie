class Attempts {
    constructor() {
        this.viewContainer = document.getElementById('all_spoons')
        this.currentAttempts = this.viewContainer.children.length
    }

    handle() {
        this.removeAttempt()
    }

    removeAttempt() {
        const singleAttempt = document.querySelector('.spoon')
        singleAttempt.remove()
    }

    addAttempt() {
        this.viewContainer.innerHTML = this.viewContainer.innerHTML + `<img src="./assets/img/teaspoon.svg" alt="Ícone de colher. Você só pode pegar medalhas se tiver colheres." class="spoon">`
    }

    getUpdatedAttempts() {
        this.currentAttempts = this.viewContainer.children.length
    }

    buildMarkUp() {
        this.getUpdatedAttempts()
        while (this.currentAttempts < 6) {
            this.addAttempt()
            this.currentAttempts = this.viewContainer.children.length
        }
    }
}

export default Attempts