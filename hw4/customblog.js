var upload = document.getElementById('upload');
var crudDialog = document.getElementById('crudDialog');
var editDialog = document.getElementById('editDialog');
var delDialog = document.getElementById('delDialog');
var Launch = document.getElementById('launch');
var Edit = document.getElementById('edit');
var Del = document.getElementById('del');

var Target = document.getElementById('target');
var Date = document.getElementById('date');
var Mag = document.getElementById('magnitude');

var TargetE = document.getElementById('targetE');
var DateE = document.getElementById('dateE');
var MagE = document.getElementById('magnitudeE');

var tmp;
var editTmp;
var i = 0;

upload.addEventListener('click', function onOpen() {
    crudDialog.showModal();
});

Launch.addEventListener('click', function onClose() {
  if(Date.value!==''){
    appendList();
  }
});


Edit.addEventListener('click', function onClose() {
  if(DateE.value!==''){
    var arr = [TargetE.value, DateE.value, MagE.value, tmp];
        var element = document.getElementById('nukeList');
        var newData = document.createElement('li');
        newData.setAttribute("id", `li${tmp}`);
  
        document.getElementById(`li${tmp}`).innerHTML = `Nuke is launched against ${arr[0]} at ${arr[1]}. The magnitude is ${arr[2]}. `;

            var editBtn = document.createElement('text');
    editBtn.innerHTML = 'edit ';
    editBtn.onclick = function() {
        tmp = arr[3];
        editDialog.showModal(); 
    };   

        var delBtn = document.createElement('text');
    delBtn.innerHTML = 'delete';
    delBtn.onclick = function() {
        tmp = arr[3];
        delDialog.showModal();   
    };

  document.getElementById(`li${tmp}`).appendChild(editBtn);
  document.getElementById(`li${tmp}`).appendChild(delBtn);
  }
});


Del.addEventListener('click', function onClose() {
       document.getElementById(`li${tmp}`).remove();
});


function appendList() {
    var arr = [Target.value, Date.value, Mag.value, i];
    var editBtn = document.createElement('text');
    editBtn.innerHTML = 'edit ';
    editBtn.onclick = function() {
        tmp = arr[3];
        editDialog.showModal(); 
    };   
    
    var delBtn = document.createElement('text');
    delBtn.innerHTML = 'delete';
    delBtn.onclick = function() {
        tmp = arr[3];
        delDialog.showModal();   
    };

  var element = document.getElementById('nukeList');
  var newData = document.createElement('li');
  newData.setAttribute("id", `li${i++}`);
  
  var newText = document.createTextNode(`Nuke is launched against ${arr[0]} at ${arr[1]}. The magnitude is ${arr[2]}. `);

  newData.appendChild(newText);
  newData.appendChild(editBtn);
  newData.appendChild(delBtn);
  element.appendChild(newData);
}