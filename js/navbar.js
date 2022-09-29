

  
  
 $(function(){
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        $('.thxpage, .main').each(function() {
            var topDistance = $(this).offset().top;
            if ( (topDistance) < scrollTop ) {
                $('#navbar a').css('color',$(this).attr('data-color'));
                $('#navbar h1').css('color',$(this).attr('data-color'));
                $('#navbar i').css('color',$(this).attr('data-color'));
                document.getElementById("navbar").style.background="#fff";
                document.getElementById("navbar").style.boxShadow="black -9px 8px 6px -9px";
          
            }
            if ( (topDistance) == scrollTop ) {
              $('#navbar a').css('color',$(this).attr('data-color-rev'));
              $('#navbar h1').css('color',$(this).attr('data-color-rev'));
              $('#navbar i').css('color',$(this).attr('data-color-rev'));
              document.getElementById("navbar").style.background="transparent";
              document.getElementById("navbar").style.boxShadow="white 0 0 0 0";
  
          }
        });
        
    });
    }) 
  