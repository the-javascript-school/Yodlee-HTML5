(function(){
	applicationCache.addEventListener("updateready",onUpdateReady);
	function onUpdateReady(){
		console.log("onUpdateReady event handler");
		document.getElementById("divOfflineMsg").style.display = "block";
		document.getElementById("btnRefresh").addEventListener("click",function(){
			window.location.reload();
		});
		document.getElementById("btnNoRefresh").addEventListener("click",function(){
			document.getElementById("divOfflineMsg").style.display = "none";
		});
	}
	window.addEventListener("DOMContentLoaded",initialize);
	var taskStorage = new TaskStorage(window.localStorage);
	function initialize(){
		document.getElementById("btnSave").addEventListener("click",onBtnSaveClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click",onBtnRemoveCompletedClick)
		loadTasksFromStorage();

	}
	function onBtnRemoveCompletedClick(){
		var ulTaskList = document.getElementById("ulTaskList");
		for(var i=ulTaskList.children.length-1;i>=0;i--){
			var item = ulTaskList.children[i];
			if (item.classList.contains("completed")){
				taskStorage.removeTask(item.getAttribute("task-id"));
				item.remove();
			}

		}
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