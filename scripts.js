let wordList = [];
let shuffledList = [];
let index = 0;
let language = 'es';

const wordElement = document.querySelector('.word');
const beforeElement = document.querySelector('.btn--before');
const nextElement = document.querySelector('.btn--next');
const koElement = document.querySelector('.btn--ko');
const esElement = document.querySelector('.btn--es');
const soundElement = document.querySelector('.btn--sound');
const speedElement = document.querySelector('.speed');
const selectElement = document.querySelector('.sectionSelect');
const penElement = document.querySelector('.btn--pen');
const bookElement = document.querySelector('.btn--book');
const modalBackgroundElement = document.querySelector('.modalBackground');
const modalElement = document.querySelector('.modal');
const tableElement = document.querySelector('tbody');
const popupElement = document.querySelector('.popup');

async function start() {
    try {
        wordList = await loadData();
        beforeElement.addEventListener('click', beforeWord);
        nextElement.addEventListener('click', nextWord);
        koElement.addEventListener('click', languageKorean);
        esElement.addEventListener('click', languageSpanish);
        soundElement.addEventListener('click', converToSpeech);
        selectElement.addEventListener('change', selectSection);
        modalBackgroundElement.addEventListener('click', hideModal);
        bookElement.addEventListener('click', showModal);
        penElement.addEventListener('click', writeWord);
        tableElement.addEventListener('click', handleClickOnTable);
        modalElement.addEventListener('click', ev => ev.stopPropagation())
    
        selectSection();
        restoreTableFromMemory();
    } catch(e) {
        alert('ERROR');
        console.error(e.message);
    }
}

async function loadData() {
    let vocabulary = [];
    const data = await fetch('vocabulary.json');
    const sections = await data.json();

    for(const {name, section} of sections) {
        selectElement.insertAdjacentHTML("beforeend", `<option value="${section}">${name}</option>`);
        if(section){
            const data = await fetch(`vocabulary/section-${section}.json`);
            const words = await data.json();
            vocabulary = [...vocabulary, ...words.map((w) => ({...w, 'section': section}))];
        }
    };
    return vocabulary;
}

function beforeWord() {
    if(shuffledList.length <= 1) return;
    index = (index === 0) ? shuffledList.length - 1 : index - 1;
    wordElement.innerHTML = shuffledList[index][language];
}

function nextWord() {
    if(shuffledList.length <= 1) return;
    index = (index === shuffledList.length - 1) ? 0 : index + 1;
    wordElement.innerHTML = shuffledList[index][language];
}

function languageKorean() {
    language = 'ko';
    wordElement.innerHTML = shuffledList[index][language];
}

function languageSpanish() {
    language = 'es';
    wordElement.innerHTML = shuffledList[index][language];
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

function converToSpeech() {
    const msg = new SpeechSynthesisUtterance();
    //msg.lang = language === 'ko' ? 'ko-KR' : 'es-ES';
    if(speedElement.value > 10) {
        speedElement.value = 10;
    } else if(speedElement.value < 1) {
        speedElement.value = 1;
    }
    msg.lang = 'ko-KR';
    msg.rate = Number(speedElement.value) / 10;
    msg.text = shuffledList[index]['ko'];
    window.speechSynthesis.speak(msg);
}

function selectSection() {
    const section = selectElement.value;
    if(section) {
        shuffledList = wordList.filter(word => word.section === section);
    } else {
        shuffledList = [...wordList];
    }
    shuffle(shuffledList);
    index = 0;
    wordElement.innerHTML = shuffledList[index][language];
}

function hideModal() {
    modalBackgroundElement.classList.add('hidden');
    saveTableOnMemory();
}

function showModal() {
    if(!tableElement.innerHTML.trim()) return;
    modalBackgroundElement.classList.remove('hidden');
    saveTableOnMemory();
}

function writeWord() {
    if(!shuffledList.length) return;
    const row = `
            <tr>
                <td>
                    <strong class="hidden">${shuffledList[index]['ko']}</strong>
                    <span class="eye hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                        <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                        </svg>
                    </span>
                    <span class="eye">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </td>
                <td>${shuffledList[index]['es']}</td>
                <td class="delete">❌</td>
            </tr>
        `;
    if(tableElement.innerHTML.includes(`<td>${shuffledList[index]['es']}</td>`)) return;
    tableElement.insertAdjacentHTML("beforeend", row);
    popupElement.classList.remove('hidden');
    setTimeout(() => popupElement.classList.add('hidden'), 1000);

    shuffledList = shuffledList.filter((_, i) => i !== index);
    index = index < shuffledList.length ? index : 0;
    if(shuffledList.length > 0) {
        wordElement.innerHTML = shuffledList[index][language]
    } else {
        wordElement.innerHTML = '🦑';
    };
}

function handleClickOnTable(ev) {
    const deleteButton = ev.target.closest('.delete');
    const eyeButton = ev.target.closest('.eye');
    if(deleteButton) {
        deleteButton.closest('tr').remove();
        if(!tableElement.innerHTML.trim()) hideModal();
    } else if(eyeButton) {
        for(let el of eyeButton.closest('td').children) {
            el.classList.toggle('hidden')
        }
    }
}

function saveTableOnMemory() {
    localStorage.setItem('table', tableElement.innerHTML);
}

function restoreTableFromMemory() {
    tableElement.innerHTML = localStorage.getItem('table');
}

start();