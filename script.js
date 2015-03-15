//Firebase

function setTimer(){

}

function endTimer(){

}



// DOM Manipulation
$(document).ready(function(){
		$('#contBtn').prop('disabled', true);
		$('#downloadBtn').prop('disabled', true);
		$('#compName').val('');
		$('#compSlogan').val('');
		$('#userName').val('');
		$('#compEmail').val('');



$('.customizations').change(function()	{
		if (($('#compName').val()!='')&&($('#compSlogan').val()!='')&&($('#industrySel').val()!="default")&&($('#officeSel').val()!="default")){
			$('#contBtn').prop('disabled', false);
		}
	});

	$('.finalSignup').change(function()	{
		if (($('#userName').val()!='')&&($('#userEmail').val()!='')&&($('#institutionSel').val()!="default")) {
			$('#downloadBtn').prop('disabled', false);
		}
	});

});

function finalMessageDisplay(){
	$('#sign_comp').css("display","inline");
	$('#desc').css("display","none");
	$('#features').css("display","none");
	$('#self_ident').css("display","none");
	$('#finSignup').css("display","none");
	$('#beta').css("display","none");
	$('#links').css("display","none");
	$('#ratings').css("display","none");

}

function changeDivs(){
	$('#self_ident').remove();
	$('.final_signup').css("display","inline");
}

function invalidKey(){
	$('#invalidKey').css("display","block");
}



