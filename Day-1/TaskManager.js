function onBtnAddTaskClick(){
	var txtTask = document.getElementById("txtTask");
	var taskName = txtTask.value;
	var newTaskItem = "<li>" + taskName + "</li>";
	var taskList = document.getElementById("ulTaskList");
	taskList.innerHTML += newTaskItem;
}
function initialize(){	
	document.getElementById("btnAddTask").onclick = onBtnAddTaskClick;
}
window.onload = initialize;