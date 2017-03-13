try {
	const text = document.body.innerText;
	const obj = JSON.parse(text);
	const pre = document.createElement("pre");
	pre.innerText = JSON.stringify(obj, null, "\t");
	document.body.innerText = "";
	document.body.appendChild(pre);
} catch (e) {

}
