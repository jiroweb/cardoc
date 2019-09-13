
//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({ 'max-width': '100%', transition: '0.3s' })
            $('.menu-cnt').css({ width: '500px', transition: '0.4s' });
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({ 'transition-delay': '0.' + time + 's' });
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({ width: '0%' });
            $('body').removeClass('body_fix');
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({ 'opacity': '0', transition: '0.2s' })
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({ width: '0%' });
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({ 'opacity': '0', transition: '0.2s' })
            }
        })
    })
})

//  ================ -menu-click-end- ================


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("filterList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(document).ready(function () {
    $(".scroller").click(function () {
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top + 20 }, 'slow');
    });
});





$('.auto-service__slide--js').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                arrows: false,
                autoplay: true

            }
        },

        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 1,
                arrows: false,

            }
        },

    ]
});





// my-account-details-clicks

$(document).ready(function () {

    activeCreateMenu('crate-account-menu ')
    activeBlockCreate('crate-account-menu ')
    $('.crate-account-btn').on('click', openCreateBlock)


    function activeCreateMenu(element) {
        var prt = $('.' + element);
        var menu_li = $(prt).find('ul li');
        var i = 0;
        $(menu_li).each(function () {
            i++;
            $(this).attr('data-num', i)
            var data_num = $(this).attr('data-num')
            if (data_num == 1) {
                $(this).addClass('active-crate-menu')
            }
        })
    }
    function activeBlockCreate(element) {
        var prt = $('.' + element);
        var menu_li = $(prt).find('ul li');

        $(menu_li).each(function () {
            var this_attr_id = $(this).attr('data-id');
            var this_block = $('#' + this_attr_id);
            if ($(this).hasClass('active-crate-menu')) {
                $(this_block).css({ display: 'block' })

            } else {
                $(this_block).css({ display: 'none' })

            }
            if (this_attr_id == 'create-contact') {
                $('.layer-progress-bar').css({ width: '33.3%' })

            }
        })

    }
    function openCreateBlock() {
        var i = 0;
        $('.crate-account-btn').each(function () {
            i++
            $(this).attr('data-num', i)
        })
        var this_attr = $(this).attr('data-create');
        var menu_li = $('.crate-account-menu ul li');

        $('.close-block-creat').each(function () {
            if (this_attr == $(this).attr('id')) {
                $(this).css({ display: 'block' })
                $(menu_li).each(function () {
                    $(this).removeClass('active-crate-menu')
                    if (this_attr == 'create-employ') {
                        let ddr = $('.crate-account-menu').find("[data-id=create-pasport]")
                        $(ddr).addClass('active-crate-menu')
                    }
                    if (this_attr == $(this).attr('data-id')) {
                        if (!$(this).hasClass('active-crate-menu')) {
                            $(this).addClass('active-crate-menu')
                        }


                    }
                    if (this_attr == 'create-pasport') {
                        $('.layer-progress-bar').css({ width: '66.6%' })
                        $('.change-stape-progress').text('2')

                    }
                    if (this_attr == 'crate-card') {
                        $('.layer-progress-bar').css({ width: '100%' })
                        $('.change-stape-progress').text('3')

                    }

                })

            } else {
                $(this).css({ display: 'none' })
            }
        })
    }

})


// scroll to
$("body").on('click', '.mouser-dun', function (e) {
    var scrollTo = $(this).data('scroll');
    $('html,body').stop().animate({ scrollTop: $('#' + scrollTo).offset().top }, 1000);
    e.preventDefault();
});




//typical-page

$(document).ready(function () {
    addActiveClass('active-tab__ul', 'active-tab__active');
    changeCaseBlock(this, 'active-tab__ul', 'active-tab__blocks', 'active-tab__active', 'click-active__tab');

    $('.click-active__tab').on('click', function () {
        changeActiveClassWithClick(this, 'active-tab__ul', 'active-tab__active')
        changeCaseBlock(this, 'active-tab__ul', 'active-tab__blocks', 'active-tab__active', 'click-active__tab');
    })

    //    add Active Class for case menu
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }

    //  change  active class with click menu case
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).hide();
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');

            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).fadeIn()
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).fadeIn()
                }
            })

        }
    }

})


// mask
$(document).ready(function () {
    $(".phone").mask('+7 999 - 999 - 99 - 99');
});

//  modal
$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out')
    $('body').css({ overflow: 'hidden ' })
    modal.fadeIn()

})

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100)
    $('body').css({ overflow: 'visible ' })


})

$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content')

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({ overflow: 'visible ' })
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({ overflow: 'visible ' })

        }
    })
})

$(document).ready(function () {
    $('.register-sign__in---btn').on('click', function () {
        var prt = $(this).parents('.modal');
        prt.addClass('out')

        setTimeout(function () {
            prt.fadeOut();
        }, 100)
        $('body').css({ overflow: 'visible ' })
    })
})



$(document).ready(function () {

    $('.license-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true,
        }
    });

})


//range



$('.review-rating__date').click(function () {
    $(this).parents('.review-list').toggleClass('active-list');
});


// click  for time 


$(document).ready(function () {
    $('.js-open-time').on('click', function (e) {
        $('.time-change-js-block').fadeToggle(100)
        e.stopPropagation();

    })
    $('.time-change-js-block').on('click', function (e) {
        e.stopPropagation();
    })
    $(document).on('click', function () {
        $('.time-change-js-block').fadeOut();

    })
    $('.change-prev-time').on('click', function () {
        let parent = $(this).parents('.parent-change-time');
        let curent_input = $(parent).find('input');
        if ($(parent).attr('data-date') == 'time') {
            let input_val = $(curent_input).val();
            if (input_val >= 1 && input_val <= 24) {
                input_val--;
                $(curent_input).val(input_val)
                if (input_val <= 9) {
                    $('.selected-hour').text('0' + input_val)
                } else {
                    $('.selected-hour').text(input_val)
                }
            }
            if (input_val == 0) {
                $(curent_input).val(1)
                $('.selected-hour').text('0' + 1)
            }
        } else {
            let input_val = $(curent_input).val();
            console.log(input_val)
            if (input_val >= 1 && input_val <= 60) {
                input_val--;

                $(curent_input).val(input_val)
                if (input_val <= 9) {
                    $('.selected-time').text('0' + input_val)
                } else {
                    $('.selected-time').text(input_val)
                }
            }
            if (input_val == 0) {
                $(curent_input).val(1)
                $('.selected-time').text('0' + 1)
            }
        }
    })
    $('.change-next-time').on('click', function () {

        let parent = $(this).parents('.parent-change-time');
        let curent_input = $(parent).find('input');
        if ($(parent).attr('data-date') == 'time') {
            let input_val = $(curent_input).val();
            if (input_val >= 1 && input_val < 23) {
                input_val++;
                $(curent_input).val(input_val)
                if (input_val <= 9) {
                    $('.selected-hour').text('0' + input_val)
                } else {
                    $('.selected-hour').text(input_val)
                }
            }
        } else {
            let input_val = $(curent_input).val();
            if (input_val >= 0 && input_val <= 59) {
                input_val++;
                $(curent_input).val(input_val)
                if (input_val <= 9) {
                    $('.selected-time').text('0' + input_val)
                } else {
                    $('.selected-time').text(input_val)

                }

            }
        }
    })
    $('.timer-input').on('input', function () {

        let this_parent = $(this).parents('.parent-change-time');
        if ($(this_parent).attr('data-date') == 'time') {
            let max_val = $(this).attr('max');
            if ($(this).val() > Number(max_val)) {
                $(this).val(max_val - 1)
                $('.selected-hour').text(23)

            }
            $('.selected-hour').text($(this).val())

        } else {
            let max_val = $(this).attr('max');
            if ($(this).val() > Number(max_val)) {
                $(this).val(max_val - 1)
                $('.selected-time').text(59)

            }
            $('.selected-time').text($(this).val())

        }

    })

})


//  ================ -UPLOAD-IMG-JS-START- ================



// $(document).ready(function () {
//     $('.current-imput').on('change', function () {
//         $(this).attr('disabled', true)
//         let this_parent = $(this).parents('.add_file');
//         let this_img = $(this_parent).find('.current-img');
//         var file = $(this)[0].files[0];
//         var reader = new FileReader();
//         reader.onload = function () {
//             this_img.attr('style', 'background-image: url(' + reader.result + ') ')
//         }
//         if (file) {
//             reader.readAsDataURL(file);
//         }

//     })
//     $('.add_file').hover(function () {
//         let this_input = $(this).find('input');
//         if ($(this_input).attr('disabled') == 'disabled') {
//             $(this).find('.hover-for-remov-ing').fadeIn(100)
//         }

//     }, function () {
//         $('.hover-for-remov-ing').fadeOut(100)

//     })

//     $('.hover-for-remov-ing').on('click', function (e) {
//         let this_prt = $(this).parents('.add_file');
//         $(this_prt).find('.current-img').removeAttr('style')
//         setTimeout(function () {
//             $(this_prt).find('.current-imput').removeAttr('disabled')

//         }, 500)
//     })

// })


$(document).ready(function () {
    $('.stars_block ul li').on('click', function () {
        $(this).parents('ul').attr('data-true', 'true');

        let parent = $(this).parents('ul').children();
        let thid_data_val = $(this).attr('data-value');
        console.log(thid_data_val)
        $(parent).each(function () {
            if ($(this).hasClass('selected-red')) {
                $(this).removeClass('selected-red')

            }
            if ($(this).hasClass('selected-yellow')) {

                $(this).removeClass('selected-yellow')
            }
            if ($(this).hasClass('selected-green')) {
                $(this).removeClass('selected-green')
            }
        })
        for (var i = 0; i < thid_data_val; i++) {
            let curent_star = $(parent)[i];
            if (thid_data_val == 1) {
                $(curent_star).addClass('selected-red')
            }
            if (thid_data_val > 1 && thid_data_val <= 3) {
                $(curent_star).addClass('selected-yellow')
            }
            if (thid_data_val > 3 && thid_data_val <= 5) {
                $(curent_star).addClass('selected-green')
            }
        }
    })
    $('.stars_block ul li').hover(function () {

        let parent = $(this).parents('ul').children();
        if ($(this).parents('ul').attr('data-true') === 'false') {
            let thid_data_val = $(this).attr('data-value');
            $(parent).each(function () {
                if ($(this).hasClass('selected-red')) {
                    $(this).removeClass('selected-red')
                }
                if ($(this).hasClass('selected-yellow')) {

                    $(this).removeClass('selected-yellow')
                }
                if ($(this).hasClass('selected-green')) {
                    $(this).removeClass('selected-green')
                }
            })
            for (var i = 0; i < thid_data_val; i++) {
                let curent_star = $(parent)[i];
                if (thid_data_val == 1) {
                    $(curent_star).addClass('selected-red')
                }
                if (thid_data_val > 1 && thid_data_val <= 3) {
                    $(curent_star).addClass('selected-yellow')
                }
                if (thid_data_val > 3 && thid_data_val <= 5) {
                    $(curent_star).addClass('selected-green')
                }
            }
        }

    }, function () {
        let parent = $(this).parents('ul').children();
        if ($(this).parents('ul').attr('data-true') === 'false') {
            $(parent).each(function () {
                if ($(this).hasClass('selected-red')) {
                    $(this).removeClass('selected-red')
                }
                if ($(this).hasClass('selected-yellow')) {

                    $(this).removeClass('selected-yellow')
                }
                if ($(this).hasClass('selected-green')) {
                    $(this).removeClass('selected-green')
                }
            })
        }

    })

})








$(document).ready(function () {
    addActiveClass('profile-history-table-menu', 'profile-history-active');
    changeCaseBlockDispNone(this, 'profile-history-table-menu', 'profile-history-table-components', 'profile-history-active', 'click-personal');

    $('.click-personal').on('click', function () {
        changeActiveClassWithClick(this, 'profile-history-table-menu', 'profile-history-active')
        changeCaseBlockDispNone(this, 'profile-history-table-menu', 'profile-history-table-components', 'profile-history-active', 'click-personal');
    })

    //    add Active Class for case menu
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    //  change  active class with click menu case
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    //   change case block with click  case menu

    function changeCaseBlockDispNone($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).fadeOut(100)
        })

        if ($($this).hasClass(menu_link)) {

            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).fadeIn(300);
                }
            })
        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).fadeIn(300);

                }
            })
        }
    }

})


$(document).ready(function () {
    $('.reject-checkbox input').on('click', function () {
        if ($(this).hasClass('open-tetxarea')) {
            $('.hidden-textarea').show(300);
        } else {
            $('.hidden-textarea').hide(300);

        }
    })
})