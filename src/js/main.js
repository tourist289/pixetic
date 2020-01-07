'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('0_o');


    $('.js-img-link').on('click', function () {
        $('.form__img_wrapper').trigger('click');
        $('.form__img_wrapper').on('change', function (e) {

            if(e.target.files.length > 0){
                let filename = e.target.files[0].name;
                $(this).find('.name-holder').text(filename);
                $('.js-img-link').hide();
                $(this).addClass('active');
            } else {
                $(this).find('.name-holder').text('');
                $('.js-img-link').show();
                $(this).removeClass('active');
            }
        });
    });


    // $('.cards__tabs > div').on('click', function () {
    //     let tabId = $(this).attr('data-tab');
    //
    //     $('.cards__wrapper').attr('data-tab', tabId);
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    // });

    document.querySelectorAll('.cards__tabs > div').forEach(element => {
        element.addEventListener('click', function (e) {
            let tabId = this.attributes['data-tab'].value;
            document.getElementsByClassName('cards__wrapper')[0].attributes['data-tab'].value = tabId;
            document.querySelectorAll('.cards__tabs > div').forEach(element => {
                element.classList.remove('active');
            });
            this.classList.add('active');
        })
    })
});


//************  Masked Input
$('.js-masked').mask('+38(999)999-99-99',{placeholder: "+38 (000) 000-00-00"});
$('.js-masked-date').mask('99/9999',{placeholder: "mm/yyyy"});

//============  Masked Input END
