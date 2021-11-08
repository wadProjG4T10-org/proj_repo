const open = document.getElementsByClassName('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementsByClassName('close');


var i;
for (i = 0; i < open.length; i++) {
	open[i].addEventListener('click',()=>{
		modal_container.classList.add('show');
	});
};

var x;
for (x = 0; x < close.length; x++) {
	close[x].addEventListener('click',()=>{
		modal_container.classList.remove('show');
	});
};





