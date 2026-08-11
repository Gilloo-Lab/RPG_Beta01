/*:
 * @target MZ
 * @plugindesc Supprime la commande Objet du menu principal et du menu de combat dans tout le jeu.
 * @author Dev
 */

// 1. Supprime la commande "Objet" du menu principal (hors combat)
Window_MenuCommand.prototype.addMainCommands = function() {
    const enabled = this.areMainCommandsEnabled();
    if (this.needsCommand("skill")) {
        this.addCommand(TextManager.skill, "skill", enabled);
    }
    if (this.needsCommand("equip")) {
        this.addCommand(TextManager.equip, "equip", enabled);
    }
    if (this.needsCommand("status")) {
        this.addCommand(TextManager.status, "status", enabled);
    }
};

// 2. Supprime la commande "Objet" du menu de combat
Window_ActorCommand.prototype.addItemCommand = function() {
    // Désactivé volontairement
};