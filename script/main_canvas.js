window.onload = createCanvas;

function createCanvas(){
	var canvas = document.getElementById("mainCanvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.font = "30px Terminal";
	ctx.fillStyle = "#0B730B";
	ctx.fillText("Owen Krueger", 10, 50);
	ctx.closePath();
}

function testing(){
	var canvas = document.getElementById("mainCanvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.rect(20, 40, 50, 50);
	ctx.fillStyle = "#0B730B";
	ctx.fill();
	ctx.closePath();
}