/* Utiliser jQuery pour ajouter et retirer des classes sur le <div> 
lorsque tu cliques sur un bouton.*/
$('#toggleClass').bind('click', function(){
    $("#content").toggleClass("red blue");
})
