class Badge {
    constructor(attributes = {}) {
        this.name = attributes.name || '' 
        this.key = attributes.key || ''
        this.imagePath = attributes.imagePath || ''
        this.imageClass = 'badge'
        this.containerClass = 'badges_container'
    }

    buildMarkUp() {
        const container = this.buildContainer()
        const image = this.buildImage()
        const paragraph = this.buildParagraph()
        
        container.appendChild(image)
        container.appendChild(paragraph)
        this.attachEvent(image)

        return container
    }

    buildContainer() {
        const container = document.createElement('li')
        container.classList.add(this.containerClass)

        return container
    }

    buildImage() {
        const image = document.createElement('img')

        image.setAttribute('src', this.imagePath)
        image.setAttribute('alt', this.name)
        image.setAttribute('value', this.key)
        image.classList.add(this.imageClass)

        return image
    }

    buildParagraph() {
        const paragraph = document.createElement('p')

        paragraph.textContent = this.name

        return paragraph
    }

    toggleImagePath(image) {

        if (image.getAttribute('src') === this.imagePath) {
            image.setAttribute('src', "./assets/img/medal.svg")
        } else {
            image.setAttribute('src', this.imagePath)
        }
    }

    attachEvent(element) {
        element.addEventListener('badgeChange', (event) => {
            this.toggleImagePath(element)
        })
    }
}

export default Badge
