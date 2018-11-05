import units from './badges.js'
import Attempts from './Attempts.js'
import Tasks from './Tasks.js'
import Score from './Score.js'
import Validator from './Validator.js'
import Modal from './Modal.js'

class Game {
    constructor() {
        this.tasks = new Tasks(units)
        this.score = new Score()
        this.validator = new Validator()
        this.attempts = new Attempts()

        // this.result = new Result()
        // this.modalWithResultView = new Modal()
    }

    init() {
        this.attempts.buildMarkUp()
        this.tasks.buildMarkUp()
        this.play()
    }

    // _calculateFinalResult() {
    //     return this.result.calculate(this.tasks.areActive(), this.attempts)
    // }

    // displayFinalResult() {
    //     this.modalWithResultView.update(this._calculateFinalResult())
    // }

    handleTask(target) {
        this.tasks.changeActivity(target)
        this.attempts.handle()
        this.score.changeScore(target)
    }

    play() {
        this.tasks.viewContainer.addEventListener('click', (event) => {

            if (this.validator.isValidAction(event.target)) {
                return this.handleTask(event.target)
            }

            this.modal = new Modal(this.attempts, this.tasks, this.score)
            this.modal.shouldShow()
        })
    }

}

export default Game