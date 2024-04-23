const dateToShow = document.getElementById("current-date");
const dayToShow = document.getElementById("day");

const STORAGE_KEY = "tasks"; // Key for storing tasks in local storage

const today = new Date(); // Create a Date object initially
let allowedIncrements = 5; // Tracks allowed increment/decrement remaining
let allowedDecrements = 5;

const newTaskInput = document.getElementById("newtask");
let tasks = []; // Empty array to store the anonymous objects

function loadTasksFromStorage() {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
    }
  } catch (error) {
    console.error("Error loading tasks from local storage:", error);
    // Handle potential errors during parsing
  }
}

function saveTasksToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to local storage:", error);
    // Handle potential errors during stringification
  }
}

function addTask() {
  const newTaskText = newTaskInput.value.trim(); // Get trimmed value from input

  if (newTaskText) {
    tasks.push({
      description: newTaskText,
      date: new Date(today) // Create a copy of the current date for the task
    });
    newTaskInput.value = ""; // Clear the input field after adding
    updateTaskList();
    saveTasksToStorage(); // Save tasks to local storage
  } else {
    console.log("Please enter a task description."); // Optional message for empty input
  }
}

// Event listener for Enter key press on the input field
newTaskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask(); // Call the addTask function on Enter press
  }
});

function updateTaskList() {
  const taskList = document.getElementById("tasklist");
  taskList.innerHTML = ""; // Clear the existing task list before updating

  // Loop through tasks and display only tasks for the current date
  for (const task of tasks) {
    const taskDate = new Date(task.date); // Create a Date object from the task's date
    if (taskDate.getDate() === today.getDate() &&
        taskDate.getMonth() === today.getMonth() &&
        taskDate.getFullYear() === today.getFullYear()) {
      // Task matches the current date
      const taskItem = createTaskItem(task); // Create the task item element (explained later)
      taskList.appendChild(taskItem);
    }
  }
}

function createTaskItem(task) {
  // This function creates and returns an HTML element representing a task
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("tasks");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  taskDiv.appendChild(checkbox);

  const taskDescription = document.createElement("div");
  taskDescription.id = "listed-task";
  taskDescription.textContent = task.description;
  taskDiv.appendChild(taskDescription);

  const editButton = document.createElement("button");
  editButton.classList.add("edit"); // Use class for styling consistency
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function() {
    editTask(task, taskDescription);
  });
  taskDiv.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete"); // Use class for styling consistency
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    const confirmation = confirm("Are you sure you want to delete this task?");
    if (confirmation) {
      deleteTask(task);
    }
  });
  taskDiv.appendChild(deleteButton);

  return taskDiv;
}
















// -----------------------------------------------------------------------------------------------------------------------------------


                function editTask(task, taskDescriptionElement) {
                    // Implement your logic for editing the task description
                    // Here's a basic example using a prompt:
                    const newDescription = prompt("Enter new description for the task:", task.description);
                    if (newDescription) {
                        task.description = newDescription;
                        taskDescriptionElement.textContent = newDescription; // Update displayed description
                    }
                }

                function deleteTask(task) {
                    // Find the index of the task in the tasks array
                    const taskIndex = tasks.findIndex(t => t === task);

                    if (taskIndex !== -1) {
                        // Remove the task from the array
                        tasks.splice(taskIndex, 1);

                        // Update the displayed task list
                        updateTaskList();
                    } else {
                        console.log("Task not found in the list!"); // Optional message if task not found
                    }
                }

                const incrementButton = document.getElementById("next");

                function incrementDate() {
                    if (allowedIncrements > 0) {
                        today.setDate(today.getDate() + 1); // Add 1 day to the
                        updateDisplay();
                        updateTaskList(); // Update the list based on the new date
                        allowedIncrements--;
                        allowedDecrements++;
                        console.log(today);
                    } else {
                        console.log("Maximum increments reached!"); // Optional message
                        // Optionally disable the button or display a message
                    }
                }

                incrementButton.addEventListener("click", incrementDate);

                const decrementButton = document.getElementById("prev");

                function decrementDate() {
                    if (allowedDecrements > 0) {
                        today.setDate(today.getDate() - 1); // Subtract 1 day
                        updateDisplay();
                        updateTaskList(); // Update the list based on the new date
                        allowedDecrements--;
                        allowedIncrements++;
                        console.log(today);
                    } else {
                        console.log("Maximum decrements reached!"); // Optional message
                        // Optionally disable the button or display a message
                    }
                }

                decrementButton.addEventListener("click", decrementDate);

                function updateDisplay() {
                    const day = new Intl.DateTimeFormat("en-US", { weekday: 'long' }).format(today);
                    const currentDate = new Intl.DateTimeFormat("en-US", { month: 'short', day: 'numeric', year: 'numeric' }).format(today);
                    dateToShow.innerHTML = currentDate;
                    dayToShow.innerHTML = day;
                }

                // Call updateDisplay and updateTaskList initially to show the current date and tasks
                updateDisplay();
                updateTaskList();