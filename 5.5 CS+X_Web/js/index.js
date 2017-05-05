//產生1~n的亂數
var rand = function(n) {
    var rlt = Math.floor(Math.random() * n) + 1;
}


var fnChange = function() {
    var index = rand(10);
    $('#ection2> div.image > img').attr('src', './imgae/0' + index + '.jpg')
}


$('#change').on('click', fnChange);