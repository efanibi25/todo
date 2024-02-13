



document.addEventListener("DOMContentLoaded", function() {
        function todo(){

            let todoInput = document.querySelector(".todo-input");
        let todoButton = document.querySelector(".save-button");
        let todoList = document.querySelector(".todo-list");
        let todoWarning=document.querySelector(".todo-warning");  
        todoButton.addEventListener("click", function() {
            const task = todoInput.value.trim();
            if(!task){
                return
            }
            todoWarning.style.display = "none";

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
            todoRemove.textContent = "Edit";
            // todoRemove.setAttribute("data-bs-toggle","modal")
            // todoRemove.setAttribute("data-bs-target","#editModal")
            


    
            todoItem.appendChild(todoCheckbox);
            todoItem.appendChild(todoText);
            todoItem.appendChild(todoRemove);
            todoList.appendChild(todoItem);
            todoInput.value = "";

            todoCheckbox.addEventListener("change", function() {
                const todoText = this.nextElementSibling;
                todoText.className = (todoText.className=="todo-text-complete"?"todo-text":"todo-text-complete");
            });

            todoRemove.addEventListener("click", function(event) {

            new bootstrap.Modal( document.querySelector('#editModal'), {
                  }).show(event.target)
            
            });

            
        });
        }
        function modal(){
            document.querySelector('#editModal').addEventListener('shown.bs.modal', function (event) {
                document.querySelector("#remove-input").value=event.relatedTarget.parentElement.querySelector(".todo-text").textContent
                document.querySelector(".remove-button").addEventListener('click', ()=> event.relatedTarget.parentNode.remove(), { once: true });
                document.querySelector(".save-button-remove").addEventListener('click', ()=> event.relatedTarget.parentElement.querySelector(".todo-text").textContent=document.querySelector("#remove-input").value, { once: true });

           
})
        }
        todo()
        modal()
      


});
