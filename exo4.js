/* Utiliser jQuery pour récupérer 
les valeurs des champs lorsque le formulaire est soumis, 
et affiche un message avec ces valeurs*/
$("#myForm").bind("click", function(event){
    event.preventDefault();
    let name =$("#name").val();
    let age =$("#age").val();
    $("#result").html(" Le nom est " + name + " et l'age est " + age + " ans");
}
)
