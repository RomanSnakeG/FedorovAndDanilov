$(document).ready(function(){
    $(".header-list").scrollspy({
        animate: true,
    });
    $('.stages-conteiner--slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.experience-blocks--slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.distinctive-features--content__block-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        responsive: [
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    dots: true,
                    fade: false
                }
            }
        ]
    });
    $('.partners-block--slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            }, 
            {
                breakpoint: 550,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    variableWidth: true 
                }
            },
            {
                breakpoint: 401,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    variableWidth: true 
                }
            }
        ]
    });
    $('.team-peaple--slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 701,
                settings: {
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    variableWidth: true                
                }
            },
            {
                breakpoint: 570,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true ,
                    arrows: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true ,
                    arrows: false
                }
            }
        ]
    });
    $('.works-block--slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }, 
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.process-content--blocks__slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.team-consultation--slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });
    $('.taem-icons--slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.questions-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    

    /** fixed menu */
    const nav = $('.header-wrapper');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

    /** Mob menu toogle */
    const overlay = jQuery('.overlay');
    const catalog = jQuery('.catalog');
    const catalogDesctop = jQuery('.catalog-desctop');
    const btnBurger = jQuery('.btn-burger');
    const btnBurgerDesctop = jQuery('.btn-burger--desctop');
    const btnClose = jQuery('.btn-close');
    const ham2 = jQuery('.ham2');
    btnBurger.click(function() {
            catalog.toggleClass('open');
            overlay.toggleClass('active');
    });
    btnBurgerDesctop.click(function() {
        catalogDesctop.toggleClass('open');
        overlay.toggleClass('active');
    });
    overlay.click(function() {
        if ($(window).width() < 991) {
            overlay.toggleClass('active');
            catalog.toggleClass('open');
        } else {
            catalogDesctop.toggleClass('open');
            overlay.toggleClass('active');
        }
    });
    btnClose.click(function() {
        if ($(window).width() < 991) {
            catalog.toggleClass('open');
            overlay.toggleClass('active');
        } else {
            catalogDesctop.toggleClass('open');
            overlay.toggleClass('active');
        }
        ham2.addClass('.active');
        
    });

    /** phone block-header toggle */
    const headerMobailPhoneBlock = $('.header-mobail--phone__block');
    const headerLogo = $('.header-logo');
    headerMobailPhoneBlock.hide()
    $('.header-mobail--phone__btn').click(function(e) {
        headerMobailPhoneBlock.toggle();
        let display =  $('.header-mobail--phone__block').css('display');
        if (display != 'none' && $(window).width() < 500) {
            headerLogo.hide();
        } else {
            headerLogo.show();
        }

    });

    /** process toggle */
    const processItem = $('.process-item');
    const processContentBlock = $('.process-content--block');

    processItem.click(function(e) {
        e.preventDefault();
        const target = e.target;
        if (!e.target.classList.contains('process-item--active')) {
            processItem.each(function(i, elem) {
                if (elem.classList.contains('process-item--active')) {
                    elem.classList.remove('process-item--active');
                }
            });
            e.target.classList.add('process-item--active');
        }

        Array.from(processContentBlock).forEach(elem => {
            if (target.dataset.process == elem.dataset.process) { 
                elem.classList.add('process-content--block__active');
            } else {
                elem.classList.remove('process-content--block__active');
            }
        });
        
    });

    /** accordeon toggle*/
    const accordeonContent = $('.accordeon-content');
    const accordeonTitle = $('.accordeon-title');
    accordeonContent.hide().prev().click(function(e) {
        const target = e.target;
        accordeonContent.not(this).slideUp();
        if (target.classList.contains('active')) {
            target.classList.remove('active');
        } else {
            accordeonTitle.each(function(i, elem) {
                if (elem.classList.contains('active')) {
                    elem.classList.remove('active');
                }
            });
            target.classList.add('active');
        }
        
        $(this).next().not(':visible').slideDown();
    });


    /** popup toggle */
    const popup = $('.popup');
    const popupPhoneBtn = $('.popup-phone--btn');
    const popupPhoneBtnIcon = $('.popup-phone--btn__icon');
    const popupEmailBtn = $('.popup-email--btn');
    const popupEmailBtnIcon = $('.popup-email--btn__icon');
    const popupPhone = $('.popup-phone');
    const popupMail = $('.popup-mail');
    popupMail.hide();
    popup.click(function(e) {
        const target = e.target;
        if (target.classList.contains('popup-email--btn') || 
        target.classList.contains('popup-email--btn__icon') || 
        target.classList.contains('icon-mail')) {
            popupPhone.hide();
            popupMail.show();
            $('.popup-conteiner').css("height", "430px");
            popupPhoneBtn.removeClass('active-btn');
            popupPhoneBtnIcon.removeClass('active-btn');
            popupEmailBtn.addClass('active-btn');
            popupEmailBtnIcon.addClass('active-btn');
        } else if (target.classList.contains('popup-phone--btn') || 
        target.classList.contains('popup-phone--btn__icon') ||
        target.classList.contains('icon-phone')) {
            popupPhone.show();
            popupMail.hide();
            $('.popup-conteiner').css("height", "300px");
            popupPhoneBtn.addClass('active-btn');
            popupPhoneBtnIcon.addClass('active-btn');
            popupEmailBtn.removeClass('active-btn');
            popupEmailBtnIcon.removeClass('active-btn');
        } 
    });

    /** mask phone */
    $("#phone").mask("+7(999) 999-9999");


    /** hover conflict-resolution */
    const conflictResolutionContentBlock = $('.conflict-resolution--content__block');
    const conflictResolutionImg = $('.conflict-resolution--img');
    const conflictResolutionImgWhite = $('.conflict-resolution--img__white');
    conflictResolutionImgWhite.hide();
    conflictResolutionContentBlock.hover(function(e) {
        conflictResolutionImgWhite.toogle();
        conflictResolutionImg.toggle();
    });


    /** arrow up */
    const button = $('#button-up');	
    $(window).scroll (function () {
        if ($(this).scrollTop () > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });	 
    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });	
});

