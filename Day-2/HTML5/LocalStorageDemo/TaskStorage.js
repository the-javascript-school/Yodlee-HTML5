function TaskStorage(storage){
		this.storage = storage;
	}
TaskStorage.prototype.addTask = function(taskName){
	var newId = new Date().getTime().toString();
	this.storage.setItem(newId,taskName);
	return {
		id : newId,
		name : taskName
	};

}
TaskStorage.prototype.getAllTasks = function(){
	var tasks = [];
	for(var i=0;i<this.storage.length;i++){
		var id = this.storage.key(i);
		var taskName = this.storage.getItem(id);
		tasks.push({id : id, name : taskName});
	}
	return tasks;
}