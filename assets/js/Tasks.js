import Validator from './Validator.js'

class Tasks {
    constructor(units = []) {
        this.units = units
        this.currentTask
        this.viewContainer = document.getElementById('all_badges')
        this.validator = new Validator()
    }

    setImage(target, path) {
        target.setAttribute('src', path)
    }

    changeActivity(target) {
        return this.setImage(target, './assets/img/colormedal.svg')
    }

    areActive() {
        return this.units.filter(element => element.image === 'colormedal')
    }

    buildMarkUp() {
        const unitsMarkup = this.units.map(unit => {
            return `<li class='badges_container'><img src='./assets/img/greymedal.svg' value=${unit.value} class='badge' data-name=${unit.key}></li>`
        })

        this.viewContainer.innerHTML = unitsMarkup.join('')
    }
}

export default Tasks