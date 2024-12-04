/* Utilisez .animate() pour déplacer le carré de 300 pixels vers la droite. */
$("#moveBtn").on("click", () =>
    {
        $("#square").animate({
            left: "300px" ,
        },1000);
    })