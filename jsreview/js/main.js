$("body").css("background-color","pink");

var clicks = 0;

$("botton").click(function(){
    clicks++;
    $("body").css("background-color","yellow");
    console.log("hello world");
});


var counter = 0;
for (var i = 0; i < 10000; i++) {
    $("body").append("<div class='dot'></div>")
}

$(".dot").each(function() {
    counter++;
    console.log("found a dot..")
    $(this).html(counter);
});

$(".dot").click(function() {
    $(this).toggleClass("hey");
});