var inputText = document.getElementById('new-task');
var addButton = document.querySelector('button');
var incompletedTaskList = document.getElementById('incomplete-task');
var completedTaskList = document.getElementById('completed-task');

var createListItems = function(data) {

    var li = document.createElement('li');
    li.style.listStyle = 'none';

    var input = document.createElement('input');
    input.className = 'edit-task';
    input.value = data;
    input.type = 'text';
    input.disabled = true;
    
    var checkBox = document.createElement('input');
    checkBox.className = 'check';
    checkBox.type = 'checkbox';

    var editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'edit';

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    li.appendChild(checkBox);
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    return li;
}

var addTask = function() {

    if(inputText.value.trim() !== '' && inputText.value.trim() !== null) {
        var listItem = createListItems(inputText.value);
        incompletedTaskList.appendChild(listItem);
        inputText.value = '';  
        editORdelete(listItem);
    }
}

var editORdelete = function(ls) {

    ls.querySelector('button.delete').onclick = deleteTask;
    ls.querySelector('button.edit').onclick = editTask;
    ls.querySelector('input.check').onclick = tickValidation;
}

var deleteTask = function(e) {

    let currentList = e.target.parentNode;
    currentList.parentNode.removeChild(currentList);
}

var editTask = function() {

    var disabledOption = this.parentNode.querySelector('input.edit-task');
    var editButtonText = this.parentNode.querySelector('button.edit');
    if(editButtonText.innerText == 'Edit'){
        editButtonText.innerText = 'Done';
        disabledOption.style.color = 'darkgoldenrod';
        disabledOption.disabled = false;
    }
    else{
        editButtonText.innerText = 'Edit';
        disabledOption.style.color = 'dimgrey';
        disabledOption.disabled = true;
    }
}

var tickValidation = function() {
    console.log(this.parentNode.parentNode);
    let validator = this.parentNode;
    if(validator.parentNode.id === 'incomplete-task'){
        completedTaskList.appendChild(validator);
        incompletedTaskList.removeChild(validator);
        console.log('incomplete');
    }
    else{
        incompletedTaskList.appendChild(validator);
        completedTaskList.removeChild(validator);
        console.log('complete');
    }
}

addButton.onclick = addTask;
