$(".submenu").click(function(){
    /*.slideToggle(): muestra y oculta el submenu*/
    $(this).children("ul").slideToggle();
})

$("ul").click(function(p){
    p.stopPropagation();
})