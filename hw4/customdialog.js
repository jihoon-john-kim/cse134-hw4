
var Alert = document.getElementById('Alert');
var Confirm = document.getElementById('Confirm');
var Prompt = document.getElementById('Prompt');

var AlertDialog = document.getElementById('AlertDialog');
var ConfirmDialog = document.getElementById('ConfirmDialog');
var PromptDialog = document.getElementById('PromptDialog');

var alertBtn = document.getElementById('alertBtn');
var confirmBtn = document.getElementById('confirmBtn');
var cancelBtn = document.getElementById('cancelBtn');
var submitBtn = document.getElementById('submitBtn');
var pcancelBtn = document.getElementById('pcancelBtn');
var Answer = document.getElementById('answer');

Alert.addEventListener('click', function onOpen() {
  document.getElementById("show").innerText = "";
    AlertDialog.showModal();
});

Confirm.addEventListener('click', function onOpen() {
  document.getElementById("show").innerText = "";
    ConfirmDialog.showModal();
});

confirmBtn.addEventListener('click', function onOpen() {
		document.getElementById("show").innerText = `Yes! The world will be ruined now.`;
});

cancelBtn.addEventListener('click', function onOpen() {
  	document.getElementById("show").innerText = `Oh, it's too late.\n Cancellation of launch is impossible.`;
});

Prompt.addEventListener('click', function onOpen() {
  document.getElementById("show").innerText = "";
    PromptDialog.showModal();
});

//let clean = DOMPurify.sanitize(Answer.value);
submitBtn.addEventListener('click', function onOpen() {					
  if(Answer.value.length>0){
    document.getElementById("show").innerText = `The last message of mankind is as follows. 
    "${Answer.value} (RIP, passed away)"`;
  }
  else if(Answer.value.length==0){
     document.getElementById("show").innerText = `The last message of mankind is as follows.
     "Our father in heaven,,, (RIP, passed away)"`
  }
});

pcancelBtn.addEventListener('click', function onOpen() {
		document.getElementById("show").innerText = `The last individual of mankind became a handful of ashes without leaving any words.`;
});