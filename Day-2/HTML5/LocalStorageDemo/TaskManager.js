(function(){
	window.addEventListener("DOMContentLoaded",initialize);
	var taskStorage = new TaskStorage(window.localStorage);
	function initialize(){
		document.getElementById("btnSave").addEventListener("click",onBtnSaveClick);
		loadTasksFromStorage();

	}
	function loadTasksFromStorage(){
		var tasks = taskStorage.getAllTasks();
		for(var i=0;i<tasks.length;i++){
			addTaskToUI(tasks[i]);
		}
	}
	function onBtnSaveClick(){
		var taskName = document.getElementById("txtTask").value;
		var newTask = taskStorage.addTask(taskName);
		addTaskToUI(newTask);
	}
	function addTaskToUI(task){
		var newTaskItem = document.createElement("li");
		newTaskItem.addEventListener("click",onTaskItemClick);
		newTaskItem.innerHTML = task.name;
		newTaskItem.setAttribute("task-id",task.id);
		document.getElementById("ulTaskList").appendChild(newTaskItem);
	}
	function onTaskItemClick(){
		if (this.classList.contains("completed")){
			this.classList.remove("completed");
		} else {
			this.classList.add("completed");
		}
	}

}());