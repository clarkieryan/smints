/*

SMINT V1.0 by Robert McCracken
SMINT is my first dabble into jQuery plugins!
http://www.outyear.co.uk/smint/
If you like Smint, or have suggestions on how it could be improved, send me a tweet @rabmyself

*/
(function(){

	
	$.fn.smint = function( options ) {

		// adding a class to users div
		$(this).addClass('smint')

		var settings = $.extend({
		            'scrollSpeed '  : 500
		}, options);

		//Set the variables needed
		var optionLocs = new Array();
		var lastScrollTop = 0;
		var menuHeight = $(".smint").height();

		return $('.smint a').each( function(index) {
            
			if ( settings.scrollSpeed ) {
				var scrollSpeed = settings.scrollSpeed
			}
			
			//Fill the menu
			var id = $(this).attr("id");
			optionLocs.push(Array($("div."+id).position().top-menuHeight, $("div."+id).height()+$("div."+id).position().top, id));

			///////////////////////////////////

			// get initial top offset for the menu 
			var stickyTop = $('.smint').offset().top;	

			// check position and make sticky if needed
			var stickyMenu = function(direction){
				
				// current distance top
				var scrollTop = $(window).scrollTop(); 
							
				// if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
				if (scrollTop > stickyTop) { 
					$('.smint').css({ 'position': 'fixed', 'top':0 }).addClass('fxd');	
				} else {
					$('.smint').css({ 'position': 'absolute', 'top':stickyTop }).removeClass('fxd'); 
				}   
<<<<<<< HEAD

				//Check if the position is inside then change the menu
				if(optionLocs[index][0] <= scrollTop && scrollTop <= optionLocs[index][1]){	
=======
				console.log(scrollTop);
				//Check if the position is inside then change the menu
				if(optionLocs[index][0] <= scrollTop && scrollTop <= optionLocs[index][1]){
					console.log(id);
					console.log(direction);	
>>>>>>> gh-pages
					if(direction == "up"){
						$("#"+id).addClass("active");
						$("#"+optionLocs[index+1][2]).removeClass("active");
					} else if(index > 0) {
						$("#"+id).addClass("active");
						$("#"+optionLocs[index-1][2]).removeClass("active");
					} else if(direction == undefined){
						$("#"+id).addClass("active");
<<<<<<< HEAD
					}
=======
						
					}
					$.each(optionLocs, function(i){
						if(id != optionLocs[i][2]){
							console.log(i);
							$("#"+optionLocs[i][2]).removeClass("active");
						}
					});
>>>>>>> gh-pages
				}
			};
	
			// run functions
			stickyMenu();
					
			// run function every time you scroll
			$(window).scroll(function() {
				//Get the direction of scroll
				var st = $(this).scrollTop();
				if (st > lastScrollTop) {
				    direction = "down";
				} else if (st < lastScrollTop ){
				    direction = "up";
				}
				lastScrollTop = st;
				stickyMenu(direction);
			});

			///////////////////////////////////////
    
        
        	$(this).on('click', function(e){
				// gets the height of the users div. This is used for off-setting the scroll so th emenu doesnt overlap any content in the div they jst scrolled to
				var selectorHeight = $('.smint').height();   

        		// stops empty hrefs making the page jump when clicked
				e.preventDefault();

				// get id pf the button you just clicked
		 		var id = $(this).attr('id');
				
				// gets the distance from top of the div class that matches your button id minus the height of the nav menu. This means the nav wont initially overlap the content.
				var goTo =  $('div.'+ id).offset().top -selectorHeight;
				
				// Scroll the page to the desired position!
				$("html, body").animate({ scrollTop: goTo }, scrollSpeed);

			});	
		});
	}
})();
