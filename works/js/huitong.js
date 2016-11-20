
$(function(){
	$('#title li').hover(function(){
		$(this).addClass('hover');
		$('.nav-subnav',this).show();
	 },function(){
		$(this).removeClass('hover');
		$('.nav-subnav',this).hide();
	});
	$('.project ul li').click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
	});
	/*banner star*/
	//jquery代理对象，因为反复要使用
	var $banner = $('#banner');
	var $nums = $('#ban-nav li');
	var $banners = $('#banner ul.banner-ul li');
	//默认从0个广告开始显示
	var index = 0;
	//广告中间的块，移上去左右按钮出来，计时器停止
	//移开的时候左右按钮消失，计时器继续
	$('#banner banner-img').hover(function(){
		window.clearInterval(interval);
	},function(){
		interval = window.setInterval(changeBanner,2000);
	});
	//改变广告
	function changeBanner(flag){
		var $curr = $nums.eq(index);
		$curr.addClass('on').siblings().removeClass('on');
		var $target = $banners.eq(index);
		$target.stop().fadeIn(500).siblings().stop().hide();
		index = ++index%$nums.size();
	}
	var interval = window.setInterval(changeBanner,4000);
	changeBanner();
	$nums.mouseover(function(){
		index = $(this).index();
		changeBanner();
	});
});