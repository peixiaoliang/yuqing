$(function(){
	$('.banner').fullpage({
		sectionsColor: ['#3499E1', '#0A68C0', '#47C079', '#18A27E'],
		'navigation': true,
		'navigationTooltips':["登录百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"],
	})
	$('.banner').delegate('.btn', 'click', function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
	// $('.contain').delegate('.bottom a', 'click', function(e){
	// 	e.preventDefault();
	// 	$.fn.fullpage.moveSectionDown();
	// }).fullpage({
 //        'navigation': true,
	// });

});