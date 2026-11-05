jQuery(document).ready(function(){$(function(){$(document).on('scroll',function(){if($(window).scrollTop()>100){$('.pitw_scrollTop').addClass('show');}else{$('.pitw_scrollTop').removeClass('show');}});$('.pitw_scrollTop').on('click',scrollToTop);});function scrollToTop(){verticalOffset=typeof(verticalOffset)!='undefined'?verticalOffset:0;element=$('body');offset=element.offset();offsetTop=offset.top;$('html, body').animate({scrollTop:offsetTop},500,'linear');}});
jQuery(".search-btn").click(function(){$(this).parent().toggleClass("open-search");});
function openSearch(){document.getElementById("mySearch").style.top="0px";}
function closeSearch(){document.getElementById("mySearch").style.top="-130px";}
function openNav(){document.getElementById("PrimeItWorlSidebar").style.left="0%";document.body.style.overflow="hidden";}
function closeNav(){document.getElementById("PrimeItWorlSidebar").style.left="-100%";document.body.style.overflow="auto";}
jQuery('.container, header, nav, footer').on('click',function(){if(parseInt($('#PrimeItWorlSidebar').css('left'))>=0){closeNav();}});
jQuery('.hamburger-container .pitw_sbbody .pitw_sbnav li').on('click',function(){$(this).find('ul.sub-menu').slideToggle();$(this).siblings().find('ul.sub-menu').slideUp();$(this).find('span').toggleClass('adcls');$(this).siblings().find('span').removeClass('adcls');});
jQuery(".hdTopAdv_close").click(function(){$(this).parent().toggleClass("closedAdv");});

jQuery(document).ready(function(){
	jQuery(".pitw_video_slider").owlCarousel({
        items:5,
		autoplay:true,
		autoplayHoverPause:true,
		loop:true,
		nav:true,
		dots:false,
		margin: 15,
		smartSpeed:1200,
		responsive:{
			0:{
				items:2,
                margin: 10,
			},
			576:{
				items:2,
                margin: 10,
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			},
			1199:{
				items:5,
			}
		},
        navText: ["<i class='las la-angle-left'></i>","<i class='las la-angle-right'></i>"]
    });
});
jQuery(document).ready(function () {
	jQuery('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav',
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay:true,
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
            }
            },
            {
            breakpoint: 575,
            settings: {
                slidesToShow: 4,
            }
            }

        ]
    });
});
jQuery("img.lazyload").lazyload();
// jQuery('.modal-live').magnificPopup({type:'inline',closeBtnInside:true,autoFocusLast:true,focus:".modal-titles",});
// jQuery('.popupVideo').magnificPopup({type:'iframe',mainClass:'mfp-fade',});
jQuery('.photoGallery').magnificPopup({type:'image',mainClass:'mfp-with-zoom',gallery:{enabled:true},zoom:{enabled:true,duration:500,easing:'ease-in-out',opener:function(openerElement){return openerElement.is('img')?openerElement:openerElement.find('img');}}});

jQuery(document).ready(function($){
    var originalFontSize = $('.single_content').css('font-size');
    var increaseButton = $('#increase-font-size');
    var decreaseButton = $('#decrease-font-size');
    var currentFontSize = parseInt(originalFontSize, 10);

    increaseButton.on('click', function() {
        currentFontSize += 1;
        $('.single_content').css('font-size', currentFontSize + 'px');
    });

    decreaseButton.on('click', function() {
        currentFontSize -= 1;
        $('.single_content').css('font-size', currentFontSize + 'px');
    });
});

var wow = new WOW(
    {
      boxClass:     'wow',      
      animateClass: 'animated', 
      offset:       0,   
      mobile:       true,      
      live:         true,  
      callback:     function(box) {
      
      },
      scrollContainer: null 
    }
  );
  wow.init();

jQuery(document).ready(function($) {
    var permalinkElement = $('.copy-permalink');
  
    permalinkElement.on('click', function(event) {
      event.preventDefault();
      var tempTextarea = document.createElement('textarea');
  
      tempTextarea.value = permalinkElement.attr('href');
  
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      showNotification('Permalink copied to clipboard!', 2000);
    });
  
    function showNotification(message, duration) {
  
      var notification = document.createElement('div');
      notification.textContent = message;
  
      notification.style.position = 'fixed';
      notification.style.bottom = '20px';
      notification.style.left = '50%';
      notification.style.transform = 'translateX(-50%)';
      notification.style.padding = '10px 20px';
      notification.style.background = '#333';
      notification.style.color = '#fff';
      notification.style.borderRadius = '4px';
  
      document.body.appendChild(notification);
  
      setTimeout(function() {
        document.body.removeChild(notification);
      }, duration);
    }
});
  

// Map JS
$('select[name="bd_division"]').on('change',function(){var sel_div=$(this).val();$('select[name="bd_district"] option').css('display','none');$('select[name="bd_district"] .dist-'+sel_div).css('display','block');});$('select[name="bd_district"]').on('change',function(){var sel_div=$(this).val();$('select[name="bd_thana"] option').css('display','none');$('select[name="bd_thana"] .thana-'+sel_div).css('display','block');});$('.local-search-btn').on('click',function(){var div_data='',dist_data='';if($('select[name="bd_division"] option:selected').attr('data-val'))	div_data=$('select[name="bd_division"] option:selected').attr('data-val');if($('select[name="bd_district"] option:selected').attr('data-val'))	dist_data=$('select[name="bd_district"] option:selected').attr('data-val');var thana_data=$('select[name="bd_thana"]').val();var URL='location';if(div_data==''){alert('please select the division first');$('select[name="bd_division"]').focus();return false;}	URL=URL+'/'+div_data;if(dist_data!='')URL=URL+'/'+dist_data;if(thana_data!='')URL=URL+'/'+thana_data;var getUrl='/';window.location.href=getUrl+URL;return false;});$(document).ready(function(){function blink_text(){$('.blink').fadeOut(1000);$('.blink').fadeIn(1000);}	setInterval(blink_text,1000);
});

// Atchive JS
$('select[name="ar_year"]').on('change',function(){var sel_year=$(this).val();$('select[name="ar_month"] option').css('display','none');$('select[name="ar_month"] .dist-'+sel_year).css('display','block');});$('select[name="ar_month"]').on('change',function(){var sel_year=$(this).val();$('select[name="ar_day"] option').css('display','none');$('select[name="ar_day"] .thana-'+sel_year).css('display','block');});$('.ar-search-btn').on('click',function(){var year_data='',month_data='';if($('select[name="ar_year"] option:selected').attr('data-val'))year_data=$('select[name="ar_year"] option:selected').attr('data-val');if($('select[name="ar_month"] option:selected').attr('data-val'))month_data=$('select[name="ar_month"] option:selected').attr('data-val');var day_data=$('select[name="ar_day"]').val();var URL='news/date';if(year_data==''){alert('please select the division first');$('select[name="ar_year"]').focus();return false;}URL=URL+'/'+year_data;if(month_data!='')URL=URL+'/'+month_data;if(day_data!='')URL=URL+'/'+day_data;var getUrl='/';window.location.href=getUrl+URL;return false;});$(document).ready(function(){function blink_text(){$('.blink').fadeOut(1000);$('.blink').fadeIn(1000);}setInterval(blink_text,1000);
});