(function(a){var c=a("nav").outerHeight();a(".navbar-toggler").on("click",function(){a("#mainNav").hasClass("navbar-reduce")||a("#mainNav").addClass("navbar-reduce")});a(window).on("load",function(){a("#preloader").length&&a("#preloader").delay(100).fadeOut("slow",function(){a(this).remove()})});a(window).scroll(function(){100<a(this).scrollTop()?a(".back-to-top").fadeIn("slow"):a(".back-to-top").fadeOut("slow")});a(".back-to-top").click(function(){a("html, body").animate({scrollTop:0},1500,"easeInOutExpo");
return!1});a(".scrolltop-mf").on("click",function(){a("html, body").animate({scrollTop:0},1E3)});a('a.js-scroll[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);b=b.length?b:a("[name="+this.hash.slice(1)+"]");if(b.length)return a("html, body").animate({scrollTop:b.offset().top-c+5},1E3,"easeInOutExpo"),!1}});a(".js-scroll").on("click",function(){a(".navbar-collapse").collapse("hide")});
a("body").scrollspy({target:"#mainNav",offset:c});a(window).trigger("scroll");a(window).on("scroll",function(){50<a(window).scrollTop()?(a(".navbar-expand-md").addClass("navbar-reduce"),a(".navbar-expand-md").removeClass("navbar-trans")):(a(".navbar-expand-md").addClass("navbar-trans"),a(".navbar-expand-md").removeClass("navbar-reduce"));1200<a(window).scrollTop()?a(".scrolltop-mf").fadeIn(1E3,"easeInOutExpo"):a(".scrolltop-mf").fadeOut(1E3,"easeInOutExpo")});if(1==a(".text-slider").length){var d=
a(".text-slider-items").text();new Typed(".text-slider",{strings:d.split(","),typeSpeed:80,loop:!0,backDelay:1100,backSpeed:30})}})(jQuery);