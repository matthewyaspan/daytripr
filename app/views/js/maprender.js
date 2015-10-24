var fromTo = [];
//var stops = [];
var buttonClicks = 0;

$("btn btn-default").click(function(e) {
   if ($("#label").val() != "") {
   		buttonClicks = buttonClicks + 1;
   		if (buttonClicks == 1) {
 
     		$("#label").val("Where are you going?");
     		fromTo.push({"from": $("form-control").val() });
    
   		} else if (buttonclicks == 2) {

   	    	$("#label").val("Where are you coming?");
   	    	fromTo.push({"to": $("form-control").val() });
   	    	$.ajax({
   	    		type : 'POST',
   	    		url : "/fromTo",
   	    		dataType: 'json',
   	    		data: fromTo
   	    	});
   	     	// if valid input, render the map
   	     	// potentialy some sort of animation to make the transition smooth
   		/*} else if (buttonClicks == 3) {
           // 
   	    	$("#label").val("Need to make a stop? ;)");
   	    	stops.push({""})

   		} else {

   	    	$("#label").val("How 'bout another?");

   		}

   	} */

   	$("form-control").val(''); 

   

});