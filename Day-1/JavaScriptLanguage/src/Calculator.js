function add(number1,number2){
	function parseArg(n){
		if (typeof n === "number") return n;
		if (typeof n === "string" && !isNaN(n)) return +(n);
		if (typeof n === "function") return parseArg(n());
		return 0;
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++) result += parseArg(arguments[i]);
	return result;
}