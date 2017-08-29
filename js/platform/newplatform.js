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



// ======导入===========

$('#import').click(function(){
	$('#import_layer').fadeIn();
});

$('#close_import').click(function(){
	$('#import_layer').fadeOut();
});

$('.imp_save').click(function(){
	$('#import_layer').fadeOut();
});