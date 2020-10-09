$(document).ready(function () {
    let modal = $('.modal');
    //modal open
    $('.button__cart').click(function(event){
        modal.addClass('modal--active');
        $('body').addClass('lock');
    });
    //modal close
    $('.modal__close').click(function(event){
        modal.removeClass('modal--active');
        $('body').removeClass('lock');
    });
    //modal close on esc
    $(document).keydown(function(event) { 
        if (event.keyCode == 27) { 
        modal.removeClass('modal--active');
        $('body').removeClass('lock');
        }
    });
    //modal close on click on outside of the modal dialog 
    modal.click(function(e) {
        if ($(e.target).closest('.modal__dialog').length == 0){
            $(this).removeClass('modal--active');
            $('body').removeClass('lock');					
        }
    });
    //wow init 
    new WOW().init();
});