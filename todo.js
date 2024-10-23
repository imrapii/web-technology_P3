let taskInput = document.getElementById('new-task');
let addTaskBtn = document.getElementById('add-task-btn');
let todoList = document.getElementById('todo-list');


addTaskBtn.addEventListener('click', function() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = taskText + ' <button class="delete-task">&times;</button>';
        todoList.appendChild(li);
        taskInput.value = '';  

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });


        li.addEventListener('dblclick', function() {
            let newTaskText = prompt("Edit task:", taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.firstChild.textContent = newTaskText.trim();
            }
        });


        li.querySelector('.delete-task').addEventListener('click', function() {
            todoList.removeChild(li);
        });
    }
});
