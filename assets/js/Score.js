class Score {
    constructor() {
        this.current = 0
        this.scoreContainer = document.getElementById('score_p')
        this.scoreContainer.textContent = this.current
    }

    changeScore(target) {
        const accessValue = target.attributes.value
        const strValue = accessValue.nodeValue
        const value = parseInt(strValue)

        this.current = this.current + value
        this.scoreContainer.textContent = this.current
    }

    restartScore() {
        this.current = 0
        this.scoreContainer.textContent = this.current
    }
}

export default Score
