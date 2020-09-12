function gotoSame(url){
  var win = window.open(url, '_self');
    win.focus();
}

function gotoNew(url){
  if(url == 'https://liamebirge.github.io/Documents/Portfolio/MainPage.html'){
  	var winFeatures = "_blank, height=700, width=1200, resizable=false"
    var win = window.open(url, 'Portfolio', winFeatures);
    win.focus();
  }else{
    var win = window.open(url, '_blank');
    win.focus();
  }
}

function closeWindow(){
	close();
}

//Chooses current month and year to display apropriate calendar
function linkCal(){
	var date = new Date();
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var cMonth = month[date.getMonth()];
	var cYear = date.getFullYear();
	gotoNew("https://liamebirge.github.io/HTML/calendar/" + cMonth + "-" + cYear + ".html");
}

function today(){
	var date = new Date();
	var month = date.getMonth();
	var day = date.getDay();
	var calDateNums = document.getElementsByClassName('daynum');
	if (calDateNums.innerHTML == day){
		calDateNums.style.backgroundColor = red;
	}
}

function newGrade(classNum){
	//https://www.w3schools.com/jsref/met_document_createelement.asp
	//https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
	//https://stackoverflow.com/questions/15933037/adding-input-fields-in-javascript-with-onclick-button#15933237
	//https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript#17774064
	var class1, class2, class3, class4, class5, gradeNum, classlist;
	class1 = document.getElementById("class1");
	class2 = document.getElementById("class2");
	class3 = document.getElementById("class3");
	class4 = document.getElementById("class4");
	class5 = document.getElementById("class5");

	if (classNum === 1){classlist = class1}
	if (classNum === 2){classlist = class2}
	if (classNum === 3){classlist = class3}
	if (classNum === 4){classlist = class4}
	if (classNum === 5){classlist = class5}

	for(var i = 0; i < classlist.childNodes.length; i++){
		if (classlist.childNodes[i].nodeName == "li"){
			gradeNum++;
		}
	}

	//score achieved input
	var input1 = document.createElement("INPUT");
	input1.setAttribute("type", "text");
	input1.setAttribute("placeholder", "Score");
	input1.setAttribute("style", "margin-right:3px");

	//score possible input
	var input2 = document.createElement("INPUT");
	input2.setAttribute("type", "text");
	input2.setAttribute("placeholder", "Total Possible Score");
	input2.setAttribute("style", "margin-left:6px");

	//assignment name input
	var input3 = document.createElement("INPUT");
	input3.setAttribute("type", "text");
	input3.setAttribute("placeholder", "Assignment Name");
	input3.setAttribute("style", "margin-right:5px");
	input3.setAttribute("style", "margin-left:5px");

	//grade weight input
	var input4 = document.createElement("INPUT");
	input4.setAttribute("type", "text");
	input4.setAttribute("placeholder", "Weight (omit % sign)");
	input4.setAttribute("style", "margin-left:6px");

	//classlist.innerHTML += input
	var entry = document.createElement('LI');
	entry.appendChild(input1);
	entry.appendChild(input2);
	entry.appendChild(input3);
	entry.appendChild(input4);
	classlist.appendChild(entry);
}
/* Not Working Correctly
function calcAv(classNum){
	//https://www.wikihow.com/Calculate-Weighted-Average
	var scores = [], totals = [], weightPer = [], weight = [], grade = [], weightAv = [];
	var classlist, output, addedWAv;
	var class1 = document.getElementById("class1");
	var class2 = document.getElementById("class2");
	var class3 = document.getElementById("class3");
	var class4 = document.getElementById("class4");
	var class5 = document.getElementById("class5");

	if (classNum === 1){
		classlist = class1;

		scores = classlist.getElementsByClassName('score').value;
		totals = classlist.getElementsByClassName('total').value;
		weightPer = classlist.getElementsByClassName('weight').value;
		for(var i = 0; i < scores.length; i++){
			weight[i] = weightPer[i] / 100;
			grade[i] = totals[i] / scores[i];
			weightAv[i] = grade[i] * weight[i]
		}
		for(var j = 0; j < weightAv.length; j++){
			//https://bytes.com/topic/javascript/answers/151365-how-do-you-add-up-all-values-array
			addedWAv += weightAv[j];
		}

		output = document.getElementById("class1Av");
		output.innerHTML = addedWAv;
	}else if (classNum === 2){
		classlist = class2;

		scores = classlist.getElementsByClassName('score').value;
		totals = classlist.getElementsByClassName('total').value;
		weightPer = classlist.getElementsByClassName('weight').value;
		for(var i = 0; i < scores.length; i++){
			weight[i] = weightPer[i] / 100;
			grade[i] = totals[i] / scores[i];
			weightAv[i] = grade[i] * weight[i]
		}
		for(var j = 0; j < weightAv.length; j++){
			addedWAv += weightAv[j];
		}

		output = document.getElementById("class2Av");
		output.innerHTML = addedWAv;
	}else if (classNum === 3){
		classlist = class3;
		
		scores = classlist.getElementsByClassName('score').value;
		totals = classlist.getElementsByClassName('total').value;
		weightPer = classlist.getElementsByClassName('weight').value;
		for(var i = 0; i < scores.length; i++){
			weight[i] = weightPer[i] / 100;
			grade[i] = totals[i] / scores[i];
			weightAv[i] = grade[i] * weight[i]
		}
		for(var j = 0; j < weightAv.length; j++){
			addedWAv += weightAv[j];
		}

		output = document.getElementById("class3Av");
		output.innerHTML = addedWAv;
	}else if (classNum === 4){
		classlist = class4;
		
		scores = classlist.getElementsByClassName('score').value;
		totals = classlist.getElementsByClassName('total').value;
		weightPer = classlist.getElementsByClassName('weight').value;
		for(var i = 0; i < scores.length; i++){
			weight[i] = weightPer[i] / 100;
			grade[i] = totals[i] / scores[i];
			weightAv[i] = grade[i] * weight[i]
		}
		for(var j = 0; j < weightAv.length; j++){
			addedWAv += weightAv[j];
		}

		output = document.getElementById("class4Av");
		output.innerHTML = addedWAv;
	}else if (classNum === 5){
		classlist = class5;
		
		scores = classlist.getElementsByClassName('score').value;
		totals = classlist.getElementsByClassName('total').value;
		weightPer = classlist.getElementsByClassName('weight').value;
		for(var i = 0; i < scores.length; i++){
			weight[i] = weightPer[i] / 100;
			grade[i] = totals[i] / scores[i];
			weightAv[i] = grade[i] * weight[i]
		}
		for(var j = 0; j < weightAv.length; j++){
			addedWAv += weightAv[j];
		}

		output = document.getElementById("class5Av");
		output.innerHTML = addedWAv;
	} else{
		output.innerHTML = "Sorry, your selection was not recognized, please try again.";
	}
}*/

//writing
function postText(){
	var textArea = document.getElementById("theText");
	var text = textArea.value;
	var output = document.getElementById("noteContent");
	output.innerHTML = (text);
}
function appendText(){
	var textArea = document.getElementById("theText");
	var text = textArea.value;
	var output = document.getElementById("noteContent");
	output.innerHTML += (text + "\n");
}
function clearText(){
	var output = document.getElementById("noteContent");
	output.innerHTML = "";
}
function saveText(){
	var fso = new ActiveXObject("Scripting.FileSystemObject"); 
	var FileObject = fso.OpenTextFile("../Documents/TextFiles/textFile.txt", 8, true, 0); // 8=append, true=create if not exist, 0 = ASCII 
	Object.write(document.getElementById('noteContent').innerHTML);
	FileObject.close();
}