class PopupImg {
    constructor(img) {
        this.image = img;
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        const classImg = document.querySelector('.popupImg').classList;
        if (classImg.contains('popupImg_is-opened')) {
            this.removeEventListeners();
        }
        else {
            const popupContent = document.querySelector('.popupImg__content');
            popupContent.style.backgroundImage = this.image;
            this.setEventListeners();
        }
        document.querySelector('.popupImg').classList.toggle('popupImg_is-opened');
    }
    setEventListeners(){
        document.querySelector('.popupImg__close').addEventListener('click', this.toggle);
    }
    removeEventListeners(){
        document.querySelector('.popupImg__close').removeEventListener('click', this.toggle);
    }
}