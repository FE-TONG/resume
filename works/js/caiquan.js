window.onload = function(){
	Function.prototype.extends = function(func,action){//js的自定义继承
		for(var p in func.prototype){
			this.prototype[p]=func.prototype[p]
		}
		for(var p in action){
			this.prototype[p] = action[p];
		}
	}
	function Player(name){//玩家的构造器
		this.name = name;
		this.point = -1; // 当没有赋任何值的时候，this.user.point=-1;
	}
	Player.prototype.guess = function() {}
	function User(name){
		Player.call(this,name);
	}
	User.extends(Player,{  //竟然用了User.extends = (Player,{})  找了半天才找到错误
		guess : function(point){
			return this.point = point;
		}
	});
	
	function Comp(name){
		Player.call(this,name);
	}
	Comp.extends(Player,{
		guess:function(){
			return this.point = window.parseInt(Math.random()*1000%3);
		}
	});
	var user = new User("苟米璐");
	var comp = new Comp("圣诞快乐");
	function Game(u,c){
		this.user = u;
		this.comp = c;
		this.init(); 
	}
	Game.prototype = {
		play:function(){
			this.toggleButton();//让按钮失去功能，改变样式
			this.startAnimate();//开始猜拳动画
		},
		init:function(){ //初始化
			var name = document.getElementsByClassName("name"); //得到name的dom属性
			name[0].innerHTML = "我："+this.user.name;     //操作玩家用户的文本内容
			name[1].innerHTML = "电脑:"+this.comp.name;		//操作电脑用户的文本内容
		},
		toggleButton:function(){ //改变开始按键的css样式功能
			var but = document.getElementsByTagName("button");//一开始我使用了ClassName("but")  //第一圈能找到，等到了第二圈就没有了but这个classname了
			if(but[0].disabled){  //如果开始那个按键，有disabled样式
				but[0].disabled=false;  //把disable样式变为false
				but[0].innerHTML="再来一局"  //改变按键中的内容
				but[0].className = "";   //把class="disabled"改为  空
				
			}else{						// disabled没有这个
				but[0].disabled =true;    //把disable样式变为true;
				but[0].className = "disabled"; //把class=""改为class="disabled"
			}
		},
		startAnimate:function(){ //动画效果
			document.getElementById("guess").style.display="block";//把左边的出拳版显示出来
			var anim = document.getElementsByClassName("anim"); //操作
			var count=0;  //定时器
			this._interval = window.setInterval(function(){ 
			anim[0].className = 'anim user guess'+(count++)%3; //让画面不停的在石头剪刀布轮播
			anim[1].className = 'anim comp guess'+(count++)%3; //
		},500);
		},
		verdict:function(point){  
			window.clearInterval(this._interval);
			var anim = document.getElementsByClassName("anim");
			anim[0].className = "anim user guess"+this.user.guess(point);
			anim[1].className = "anim comp guess"+this.comp.guess();
			var res = this.user.point - this.comp.point;
			document.getElementById('guess').style.display='none';
			switch (res)
			{
			case 0:
				this.changTEXT("平局");
				break;
			case 1:
			case -2:
				this.changTEXT("555 ..... 输了");
				this.score(res);
				break;
			case -1:
			case 2:
				this.changTEXT("yea！ 赢了");
				this.score(res);
				break;
			}
			this.toggleButton();
		},
		changTEXT : function(message){
			var text = document.getElementsByClassName("text");
			text[0].innerHTML =message;
		},
		score:function(res){
			if(res==-1||res==2){
				
				sco1=sco1+10;		
				var score =document.getElementsByClassName("score");
				score[0].innerHTML = "积分:"+sco1;
			}else{
				sco2=sco2+10;
				var score =document.getElementsByClassName("score");
				score[1].innerHTML = "积分:"+sco2;
			}
		},
		reset:function(){
			sco1=0;
			sco2=0;
			var score =document.getElementsByClassName("score");
			score[0].innerHTML = "积分:"+sco1;
			score[1].innerHTML = "积分:"+sco2;
		}
		
	}
	game = new Game(user,comp);
    var sco1=0;
	var sco2=0;
	var reset = document.getElementById("reset");
	reset.onclick = function(){
		game.reset();
	}
}
var game;