console.log ('test web page')

let playerName;

function displayName(name)
{
	playerName = name;
	document.write(playerName);
	console.log(`NAME? ${playerName}`)
}
window.addEventListener('keydown', function(e)
{
    if((e.key=='Escape'||e.key=='Esc'||e.keyCode==27))
	{
        if ('alt' in window)
		{
			alt.emit('close:Webview');
		}
		else
		{
			console.log('CLOSE')
		}
    }
}, true);

if ('alt' in window)
{
	alt.on('display:Name', displayName);
	alt.emit('ready')
}
else
{
	displayName('Ricardo_Santos')
}