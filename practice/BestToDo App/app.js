window.addEventListener('DOMContentLoaded', function() {
    let taskNumber = 0;
    const taskName = this.document.querySelector('#new-task-wrapper');
    const addBtn = this.document.querySelector('#add');
    const taskList = this.document.querySelector('.task-list-wrapper');

    taskName.addEventListener('keypress', function(event) {
        if (event.key == 'Enter') {
            addBtn.click();
        }
    });

    addBtn.addEventListener('click', function() {
        if (taskName.value == "") {
            return;
        }
        const id = ++taskNumber;
        const task = document.createElement('div');
        task.classList.add('task-wrapper');
        task.setAttribute('task-id', id);

        const newTaskCheckbox = document.createElement('input');
        newTaskCheckbox.setAttribute('type', 'checkbox');
        newTaskCheckbox.setAttribute('onClick', `completeTask(${id})`);

        const txt = document.createElement('p');
        txt.innerText = taskName.value;
        taskName.value = "";

        const delBtn = document.createElement('img');
        delBtn.setAttribute('src', '/assets/icons/rubbish-bin-icon.svg');
        delBtn.setAttribute('alt', 'delete');
        delBtn.setAttribute('id', `delete-${id}`);
        delBtn.setAttribute('onClick', `removeTask(${id})`);


        task.append(newTaskCheckbox);
        task.append(txt);
        task.append(delBtn);

        taskList.append(task);
    });
});

function completeTask(id) {
    const div = document.querySelector(`.task-wrapper[task-id="${id}"]`);
    div.classList.toggle('cross');
}

function removeTask(id) {
    const div = document.querySelector(`.task-wrapper[task-id="${id}"]`);
    div.classList.add('fade-out');
    div.addEventListener('transitionend', function () {
        div.remove();
    });
}