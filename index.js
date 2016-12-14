var effection = 60;

// var centerX = 640;
// var centerX = 400;

var star1x = 113;
var star2x = 258;
var star3x = 477;
var star4x = 644;
var star5x = 820;
var star6x = 1027;

var star1y = 469;
var star2y = 252;
var star3y = 303;
var star4y = 154;
var star5y = 288;
var star6y = 353;

var star1Centerx = 263;
var star2Centerx = 408;
var star3Centerx = 627;
var star4Centerx = 468;
var star5Centerx = 970;
var star6Centerx = 1187;

var star1Centery = 629;
var star2Centery = 412;
var star3Centery = 463;
var star4Centery = 284;
var star5Centery = 448;
var star6Centery = 513;

$(document).ready(function(){
$(document).mousemove(function(e) {
	var x = e.originalEvent.x || e.originalEvent.layerX || 0; 
	var y = e.originalEvent.y || e.originalEvent.layerY || 0; 

	// function maxGap(starCenter,newStar){
	// 	var a = starCenter - newStar;
	// 	if(a > 0){
	// 		if(a > effection){
	// 			newStar = starCenter + effection;
	// 		}
	// 	}else{
	// 		if(a < -effection){
	// 			newStar = starCenter - effection;
	// 		}
	// 	}
	// 	return newStar;
	// }

	var newStar1x =  (x - star1Centerx)*0.03 + star1x;
	var newStar2x =  (x + effection - star2Centerx)*0.07 + star2x;
	var newStar3x =  (x - star3Centerx)*0.04 + star3x;
	var newStar4x =  (x + effection - star4Centerx)*0.03 + star4x;
	var newStar5x =  (x - star5Centerx)*0.05 + star5x;
	var newStar6x =  (x + effection - star6Centerx)*0.06 + star6x;

	var newStar1y =  (y - star1Centery)*0.03 + star1y;
	var newStar2y =  (y + effection - star2Centery)*0.07 + star2y;
	var newStar3y =  (y - star3Centery)*0.04 + star3y;
	var newStar4y =  (y + effection - star4Centery)*0.03 + star4y;
	var newStar5y =  (y - star5Centery)*0.05 + star5y;
	var newStar6y =  (y + effection - star6Centery)*0.06 + star6y;

	// newStar1x = maxGap(star1Centerx,newStar1x);
	// newStar2x = maxGap(star2Centerx,newStar2x);
	// newStar3x = maxGap(star3Centerx,newStar3x);
	// newStar4x = maxGap(star4Centerx,newStar4x);
	// newStar5x = maxGap(star5Centerx,newStar5x);
	// newStar6x = maxGap(star6Centerx,newStar6x);


	// newStar1y = maxGap(star1Centery,newStar1y);
	// newStar2y = maxGap(star2Centery,newStar2y);
	// newStar3y = maxGap(star3Centery,newStar3y);
	// newStar4y = maxGap(star4Centery,newStar4y);
	// newStar5y = maxGap(star5Centery,newStar5y);
	// newStar6y = maxGap(star6Centery,newStar6y);

	$(".star1Down").css({
		top: newStar1y,
		left: newStar1x
	});
	$('.star2Down').css({
		top: newStar2y,
		left: newStar2x
	});
	$('.star3Down').css({
		top: newStar3y,
		left: newStar3x
	});
	$('.star4Down').css({
		top: newStar4y,
		left: newStar4x
	});
	$('.star5Down').css({
		top: newStar5y,
		left: newStar5x
	});
	$('.star6Down').css({
		top: newStar6y,
		left: newStar6x
	});
	// var newStar1x = x
}); 
});