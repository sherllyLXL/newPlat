
//=====下拉列表=====
$('.select').on('click', '.placeholder', function(e) {
    var parent = $(this).closest('.select');
    if (!parent.hasClass('is-open')) {
        parent.addClass('is-open');
        $('.select.is-open').not(parent).removeClass('is-open');
    } else {
        parent.removeClass('is-open');
    }
    e.stopPropagation();
}).on('click', 'ul>li', function() {
    var parent = $(this).closest('.select');
    parent.removeClass('is-open').find('.placeholder').text($(this).text());
});
 
$('body').on('click', function() {
    $('.select.is-open').removeClass('is-open');
});
// 删除按钮操作
$(document).on("click",".del_ipt",function(){
    // del(this);
    del(this,function () {
            alert('这是删除的回调')
    })

});
function del(obj,yes) {
    if($(obj).parents(".warp").find(".layer_del").length !=0) {
        $(obj).parents(".warp").find(".layer_del").remove();
    }
    if($(obj).parents(".warp").length !=0) {
        $(obj).unwrap();
    }
    $(obj).wrap("<div class='warp'></div>");
    $(".warp").append('<div class="layer_del"> ' +
        '<div class="layer_del_tit">删除</div> ' +
        '<div class="layer_del_content"> ' +
        '<input type="button" class="sbtn cb del_cancel" value="取消"> ' +
        '<input type="button" class="sbtn violet del_sure" value="确定"> ' +
        '</div> ' +
        '</div>');
    $(".del_cancel").on("click",function(){
        $(obj).parents(".warp").find(".layer_del").remove();
        $(obj).unwrap();
    });
    $(".del_sure").on("click",function(){
        if(yes) {
            yes(this);
            $(obj).parents(".warp").find(".layer_del").remove();
            $(obj).unwrap();
        }else {
            $(obj).parents(".warp").find(".layer_del").remove();
            $(obj).unwrap();
        }
    });
}

// 同意按钮操作
$(document).on("click",".agree_ipt",function(){
    agree(this,function () {
        alert('这是同意的回调')
    })

});
function agree(obj,yes) {
    if($(obj).parents(".warp").find(".layer_agree").length !=0) {
        $(obj).parents(".warp").find(".layer_agree").remove();
    }
    if($(obj).parents(".warp").length !=0) {
        $(obj).unwrap();
    }
    $(obj).wrap("<div class='warp'></div>");
    $(".warp").append('<div class="layer_agree"> ' +
        '<div class="layer_agree_tit">请再次确认 </br> 同意后将给用户发放众云币，请谨慎操作!</div> ' +
        '<div class="layer_agree_content"> ' +
        '<input type="button" class="sbtn cb del_cancel" value="取消"> ' +
        '<input type="button" class="sbtn violet del_sure" value="确定"> ' +
        '</div> ' +
        '</div>');
    $(".del_cancel").on("click",function(){
        $(obj).parents(".warp").find(".layer_agree").remove();
        $(obj).unwrap();
    });
    $(".del_sure").on("click",function(){
        if(yes) {
            yes(this);
            $(obj).parents(".warp").find(".layer_agree").remove();
            $(obj).unwrap();
        }else {
            $(obj).parents(".warp").find(".layer_agree").remove();
            $(obj).unwrap();
        }
    });
}
// ======iframe宽度自适应======
function setSize(){
    var w = $(window).width() - 312;
    $('#top').css("width",w);
    $('#content').css("width",w);
}
//页面加载时设框架款宽度
$(document).ready(function (){
    setSize();
});
//人工拖扯窗口大小时，重设框架款宽度
$(window).resize(function () {
    setSize();
});

// ===展开标题=======
$(document).on('click', '.active', function(event) {
    $(this).parents('.head_tit').siblings().each(function(){
        $(this).find('ul').fadeOut(400)
    });
    $(this).parents('.head_tit').find('ul').toggle(600);
});

// =========点击改变iframe地址=============
$(document).on('click','.head_tit li a',function (){
    var url = $(this).attr('href');
    var content =  top.document.getElementById("content");
    content.src = url;
    $('.head_tit').each(function(){
        $(this).removeClass('tit_active');
    });
    $(this).parents('.head_tit').addClass('tit_active');
    return false;
});
