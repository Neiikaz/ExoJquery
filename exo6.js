/* Utilise jQuery pour afficher ou masquer les <div> 
lorsque des boutons spécifiques sont cliqués.*/
$("#show").bind("click", function(){ 
    $(".box").show()
}
)
$("#hide").bind("click", function(){
    $(".box").hide()
}
)
//