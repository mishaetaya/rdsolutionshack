$('header .subheader h3 span a').click(function(){

    var tag = $("#submission");
    $('html,body').animate({scrollTop: tag.offset().top}, 'swing');


});

