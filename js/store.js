(function(exports){
	//自执行函数
	
	//负责进行缓存处理的作用

	function Store(nameSpace, data){
		if(data) {
             localStorage.setItem(nameSpace, JSON.stringify(data))
             return;
		}
		//取数据的操作
		return (nameSpace && JSON.parse(localStorage.getItem(nameSpace))) || []
	}
	var fetch = {};

	fetch.getTodoData = function(){
		return Store('todos') 	
	}

	fetch.saveData = function(data){
		Store('todos', data) 	
	}

	exports.Dispose = fetch;


})(window)