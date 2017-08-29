/**
 * Created by Ong-King on 2017/8/27.
 */

$('#close_lay').click(function(){
    $('#layer').fadeOut();
});
$('.save').click(function(){
    $('#layer').fadeOut();
});
$(document).on("click","#add",function(){
    $('#layer').fadeIn();
});