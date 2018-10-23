class Spoon {
    constructor() {
        this.spoonClass = "spoon"
        this.imagePath = "./assets/img/teaspoon.svg"
        this.altAttribute = "Ícone de colher. Você só pode pegar medalhas se tiver colheres."

        return this.buildSpoon()
    }

    buildSpoon() {
        const spoon = document.createElement('img')

        spoon.setAttribute('src', this.imagePath)
        spoon.setAttribute('alt', this.altAttribute)
        spoon.classList.add(this.spoonClass)

        return spoon
    }

}

export default Spoon