// Common Styles
$('head').append( $('<link rel="stylesheet" type="text/css" media="screen" />')
	.attr('href', 'css/commonStyle.css') );
$('head').append( $('<link rel="stylesheet" type="text/css" media="print" />')
	.attr('href', 'css/print.css') );

// // Common Scripts
$('head').append( $('<script type="text/javascript" charset="utf-8" />')
	.attr('src', 'js/floating-menu.js') );
$('head').append( $('<script type="text/javascript" charset="utf-8" />')
	.attr('src', 'js/zebra-table.js') );
$('head').append( $('<script type="text/javascript" charset="utf-8" />')
	.attr('src', 'js/tooltip-link.js') );

// Common Fonts
$('head').append( $('<link rel="stylesheet" type="text/css" />')
	.attr('href', 'http://fonts.googleapis.com/css?family=Happy+Monkey') );

// Common Segments
$(function() {
	$("#headerbar").load("header.htm"); 
	$("#menu").load("menu.htm"); 
	$("#footersection").load("footer.htm"); 
});

