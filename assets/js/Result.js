class Result {
    constructor() {
        this.inactives
    }

    calculate(inactives) {
        this.inactives = inactives.map(element => {
            return element.getAttribute('data-key')
        });
        return this.respond()
    }

    respond() {
        const responses = {
            "levantou": "Você não levantou da cama hoje. Tem dias mais difíceis que outros.",
            "saiu": "Não deu pra sair de casa hoje, mas tudo bem! Você pode tentar novamente amanhã!",
            "comeu": "Você esqueceu de comer e por isso passou mal. Tente se alimentar, você vai se sentir melhor!",
            "remédios": "Você não tomou seus remédios hoje. Além de ser perigoso, você perderá os próximos 2 dias por falta de energia",
            "exercícios": "Sem praticar exercícios seus níveis de serotonina ficaram muito baixos. Descanse por hoje e tente novamente amanhã. Talvez seja hora de procurar seu médico!",
            "produziu": "Não deu pra trabalhar direito e seu chefe te deu bronca. É bem ruim quando o mundo não entende sua doença crônica, não é?"
        }
        const activities = Object.keys(responses)
        const responseKey = activities.find((element) => this.inactives.includes(element))

        return responses[responseKey]
    }
}

export default Result