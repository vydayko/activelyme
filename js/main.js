$(document).ready(function() {
    var elements = {};

    elements.$personeMinuse = $('.personeMinuse');
    elements.$personePlus = $('.personePlus');
    elements.$selectLocation = $('.selectLocation')
    elements.$datefilter = $('input[name="datefilter"]');
    elements.$personeQt = $('.personeQt');
    elements.$dropDownMenu = $('.dropDownMenu');
    elements.$individual = $('.individual');
    elements.$sliders = $('.sliders');
    elements.$like = $('.like');
    elements.$aboutUsreadMore = $('.aboutUsreadMore');
    elements.$hiddenAboutText = $('.hiddenAboutText');
    elements.$aboutUsMoreWrapper = $('.aboutUsMoreWrapper');
    elements.$closeMenu = $('.closeMenu');
    elements.$menuToggle = $('#menuToggle');
    elements.$menu = $('#menu');
    elements.$starWrapper = $('.starWrapper');
    elements.$individuslInput = $('.individuslInput');
    elements.$body = $('body');

    var personeQt = 1;
    function checkClassShow(target) {
        if (!elements.$dropDownMenu.is(target)
            && elements.$dropDownMenu.has(target).length === 0) {
          elements.$dropDownMenu.hide();
        }
    };

    function checkNeedShow(target) {
        if (elements.$individual.has(target).length !== 0) {
          elements.$dropDownMenu.show();
        }
    };

    function toggleLike() {
      $(this).toggleClass("activeLike");
    };

    function updatePersoneQt() {
        elements.$personeQt.html(personeQt);
    };

    function minusePersone(e) {
        if (personeQt > 1) {
          personeQt -= 1;
        }
        updatePersoneQt();
    };

    function plusPersone(e) {
        personeQt += 1;
        updatePersoneQt();
    };

    function showeHideDropDown(event) {
        var targetClass = $(event.target).attr('class');
        var isHidden = elements.$dropDownMenu.css('display') === 'none';
        if (isHidden) {
            checkNeedShow(event.target)
        } else {
            checkClassShow(event.target);
        }
    }

    function showMoreAboutUs() {
      elements.$hiddenAboutText.css({'display': 'block'});
      elements.$aboutUsMoreWrapper.css({'display': 'flex'});
      elements.$aboutUsreadMore.css({'display': 'none'})
    }

    function showMobileMenu() {
        elements.$menu.css('display', 'flex');
    }
    function hideMobileMenu() {
        elements.$menu.css('display', 'none');
    }

    function checkStar(e) {
        var allElements = $(this).find('.fa');
        allElements.each(function (i, el) {
            $(el).removeClass('checked');
        })
        var star = $(e.target).data('id');  
        allElements.each(function(i, el) {
            if (i <= star) {
                $(el).addClass('checked');
            }
        })
    }

    function changeGroup () {
        if ($('.individuslInput').prop('checked')) {
            $('.individualCheck').removeClass('active');
            $('.groupCheck').addClass('active');
        } else {
            $('.individualCheck').addClass('active');
            $('.groupCheck').removeClass('active'); 
        }
    }

    // init lb
    elements.$selectLocation.nSelect();

    elements.$sliders.slick({
      dots: true,
      dotsClass: 'sliderNewsDots'
    });

    elements.$datefilter.daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        },
        autoApply: true
    });

    elements.$datefilter.on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    elements.$datefilter.on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
    // end init lb

    elements.$personeMinuse.on('click' , minusePersone);
    elements.$personePlus.on('click' , plusPersone);
    elements.$individuslInput.on('change', changeGroup);

    elements.$body.on('click', showeHideDropDown);
    elements.$like.on('click', toggleLike);
    elements.$aboutUsreadMore.on('click', showMoreAboutUs);

    elements.$menuToggle.on('click', showMobileMenu);
    elements.$closeMenu.on('click', hideMobileMenu);

    elements.$starWrapper.on('click', checkStar)

});
