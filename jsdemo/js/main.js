for (var increment = 0; increment < 200; increment++){
    console.log(increment);
    $("body").append("<div class='box'></div>")
}

var rounding = 0;

$(".box").each(function(){
    console.log("I found a box");
    console.log(rounding);
    var radius = rounding + "px";
    $(this).css("border-radius",radius);
    rounding++;
});

$(".box1").click(function(){
    $(this).css("background-color","blue");
});

$(".box2").click(function(){
    $(this).css("background-color","blue");
});