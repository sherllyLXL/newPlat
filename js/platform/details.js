/**
 * Created by Ong-King on 2017/8/29.
 */
$(document).on('click','.do',function () {
    $('#layer').fadeIn();
});
$('#close_lay').click(function(){
    $('#layer').fadeOut();
});
$('.save').click(function(){
    $('#layer').fadeOut();
});

$(document).on('click','.main_tit a',function (){
    var url = $(this).attr('href');
    var content =  top.document.getElementById("content");
    content.src = url;
    return false;
});
