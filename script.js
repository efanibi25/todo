



document.addEventListener("DOMContentLoaded", function() {
  let todoInput = document.querySelector(".todo-input");
        let todoButton = document.querySelector(".todo-button");
        let todoList = document.querySelector(".todo-list");

        todoButton.addEventListener("click", function() {
            const task = todoInput.value.trim();
            if(!task){
                return
            }

            let todoItem = document.createElement("li");
            todoItem.className = "todo-item";
            //checkbox                
            const todoCheckbox = document.createElement("input");
            todoCheckbox.type = "checkbox";
            todoCheckbox.className = "todo-checkbox";
            //span for text
            const todoText = document.createElement("span");
            todoText.className = "todo-text";
            todoText.textContent = task;
            //remove button
            const todoRemove = document.createElement("button");
            todoRemove.className = "todo-remove";
            todoRemove.textContent = "x";
    
            todoItem.appendChild(todoCheckbox);
            todoItem.appendChild(todoText);
            todoItem.appendChild(todoRemove);
            todoList.appendChild(todoItem);
            todoInput.value = "";

            todoCheckbox.addEventListener("change", function() {
                const todoText = this.nextElementSibling;
                todoText.className = (todoText.className=="todo-text-complete"?"todo-text":"todo-text-complete");
            });

            todoRemove.addEventListener("click", function() {
                todoList.removeChild(todoItem);
            });

            
        });
});
