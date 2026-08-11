/*:
 * @target MZ
 * @plugindesc Texte Défilant natif avec Pause (Espace), Saut (Entrée) et fenêtre d'aide transparente.
 * @author Dev
 */

(() => {
    // Déclaration explicite de la touche Espace physique (Keycode 32)
    Input.keyMapper[32] = 'custom_space';

    // --- CRÉATION DE LA FENÊTRE D'AIDE ---
    function Window_ScrollHelp() {
        this.initialize(...arguments);
    }

    Window_ScrollHelp.prototype = Object.create(Window_Base.prototype);
    Window_ScrollHelp.prototype.constructor = Window_ScrollHelp;

    Window_ScrollHelp.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this.opacity = 160; // Transparence du fond (0 = invisible, 255 = opaque)
        this.refresh();
    };

    Window_ScrollHelp.prototype.refresh = function() {
        this.contents.clear();
        this.contents.fontSize = 18; // Taille du texte explicatif
        const text = "[ESPACE] : Pause  |  [ENTRÉE] : Passer le générique";
        this.drawText(text, 0, 0, this.contentsWidth(), "center");
    };

    // --- EXTENSION DE WINDOW_SCROLLTEXT ---
    const _Window_ScrollText_startMessage = Window_ScrollText.prototype.startMessage;
    Window_ScrollText.prototype.startMessage = function() {
        _Window_ScrollText_startMessage.call(this);
        this._isPaused = false;
        Input.clear();

        // Créer et afficher la fenêtre d'aide en haut de l'écran (ou en bas)
        if (!this._helpWindow) {
            const width = 450;
            const height = 50;
            const x = (Graphics.boxWidth - width) / 2;
            const y = 20; // 20px depuis le haut (changez pour 'Graphics.boxHeight - 70' si vous préférez en bas)
            const rect = new Rectangle(x, y, width, height);
            
            this._helpWindow = new Window_ScrollHelp(rect);
            this.parent.addChild(this._helpWindow);
        }
        this._helpWindow.show();
    };

    const _Window_ScrollText_update = Window_ScrollText.prototype.update;
    Window_ScrollText.prototype.update = function() {
        if (this.isOpen() && this._text) {

            // 1. Touche ESPACE physique : Mettre en Pause / Reprendre
            if (Input.isTriggered('custom_space')) {
                this._isPaused = !this._isPaused;
            }

            // Si le texte est en pause, on empêche le défilement et la fermeture
            if (this._isPaused) {
                return;
            }

            // 2. Touche ENTRÉE / OK : Passer immédiatement le générique
            if (Input.isTriggered('ok')) {
                this.closeHelpWindow();
                this.terminateMessage();
                return;
            }
        }

        _Window_ScrollText_update.call(this);
    };

    const _Window_ScrollText_terminateMessage = Window_ScrollText.prototype.terminateMessage;
    Window_ScrollText.prototype.terminateMessage = function() {
        this.closeHelpWindow();
        _Window_ScrollText_terminateMessage.call(this);
    };

    Window_ScrollText.prototype.closeHelpWindow = function() {
        if (this._helpWindow) {
            this._helpWindow.hide();
        }
    };
})();