/*Utiliser jQuery pour charger du contenu à partir d'un fichier texte externe 
lorsque le bouton est cliqué.*/
$("loadContent").bind("click", function(){
    $("#content").load("texte.txt");
})
