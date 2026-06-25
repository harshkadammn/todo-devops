// DOM Elements
const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const search = document.getElementById("search");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update statistics
function updateStats() {
    totalTasks.textContent = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    completedTasks.textContent = completed;
    pendingTasks.textContent = tasks.length - completed;
}

// Display tasks
function renderTasks() {

    taskList.innerHTML = "";

    let filtered = tasks;

    // Filter
    if(currentFilter === "completed"){
        filtered = tasks.filter(task => task.completed);
    }

    if(currentFilter === "pending"){
        filtered = tasks.filter(task => !task.completed);
    }

    // Search
    const keyword = search.value.toLowerCase();

    filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(keyword)
    );

    filtered.forEach((task,index)=>{

        const li = document.createElement("li");

        li.className = `task ${task.completed ? "completed" : ""}`;

        li.innerHTML = `

            <div class="task-info">

                <div class="task-title">
                    ${task.title}
                </div>

                <div class="task-meta">

                    Priority:
                    <span class="${task.priority.toLowerCase()}">
                    ${task.priority}
                    </span>

                    |

                    Due:
                    ${task.dueDate || "No Date"}

                </div>

            </div>

            <div class="actions">

                <button class="complete">
                ${task.completed ? "Undo" : "Done"}
                </button>

                <button class="edit">
                Edit
                </button>

                <button class="delete">
                Delete
                </button>

            </div>

        `;

        // Complete

        li.querySelector(".complete").onclick = ()=>{

            task.completed = !task.completed;

            saveTasks();

            renderTasks();

        };

        // Delete

        li.querySelector(".delete").onclick = ()=>{

            tasks.splice(index,1);

            saveTasks();

            renderTasks();

        };

        // Edit

        li.querySelector(".edit").onclick = ()=>{

            const newTask = prompt("Edit Task",task.title);

            if(newTask){

                task.title = newTask;

                saveTasks();

                renderTasks();

            }

        };

        taskList.appendChild(li);

    });

    updateStats();

}

// Add Task

addTaskBtn.addEventListener("click",()=>{

    if(taskInput.value.trim()===""){

        alert("Please enter a task");

        return;

    }

    tasks.push({

        title:taskInput.value,

        priority:priority.value,

        dueDate:dueDate.value,

        completed:false

    });

    saveTasks();

    renderTasks();

    taskInput.value="";
    dueDate.value="";

});

// Search

search.addEventListener("keyup",renderTasks);

// Filter

document.querySelectorAll(".filters button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        currentFilter = btn.dataset.filter;

        renderTasks();

    });

});

// Initial Load

renderTasks();