// main.js file for hw-04
var pointAdd = "";

function clicked1() {
	var point = document.getElementById("p1");
	point.classList.toggle('clicked');
	document.getElementById('p').innerHTML = "Last point clicked: (1, 2)";
}
function mOver1() {

	var circle = document.getElementById("p1");
	circle.classList.toggle('orange');
}
function mOut1() {

	var circle = document.getElementById("p1");
	circle.classList.toggle('orange');
}

function clicked2() {
	var point = document.getElementById("p2");
	point.classList.toggle('clicked')
	document.getElementById('p').innerHTML = "Last point clicked: (2, 4)";
}
function mOver2() {

	var circle = document.getElementById("p2");
	circle.classList.toggle('orange');
}
function mOut2() {

	var circle = document.getElementById("p2");
	circle.classList.toggle('orange');
}

function clicked3() {
	var point = document.getElementById("p3");
	point.classList.toggle('clicked')
	document.getElementById('p').innerHTML = "Last point clicked: (6, 2)";
}
function mOver3() {

	var circle = document.getElementById("p3");
	circle.classList.toggle('orange');
}
function mOut3() {

	var circle = document.getElementById("p3");
	circle.classList.toggle('orange');
}

function clicked4() {
	var point = document.getElementById("p4");
	point.classList.toggle('clicked')
	document.getElementById('p').innerHTML = "Last point clicked: (9, 9)";
}
function mOver4() {

	var circle = document.getElementById("p4");
	circle.classList.toggle('orange');
}
function mOut4() {

	var circle = document.getElementById("p4");
	circle.classList.toggle('orange');
}

function clickedI() {
	var point = document.getElementById("userP");
	point.classList.toggle('clicked')

	var x = document.getElementById("sel1");
	var y = document.getElementById("sel2");

	var xSel = x.options[x.selectedIndex].text;
	var ySel = y.options[y.selectedIndex].text;

	document.getElementById('p').innerHTML = "Last point clicked: (" + xSel + ", " + ySel + ")";
}
function mOverI() {

	var circle = document.getElementById("userP");
	circle.classList.toggle('orange');
}
function mOutI() {

	var circle = document.getElementById("userP");
	circle.classList.toggle('orange');
}

function clickedBtn() {
	var x = document.getElementById("sel1");
	var y = document.getElementById("sel2");

	var xSel = x.options[x.selectedIndex].text;
	var ySel = y.options[y.selectedIndex].text;

	document.getElementById('userP').setAttribute('r', 10);
	document.getElementById('userP').setAttribute('fill', "blue");
	document.getElementById('userP').setAttribute('cx', (xSel * 50) + 10);
	document.getElementById('userP').setAttribute('cy', (500 - (ySel * 50)));
}

document.getElementById("p1").addEventListener("click", clicked1);
document.getElementById("p1").addEventListener("mouseover", mOver1);
document.getElementById("p1").addEventListener("mouseout", mOut1);

document.getElementById("p2").addEventListener("click", clicked2);
document.getElementById("p2").addEventListener("mouseover", mOver2);
document.getElementById("p2").addEventListener("mouseout", mOut2);

document.getElementById("p3").addEventListener("click", clicked3);
document.getElementById("p3").addEventListener("mouseover", mOver3);
document.getElementById("p3").addEventListener("mouseout", mOut3);

document.getElementById("p4").addEventListener("click", clicked4);
document.getElementById("p4").addEventListener("mouseover", mOver4);
document.getElementById("p4").addEventListener("mouseout", mOut4);

document.getElementById("userP").addEventListener("click", clickedI);
document.getElementById("userP").addEventListener("mouseover", mOverI);
document.getElementById("userP").addEventListener("mouseout", mOutI);

document.getElementById("addBtn").addEventListener("click", clickedBtn);
