

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 0) {
            $(".header-section").addClass("nav-down");
        }
        else {
            $(".header-section").removeClass("nav-down");
            if (st <= 0) {
                $(".header-section").removeClass("nav-down");
            }
            else {
                $(".header-section").addClass("nav-down");
            }
        }
        lastScrollTop = st;
    });



     $('.categories-carousel').owlCarousel({
            loop:false,
            margin: 20,
            nav: false,
            mouseDrag  : false,
            // navText: ["<p>prev</p>","<p>next</p>"],
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        })

        $(".form-groups input").focusout(function(){
                if($(this).val() != ""){
                    $(this).addClass("has-content");
                }else{
                    $(this).removeClass("has-content");
                }
            })


        $('.panel-collapse').on('show.bs.collapse', function () {
            $(this).siblings('.panel-heading').addClass('active');
          });
         
          $('.panel-collapse').on('hide.bs.collapse', function () {
            $(this).siblings('.panel-heading').removeClass('active');
          });


          $(document).ready(function(){ 
            $(window).scroll(function(){ 
                if ($(this).scrollTop() > 150) { 
                    $('#scroll').fadeIn(); 
                } else { 
                    $('#scroll').fadeOut(); 
                } 
            }); 
            $('#scroll').click(function(){ 
                $("html, body").animate({ scrollTop: 0 }, 1200); 
                return false; 
            }); 
        });