"use strict"	
  var size = 4;
	var min = 0;
	var max = size - 1;
	
	var isMoved = false;
	var score = 0;
	var excludeIds = [];


if (score > 2048) {
  alert("You Win!")
}

	function load() {
		var html = '<table border="1">';
		for(var row=0;row<size;row++) {
			html += '<tr>';
			for(var col=0;col<size;col++) {
				var id = row+""+col;
				html += '<td align="center" valign="center" height="40" width="40" id="'+id+'"></td>';
			}
			html += '</tr>';
		}
		html += '</table>';
		document.getElementById("canvas").innerHTML = html;
		var id1 = getId();
		var id2 = "";
		while(true) {
			id2 = getId();
			if(id1 != id2)
			break;
		}
		//Set initial 2 values
		document.getElementById(id1).innerHTML = "2";
		document.getElementById(id2).innerHTML = "2";
		document.getElementById(id1).style.backgroundColor = getColor(2);
		document.getElementById(id2).style.backgroundColor = getColor(2);
		
		score = 0;
		document.getElementById("score").innerHTML = score;
		return false;
	}

	function getRandom()	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	function getId()	{
		var i = getRandom();
		var j = getRandom();
		return i+""+j;
	}

	function up() {
		isMoved = false;
		excludeIds = [];
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=max;i++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveUp(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}

	function moveUp(id) {		
		if(!id.startsWith(min)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(i-1);k>=min;k--) {
				var nId = k+""+j;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById((k+1)+""+j).innerHTML = "";
							document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
					document.getElementById((k+1)+""+j).innerHTML = "";
					document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}

	function left() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveLeft(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}

	function moveLeft(id) {
		if(!id.endsWith(min)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(j-1);k>=min;k--) {
				var nId = i+""+k;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById(i+""+(k+1)).innerHTML = "";
							document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
					document.getElementById(i+""+(k+1)).innerHTML = "";
					document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}

	function down() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var id = j+""+i;
				if(document.getElementById(id).innerHTML != "") {
					moveDown(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}

	function moveDown(id) {
		if(!id.startsWith(max)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(i+1);k<=max;k++) {
				var nId = k+""+j;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById((k-1)+""+j).innerHTML = "";
							document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
					document.getElementById((k-1)+""+j).innerHTML = "";
					document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}

	function right() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveRight(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}

	function moveRight(id) {
		if(!id.endsWith(max)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(j+1);k<=max;k++) {
				var nId = i+""+k;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById(i+""+(k-1)).innerHTML = "";
							document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
					document.getElementById(i+""+(k-1)).innerHTML = "";
					document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}

	function update() {		
var currScore = document.getElementById("score")
var highScore =  document.getElementById("highScore")

if (parseInt(currScore.innerHTML) > 2048) {
  alert("You Win!")
}

if (parseInt(currScore.innerHTML) > parseInt(highScore.innerHTML)) {
  console.log(parseInt(currScore), 'currScore 2')
  console.log(parseInt(highScore), 'highScore')
  highScore.innerHTML = currScore
}

		var ids = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML == "") {
					ids.push(id);
				}
			}
		}
		var id = ids[Math.floor(Math.random()*ids.length)];
		document.getElementById(id).innerHTML = "2";
		document.getElementById(id).style.backgroundColor = getColor(2);
		var allFilled = true;
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML == "") {
					allFilled = false;
					break;
				}
			}
		}		
		document.getElementById("score").innerHTML = score;
		if(allFilled) {
			checkGameOver();
		}
	}
	function checkGameOver() {
		var isOver = true;
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=(max-1);i++) {
				var val = parseInt(document.getElementById(i+""+j).innerHTML);
				var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
				if(val == nVal) {
					isOver = false;
					break;
				}
			}
		}		
		if(isOver == true) {
			for(var i=min;i<=max;i++) {
				for(var j=min;j<=(max-1);j++) {
					var val = parseInt(document.getElementById(i+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
					if(val == nVal) {
						isOver = false;
						break;
					}
				}
			}
		}
		if(isOver) {
			alert("Game over!");
		}
		return false;
	}

	function getColor(val)	{
		var color = "#ffffff";
		switch(val) {
			case 2:		color = "#DEB887"; break;
			case 4:		color = "#D2B48C"; break;
			case 8:		color = "#DAA520"; break;
			case 16:	color = "#B8860B"; break;
			case 32:	color = "#CD853F"; break;
			case 64:	color = "#D2691E"; break;
			case 128:	color = "#8B4513"; break;
			case 256:	color = "#A0522D"; break;
			case 512:	color = "#A52A2A"; break;
			case 1024:	color = "#D7DF01"; break;
			case 2048:	color = "#800000"; break;
			default:	color = "#ffffff";
		}
		return color;
	}
	if ( typeof String.prototype.startsWith != 'function' ) {
	  String.prototype.startsWith = function( str ) {
		return this.substring( 0, str.length ) === str;
	  }
	};
	if ( typeof String.prototype.endsWith != 'function' ) {
	  String.prototype.endsWith = function( str ) {
		return this.substring( this.length - str.length, this.length ) === str;
	  }
	};

	document.onkeydown = function(e) {
		e.preventDefault();
		switch (e.keyCode) {
			case 37:
				left();
				break;
			case 38:
				up();
				break;
			case 39:
				right();
				break;
			case 40:
				down();
				break;
		}
	};

	load();
