const todoContainer = document.querySelector(".todo-container");
const submitBtn = document.querySelector(".sub-btn");
const input = document.querySelector(".f-input");
const todosContainer = document.querySelector(".todos");
const todoForm = document.querySelector(".todo-form");
const todoItem = document.querySelector(".todo-item");
const searchInput = document.querySelector(".search-input");

const generateTodos = (todo) => {
  const text = `<li class="todo-item">
                    <span class="todo-text"> 
                    ${todo} 
                    </span>
                    <i class="fa-solid fa-trash    delete"></i>
                    </li>`;
  todosContainer.innerHTML += text;
};
//add todo
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //create todo
  // trim doesnt save spaces at the beginning or the end
  const todo = input.value.trim();

  //generate a todo only if there are values in the input
  if (todo) {
    generateTodos(todo);
    // clear form
    todoForm.reset();
  }
});

//delete

todoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

todoContainer.addEventListener("dblclick", (e) => {
  console.log("inside");
  if (
    e.target.classList.contains("todo-item") ||
    e.target.classList.contains("todo-text")
  ) {
    console.log("inside");
    e.target.classList.toggle("completed");
  }
});

//todo filter
const filterTodos = (query) => {
  const todoItems = Array.from(todosContainer.children);
  console.log(todoItem);
  todoItems.forEach((todo) => {
    const text = todo.textContent;
    if (text.toLowerCase().includes(query)) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
};
//search items
searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value.trim().toLowerCase();
  filterTodos(query);
});
