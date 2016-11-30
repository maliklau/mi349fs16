$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('stick').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('stick').css({position: 'fixed', top: '0px'});
                        $('stick').css('display', 'block');
                } else {
                        $('stick').css({position: 'static', top: '0px'});
                        $('stickyalias').css('display', 'none');
                }
        });
  });