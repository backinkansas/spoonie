import units from './badges.js'
import Attempts from './Attempts.js'
import Tasks from './Tasks.js'
import Score from './Score.js'
import Validator from './Validator.js'
import Modal from './Modal.js'
import Result from './Result.js'

class Game {
    constructor() {
        this.tasks = new Tasks(units)
        this.score = new Score()
        this.validator = new Validator()
        this.attempts = new Attempts()
        this.modal = new Modal({ restart: this.restart.bind(this) })
        this.buttonRequestResult = document.getElementById('try_win')
        this.result = new Result()
    }

    init() {
        this.attempts.buildMarkUp()
        this.tasks.buildMarkUp()
        this.play()
    }

    play() {
        this.tasks.viewContainer.addEventListener('click', (event) => {
            try{
                this.validator.validate(event.target)
                this.handleTask(event.target)
            } catch{
                this.modal.shouldShow()
            }
        })
        this.prepareButtonRequestResult()
    }

    handleTask(target) {
        this.tasks.changeActivity(target)
        this.attempts.handle()
        this.score.changeScore(target)
    }

    prepareButtonRequestResult() {
        this.buttonRequestResult.addEventListener('click', () => {
            this.modal.updateTextResponse(this.calculateFinalResult())
            this.modal.shouldShow()
        })
    }

    calculateFinalResult() {
        return this.result.calculate(this.tasks.areMissing())
    }

    restart() {
        this.attempts.buildMarkUp()
        this.tasks.buildMarkUp()
        this.score.restartScore()
    }
}

export default Game