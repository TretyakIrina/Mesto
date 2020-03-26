class PopupCard extends Popup {
    constructor(func) {
        super(func);
        this.close = this.close.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    open() {
        this.toggle('.popup', 'popup_is-opened');
        this.setEventListeners();
    }
    close() {
        this.toggle('.popup', 'popup_is-opened');
    }
    inputHandler() {
        const name = event.currentTarget.elements.name;
        const link = event.currentTarget.elements.link;
        const addButton = document.querySelector('.popup__button');
        if (name.value.length === 0 || link.value.length === 0) {
            addButton.setAttribute('disabled', true);
            addButton.classList.remove('popup__button_enabled');
        } else {
            addButton.removeAttribute('disabled');
            addButton.classList.add('popup__button_enabled');
        }
    }
    formSubmit(event) {
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const link = event.currentTarget.elements.link.value;
        this.func({
            name: name,
            link: link
        });
        form.reset();
        const popup = document.querySelector('.popup');
        popup.classList.remove('popup_is-opened');
    }
    setEventListeners() {
        document.querySelector('.popup__close').addEventListener('click', this.close);
        form.addEventListener('input', this.inputHandler);
        form.addEventListener('submit', this.formSubmit);
    }
}