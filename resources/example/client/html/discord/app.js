console.log ('test web page')
let playerName;
if ('alt' in window)
{
	alt.on ('display:Name', (displayName) => {

	})
}
else
{
	displayName('TESTE')
}
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