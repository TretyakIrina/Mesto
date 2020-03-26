class PopupUser {
    constructor(popupUserContent, userContent) {
        this.name = userContent.querySelector('.user-info__name').textContent;
        this.info = userContent.querySelector('.user-info__job').textContent;
        this.element = popupUserContent;
        this.inputUserHandler = this.inputUserHandler.bind(this);
    }
    toggle() {
        document.querySelector('.popupUser').classList.toggle('popupUser_is-opened');
    }
    open() {
        formUser.elements.name.value = this.name;
        formUser.elements.info.value = this.info;
        this.toggle();
        this.setEventListeners();
    }
    validation(lenght) {
        if (lenght < 2 || lenght > 30) {
            if (lenght === 0) {
                return 0;
            }
            else {
                return 2
            }
        } 
        else {
            return 1;
        }
    }
    inputUserHandler() {
        const nameLenght = event.currentTarget.elements.name.value.length;
        const infoLenght = event.currentTarget.elements.info.value.length;
        const addButton = document.querySelector('.popupUser__button');
        const helpName = document.querySelector('.popupUser__helpName');
        const helpInfo = document.querySelector('.popupUser__helpInfo');
        let flagName = 1;
        let flagInfo = 1;
        if (this.validation(nameLenght) === 0) {
            flagName = 0;
            helpName.textContent = 'Это обязательное поле';
            helpName.classList.add('popupUser__helpNameActive');
        }
        if (this.validation(nameLenght) === 2) {
            flagName = 0;
            helpName.textContent = 'Должно быть от 2 до 30 символов';
            helpName.classList.add('popupUser__helpNameActive');
        }
        if (this.validation(infoLenght) === 0) {
            flagInfo = 0;
            helpInfo.textContent = 'Это обязательное поле';
            helpInfo.classList.add('popupUser__helpInfoActive');
        }
        if (this.validation(infoLenght) === 2) {
            flagInfo = 0;
            helpInfo.textContent = 'Должно быть от 2 до 30 символов';
            helpInfo.classList.add('popupUser__helpInfoActive');
        }
        if (flagName && flagInfo) {
            addButton.removeAttribute('disabled');
            addButton.classList.remove('popupUser__button_disabled');
            helpName.classList.remove('popupUser__helpNameActive');
            helpInfo.classList.remove('popupUser__helpInfoActive');
        }
        else {
            if (flagInfo) {
                helpInfo.classList.remove('popupUser__helpInfoActive');
            }
            if (flagName) {
                helpName.classList.remove('popupUser__helpNameActive');
            }
            addButton.setAttribute('disabled', true);
            addButton.classList.add('popupUser__button_disabled');
        }
    }
    formUserSubmit(event) {
        event.preventDefault();
        document.querySelector('.user-info__name').textContent = formUser.elements.name.value;
        document.querySelector('.user-info__job').textContent = formUser.elements.info.value;
        formUser.reset();
        const popupUser = document.querySelector('.popupUser');
        popupUser.classList.remove('popupUser_is-opened');
    }
    setEventListeners() {
        document.querySelector('.popupUser__close').addEventListener('click', this.toggle);
        formUser.addEventListener('input', this.inputUserHandler);
        formUser.addEventListener('submit', this.formUserSubmit);
    }
    removeEventListeners() {
        document.querySelector('.popupUser__close').removeEventListener('click', this.toggle);
    }
}