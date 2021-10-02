console.log ('test web page')
let playerName;
function displayName(name)
{
	playerName = name;	
	document.write(playerName)
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