// DOI Landing JAVASCRIPT


// Firebase Functions

var ref= "https://dawn-of-industry.firebaseio.com";
var usersRef = ref.child("visitors");

var userName;
var timerStart;
var timerEnd;
var hesitationTime;
var selfCust;
var regView;
var legView;
var userEmail;

var experience;
var experience_num;

function setTimer(){
	timerStart=getTime();
}
function endTimer(){
	timerEnd=getTime();
	hesitationTime=timerEnd-timerStart;
}


function sendData(){
	usersRef.push({
		experience: experience_num,
	    email: userEmail,
	    legalview: legview,
	    regview: regview,
	    selfcust: selfCust,
	    hesitation: hesitationTime,
	    username: userName
  	});
}



// DOC Ready Interactions

$(document).ready(function(){

//Code for determining the experience
	experience=Math.random();

	if(experience<.25){
		$('#self_ident').remove();
		$('contBtn').prop('data-target','#legModal');
		experience_num=1;
	}
	if((experience>.25)&&(experience<.5)){
		$('#self_ident').remove();
		$('contBtn').prop('data-target','#regModal');
		experience_num=2;
	}
	if((experience>.5)&&(experience<.75)){
		$('contBtn').prop('data-target','#legModal');
		experience_num=3;	
	}
	if(experience>.75){
		$('contBtn').prop('data-target','#regModal');
		experience_num=4;	
	}



	//General css manipulation
		$('#contBtn').prop('disabled', true);
		$('#downloadBtn').prop('disabled', true);
		$('#compName').val('');
		$('#compSlogan').val('');
		$('#userName').val('');
		$('#compEmail').val('');

	//button enabling
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

	//setting db refs and checking email
	$('#userName').change(function()	{
		userEmail=$(this).val();
	});

	$('#userEmail').change(function()	{
		userName=$(this).val();
		//$('#downloadBtn').prop('disabled', true);
	});

});


// DOM Manipulation

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



