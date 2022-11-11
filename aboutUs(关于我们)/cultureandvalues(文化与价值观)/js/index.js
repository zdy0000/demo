$(function(){
		$(window).scroll(function(){
		var $header = $("#header-warp");
		var $headlogo = $("#head-logo");
		var $headitool = $("#head-itool");
		var $headnav = $("#head-nav");
		if ($(window).scrollTop() > 99) {
			$header.css({"height":"70px","transition":"all 0.5s ease"});
			$headlogo.css({"width":"170px"});
			$headlogo.css({"padding-top":"14px"});
			$headitool.css({"padding-top":"14px"});
			$headnav.css({"height":"70px"});
			$headnav.css({"line-height":"70px"});
		} else {
			$header.css({"height":"100px","transition":"all .5s ease"});
			$headlogo.css({"width":"212px"});
			$headlogo.css({"padding-top":"23px"});
			$headitool.css({"padding-top":"28px"});
			$headnav.css({"height":"100px"});
			$headnav.css({"line-height":"100px"});
		}
		if ($(window).scrollTop() > 500) {
			 $(".gotop").fadeIn(500);
		} else if ($(window).scrollTop() < 500) {
			 $(".gotop").fadeOut(500);
		};
	})
	$(".gotop").click(function(){
		$("html,body").animate({
			scrollTop:0
		},700);
	return false;
	});
})
$(function(){
	//导航栏
	$(".head-nav li").hover(function() {
		$(this).children(".posi").stop(true, true).slideDown(400);
	}, function() {
		$(this).children(".posi").stop(true, true).slideUp(400);
	});
	//隐藏菜单
	var $open = $(".icon-li");
	var $body = $("body");
	var $side = $(".side");
	var $header = $("header");
	var $header1 = $("#header-warp");
	var $close = $("#close");
	var $sideWarp = $(".side-warp");
	$open.click(function(){
		$body.animate({"left":"-600px"},400);
		$side.animate({"right":"0px"},400);
		$header.animate({"left":"-600px"},400);
		$header1.css({"transition":"none"});
		$sideWarp.css({"opacity":"1","z-index":"100"})
	})
	$close.click(function(){
		$body.animate({"left":"0px"},400);
		$side.animate({"right":"-600px"},400);
		$header.animate({"left":"0px"},400);
		$header1.css({"transition":"none"});
		$sideWarp.css({"opacity":"0","z-index":"-1"})
	})
	$sideWarp.click(function(){
		$body.animate({"left":"0px"},400);
		$side.animate({"right":"-600px"},400);
		$header.animate({"left":"0px"},400);
		$header1.css({"transition":"none"});
		$sideWarp.css({"opacity":"0","z-index":"-1"})
	})
	//小屏下的按钮
	$(".icon-menu").toggle(function() {
			$(this).attr("class","icon-menu-close");
			$("html").attr("class","limibody");
			$(".menu-list-warp").css({"visibility":"visible","opacity":"1"});
			$(".menu-list").css({"visibility":"visible","height":$(window).height()-54+"px",});
			$(".menu-list ul li").css({"opacity":"1","transform":"translate3d(0, 0, 0)"})
	}, function() {
			$(this).attr("class","icon-menu");
			$("html").removeAttr("class","limibody");
			$(".menu-list-warp").css({"visibility":"hidden","opacity":"0"});
			$(".menu-list").css({"visibility":"hidden"});
			$(".menu-list ul li").css({"opacity":"0","transform":"translate3d(0, -80px, 0)"})
	})
	/* 小屏下的折叠菜单 */
	$(".arrow").toggle(function() {
		var $self = $(this);
		var $3 = $(this).prev().children("a").length;
		console.log($3)
		$self.css({"transform": "rotate(180deg)"});
		$self.prev().animate({"height":$3*43+"px"},500);
	}, function() {
		var $self = $(this);
		$self.css({"transform": "rotate(0deg)"});
		$self.prev().animate({"height":"0px"},500);
	})
	
	$(".values-tab-b .values-tab-show").show().siblings().hide();
	$(".values-tab-t span").click(function(){
		$(this).addClass("values-tab-active").siblings().removeClass("values-tab-active");
		$(".values-tab-b .values-tab-div").hide().eq($(this).index()).show();
	})
})
