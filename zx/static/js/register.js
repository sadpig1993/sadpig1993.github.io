$(document).ready(function(){
	var i,j,k;
	var con1,con2,con3;
	for (i = 1985; i < 2010; i++) {
		$("#b-y").append("<option value="+i+">"+i+"</option>");
	};
	for (j = 1; j < 13; j++) {
		$("#b-m").append("<option value="+j+" class=>"+j+"</option>");
	};
	for (k = 1; k < 32; k++) {
		$("#b-d").append("<option value="+k+">"+k+"</option>");
	};
	ua=hex_md5(navigator.userAgent+"hahahaha");
	$(".token").val(ua);

	
});