var emp = getEmployee(101,"magesh");
emp.id() -> returns 101
emp.id(1001) -> internally sets the id to 1001
emp.id() -> returns 1001
emp.id(-1001) -> nothing should happen
emp.id() -> returns 1001

emp.name() -> returns "magesh"
emp.name('') -> nothing should happen
emp.name() -> returns "magesh" (old value)
emp.name('suresh')
emp.name() -> returns "suresh"

function getEmployee(id,name){
	var _id = id,
		_name = name;
	function idAccessor(){
		if (arguments.length === 0) return _id;
		_id = arguments[0] > 0 ? arguments[0] : _id;
	}
	function nameAccessor(){
		if (arguments.length === 0) return _name;
		_name = arguments[0].length > 0 ? arguments[0] : _name;
	}
	return {
		id : idAccessor,
		name :nameAccessor
	}
}

Constructor Functions
1. invoked with "new" keyword
2. "this" in a constructor function will refer to a NEW object
3. "this" is returned by default

function Employee(id,name){
	if (this.constructor.name !== arguments.callee.name){
		return new Employee(id,name);
	}
	var _id = id,
		_name = name;
	function idAccessor(){
		if (arguments.length === 0) return _id;
		_id = arguments[0] > 0 ? arguments[0] : _id;
	}
	function nameAccessor(){
		if (arguments.length === 0) return _name;
		_name = arguments[0].length > 0 ? arguments[0] : _name;
	}
	
	this["id"] = idAccessor;
	this["name"] = nameAccessor;
}


Abstract Equality Comparison Algorithm











