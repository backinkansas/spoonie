class BadgesList {
    constructor(badgeList = []) {
        this.badgeList = badgeList
        this.containerClass = '.js-badges'
        this.container = document.querySelector(this.containerClass)
    }

    append() {
        this.badgeList.forEach(badge => {
            this.container.appendChild(badge.buildMarkUp())
        })
        this.distributeEvent()
    }

    distributeEvent() {
        this.container.addEventListener('click', function(event){
            if (event.target.matches('.badge')) {
                const badgeEvent = new Event('badgeChange', {bubbles: true})
                event.target.dispatchEvent(badgeEvent)
            }
        })
    }
}

export default BadgesList