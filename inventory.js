
function tele() {
	document.getElementById('appear').innerHTML = tv.innerHTML;
	appear.style.transition = "1s";
}

function fone() {
	document.getElementById('appear').innerHTML = phone.innerHTML;
}
function bball() {
	document.getElementById('appear').innerHTML = ball.innerHTML;
}
function gtar() {
	document.getElementById('appear').innerHTML = guitar.innerHTML;
}
function shoo() {
	document.getElementById('appear').innerHTML = shoe.innerHTML;
}
function jket() {
	document.getElementById('appear').innerHTML = jacket.innerHTML;
}
function scuter() {
	document.getElementById('appear').innerHTML = scooter.innerHTML;
}
function rubic() {
	document.getElementById('appear').innerHTML = rubik.innerHTML;
}
function himac() {
	document.getElementById('appear').innerHTML = imac.innerHTML;
}
function camerar() {
	document.getElementById('appear').innerHTML = cam.innerHTML;
}

var g = grand.value;

function one() {
	var q = qa.value;
	var u = up.value;
	var o = order.value;
	var t = tota.value;
	var result = qa.value - order.value;
	qa.value = result;
	var result2 = order.value * up.value;
	tota.value = result2;
	grand.value = parseInt(tota.value);
	if (order.value > 50) {
		order.value = " ";
		tota.value = " ";
		grand.value = " ";
		qa.value = 50;
		alert('Oooops! Your order is more than the quantity available.')
	}
}

function two() {
	var q = qa1.value;
	var u = up1.value;
	var o = order1.value;
	var t = tota1.value;
	var result1 = qa1.value - order1.value;
	qa1.value = result1;
	var result3 = order1.value * up1.value;
	tota1.value = result3;
	grand.value = parseInt(tota.value) + parseInt(tota1.value);
}

function three() {
	var q = qa2.value;
	var u = up2.value;
	var o = order2.value;
	var t = tota2.value;
	var result4 = qa2.value - order2.value;
	qa2.value = result4;
	var result5 = order2.value * up2.value;
	tota2.value = result5;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value);
}

function four() {
	var q = qa3.value;
	var u = up3.value;
	var o = order3.value;
	var t = tota3.value;
	var result6 = qa3.value - order3.value;
	qa3.value = result6;
	var result7 = order3.value * up3.value;
	tota3.value = result7;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value) +
	parseInt(tota3.value);
}

function five() {
	var q = qa4.value;
	var u = up4.value;
	var o = order4.value;
	var t = tota4.value;
	var result8 = qa4.value - order4.value;
	qa4.value = result8;
	var result9 = order4.value * up4.value;
	tota4.value = result9;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value) +
	parseInt(tota3.value) +
	parseInt(tota4.value);
}

function six() {
	var q = qa5.value;
	var u = up5.value;
	var o = order5.value;
	var t = tota5.value;
	var result10 = qa5.value - order5.value;
	qa5.value = result10;
	var result11 = order5.value * up5.value;
	tota5.value = result11;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value) +
	parseInt(tota3.value) +
	parseInt(tota4.value) +
	parseInt(tota5.value);
}

function seven() {
	var q = qa6.value;
	var u = up6.value;
	var o = order6.value;
	var t = tota6.value;
	var result12 = qa6.value - order6.value;
	qa6.value = result12;
	var result13 = order6.value * up6.value;
	tota6.value = result13;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value) +
	parseInt(tota3.value) +
	parseInt(tota4.value) +
	parseInt(tota5.value) +
	parseInt(tota6.value);
}

function eight() {
	var q = qa7.value;
	var u = up7.value;
	var o = order7.value;
	var t = tota7.value;
	var result14 = qa7.value - order7.value;
	qa7.value = result14;
	var result15 = order7.value * up7.value;
	tota7.value = result15;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value) +
	parseInt(tota3.value) +
	parseInt(tota4.value) +
	parseInt(tota5.value) +
	parseInt(tota6.value) +
	parseInt(tota7.value);
}

function nine() {
	var q = qa8.value;
	var u = up8.value;
	var o = order8.value;
	var t = tota8.value;
	var result16 = qa8.value - order8.value;
	qa8.value = result16;
	var result17 = order8.value * up8.value;
	tota8.value = result17;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value) +
	parseInt(tota3.value) +
	parseInt(tota4.value) +
	parseInt(tota5.value) +
	parseInt(tota6.value) +
	parseInt(tota7.value) +
	parseInt(tota8.value);
}

function ten() {
	var q = qa9.value;
	var u = up9.value;
	var o = order9.value;
	var t = tota9.value;
	var result18 = qa9.value - order9.value;
	qa9.value = result18;
	var result19 = order9.value * up9.value;
	tota9.value = result19;
	grand.value = parseInt(tota.value) + 
	parseInt(tota1.value) +
	parseInt(tota2.value) +
	parseInt(tota3.value) +
	parseInt(tota4.value) +
	parseInt(tota5.value) +
	parseInt(tota6.value) +
	parseInt(tota7.value) +
	parseInt(tota8.value) +
	parseInt(tota9.value);
}