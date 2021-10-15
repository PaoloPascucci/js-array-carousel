const items = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg'
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const Selected = document.querySelector("#Sx")
const Thumb = document.querySelector("#Dx");
const arrowUp = document.querySelector(".arrUp");
const arrowDown = document.querySelector(".arrDw");



for (let i = 0; i < items.length; i++) {
    const imagine = `<img src="${items[i]}">`;
    Thumb.innerHTML += imagine;
}
let counter = 0;

const jumbo = `<img src="${items[counter]}">`
Selected.innerHTML = jumbo;

arrowDown.addEventListener('click', function () {
    counter++;
    if (counter > items.length - 1) {
        counter = 0
    }
    const jumbo = `<img src="${items[counter]}">`
    Selected.innerHTML = jumbo;
})
arrowUp.addEventListener('click', function () {
    if (counter == 0) {
        counter = items.length
    }
    --counter;
    const jumbo = `<img src="${items[counter]}">`
    Selected.innerHTML = jumbo;
})
