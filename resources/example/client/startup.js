/// <reference types="@altv/types-client" />
import alt from 'alt-client';
import * as native from 'natives';

import '/client/panels/chat';

// You won't see this unless you're in-game.
alt.log('The resource has now started client-sided. Poggers');


alt.onServer('webView:LoadLogin', () => {
    const webview = new alt.WebView('https://discordjs.guide/')
    webview.focus();

    alt.showCursor(true);

})