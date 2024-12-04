/* Utilisez les événements .hover() pour agrandir le carré au survol et le réduire lorsque la souris quitte. */
// $('#hoverBox').bind('mouseenter', function(){
//    $(this).css('transform', 'scale(1.5)');
// }).bind('mouseleave', function(){
//     $(this).css('transform', 'scale(1)');
// });

$("#hoverBox").mouseover( () => 
    {
        $("#hoverBox").animate({
            width: "200px", opacity: 0.5 , height: "120px"
        })
    })
    
    $("#hoverBox").mouseout( () =>
    {
        $("#hoverBox").animate({
            width: "100px", opacity: 0.5 , height: "100px"
        })
    })