/* Utilisez .animate() et .css() sur #box pour modifier sa taille et sa couleur. */
$("#resizeBtn").hide("click", function (){
    $("#box").animate({
        width: "100%", opacity: 0.5,
    }).css("background-color","blue")
})