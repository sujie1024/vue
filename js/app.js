


var app = new Vue({
	el: '#todoapp',
	data:{
		//vue要进行双向数据绑定，一定要提前把data进行声明
		todos: Dispose.getTodoData(),
		navStatus: 'all',
		edited: null,
		newText: '' //等待要添加的字符串
	},
	watch:{
		'todos': {
			deep: true, //进行深度监听
			handler: function(newvalue, oldvalue){
				//深度监听成功之后，所要执行的回调函数
				Dispose.saveData(newvalue) 	
			}
		}
	},
	computed: {
		leftnum: function(){
			var sum = 0;
			for(var i =0; i < this.todos.length; i++) {
				if(!this.todos[i].completed) {
					sum++
				}
			}
			return sum;	 	
		},
		allDone: {
			get: function(){
				return !this.leftnum	 	
			},
			set: function(newvalue){
				console.log('xxxx');
				//动态的设置
				for(var i =0; i < this.todos.length; i++) {
					/*this.todos.splice(i, 1, {
						id: this.todos[i].id,
						completed: newvalue,
						text: this.todos[i].text
					});*/
					this.todos[i].completed = newvalue;
				}
				
			}
		}
	},
	directives: {
		'todo-focus': function(el, binding){
			//vue本身是不鼓励直接对dom进行操作，
			//但有些时候，你可能不得不对dom进行操作
			if(!binding.value) {
				return;
			}
			console.log('我进行自动聚焦');
			el.focus(); //对应的dom元素进行聚焦
		}
	},
	methods: {
		addTodo: function(){
			this.todos.push({
				id: Date.now(),
				completed: false,
				text: this.newText
			});
			this.newText = "";
		},
		editTodo: function(item){
			this.beforeText = item.text; //存储我们之前的值
			console.log('我正在编辑');	
			this.edited = item.id; 	
		},
		revert: function(item){
			item.text = this.beforeText;
			this.edited = null;	 	
		},
		saveTodo: function(){
			this.edited = null;		 	
		},
		removeTodos: function(index){
			//todo 需要从 this.todos中去掉
			this.todos.splice(index, 1);
		},
		clearAll: function(){
			//清空
			this.todos = [];	 	
		}
	}
})