var x_moins_1 = 0;
var y_moins_1 = 0;
var translate_X = 0;
var translate_Y = 0;
var head_X = 0;
var head_Y = 0;

function getMouse() {
    var x = event.clientX;
    var y = event.clientY;
    console.log(x+" _ "+y)

    if (x_moins_1 == 0) {
        x_moins_1 = x;
        y_moins_1 = y;
    };

    var panoramique = document.getElementById('panoramique');
    var panoramique_style = window.getComputedStyle(panoramique);
    panoramique_X = panoramique_style.getPropertyValue('margin-left');
    panoramique_Y = panoramique_style.getPropertyValue('margin-top');

    var headline = document.getElementById('headline');
    var headline_style = window.getComputedStyle(headline);
    headline_X = headline_style.getPropertyValue('margin-left');
    headline_Y = headline_style.getPropertyValue('margin-top');

    if (x < x_moins_1){
        translate_X -= 0.1;
        head_X += 0.5;
        panoramique.style.marginLeft = translate_X+"px";
        headline.style.marginLeft = head_X+"px";
        x_moins_1 = x;
    }else if(x > x_moins_1){
        translate_X += 0.1;
        head_X -= 0.5;
        panoramique.style.marginLeft = translate_X+"px";
        headline.style.marginLeft = head_X+"px";
        x_moins_1 = x;

    }

    if (y < y_moins_1){
        translate_Y -= 0.1;
        head_Y += 0.5;
        panoramique.style.marginTop = translate_Y+"px";
        headline.style.marginTop = head_Y+"px";
        y_moins_1 = y;
    }else if(y > y_moins_1){
        translate_Y += 0.1;
        head_Y -= 0.5;
        panoramique.style.marginTop = translate_Y+"px";
        headline.style.marginTop = head_Y+"px";
        y_moins_1 = y;

    }


}