/*RAPUNZEL */

$(document).ready(function() {


/* Parallax*/

$(window).scroll(function(){
	
	/*Clouds*/
	$("#cloud1").css({
  		top: function(index, value) {
    		return 750 - $(window).scrollTop() * .3;
  		}
  	});	
	$("#cloud2").css({
  		top: function(index, value) {
    		return 500 - $(window).scrollTop() * .5;
  		}
	});		
	$("#cloud3").css({
  		top: function(index, value) {
    		return 850- $(window).scrollTop() * .2;
  		}
	});	
	$("#cloud4").css({
  		top: function(index, value) {
    		return 1120- $(window).scrollTop() * .5;
  		}
	});	
	$("#cloud5").css({
  		top: function(index, value) {
    		return 375- $(window).scrollTop() * .2;
  		}
	});	
	$("#cloud6").css({
  		top: function(index, value) {
    		return 1350- $(window).scrollTop() * .3;
  		}
	});	
	$("#cloud7").css({
  		top: function(index, value) {
    		return 1350- $(window).scrollTop() * .4;
  		}
	});	
	$("#cloud8").css({
  		top: function(index, value) {
    		return 1600- $(window).scrollTop() * .3;
  		}
	});	
	$("#cloud9").css({
  		top: function(index, value) {
    		return 1600- $(window).scrollTop() * .3;
  		}
	});
		
});	
	
				
/*Disappear*/ 

/*Articles*/
			
	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();
	
	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
	
	    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
		}  
		
		var myelement = $('#cloud3');
		var mymessage = $('#description');
		$(window).scroll(function() {
		    if(isScrolledIntoView(myelement)) {
		        mymessage.fadeIn('500'); 
		    }
		     else {
		        mymessage.fadeOut('600')
		    }

		var myelement2 = $('#spaceship');
		var mymessage2 = $('#story');
		    if(isScrolledIntoView(myelement2)) {
		        mymessage2.fadeIn('1000'); 
		    }
		     else {
		        mymessage2.fadeOut('3000')
		    }

		var myelement3 = $('#spaceship2');
		var mymessage3 = $('#story2');
		    if(isScrolledIntoView(myelement3)) {
		        mymessage3.fadeIn('1000'); 
		    }
		     else {
		        mymessage3.fadeOut('3000')
		    }
		    
		var myelement18 = $('#spaceship3');
		var mymessage18 = $('#story3');
		    if(isScrolledIntoView(myelement18)) {
		        mymessage18.fadeIn('1000'); 
		    }
		     else {
		        mymessage18.fadeOut('3000')
		    }
		    
		var myelement19 = $('#spaceship4');
		var mymessage19 = $('#story4');
		    if(isScrolledIntoView(myelement19)) {
		        mymessage19.fadeIn('1000'); 
		    }
		     else {
		        mymessage19.fadeOut('3000')
		    }
	});

});

var rocket = function($rocket,speed){
    beeWidth = $rocket.width();
    
    $rocket.animate({
        "left": "100%"
    }, speed);
};

$(function(){
    rocket($("#rocket"), 32000);
});


var rocket2 = function($rocket2,speed){
    beeWidth = $rocket2.width();
    
    $rocket2.animate({
        "right": "100%"
    }, speed);
};

$(function(){
    rocket2($("#rocket2"), 33000);
});


var rocket3 = function($rocket3,speed){
    beeWidth = $rocket3.width();
    
    $rocket3.animate({
        "left": "100%"
    }, speed);
};

$(function(){
    rocket3($("#rocket3"), 36000);
});


var rocket4 = function($rocket4,speed){
    beeWidth = $rocket4.width();
    
    $rocket4.animate({
        "right": "100%"
    }, speed);
};

$(function(){
    rocket4($("#rocket4"), 39000);
});


var rocket5 = function($rocket5,speed){
    beeWidth = $rocket5.width();
    
    $rocket5.animate({
        "left": "100%"
    }, speed);
};

$(function(){
    rocket5($("#rocket5"),42000);
});

var rocket6 = function($rocket6,speed){
    beeWidth = $rocket6.width();
    
    $rocket6.animate({
        "right": "100%"
    }, speed);
};

$(function(){
    rocket6($("#rocket6"), 48000);
});

