import './pages/index.css';
//import {Card} from './js/card.js';
//import {CardList} from './js/cardList.js';
const popupButtonEdit = document.querySelector('.user-info__buttonEdit');
const popupButton = document.querySelector('.user-info__button');
const placesList = document.querySelector('.places-list');
const formUser = document.forms.user;
const form = document.forms.new;

const cardList = new CardList(placesList, initialCards, (element) => {
    const card = new Card(element);
    return card;
}, (img) => {
    const popupImg = new PopupImg(img);
    popupImg.toggle();
});

function popupUserOpened() {
    const popupUserContent = document.querySelector('.popupUser__content');
    const userContent = document.querySelector('.user-info__data');
    const popupUser = new PopupUser(popupUserContent, userContent);
    popupUser.open();
}
function popupOpened() {
    const popupCard = new PopupCard((mas) => {
        cardList.addCard(mas);
    });
    popupCard.open();
}

popupButtonEdit.addEventListener('click', popupUserOpened);
popupButton.addEventListener('click', popupOpened);

cardList.render();