class Validator {
    isValidTask(target) {
        return target.src.includes('greymedal')
    }

    hasAttemptsCurrency() {
        const viewContainer = document.getElementById('all_spoons')
        const currentAttemptsNumber = viewContainer.children.length
        return currentAttemptsNumber > 0
    }

    validate(target){
        const validTarget = this.isValidTask(target) && this.hasAttemptsCurrency()

        if (!validTarget) {
            throw "Não pode realizar ação"
        }

    }
}

export default Validator