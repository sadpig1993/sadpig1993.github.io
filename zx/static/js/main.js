$(document).ready(function(){
	//根据窗口大小调整元素
	/*$.extend({
		tiaozheng:function(){
			$("#div1").height($(window).height()-80);
			$("#div2").height($(window).height());
		}
	});
	$.tiaozheng();
	$(window).resize(function(){
		$.tiaozheng();
	});
	*/
	//滚动事件
	window.onscroll=function(){
		var g=$("#guide0").offset().top;
		var t =$(document).scrollTop();
		if (t>(g-50)) {
			$("#guide").css("position","fixed");
			$("#guide").animate({opacity:"show"},500);
		} else{
			$("#guide").css("position","absolute");
			$("#guide").animate({opacity:"hide"},500);
		};
	}


	

});