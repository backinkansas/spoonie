import Spoon from './Spoon.js'

class SpoonList {
    constructor() {
        this.NUMBER_OF_SPOONS_RULE = 6
        this.container = document.getElementById('all_spoons')
        this.spoons = []
        this.selectedBadge = []
    }

    createSingleSpoon() {
        const newSpoon = new Spoon()

        this.container.appendChild(newSpoon)
        this.spoons.push(newSpoon)
    }

    buildSpoonEntities() {
        for (let i = 0; i < this.NUMBER_OF_SPOONS_RULE; i++) {
            this.createSingleSpoon()
        }
        this.addEvent()
    }

    removeSpoon() {
        this.spoons.pop().remove()
    }

    isSelectedTask(img) {
        return img.src.includes('grey')
    }

    hasSpoonCurrency() {
        return this.container.children.length > 0
    }

    addEvent() {
        const gameContainer = document.querySelector('#game')

        gameContainer.addEventListener('badgeChange', (event) => {
            if (this.isSelectedTask(event.target)) return this.createSingleSpoon()

            if (this.hasSpoonCurrency()) return this.removeSpoon()      
        })
    }

}

export default SpoonList