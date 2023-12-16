const ul = document.getElementById('list')
let url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)           //api for the get request
    .then(response => response.json())
    .then(todos => {
        // Iterate through todos and append to the list
        todos.forEach(todo => {
            const id = document.createElement('li');
            const userId = document.createElement('li');
            const title = document.createElement('li');
            const stat = document.createElement('li');
            
            
            ul.append(id)
            id.innerText = `${todo.id}`;
            userId.innerText = `${todo.userId}`;
            ul.append(userId)
            title.innerText = `${todo.title}`;
            ul.append(title)
            stat.innerText = `${todo.completed}`;
            ul.append(stat)
              
        });
        
        console.log(todos)
    })
    .catch(error => console.error('Error fetching todos:', error));
