class Tasks {
    constructor(units = []) {
        this.units = units
        this.currentTask
        this.viewContainer = document.getElementById('all_badges')
    }

    setImage(target, path) {
        target.setAttribute('src', path)
    }

    changeActivity(target) {
        return this.setImage(target, './assets/img/colormedal.svg')
    }

    areMissing() {
        const allTasks = Array.from(this.viewContainer.children)
        return allTasks.filter(element => element.innerHTML.includes('greymedal'))
    }

    buildMarkUp() {
        const unitsMarkup = this.units.map(unit => {
            return `<li class='badges_container' data-key=${unit.key}><img src='./assets/img/greymedal.svg' class='badge' data-value=${unit.value}><p>${unit.name}</p></li>`
        })

        this.viewContainer.innerHTML = unitsMarkup.join('')
    }
}

export default Tasks