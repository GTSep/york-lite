!function(a){"use strict";function b(){var b=g.imagesLoaded(function(){b.isotope({itemSelector:".project",layoutMode:"masonry",masonry:{columnWidth:50}})});b.infinitescroll({errorCallback:function(b,c){a(".cta").addClass(f),a(".cta-spacer").addClass(f)},navSelector:"#page_nav",nextSelector:"#page_nav a",itemSelector:".project",loading:{finishedMsg:"No more pages to load."}},function(c){var d=a(c).addClass("js--loading");d.imagesLoaded(function(){d.each(function(a){setTimeout(function(){d.eq(a).addClass("js--loaded")},150*a)}),b.isotope("appended",d,!0)})})}function c(){if(e.hasClass("error404")){var a=document.querySelector(".animation-404 path"),b=a.getTotalLength();a.style.transition=a.style.WebkitTransition="none",a.style.strokeDasharray=b+" "+b,a.style.strokeDashoffset=b,a.getBoundingClientRect(),a.style.transition=a.style.WebkitTransition="stroke-dashoffset 6s ease-in-out",a.style.strokeDashoffset="0"}}function d(){var b=a(window),c=a(window).height(),d=a(".sidebar--section"),e="js--scroll";b.width()>768&&d.children().each(function(){c<a(this).innerHeight()?a(this).parent().addClass(e):a(this).parent().removeClass(e)})}var e=a("body"),f="js--active",g=a("#projects");e.fitVids(),a(document).ready(function(){d(),a(".animsition").animsition({inClass:"fade-in-up-sm",outClass:"fade-out-up-sm",inDuration:800,outDuration:600,linkElement:'a:not([target="_blank"]):not(.lightbox-link):not(.input-control submit)',loading:!1,unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"]}),a(".mobile-menu-toggle").on("click",function(){e.toggleClass("nav-open")}),a("#nav-close").on("click",function(){e.toggleClass("nav-open")}),a(".subscribe-field").bind("focus blur",function(){a(this).closest(".mc4wp-subscribe-wrapper").toggleClass("js--focus")}),a(".subscribe-field").hover(function(){a(this).closest(".mc4wp-subscribe-wrapper").toggleClass("js--hover")})}),a(window).load(function(){e.is(".page-template-template-portfolio-php, .search, .blog, .archive")&&b(),c()}),a(window).resize(function(){d()})}(jQuery);