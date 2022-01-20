var money = 0;
var modifier = 1;
var upgradeCost = 10;
var scale = 1000;

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
    money += modifier;
    money = Math.round(money);
    updateRender();
}

function upgrade() {
    if (money >= upgradeCost) {
        modifier = modifier + 1.5;
        money -= upgradeCost;
        upgradeCost *= 2;
        scale *= 2;

        $('.wrapper').confettiButton({
            minScale: scale,
            maxScale: scale,
            speed: 6
        })

    } else {
        console.log('Not enought money');
    }

    updateRender();
}