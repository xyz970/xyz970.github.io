var toogle = $('#toogle');
toogle.click(function (e) {
    var hidden = $("#navbar-default").toggleClass("hidden");
    if (!$("#navbar-default").is(":hidden")) {
        $('#icon').removeClass('fa-bars').addClass('fa-xmark')
    }else{
        $('#icon').removeClass('fa-xmark').addClass('fa-bars')
    }
    // console.log( $("#navbar-default").is(":hidden"));
})

// document.body.onmousemove = function(e) {
//     document.documentElement.style.setProperty (
//       '--x', (
//         e.clientX+window.scrollX
//       )
//       + 'px'
//     );
//     document.documentElement.style.setProperty (
//       '--y', (
//         e.clientY+window.scrollY
//       ) 
//       + 'px'
//     );
//   }
cursor = $('#cursor')
$(document).mousemove(function(event){
    cursor.css(
        {
            'left': event.clientX+'px',
            'top': event.clientY+'px'
        }
    ) 
})
$('a').mouseover(function(){
    cursor.css({
        'width':'70px',
        'height':'70px',
    })
})
$('a').mouseout(function(){
    cursor.css({
        'width':'120px',
        'height':'120px',
    })
})

$('img').mouseover(function(){
    cursor.css({
        'width':'-10px',
        'height':'-10px',
    })
})
$('img').mouseout(function(){
    cursor.css({
        'width':'120px',
        'height':'120px',
    })
})

$('button').mouseover(function(){
    cursor.css({
        'width':'-10px',
        'height':'-10px',
    })
})
$('button').mouseout(function(){
    cursor.css({
        'width':'120px',
        'height':'120px',
    })
})

$('card').mouseover(function(){
    cursor.css({
        'width':'-10px',
        'height':'-10px',
    })
})
$('card').mouseout(function(){
    cursor.css({
        'width':'120px',
        'height':'120px',
    })
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`#home, #about`, {
    interval: 400
})