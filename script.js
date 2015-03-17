// DOI Landing JAVASCRIPT


// Firebase Functions

var ref= new Firebase("https://dawn-of-industry.firebaseio.com/visitors");

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
	timerStart=new Date().getTime();
}
function endTimer(){
	timerEnd=new Date().getTime();
	hesitationTime=timerEnd-timerStart;
}


function sendData(){
	ref.push({
		experience: experience_num,
	    email: userEmail,
	    legalview: legView,
	    regview: regView,
	    selfcust: selfCust,
	    hesitation: hesitationTime,
	    username: userName
  	});
}



// DOC Ready Interactions

$(document).ready(function(){

	//General css manipulation
		$('#contBtn').prop('disabled', true);
		$('#downloadBtn').prop('disabled', true);
		$('#compName').val('');
		$('#compSlogan').val('');
		$('#userName').val('');
		$('#compEmail').val('');

//Code for determining the experience
	experience=Math.random();

	if(experience<=.25){
		$('#custRemove').remove();
		$('#contBtn').prop('disabled', false);
		$('#contBtn').attr('data-target','#legModal');
		experience_num=1;
		selfCust=false;
		legView=true;
		regView=false;
	}
	if((experience>.25)&&(experience<=.5)){
		$('#custRemove').remove();
		$('#contBtn').prop('disabled', false);
		$('#contBtn').attr('data-target','#regModal');
		experience_num=2;
		selfCust=false;
		regView=true;
		legView=false;
	}
	if((experience>.5)&&(experience<=.75)){
		$('#contBtn').attr('data-target','#legModal');
		experience_num=3;
		selfCust=true;
		regView=false;
		legView=true;
	}
	if(experience>.75){
		$('#contBtn').attr('data-target','#regModal');
		experience_num=4;	
		selfCust=true;
		regView=true;
		legView=false;
	}

	// Google Analytics Tracking
	$('#compName')on('click', function() {
	  ga('send', 'event', 'input', 'click', 'cust-name');
	});

	$('#compSlogan')on('click', function() {
	  ga('send', 'event', 'input', 'click', 'cust-slogan');
	});

	$('#contBtn').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'cust-contBtn');
	});

	$('#userEmail')on('click', function() {
	  ga('send', 'event', 'input', 'click', 'signup-email');
	});

	$('#userName').on('click', function() {
	  ga('send', 'event', 'input', 'click', 'signup-name');
	});

	$('#downloadBtn').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'signup-downloadBtn');
	});

	$('#betaKeyinput').on('click', function() {
	  ga('send', 'event', 'input', 'click', 'beta-input');
	});

	$('#downloadIcon').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'beta-downloadButton');
	});

	// Button Enabling
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
		userName=$(this).val();
	});

	$('#userEmail').change(function()	{
		userEmail=$(this).val();
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



