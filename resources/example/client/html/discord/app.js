console.log ('test web page')
let playerName;
function displayName(name)
{
	playerName = name;	
	document.write(playerName)
}

if ('alt' in window)
{
	alt.on ('display:Name', displayName);
	alt.emit('ready:Webview')
}
else
{
	displayName('TESTE')
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