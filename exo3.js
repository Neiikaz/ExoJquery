// Utiliser jQuery pour animer le <div> lorsqu'un bouton est cliqué.

$("#animate").bind("click", function(){
    $("#box").animate({width:"100%", opacity: 0.5,},1000);
    $("#box").animate({height:"100vh",},1000);
}
)