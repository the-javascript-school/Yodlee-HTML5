function add(){
	function parseArg(n){
		if (!isNaN(n)) return +(n);
		if (typeof n === "function") return parseArg(n());
		if (!!n && !!n.length) return add.apply(this,n);
		return 0;
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add.apply(this,[].splice.call(arguments,1));
}