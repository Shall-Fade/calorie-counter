// Переменные
let sexRadio = document.querySelectorAll('input[name="sex"]');
const manBtn = document.getElementById('man');
const womanBtn = document.getElementById('woman');
const ageValue = document.getElementById('age');
const growthValue = document.getElementById('growth');
const weightValue = document.getElementById('weight');
const submitBtn = document.querySelector('.submit-btn');
const result = document.querySelector('.result-section');
let radio = document.querySelectorAll('input[name="activity"]');


submitBtn.addEventListener('click', function() {
    let age = +ageValue.value;
    let growth = +growthValue.value;
    let weight = +weightValue.value;
    let activity = 0;
    let radioValue = 0;
    let sexRadioValue = '';

    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            radioValue = radio[i].value;
        }
    }

    for(let i = 0; i < sexRadio.length; i++) {
        if(sexRadio[i].checked) {
            sexRadioValue = sexRadio[i].value;
        }
    }

    if(radioValue == 1) {
        activity = 1.2;
    } else if(radioValue == 2) {
        activity = 1.375;
    } else if(radioValue == 3) {
        activity = 1.55;
    } else if(radioValue == 4) {
        activity = 1.725;
    } else if(radioValue == 5) {
        activity = 1.9;
    }

    calculation(age, growth, weight, activity, sexRadioValue);

    ageValue.value = '';
    growthValue.value = '';
    weightValue.value = '';
});

function calculation(age, growth, weight, activity, sexRadioValue) {
    if(age !== 0 && growth !== 0 && weight !== 0 && activity !== 0 && sexRadioValue !== '') {
        if(sexRadioValue === 'man') {
            let BMR = Math.round((88.36 + (13.4 * weight) + (4.8 * growth) - (5.7 * age)) * activity);
            let reduceWeight = Math.round(BMR - (BMR * 0.20));
            let increaseWeight = Math.round(BMR + (BMR * 0.20));
            createSection(BMR, reduceWeight, increaseWeight);
        } else if(sexRadioValue === 'woman') {
            let BMR = Math.round((447.6 + (9.2 * weight) + (3.1 * growth) - (4.3 * age)) * activity);
            let reduceWeight = Math.round(BMR - (BMR * 0.20));
            let increaseWeight = Math.round(BMR + (BMR * 0.20));
            createSection(BMR, reduceWeight, increaseWeight);
        }
    }
}

function createSection(BMR, reduceWeight, increaseWeight) {
    result.classList.remove('hide');
    //Title
    const h2 = document.createElement('h2');
    h2.innerText = 'Ваша норма калорий';
    h2.classList.add('h2-orange');
    result.appendChild(h2);
    //Main DIV
    const div = document.createElement('div');
    div.classList.add('result-block');
    result.appendChild(div);

    //First Element

    //DIV Item
    const divItem1 = document.createElement('div');
    divItem1.classList.add('result-item');
    div.appendChild(divItem1);
    //H5 Item
    const h5Item1 = document.createElement('h5');
    h5Item1.classList.add('h5-item');
    h5Item1.innerText = `${BMR} ккал`;
    divItem1.appendChild(h5Item1);
    //P Item
    const pItem1 = document.createElement('p');
    pItem1.classList.add('p-item');
    pItem1.innerText = 'Суточная норма калорий';
    divItem1.appendChild(pItem1);

    //Second Element

    //DIV Item
    const divItem2 = document.createElement('div');
    divItem2.classList.add('result-item');
    div.appendChild(divItem2);
    //H5 Item
    const h5Item2 = document.createElement('h5');
    h5Item2.classList.add('h5-item');
    h5Item2.innerText = `${increaseWeight} ккал`;
    divItem2.appendChild(h5Item2);
    //P Item
    const pItem2 = document.createElement('p');
    pItem2.classList.add('p-item');
    pItem2.innerText = 'Чтобы набрать вес';
    divItem2.appendChild(pItem2);

    //Third Element

    //DIV Item
    const divItem3 = document.createElement('div');
    divItem3.classList.add('result-item');
    div.appendChild(divItem3);
    //H5 Item
    const h5Item3 = document.createElement('h5');
    h5Item3.classList.add('h5-item');
    h5Item3.innerText = `${reduceWeight} ккал`;
    divItem3.appendChild(h5Item3);
    //P Item
    const pItem3 = document.createElement('p');
    pItem3.classList.add('p-item');
    pItem3.innerText = 'Чтобы сбросить вес';
    divItem3.appendChild(pItem3);
}