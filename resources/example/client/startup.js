/// <reference types="@altv/types-client" />
import alt from 'alt-client';
import * as native from 'natives';

import '/client/panels/chat';

// You won't see this unless you're in-game.
alt.log('The resource has now started client-sided. Poggers');

let webview;
alt.onServer('webView:LoadLogin', () =>
{
    if (!webview)
    {
        webview = new alt.WebView('http://resource/client/html/discord/index.html')   
        webview.on('close:Webview', closeWebview);
        webview.on('ready:Webview', readyWebview);
    }
    webview.focus();
    alt.showCursor(true);
})

function closeWebview()
{
    alt.showCursor(false);
    webview.destroy();

    webview = undefined;
}
function readyWebview()
{
    webview.emit ('display:Name', alt.Player.local.name)
}