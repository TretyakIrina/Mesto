class Popup {
    constructor(func) {
        this.func = func;
    }
    toggle(selector, className) {
        document.querySelector(selector).classList.toggle(className);
    }
}