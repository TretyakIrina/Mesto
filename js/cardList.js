class CardList {
    constructor(domElement, cards, functionAddCard, functionClickCard){
        this.domElement = domElement;
        this.cards = cards;
        this.functionAddCard = functionAddCard;
        this.functionClickCard = functionClickCard;
        this.addCard = this.addCard.bind(this);
    }
    addCard(currentValue) {
        const card = this.functionAddCard(currentValue);
        card.handleCardClick(this.functionClickCard);
        this.domElement.appendChild(card.createElement());
    }
    render() {
        this.cards.forEach(this.addCard);
    }
}