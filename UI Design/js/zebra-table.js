
$(function() {
	// // FOR DEBUG ONLY
	// if (!console)
	 // {
		// console = {
							 // "log" : function ()
												// {
												// }
							// };
	 // }
	// console.log("Console logging ready");
	
	/* For zebra striping */
	$("table tr:nth-child(odd)").addClass("odd-row");
	/* For cell text alignment */
	$("table td:first-child, table th:first-child").addClass("first");
	/* For removing the last border */
	$("table td:last-child, table th:last-child").addClass("last");
});


