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
}

function click() {
}

function upgrade() {

}