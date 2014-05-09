function recentWork(){
	"use strict";
    $('#main').slideUp('slow');
    $('#quote').slideUp('slow');
    $('#friends').slideUp('slow');
    $('#friends-logos').slideUp('slow');
    $('#projects').slideDown('slow');
    $('#projects2').slideDown('slow');
    
    $('#work').slideDown('slow');

}

function moreWork(){
	"use strict";
 
    $('#projects').slideDown('slow');
    $('#projects2').slideDown('slow');
    
  

}

function resume(){
	"use strict";
	$('#quote').slideDown('slow');
	$('#story').slideDown('slow');
	$('#main').slideUp('slow');
	$('#projects').slideUp('slow');
	$('#projects2').slideUp('slow');
    $('#work').slideUp('slow');

	$('#friends').slideUp('slow');
    $('#friends-logos').slideUp('slow');
}

function contact(){
	"use strict";
	$('#quote').slideDown('slow');
	$('#main').slideUp('slow');
	$('#projects').slideUp('slow');
	$('#projects2').slideUp('slow');
    $('#work').slideUp('slow');
	$('#friends').slideUp('slow');
    $('#friends-logos').slideUp('slow');
}

function showAll(){
	"use strict";
	$('#quote').slideDown('slow');
	$('#main').slideDown('slow');
	$('#projects').slideDown('slow');
	$('#projects').slideUp('slow');

    $('#work').slideDown('slow');
	$('#friends').slideDown('slow');
    $('#friends-logos').slideDown('slow');
}

$('#story').hide();
$('#projects2').hide();

