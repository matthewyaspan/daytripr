var fromTo = [];
//var stops = [];
var buttonClicks = 0;

$("button.btn.btn-default").click(function(e) {
   if ($("#input").val() != "") {

   		buttonClicks = buttonClicks + 1;
   		if (buttonClicks == 1) {
 
     		fromTo.push({"from": $("input.form-control").val() });
        $("label.subtitle.space-right").text("where are you coming from?");

   		} else if (buttonClicks == 2) {

   	    	fromTo.push({"to": $("input.form-control").val() });
   	    	$.ajax({
   	    		type : 'POST',
   	    		url : "/fromTo",
   	    		dataType: 'json',
   	    		data: fromTo
   	    	});

      }

          $("input.form-control").val(''); 
    }
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



   

});