/**
 * Created by lxl on 2017/8/26.
 */
//==============弹出层关闭
$('#close_lay').click(function(){
    $('#layer').fadeOut();
});
$('.save').click(function(){
    $('#layer').fadeOut();
});

$('#add').click(function(){
    $('#layer').fadeIn();
});