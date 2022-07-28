var upload = document.getElementById('upload');
var crudDialog = document.getElementById('crudDialog');
var editDialog = document.getElementById('editDialog');
var delDialog = document.getElementById('delDialog');
var Save = document.getElementById('save');
var Edit = document.getElementById('edit');
var Del = document.getElementById('del');

var Title = document.getElementById('title');
var Date = document.getElementById('date');
var Summary = document.getElementById('summary');

var TitleE = document.getElementById('titleE');
var DateE = document.getElementById('dateE');
var SummaryE = document.getElementById('summaryE');

var tmp;
var editTmp;
var i = 2;

upload.addEventListener('click', function onOpen() {
    crudDialog.showModal();
});

Save.addEventListener('click', function onClose() {
  if(Title.value!=='' && Date.value!=='' && Summary.value!==''){
    appendList();
  }
});


Edit.addEventListener('click', function onClose() {
  if(TitleE.value!=='' && DateE.value!=='' && SummaryE.value!==''){
    var arr = [TitleE.value, DateE.value, SummaryE.value, tmp];
    arr[0]=TitleE.value;
    arr[1]=DateE.value;
    arr[2]=SummaryE.value;
    arr[3]=tmp;
        var element = document.getElementById('postList');
        var newData = document.createElement('li');
        newData.setAttribute("id", `li${tmp}`);
  
        document.getElementById(`li${tmp}`).innerHTML = `${arr[0]} ${arr[1]} ${arr[2]} `;

            var editBtn = document.createElement('text');
    editBtn.innerHTML = 'edit ';
    editBtn.onclick = function() {
        document.getElementById('titleE').value = arr[0];
        document.getElementById('dateE').value = arr[1];
        document.getElementById('summaryE').value = arr[2];
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
    var arr = [Title.value, Date.value, Summary.value, i];

    var editBtn = document.createElement('text');
    editBtn.innerHTML = 'edit ';
    editBtn.onclick = function() {
        document.getElementById('titleE').value = arr[0];
        document.getElementById('dateE').value = arr[1];
        document.getElementById('summaryE').value = arr[2];
        tmp = arr[3];
        editDialog.showModal(); 
    };   
    
    var delBtn = document.createElement('text');
    delBtn.innerHTML = 'delete';
    delBtn.onclick = function() {
        tmp = arr[3];
        delDialog.showModal();   
    };

  var element = document.getElementById('postList');
  var newData = document.createElement('li');
  newData.setAttribute("id", `li${i++}`);
  
  var newText = document.createTextNode(arr[0] +" "+ arr[1] +" " + arr[2] +" ");

  newData.appendChild(newText);
  newData.appendChild(editBtn);
  newData.appendChild(delBtn);
  element.appendChild(newData);
}

function dell1(){
        tmp = 0;
        delDialog.showModal();   
}

function dell1(){
        tmp = 1;
        delDialog.showModal();   
}

function appendListT1() {
        document.getElementById('titleE').value = "ex1";
        document.getElementById('dateE').value = "2020-01-03";
        document.getElementById('summaryE').value = "sum1";
        tmp=0;
        editDialog.showModal(); 
    var element = document.getElementById('postList');
        var newData = document.createElement('li');
        newData.setAttribute("id", `li0`);
  
        document.getElementById(`li0`).innerHTML = `${arr[0]} ${arr[1]} ${arr[2]} `;

            var editBtn = document.createElement('text');
    editBtn.innerHTML = 'edit ';
    editBtn.onclick = function() {
        document.getElementById('titleE').value = arr[0];
        document.getElementById('dateE').value = arr[1];
        document.getElementById('summaryE').value = arr[2];
        tmp = arr[3];
        editDialog.showModal(); 
    };   

        var delBtn = document.createElement('text');
    delBtn.innerHTML = 'delete';
    delBtn.onclick = function() {
        tmp = arr[3];
        delDialog.showModal();   
    };

  document.getElementById(`li0`).appendChild(editBtn);
  document.getElementById(`li0`).appendChild(delBtn);
}

function appendListT2() {
        document.getElementById('titleE').value = "ex2";
        document.getElementById('dateE').value = "2020-02-03";
        document.getElementById('summaryE').value = "sum2";
        tmp=1;
        editDialog.showModal(); 
    var element = document.getElementById('postList');
        var newData = document.createElement('li');
        newData.setAttribute("id", `li1`);
  
        document.getElementById(`li1`).innerHTML = `${arr[0]} ${arr[1]} ${arr[2]} `;

            var editBtn = document.createElement('text');
    editBtn.innerHTML = 'edit ';
    editBtn.onclick = function() {
        document.getElementById('titleE').value = arr[0];
        document.getElementById('dateE').value = arr[1];
        document.getElementById('summaryE').value = arr[2];
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