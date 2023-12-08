document.addEventListener('DOMContentLoaded', function () {
    const todoListEL = document.getElementById('todo-list');


let url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)           //api for the get request
    .then(response => response.json())
    .then(todos => {console.log(todos)
                // Iterate through todos and append to the list
                todos.forEach(todo => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div class="grid-container">
                        <div class="box" id="id">${todo.id}</div>    
                        <div class="box" id="userid">${todo.userId}</div> 
                        <div class="box" id="description">${todo.title}</div> 
                        <div class="box" id="status">${todo.completed}</div> 
                        </div>
                    `;
                    todoListEL.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching todos:', error));
    });



    