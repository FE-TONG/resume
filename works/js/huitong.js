
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
	//jquery���������Ϊ����Ҫʹ��
	var $banner = $('#banner');
	var $nums = $('#ban-nav li');
	var $banners = $('#banner ul.banner-ul li');
	//Ĭ�ϴ�0����濪ʼ��ʾ
	var index = 0;
	//����м�Ŀ飬����ȥ���Ұ�ť��������ʱ��ֹͣ
	//�ƿ���ʱ�����Ұ�ť��ʧ����ʱ������
	$('#banner banner-img').hover(function(){
		window.clearInterval(interval);
	},function(){
		interval = window.setInterval(changeBanner,2000);
	});
	//�ı���
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