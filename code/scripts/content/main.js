import {main} from '../../resources/main.js';

export default function addMain(type) {
    document.querySelector('#header').insertAdjacentHTML('afterend', `
    <main id="main">
        <div class="container">
            <div class="main-wrap">
                <div class="content">
                    <h2>Список разделов</h2>
                    <i>(демоверсия)</i>
                </div>
            </div>
        </div>
    </main>
    <footer></footer>`);
    addLessons();
}

function addLessons() {
    for (let i = 0; i < main.length; i++) {
        document.querySelector('.content').insertAdjacentHTML('beforeend', `
        <div class="lesson" id="lesson-${i+1}">
            <h3>${i+1}. ${main[i].name}</h3>
            <ul>${setItems(main[i])}</ul>
        </div>`);
    }
}

function setItems(obj) {
    let item = '';
    delete obj.name;
    for (let key in obj) {
        obj[key].forEach((el, index, arr) => {
            item +=`<li class="${key}"><a href="${(key === 'materials') ? `code/resources/materials/${el}` : el}" 
            ${(key === 'video') ? 'target="_blank"' : ''}>
            ${setNames(key, arr.length, index)}</a></li>`;
        });
    }

    return item;
}

function setNames(key, length, index) {
    let val;
    switch (key) {
        case 'test': 
            val = 'Тест';
            break;
        case 'practice': 
            val = 'Тренажёр';
            break;
        case 'challenge': 
            val = 'Челлендж';
            break;
        case 'materials': 
            val = 'Материалы';
            break;
        case 'video': 
            val = 'Видео';
            break;
        case 'article':
            val = 'Статья';
            break;
    }

    if (length > 1) {
        val += `-${index+1}`;
    }
    return val;
}