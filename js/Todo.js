const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    })
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});
//submitにすると、Enterを押すと追加される

function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText.length > 0) {
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list__group-item");

        if (todo && todo.completed) {
            li.classList.add("text-completion")
        }

        // 右クリック削除
        li.addEventListener("contextmenu", function
            (event) {
            event.preventDefault();
            li.remove();
            saveData();
        });

        li.addEventListener('click', function () {
            li.classList.toggle("text-completion");
            saveData();
        });

        ul.appendChild(li)
        input.value = "";
        saveData();
    }
}

//ローカルストレージに保管
function saveData() {
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains
                ("text-completion")
        };
        todos.push(todo);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

