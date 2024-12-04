// Utiliser jQuery pour modifier le texte à l'intérieur du <div> 
// lorsque tu cliques sur un bouton.
$("#changeText").bind("click", function(){
    let modif = prompt('Veuilliez écrire ici votre nouveau mot');
    $("#content").text(modif);
})
