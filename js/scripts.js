var state = 0;
var value = 64;

$(document).ready(function () {
    
    var getLenght = function () {
        var l = $('.content').height();
        $('.content').css("width", String(l + "px"));
        return l;
    };
    
    var getSquareDesign = function (w, num) {
        var lsq = (w / num);
        var strlsq = String(lsq + "px");
        return strlsq;
    };
    
    var build = function (l, n) {
        var wl = getSquareDesign(l, n);
        var numwl = l / n;
        var position = $('.content').position();
        for (var j = 0; j < n; j ++) {
            for (var i = 0; i < n; i ++) {
                var posl = position.left + i * numwl;
                var post = position.top + j * numwl;
                $('.content').append('<div id="num' + i + 'num' + j + '" class="square"></div>');
                $('#num' + i + 'num' + j).css("left", String(posl) + "px");
                $('#num' + i + 'num' + j).css("top", String(post) + "px");
                $('#num' + i + 'num' + j).css("width", wl);
                $('#num' + i + 'num' + j).css("height", wl);
                $('#num' + i + 'num' + j).css("background-color", "rgb(255, 255, 255)");
                $('#num' + i + 'num' + j).css("opacity", "1");
            };
        };
        if (state === 1){
            $('.square').css("opacity", "0");
            $('.square').css("background-color", "rgb(0, 0, 0)");
        }
    };
    
    /*$('.header').on('click', 'input[value=enter]', function(){
        var value = $('input[name=data]').val();
        if(isNaN(value)){
            alert("Please enter a valid number");
        }
        
        var ln = getLenght();
        build(ln, value);
        
    });*/
    
    $('.container').on('click', '.modes', function(){
       if ($(this).attr('name') === "mode1"){
           state = 0;
       } else if ($(this).attr('name') === "mode2"){
           state = 1;
       } else {
           state = 2;
       }
       $('.square').remove();
        var choice = prompt("You can type a new value");
        $('input[name=data]').val(choice);
        var ln = getLenght();
        build(ln, choice);
    });
    
    $('.content').on('mouseenter', '.square', function(){
        if (state === 2){
            var op1 = Math.floor(Math.random()*100);
            var op2 = Math.floor(Math.random()*100);
            var op3 = Math.floor(Math.random()*100);
            $(this).css("background-color", "rgb(" + op1 + "% ," + op2 + "% ," + op3 + "% )");
        } else if (state === 1) {
            var op = Number($(this).css("opacity")) + 0.1;
            $(this).css("opacity", String(op));
        } else {
            $(this).css("background-color", "rgb(0, 0, 0)");
            $(this).fadeTo("slow", 0.1, function(){
                $(this).css("opacity", "1");
                $(this).css("background-color", "rgb(255, 255, 255)");
            });
        }
    });
    
    $('.container').on('click', 'input[name=cleargrid]', function(){
        $('.square').remove();
        var choice = prompt("You can type a new value");
        $('input[name=data]').val(choice);
        var ln = getLenght();
        build(ln, choice);
    });
    
    
    
    
    
    
});