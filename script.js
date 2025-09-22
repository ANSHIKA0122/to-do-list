function addtask() {
    const newtask = document.createElement('li')
    const tasklist = document.getElementById('tasklist')
    tasklist.appendChild(newtask)
    newtask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ""
    deleteTask(newtask)
}

function deleteTask(newTask)
{
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = " Delete"
      newTask.appendChild(deleteBtn)
      deleteBtn.onclick = function () {
          newTask.remove()
}

}