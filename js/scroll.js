$(document).ready(function(){




	divOffset = 70;
	//setup Navbar scroll
    function goToByScroll(id){
          // Reove "link" from the ID
        id = id.replace("link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top - divOffset},
            'slow');
    }

    $("ul.navbar-nav > li > a").click(function(e) { 

    	e.preventDefault();
          // Call the scroll function
        goToByScroll($(this).attr("id"));           
    });

	//setup navbar highlight
	function setHighlight(guy) {
	   	if ($("ul.navbar-nav > li").hasClass("active") ){
	    	$("ul.navbar-nav > li").removeClass("active");
	    	$(guy).addClass("active");
		}
	}
	$("ul.navbar-nav > li").click(function(){
		
		setHighlight($(this));
	});




});