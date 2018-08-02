window.onload = function(){

// START VUE ----
var vue1 = new Vue({
	el: '#app',
	data: {
		title: 'Hello Jaerbi World Vue 1',
		counter: 0,
		counter2: 0,
		oneText: {'color': 'red', 'font-size': '18px'},
		twoText: {'color': 'green', 'font-size': '22px'},
		treeText: {'color': 'blue', 'font-size': '26px'},
		visibleTriger: '',
		name: 'Jaerbi Vue!',
		number: 100,
		isOk: false,
		urlGoogl: 'http://google.com',
		nameCount: 'Обрахунок',
		x: 0,
		y: 0,
		inputValue: 'ОСЬ ЯКОСЬ ТАК',
		isActShow: false,
		isActive: false,
		color: 'yellow',
		dinamicColor: 'aqua',
		height: 100,
		circlBlock: {
			'width': 100 + '%',
			'display': 'flex',
			'justify-content': 'center',
			'align-items': 'center'
		},
		myGameColor: '#eee',
	},
	computed: {
		myGameStyle: function() {
			return {
				'background-color': this.myGameColor
			}
		},
		randomN: function(){
			return Math.ceil(Math.random()*Math.pow(10,2))
		},
		//____________________
		circleStyle: function(){
			return {
				'background-color': this.dinamicColor,
				'height': this.height + 'px'
			}
		},
		//--------------------
		circlColor: function(){
			return {
				'red': this.isActive,
				'green': !this.isActive
			}
		},
		// визивається лише коли міняється counter
		computedCount: function(){
			console.log('computed resCount is colled');
			return this.counter > 2 ? 'This Count More then 2' : ' leess then 2 ';
		}
	},
	methods: {
		// алерт в тытле 2
		alertFromOne: function(){
			alert('I am from Vue 1');
		},
		// постійно визивається
		resCount: function() {
			console.log('resCount is colled');
			return this.counter > 2 ? 'This Count More then 2' : ' leess then 2 ';
		},
		add: function(){
			this.counter++;
		},
		sub: function (){
			this.counter--;
		},
		test: function (event){
			console.log(event);
			event.target.style.background = 'red';
		},
		mouseMove: function(event){
			this.x = event.clientX;
			this.y = event.clientY;
		},
		//___________________
		keyUpAlert: function(event){
			alert(event.target.value);
		},
		//____________________
		hoverColor: function(event){
			event.target.style.color = 'green';
		},
		//-------------------
		addNumber: function(numb, string, event) {
			this.number += numb;
			this.nameCount = string;
			if(numb === 10){
				event.target.style.color = 'red';
			} else if(numb === 20){
				event.target.style.color = 'blue';
			}
		},
		//________________
		changeName: function(event){
			this.name = event.target.value
		},
		//_________________
		seyHello: function(){
			return 'I am function'
		}
		//_______________
	},
	watch: {
		// Слідкує за змінами з data:
		counter: function(a) {
			console.log('Counter object : ', a)
		}
	}
});

console.log(vue1);

var vue2 = new Vue({
	el: '#app2',
	data: {
		title: 'Hello Vue 2'
	},
	methods: {

		changeTitleOne: function(){
			vue1.title = 'Change from Vue 2';
			this.$refs.vueTwo.style.color = "green";
			console.log(this.$refs.vueTwo);
			setTimeout(function(){
				vue1.alertFromOne();
			},1000)
		}
	}
});

var vue3 = new Vue({
	el:'#app3',
	data: {
		title: 'Hello i am VUE 3',
		someText: 'This is TEMPLATE'
	},
	template: '<div style="background-color: #123123; color: #f2f2f2; padding: 5px;"><h4>{{ title }}</h4><p>{{ someText }}</p></div>'
});

var vue4 = new Vue({
	el: '#app4',
	data: {
		title: 'Hello i am title VUE 4'
	},
	methods: {
		goDestroyed: function(){
			this.$destroy();
		}
	},
	beforeCreate: function(){
		alert('Before Create');
	},
	create: function(){
		alert('Create');
	},
	beforeMount: function(){
		alert('Before Mount');
	},
	mounted: function(){
		alert('Mounted');
	},
	beforeUpdate: function(){
		alert('Before Update');
	},
	updated: function(){
		alert('Updated');
	},
	beforeDestroy: function(){
		alert('Before Destroid');
	},
	destroyed: function(){
		alert('Destroyed');
	}
});

}
