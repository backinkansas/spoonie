class Validator {
    isValidTask(target) {
        return target.src.includes('greymedal')
    }

    hasAttemptsCurrency() {
        const viewContainer = document.getElementById('all_spoons')
        const currentAttemptsNumber = viewContainer.children.length
        return currentAttemptsNumber > 0
    }

    isValidAction(target) {
        if (this.isValidTask(target) && this.hasAttemptsCurrency()) return true

        return false
    }
}

export default Validator