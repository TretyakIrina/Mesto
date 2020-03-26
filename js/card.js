class Card {
    constructor (props) {
        this._name = props.name;
        this._link = props.link;
        this.element = null;
        this.onClickImg = null;
        this.remove = this.remove.bind(this);
        this.like = this.like.bind(this);
        this.onClick = this.onClick.bind(this);
        this.getSource = this.getSource.bind(this);
    }
    template() {
        return `<div class="place-card">
        <div class="place-card__image" style="background-image: url(${this._link})">
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name">${this._name}</h3>
          <button class="place-card__like-icon"></button>
        </div>
      </div>`.trim();
    }
    handleCardClick(fn) {
        this.onClickImg = fn;
    }
    onClick() {
        return this.onClickImg(this.getSource());
    }
    getSource() {
        return this.element.querySelector('.place-card__image').style.backgroundImage;
    }
    createElement() {
        const newElement = document.createElement('div');
        newElement.innerHTML = this.template();
        this.element = newElement.firstChild;
        this.setEventListeners();
        return newElement.firstChild;
    }
    like() {
        this.element.querySelector('.place-card__like-icon').classList.toggle('place-card__like-icon_liked'); 
    }
    remove() {
        this.removeEventListeners();
        this.element.remove();
    }
    setEventListeners(){
        this.element.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
        this.element.querySelector('.place-card__like-icon').addEventListener('click', this.like);
        this.element.querySelector('.place-card__image').addEventListener('click', this.onClick);
    }
    removeEventListeners(){
        this.element.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
        this.element.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
        this.element.querySelector('.place-card__image').removeEventListener('click', this.onClick);
    }
}