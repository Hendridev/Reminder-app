const auto = document.querySelector('.auto-generated');
const select = document.querySelectorAll('.box');
const category = document.querySelectorAll('.ctg');
var colorPalet = ['rgb(228, 46, 116)', 'rgb(228, 46, 219)', 'rgb(240, 72, 50)', 'rgb(65, 168, 236)'];
for (let i = 0; i < colorPalet.length; i++) {
    select[i].style.backgroundColor = colorPalet[i];
    category[i].style.backgroundColor = colorPalet[i];
    category[i].addEventListener('click', function() {
        category.forEach(function(ctg) {
            ctg.classList.remove('selected');
        });
        category[i].classList.toggle('selected');
        auto.style.backgroundColor = colorPalet[i];
    })
}
const taskbar = document.querySelector('.task-bar');
const time = document.querySelector('.time');
const sub = document.querySelector('.submit');
const wrap = document.querySelector('.four-dash');
time.value = "00:00";
let data = [];
let tims = [];

sub.addEventListener('click', () => {
    data.push(taskbar.value);
    tims.push(time.value);
    let eldiv = document.createElement('div');
    eldiv.className = 'task-display';
    let subdiv = document.createElement('div');
    subdiv.className = 'time-display';
    let subdiv2 = document.createElement('div');
    subdiv2.className = 'text-display';
    let subdiv3 = document.createElement('div');
    subdiv3.className = 'system';
    let subdiv4 = document.createElement('div');
    subdiv4.className = 'spanout';
    let sub3child = document.createElement('button');
    sub3child.className = 'btn delete';
    let sub3child2 = document.createElement('button');
    sub3child2.className = 'btn complete';
    subdiv.textContent = tims[tims.length - 1];
    subdiv2.textContent = data[data.length - 1];
    sub3child.textContent = 'Hapus';
    sub3child2.textContent = 'Selesai';
    subdiv4.style.backgroundColor = auto.style.backgroundColor;
    subdiv3.append(sub3child, sub3child2);
    eldiv.append(subdiv, subdiv2, subdiv3, subdiv4);
    wrap.append(eldiv);

    sub3child.onclick = () => {
        eldiv.style.display = "none";
    }
    sub3child2.onclick = () => {
        subdiv.textContent = "Selesai";
        subdiv.style.backgroundColor = " rgb(4, 202, 90)";
        subdiv.style.color = "white";
        subdiv2.style.textDecoration = "line-through";
    }

    setTimeout(() => {
        taskbar.value = '';
        time.value = '00:00';
    }, 100);

})