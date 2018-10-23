import badges from './badges.js'
import Badge from './Badge.js'
import BadgesList from './BadgesList.js'
import SpoonList from './SpoonList.js';

const app = {
    init() {
        const badgesList = badges.map(badge => {
            return new Badge(badge)
        })

        const badgesContainer = new BadgesList(badgesList)
        badgesContainer.append()

        const spoonList = new SpoonList()
        spoonList.buildSpoonEntities()
    }
}

document.onload = app.init()
