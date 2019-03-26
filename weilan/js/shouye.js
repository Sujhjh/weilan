$(function() {

	$(".header_a_zhong_left a").css("color", "#367CB4");
	
	
	$(".header_a_zhong_left").children().css("margin-left", "10px");
	
	
	$(".header_a_zhong_right a").css("color", "#6b6b6b");
	
	
	$(".header_a_zhong_right span").css("color", "#367CB4");


	$(".header_a_zhong_right>ul>li:eq(0)").mouseover(function() {
		$(this).css("border", "1px solid #999999");
		//		$(".jiantou").css({"background":"url()","background-position":" -2px -4px"})
		$(".gouwuche_xia").show().css("z-index", "99");
	}).mouseout(function() {
		$(this).css("border", "1px solid #ffffff");
		$(".gouwuche_xia").hide();
	})


	$(".header_a_zhong_right>ul>li:eq(5)").mouseover(function() {
		$(".kehufuwu").show().css("z-index", "99");
	}).mouseout(function() {
		$(".kehufuwu").hide();
	})


	$(".kehufuwu a").mouseover(function() {
		$(this).css("color", "#ea701d");
	}).mouseout(function() {
		$(this).css("color", "#6b6b6b");
	})


	$(".header_b_zhong p").children().css("margin-left", "10px")
	
	
	$(".header_c_zhong_right li:even").css("width", "80px");
	
	
	$(".header_c_zhong_right li:even").mousemove(function() {
		$(this).css("background", "#367cb4");
	}).mouseout(function() {
		$(this).css("background", "url(../img/nav-bg.gif) repeat-x");
		$(".header_c_zhong_right li:eq(0)").css("background", "#367cb4");
	})
	
	
	$(".section_a_one_left h4").css("color", "#4c85b2")
	
	
	$(".section_a_one_left a").css({
		"color": "#888888",
		"font-size": "12px"
	})
	
	
	$(".section_a_one_left a").mouseover(function() {
		$(this).css({
			"text-decoration": "underline",
			"color": "#4c85b2"
		});
	}).mouseout(function() {
		$(".section_a_one_left h4").css("color", "#4c85b2");
		$(this).css({
			"text-decoration": "none",
			"color": "#888888"
		});
	});
	
	
//	轮播图
	var index=0;
	var width=$('.section_a_one_right_top_zhong_tu>ul>li').width();
	var muvo=function(){
		index = index > 4 ? 0 : index;
		$('.section_a_one_right_top_zhong_tu>ul').stop().animate({left:-width*index},750);
		$('.section_a_one_right_top_zhong_dian>ul>li').eq(index).addClass('active').siblings().removeClass('active');
	}
	var shijian=setInterval(function(){
		index++;
		muvo();
	},2500);
	$('.section_a_one_right_top_zhong_tu').hover(function(){
		clearInterval(shijian);
	},function(){
		shijian=setInterval(function(){
			index++;
			muvo();
		},2500);
	});
	$('.section_a_one_right_top_zhong_dian>ul>li').on('mouseenter',function(){
		index=$(this).index();
		muvo();
	});



	$(".section_a_one_right_bottom_top_right_shu img").css({"width":"120px","height":"160px"})
	$(".section_a_one_right_bottom_top_right_shu a").mouseover(function(){
		$(this).css({"text-decoration":"underline","color":"#4c85b2"})
	}).mouseout(function(){
		$(this).css({"text-decoration":"none","color":"#666666"})
	})
	
	
	var xia=0;
	var kuan=$('.section_a_one_right_bottom_top_right_shu>ul>li').width()*4;
	var qi=function(){
		xia = xia > 2 ? 0 : xia;
		$('.section_a_one_right_bottom_top_right_shu>ul').animate({left:-kuan*xia},0);
	}
	$(".section_a_one_right_bottom_top_right>span>ul>li").on("click",function(){
		xia=$(this).index();
		qi();
	});
	$(".zuo").on('click',function(){
		if(xia>0){
			xia--;
			qi();
		}
	})
	$(".you").on('click',function(){
		if(xia<2){
			xia++;
			qi();
		}
	});
	
	$(".section_a_two_left_bottom_a a").mouseover(function(){
		$(this).css({"text-decoration":"underline","color":"#4c85b2"})
	}).mouseout(function(){
		$(this).css({"text-decoration":"none","color":"#666666"})
	})
	$(".section_a_three_left_bottom_a a").mouseover(function(){
		$(this).css({"text-decoration":"underline","color":"#4c85b2"})
	}).mouseout(function(){
		$(this).css({"text-decoration":"none","color":"#666666"})
	})
	
//	编辑推荐模块右侧排行榜
	$(".section_a_three_right_bottom>ul>li:eq(0)").css("height","70px");
	$(".section_a_three_right_bottom>ul>li:eq(0)").children("dd").css("display","block");
	$(".section_a_three_right_bottom>ul>li:eq(0)").children("dt").css("display","none");
	$(".section_a_three_right_bottom>ul>li").mouseover(function(){
		$(this).children("dd").show();
		$(this).children("dt").hide();
		$(this).siblings().css("height","40px");
		$(this).siblings().children("dd").hide();
		$(this).siblings().children("dt").show();
		$(this).css("height","70px");
	}).mouseout(function() {
//		$(this).css("height","30px");
//		$(this).children("dt").show();
//		$(this).children("dd").hide();
	})
})