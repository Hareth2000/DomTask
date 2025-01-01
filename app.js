//Q1
const fruitImages = {
    apple: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    banana: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    cherry: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg",
    grape: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg",
    orange: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
};

const items = ["apple", "banana", "cherry", "grape", "orange"];
const parentElement = document.getElementById('container');
const unorderList = document.createElement('ul');

items.forEach(item => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const text = document.createElement(item);

    img.src = fruitImages[item.toLowerCase()];
    img.alt = item.toUpperCase();
    img.style.width = "50px";
    img.style.height = "50px";

    li.appendChild(img);
    li.appendChild(text);
    unorderList.appendChild(li);
});
parentElement.appendChild(unorderList);

///////////////////////////////////////////////////////////////////////////////


//Q2
const arr = [10, 20, 30, 40, 50];
const num = 30;
let index = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        index = i;
        break;
    } else {
        index = -1;
    }
}
const arrContanier = document.getElementsByClassName('arrContanier')[0];
const result = document.createElement('p');
result.textContent = index;

arrContanier.appendChild(result);

