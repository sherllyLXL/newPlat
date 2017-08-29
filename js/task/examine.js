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

$(document).on("click",".agree_cash",function(){
    var strTit = "请确认已打款";
    var strContent = "同意后用户端会显示【已到账】，请谨慎操作！";
    agree(this,strTit,strContent,function (ele) {
        alert('这是同意的回调')
    })
});