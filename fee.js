
$(document).ready(function () {
    $("button").on("click", calculate);
});
function calculate()
{
    //Gather all input

    let fName =  $("#fname").val();
    let lName =  $("#lname").val();
    let rankColor = $("input[name=rank]:checked").data("color")
    let rank = $("input[name=rank]:checked").data("value")


    // OUTPUT!
    $("span#rankName").text(`Hello ,${rank} ${fName}  ${lName}`);
    $("span#rankName").css("background-color", rankColor);

    $(".output2").show();
}
