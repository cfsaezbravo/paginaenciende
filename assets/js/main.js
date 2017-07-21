window.addEventListener('scroll', function (e) {

        if (document.documentElement.scrollTop || document.body.scrollTop > 50) {
            $('nav').attr('style', 'background-color: rgba(175, 60, 229, 0.3)');
            }
        else{
        	$('nav').attr('style', 'background-color: transparent');
        }
    });

$(".button-collapse").sideNav();

