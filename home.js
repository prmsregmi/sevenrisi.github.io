	$('#wrapper').fullpage();

	var interval = 1;
	setInterval(function(){
   if(interval == 4){
       $('#mysliderul').fadeOut("slow", function(){});
       interval = 1;
   }
   interval = interval+1;
    console.log(interval);
},1000);

$(document).bind('mousemove keypress', function() {
    $('#mysliderul').fadeIn("slow", function(){});
    interval = 1;
});


//onclick contact popup
$("#contact" ).click(function() {

    var toggle=document.getElementById("contactpopup");
    
    if(toggle.style.visibility== "visible"){

    toggle.style.visibility = "hidden";
    $(this).css({   'transform':'rotate(0deg)',
                    '-webkit-transform': 'rotate(0deg)',
                    '-o-transform': 'rotate(0deg)',
                    '-ms-transform': 'rotate(0deg)',
                    '-moz-transform': 'rotate(0deg)',
                    'transition': '0.6s ease all',
                    '-webkit-transition': '0.6s ease all',
                    '-o-transition': '0.6s ease all',
                    '-moz-transition': '0.6s ease all',
                    '-ms-transition': '0.6s ease all'
        });
    }
    else{
        toggle.style.visibility = "visible";
        $(this).css({   'transform':'rotate(180deg)',
                    '-webkit-transform': 'rotate(180deg)',
                    '-o-transform': 'rotate(180deg)',
                    '-ms-transform': 'rotate(180deg)',
                    '-moz-transform': 'rotate(180deg)',
                    'transition': '0.6s ease all',
                    '-webkit-transition': '0.6s ease all',
                    '-o-transition': '0.6s ease all',
                    '-moz-transition': '0.6s ease all',
                    '-ms-transition': '0.6s ease all'
        });
    }
    
});

