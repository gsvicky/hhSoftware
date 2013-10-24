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

	
});


