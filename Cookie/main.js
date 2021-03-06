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
    money = Math.round(money + modifier);
    updateRender();
}

function upgrade() {
    if(money >= upgradeCost){
        modifier *= 1.2;
        money= money - upgradeCost
        upgradeCost = upgradeCost * modifier;
        updateRender();
    }else {
        alert('Par maz naudas');
    }
}