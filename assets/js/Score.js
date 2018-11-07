class Score {
    constructor() {
        this.current = 0
        this.scoreContainer = document.getElementById('score_text')
        this.scoreContainer.textContent = this.current
    }

    changeScore(target) {
        const targetValue = target.getAttribute('data-value')
        const value = parseInt(targetValue)

        this.current = this.current + value
        this.scoreContainer.textContent = this.current
    }

    restartScore() {
        this.current = 0
        this.scoreContainer.textContent = this.current
    }
}

export default Score
