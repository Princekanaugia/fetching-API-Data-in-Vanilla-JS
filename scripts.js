const ul = document.getElementById('list')
let url = "https://jsonplaceholder.typicode.com/todos";
function clearList() {
    // Clear existing list items
    const childNodes = ul.childNodes;
    for (let i = childNodes.length - 1; i > 7; i--) {
        ul.removeChild(childNodes[i]);
    }
}
function color(value) {
    if (value) {
        return "green";                
    }
    else {
        return "red";
    }
    
}

function listRendering(todo) {
    const id = document.createElement('li');
    const userId = document.createElement('li');
    const title = document.createElement('li');
    const stat = document.createElement('li');
            
    let colr = color(todo.completed);

    id.setAttribute("style",`background-color : ${colr}`);
    userId.setAttribute("style",`background-color : ${colr}`);
    title.setAttribute("style",`background-color : ${colr}`);
    stat.setAttribute("style",`background-color : ${colr}`);
            
    ul.append(id)
    id.innerText = `${todo.id}`;
    ul.append(userId)
    userId.innerText = `${todo.userId}`;
    ul.append(title)
    title.innerText = `${todo.title}`;
    ul.append(stat)
    todo.completed ? stat.innerText = `Completed` : stat.innerText = `Pending...`;
}

let fetchAll = (link) => {
    clearList();
    fetch(link)           //api for the get request
    .then(response => response.json())
    .then(todos => {
        // Iterate through todos and append to the list
        todos.forEach(todo => {
            listRendering(todo);
        });
    })
    .catch(error => console.error('Error fetching todos:', error));
}

let showPending = (link) => {
    clearList();
    fetch(link)           //api for the get request
    .then(response => response.json())
    .then(todos => {
        // Iterate through todos and append to the list with pending stat
        todos.forEach(todo => {
            if (!todo.completed) {
                listRendering(todo);
            }
        });
    })
    .catch(error => console.error('Error fetching todos:', error));
}

let showCompleted = (link) => {
    clearList();
    fetch(link)           //api for the get request
    .then(response => response.json())
    .then(todos => {
        // Iterate through todos and append to the list with completed stat
        todos.forEach(todo => {
            if (todo.completed) {
                listRendering(todo);
            }
        });
    })
    .catch(error => console.error('Error fetching todos:', error));
}

document.getElementById("btn-fetch").addEventListener("click",() => fetchAll(url)) 
document.getElementById("btn-pending").addEventListener("click",() => showPending(url))
document.getElementById("btn-completed").addEventListener("click",() => showCompleted(url))