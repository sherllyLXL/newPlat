
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
$(".reset").on("click",function(){
    $(".layer_tab").find("input").val("");
    $(".layer_tab").find(".select span").text("请选择");
});
$(".close").on("click",function(){
    $('#close_lay').trigger("click");
});

var setting = {	};

var zNodes =[
    { name:"父节点1 - 展开", open:true,
        children: [
            { name:"父节点11 - 折叠",
                children: [
                    { name:"叶子节点111"},
                    { name:"叶子节点112"},
                    { name:"叶子节点113"},
                    { name:"叶子节点114"}
                ]},
            { name:"父节点12 - 折叠",
                children: [
                    { name:"叶子节点121"},
                    { name:"叶子节点122"},
                    { name:"叶子节点123"},
                    { name:"叶子节点124"}
                ]},
            { name:"父节点13 - 没有子节点", isParent:true}
        ]},
    { name:"父节点2 - 折叠",
        children: [
            { name:"父节点21 - 展开", open:true,
                children: [
                    { name:"叶子节点211"},
                    { name:"叶子节点212"},
                    { name:"叶子节点213"},
                    { name:"叶子节点214"}
                ]},
            { name:"父节点22 - 折叠",
                children: [
                    { name:"叶子节点221"},
                    { name:"叶子节点222"},
                    { name:"叶子节点223"},
                    { name:"叶子节点224"}
                ]},
            { name:"父节点23 - 折叠",
                children: [
                    { name:"叶子节点231"},
                    { name:"叶子节点232"},
                    { name:"叶子节点233"},
                    { name:"叶子节点234"}
                ]}
        ]},
    { name:"父节点3 - 没有子节点", isParent:true}

];

$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});