document.getElementById("entry").addEventListener("click", displayDetails);

var entry = document.getElementById("entry");
var row = 1;
var homework
var dueDate
var className
var optionDoggo

function displayDetails() {
	homework = document.getElementById("homework").value;
	dueDate = document.getElementById("dueDate").value;
	className = document.getElementById("classInput").value;
	const doggos = document.getElementById("doggos");
	const pet = document.getElementById("pet"); //i don't think this is right
	
	document.getElementById('doggos').addEventListener('click', showDoggo);
	
	function showDoggo() {
		doggo.replaceChild(pet, doggo) //this is prolly not right
	}

	
	
	if(homework == "" || dueDate == "" || className == "")
		alert("Please fill all the boxes");
	else{
		var display = document.getElementById("display");
		var x = "a";
		var newRow = display.insertRow(row);
		var checkbox = document.createElement("INPUT");
		checkbox.type = "checkbox";
		
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		var cell4 = newRow.insertCell(3);
		
		cell4.style.textAlign = "center";
		
		cell1.innerHTML = className;
		cell2.innerHTML = homework;
		cell3.innerHTML = dueDate;
		cell4.appendChild(checkbox);
		
		row++;
	}
	
	oneRow = new Class(homework, dueDate, className);
	
	localStorage.setItem('oneRow', JSON.stringify(oneRow));
	
	chrome.storage.local.set({oneClass: oneRow}, function(){
		console.log("One row is saved" + oneRow);
	});
}
function Class(hwName, due, cName) {
	this.hwName = hwName;
	this.due = due;
	this.cName = cName;
}
