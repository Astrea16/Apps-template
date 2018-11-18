$(document).ready(function(){
	$('.nav-toggle').on('click', function(){
		$('.menu').toggleClass('active');
	});

	$('.sidebar-toggle').on('click', function(){
		$('.sidebar').toggleClass('active');
	});
	
	$("#submit-2").click(
		function(){
			sendAjaxForm('#answer', '#form_2', 'apps-template.php');
			return false;
		});

	function sendAjaxform(answer, form_2, url){
		$.ajax({
				url: "apps-template.php",
				type: "POST",
				dataType: "html",
				data: $("#"+form-2).serialize(),
      	success: function(response) {
      		result = $.parseJSON(response);
      		$('#answer').html('Name: '+result.name+'<br>Phone: '+result.phone+'<br>Email: '+result.email+'<br>Textarea'+result.massenge);
      	},
      	error: function(response) {
      		$('#answer').html('Error. Data not sent.')
      	}
		});
	};

	$('.bxslider').bxSlider({
		pager: false,
		nextText: '',
		prevText: ''
	});

	var modal = $('#modal'),
			win = $('#win'),
			win	= $('#win-2'),
			win = $('#win-3');      

	function modal_open(e){
		e.preventDefault();
		modal.show().animate({opacity: 1}, 500);
		win.show(500);
	}	
	function modal_close(e){
		e.preventDefault();
		win.hide(500);
    modal.animate({opacity: 0}, 500 );
    setTimeout(function() { modal.hide(100) }, 500);
	}	
	$('.open-modal').on('click', modal_open);
	$('.close').add('#modal').on('click', modal_close);
	$('#win, #win-2, #win-3').on('click', function(e){
		e.stopPropagation();
	});
})