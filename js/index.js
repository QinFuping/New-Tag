$(document).ready(function() {
	// nav
	$(".selector").hover(function() {
		$(this).css('borderBottom', '2px solid #5bbc39');
		$(this).children('a').css('color', '#5bbc39');
	}, function() {
		$(this).css('borderBottom', '2px solid rgba(0,0,0,0)');
		$(this).children('a').css('color', '#333');
	});
	$(".nav>li:nth-child(3),.nav>li:nth-child(5)").hover(function() {
		if($(this)[0].className=='thisWeb'){
			$(this).children('.arrow_down').children('span').css('backgroundColor', 'white');
		}else{
			$(this).children('.arrow_down').children('span').css('backgroundColor', '#5bbc39');
		}
		$(this).children('.arrow_down').css('transform', 'rotateZ(180deg)');
		$(this).css({
			borderTop: '2px solid #5bbc39',
			borderBottom: 'none',
			borderLeft: '1px solid #e2e2e2',
			borderRight: '1px solid #e2e2e2'
		});
		$(this).children('div').eq(1).css('display', 'block');
		
	}, function() {
		$(this).children('.arrow_down').css('transform', 'rotateZ(0deg)');
		$(this).css({
			borderColor: 'rgba(0,0,0,0)',
			borderWidth: '2px 1px 2px 1px',
			borderStyle: 'solid'
		});
		$(this).children('div').eq(1).css('display', 'none');
		if($(this)[0].className=='thisWeb'){
			$(this).children('.arrow_down').children('span').css('backgroundColor', 'white');
		}else{
			$(this).children('.arrow_down').children('span').css('backgroundColor', '#333');
		}
	});
	// header 分享hover样式
	$(".share>li:nth-child(2)>a,.share>li:nth-child(3)>a").hover(function() {
		$(this).css('backgroundPositionY', '-295px');
	}, function() {
		$(this).css('backgroundPositionY', '-265px');
	});
	$(".share>li:nth-child(1)>a").hover(function() {
		$(this).css('backgroundPositionX', '-29px');
	}, function() {
		$(this).css('backgroundPositionX', '1px');
	});
	// profession放大效果
	$(".hoverArea>div").hover(function() {
		$(".showPic>div").eq($(this).index()).css({
			width: '480px',
			height: '480px',
			left: '260px',
			top: '10px',
			opacity: '1'
		});
	}, function() {
		$(".showPic>div").css({
			width: '120px',
			height: '120px',
			opacity: '0'
		});
		$(".showPic>div").eq(0).css({
			left: '75px',
			top: '92px'
		});
		$(".showPic>div").eq(1).css({
			left: '154px',
			top: '309px'
		});
		$(".showPic>div").eq(2).css({
			left: '900px',
			top: '62px'
		});
		$(".showPic>div").eq(3).css({
			left: '738px',
			top: '342px'
		});
	});		
	// IE Opera Chrome
	document.onscroll=fnScroll;
	// FireFox
	if(document.addEventListener){  
		document.addEventListener("DOMMouseScroll" ,fnScroll, false);  
	} 
	function fnScroll(event){
		var event=event||window.event;
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		if(scrollTop>0){
			$(".header,.headerCase").css({
				boxShadow: '0 0 4px 0 rgba(0,0,0,.3)'
			});
		}else{
			$(".header,.headerCase").css({
				boxShadow: '0 0 4px 0 rgba(0,0,0,0)'
			});
		}

		if(scrollTop>600){
			$("#backTop").css('display','block');
			$("#backTop").bind('click',function(event) {
				document.body.scrollTop=0;
				document.documentElement.scrollTop=0;
			});
		}else{
			$("#backTop").css('display','none');
		}
	}


	// 案例
	$(".case_nav>div").bind('click', function(event) {
		$(this).css('color', '#63bf43').siblings('div').css('color', '#333');
		var index=$(this).index();
		$(this).siblings('.slider').css('top',187*index+'px');
		$(this).parent(".case_nav").siblings(".case_cont").children('ul').eq(index).css({
			zIndex: '1',
			opacity: '1'
		}).siblings('ul').css({
			zIndex: '0',
			opacity: '0'
		});
	});
	$(".case_cont>ul>a").hover(function() {
		$(this).children('.txt_before').css('opacity', '0');
		$(this).children('.txt_after').css('top', '0');
	}, function() {
		$(this).children('.txt_before').css('opacity', '1');
		$(this).children('.txt_after').css('top', '275px');
	});


	// 除甲醛流程的一些案例
	// $(".process_pic").height($("body").height()-60);
	$(".pro_case>div").hover(function() {
		$(this).children().css('backgroundColor', 'rgba(100,100,100,.6)');
	}, function() {
		$(this).children().css('backgroundColor', 'rgba(0,0,0,.6)');
	});
	$(".pro_case>div").bind('click', function(event) {
		$("body").addClass('scroll_hidden');
		$(".process_pic,.closeThis").css('display', 'block');
		$(".process_pic")[0].scrollTop=0;
		$(".process_pic>div").eq($(this).index()).css('display', 'block');
	});
	$('.closeThis').bind('click', function(event) {
		$(".process_pic,.process_pic>div").css('display', 'none');
		$(this).css('display', 'none');
		$("body").removeClass('scroll_hidden');
		console.log($(".process_pic")[0].scrollTop);
	});

	// 点五团队

	$(".team_cont>li").hover(function() {
		$(this).children('.engineer').children('div').css('bottom', '0');
	}, function() {
		$(this).children('.engineer').children('div').css('bottom', '-400px');
	});


	// 页面右边导航按钮
	$(".btns").hover(function() {
		$(this).children('p').css({width: '120px'});
	}, function() {
		$(this).children('p').css({width: '0px'});
	});
	$(".btn_phone").hover(function() {
		$(this).children('span').css({width: '180px'});
	}, function() {
		$(this).children('span').css({width: '0px'});
	});
	$(".btn_weChat").hover(function() {
		$(this).children('div').css('display', 'block');
	}, function() {
		$(this).children('div').css('display', 'none');
	});

	// 联系我们
	$("#GZpos").bind('click', function(event) {
		$(".GZmsg").css('display', 'block');
		$(".SZmsg").css('display', 'none');
	});
	$("#SZpos").bind('click', function(event) {
		$(".SZmsg").css('display', 'block');
		$(".GZmsg").css('display', 'none');
	});

	$(".connection_keyIn").bind('click', function(event) {
		$(this).addClass('keyIning').siblings('.connection_keyIn').removeClass('keyIning');
	});

	// 在线咨询
	window.setTimeout(function() {
		$(".chat").css('display', 'block');
	}, 2000);
	$(".chat_close").bind('click', function(event) {
		$(this).parent('div').css('display', 'none');
	});
});