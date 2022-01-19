var money = 0;
var modifier = 1;
var upgradeCost = 10;

function init() {
    updateRender();
    let cookie = document.querySelector('.cookie');
    let upgradeSelector = document.querySelector('.upgrade span');

    cookie.addEventListener("click", function () { click() });
    upgradeSelector.addEventListener("click", function () { upgrade() });
}

window.addEventListener('DOMContentLoaded', (event) => {
    init();
});

function updateRender() {
    let moneySelector = document.querySelector('.money-output');
    moneySelector.innerHTML = money;

    let upgradeCostSelector = document.querySelector('.upgrade-cost');
    upgradeCostSelector.innerHTML = upgradeCost;
}

function click() {
}

function upgrade() {
    
}