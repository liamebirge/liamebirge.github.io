var fullText, output, result, br, entries;

function analyzeData() {
	br = "<br />";
	fullText = " " + document.getElementById("textArea1").value;

	var array = fullText.split(',');
    entries = array.sort();

	output = "You entered: " + fullText + br + br + "Sorted alphabetically: " + entries;

	var longest = array.sort(function (a, b) { return b.length - a.length; })[0];

	output += br + br + "Longest entry: " + longest + br + "Length: " + ((longest.length)-1) + 
	br + br + "Number of Entries: " + array.length;
	
	result = document.getElementById("resultDiv");
	result.innerHTML = output;
	document.getElementById("textArea1").value = "";
}