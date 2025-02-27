//initial array to store tasks
let tasks = []

//add an event listener to add tasks to the add task button
document.getElementById('addTaskButton').addEventListener('click', function () {
    //saves the text value from the input box as a variable so we can use it type shit
    let taskInput = document.getElementById('taskInput').value
    //checks if its a value/truthy
    if (taskInput) {
        //puts the taskInpu into the task array
        tasks.push(taskInput)
        //clear out the value of the textbobx so ntohings there
        document.getElementById('taskInput').value = ''
        //runs the function we didn't make yet
        displayTasks()
        //if there it isn't a value it sends an alert
    } else {
        alert('You need to actually put a task you troglodyte')
    }
})

//function to put the tasks from array into the list
function displayTasks() {
    //selects the list and defines it as a variable so we don't gotta type allat every time
    let taskList = document.getElementById('taskList')
    //clear the existing task list before updating it
    taskList.innerHTML = ''
    //loop through eachtask in the array and create a list item
    tasks.forEach((task, index) => {
        //create an <li> element for each task
        let li = document.createElement('li')
        //add bootstrap classes for styling
        li.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'rounded', 'my-3'
        )
        //set the inner Html of the li element with task text and a remove button
        li.innerHTML = `${task} <button class='btn btn-success btn-md' onclick='removeTask(${index})'> √ </button>`
        //appen new task to task list
        taskList.appendChild(li)
    })
}

//function to remove the taskw he nbutton is clicked
function removeTask (index) {
    //remove the task at the given index fromthe array
    tasks.splice(index, 1)
    //run the function so it clear it 
    displayTasks()
}

//event listener for clear all tasks button
document.getElementById('clearTaskButton').addEventListener('click', function () {
    //removes all tasks
tasks = []
//re displays it
displayTasks()
})