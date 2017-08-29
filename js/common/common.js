
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
    del(this,function (ele) {
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
        var This = this;
        if(yes) {
            yes(This);
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
    var strTit = "请再次确认";
    var strContent = "同意后将给用户发放众云币，请谨慎操作！";
    agree(this,strTit,strContent,function (ele) {
        alert('这是同意的回调')
    })
});
function agree(obj,strTit,strContent,yes) {   //obj为当前对象，str为传入值，yes为回调函数
    if($(obj).parents(".warp").find(".layer_agree").length !=0) {
        $(obj).parents(".warp").find(".layer_agree").remove();
    }
    if($(obj).parents(".warp").length !=0) {
        $(obj).unwrap();
    }
    $(obj).wrap("<div class='warp'></div>");
    $(".warp").append('<div class="layer_agree"> ' +
        '<div class="layer_agree_tit">'+strTit+' </br> '+strContent+'</div> ' +
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
        var This = this;
        if(yes) {
            yes(This);
            $(obj).parents(".warp").find(".layer_agree").remove();
            $(obj).unwrap();
        }else {
            $(obj).parents(".warp").find(".layer_agree").remove();
            $(obj).unwrap();
        }
    });
}

// 同意按钮并且带有输入框操作
$(document).on("click",".agree_promt",function(){
    var This = this;
    agreePromt(this,function (ele) {
        alert('这是同意且带有输入框的回调');
        alert("输入框的内容是"+$(ele).prev(".layer_text").val());
    })

});
function agreePromt(obj,yes) {
    if($(obj).parents(".warp").find(".layer_agree").length !=0) {
        $(obj).parents(".warp").find(".layer_agree").remove();
    }
    if($(obj).parents(".warp").length !=0) {
        $(obj).unwrap();
    }
    $(obj).wrap("<div class='warp'></div>");
    $(".warp").append('<div class="layer_agree"> ' +
        '<div class="layer_agree_tit">请输入兑换码</div> ' +
        '<div class="layer_agree_content"> ' +
        '<input type="text" class="layer_text">'+
        '<input type="button" class="sbtn cb del_sure" value="确认"> ' +
        '<input type="button" class="sbtn violet del_cancel" value="关闭"> ' +
        '</div> ' +
        '</div>');
    $(".del_cancel").on("click",function(){
        $(obj).parents(".warp").find(".layer_agree").remove();
        $(obj).unwrap();
    });
    $(".del_sure").on("click",function(){
        var This = this;
        if(yes) {
            $(obj).parents(".warp").find(".layer_agree").remove();
            $(obj).unwrap();
            yes(This);

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


// 表个框搜索按钮
$('th').mouseenter(function () {
    $(this).children('.icon-search').fadeIn();
});

$('th').mouseleave(function () {
    $(this).children('.icon-search').fadeOut();
});

$("th .icon-search").on("click",function(){
    $(this).parents('th').siblings().each(function(){
        $(this).find('.search_div_table').fadeOut(400)
    });
    $(this).siblings(".search_div_table").toggle(400);
});
