const wordList = [
    {
        es: 'Hola',
        ko: '안녕하세요'
    },
    {
        es: 'Adiós',
        ko: '안녕'
    }
];

let index = 0;
let language = 'ko';

const wordElement = document.querySelector('.word');
const beforeElement = document.querySelector('.btn--before');
const nextElement = document.querySelector('.btn--next');
const koElement = document.querySelector('.btn--ko');
const esElement = document.querySelector('.btn--es');

function start() {
    beforeElement.addEventListener('click', beforeWord);
    nextElement.addEventListener('click', nextWord);
    koElement.addEventListener('click', languageKorean);
    esElement.addEventListener('click', languageSpanish);
    
    shuffle(wordList);
    wordElement.innerHTML = wordList[index][language];
}

function beforeWord() {
    index = (index === 0) ? 0 : index - 1;
    wordElement.innerHTML = wordList[index][language];
}

function nextWord() {
    index = (index === wordList.length - 1) ? wordList.length - 1 : index + 1;
    wordElement.innerHTML = wordList[index][language];
}

function languageKorean() {
    language = 'ko';
    wordElement.innerHTML = wordList[index][language];
}

function languageSpanish() {
    language = 'es';
    wordElement.innerHTML = wordList[index][language];
}

function shuffle(array) {
    let currentIndex = array.length;
    
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

start();