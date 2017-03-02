Vue.component('price-bar', {
	template: '<p>{{data}}元</p>',
	props: ['data']
})

//声明一个加减法的组件
Vue.component('oper-item', {
	template: 
		'<span>'+
			'<span @click="minus">-</span>'+
			'<span class="num">{{number}}'+
			'</span>'+ 
			'<span @click="plus">+</span>'+ 
		'</span>',
	props: {
		num: {
			type: Number,
			required: true
		},
		count: {
			type: Number,
			required: true
		}
	},
	data: function(){
		//组件中data 它是绝对隔离的
		return {
			//这样的方式可以保证在父组件中状态发生改变，
			//记住我们子组件中数据
			number: this.num,
			index: this.count
		}		 	
	},
	methods: {
		plus: function(){
			this.number++;	
			bus.$emit('numChanged', this.index, this.number)
		},
		minus: function(){
			this.number--;
		}
	}
})


//声明一个单个购物车组件

Vue.component('item-bar',{
	template:
	 '<li>'+
		'<div class="text">'+
			  '<span class="name">{{data.name}}</span>元'+
			  '<oper-item :count="index" :num="data.num"></oper-item>'+
			  '<span class="price">{{data.price}}</span>元'+
		'</div>'+
	'</li>',
	props: {
		data: {
			type:Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	}
})

var carApp = new Vue({
	el:"#cart",
	data: {
	  	list: [{
			name: '牛奶',
			price: 2,
			num: 5
		}, {
			name: '鲜花',
			price: 3,
			num: 2
		}]
	},
	computed: {
		total: function(){
			var sum = 0;
			for(var i =0; i < this.list.length;i++){
				sum+= this.list[i].num * this.list[i].price
			}
			return sum;	 	
		}
	}
})


var bus = new Vue();

// 在bus中创建一个监听事件
bus.$on('numChanged', function (index, num) {
	console.log('我进行触发', index, num);
    carApp.list[index].num = num;
})