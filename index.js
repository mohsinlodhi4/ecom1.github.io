$("document").ready(()=>{
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items: 1,
        loop:true
    });
    $("#top-sale .owl-carousel").owlCarousel(
        {
            dots:false,
            loop: true,
            nav:true,
            responsive:{
                0:{items:1},
                600:{items:3},
                1000:{items:5}
            }
        }
    );

        var grid = $(".grid").isotope({
            itemSelector:".grid-item",
            layoutMode:"fitRows"
        });
        $(".button-group button").click(function(){
            var filterVar = $(this).attr("data-filter");
            grid.isotope({filter:filterVar});
        });

        // Old Method
        // $(".button-group").on("click", "button", function(){
        //     var filterVar = $(this).attr("data-filter");
        //     grid.isotope({filter:filterVar});
        // });

        // New Supplements
        $("#new-supplements .owl-carousel").owlCarousel(
            {
                dots:true,
                loop: true,
                nav:false,
                responsive:{
                    0:{items:1},
                    600:{items:3},
                    1000:{items:5}
                }
            }
        );

        // Qty Section
            let qty_up = $(".qty .qty_up");
            let qty_down = $(".qty .qty_down");
            let input = $(".qty .qty_input");

            qty_up.click(function(e){
                if(input.val()>=1 && input.val()<=9){
                    input.val(function(i, oldVal){
                        return ++oldVal;
                    });
                }
            });
            qty_down.click(function(e){
                if(input.val()>1){
                    input.val(function(i, oldVal){
                        return --oldVal;
                    });
                }
            });

        // !Qty Section
});