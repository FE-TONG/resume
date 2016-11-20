(function(){
	Object.prototype.dddd = function(){
		init.call(this);
	}
	function init(){
		console.log(this)
		var all = document.getElementById('checkAll');
		var label = this.getElementsByTagName('span')[0];
		var item = document.getElementsByName('item');
		console.log(this.getElementById('checkAll'))
		var a = this.getElementsByTagName('a')[0];
		all.onclick = function(){
			for(var i=0;i<item.length;i++){
				item[i].checked = this.checked;
			}
			allcheck();			
		}
		a.onclick = function(){
			for(var i=0;i<item.length;i++){
				item[i].checked = !item[i].checked;
			}
			allcheck();
		}
		function allcheck(){
			for(var i=0,n=0;i<item.length;i++){
				item[i].checked && n++;
			}
			all.checked = (n==item.length);
			label.innerHTML =all.checked?'全不选':'全选';
		}
		for(var i=0;i<item.length;i++){
			item[i].onclick =function(){
				allcheck();
			}
		}
	}
})();