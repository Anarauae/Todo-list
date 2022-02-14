const form = document.querySelector(".form");
const input = document.querySelector(".todo-input");
const btn = document.querySelector("button");
const todo = document.querySelector(".todo");
const todolist = document.querySelector(".todo-list");

form.addEventListener("submit", function (el) {
    el.preventDefault();
});

btn.addEventListener("click", () => {
    btn.setAttribute("disabled", true);
    input.oninput = () => {
        if (input.value.length < 1) {
            btn.setAttribute("disabled", true);
        } else {
            btn.removeAttribute("disabled");
        }
    }

    const user = input.value;
    input.value = "";
    const div = document.createElement("div");
    div.append(user);
    div.classList = "todo-item";
 

    const todolist = document.querySelector(".todo-list");
    todolist.prepend(div);
    div.addEventListener('click', el => {
        div.remove(el.target);
    });

    todo.addEventListener("click", () => {
        div.remove();
    })
});


