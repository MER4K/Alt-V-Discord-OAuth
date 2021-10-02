import alt from 'alt-client';
import * as native from 'natives';

import '/client/panels/chat';

// You won't see this unless you're in-game.
alt.log('The resource has now started client-sided. Poggers');

let webview;
alt.onServer('webView:Load', () =>
{
    if (!webview)
    {
        webview = new alt.WebView('http://resource/client/html/discord/index.html')   
        webview.on('close:Webview', closeWebview);
        webview.on('ready', ready);
    }
    webview.focus();
    alt.showCursor(true);
})
function ready()
{
    webview.emit('display:Name', alt.Player.local.name)
}
function closeWebview()
{
    alt.showCursor(false);
    webview.destroy();

    webview = undefined;
}