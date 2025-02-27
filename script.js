//your JS code here. If required.
const output = document.getElementById("output")
const btn = document.getElementById("btn")

const handleForm = async(e)=>{
	e.preventDefault()

	const name = document.getElementById("text").value
	const del = Number(document.getElementById("delay").value)

	if (!name || !delay) {
	    // alert("Please enter both text and delay.");
		document.getElementById("text").value = "";
		document.getElementById("delay").value = "";
	    return;
	  }
	
	btn.disabled = true;
	await new Promise((resolve) => setTimeout(resolve, del));
	display(name, del);
	btn.disabled = false;
	
	document.getElementById("text").value = "";
	document.getElementById("delay").value = "";
}

function display(name, delay){
	// output.innerText = `Text: "${name}" \nDelay: ${delay} milliseconds (${delay/1000} seconds)`
	output.innerText = `${name}`
}