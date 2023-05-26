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
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}


let addTask = (event) => {
    event.preventDefault();
    let listItem = createTask(newTask.value);

    ictList.appendChild(listItem);
    newTask.value = "";
    bindIncompleteItems(listItem, completeTask);
}

let completeTask = () => {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';

    listItem.appendChild(deleteBtn);


    let checkBox = listItem.querySelector('input[type="checkbox"]');

    checkBox.remove();


    ctList.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = () => {
    let listItem = this.parentNode();
    let ul = listItem.parentNode();
    ul.removeChild(listItem);
}

let bindIncompleteItems = (taskItem, checkBoxClick) => {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}

let bindCompleteItems = (taskItem, deleteButtonClick) => {
    let deleteButton = taskItem.querySelector('.delete')
    deleteButton.onclick = deleteButtonClick;
}


taskForm.addEventListener('submit', addTask);