

//==============弹出层关闭
$('#close_lay').click(function(){
    $('#layer').fadeOut();
});
$('.save').click(function(){
    $('#layer').fadeOut();
});

$(document).on("click",".seeDetail",function(){
    $('#layer').fadeIn();
});
$(".reset").on("click",function(){
    $(".layer_tab").find("input").val("");
    $(".layer_tab").find(".select span").text("请选择");
});
$(".close").on("click",function(){
    $('#close_lay').trigger("click");
});
