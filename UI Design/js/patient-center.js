// Specific Styles
$('head').append( $('<link rel="stylesheet" type="text/css" media="screen" />')
	.attr('href', 'css/patientCenterStyle.css') );

// Specific Scripts

// Specific Fonts

// Specific Segments

//Specific Controls
//Slider
$(function() {
	$( "#patientListBtn" ).click(function() {
		$("#patientListBtn").css({left:120});
		$("#patientlist").css({left:0});
	});

	$( "#patientlisting" ).click(function() {
		$("#patientListBtn").css({left:-60});
		$("#patientlist").css({left:-179});
	});

	$("div#vitalsView").hide();
	$("input[name='timelineviews']").change(function() {
			if ($("input[name='timelineviews']:checked").val() == 'PocView') {
					$("div#vitalsView").hide();
					$("div#PocView").show();
			}
			else if ($("input[name='timelineviews']:checked").val() == 'vitalsView') {
					$("div#PocView").hide();
					$("div#vitalsView").show();
			}		
	});
	
});


