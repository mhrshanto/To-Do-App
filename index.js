let newTask = document.querySelector('#add-task');
let taskForm = document.querySelector('form');

let ictList = document.querySelector('#ictList');
let ctList = document.querySelector('#ctList');



// Functions
let createTask = (task) => {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.appendChild();
}