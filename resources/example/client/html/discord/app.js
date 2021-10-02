console.log ('test web page')
let playerName;
function displayName(name)
{
	playerName = name;	
	document.write('TESTETESTE')
	document.write(playerName)
	
	// 1. Create the button
var button = document.createElement("button");
button.innerHTML = playerName;

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});
}

window.addEventListener('keydown', key => {
	if (key === 'Escape')
	{
		if ('alt' in window)
		{
			alt.emit ('close:Webview');
		}
	}
})
if ('alt' in window)
{
	alt.on('display:Name', displayName);
	alt.emit('ready')
}
else
{
	displayName('Ricardo_Santos')
}