//mission 1
function filterAndSortEvenNumbers(numbers) {
    return numbers
        .filter(number => number % 2 === 0)
        .sort((a, b) => a - b);
}
console.log(filterAndSortEvenNumbers([12, 5, 6, 9, 10, 3, 4]));


//mission 2
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}
console.log(removeDuplicates([12, 5, 6, 9, 10, 3, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12]));


//mission 3
function capitalizeFirstLetter(string) {
    return string
        .split(' ')
        .map(word => word[word.length - 1] !== '.' ? word[0].toUpperCase() + word.slice(1) : word)
        .join(' ');
}
console.log(capitalizeFirstLetter('hello world and. welcome'));


//mission 4 - local storage
let tasks = [
    {
        id: 1,
        task: 'task 1',
    },
    {
        id: 2,
        task: 'task 2',
    },
    {
        id: 3,
        task: 'task 3',
    },
    {
        id: 4,
        task: 'task 4',
    },
    {
        id: 5,
        task: 'task 5',
    },
    {
        id: 6,
        task: 'task 6',
    },
]

//save to local storage
function saveTasks(obj) {
    localStorage.setItem("tasks", JSON.stringify(obj));
}
saveTasks(tasks);


//get from local storage
function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks") ?? "[]");
}
loadTasks();

//add Task to list
function addTask(task) {
    tasks.push(task);
    saveTasks(tasks);
}
addTask({ id: 7, task: 'task 7' });


//delete task from list
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks(tasks);
}
deleteTask(3)