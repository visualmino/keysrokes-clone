// ==UserScript==
// @name         erm
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  i forgot
// @author       wyt
// @match        https://fakeminecraftvisions.glitch.me/VisionLauncher.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=miniblox.io
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    const keystrokescontainer = document.createElement('div');
    keystrokescontainer.style.zIndex = '10000';
    keystrokescontainer.style.width = '300px';
    keystrokescontainer.style.height = '200px';
    keystrokescontainer.style.transform = 'translate(-50%, -50%)';
    keystrokescontainer.style.position = 'fixed';
    keystrokescontainer.style.left = GM_getValue('left') ? (GM_getValue('left') + 'px') : '50%';
    keystrokescontainer.style.top = GM_getValue('top') ? (GM_getValue('top') + 'px') : '50%';
    keystrokescontainer.style.opacity = '100%';
    keystrokescontainer.style.boxShadow = 'none';
    keystrokescontainer.style.backgroundColor = 'transparent';
    window.addEventListener('load', () => document.body.appendChild(keystrokescontainer));

    let isDragging = false;

    keystrokescontainer.addEventListener('mousedown', (event) => {
        if (event.target.nodeName !== 'INPUT') {
            isDragging = true;
        }
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const left = event.clientX;
            const top = event.clientY;

            keystrokescontainer.style.left = left + 'px';
            keystrokescontainer.style.top = top + 'px';

            GM_setValue('left', left);
            GM_setValue('top', top);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    const createKey = (text, top, left) => {
        const key = document.createElement('div');
        key.style.position = 'fixed';
        key.style.color = '#ffffff';
        key.textContent = text;
        key.style.top = top;
        key.style.left = left;
        key.style.transform = 'translateX(-50%)';
        key.style.zIndex = '10000';
        key.style.fontWeight = 'bold';
        key.style.borderRadius = '0';
        key.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
        key.style.border = '3px solid #333333';
        key.style.fontSize = '24px';
        key.style.height = '50px';
        key.style.width = '50px';
        key.style.textAlign = 'center';
        key.style.lineHeight = '50px';
        key.style.fontFamily = 'Roboto Mono, monospace';
        return key;
    };

    const wkey = createKey('W', '5px', '50%');
    const skey = createKey('S', '60px', '50%');
    const akey = createKey('A', '60px', '31.5%');
    const dkey = createKey('D', '60px', '68%');

    const lmb = document.createElement('div');
    lmb.style.position = 'fixed';
    lmb.style.color = '#ffffff';
    lmb.textContent = 'LMB';
    lmb.style.top = '115px';
    lmb.style.left = '23%';
    lmb.style.width = '79px';
    lmb.style.zIndex = '10000';
    lmb.style.fontWeight = 'bold';
    lmb.style.borderRadius = '0';
    lmb.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
    lmb.style.border = '3px solid #333333';
    lmb.style.fontSize = '18px';
    lmb.style.height = '50px';
    lmb.style.textAlign = 'center';
    lmb.style.lineHeight = '50px';
    lmb.style.fontFamily = 'Roboto Mono, monospace';

    const rmb = document.createElement('div');
    rmb.style.position = 'fixed';
    rmb.style.color = '#ffffff';
    rmb.textContent = 'RMB';
    rmb.style.top = '115px';
    rmb.style.left = '50%';
    rmb.style.width = '79px';
    rmb.style.zIndex = '10000';
    rmb.style.fontWeight = 'bold';
    rmb.style.borderRadius = '0';
    rmb.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
    rmb.style.border = '3px solid #333333';
    rmb.style.fontSize = '18px';
    rmb.style.height = '50px';
    rmb.style.textAlign = 'center';
    rmb.style.lineHeight = '50px';
    rmb.style.fontFamily = 'Roboto Mono, monospace';

    const space = document.createElement('div');
    space.style.position = 'fixed';
    space.style.color = '#ffffff';
    space.textContent = '_____';
    space.style.top = '170px';
    space.style.left = '50%';
    space.style.transform = 'translateX(-50%)';
    space.style.zIndex = '10000';
    space.style.fontWeight = 'bold';
    space.style.borderRadius = '0';
    space.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
    space.style.border = '3px solid #333333';
    space.style.fontSize = '18px';
    space.style.height = '50px';
    space.style.width = '160px';
    space.style.textAlign = 'center';
    space.style.lineHeight = '50px';
    space.style.fontFamily = 'Roboto Mono, monospace';

    keystrokescontainer.appendChild(wkey);
    keystrokescontainer.appendChild(skey);
    keystrokescontainer.appendChild(akey);
    keystrokescontainer.appendChild(dkey);
    keystrokescontainer.appendChild(lmb);
    keystrokescontainer.appendChild(rmb);
    keystrokescontainer.appendChild(space);

    document.addEventListener('keydown', (event) => {
        if (event.code === 'KeyW') {
            wkey.style.backgroundColor = '#8B0000';
        }
        else if (event.code === 'KeyS') {
            skey.style.backgroundColor = '#8B0000';
        }
        else if (event.code === 'KeyA') {
            akey.style.backgroundColor = '#8B0000';
        }
        else if (event.code === 'KeyD') {
            dkey.style.backgroundColor = '#8B0000';
        }
        else if (event.code === 'Space') {
            space.style.backgroundColor = '#8B0000';
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.code === 'KeyW') {
            wkey.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
        }
        else if (event.code === 'KeyS') {
            skey.style.backgroundColor = 'rgba(128, 128, 0.7)';
        }
        else if (event.code === 'KeyA') {
            akey.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
        }
        else if (event.code === 'KeyD') {
            dkey.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
        }
        else if (event.code === 'Space') {
            space.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
        }
    });

    document.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
            lmb.style.backgroundColor = '#8B0000';
        }
        else if (event.button === 2) {
            rmb.style.backgroundColor = '#8B0000';
        }
    });

    document.addEventListener('mouseup', (event) => {
        if (event.button === 0) {
            lmb.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
        }
        else if (event.button === 2) {
            rmb.style.backgroundColor = 'rgba(128, 128, 128, 0.7)';
        }
    });

    // Logic to inject and remove the external Keystrokes script
    const keystrokesModule = modules.find(module => module.name === 'Keystrokes');
    let injectedScript = null;

    function loadKeystrokesScript() {
        if (!injectedScript) {
            // Inject the script dynamically when the module is enabled
            injectedScript = document.createElement('script');
            injectedScript.src = 'https://github.com/wytlines100/unverified-keystokes/raw/main/Injection.js';
            injectedScript.type = 'text/javascript';
            document.body.appendChild(injectedScript);
            console.log('Keystrokes script loaded');
        }
    }

    function unloadKeystrokesScript() {
        if (injectedScript) {
            // Remove the dynamically injected script
            document.body.removeChild(injectedScript);
            injectedScript = null;
            console.log('Keystrokes script unloaded');
        }
    }

    // Listen for the module toggle change and load/unload the script accordingly
    modules.forEach(module => {
        if (module.name === 'Keystrokes') {
            const checkbox = document.querySelector(`.module[data-name="${module.name}"] input`);
            checkbox.addEventListener('change', () => {
                if (module.active) {
                    loadKeystrokesScript(); // Activate Keystrokes module
                } else {
                    unloadKeystrokesScript(); // Deactivate Keystrokes module
                }
            });
        }
    });

})();
