//initial array to store tasks//
let tasks = []

//add an event listener to add tasks to the add task button//
document.getElementById('addTaskButton').addEventListener('click', function() {
//saves the text value from the input box as a variable so we can use it type shit//
let taskInput = document.getElementById('taskInput').value
//checks if its a value/truthy//
if (taskInput) {
    //puts the taskInpu into the task array//
tasks.push(taskInput)
//clear out the value of the textbobx so ntohings there//
document.getElementById('taskInput').value = ''
//runs the function we didn't make yet
displayTasks()
//if there it isn't a value it sends an alert//
} else {
    alert('You need to actually put a task you troglodyte')
}
})

