$(function() {
	
	
/* Form related plugins
================================================== */

	//===== Usual validation engine=====//

	$("#normal-validation").validate({
		rules: {
			firstname: "required",
			minchars: {
				required: true,
				minlength: 3
			},
			maxChars: {
				required: true,
				maxlength: 6
			},
			mini: {
				required: true,
				min: 3
			},
			maxi: {
				required: true,
				max: 6
			},
			range: {
				required: true,
				range: [6, 16]
			},
			emailField: {
				required: true,
				email: true
			},
			urlField: {
				required: true,
				url: true
			},
			dateField: {
				required: true,
				date: true
			},
			digitsOnly: {
				required: true,
				digits: true
			},
			enterPass: {
				required: true,
				minlength: 5
			},
			repeatPass: {
				required: true,
				minlength: 5,
				equalTo: "#enterPass"
			},
			customMessage: "required",
			
	
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			customMessage: {
				required: "This message is editable",
			},
			agree: "Please accept our policy"
		}
	});



	//===== Input limiter =====//
	
	$('.lim').inputlimiter({
		limit: 100
		//boxClass: 'limBox',
		//boxAttach: false
	});


	//===== Multiple select with dropdown =====//
	
	$(".chzn-select").chosen(); 
	
	
	//===== Placeholder =====//
	
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	
	//===== ShowCode plugin for <pre> tag =====//
	
	$('.showCode').sourcerer('js html css php'); // Display all languages
	$('.show-code-js').sourcerer('js'); // Display JS only
	$('.showCodeHTML').sourcerer('html'); // Display HTML only
	$('.showCodePHP').sourcerer('php'); // Display PHP only
	$('.showCodeCSS').sourcerer('css'); // Display CSS only
	
	
	//===== Autocomplete =====//
	
	var availableTags = [ "ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];
	$( "#ac" ).autocomplete({
	source: availableTags
	});	
	
	
	//===== Masked input =====//
	
	$.mask.definitions['~'] = "[+-]";
	$(".mask-date").mask("99/99/9999",{completed:function(){alert("Callback when completed");}});
	$(".mask-phone").mask("(999) 999-9999");
	$(".mask-phone-external").mask("(999) 999-9999? x99999");
	$(".mask-phone-internal").mask("+33 999 999 999");
	$(".mask-tax").mask("99-9999999");
	$(".mask-social").mask("999-99-9999");
	$(".mask-product-key").mask("a*-999-a999", { placeholder: " " });
	$(".maskEye").mask("~9.99 ~9.99 999");
	$(".mask-purchase-order").mask("PO: aaa-999-***");
	$(".mask-percent").mask("99%");
	
	
	//===== Dual select boxes =====//
	
	$.configureBoxes();
	
	
	//===== Wizards =====//
	
	$("#wizard-1").formwizard({
		formPluginEnabled: true, 
		validationEnabled: false,
		focusFirstInput : false,
		disableUIStyles : true,
	
		formOptions :{
			success: function(data){$("#status-1").fadeTo(500,1,function(){ $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0); })},
			beforeSubmit: function(data){$("#w1").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");},
			resetForm: true
		}
	});
	
	$("#wizard-2").formwizard({ 
		formPluginEnabled: true,
		validationEnabled: true,
		focusFirstInput : false,
		disableUIStyles : true,
	
		formOptions :{
			success: function(data){$("#status-2").fadeTo(500,1,function(){ $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0); })},
			beforeSubmit: function(data){$("#w2").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");},
			dataType: 'json',
			resetForm: true
		},
		validationOptions : {
			rules: {
				bazinga: "required",
				email: { required: true, email: true }
			},
			messages: {
				bazinga: "Bazinga. This note is editable",
				email: { required: "Please specify your email", email: "Correct format is name@domain.com" }
			}
		}
	});
	
	$("#wizard-3").formwizard({
		formPluginEnabled: false, 
		validationEnabled: false,
		focusFirstInput : false,
		disableUIStyles : true
	});
	
	
	//===== Validation engine =====//
	
	$("#validate").validationEngine();
	
	
	//===== WYSIWYG editor =====//
	
	$("#editor").cleditor({
		width:"100%", 
		height:"100%",
		bodyStyle: "margin: 10px; font: 12px Arial,Verdana; cursor:text"
	});
	
	
	//===== File uploader =====//
	
	$("#uploader").pluploadQueue({
		runtimes : 'html5,html4',
		url : 'php/upload.php',
		max_file_size : '1mb',
		unique_names : true,
		filters : [
			{title : "Image files", extensions : "jpg,gif,png"}
			//{title : "Zip files", extensions : "zip"}
		]
	});
	
	
	//===== Tags =====//	
		
	$('#tags').tagsInput({width:'100%'});
		
		
	//===== Autogrowing textarea =====//
	
	$(".auto-growing").autoGrow();



/* General stuff
================================================== */


	//===== Left navigation styling =====//
	
	$('li.this').prev('li').css('border-bottom-color', '#2c3237');
	$('li.this').next('li').css('border-top-color', '#2c3237');
	
	/*$('.responsive-menu ul li').mouseover(
	function() { $(this).prev('li').css('border-bottom-color', '#3d434a') }
	);
	
	$('.responsive-menu ul li').mouseout(
	function() { $(this).prev('li').css('border-bottom-color', '#1c252a') }
	);*/

	//$('.responsive-menu ul li').next('li').css('border-top-color', '#2c3237');

	
	/*$('ul.nav li a').mouseover(
		function(){
		$(this).parent().prev('li').children("> a").addClass('bottomBorder'); 
		}
		);
		
		$('ul.nav li a').mouseout(
		function(){
		$(this).parent().prev('li').children("a").removeClass('bottomBorder'); 
		}
	);*/
	
	
	//===== User nav dropdown =====//		
	
	$('.dd').click(function () {
		$('.custom-dropdown').slideToggle(200);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dd"))
		$(".custom-dropdown").slideUp(200);
	});
	  
	  
	  
	//===== Statistics row dropdowns =====//	
		
	$('.ticketsStats > h2 a').click(function () {
		$('#s1').slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("ticketsStats"))
		$("#s1").slideUp(150);
	});
	
	
	$('.visitsStats > h2 a').click(function () {
		$('#s2').slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("visitsStats"))
		$("#s2").slideUp(150);
	});
	
	
	$('.usersStats > h2 a').click(function () {
		$('#s3').slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("usersStats"))
		$("#s3").slideUp(150);
	});
	
	
	$('.ordersStats > h2 a').click(function () {
		$('#s4').slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("ordersStats"))
		$("#s4").slideUp(150);
	});
	
	
	
	//===== Collapsible elements management =====//
	
	$('.exp').collapsible({
		defaultOpen: 'current',
		cookieName: 'navAct',
		cssOpen: 'active',
		cssClose: 'inactive',
		speed: 200
	});
	
	$('.opened').collapsible({
		defaultOpen: 'opened,toggle-opened',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	});
	
	$('.closed').collapsible({
		defaultOpen: '',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	});
	
	
	$('.active-menu-item').collapsible({
		defaultOpen: 'openedDrop',
		cookieName: 'smallNavAct',
		cssOpen: 'active',
		cssClose: 'inactive',
		speed: 100
	});
	
	/*$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("responsive-menu"))
		$(".resp-menu").slideUp(200);
	});*/



	
	//===== Middle navigation dropdowns =====//
	
	$('.middle-user').click(function () {
		$('.middle-Submenu-1').slideToggle(100);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("middle-user"))
		$(".middle-Submenu-1").slideUp(100);
	});
	
	$('.middle-messages').click(function () {
		$('.middle-Submenu-2').slideToggle(100);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("middle-messages"))
		$(".middle-Submenu-2").slideUp(100);
	});
	
	$('.mFiles').click(function () {
		$('.mSub3').slideToggle(100);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("mFiles"))
		$(".mSub3").slideUp(100);
	});
	
	$('.mOrders').click(function () {
		$('.mSub4').slideToggle(100);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("mOrders"))
		$(".mSub4").slideUp(100);
	});



	//===== User nav dropdown =====//		
	
	$('.sidedd').click(function () {
		$('.sideDropdown').slideToggle(200);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("sidedd"))
		$(".sideDropdown").slideUp(200);
	});
	
	
	//$('.responsive-menu').click(function () {
	//	$('.resp-menu').slideDown(200);
	//});





/* Tables
================================================== */


	//===== Check all checbboxes =====//
	
	$(".title-icon input:checkbox").click(function() {
		var checkedStatus = this.checked;
		$("#check-all-box tbody tr td:first-child input:checkbox").each(function() {
			this.checked = checkedStatus;
				if (checkedStatus == this.checked) {
					$(this).closest('.checker > span').removeClass('checked');
				}
				if (this.checked) {
					$(this).closest('.checker > span').addClass('checked');
				}
		});
	});	
	
	$('#check-all-box tbody tr td:first-child').next('td').css('border-left-color', '#CBCBCB');
	
	
	
	//===== Resizable columns =====//
	
	$("#res, #res1").colResizable({
		liveDrag:true,
		draggingClass:"dragging" 
	});
	  
	  
	  
	//===== Sortable columns =====//
	
	$("table").tablesorter();
	
	
	
	//===== Dynamic data table =====//
	
	oTable = $('.dinamyc-table').dataTable({
		"bJQueryUI": true,
		"sPaginationType": "full_numbers",
		"sDom": '<""l>t<"F"fp>'
	});





/* # Pickers
================================================== */


	//===== Color picker =====//
	
	$('#cPicker').ColorPicker({
		color: '#000',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#cPicker div').css('backgroundColor', '#' + hex);
		}
	});
	
	$('#flatPicker').ColorPicker({flat: true});
	
	
	
	//===== Time picker =====//
	
	$('.time-picker').timeEntry({
		show24Hours: true, // 24 hours format
		showSeconds: true, // Show seconds?
		spinnerImage: 'images/forms/spinnerUpDown.png', // Arrows image
		spinnerSize: [19, 30, 0], // Image size
		spinnerIncDecOnly: true // Only up and down arrows
	});
	
	
	//===== Datepickers =====//
	
	$( ".datepicker" ).datepicker({ 
		defaultDate: +7,
		autoSize: true,
		appendText: '(dd-mm-yyyy)',
		dateFormat: 'dd-mm-yy',
	});	
	
	$( ".datepickerInline" ).datepicker({ 
		defaultDate: +7,
		autoSize: true,
		appendText: '(dd-mm-yyyy)',
		dateFormat: 'dd-mm-yy',
		numberOfMonths: 1
	});	


//===== Progress bars =====//
	
	// default mode
	$('#progress-1').anim_progressbar();
	
	// from second #5 till 15
	var iNow = new Date().setTime(new Date().getTime() + 5 * 1000); // now plus 5 secs
	var iEnd = new Date().setTime(new Date().getTime() + 15 * 1000); // now plus 15 secs
	$('#progress-2').anim_progressbar({start: iNow, finish: iEnd, interval: 1});
	
	// jQuery UI progress bar
	$( "#progress" ).progressbar({
			value: 80
	});
	
	
	
	//===== Animated progress bars =====//
	
	var percent = $('.progress-defaul').attr('title');
	$('.progress-defaul').animate({width: percent},1000);
	
	var percent = $('.progressO').attr('title');
	$('.progressO').animate({width: percent},1000);
	
	var percent = $('.progressB').attr('title');
	$('.progressB').animate({width: percent},1000);
	
	var percent = $('.progressR').attr('title');
	$('.progressR').animate({width: percent},1000);
	
	
	
	
	var percent = $('#bar1').attr('title');
	$('#bar1').animate({width: percent},1000);
	
	var percent = $('#bar2').attr('title');
	$('#bar2').animate({width: percent},1000);
	
	var percent = $('#bar3').attr('title');
	$('#bar3').animate({width: percent},1000);
	
	var percent = $('#bar4').attr('title');
	$('#bar4').animate({width: percent},1000);
	
	var percent = $('#bar5').attr('title');
	$('#bar5').animate({width: percent},1000);

	var percent = $('#bar6').attr('title');
	$('#bar6').animate({width: percent},1000);

	var percent = $('#bar7').attr('title');
	$('#bar7').animate({width: percent},1000);

	var percent = $('#bar8').attr('title');
	$('#bar8').animate({width: percent},1000);

	var percent = $('#bar9').attr('title');
	$('#bar9').animate({width: percent},1000);




/* Other plugins
================================================== */


	//===== File manager =====//
	
	$('#fm').elfinder({
		url : 'php/connector.php',
	});

	
	//===== Calendar =====//
	
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('.calendar').fullCalendar({
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},
		editable: true,
		events: [
			{
				title: 'All day event',
				start: new Date(y, m, 1)
			},
			{
				title: 'A Very Long event',
				start: new Date(y, m, 5),
				end: new Date(y, m, 8)
			},
			{
				id: 999,
				title: 'Repeating event',
				start: new Date(y, m, 2, 16, 0),
				end: new Date(y, m, 3, 18, 0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating event',
				start: new Date(y, m, 9, 16, 0),
				end: new Date(y, m, 10, 18, 0),
				allDay: false
			},
			{
				title: 'Background color could be changed',
				start: new Date(y, m, 30, 10, 30),
				end: new Date(y, m, d+1, 14, 0),
				allDay: false,
				color: '#000000'
			},
			{
				title: 'Lunch',
				start: new Date(y, m, 14, 12, 0),
				end: new Date(y, m, 15, 14, 0),
				allDay: false
			},
			{
				title: 'Boss Birthday Party',
				start: new Date(y, m, 18),
				end: new Date(y, m, 20),
				allDay: false
			},
			{
				title: 'We Love ThemesHub',
				start: new Date(y, m, 27),
				end: new Date(y, m, 29),
				url: 'http://themeforest.net/user/ThemesHub'
			}
		]
	});
	
	
	
	
/* UI stuff
================================================== */


	//===== Sparklines =====//
	
	$('.negBar').sparkline('html', {type: 'bar', barColor: '#cb3030'} );
	$('.posBar').sparkline('html', {type: 'bar', barColor: '#9cdc4f'} );
	$('.zeroBar').sparkline('html', {type: 'bar', barColor: '#0FA1E3'} ); 
	
	
	
	//===== Tooltips =====//
	
	$('.tipN').tipsy({gravity: 'n',fade: true});
	$('.tipS').tipsy({gravity: 's',fade: true});
	$('.tipW').tipsy({gravity: 'w',fade: true});
	$('.tipE').tipsy({gravity: 'e',fade: true});
	
		
	
	//===== Accordion =====//		
	
	$('div.menu_body:eq(0)').show();
	$('.acc .title:eq(0)').show().css({color:"#2B6893"});
	
	$(".acc .title").click(function() {	
		$(this).css({color:"#2B6893"}).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().css({color:"#404040"});
	});
	
	
	//===== Tabs =====//
		
	$.fn.contentTabs = function(){ 
	
		$(this).find(".tab-content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("activeTab").show(); //Activate first tab
		$(this).find(".tab-content:first").show(); //Show first tab content
	
		$("ul.tabs li").click(function() {
			$(this).parent().parent().find("ul.tabs li").removeClass("activeTab"); //Remove any "active" class
			$(this).addClass("activeTab"); //Add "active" class to selected tab
			$(this).parent().parent().find(".tab-content").hide(); //Hide all tab content
			var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
			$(activeTab).show(); //Fade in the active content
			return false;
		});
	
	};
	$("div[class^='widget']").contentTabs(); //Run function on any div with class name of "Content Tabs"
	
	
	
	//===== Notification boxes =====//
	
	$(".hide-me").click(function() {
		$(this).fadeTo(200, 0.00, function(){ //fade
			$(this).slideUp(300, function() { //slide up
				$(this).remove(); //then remove from the DOM
			});
		});
	});	
	
	
	
	//===== Lightbox =====//
	
	$("a[rel^='lightbox']").prettyPhoto();
	
	
	
	//===== Image gallery control buttons =====//
	
	$(".gallery ul li").hover(
		function() { $(this).children(".actions").show("fade", 200); },
		function() { $(this).children(".actions").hide("fade", 200); }
	);
	
	
	//===== Spinner options =====//
	
	var itemList = [
		{url: "http://google.com", title: "Google"},
		{url: "http://themeforest.net", title: "ThemeForest"},
		{url: "http://themeshub.net", title: "ThemesHub"}
	];
	
	var opts = {
		'sDec': {decimals:2},
		'sStep': {stepping: 0.25},
		'sCur': {currency: '$'},
		'sInline': {},
		'sLink': {
			//
			// Two methods of adding external items to the spinner
			//
			// method 1: on initalisation call the add method directly and format html manually
			init: function(e, ui) {
				for (var i=0; i<itemList.length; i++) {
					ui.add('<a href="'+ itemList[i].url +'" target="_blank">'+ itemList[i].title +'</a>');
				}
			},
	
			// method 2: use the format and items options in combination
			format: '<a href="%(url)" target="_blank">%(title)</a>',
			items: itemList
		}
	};
	
	for (var n in opts)
		$("#"+n).spinner(opts[n]);
	
	$("button").click(function(e){
		var ns = $(this).attr('id').match(/(s\d)\-(\w+)$/);
		if (ns != null)
			$('#'+ns[1]).spinner( (ns[2] == 'create') ? opts[ns[1]] : ns[2]);
	});
	
	
	
	//===== UI dialog =====//
	
	$( "#dialog-message" ).dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			Ok: function() {
				$( this ).dialog( "close" );
			}
		}
	});
	
	$( "#opener" ).click(function() {
		$( "#dialog-message" ).dialog( "open" );
		return false;
	});	
		
	
	
	//===== Breadcrumbs =====//
	
	$('#breadcrumbs').xBreadcrumbs();
	
		
		
	//===== jQuery UI sliders =====//	
	
	$( ".uiSlider" ).slider(); /* Usual slider */
	
	
	$( ".uiSliderInc" ).slider({ /* Increments slider */
		value:100,
		min: 0,
		max: 500,
		step: 50,
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.value );
		}
	});
	$( "#amount" ).val( "$" + $( ".uiSliderInc" ).slider( "value" ) );
		
		
	$( ".uiRangeSlider" ).slider({ /* Range slider */
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#rangeAmount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#rangeAmount" ).val( "$" + $( ".uiRangeSlider" ).slider( "values", 0 ) +" - $" + $( ".uiRangeSlider" ).slider( "values", 1 ));
			
			
	$( ".uiMinRange" ).slider({ /* Slider with minimum */
		range: "min",
		value: 37,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( "#minRangeAmount" ).val( "$" + ui.value );
		}
	});
	$( "#minRangeAmount" ).val( "$" + $( ".uiMinRange" ).slider( "value" ) );
	
	
	$( ".uiMaxRange" ).slider({ /* Slider with maximum */
		range: "max",
		min: 1,
		max: 100,
		value: 20,
		slide: function( event, ui ) {
			$( "#maxRangeAmount" ).val( ui.value );
		}
	});
	$( "#maxRangeAmount" ).val( $( ".uiMaxRange" ).slider( "value" ) );	



	//===== Form elements styling =====//
	
	$("select, input:checkbox, input:radio, input:file").uniform();

	
});