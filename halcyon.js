$(document).ready(function(){
    
    $('.menu').click(function(){
        $(this).toggleClass('x');
        $('ul').fadeToggle();
    }); 
    
    $('li a').click(function(){
        $('ul').fadeOut();
        $('.menu').toggleClass('x');
    })
    
});