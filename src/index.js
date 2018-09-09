console.log("DOM content loaded");

let listForm = document.getElementById("create-list-form");

listForm.addEventListener("submit", listFormSubmit)

function listFormSubmit(event) {
	event.preventDefault();
	//add new form
	let newListTitle = document.getElementById("new-list-title").value;
	
	//if a Task List Form is already on the page, don't create additional ones
	if (!!(document.getElementById("create-task-form"))) {
	} else createTaskListForm(newListTitle); 
	
	//add title to form select drop-down
	addOptionToSelectList(newListTitle);
	//add new div
	addNewList(newListTitle);
}

function submitTaskForm(event) {
	event.preventDefault()
	//debugger to find chilren values
	//grab data from create-task-form
	let name = event.target.children[1].value;
	let description = event.target.children[3].value;
	let priority = event.target.children[5].value;
	//create/add info to a li
	createNewLi(name, description, priority)
}

function createNewLi(name, description, priority) {
	let li = document.createElement("li");
	li.innerHTML = `
		Task: ${description}
		<button data-list-title="${name}" data-task-name="${description}" class="delete-task">
		X
		</button>
		<br>
		Priority: ${priority}
	`
	//append to correct list, matched by listName
	document.getElementById(`${name}`).append(li);
}

function createTaskListForm(title) {
	// event.preventDefault();
	let form = document.createElement("form");
	form.id = "create-task-form"
	form.innerHTML = `
		<label for="parent-list">Select List:</label>
		<select id="parent-list"></select>

		<label for="new-task-description">Task description:</label>
		<input required type="text" id="new-task-description" placeholder="description">

		<label for="new-task-priority">Priority level:</label>
		<input type="text" id="new-task-priority" placeholder="priority">
		<input type="submit" value="Create New Task">
	`
	//add form to page
	let createTaskForm = document.getElementById("app-content");
	createTaskForm.append(form);
	createTaskForm.addEventListener("submit", submitTaskForm);
}

function addNewList(title) {
	let newList = document.createElement("div");
	newList.id = title;
	newList.innerHTML = `
		 <h2>${title}
      <button data-title="${title}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
    </ul>
	`
	//add new list to page
	document.getElementById("lists").append(newList);
}

function addOptionToSelectList(title) {
	let selectList = document.getElementById("parent-list");
	selectList.innerHTML += `
		<option value="${title}" selected>
			${title}
		</option>
	`
}

const lists = document.getElementById("lists");

lists.addEventListener("click", function(e) {
	const taskDelete = event.target.className === "delete-task";
	const listDelete = event.target.className === "delete-list";
	if (taskDelete) {
		event.target.parentElement.remove();
	} else if (listDelete) {
		event.target.parentElement.parentElement.remove();
	}
})


// const deleteList = document.getElementById("delete-list");
// const deleteTask = document.getElementById("delete-task");

// if (deleteList) {
// 	deleteList.addEventListener("click", listDelete);
// 	deleteTask.addEventListener("click", taskDelete);
// }

// function listDelete() {
// 	console.log("clicked delete list");
// }

// // if (deleteTask) {
// // 	deleteTask.addEventListener("click", taskDelete);
// // 	console.log("clicked delete list");
// // }

// function taskDelete() {
// 	console.log("clicked delete task");
// }
