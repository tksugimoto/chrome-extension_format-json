try {
	var text = document.body.innerText;
	var obj = JSON.parse(text);
	var pre = document.createElement("pre");
	pre.innerText = JSON.stringify(obj, null, "\t");
	document.body.innerText = "";
	document.body.appendChild(pre);
} catch (e) {

}
