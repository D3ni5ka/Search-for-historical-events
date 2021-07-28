let historyDate = {
    1828: 'День рождения жевательной резинки',
    1932: 'Издан декрет «Об объединении частей арабского королевства», по которому государство стало называться Королевством Саудовская Аравия',
    1939: 'На Всемирной ярмарке в Нью-Йорке заложена «Капсула времени»',
    1943: 'День памяти жертв геноцида в Литве',
    1944: 'Начало принудительного выселения этнических украинцев из Польши на Украину',
    2008: 'Вышла в свет первая версия платформы Android',
};

let input = document.querySelector('#input');
let table = document.querySelector('#table');
input.addEventListener('keypress', function (event) {

    for (let elem in historyDate) {
        if (event.charCode == 13 && input.value == elem) {
            let td = document.createElement('td');
            td.innerHTML = historyDate[elem];
            table.appendChild(td);
        }
    }
})