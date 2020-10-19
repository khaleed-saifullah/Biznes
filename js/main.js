$(document).ready(function () {
    $('.portfolio-list').isotope({
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.col-md-4',
            horizontalOrder: false
        }
    });

    $('.portfolio-filter li').on('click', function () {
        $('.portfolio-filter li').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');

        $('.portfolio-list').isotope({
            filter: filterValue,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.col-md-4',
                horizontalOrder: false
            }
        });
    });

    $(window).scroll(function () {
        var ourWindow = $(this).scrollTop();

        if (ourWindow < 500) {
            $('.top-arrow').fadeOut();
        } else {
            $('.top-arrow').fadeIn();
        }

        if (ourWindow > 100) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    });

    $('.top-arrow').hide();

    $('.top-arrow').click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $('.navbar-nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.navbar-nav .nav-link').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;

        $("html,body").animate({
            scrollTop: $(target).offset().top-80
        }, 1000);
    });
});