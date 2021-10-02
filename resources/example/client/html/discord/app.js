console.log ('test web page')

window.addEventListener('keydown', key => {
	if (key === 'Escape')
	{
		if ('alt' in window)
		{
			alt.emit ('close:Webview');
		}
	}
})
let playerName;
if ('alt' in window)
{
	alt.on ('display:Name', (name) => {

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