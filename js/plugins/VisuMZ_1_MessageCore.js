//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.56;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.56] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Text Language Information
 * ============================================================================
 *
 * As of Message Core version 1.46, Text Language has been added. 
 * 
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * As of Message Core version 1.53, we've decided to add support for TSV.
 * 
 * This is because we have done our research and decided that CSV's are too
 * restricted to use due to their default nature of wanting to use commas as
 * separators. Thus, we've decided to switch to TSV where the default separator
 * is a tab space, something that is almost never used in RPG Maker text.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Text Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Message Core's Plugin Parameters
 * #2. Plugin Parameters > Text Language Settings > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * Now, it's time to get the CSV/TSV file that will contain all of the text
 * used to translate your game's script.
 * 
 * #1. Play test your game. Make sure Play test mode is NOT disabled.
 * #2. A popup will appear asking to create a language CSV/TSV file.
 * #3. Click "OK" and let the plugin do its thing.
 * #4. The project's /data/ folder will appear with Language.csv/tsv made.
 * #5. The plugin will then ask you to restart your game.
 * 
 * '''IMPORTANT!''' The separator used for the CSV file must be a semicolon (;)
 * and not a comma (,) as to reduce the amount of punctuation conflicts. Keep
 * this in mind as most CSV editors will default to comma (,) instead of the
 * semicolon (;) for their separator.
 * 
 * ---
 * 
 * === How to Edit the Language CSV/TSV ===
 * 
 * The Language CSV/TSV is structured as a normal CSV/TSV file would be, which
 * also means it can be modified in programs like Microsoft Excel or Google
 * Sheets. We recommend using either of those programs to modify the text.
 * 
 * We do not recommend modifying the CSV/TSV file in programs like notepad
 * directly due to the way certain things like commas (,) and tabs are handled
 * and how easy it is to be error-prone.
 * 
 * The table will appear something like this at first:
 * 
 *     Key        English    Chinese    Japanese     Korean
 *     Greeting   Hello      你好       こんにちは    안녕하세요
 *     Farewell   Good-bye   再见       さようなら    안녕히
 *     Wow        Wow        哇         ワオ          와우
 * 
 * The "Key" column refers to the reference key used to determine which lines
 * will be inserted into the text. The columns with the languages will utilize
 * the respective phrases for that language.
 * 
 * You can remove columns containing languages that you aren't planning to
 * translate for your game.
 * 
 * ---
 * 
 * === Things to Keep in Mind ===
 * 
 * When adding text to the CSV/TSV file via the spreadsheet editor (Excel or
 * Google Sheets), there's a few things to keep in mind.
 * 
 * ---
 * 
 * ==== How to Load the CSV/TSV in Google Sheets ====
 * 
 * If you are using Google Sheets and wish to edit the CSV/TSV without it
 * converting all the separators into commas, here's what you do:
 * 
 * #1. Go to "https://sheets.google.com"
 * #2. Create a "Blank spreadsheet"
 * #3. File > Import > Upload > Select the CSV/TSV file that was created in
 *     your game project's /data/ folder. You may need to select "All Files"
 *     for file type if uploading a TSV.
 * #4. For "Separator Type", if you are using CSV, change it to "Custom" and
 *     insert the Semicolon ";". Otherwise, if you are using TSV, select "tab"
 *     as your separator type.
 * #5. Uncheck "Convert text to numbers, dates, and formulas"
 * 
 * ==== How to Load the CSV/TSV in VS Code ===
 * 
 * #1. Go to "https://code.visualstudio.com/"
 * #2. Download and install it
 * #3. Open up VS Code and go to View > Extensions
 * #4. Search for an extension called "Edit CSV"
 * #5. Load the CSV/TSV file into VS Code and view with the CSV Editor
 * #6. Click the button that says "Edit CSV" in the upper right
 * 
 * ==== Line Breaks ====
 * 
 * When you want to insert line breaks into the translated phrases, use the
 * <br> text code. This is best used for text that is to be transferred into
 * the message window or help window.
 * 
 * ==== Text Codes ====
 * 
 * Text codes like \C[2] can be inserted normally. However, they only work in
 * windows that support text codes, such as the message window or help window.
 * Otherwise, the text codes will not transfer over properly.
 * 
 * ==== Semicolons (CSV Only) ====
 * 
 * Due to the nature of the CSV file, we used the semicolon (;) as the
 * separator. As such, semicolons should not be used in the text entries.
 * Though some sentences will work with the semicolon, not all of them will. If
 * you do want to use a semicolon, use the text code <semicolon> instead.
 * 
 *   Example:
 * 
 *   "The pancakes were delicious<semicolon> they were fluffy and sweet."
 * 
 * Other variations of the semicolon text code are <semi> and <semi-colon>.
 * The <semicolon> text code and variants only work with the Language CSV and
 * are ignored otherwise when typed in a regular message box entry.
 * 
 * ---
 * 
 * ==== Macros and Language Switches ====
 * 
 * For those using both text macros and text language switches, macros will be
 * converted to text before language switches as it allows for better text
 * transitions that way.
 * 
 * ---
 * 
 * === How to Use the Reference Keys ===
 * 
 * Remember the "Key" column and the reference keys? Those are used to
 * determine which lines will be inserted into the text for the message window
 * and just about any other window. However, there's a specific way these keys
 * must be used in order for them to work.
 * 
 * The "text code" format works like this. Use any of the following:
 * 
 *   \tl{keyName}
 *   \translate{keyName}
 *   \loc{keyName}
 *   \locale{keyName}
 *   \localize{keyName}
 * 
 * or for those coming from different translation plugins but want to switch
 * over to the VisuStella MZ Message Core's translation system:
 * 
 *   ${keyName}
 * 
 * For example, to use one of the default keys made with the Language CSV/TSV:
 * 
 *   \tl{Greeting}
 * 
 * This will yield "Hello" in English, "你好" in Chinese, "こんにちは" in
 * Japanese, and "안녕하세요" in Korean.
 * 
 * Key names are not case sensitive and any trailing spaces will be removed
 * from them in order to make sure the CSV/TSV table is stable to reference any
 * translated text from.
 * 
 * You can insert these language "text codes" into item names, skill names,
 * etc. as well as system entries like for Attack, Defense, etc.
 * 
 * ---
 * 
 * === Naming Weapon Types, Armor Types, Equip Types, Item Categories ===
 * 
 * You might have noticed that if you've decided to use \tl{keyName} for weapon
 * or other database types, other parts of the game will error out. Don't
 * worry, for these, you don't have to change the currently used database name.
 * Go straight to the CSV/TSV and insert in a new key for that particular
 * database name. For example, the equip type "Accessory" will use "Accessory"
 * as the automatic key to look for a translated phrase. If there isn't any in
 * the CSV/TSV file, then the default database text entry will be used.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned. *Note1*
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned. *Note1*
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned. *Note1*
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start. Does not work with Word Wrap.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 * 
 * While these text codes are available globally, they are best suited for use
 * in the message window or any other window that does not change its contents.
 * The reason being is because the picture drawn is drawn into the background
 * of the window.
 * 
 * Therefore, we do not recommend using this in windows that change contents
 * often like Help Windows or Quest Descriptions. Instead, we recommend using
 * icons instead.
 * 
 * As of the version 1.53 update, the Help Window now supports both of these
 * text codes. However, we still recommend using icons over using pictures as
 * there will be loading delays.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Map Name)
 * ------------------   -------------------------------------------------------
 * <left>               Makes map name align to left side of screen.
 * <center>             Makes map name align to horizontally center of screen.
 * <right>              Makes map name align to right side of screen.
 * 
 * <top>                Makes map name align to top of screen.
 * <middle>             Makes map name align to vertically middle of screen.
 * <bottom>             Makes map name align to bottom of screen.
 * 
 * <X: +n>              Adjusts the horizontal position of map name by n.
 * <X: -n>              Adjusts the horizontal position of map name by n.
 * 
 * <Y: +n>              Adjusts the vertical position of map name by n.
 * <Y: -n>              Adjusts the vertical position of map name by n.
 * 
 * Note: All of these text codes require VisuMZ_0_CoreEngine installed and its
 * "Map Name Text Code" plugin parameter enabled.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <Caps>               Makes all text after this capitalized.
 *                      Turns off other auto-text case modes.
 *                      ie: "hello world" becomes "HELLO WORLD"
 * </Caps>              Turns off auto text-casing effects.
 * 
 * <Upper>              Makes the first letter of any word after a space to be
 *                      capitalized. Other letters are left alone.
 *                      Turns off other auto-text case modes.
 *                      ie. "old mcDonald" becomes "Old McDonald"
 * </Upper>             Turns off auto text-casing effects.
 * 
 * <Lower>              Makes all text after this lowercase.
 *                      Turns off other auto-text case modes.
 *                      ie: "THE QUICK BROWN FOX" becomes "the quick brown fox"
 * </Lower>             Turns off auto text-casing effects.
 * 
 * <Alt>                Makes all text after this alternate between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Hello" becomes "HeLlO"
 * </Alt>               Turns off auto text-casing effects.
 * 
 * <Chaos>              Makes all text after this randomize between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Wassup" becomes "waSsUP" or "WasSuP"
 * </Chaos>             Turns off auto text-casing effects.
 * 
 * **Clarity:** In case you're wondering, the text codes </Caps>, </Upper>,
 * </Lower>, </Alt>, and </Chaos> all do the same thing and can be used
 * interchangeably with each other. For example, you can do this:
 * <Caps>hello world</Lower> and it would still accomplish the same effect, but
 * you won't do that because you're not a monster of a developer.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
 * 
 * <Shuffle>                      Shuffles the order of all choices. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 * <Shuffle: x>                   Shuffles the order of all choices and only
 *                                x number of them will appear. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 *                                Hidden choices do not count towards x number.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Background Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <BgImg: filename>              Creates a background image from img/pictures/
 *                                stretched across the choice rectangle.
 * <BgImg LowerLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <BgImg LowerCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <BgImg LowerRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <BgImg MidLeft: filename>      Creates a background image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <BgImg Center: filename>       Creates a background image from img/pictures/
 *                                scaled to the center of choice rect.
 * <BgImg MidRight: filename>     Creates a background image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <BgImg UpperLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <BgImg UpperCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <BgImg UpperRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <BgImg: filename> text code variants, even if the background
 * image is smaller than the choice contents, it will overscale to match its
 * choice rectangle dimensions.
 * 
 * *Note:* Using a background image will clear the dimmed background rectangle
 * that is normally behind each selectable choice.
 * 
 * *Note:* Each choice can only have one background image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the background will appear behind the select cursor.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Foreground Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <FgImg: filename>              Creates a foreground image from img/pictures/
 *                                stretched across the choice rectangle.
 * <FgImg LowerLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <FgImg LowerCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <FgImg LowerRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <FgImg MidLeft: filename>      Creates a foreground image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <FgImg Center: filename>       Creates a foreground image from img/pictures/
 *                                scaled to the center of choice rect.
 * <FgImg MidRight: filename>     Creates a foreground image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <FgImg UpperLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <FgImg UpperCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <FgImg UpperRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <FgImg: filename> text code variants, unlike the background
 * variant, the foreground image will not overscale past its original size.
 * Instead, it will maintain its original size or be smaller, so long as it can
 * be scaled to exist within the choice rectangle unless it is intended to be
 * stretched by using the <FgImg: filename> variant.
 * 
 * *Note:* Text is then written on top of the foreground image.
 * 
 * *Note:* Each choice can only have one foreground image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the foreground will appear behind the select cursor.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index. *Note2*
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * Note: These text codes only work with the Message Window. Keep in mind that
 *   even if some windows might look like the Message Window, it may not
 *   necessarily be one.
 * 
 * Note2: This text code is used under the assumption that you are using an
 * existing face graphic to change from (doesn't matter which). The text code
 * will not automatically shift text from no-face graphic to having a face
 * graphic mid-message.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
 * 
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 * 
 * Choices: Distance
 * - Change the distance from choice window to the message window.
 * 
 *   Distance:
 *   - Change distance between the choice and message windows.
 *   - Default distance is 0.
 *   - Use negative to center align with remaining space.
 * 
 * ---
 *
 * Choices: Properties
 * - Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 * 
 *   Minimum Choice Width:
 *   - What is the minimum width size for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 * 
 *   Each Message Start:
 *   Each Message End:
 *   - This is text that is added at the start/end of each message.
 *   - You may use text codes.
 *   - Keep in mind that if a message extends to a different page (due to word
 *     wrap, excess lines, etc), that does not mean the starting text will
 *     be added to where the next page begins or the ending text will be added
 *     where the previous page ends.
 *   - Can be used for things like adding "<center>" to the start of each 
 *     message without having to type it every time.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 * 
 *   Minimum Choice Width:
 *   - What is the minimum choice width for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Font Manager
 * ============================================================================
 *
 * Custom fonts that aren't the message or number fonts cannot be used without
 * registration. If you try to use custom fonts in RPG Maker MZ without
 * registering their font family first, you will find out that they will not
 * work. These plugin parameters allow you to register your game's custom fonts
 * here.
 * 
 * ---
 * 
 * Settings:
 * 
 *   Font Family:
 *   - This will be what's used by RPG Maker MZ and plugins to reference this
 *     specific font.
 *   - NO filename extensions!
 * 
 *   Filename:
 *   - What is the filename of the custom font you would like to use?
 *   - Located inside the project's "fonts" folder.
 * 
 * ---
 * 
 * Examples:
 * 
 *   Font Family: WildWords
 *   Filename: WildWords-Regular.ttf
 * 
 * How you would use this in other plugins as a preface to the font face or
 * font family would be to use "WildWords" as the font face/family name. Then
 * RPG Maker MZ will use its own innate FontManager to refer that to the
 * "WildWords-Regular.ttf" file found in the game's "fonts" folder.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Language Settings
 * ============================================================================
 *
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * See the "Text Language Information" for more information.
 *
 * ---
 * 
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 *   File Type:
 *   - Which file type do you wish to use?
 *     - CSV (Legacy)
 *     - TSV (Recommended)
 * 
 *   CSV Filename:
 *   - What is the filename of the CSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 *   TSV Filename:
 *   - What is the filename of the TSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Text Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's
 *     script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - How does this language appear in the in-game options?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Fonts
 * ============================================================================
 *
 * Different default fonts used for different languages. This allows different
 * stylistic choices to be made for different languages in case the current
 * font you're using doesn't have support for other language types.
 * 
 * Keep in mind that players can override this with Options Core if they select
 * a text option other than 'Default' for the 'Text Font' option.
 * 
 * Make sure any new custom fonts used for different languages are registered
 * with the 'Custom Font Manager' found in this plugin's Plugin Parameters.
 *
 * ---
 * 
 * Languages:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - What font face is used for this language?
 *   - Make sure it is registered under Custom Font Manager.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Images
 * ============================================================================
 *
 * Allows different images to be used when different languages are used. This
 * is for images that have text on it that you want to appear in different
 * languages based on the text language selected by the player.
 * 
 * There are two ways this works:
 * 
 *   #1: Folder Name
 *   - The name of the folder containing those images will be named something
 *     like "Scrolls[XX]"
 *   - When a different language is picked, like English, it can reference
 *     the 'Scrolls[EN]' folder instead. If Japanese is used, it can refer to
 *     the 'Scrolls[JP]' folder as well.
 *   - The text used to replace the [XX] in the folder name can be determined
 *     in the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 * 
 *   #2: Filename
 *   - The filename of the image to be translated can be named something like
 *     ReidProfile[XX].png
 *   - When a different language is picked, like English, it will reference the
 *     'ReidProfile[EN].png' image instead. For Japanese, it will reference the
 *     'ReidProfile[JP].png' as well.
 *   - The text used to replace the [XX] in the filename can be determined in
 *     the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 *
 * ---
 * 
 * Settings
 * 
 *   Convert Default?
 *   - ON: Default language uses converted marker.
 *   - OFF: Default languages uses [XX] as marker.
 * 
 * Here's an explanation of what this does:
 * 
 *   - The default language picked is English and the player has English picked
 *     as their desired language.
 *   - If the "Convert Default?" Plugin Parameter is ON, then 'ReidProfile[XX]'
 *     will reference and look for the 'ReidProfile[EN]' image.
 *   - If the "Convert Default?" Plugin Parameter is OFF, 'ReidProfile[XX]' is
 *     then used for the English language instead of 'ReidProfile[EN]'.
 *     - This is to avoid duplicate images and save on file space.
 *   - The reasoning behind the [XX] is that there needs to be an anchor image
 *     used for the RPG Maker MZ client in order to have something to reference
 *     before branching out to different languages.
 * 
 * ---
 * 
 * Languages 
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - This text will replace [XX] with in image folder names and filenames
 *     when this language is selected.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces.
 * 
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 * 
 * As of the v1.44 update, some Asian languages such as Chinese and Japanese
 * are now supported for word wrap. Korean language is only supported if spaces
 * are used.
 * 
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.56: June 15, 2026
 * * Feature Update!
 * ** Comments no longer break continuous Show Choices when making larger
 *    Show Choice lists. Update made by Irina.
 * 
 * Version 1.55: January 19, 2026
 * * Documentation Update!
 * ** \ChangeFace<x,y> text codegets a note added:
 * *** This text code is used under the assumption that you are using an
 *     existing face graphic to change from (doesn't matter which). The text
 *     code will not automatically shift text from no-face graphic to having a
 *     face graphic mid-message.
 * 
 * Version 1.54: May 15, 2025
 * * Bug Fixes!
 * ** Fixed a bug where the text width of translated text was not taken into
 *    account. Fix made by Arisu
 * 
 * Version 1.53: February 20, 2025, 2025
 * * Bug Fixes!
 * ** Fixed an error with text language translations not working properly for
 *    the last listed language in the translation sheet. Fix made by Irina.
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Text Language Information section included for TSV.
 * ** Updated text code note for \picture<x> and \CenterPicture<x>
 * *** As of the version 1.53 update, the Help Window now supports both of
 *     these text codes. However, we still recommend using icons over using
 *     pictures as there will be loading delays.
 * * Plugin Parameters
 * ** New plugin parameters added by Irina:
 * *** Parameters > Text Language Settings > File Type:
 * **** Which file type do you wish to use?
 * ***** CSV (Legacy)
 * ***** TSV (Recommended)
 * *** Parameters > Text Language Settings > TSV Filename
 * **** What is the filename of the TSV file to read from?
 * **** Located within the project's /data/ folder.
 * * Feature Updates!
 * ** We have done our research and decided that CSV's are too restricted to
 *    use due to their default nature of wanting to use commas as separators.
 *    Thus, we've decided to switch to TSV where the default separator is a tab
 *    space, something that is almost never used in RPG Maker text.
 * ** CSV support will remain as a legacy option but TSV will be recommended as
 *    the main text languaging switching filetype.
 * ** When creating a new Language TSV, the plugin will check if a Language CSV
 *    exists and asks you if you wish to convert the existing CSV to TSV. The
 *    original CSV file will remain intact as a backup.
 * 
 * Version 1.52: December 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Arisu:
 * *** <left>
 * *** <center>
 * *** <right>
 * **** When used in the Map Name, instead of aligning the text which is
 *      centered by default, the text code will align the horizontal position
 *      of the name displayed on the screen.
 * *** <top>
 * *** <middle>
 * *** <bottom>
 * **** When used in the Map Name, the text code will align the vertical
 *      position of the name displayed on the screen.
 * *** <X: +n>
 * *** <X: -n>
 * *** <Y: +n>
 * *** <Y: -n>
 * **** Adjusts the horizontal/vertical position of map name by 'n' value.
 * *** All of these text codes require VisuMZ_0_CoreEngine installed and its
 *     "Map Name Text Code" plugin parameter enabled.
 * 
 * Version 1.51: October 17, 2024
 * * Bug Fixes!
 * ** Fixed a bug where \LastGainObj text code did not work with text language
 *    key codes. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added note to Text Language Information > How to Enable Switching
 * *** IMPORTANT! The separator used for the CSV file must be a semicolon (;)
 *     and not a comma (,) as to reduce the amount of punctuation conflicts.
 *     Keep this in mind as most CSV editors will default to comma (,) instead
 *     of the semicolon (;) for their separator.
 * ** Added note to Text Language Information > Naming Weapon Types, etc:
 * *** You might have noticed that if you've decided to use \tl{keyName} for
 *     weapon or other database types, other parts of the game will error out.
 *     Don't worry, for these, you don't have to change the currently used
 *     database name. Go straight to the CSV and insert in a new key for that
 *     particular database name. For example, the equip type "Accessory" will
 *     use "Accessory" as the automatic key to look for a translated phrase. If
 *     there isn't any in the CSV file, then the default database text entry
 *     will be used.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Text Language Settings > Language Fonts
 * **** Different default fonts used for different languages. This allows
 *      different stylistic choices to be made for different languages in case
 *      the current font you're using doesn't have support for other language
 *      types.
 * **** Keep in mind that players can override this with Options Core if they
 *      select a text option other than 'Default' for the 'Text Font' option.
 * **** Make sure any new custom fonts used for different languages are
 *      registered with the 'Custom Font Manager' found in this plugin's Plugin
 *      Parameters.
 * *** Parameters > Text Language Settings > Language Images
 * **** Allows different images to be used when different languages are used.
 *      This is for images that have text on it that you want to appear in
 *      different languages based on the text language selected by the player.
 * 
 * Version 1.50: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina:
 * *** <Caps> </Caps>
 * *** <Upper> </Upper>
 * *** <Lower> </Lower>
 * **** Auto-text case textcodes will automatically adjust text inserted
 *      between them to respectively be completely capitalized, first-letter
 *      capitalized, or completely lowercase.
 * **** More information in the help file.
 * *** <Alt> </Alt>
 * **** Alternates between uppercase and lowercase for letters.
 * *** <Chaos> </Chaos>
 * **** Randomly uses uppercase and lowercase for letters.
 * 
 * 
 * Version 1.49: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where using text codes to get database object names did
 *    not apply translated text.
 * * Documentation Update!
 * ** Added note for Message Window Only text code effects:
 * *** These text codes only work with the Message Window. Keep in mind that
 *     even if some windows might look like the Message Window, it may not
 *     necessarily be one.
 * * Feature Update!
 * ** Added a failsafe for when Choice List Window doesn't have any viable
 *    options (due to being hidden or disabled). Update made by Irina.
 * ** Added a failsafe for Language CSV when empty rows are added.
 * ** Updated some default Text Code actions in order to make sure they're only
 *    used by the Message Window and not anything else. Update made by Irina.
 * 
 * Version 1.48: April 18, 2024
 * * Bug Fixes!
 * ** Added fail safe for help description checks parsing from objects without
 *    help descriptions normally. Fix made by Irina.
 * 
 * Version 1.47: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Custom Font Manager
 * **** Register custom fonts here.
 * **** Custom fonts that aren't the message or number fonts cannot be used
 *      without registration.
 * **** See help file for more information.
 * 
 * Version 1.46: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where script calls used to create message choices would not
 *    work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Text Language Switching added by Irina:
 * *** Plugin Parameters > Text Language Settings
 * **** The "Text Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Text Language" feature of the VisuStella MZ Message
 *      Core will require manual input by the game developer.
 * **** Read more about it in detail within the "Text Language Information"
 *      section in the help file.
 * ** New Plugin Parameter added by Irina:
 * *** Choices: Distance
 * **** Change the distance from choice window to the message window.
 * ** New parameter added to Plugin Command "Choices: Properties" by Irina:
 * *** Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Plugin Parameter for "Message Window" added by Irina:
 * *** Parameters > Message Window: Choice List Window> Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Text Codes for Choice Window added by Irina:
 * *** <BgImg: filename> and variants
 * *** <FgImg: filename> and variants
 * **** These text codes allow adding a background or foreground image to a
 *      choice rectangle in stretched/scaled size.
 * 
 * Version 1.45: December 14, 2023
 * * Bug Fixes!
 * ** Punctuation was, for some reason, excluded when using Wordwrap with
 *    Japanese and Chinese languages. This should be fixed now. Fixed by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added clarity to the <left>, <center>, and <right> being unable to be
 *    used together with word wrap.
 * *** Word Wrap also cannot be used together with <left>, <center>, or <right>
 *     and will disable itself if text alignment text codes are detected.
 * * Feature Update!
 * ** Wordwrap <br> now works properly with Japanese and Chinese languages.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > General Settings > Each Message Start
 * *** Plugin Parameters > General Settings > Each Message End
 * **** This is text that is added at the start/end of each message.
 * **** Keep in mind that if a message extends to a different page (due to word
 *      wrap, excess lines, etc), that does not mean the starting text will
 *      be added to where the next page begins or the ending text will be added
 *      where the previous page ends.
 * **** Can be used for things like adding "<center>" to the start of each 
 *      message without having to type it every time.
 * 
 * Version 1.44: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Plugin Parameters: Word Wrap Settings" section:
 * *** As of the v1.44 update, some Asian languages such as Chinese and
 *     Japanese are now supported for word wrap. Korean language is only
 *     supported if spaces are used.
 * * Feature Update!
 * ** Word Wrap is now supported for Japanese and Chinese languages.
 * ** Feature updated by Irina and sponsored by AndyL.
 * * New Features!
 * ** New text codes added by Irina for "Show Choices" event command.
 * *** <Shuffle>
 * **** Shuffles the order of all choices. Any cancel shortcuts other than
 *      "Branch" will be undone.
 * *** <Shuffle: x>
 * **** Shuffles the order of all choices and only x number of them appear. Any
 *      cancel shortcuts other than "Branch" will be undone. Hidden choices do
 *      not count towards x number.
 * 
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowDistance
 * @text Choices: Distance
 * @desc Change the distance from choice window to the message window.
 *
 * @arg Distance:eval
 * @text Distance
 * @desc Change distance between the choice and message windows.
 * Default distance is 0. Use negative to center align.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Choice Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MinWidth:num
 * @text Minimum Choice Width
 * @type number
 * @min 0
 * @desc What is the minimum width size for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MessageCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param CustomFonts:arraystruct
 * @text Custom Font Manager
 * @type struct<CustomFont>[]
 * @desc Register custom fonts here. Custom fonts that aren't the
 * message or number fonts cannot be used without this.
 * @default []
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = data[0].trim();\\\\n        const index = parseInt(data[1] || '0');\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = $gameMessage.faceName();\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing && this.constructor === Window_Message) {\\\\n        this.setTextDelay(delay);\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"heart\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"3\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjIcon\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectIcon();\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param Localization:struct
 * @text Text Language Settings
 * @type struct<Localization>
 * @desc Text Language settings for this plugin.
 * @default {"Main":"","Enable:eval":"false","CsvFilename:str":"Languages.csv","Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Language","Localized":"","DefaultLocale:str":"English","Languages:arraystr":"[\"Bengali\",\"Chinese(Simplified)\",\"Chinese(Traditional)\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Hindi\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Korean\",\"Norwegian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Spanish\",\"Swedish\",\"Tamil\",\"Thai\",\"Turkish\"]","LangNames":"","Bengali:str":"বাংলা","Chinese(Simplified):str":"简体中文","Chinese(Traditional):str":"繁體中文","Czech:str":"Čeština","Danish:str":"Dansk","Dutch:str":"Nederlands","English:str":"English","Finnish:str":"Suomi","French:str":"Français","German:str":"Deutsch","Greek:str":"Ελληνικά","Hindi:str":"हिन्दी","Hungarian:str":"Magyar","Indonesian:str":"Bahasa Indo","Italian:str":"Italiano","Japanese:str":"日本語","Korean:str":"한국어","Norwegian:str":"Norsk","Polish:str":"Polski","Portuguese:str":"Português","Romanian:str":"Română","Russian:str":"Русский","Slovak:str":"Slovenčina","Spanish:str":"Español","Swedish:str":"Svenska","Tamil:str":"தமிழ்","Thai:str":"ไทย","Turkish:str":"Türkçe"}
 *
 * @param LanguageFonts:struct
 * @text Language Fonts
 * @parent Localization:struct
 * @type struct<LanguageFonts>
 * @desc Different default fonts used for different languages.
 * Players can override this with Options Core.
 * @default {"Bengali:str":"rmmz-mainfont","Chinese(Simplified):str":"rmmz-mainfont","Chinese(Traditional):str":"rmmz-mainfont","Czech:str":"rmmz-mainfont","Danish:str":"rmmz-mainfont","Dutch:str":"rmmz-mainfont","English:str":"rmmz-mainfont","Finnish:str":"rmmz-mainfont","French:str":"rmmz-mainfont","German:str":"rmmz-mainfont","Greek:str":"rmmz-mainfont","Hindi:str":"rmmz-mainfont","Hungarian:str":"rmmz-mainfont","Indonesian:str":"rmmz-mainfont","Italian:str":"rmmz-mainfont","Japanese:str":"rmmz-mainfont","Korean:str":"rmmz-mainfont","Norwegian:str":"rmmz-mainfont","Polish:str":"rmmz-mainfont","Portuguese:str":"rmmz-mainfont","Romanian:str":"rmmz-mainfont","Russian:str":"rmmz-mainfont","Slovak:str":"rmmz-mainfont","Spanish:str":"rmmz-mainfont","Swedish:str":"rmmz-mainfont","Tamil:str":"rmmz-mainfont","Thai:str":"rmmz-mainfont","Turkish:str":"rmmz-mainfont"}
 *
 * @param LanguageImages:struct
 * @text Language Images
 * @parent Localization:struct
 * @type struct<LanguageImages>
 * @desc Allows different images to be used when different
 * languages are used. See help for more information.
 * @default {"ConvertDefault:eval":"false","Languages":"","Bengali:str":"[XX]","Chinese(Simplified):str":"[XX]","Chinese(Traditional):str":"[XX]","Czech:str":"[XX]","Danish:str":"[XX]","Dutch:str":"[XX]","English:str":"[XX]","Finnish:str":"[XX]","French:str":"[XX]","German:str":"[XX]","Greek:str":"[XX]","Hindi:str":"[XX]","Hungarian:str":"[XX]","Indonesian:str":"[XX]","Italian:str":"[XX]","Japanese:str":"[XX]","Korean:str":"[XX]","Norwegian:str":"[XX]","Polish:str":"[XX]","Portuguese:str":"[XX]","Romanian:str":"[XX]","Russian:str":"[XX]","Slovak:str":"[XX]","Spanish:str":"[XX]","Swedish:str":"[XX]","Tamil:str":"[XX]","Thai:str":"[XX]","Turkish:str":"[XX]"}
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param EachMessageStart:json
 * @text Each Message Start
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the start of each message.
 * You may use text codes.
 * @default ""
 *
 * @param EachMessageEnd:json
 * @text Each Message End
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the end of each message.
 * You may use text codes.
 * @default ""
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMinWidth:num
 * @text Minimum Choice Width
 * @parent ChoiceListWindow
 * @type number
 * @min 0
 * @desc What is the minimum choice width for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default rmmz-mainfont
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Font Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomFont:
 *
 * @param FontFamily:str
 * @text Font Family
 * @desc This will be what's used by RPG Maker MZ and plugins to
 * reference this specific font. NO filename extensions!
 * @default Unnamed
 *
 * @param Filename:str
 * @text Filename
 * @desc What is the filename of the font you would like to use?
 * Located inside the project's "fonts" folder.
 * @default Unnamed.ttf
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param LangFiletype:str
 * @text File Type
 * @parent Main
 * @type select
 * @option CSV (Legacy)
 * @value csv
 * @option TSV (Recommended)
 * @value tsv
 * @desc Which file type do you wish to use?
 * @default tsv
 *
 * @param CsvFilename:str
 * @text CSV Filename
 * @parent Main
 * @desc What is the filename of the CSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.csv
 *
 * @param TsvFilename:str
 * @text TSV Filename
 * @parent Main
 * @desc What is the filename of the TSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.tsv
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Language' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Text Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese(Simplified)","Chinese(Traditional)","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default বাংলা
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 简体中文
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 繁體中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Language Fonts Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageFonts:
 *
 * @param Bengali:str
 * @text Bengali
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Czech:str
 * @text Czech
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Danish:str
 * @text Danish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Dutch:str
 * @text Dutch
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param English:str
 * @text English
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Finnish:str
 * @text Finnish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param French:str
 * @text French
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param German:str
 * @text German
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Greek:str
 * @text Greek
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hindi:str
 * @text Hindi
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Italian:str
 * @text Italian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Japanese:str
 * @text Japanese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Korean:str
 * @text Korean
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Polish:str
 * @text Polish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Romanian:str
 * @text Romanian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Russian:str
 * @text Russian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Slovak:str
 * @text Slovak
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Spanish:str
 * @text Spanish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Swedish:str
 * @text Swedish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Tamil:str
 * @text Tamil
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Thai:str
 * @text Thai
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Turkish:str
 * @text Turkish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 *
 */
/* ----------------------------------------------------------------------------
 * Language Images Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageImages:
 *
 * @param ConvertDefault:eval
 * @text Convert Default?
 * @type boolean
 * @on Convert
 * @off Don't
 * @desc ON: Default language uses converted marker.
 * OFF: Default languages uses [XX] as marker.
 * @default false
 *
 * @param Languages
 * @text Languages
 *
 * @param Bengali:str
 * @text Bengali
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Czech:str
 * @text Czech
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Danish:str
 * @text Danish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param English:str
 * @text English
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param French:str
 * @text French
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param German:str
 * @text German
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Greek:str
 * @text Greek
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Italian:str
 * @text Italian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Korean:str
 * @text Korean
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Polish:str
 * @text Polish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Russian:str
 * @text Russian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Thai:str
 * @text Thai
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

const _0x4fc126=_0x19df;(function(_0x2f7fa9,_0x259fc8){const _0x23a710=_0x19df,_0x11c1fc=_0x2f7fa9();while(!![]){try{const _0x512676=-parseInt(_0x23a710(0x1d2))/0x1*(-parseInt(_0x23a710(0x553))/0x2)+-parseInt(_0x23a710(0x4d2))/0x3*(parseInt(_0x23a710(0x34f))/0x4)+-parseInt(_0x23a710(0x331))/0x5*(parseInt(_0x23a710(0x1e8))/0x6)+parseInt(_0x23a710(0x211))/0x7+-parseInt(_0x23a710(0x4bf))/0x8*(parseInt(_0x23a710(0x362))/0x9)+parseInt(_0x23a710(0x21f))/0xa*(-parseInt(_0x23a710(0x419))/0xb)+-parseInt(_0x23a710(0x28e))/0xc*(-parseInt(_0x23a710(0x2d3))/0xd);if(_0x512676===_0x259fc8)break;else _0x11c1fc['push'](_0x11c1fc['shift']());}catch(_0xd7e67a){_0x11c1fc['push'](_0x11c1fc['shift']());}}}(_0x2a97,0xbb2d6));var label=_0x4fc126(0x1b8),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x291aba){const _0x4d31c0=_0x4fc126;return _0x291aba[_0x4d31c0(0x320)]&&_0x291aba[_0x4d31c0(0x4be)]['includes']('['+label+']');})[0x0];function _0x19df(_0x2abcb0,_0x39036e){const _0x2a97a3=_0x2a97();return _0x19df=function(_0x19df84,_0x5b1469){_0x19df84=_0x19df84-0x1af;let _0x21effa=_0x2a97a3[_0x19df84];return _0x21effa;},_0x19df(_0x2abcb0,_0x39036e);}VisuMZ[label]['Settings']=VisuMZ[label][_0x4fc126(0x248)]||{},VisuMZ['ConvertParams']=function(_0x52646d,_0x1ade5e){const _0x58c545=_0x4fc126;for(const _0x69927a in _0x1ade5e){if(_0x69927a[_0x58c545(0x2b4)](/(.*):(.*)/i)){const _0x2e5945=String(RegExp['$1']),_0x2c149f=String(RegExp['$2'])[_0x58c545(0x1c4)]()[_0x58c545(0x20f)]();let _0x477c08,_0x5342b8,_0x1a08d0;switch(_0x2c149f){case _0x58c545(0x332):_0x477c08=_0x1ade5e[_0x69927a]!==''?Number(_0x1ade5e[_0x69927a]):0x0;break;case _0x58c545(0x288):_0x5342b8=_0x1ade5e[_0x69927a]!==''?JSON[_0x58c545(0x264)](_0x1ade5e[_0x69927a]):[],_0x477c08=_0x5342b8['map'](_0x1b8cb1=>Number(_0x1b8cb1));break;case _0x58c545(0x3ae):_0x477c08=_0x1ade5e[_0x69927a]!==''?eval(_0x1ade5e[_0x69927a]):null;break;case _0x58c545(0x2da):_0x5342b8=_0x1ade5e[_0x69927a]!==''?JSON[_0x58c545(0x264)](_0x1ade5e[_0x69927a]):[],_0x477c08=_0x5342b8['map'](_0x4a2273=>eval(_0x4a2273));break;case _0x58c545(0x3b5):_0x477c08=_0x1ade5e[_0x69927a]!==''?JSON[_0x58c545(0x264)](_0x1ade5e[_0x69927a]):'';break;case _0x58c545(0x54b):_0x5342b8=_0x1ade5e[_0x69927a]!==''?JSON[_0x58c545(0x264)](_0x1ade5e[_0x69927a]):[],_0x477c08=_0x5342b8[_0x58c545(0x481)](_0x4572f4=>JSON[_0x58c545(0x264)](_0x4572f4));break;case'FUNC':_0x477c08=_0x1ade5e[_0x69927a]!==''?new Function(JSON[_0x58c545(0x264)](_0x1ade5e[_0x69927a])):new Function(_0x58c545(0x45c));break;case _0x58c545(0x337):_0x5342b8=_0x1ade5e[_0x69927a]!==''?JSON['parse'](_0x1ade5e[_0x69927a]):[],_0x477c08=_0x5342b8[_0x58c545(0x481)](_0xd60e36=>new Function(JSON[_0x58c545(0x264)](_0xd60e36)));break;case _0x58c545(0x380):_0x477c08=_0x1ade5e[_0x69927a]!==''?String(_0x1ade5e[_0x69927a]):'';break;case _0x58c545(0x534):_0x5342b8=_0x1ade5e[_0x69927a]!==''?JSON[_0x58c545(0x264)](_0x1ade5e[_0x69927a]):[],_0x477c08=_0x5342b8[_0x58c545(0x481)](_0x3923c5=>String(_0x3923c5));break;case _0x58c545(0x50a):_0x1a08d0=_0x1ade5e[_0x69927a]!==''?JSON['parse'](_0x1ade5e[_0x69927a]):{},_0x52646d[_0x2e5945]={},VisuMZ[_0x58c545(0x38f)](_0x52646d[_0x2e5945],_0x1a08d0);continue;case _0x58c545(0x376):_0x5342b8=_0x1ade5e[_0x69927a]!==''?JSON['parse'](_0x1ade5e[_0x69927a]):[],_0x477c08=_0x5342b8[_0x58c545(0x481)](_0x3ec2bb=>VisuMZ[_0x58c545(0x38f)]({},JSON[_0x58c545(0x264)](_0x3ec2bb)));break;default:continue;}_0x52646d[_0x2e5945]=_0x477c08;}}return _0x52646d;},(_0x2c3567=>{const _0x144878=_0x4fc126,_0x5a152e=_0x2c3567['name'];for(const _0x33e2c3 of dependencies){if(!Imported[_0x33e2c3]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x144878(0x3d6)](_0x5a152e,_0x33e2c3)),SceneManager[_0x144878(0x3f9)]();break;}}const _0x3c9ae8=_0x2c3567[_0x144878(0x4be)];if(_0x3c9ae8[_0x144878(0x2b4)](/\[Version[ ](.*?)\]/i)){const _0x19767d=Number(RegExp['$1']);_0x19767d!==VisuMZ[label][_0x144878(0x37c)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x144878(0x3d6)](_0x5a152e,_0x19767d)),SceneManager[_0x144878(0x3f9)]());}if(_0x3c9ae8[_0x144878(0x2b4)](/\[Tier[ ](\d+)\]/i)){const _0xdcdbaf=Number(RegExp['$1']);_0xdcdbaf<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x144878(0x3d6)](_0x5a152e,_0xdcdbaf,tier)),SceneManager[_0x144878(0x3f9)]()):tier=Math[_0x144878(0x447)](_0xdcdbaf,tier);}VisuMZ[_0x144878(0x38f)](VisuMZ[label][_0x144878(0x248)],_0x2c3567[_0x144878(0x1dc)]);})(pluginData),PluginManager[_0x4fc126(0x416)](pluginData[_0x4fc126(0x2b3)],_0x4fc126(0x45e),_0x3f4690=>{const _0x24c29a=_0x4fc126;VisuMZ['ConvertParams'](_0x3f4690,_0x3f4690);const _0x2843c5=Number(_0x3f4690[_0x24c29a(0x3ca)])||0x0;$gameSystem['setChoiceMessageDistance'](_0x2843c5);}),PluginManager[_0x4fc126(0x416)](pluginData[_0x4fc126(0x2b3)],'ChoiceWindowProperties',_0x3dc5c4=>{const _0x4c4303=_0x4fc126;VisuMZ[_0x4c4303(0x38f)](_0x3dc5c4,_0x3dc5c4);const _0x434cfc=_0x3dc5c4[_0x4c4303(0x220)]||$gameSystem['getChoiceListLineHeight']()||0x1,_0xb518e9=_0x3dc5c4[_0x4c4303(0x382)]??0x60,_0x117f2a=_0x3dc5c4[_0x4c4303(0x350)]||$gameSystem['getChoiceListMaxRows']()||0x1,_0x504842=_0x3dc5c4[_0x4c4303(0x401)]||$gameSystem[_0x4c4303(0x309)]()||0x1,_0x403349=_0x3dc5c4['TextAlign']['toLowerCase']()||_0x4c4303(0x444);$gameSystem[_0x4c4303(0x3bd)](_0x434cfc),$gameSystem[_0x4c4303(0x525)](_0xb518e9),$gameSystem[_0x4c4303(0x1f9)](_0x117f2a),$gameSystem[_0x4c4303(0x3ac)](_0x504842),$gameSystem[_0x4c4303(0x464)](_0x403349);}),PluginManager[_0x4fc126(0x416)](pluginData[_0x4fc126(0x2b3)],'MessageWindowProperties',_0x303ac3=>{const _0xe2c123=_0x4fc126;VisuMZ['ConvertParams'](_0x303ac3,_0x303ac3);const _0x4e5bdb=_0x303ac3[_0xe2c123(0x30f)]||$gameSystem['getMessageWindowRows']()||0x1,_0x2ffef7=_0x303ac3[_0xe2c123(0x292)]||$gameSystem['getMessageWindowWidth']()||0x1;$gameTemp['_centerMessageWindow']=!![];const _0x52b228=_0x303ac3[_0xe2c123(0x3c8)][_0xe2c123(0x432)]();$gameSystem[_0xe2c123(0x4fe)](_0x4e5bdb),$gameSystem[_0xe2c123(0x32e)](_0x2ffef7);[_0xe2c123(0x1f6),'false']['includes'](_0x52b228)&&$gameSystem['setMessageWindowWordWrap'](eval(_0x52b228));const _0x4e9707=SceneManager['_scene'][_0xe2c123(0x38a)];_0x4e9707&&(_0x4e9707[_0xe2c123(0x1be)](),_0x4e9707[_0xe2c123(0x306)](),_0x4e9707[_0xe2c123(0x1cd)]());}),PluginManager['registerCommand'](pluginData['name'],_0x4fc126(0x315),_0x39fd16=>{const _0x503157=_0x4fc126;VisuMZ[_0x503157(0x38f)](_0x39fd16,_0x39fd16),$gameSystem[_0x503157(0x41f)](_0x39fd16[_0x503157(0x520)],_0x39fd16['OffsetY']);const _0x407699=SceneManager['_scene'][_0x503157(0x38a)];_0x407699&&(_0x407699[_0x503157(0x1be)](),_0x407699[_0x503157(0x306)](),_0x407699[_0x503157(0x1cd)]());}),PluginManager[_0x4fc126(0x416)](pluginData[_0x4fc126(0x2b3)],_0x4fc126(0x33e),_0x437a46=>{const _0x229f07=_0x4fc126;VisuMZ[_0x229f07(0x38f)](_0x437a46,_0x437a46),$gameMessage[_0x229f07(0x442)](_0x437a46[_0x229f07(0x3cd)]||0x0,_0x437a46['WeaponTypeID']||0x0);const _0x2ef7f5=$gameTemp[_0x229f07(0x426)]();if(_0x2ef7f5)_0x2ef7f5[_0x229f07(0x286)](_0x229f07(0x557));}),PluginManager[_0x4fc126(0x416)](pluginData[_0x4fc126(0x2b3)],_0x4fc126(0x1b7),_0x4eb68a=>{const _0x473716=_0x4fc126;VisuMZ[_0x473716(0x38f)](_0x4eb68a,_0x4eb68a),$gameMessage[_0x473716(0x2d4)](_0x4eb68a[_0x473716(0x3cd)]||0x0,_0x4eb68a[_0x473716(0x509)]||0x0,_0x4eb68a[_0x473716(0x4f8)]||0x0);const _0x530e8f=$gameTemp[_0x473716(0x426)]();if(_0x530e8f)_0x530e8f[_0x473716(0x286)](_0x473716(0x557));}),PluginManager['registerCommand'](pluginData[_0x4fc126(0x2b3)],_0x4fc126(0x503),_0x346ee9=>{const _0x15c2a9=_0x4fc126;VisuMZ['ConvertParams'](_0x346ee9,_0x346ee9),$gameMessage['setSkillChoice'](_0x346ee9[_0x15c2a9(0x3cd)]||0x0,_0x346ee9['ActorID']||0x0,_0x346ee9[_0x15c2a9(0x295)]||0x0);const _0x532507=$gameTemp[_0x15c2a9(0x426)]();if(_0x532507)_0x532507[_0x15c2a9(0x286)](_0x15c2a9(0x557));}),PluginManager[_0x4fc126(0x416)](pluginData['name'],_0x4fc126(0x494),_0x178093=>{const _0xe3f062=_0x4fc126;VisuMZ['ConvertParams'](_0x178093,_0x178093);const _0x4e24a4=_0x178093[_0xe3f062(0x247)]||[],_0x10def5=_0x178093[_0xe3f062(0x3a7)]||0x0,_0x4cdb5a=[_0xe3f062(0x480),'up',_0xe3f062(0x391),_0xe3f062(0x4ee),_0xe3f062(0x1bb),_0xe3f062(0x1e2),_0xe3f062(0x4a1),_0xe3f062(0x226),'lowerright'];for(const _0x442236 of _0x4e24a4){$gameScreen[_0xe3f062(0x2ef)](_0x442236,_0x10def5);for(const _0x46daf0 of _0x4cdb5a){if(_0x178093[_0x46daf0]===undefined)continue;$gameScreen[_0xe3f062(0x3d9)](_0x442236,_0x178093[_0x46daf0],_0x46daf0);}}}),PluginManager['registerCommand'](pluginData[_0x4fc126(0x2b3)],_0x4fc126(0x4fa),_0x30298e=>{const _0x4f8d9d=_0x4fc126;VisuMZ['ConvertParams'](_0x30298e,_0x30298e);const _0x3a4337=_0x30298e[_0x4f8d9d(0x247)]||[];for(const _0xdbe858 of _0x3a4337){$gameScreen[_0x4f8d9d(0x2bb)](_0xdbe858),$gameScreen[_0x4f8d9d(0x2a4)](_0xdbe858);}}),PluginManager[_0x4fc126(0x416)](pluginData['name'],'PictureTextRefresh',_0x22271d=>{const _0x47dd98=_0x4fc126;$gameScreen[_0x47dd98(0x4c1)]();}),VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x410)]=Scene_Boot[_0x4fc126(0x460)][_0x4fc126(0x4ca)],Scene_Boot[_0x4fc126(0x460)]['onDatabaseLoaded']=function(){const _0x50a77e=_0x4fc126;VisuMZ[_0x50a77e(0x1b8)][_0x50a77e(0x410)][_0x50a77e(0x563)](this),VisuMZ[_0x50a77e(0x1b8)][_0x50a77e(0x1f7)](),this[_0x50a77e(0x241)](),this[_0x50a77e(0x2ac)](),this['process_VisuMZ_MessageCore_TextMacros'](),this[_0x50a77e(0x358)]();},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x1f7)]=function(){const _0x2e8e9b=_0x4fc126;if(Imported['VisuMZ_4_ExtraEnemyDrops']&&VisuMZ['ExtraEnemyDrops'][_0x2e8e9b(0x37c)]<1.09){let _0x3aded7='';_0x3aded7+=_0x2e8e9b(0x413),_0x3aded7+=_0x2e8e9b(0x20d),alert(_0x3aded7),SceneManager['exit']();}},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x3c2)]=function(_0x4e993b){const _0xb5e7e2=_0x4fc126,_0xb6340b=VisuMZ[_0xb5e7e2(0x1b8)][_0xb5e7e2(0x248)][_0x4e993b];_0xb6340b[_0xb5e7e2(0x34e)]((_0x2cc25c,_0x4ca83f)=>{const _0x4bd696=_0xb5e7e2;if(!_0x2cc25c||!_0x4ca83f)return-0x1;return _0x4ca83f['Match']['length']-_0x2cc25c[_0x4bd696(0x29b)]['length'];});},Scene_Boot[_0x4fc126(0x460)][_0x4fc126(0x241)]=function(){const _0x13f36d=_0x4fc126;VisuMZ[_0x13f36d(0x1b8)][_0x13f36d(0x3c2)]('TextCodeActions');for(const _0xc2da48 of VisuMZ[_0x13f36d(0x1b8)][_0x13f36d(0x248)][_0x13f36d(0x528)]){_0xc2da48[_0x13f36d(0x29b)]=_0xc2da48[_0x13f36d(0x29b)][_0x13f36d(0x1c4)](),_0xc2da48['textCodeCheck']=new RegExp('\x1b'+_0xc2da48[_0x13f36d(0x29b)],'gi'),_0xc2da48[_0x13f36d(0x2b5)]='\x1b'+_0xc2da48['Match'];if(_0xc2da48[_0x13f36d(0x57c)]==='')_0xc2da48['textCodeResult']+=_0x13f36d(0x3e1);}},Scene_Boot[_0x4fc126(0x460)][_0x4fc126(0x2ac)]=function(){const _0x5e28cc=_0x4fc126;VisuMZ['MessageCore'][_0x5e28cc(0x3c2)]('TextCodeReplace');for(const _0x1cf1d5 of VisuMZ[_0x5e28cc(0x1b8)][_0x5e28cc(0x248)][_0x5e28cc(0x21a)]){_0x1cf1d5[_0x5e28cc(0x237)]=new RegExp('\x1b'+_0x1cf1d5[_0x5e28cc(0x29b)]+_0x1cf1d5[_0x5e28cc(0x57c)],'gi'),_0x1cf1d5[_0x5e28cc(0x225)]!==''&&_0x1cf1d5['TextStr']!=='Undefined'?_0x1cf1d5[_0x5e28cc(0x2b5)]=new Function(_0x5e28cc(0x596)+_0x1cf1d5['TextStr'][_0x5e28cc(0x33a)](/\\/g,'\x1b')+'\x27'):_0x1cf1d5[_0x5e28cc(0x2b5)]=_0x1cf1d5[_0x5e28cc(0x221)];}},Scene_Boot[_0x4fc126(0x460)][_0x4fc126(0x572)]=function(){const _0x519673=_0x4fc126;for(const _0x5448b0 of VisuMZ[_0x519673(0x1b8)][_0x519673(0x248)][_0x519673(0x367)]){_0x5448b0['textCodeCheck']=new RegExp('\x5c['+_0x5448b0[_0x519673(0x29b)]+'\x5c]','gi');if(_0x5448b0[_0x519673(0x225)]!==''&&_0x5448b0[_0x519673(0x225)]!==_0x519673(0x4e4)){let _0x4e09b5=_0x5448b0[_0x519673(0x225)];_0x4e09b5=_0x4e09b5[_0x519673(0x33a)](/\\/g,'\x1b'),_0x4e09b5=_0x4e09b5[_0x519673(0x33a)]('\x27','\x5c\x27'),_0x4e09b5=_0x4e09b5[_0x519673(0x33a)]('\x22','\x5c\x22'),_0x5448b0[_0x519673(0x2b5)]=new Function(_0x519673(0x596)+_0x4e09b5+'\x27');}else _0x5448b0[_0x519673(0x2b5)]=_0x5448b0['TextJS'];}},Scene_Boot[_0x4fc126(0x460)]['process_VisuMZ_MessageCore_AutoColor']=function(){const _0x53e746=_0x4fc126,_0x465d5d=VisuMZ[_0x53e746(0x1b8)][_0x53e746(0x248)]['AutoColor'];!VisuMZ['ParseAllNotetags']&&(VisuMZ[_0x53e746(0x1b8)]['AddAutoColor']($dataClasses,_0x465d5d[_0x53e746(0x229)]),VisuMZ[_0x53e746(0x1b8)][_0x53e746(0x4ba)]($dataSkills,_0x465d5d[_0x53e746(0x2ae)]),VisuMZ[_0x53e746(0x1b8)][_0x53e746(0x4ba)]($dataItems,_0x465d5d[_0x53e746(0x29c)]),VisuMZ[_0x53e746(0x1b8)][_0x53e746(0x4ba)]($dataWeapons,_0x465d5d[_0x53e746(0x25b)]),VisuMZ[_0x53e746(0x1b8)][_0x53e746(0x4ba)]($dataArmors,_0x465d5d['Armors']),VisuMZ['MessageCore'][_0x53e746(0x4ba)]($dataEnemies,_0x465d5d[_0x53e746(0x2dd)]),VisuMZ[_0x53e746(0x1b8)][_0x53e746(0x4ba)]($dataStates,_0x465d5d['States'])),VisuMZ[_0x53e746(0x1b8)]['CreateAutoColorRegExpLists']();},VisuMZ['MessageCore'][_0x4fc126(0x4ce)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0x4fc126(0x46e),_0x4fc126(0x204),_0x4fc126(0x4e2),_0x4fc126(0x3e9),_0x4fc126(0x4b7),_0x4fc126(0x347),'<CENTER>',_0x4fc126(0x378),_0x4fc126(0x564),_0x4fc126(0x27b),'<COLORLOCK>','</COLORLOCK>',_0x4fc126(0x298),_0x4fc126(0x4ae),'<WORDWRAP>',_0x4fc126(0x552),_0x4fc126(0x4ab),'<LINE\x20BREAK>',_0x4fc126(0x455),_0x4fc126(0x203),_0x4fc126(0x36a),_0x4fc126(0x273),'SHOW',_0x4fc126(0x486),_0x4fc126(0x363),_0x4fc126(0x4b8),'SWITCH','SWITCHES',_0x4fc126(0x488),_0x4fc126(0x476)],VisuMZ[_0x4fc126(0x1b8)]['AddAutoColor']=function(_0xfe6e1b,_0x53cd20){const _0x583047=_0x4fc126;if(_0x53cd20<=0x0)return;const _0x5c07d0=_0xfe6e1b;for(const _0x3e3d6f of _0x5c07d0){if(!_0x3e3d6f)continue;VisuMZ[_0x583047(0x1b8)][_0x583047(0x527)](_0x3e3d6f,_0x53cd20);}},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x3ff)]=function(){const _0x32e7f1=_0x4fc126;VisuMZ[_0x32e7f1(0x1b8)][_0x32e7f1(0x41e)]=[];for(let _0x11b950=0x1;_0x11b950<=0x1f;_0x11b950++){const _0x4ea8c8=_0x32e7f1(0x53f)[_0x32e7f1(0x3d6)](_0x11b950),_0x29e2a4=VisuMZ[_0x32e7f1(0x1b8)]['Settings'][_0x32e7f1(0x43b)][_0x4ea8c8];_0x29e2a4[_0x32e7f1(0x34e)]((_0x360925,_0x4c8e3d)=>{const _0x3b9d13=_0x32e7f1;if(!_0x360925||!_0x4c8e3d)return-0x1;return _0x4c8e3d[_0x3b9d13(0x324)]-_0x360925['length'];}),this[_0x32e7f1(0x4f7)](_0x29e2a4,_0x11b950);}},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x4f7)]=function(_0x16aeaf,_0x52f60d){const _0x477bfa=_0x4fc126;for(const _0x1925cd of _0x16aeaf){if(_0x1925cd[_0x477bfa(0x324)]<=0x0)continue;if(/^\d+$/['test'](_0x1925cd))continue;let _0x418ec5=VisuMZ[_0x477bfa(0x1b8)][_0x477bfa(0x443)](_0x1925cd);if(_0x1925cd[_0x477bfa(0x2b4)](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0xd4e302=new RegExp(_0x418ec5,'i');else var _0xd4e302=new RegExp('\x5cb'+_0x418ec5+'\x5cb','g');VisuMZ[_0x477bfa(0x1b8)][_0x477bfa(0x41e)]['push']([_0xd4e302,'\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x477bfa(0x3d6)](_0x52f60d,_0x1925cd)]);}},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x443)]=function(_0x144e87){const _0x37dff9=_0x4fc126;return _0x144e87=_0x144e87[_0x37dff9(0x33a)](/(\W)/gi,(_0x2114de,_0x5751c8)=>_0x37dff9(0x433)['format'](_0x5751c8)),_0x144e87;},VisuMZ[_0x4fc126(0x1b8)]['ParseClassNotetags']=VisuMZ['ParseClassNotetags'],VisuMZ['ParseClassNotetags']=function(_0x1512c1){const _0x4fc443=_0x4fc126;VisuMZ[_0x4fc443(0x1b8)]['ParseClassNotetags'][_0x4fc443(0x563)](this,_0x1512c1);const _0x5f0b29=VisuMZ[_0x4fc443(0x1b8)][_0x4fc443(0x248)]['AutoColor'];VisuMZ['MessageCore'][_0x4fc443(0x527)](_0x1512c1,_0x5f0b29[_0x4fc443(0x229)]);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x314)]=VisuMZ[_0x4fc126(0x314)],VisuMZ[_0x4fc126(0x314)]=function(_0x67115){const _0x9d5e2f=_0x4fc126;VisuMZ[_0x9d5e2f(0x1b8)]['ParseSkillNotetags'][_0x9d5e2f(0x563)](this,_0x67115);const _0x183679=VisuMZ[_0x9d5e2f(0x1b8)][_0x9d5e2f(0x248)][_0x9d5e2f(0x43b)];VisuMZ[_0x9d5e2f(0x1b8)][_0x9d5e2f(0x527)](_0x67115,_0x183679['Skills']);},0x7,VisuMZ[_0x4fc126(0x1b8)]['ParseItemNotetags']=VisuMZ[_0x4fc126(0x55f)],VisuMZ[_0x4fc126(0x55f)]=function(_0x3ac931){const _0x2a8eb4=_0x4fc126;VisuMZ[_0x2a8eb4(0x1b8)][_0x2a8eb4(0x55f)][_0x2a8eb4(0x563)](this,_0x3ac931);const _0x4bce2d=VisuMZ['MessageCore']['Settings'][_0x2a8eb4(0x43b)];VisuMZ[_0x2a8eb4(0x1b8)][_0x2a8eb4(0x527)](_0x3ac931,_0x4bce2d[_0x2a8eb4(0x29c)]);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x2e9)]=VisuMZ[_0x4fc126(0x2e9)],VisuMZ['ParseWeaponNotetags']=function(_0x57710d){const _0x2bfb29=_0x4fc126;VisuMZ[_0x2bfb29(0x1b8)][_0x2bfb29(0x2e9)][_0x2bfb29(0x563)](this,_0x57710d);const _0x287aa5=VisuMZ[_0x2bfb29(0x1b8)][_0x2bfb29(0x248)][_0x2bfb29(0x43b)];VisuMZ[_0x2bfb29(0x1b8)][_0x2bfb29(0x527)](_0x57710d,_0x287aa5[_0x2bfb29(0x25b)]);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x3b3)]=VisuMZ['ParseArmorNotetags'],VisuMZ[_0x4fc126(0x3b3)]=function(_0x38ec0c){const _0x2052ef=_0x4fc126;VisuMZ['MessageCore'][_0x2052ef(0x3b3)][_0x2052ef(0x563)](this,_0x38ec0c);const _0x5b893a=VisuMZ['MessageCore']['Settings'][_0x2052ef(0x43b)];VisuMZ[_0x2052ef(0x1b8)][_0x2052ef(0x527)](_0x38ec0c,_0x5b893a[_0x2052ef(0x1bc)]);},VisuMZ['MessageCore']['ParseEnemyNotetags']=VisuMZ[_0x4fc126(0x1b3)],VisuMZ[_0x4fc126(0x1b3)]=function(_0x4879a6){const _0x150578=_0x4fc126;VisuMZ['MessageCore'][_0x150578(0x1b3)][_0x150578(0x563)](this,_0x4879a6);const _0x17bf5e=VisuMZ[_0x150578(0x1b8)][_0x150578(0x248)][_0x150578(0x43b)];VisuMZ[_0x150578(0x1b8)][_0x150578(0x527)](_0x4879a6,_0x17bf5e[_0x150578(0x2dd)]);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x1f1)]=VisuMZ[_0x4fc126(0x1f1)],VisuMZ[_0x4fc126(0x1f1)]=function(_0x5a6c79){const _0x4c07f1=_0x4fc126;VisuMZ['MessageCore']['ParseStateNotetags'][_0x4c07f1(0x563)](this,_0x5a6c79);const _0x398db4=VisuMZ[_0x4c07f1(0x1b8)]['Settings'][_0x4c07f1(0x43b)];VisuMZ[_0x4c07f1(0x1b8)][_0x4c07f1(0x527)](_0x5a6c79,_0x398db4[_0x4c07f1(0x369)]);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x527)]=function(_0xc64ff,_0x1d6bf2){const _0x492b2c=_0x4fc126;if(_0x1d6bf2<=0x0)return;const _0x3fea62=VisuMZ['MessageCore'][_0x492b2c(0x248)]['AutoColor'][_0x492b2c(0x3db)+_0x1d6bf2];let _0x476b14=_0xc64ff[_0x492b2c(0x2b3)][_0x492b2c(0x20f)]();if(/^\d+$/[_0x492b2c(0x3fb)](_0x476b14))return;if(VisuMZ[_0x492b2c(0x1b8)][_0x492b2c(0x4ce)]['includes'](_0x476b14['toUpperCase']()))return;_0x476b14=_0x476b14['replace'](/\\I\[(\d+)\]/gi,''),_0x476b14=_0x476b14['replace'](/\x1bI\[(\d+)\]/gi,'');if(_0x476b14[_0x492b2c(0x324)]<=0x0)return;if(_0x476b14[_0x492b2c(0x2b4)](/-----/i))return;_0x3fea62[_0x492b2c(0x55c)](_0x476b14);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x293)]=Scene_Boot[_0x4fc126(0x460)]['loadGameFonts'],Scene_Boot[_0x4fc126(0x460)]['loadGameFonts']=function(){const _0x5bf3d2=_0x4fc126;VisuMZ['MessageCore'][_0x5bf3d2(0x293)][_0x5bf3d2(0x563)](this),this[_0x5bf3d2(0x28a)]();},Scene_Boot[_0x4fc126(0x460)][_0x4fc126(0x28a)]=function(){const _0x2ddf82=_0x4fc126,_0x222973=VisuMZ['MessageCore'][_0x2ddf82(0x248)]['CustomFonts']||[];for(const _0x3f1ad9 of _0x222973){if(!_0x3f1ad9)continue;const _0x5844bc=_0x3f1ad9['FontFamily'];if(_0x5844bc[_0x2ddf82(0x20f)]()==='')continue;if(_0x5844bc[_0x2ddf82(0x432)]()[_0x2ddf82(0x20f)]()===_0x2ddf82(0x48d))continue;const _0x52f029=_0x3f1ad9[_0x2ddf82(0x554)];if(_0x52f029==='Unnamed.ttf')continue;FontManager[_0x2ddf82(0x3b6)](_0x5844bc,_0x52f029);}},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x57e)]=VisuMZ[_0x4fc126(0x1b8)]['Settings'][_0x4fc126(0x257)]['LangFiletype']??_0x4fc126(0x389),VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x427)]=DataManager[_0x4fc126(0x4c2)],DataManager[_0x4fc126(0x4c2)]=function(){const _0x36cf14=_0x4fc126;VisuMZ[_0x36cf14(0x1b8)]['DataManager_loadDatabase'][_0x36cf14(0x563)](this),this[_0x36cf14(0x27e)]();},DataManager[_0x4fc126(0x27e)]=function(){const _0x2f3ed3=_0x4fc126;if(!TextManager[_0x2f3ed3(0x236)]())return;const _0x22bc51=VisuMZ[_0x2f3ed3(0x1b8)][_0x2f3ed3(0x248)][_0x2f3ed3(0x257)];let _0x134a06='';const _0x1ff49e=VisuMZ[_0x2f3ed3(0x1b8)][_0x2f3ed3(0x57e)]??'tsv';if(_0x1ff49e===_0x2f3ed3(0x1d1))_0x134a06=(_0x22bc51[_0x2f3ed3(0x3a0)]??_0x2f3ed3(0x4dc))||'';if(_0x1ff49e==='tsv')_0x134a06=(_0x22bc51[_0x2f3ed3(0x2d8)]??_0x2f3ed3(0x1fa))||'';if(!_0x134a06)return;const _0x5769ad=_0x2f3ed3(0x22d),_0x27c082=new XMLHttpRequest(),_0xa11b27=_0x2f3ed3(0x1d0)+_0x134a06;window[_0x5769ad]=null,_0x27c082[_0x2f3ed3(0x254)]('GET',_0xa11b27),_0x27c082[_0x2f3ed3(0x435)](_0x2f3ed3(0x54a)['format'](_0x1ff49e[_0x2f3ed3(0x432)]())),_0x27c082[_0x2f3ed3(0x531)]=()=>this[_0x2f3ed3(0x291)](_0x27c082,_0x5769ad),_0x27c082[_0x2f3ed3(0x539)]=()=>this['onLocalizationXhrError'](),_0x27c082[_0x2f3ed3(0x325)]();},DataManager['onLocalizationXhrLoad']=function(_0x76ceac,_0xb27513){const _0xf3c8cb=_0x4fc126;if(_0x76ceac[_0xf3c8cb(0x320)]>=0x190)return;const _0xb5826d=_0x76ceac[_0xf3c8cb(0x3fa)];window[_0xb27513]=VisuMZ[_0xf3c8cb(0x1b8)][_0xf3c8cb(0x524)](_0xb5826d);},VisuMZ['MessageCore']['ParseLocalizationCsv']=function(_0x124533){const _0xdbfe19=_0x4fc126,_0x521f6f=VisuMZ['MessageCore']['LocalizationType']??_0xdbfe19(0x389),_0x42419a=_0x521f6f===_0xdbfe19(0x1d1)?';':'\x09',_0xfd6b0c=_0x124533[_0xdbfe19(0x2a8)]('\x0a'),_0x3e5911=_0xfd6b0c[0x0]['split'](_0x42419a),_0x127fc7={};return _0xfd6b0c[_0xdbfe19(0x34b)](0x1)[_0xdbfe19(0x4a9)](_0x54b6ba=>{const _0x2c1cc3=_0xdbfe19;let _0x751242=[],_0x487720='',_0x59fa2e=![];for(let _0x70f89a=0x0;_0x70f89a<_0x54b6ba['length'];_0x70f89a++){let _0x1b0c03=_0x54b6ba[_0x70f89a];if(_0x1b0c03==='\x22')_0x59fa2e&&_0x54b6ba[_0x70f89a+0x1]==='\x22'?(_0x487720+=_0x1b0c03,_0x70f89a++):_0x59fa2e=!_0x59fa2e;else _0x1b0c03===_0x42419a&&!_0x59fa2e?(_0x751242['push'](_0x487720),_0x487720=''):_0x487720+=_0x1b0c03;}if(_0x487720)_0x751242[_0x2c1cc3(0x55c)](_0x487720);if(!_0x751242[0x0])_0x751242[0x0]='';const _0x2d2bd5=_0x751242[0x0]['replace'](/^"|"$/g,'')[_0x2c1cc3(0x432)]()['trim']();_0x127fc7[_0x2d2bd5]=_0x3e5911['slice'](0x1)[_0x2c1cc3(0x47c)]((_0x5a7869,_0x5281a1,_0x2b4034)=>{const _0x549cbe=_0x2c1cc3;return _0x5a7869[_0x5281a1[_0x549cbe(0x20f)]()]=(_0x751242[_0x2b4034+0x1]||'')[_0x549cbe(0x33a)](/^"|"$/g,''),_0x5a7869;},{});}),_0x127fc7;},DataManager[_0x4fc126(0x4ac)]=function(){const _0x17e412=_0x4fc126,_0x2d01a8=(VisuMZ['MessageCore'][_0x17e412(0x57e)]??'tsv')['toUpperCase']();let _0x3caf3b='';_0x3caf3b+=_0x17e412(0x570),_0x3caf3b+=_0x17e412(0x23f),_0x3caf3b=_0x3caf3b[_0x17e412(0x3d6)](_0x2d01a8);if(confirm(_0x3caf3b)){if(Utils[_0x17e412(0x29e)](_0x17e412(0x3fb))){if(_0x2d01a8==='CSV')_0x3caf3b=_0x17e412(0x21b),_0x3caf3b=_0x3caf3b[_0x17e412(0x3d6)](_0x2d01a8),alert(_0x3caf3b),this[_0x17e412(0x575)](),this[_0x17e412(0x2df)]();else return this[_0x17e412(0x482)]();_0x3caf3b='';}else _0x3caf3b=_0x17e412(0x20a);}else _0x3caf3b=_0x17e412(0x50d);_0x3caf3b+=_0x17e412(0x349),_0x3caf3b=_0x3caf3b[_0x17e412(0x3d6)](_0x2d01a8),alert(_0x3caf3b),SceneManager[_0x17e412(0x3f9)]();},DataManager[_0x4fc126(0x482)]=function(){const _0x57d231=_0x4fc126,_0x1ed555=VisuMZ[_0x57d231(0x1b8)][_0x57d231(0x248)][_0x57d231(0x257)],_0x335410=_0x1ed555[_0x57d231(0x3a0)]??'Languages.csv',_0x2c9489=new XMLHttpRequest(),_0x6099c6=_0x57d231(0x1d0)+_0x335410;_0x2c9489['open'](_0x57d231(0x210),_0x6099c6),_0x2c9489['overrideMimeType'](_0x57d231(0x394)),_0x2c9489[_0x57d231(0x531)]=()=>this['confirmConvertCsvToTsv'](_0x2c9489),_0x2c9489['onerror']=()=>this['createTsvFile'](),_0x2c9489['send']();},DataManager[_0x4fc126(0x54e)]=function(_0x2e9980){const _0x1711b0=_0x4fc126,_0x2f043c=VisuMZ[_0x1711b0(0x1b8)][_0x1711b0(0x248)][_0x1711b0(0x257)],_0x349d5a=_0x2f043c[_0x1711b0(0x3a0)]??_0x1711b0(0x4dc);let _0x5cabaa='%1\x20file\x20detected.\x0a'[_0x1711b0(0x3d6)](_0x349d5a);_0x5cabaa+=_0x1711b0(0x47e),_0x5cabaa+=_0x1711b0(0x1ee),confirm(_0x5cabaa)?this['convertCsvToTsvFile'](_0x2e9980):this[_0x1711b0(0x3ab)]();},DataManager[_0x4fc126(0x31f)]=function(_0x703c4f){const _0x4ea90b=_0x4fc126;if(_0x703c4f['status']>=0x190)return;const _0x2a781c=_0x703c4f[_0x4ea90b(0x3fa)],_0x5d7e31=_0x2a781c[_0x4ea90b(0x33a)](/\;/gi,'\x09'),_0x5d0393=VisuMZ[_0x4ea90b(0x1b8)][_0x4ea90b(0x248)][_0x4ea90b(0x257)],_0x1a22e8=_0x5d0393[_0x4ea90b(0x2d8)]||_0x4ea90b(0x1fa),_0x3753ee=require('path'),_0x3c3020=_0x3753ee['dirname'](process[_0x4ea90b(0x48c)]['filename']),_0x3a5077=_0x3753ee['join'](_0x3c3020,_0x4ea90b(0x1d0)),_0x5c40ee=_0x3a5077+_0x1a22e8,_0x23a1f4=require('fs');_0x23a1f4[_0x4ea90b(0x2b2)](_0x5c40ee,_0x5d7e31);let _0x29616d=_0x4ea90b(0x52f);alert(_0x29616d),_0x29616d=_0x4ea90b(0x349),alert(_0x29616d),SceneManager[_0x4ea90b(0x3f9)]();},DataManager[_0x4fc126(0x3ab)]=function(){const _0x244ae1=_0x4fc126;let _0x595cfb='TSV\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.';alert(_0x595cfb),this[_0x244ae1(0x575)](),this['openLocalizationFolder'](),_0x595cfb=_0x244ae1(0x349),alert(_0x595cfb),SceneManager[_0x244ae1(0x3f9)]();},DataManager[_0x4fc126(0x575)]=function(){const _0x131aea=_0x4fc126,_0x465635=[_0x131aea(0x589),'English',_0x131aea(0x313),_0x131aea(0x30c),_0x131aea(0x2ca),'Czech',_0x131aea(0x421),_0x131aea(0x50b),_0x131aea(0x351),_0x131aea(0x29d),'German',_0x131aea(0x540),_0x131aea(0x555),'Hungarian',_0x131aea(0x3aa),_0x131aea(0x1e3),'Japanese',_0x131aea(0x2af),_0x131aea(0x511),_0x131aea(0x24c),_0x131aea(0x289),_0x131aea(0x1ce),_0x131aea(0x361),_0x131aea(0x565),_0x131aea(0x48b),'Swedish','Tamil','Thai',_0x131aea(0x219)],_0x3bfb2d=[_0x131aea(0x25a),_0x131aea(0x30e),_0x131aea(0x3be),'你好','你好',_0x131aea(0x403),_0x131aea(0x3ce),_0x131aea(0x431),_0x131aea(0x1c2),_0x131aea(0x446),_0x131aea(0x431),_0x131aea(0x522),_0x131aea(0x330),'Szia','Halo',_0x131aea(0x49c),_0x131aea(0x3b1),_0x131aea(0x4ed),'Hei','Cześć',_0x131aea(0x1e9),_0x131aea(0x1ba),'Привет',_0x131aea(0x403),_0x131aea(0x4cf),_0x131aea(0x3ce),_0x131aea(0x354),_0x131aea(0x46a),_0x131aea(0x46f)],_0x26bfaf=[_0x131aea(0x57b),'Good-bye',_0x131aea(0x3e5),'再见','再見',_0x131aea(0x408),_0x131aea(0x487),_0x131aea(0x533),_0x131aea(0x594),_0x131aea(0x3c7),'Auf\x20Wiedersehen',_0x131aea(0x516),_0x131aea(0x407),_0x131aea(0x3c9),_0x131aea(0x4e6),'Arrivederci',_0x131aea(0x4cd),_0x131aea(0x51f),_0x131aea(0x4fb),_0x131aea(0x25f),'Adeus','La\x20revedere',_0x131aea(0x4e3),_0x131aea(0x23a),_0x131aea(0x366),'Hejdå',_0x131aea(0x275),_0x131aea(0x3c5),_0x131aea(0x504)],_0x176940=[_0x131aea(0x218),_0x131aea(0x218),_0x131aea(0x36e),'哇','哇','Ó',_0x131aea(0x218),_0x131aea(0x404),_0x131aea(0x1ef),'Waouh',_0x131aea(0x218),'Ουάου',_0x131aea(0x24e),_0x131aea(0x3fc),_0x131aea(0x1f5),_0x131aea(0x218),'ワオ','와우','Oi','O','Uau',_0x131aea(0x597),_0x131aea(0x26b),'Ó',_0x131aea(0x55a),'Oj',_0x131aea(0x4e5),_0x131aea(0x45d),_0x131aea(0x281)],_0x2837bf=[_0x465635,_0x3bfb2d,_0x26bfaf,_0x176940],_0x3f86ab=VisuMZ[_0x131aea(0x1b8)][_0x131aea(0x57e)]??'tsv',_0x1219fb=_0x3f86ab==='csv'?';':'\x09',_0xab68ec=_0x2837bf[_0x131aea(0x481)](_0x40c7f0=>_0x40c7f0[_0x131aea(0x23d)](_0x1219fb))['join']('\x0a'),_0x553605=VisuMZ[_0x131aea(0x1b8)]['Settings']['Localization'];let _0x64c18c='';if(_0x3f86ab===_0x131aea(0x1d1))_0x64c18c=_0x553605[_0x131aea(0x3a0)]||_0x131aea(0x4dc);if(_0x3f86ab===_0x131aea(0x389))_0x64c18c=_0x553605[_0x131aea(0x2d8)]||_0x131aea(0x1fa);const _0x817c57=require(_0x131aea(0x507)),_0x205998=_0x817c57['dirname'](process[_0x131aea(0x48c)][_0x131aea(0x4d3)]),_0x548c68=_0x817c57[_0x131aea(0x23d)](_0x205998,_0x131aea(0x1d0)),_0x326784=_0x548c68+_0x64c18c,_0x3ca7ce=require('fs');return _0x3ca7ce['writeFileSync'](_0x326784,_0xab68ec),_0x326784;},DataManager[_0x4fc126(0x2df)]=function(){const _0x5ca20f=_0x4fc126,{exec:_0x4d3311}=require(_0x5ca20f(0x1de));_0x4d3311(_0x5ca20f(0x2eb)),_0x4d3311(_0x5ca20f(0x27d));},VisuMZ['MessageCore'][_0x4fc126(0x2b8)]=ImageManager[_0x4fc126(0x51a)],ImageManager[_0x4fc126(0x51a)]=function(_0x11ea73,_0x570c1f){const _0x42da98=_0x4fc126;if(ConfigManager[_0x42da98(0x4d5)]!==undefined){const _0x2cc5c1=VisuMZ[_0x42da98(0x1b8)][_0x42da98(0x248)][_0x42da98(0x257)]||{},_0x3493ac=_0x2cc5c1[_0x42da98(0x2c3)]||_0x42da98(0x40e),_0x1b245d=VisuMZ[_0x42da98(0x1b8)][_0x42da98(0x248)][_0x42da98(0x467)]||{},_0x147e70=ConfigManager[_0x42da98(0x4d5)]||_0x3493ac;if(_0x147e70===_0x3493ac&&!_0x1b245d['ConvertDefault']){}else{const _0x4e9b52=_0x1b245d[_0x147e70]||'[XX]';_0x11ea73&&_0x11ea73[_0x42da98(0x2b4)](/\[XX\]/g)&&console['log'](_0x11ea73,_0x570c1f),_0x570c1f&&_0x570c1f[_0x42da98(0x2b4)](/\[XX\]/g)&&(_0x570c1f=_0x570c1f['replace'](/\[XX\]/g,_0x4e9b52));}}return VisuMZ[_0x42da98(0x1b8)][_0x42da98(0x2b8)]['call'](this,_0x11ea73,_0x570c1f);},SceneManager[_0x4fc126(0x250)]=function(){const _0x3f1c4a=_0x4fc126;return this[_0x3f1c4a(0x321)]&&this[_0x3f1c4a(0x321)][_0x3f1c4a(0x49e)]===Scene_Battle;},SceneManager[_0x4fc126(0x588)]=function(){const _0x75a036=_0x4fc126;return this[_0x75a036(0x321)]&&this[_0x75a036(0x321)][_0x75a036(0x49e)]===Scene_Map;},ConfigManager['textLocale']=VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x248)][_0x4fc126(0x257)][_0x4fc126(0x2c3)]||_0x4fc126(0x40e),ConfigManager['textSpeed']=VisuMZ['MessageCore'][_0x4fc126(0x248)]['TextSpeed'][_0x4fc126(0x344)],VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x4f2)]=ConfigManager[_0x4fc126(0x297)],ConfigManager[_0x4fc126(0x297)]=function(){const _0x5c9488=_0x4fc126,_0x21b7e7=VisuMZ[_0x5c9488(0x1b8)][_0x5c9488(0x4f2)][_0x5c9488(0x563)](this);return TextManager['isVisuMzLocalizationEnabled']()&&(_0x21b7e7[_0x5c9488(0x4d5)]=this['textLocale']),_0x21b7e7[_0x5c9488(0x4c3)]=this['textSpeed'],_0x21b7e7;},VisuMZ[_0x4fc126(0x1b8)]['ConfigManager_applyData']=ConfigManager[_0x4fc126(0x42c)],ConfigManager[_0x4fc126(0x42c)]=function(_0x35fb64){const _0x43325b=_0x4fc126;VisuMZ[_0x43325b(0x1b8)][_0x43325b(0x441)][_0x43325b(0x563)](this,_0x35fb64),TextManager[_0x43325b(0x236)]()&&(_0x43325b(0x4d5)in _0x35fb64?this[_0x43325b(0x4d5)]=String(_0x35fb64['textLocale']):this[_0x43325b(0x4d5)]=VisuMZ[_0x43325b(0x1b8)][_0x43325b(0x248)][_0x43325b(0x257)][_0x43325b(0x2c3)]||_0x43325b(0x40e)),_0x43325b(0x4c3)in _0x35fb64?this[_0x43325b(0x4c3)]=Number(_0x35fb64[_0x43325b(0x4c3)])[_0x43325b(0x415)](0x1,0xb):this[_0x43325b(0x4c3)]=VisuMZ[_0x43325b(0x1b8)][_0x43325b(0x248)][_0x43325b(0x50c)][_0x43325b(0x344)];},TextManager[_0x4fc126(0x53c)]=VisuMZ['MessageCore'][_0x4fc126(0x248)][_0x4fc126(0x257)][_0x4fc126(0x396)],TextManager[_0x4fc126(0x52e)]=VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x248)][_0x4fc126(0x50c)][_0x4fc126(0x396)],TextManager[_0x4fc126(0x213)]=VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x248)]['TextSpeed'][_0x4fc126(0x270)],VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x466)]=TextManager['message'],TextManager['message']=function(_0x13ac20){const _0x529331=_0x4fc126,_0xd04d31=[_0x529331(0x3b9),'emerge',_0x529331(0x33c),'surprise',_0x529331(0x334),_0x529331(0x546),'escapeStart',_0x529331(0x2e3),_0x529331(0x20e),'obtainItem'];let _0x51fa20=VisuMZ[_0x529331(0x1b8)][_0x529331(0x466)][_0x529331(0x563)](this,_0x13ac20);return _0xd04d31[_0x529331(0x585)](_0x13ac20)&&(_0x51fa20=_0x529331(0x552)+_0x51fa20),_0x51fa20;},TextManager[_0x4fc126(0x236)]=function(){const _0x4d6951=_0x4fc126;return VisuMZ[_0x4d6951(0x1b8)][_0x4d6951(0x248)][_0x4d6951(0x257)][_0x4d6951(0x4a7)];},TextManager[_0x4fc126(0x2d6)]=function(_0x8d389c){const _0x161168=_0x4fc126;if(!this[_0x161168(0x236)]())return _0x8d389c;return _0x8d389c=String(_0x8d389c)['replace'](/\$(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x19a76b,_0x336835)=>this[_0x161168(0x39d)](String(_0x336835))),_0x8d389c=String(_0x8d389c)['replace'](/\\(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x2bd01c,_0x280be4)=>this[_0x161168(0x39d)](String(_0x280be4))),_0x8d389c=String(_0x8d389c)['replace'](/\x1b(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x3b4f29,_0x57339e)=>this[_0x161168(0x39d)](String(_0x57339e))),_0x8d389c;},VisuMZ[_0x4fc126(0x1b8)]['Bitmap_measureTextWidth']=Bitmap[_0x4fc126(0x460)][_0x4fc126(0x28c)],Bitmap[_0x4fc126(0x460)]['measureTextWidth']=function(_0x7e6ea3){const _0x7731a8=_0x4fc126;return _0x7e6ea3=TextManager['parseLocalizedText'](_0x7e6ea3),VisuMZ[_0x7731a8(0x1b8)]['Bitmap_measureTextWidth'][_0x7731a8(0x563)](this,_0x7e6ea3);},TextManager[_0x4fc126(0x39d)]=function(_0x218a38){const _0x471ae8=_0x4fc126;if(!$dataLocalization)return'';const _0x68231e=$dataLocalization[_0x218a38['toLowerCase']()['trim']()];if(!_0x68231e)return;const _0x12f029=ConfigManager[_0x471ae8(0x4d5)]||'English';let _0x25e663=_0x68231e[_0x12f029]||_0x471ae8(0x35e);return _0x25e663=_0x25e663[_0x471ae8(0x33a)](/\\/g,'\x1b'),_0x25e663=_0x25e663[_0x471ae8(0x33a)](/<SEMI(?:|-COLON|COLON)>/gi,';'),_0x25e663;},TextManager[_0x4fc126(0x54f)]=function(_0x25e811){const _0x43abe8=_0x4fc126;return VisuMZ[_0x43abe8(0x1b8)]['Settings'][_0x43abe8(0x257)][_0x25e811]||'';},TextManager[_0x4fc126(0x1b6)]=function(){const _0xdd6d31=_0x4fc126,_0x53e212=ConfigManager[_0xdd6d31(0x4d5)]||_0xdd6d31(0x40e);return this[_0xdd6d31(0x54f)](_0x53e212);},TextManager[_0x4fc126(0x2ab)]=function(_0x175ec4){const _0x1550ba=_0x4fc126,_0xb59e6a=VisuMZ['MessageCore'][_0x1550ba(0x248)][_0x1550ba(0x257)][_0x1550ba(0x3fd)]||[];let _0x43b98d=_0xb59e6a['indexOf'](ConfigManager[_0x1550ba(0x4d5)]||'English');_0x43b98d+=_0x175ec4;const _0x681e6c=_0xb59e6a[_0x43b98d]||'';return this['getLanguageName'](_0x681e6c);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x30b)]=Game_System[_0x4fc126(0x460)][_0x4fc126(0x48a)],Game_System['prototype'][_0x4fc126(0x48a)]=function(){const _0x217dc7=_0x4fc126;let _0xf2a1c0=VisuMZ[_0x217dc7(0x1b8)][_0x217dc7(0x30b)][_0x217dc7(0x563)](this);if(ConfigManager&&ConfigManager[_0x217dc7(0x326)]!==undefined&&ConfigManager['textFont']>0x0)return _0xf2a1c0;else{const _0x11f678=ConfigManager['textLocale']||_0x217dc7(0x40e),_0x1f8062=VisuMZ[_0x217dc7(0x1b8)][_0x217dc7(0x248)]['LanguageFonts'];return _0x1f8062[_0x11f678]!==undefined&&(_0xf2a1c0=_0x1f8062[_0x11f678]+',\x20'+$dataSystem[_0x217dc7(0x304)][_0x217dc7(0x423)]),_0xf2a1c0;}},VisuMZ[_0x4fc126(0x1b8)]['Window_Command_addCommand']=Window_Command[_0x4fc126(0x460)][_0x4fc126(0x370)],Window_Command[_0x4fc126(0x460)]['addCommand']=function(_0x25c849,_0x3e120d,_0x575c5e,_0x43661e){const _0x40376e=_0x4fc126;if(TextManager[_0x40376e(0x2d6)]&&TextManager[_0x40376e(0x236)]()){const _0x4bc288=String(_0x25c849)[_0x40376e(0x432)]()[_0x40376e(0x20f)]();if($dataLocalization[_0x4bc288]&&_0x4bc288['length']>0x0){const _0x4a2de5=ConfigManager[_0x40376e(0x4d5)]||'English';_0x25c849=$dataLocalization[_0x4bc288][_0x4a2de5]||_0x40376e(0x35e);}}VisuMZ[_0x40376e(0x1b8)][_0x40376e(0x393)][_0x40376e(0x563)](this,_0x25c849,_0x3e120d,_0x575c5e,_0x43661e);},Window_StatusBase[_0x4fc126(0x460)]['actorSlotName']=function(_0x5635c9,_0xca5f56){const _0x3bcf57=_0x4fc126,_0x3b1787=_0x5635c9[_0x3bcf57(0x1bd)]();let _0x2799c2=$dataSystem['equipTypes'][_0x3b1787[_0xca5f56]];if(TextManager[_0x3bcf57(0x2d6)]){const _0x3e9994=String(_0x2799c2)['toLowerCase']()[_0x3bcf57(0x20f)]();if(TextManager[_0x3bcf57(0x236)]()&&$dataLocalization[_0x3e9994]){const _0x86cbd2=ConfigManager[_0x3bcf57(0x4d5)]||_0x3bcf57(0x40e);_0x2799c2=$dataLocalization[_0x3e9994][_0x86cbd2]||_0x3bcf57(0x35e);}}return _0x2799c2;},Game_Temp[_0x4fc126(0x460)][_0x4fc126(0x4aa)]=function(_0x424a02){const _0x314845=_0x4fc126;this[_0x314845(0x377)]=_0x424a02;},Game_Temp['prototype'][_0x4fc126(0x426)]=function(){return this['_lastPluginCommandInterpreter'];},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x3ad)]=Game_Interpreter[_0x4fc126(0x460)]['command357'],Game_Interpreter[_0x4fc126(0x460)]['command357']=function(_0x2fcb43){const _0x567a35=_0x4fc126;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ['MessageCore']['Game_Interpreter_PluginCommand'][_0x567a35(0x563)](this,_0x2fcb43);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x439)]=Game_System['prototype'][_0x4fc126(0x1c5)],Game_System[_0x4fc126(0x460)]['initialize']=function(){const _0x3484a5=_0x4fc126;VisuMZ['MessageCore'][_0x3484a5(0x439)][_0x3484a5(0x563)](this),this['initMessageCore']();},Game_System[_0x4fc126(0x460)][_0x4fc126(0x57a)]=function(){const _0xfb474e=_0x4fc126,_0x217721=VisuMZ['MessageCore'][_0xfb474e(0x248)][_0xfb474e(0x1fe)],_0x5b48e8=VisuMZ[_0xfb474e(0x1b8)][_0xfb474e(0x248)]['WordWrap'];this['_MessageCoreSettings']={'messageRows':_0x217721['MessageRows'],'messageWidth':_0x217721[_0xfb474e(0x505)],'messageWordWrap':_0x5b48e8[_0xfb474e(0x277)],'helpWordWrap':_0x5b48e8[_0xfb474e(0x1c9)],'choiceLineHeight':_0x217721[_0xfb474e(0x262)],'choiceMinWidth':_0x217721[_0xfb474e(0x280)]??0x60,'choiceRows':_0x217721['ChoiceWindowMaxRows'],'choiceCols':_0x217721[_0xfb474e(0x323)],'choiceTextAlign':_0x217721[_0xfb474e(0x42b)],'choiceDistance':0x0},this[_0xfb474e(0x4cb)]===undefined&&(this[_0xfb474e(0x4cb)]=_0x217721[_0xfb474e(0x542)],this[_0xfb474e(0x584)]=_0x217721[_0xfb474e(0x276)]);},Game_System[_0x4fc126(0x460)][_0x4fc126(0x44b)]=function(){const _0x3187b7=_0x4fc126;if(this[_0x3187b7(0x574)]===undefined)this[_0x3187b7(0x57a)]();if(this[_0x3187b7(0x574)][_0x3187b7(0x2e2)]===undefined)this[_0x3187b7(0x57a)]();return this['_MessageCoreSettings']['messageRows'];},Game_System['prototype'][_0x4fc126(0x4fe)]=function(_0x3cc946){const _0x2103d2=_0x4fc126;if(this[_0x2103d2(0x574)]===undefined)this[_0x2103d2(0x57a)]();if(this[_0x2103d2(0x574)][_0x2103d2(0x2e2)]===undefined)this[_0x2103d2(0x57a)]();this[_0x2103d2(0x574)]['messageRows']=_0x3cc946||0x1;},Game_System['prototype'][_0x4fc126(0x339)]=function(){const _0x1f4c3d=_0x4fc126;if(this['_MessageCoreSettings']===undefined)this[_0x1f4c3d(0x57a)]();if(this[_0x1f4c3d(0x574)]['messageWidth']===undefined)this[_0x1f4c3d(0x57a)]();return this['_MessageCoreSettings'][_0x1f4c3d(0x3d7)];},Game_System[_0x4fc126(0x460)][_0x4fc126(0x32e)]=function(_0x28b43a){const _0x386e08=_0x4fc126;if(this[_0x386e08(0x574)]===undefined)this[_0x386e08(0x57a)]();if(this[_0x386e08(0x574)]['messageWidth']===undefined)this[_0x386e08(0x57a)]();_0x28b43a=Math[_0x386e08(0x559)](_0x28b43a);if(_0x28b43a%0x2!==0x0)_0x28b43a+=0x1;this[_0x386e08(0x574)][_0x386e08(0x3d7)]=_0x28b43a||0x2;},Game_System[_0x4fc126(0x460)][_0x4fc126(0x3f8)]=function(){const _0x25eba8=_0x4fc126;if(this[_0x25eba8(0x574)]===undefined)this[_0x25eba8(0x57a)]();if(this[_0x25eba8(0x574)]['messageWordWrap']===undefined)this[_0x25eba8(0x57a)]();return this[_0x25eba8(0x574)]['messageWordWrap'];},Game_System['prototype'][_0x4fc126(0x372)]=function(_0x88f4eb){const _0x356274=_0x4fc126;if(this['_MessageCoreSettings']===undefined)this[_0x356274(0x57a)]();if(this['_MessageCoreSettings'][_0x356274(0x21c)]===undefined)this[_0x356274(0x57a)]();this[_0x356274(0x574)]['messageWordWrap']=_0x88f4eb;},Game_System['prototype'][_0x4fc126(0x4d8)]=function(){const _0xfb1c31=_0x4fc126;if(this[_0xfb1c31(0x4cb)]===undefined){const _0x425ebf=VisuMZ['MessageCore'][_0xfb1c31(0x248)][_0xfb1c31(0x1fe)];this[_0xfb1c31(0x4cb)]=_0x425ebf['MsgWindowOffsetX'],this[_0xfb1c31(0x584)]=_0x425ebf[_0xfb1c31(0x276)];}return{'x':this[_0xfb1c31(0x4cb)]||0x0,'y':this[_0xfb1c31(0x584)]||0x0};},Game_System[_0x4fc126(0x460)][_0x4fc126(0x41f)]=function(_0x5e96fd,_0x3d4d2e){const _0x13e891=_0x4fc126;if(this[_0x13e891(0x574)]===undefined)this['initMessageCore']();this[_0x13e891(0x4cb)]=_0x5e96fd,this[_0x13e891(0x584)]=_0x3d4d2e;},Game_System['prototype'][_0x4fc126(0x212)]=function(){const _0x3dd5aa=_0x4fc126;if(this['_MessageCoreSettings']===undefined)this[_0x3dd5aa(0x57a)]();if(this['_MessageCoreSettings']['helpWordWrap']===undefined)this[_0x3dd5aa(0x57a)]();return this['_MessageCoreSettings']['helpWordWrap'];},Game_System['prototype'][_0x4fc126(0x40d)]=function(_0x3decc8){const _0x36402c=_0x4fc126;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();if(this[_0x36402c(0x574)]['helpWordWrap']===undefined)this[_0x36402c(0x57a)]();this[_0x36402c(0x574)][_0x36402c(0x477)]=_0x3decc8;},Game_System[_0x4fc126(0x460)][_0x4fc126(0x2ec)]=function(){const _0x9700a9=_0x4fc126;if(this[_0x9700a9(0x574)]===undefined)this[_0x9700a9(0x57a)]();if(this[_0x9700a9(0x574)]['choiceLineHeight']===undefined)this[_0x9700a9(0x57a)]();return this[_0x9700a9(0x574)][_0x9700a9(0x3d0)];},Game_System[_0x4fc126(0x460)][_0x4fc126(0x3bd)]=function(_0x103a2e){const _0x1d6a38=_0x4fc126;if(this[_0x1d6a38(0x574)]===undefined)this[_0x1d6a38(0x57a)]();if(this[_0x1d6a38(0x574)]['choiceLineHeight']===undefined)this[_0x1d6a38(0x57a)]();this[_0x1d6a38(0x574)][_0x1d6a38(0x3d0)]=_0x103a2e||0x1;},Game_System[_0x4fc126(0x460)][_0x4fc126(0x22b)]=function(){const _0x2e7b87=_0x4fc126;if(this[_0x2e7b87(0x574)]===undefined)this[_0x2e7b87(0x57a)]();return this[_0x2e7b87(0x574)]['choiceMinWidth']??0x60;},Game_System[_0x4fc126(0x460)]['setChoiceListMinChoiceWidth']=function(_0x30ac66){const _0x1b1122=_0x4fc126;if(this[_0x1b1122(0x574)]===undefined)this[_0x1b1122(0x57a)]();this['_MessageCoreSettings']['choiceMinWidth']=_0x30ac66||0x0;},Game_System[_0x4fc126(0x460)][_0x4fc126(0x3df)]=function(){const _0x218435=_0x4fc126;if(this['_MessageCoreSettings']===undefined)this[_0x218435(0x57a)]();if(this[_0x218435(0x574)][_0x218435(0x27f)]===undefined)this[_0x218435(0x57a)]();return this[_0x218435(0x574)][_0x218435(0x27f)];},Game_System[_0x4fc126(0x460)][_0x4fc126(0x1f9)]=function(_0x5ac568){const _0x24e63b=_0x4fc126;if(this[_0x24e63b(0x574)]===undefined)this[_0x24e63b(0x57a)]();if(this[_0x24e63b(0x574)][_0x24e63b(0x27f)]===undefined)this[_0x24e63b(0x57a)]();this['_MessageCoreSettings'][_0x24e63b(0x27f)]=_0x5ac568||0x1;},Game_System[_0x4fc126(0x460)][_0x4fc126(0x309)]=function(){const _0x4aec08=_0x4fc126;if(this[_0x4aec08(0x574)]===undefined)this['initMessageCore']();if(this[_0x4aec08(0x574)]['choiceCols']===undefined)this[_0x4aec08(0x57a)]();return this['_MessageCoreSettings'][_0x4aec08(0x201)];},Game_System[_0x4fc126(0x460)][_0x4fc126(0x3ac)]=function(_0x57f1ea){const _0x212bb8=_0x4fc126;if(this[_0x212bb8(0x574)]===undefined)this['initMessageCore']();if(this[_0x212bb8(0x574)][_0x212bb8(0x201)]===undefined)this[_0x212bb8(0x57a)]();this[_0x212bb8(0x574)][_0x212bb8(0x201)]=_0x57f1ea||0x1;},Game_System['prototype']['getChoiceListTextAlign']=function(){const _0x5e81bc=_0x4fc126;if(this[_0x5e81bc(0x574)]===undefined)this[_0x5e81bc(0x57a)]();if(this['_MessageCoreSettings'][_0x5e81bc(0x338)]===undefined)this[_0x5e81bc(0x57a)]();return this['_MessageCoreSettings']['choiceTextAlign'];},Game_System[_0x4fc126(0x460)][_0x4fc126(0x464)]=function(_0x3b7676){const _0x1b056a=_0x4fc126;if(this[_0x1b056a(0x574)]===undefined)this[_0x1b056a(0x57a)]();if(this['_MessageCoreSettings'][_0x1b056a(0x338)]===undefined)this[_0x1b056a(0x57a)]();this[_0x1b056a(0x574)][_0x1b056a(0x338)]=_0x3b7676[_0x1b056a(0x432)]();},Game_System[_0x4fc126(0x460)][_0x4fc126(0x51d)]=function(){const _0x4a2cc8=_0x4fc126;if(this[_0x4a2cc8(0x574)]===undefined)this[_0x4a2cc8(0x57a)]();return this[_0x4a2cc8(0x574)][_0x4a2cc8(0x1d4)]||0x0;},Game_System[_0x4fc126(0x460)][_0x4fc126(0x41b)]=function(_0x13acf0){const _0x2d09f4=_0x4fc126;if(this[_0x2d09f4(0x574)]===undefined)this[_0x2d09f4(0x57a)]();this['_MessageCoreSettings']['choiceDistance']=_0x13acf0||0x0;},Game_Message['prototype'][_0x4fc126(0x442)]=function(_0x576eb3,_0xaf847c){const _0x57bbe6=_0x4fc126;this['_itemChoiceVariableId']=_0x576eb3,this[_0x57bbe6(0x36f)]='weapon',this[_0x57bbe6(0x576)]=_0xaf847c,this[_0x57bbe6(0x261)]=0x0;},Game_Message[_0x4fc126(0x460)]['itemChoiceWtypeId']=function(){const _0x309774=_0x4fc126;return this[_0x309774(0x576)]||0x0;},Game_Message['prototype'][_0x4fc126(0x2d4)]=function(_0x4ce117,_0x3f5226,_0x386cd9){const _0x2c0990=_0x4fc126;this['_itemChoiceVariableId']=_0x4ce117,this[_0x2c0990(0x36f)]=_0x2c0990(0x284),this[_0x2c0990(0x385)]=_0x3f5226,this[_0x2c0990(0x261)]=_0x386cd9;},Game_Message[_0x4fc126(0x460)][_0x4fc126(0x266)]=function(){const _0x3c30b9=_0x4fc126;return this[_0x3c30b9(0x385)]||0x0;},Game_Message[_0x4fc126(0x460)][_0x4fc126(0x3bb)]=function(){const _0x1fed1d=_0x4fc126;return this[_0x1fed1d(0x261)]||0x0;},Game_Message[_0x4fc126(0x460)][_0x4fc126(0x296)]=function(_0x92c5fe,_0x5e9df2,_0x4ab9da){const _0x20132c=_0x4fc126;this[_0x20132c(0x1fd)]=_0x92c5fe,this[_0x20132c(0x36f)]=_0x20132c(0x4d0),this[_0x20132c(0x206)]=_0x5e9df2,this[_0x20132c(0x233)]=_0x4ab9da;},Game_Message[_0x4fc126(0x460)][_0x4fc126(0x1bf)]=function(){const _0x576655=_0x4fc126;return this[_0x576655(0x206)]||0x0;},Game_Message[_0x4fc126(0x460)][_0x4fc126(0x4b6)]=function(){const _0x2a5f50=_0x4fc126;return $gameActors[_0x2a5f50(0x547)](this['itemChoiceActorId']())||$gameParty[_0x2a5f50(0x4ad)]()||null;},Game_Message['prototype'][_0x4fc126(0x57d)]=function(){return this['_itemChoiceStypeId']||0x0;},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x21e)]=Game_Message['prototype'][_0x4fc126(0x28f)],Game_Message[_0x4fc126(0x460)][_0x4fc126(0x28f)]=function(_0x164562,_0x56a951,_0x47a1a5){const _0x5de92b=_0x4fc126;this[_0x5de92b(0x37e)]=!![],VisuMZ[_0x5de92b(0x1b8)]['Game_Message_setChoices'][_0x5de92b(0x563)](this,_0x164562,_0x56a951,_0x47a1a5);},Game_Message[_0x4fc126(0x460)][_0x4fc126(0x232)]=function(){const _0x1659bf=_0x4fc126;this['_scriptCall']=![],this[_0x1659bf(0x437)]=[];const _0x52a076=this[_0x1659bf(0x490)][_0x1659bf(0x324)];this[_0x1659bf(0x359)]=_0x52a076;let _0x50d83d=![];for(let _0x25de07=0x0;_0x25de07<_0x52a076;_0x25de07++){let _0x4b7909=this[_0x1659bf(0x490)][_0x25de07];_0x4b7909[_0x1659bf(0x2b4)](/<SHUFFLE>/gi)&&(_0x50d83d=!![],_0x4b7909=_0x4b7909[_0x1659bf(0x33a)](/<SHUFFLE>/gi,'')),_0x4b7909[_0x1659bf(0x2b4)](/<SHUFFLE:[ ](\d+)>/gi)&&(_0x50d83d=!![],this[_0x1659bf(0x359)]=Math[_0x1659bf(0x44e)](Number(RegExp['$1']),this[_0x1659bf(0x359)]),_0x4b7909=_0x4b7909['replace'](/<SHUFFLE:[ ](\d+)>/gi,'')),_0x4b7909[_0x1659bf(0x2b4)](/<SHUFFLE: VAR[ ](\d+)>/gi)&&(_0x50d83d=!![],this[_0x1659bf(0x359)]=Math['min']($gameVariables[_0x1659bf(0x3e8)](Number(RegExp['$1']))||0x1,this[_0x1659bf(0x359)]),_0x4b7909=_0x4b7909[_0x1659bf(0x33a)](/<SHUFFLE:[ ]VAR (\d+)>/gi,'')),this[_0x1659bf(0x437)][_0x1659bf(0x55c)](_0x25de07),this['_choices'][_0x25de07]=_0x4b7909;}if(_0x50d83d){this['_choiceIndexArray']=VisuMZ[_0x1659bf(0x1b8)][_0x1659bf(0x2aa)](this[_0x1659bf(0x437)]);if(this['choiceCancelType']()!==-0x2)this['_choiceCancelType']=-0x1;}},VisuMZ['MessageCore']['ShuffleArray']=function(_0x362860){const _0x28ca69=_0x4fc126;var _0x3ea080,_0x564459,_0xe71f86;for(_0xe71f86=_0x362860[_0x28ca69(0x324)]-0x1;_0xe71f86>0x0;_0xe71f86--){_0x3ea080=Math[_0x28ca69(0x42d)](Math[_0x28ca69(0x402)]()*(_0xe71f86+0x1)),_0x564459=_0x362860[_0xe71f86],_0x362860[_0xe71f86]=_0x362860[_0x3ea080],_0x362860[_0x3ea080]=_0x564459;}return _0x362860;},Game_Message[_0x4fc126(0x460)][_0x4fc126(0x493)]=function(){const _0x8a743e=_0x4fc126;if(!this[_0x8a743e(0x437)])this[_0x8a743e(0x232)]();return this['_choiceIndexArray'];},Game_Message['prototype']['maxShuffleChoices']=function(){const _0xdb9ce0=_0x4fc126;if(this[_0xdb9ce0(0x359)]===undefined)this[_0xdb9ce0(0x232)]();return this['_maxShuffleChoices'];},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x49d)]=Game_Screen[_0x4fc126(0x460)]['clearPictures'],Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x4b4)]=function(){const _0x27ddee=_0x4fc126;VisuMZ['MessageCore']['Game_Screen_clearPictures']['call'](this),this[_0x27ddee(0x468)]();},Game_Screen[_0x4fc126(0x460)]['clearAllPictureTexts']=function(){const _0x589a44=_0x4fc126;this[_0x589a44(0x586)]=[],this[_0x589a44(0x496)]=[],this[_0x589a44(0x4e1)]=[];},Game_Screen[_0x4fc126(0x460)]['getPictureTextData']=function(_0xcee296){const _0x4bcfff=_0x4fc126;if(this['_pictureText']===undefined)this[_0x4bcfff(0x468)]();const _0x552e2a=this[_0x4bcfff(0x316)](_0xcee296);return this['_pictureText'][_0x552e2a]=this['_pictureText'][_0x552e2a]||{},this[_0x4bcfff(0x586)][_0x552e2a];},Game_Screen[_0x4fc126(0x460)]['getPictureText']=function(_0x2927c3,_0x9277d6){const _0x260b80=_0x4fc126;return _0x9277d6=_0x9277d6[_0x260b80(0x432)]()[_0x260b80(0x20f)](),this[_0x260b80(0x215)](_0x2927c3)[_0x9277d6]||'';},Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x3d9)]=function(_0x2e1849,_0x167c44,_0x4e63f7){const _0x492bf4=_0x4fc126;_0x4e63f7=_0x4e63f7[_0x492bf4(0x432)]()[_0x492bf4(0x20f)](),this[_0x492bf4(0x215)](_0x2e1849)[_0x4e63f7]=_0x167c44||'',this['requestPictureTextRefresh'](_0x2e1849,!![]);},Game_Screen['prototype'][_0x4fc126(0x2bb)]=function(_0x241df8){const _0x13d89a=_0x4fc126;if(this[_0x13d89a(0x586)]===undefined)this[_0x13d89a(0x468)]();const _0x23fff3=this[_0x13d89a(0x316)](_0x241df8);this[_0x13d89a(0x586)][_0x23fff3]=null,this[_0x13d89a(0x472)](_0x241df8,!![]);},Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x228)]=function(_0x4e41a6){const _0x34970b=_0x4fc126;if(this['_pictureText']===undefined)this['clearAllPictureTexts']();const _0x5ebf78=this[_0x34970b(0x316)](_0x4e41a6);return this[_0x34970b(0x496)][_0x5ebf78]||0x0;},Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x2ef)]=function(_0x3d56dc,_0x4229a6){const _0x104ae8=_0x4fc126;if(this[_0x104ae8(0x586)]===undefined)this['clearAllPictureTexts']();const _0xf126a5=this[_0x104ae8(0x316)](_0x3d56dc);this[_0x104ae8(0x496)][_0xf126a5]=Math['max'](0x0,_0x4229a6);},Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x2a4)]=function(_0x39b775){const _0x1f4f5e=_0x4fc126;if(this[_0x1f4f5e(0x586)]===undefined)this[_0x1f4f5e(0x468)]();const _0x5c746a=this[_0x1f4f5e(0x316)](_0x39b775);this[_0x1f4f5e(0x496)][_0x5c746a]=undefined;},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x51b)]=Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x4d4)],Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x4d4)]=function(_0xc75c4d){const _0x239792=_0x4fc126;VisuMZ['MessageCore'][_0x239792(0x51b)][_0x239792(0x563)](this,_0xc75c4d),this[_0x239792(0x2bb)](_0xc75c4d),this['erasePictureTextBuffer'](_0xc75c4d),this[_0x239792(0x472)](_0xc75c4d,!![]);},Game_Screen['prototype'][_0x4fc126(0x4c1)]=function(){const _0x253877=_0x4fc126;for(const _0x46fdf8 of this[_0x253877(0x2fb)]){if(_0x46fdf8){let _0x183889=this[_0x253877(0x2fb)][_0x253877(0x512)](_0x46fdf8);this[_0x253877(0x472)](_0x183889);}}},Game_Screen['prototype'][_0x4fc126(0x472)]=function(_0x256326,_0x507a2c){const _0x1c917c=_0x4fc126;this[_0x1c917c(0x4e1)]=this['_pictureTextRefresh']||[],(this[_0x1c917c(0x521)](_0x256326)||_0x507a2c)&&this[_0x1c917c(0x4e1)][_0x1c917c(0x55c)](_0x256326);},Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x3d5)]=function(_0x1eeb69){const _0x4c8c36=_0x4fc126;return this[_0x4c8c36(0x4e1)]=this[_0x4c8c36(0x4e1)]||[],this[_0x4c8c36(0x4e1)][_0x4c8c36(0x585)](_0x1eeb69);},Game_Screen[_0x4fc126(0x460)][_0x4fc126(0x558)]=function(_0x4f87ff){const _0x3f56d5=_0x4fc126;this[_0x3f56d5(0x4e1)]=this[_0x3f56d5(0x4e1)]||[],this['_pictureTextRefresh'][_0x3f56d5(0x374)](_0x4f87ff);},Game_Screen['prototype'][_0x4fc126(0x521)]=function(_0x43255c){const _0x16a7cb=_0x4fc126,_0x578710=[_0x16a7cb(0x480),'up',_0x16a7cb(0x391),_0x16a7cb(0x4ee),_0x16a7cb(0x1bb),_0x16a7cb(0x1e2),'lowerleft',_0x16a7cb(0x226),'lowerright'];return _0x578710[_0x16a7cb(0x1db)](_0x58fc5f=>this[_0x16a7cb(0x3dd)](_0x43255c,_0x58fc5f)!=='');},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x2a9)]=Game_Party[_0x4fc126(0x460)][_0x4fc126(0x1c5)],Game_Party['prototype']['initialize']=function(){const _0x2c3d25=_0x4fc126;VisuMZ[_0x2c3d25(0x1b8)][_0x2c3d25(0x2a9)][_0x2c3d25(0x563)](this),this['initMessageCore']();},Game_Party[_0x4fc126(0x460)][_0x4fc126(0x57a)]=function(){this['_lastGainedItemData']={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party[_0x4fc126(0x460)][_0x4fc126(0x56c)]=function(){const _0x110168=_0x4fc126;if(this[_0x110168(0x3c3)]===undefined)this[_0x110168(0x57a)]();return this[_0x110168(0x3c3)];},Game_Party['prototype'][_0x4fc126(0x2d2)]=function(_0x491e41,_0x26683d){const _0x25e439=_0x4fc126;if(this['_lastGainedItemData']===undefined)this['initMessageCore']();if(!_0x491e41)return;if(DataManager[_0x25e439(0x459)](_0x491e41))this[_0x25e439(0x3c3)]['type']=0x0;else{if(DataManager[_0x25e439(0x3f0)](_0x491e41))this[_0x25e439(0x3c3)][_0x25e439(0x35c)]=0x1;else DataManager[_0x25e439(0x412)](_0x491e41)&&(this[_0x25e439(0x3c3)]['type']=0x2);}this['_lastGainedItemData']['id']=_0x491e41['id'],this[_0x25e439(0x3c3)][_0x25e439(0x2cc)]=_0x26683d;},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x1c6)]=Game_Party[_0x4fc126(0x460)]['gainItem'],Game_Party[_0x4fc126(0x460)][_0x4fc126(0x3c1)]=function(_0x5b89cd,_0x58a0ad,_0x4ac050){const _0x56d330=_0x4fc126;VisuMZ['MessageCore'][_0x56d330(0x1c6)]['call'](this,_0x5b89cd,_0x58a0ad,_0x4ac050),_0x58a0ad>0x0&&this['setLastGainedItemData'](_0x5b89cd,_0x58a0ad);},VisuMZ[_0x4fc126(0x1b8)]['Game_Map_initialize']=Game_Map[_0x4fc126(0x460)][_0x4fc126(0x1c5)],Game_Map[_0x4fc126(0x460)]['initialize']=function(){const _0xe94cb8=_0x4fc126;VisuMZ[_0xe94cb8(0x1b8)][_0xe94cb8(0x517)][_0xe94cb8(0x563)](this),this[_0xe94cb8(0x268)]=[];},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x406)]=Game_Map[_0x4fc126(0x460)][_0x4fc126(0x38d)],Game_Map[_0x4fc126(0x460)]['setupEvents']=function(){const _0x387b54=_0x4fc126;VisuMZ[_0x387b54(0x1b8)]['Game_Map_setupEvents'][_0x387b54(0x563)](this),this['_messageCommonEvents']=[];},VisuMZ['MessageCore'][_0x4fc126(0x318)]=Game_Map[_0x4fc126(0x460)][_0x4fc126(0x1b2)],Game_Map['prototype']['updateEvents']=function(){const _0x26b3db=_0x4fc126;VisuMZ[_0x26b3db(0x1b8)][_0x26b3db(0x318)][_0x26b3db(0x563)](this),this[_0x26b3db(0x47d)]();},Game_Map[_0x4fc126(0x460)][_0x4fc126(0x1ea)]=function(_0x4798af){const _0x23ebf7=_0x4fc126;if(!$dataCommonEvents[_0x4798af])return;this[_0x23ebf7(0x268)]=this[_0x23ebf7(0x268)]||[];const _0x4c58bf=this[_0x23ebf7(0x2a6)]['_eventId'],_0x2ba59b=new Game_MessageCommonEvent(_0x4798af,_0x4c58bf);this[_0x23ebf7(0x268)][_0x23ebf7(0x55c)](_0x2ba59b);},Game_Map['prototype'][_0x4fc126(0x47d)]=function(){const _0x235a3b=_0x4fc126;this[_0x235a3b(0x268)]=this[_0x235a3b(0x268)]||[];for(const _0x104979 of this[_0x235a3b(0x268)]){!_0x104979[_0x235a3b(0x2a6)]?this[_0x235a3b(0x268)]['remove'](_0x104979):_0x104979[_0x235a3b(0x462)]();}},VisuMZ['MessageCore']['Game_Map_refresh']=Game_Map[_0x4fc126(0x460)][_0x4fc126(0x538)],Game_Map[_0x4fc126(0x460)][_0x4fc126(0x538)]=function(){const _0x4b1d68=_0x4fc126;VisuMZ[_0x4b1d68(0x1b8)]['Game_Map_refresh']['call'](this),$gameScreen[_0x4b1d68(0x4c1)]();},Game_Interpreter[_0x4fc126(0x40b)]=pluginData[_0x4fc126(0x2b3)],Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x39a)]=function(_0x457cdc){const _0xedc593=_0x4fc126;if($gameMessage['isBusy']())return![];return this[_0xedc593(0x474)](_0x457cdc),this[_0xedc593(0x3ea)](_0x457cdc),this[_0xedc593(0x3a9)](_0x457cdc),this['setWaitMode'](_0xedc593(0x557)),!![];},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x474)]=function(_0x2fd5a0){const _0xe06dc7=_0x4fc126;$gameMessage[_0xe06dc7(0x30d)](_0x2fd5a0[0x0],_0x2fd5a0[0x1]),$gameMessage[_0xe06dc7(0x38e)](_0x2fd5a0[0x2]),$gameMessage[_0xe06dc7(0x55d)](_0x2fd5a0[0x3]),$gameMessage[_0xe06dc7(0x420)](_0x2fd5a0[0x4]);},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x3ea)]=function(_0x47975b){const _0x2be883=_0x4fc126;while(this[_0x2be883(0x2b6)]()){this['_index']++;if(this['currentCommand']()['code']===0x191){let _0x3e4eee=this[_0x2be883(0x445)]()[_0x2be883(0x1dc)][0x0];_0x3e4eee=VisuMZ[_0x2be883(0x1b8)][_0x2be883(0x569)](_0x3e4eee),$gameMessage[_0x2be883(0x2c5)](_0x3e4eee);}if(this[_0x2be883(0x39f)]())break;}},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x2b6)]=function(){const _0x5249d4=_0x4fc126;return this[_0x5249d4(0x489)]()===0x65&&$gameSystem['getMessageWindowRows']()>0x4?!![]:this[_0x5249d4(0x489)]()===0x191;},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x569)]=function(_0x23cc45){const _0x38a835=_0x4fc126,_0x51f9fc=VisuMZ[_0x38a835(0x1b8)][_0x38a835(0x248)][_0x38a835(0x1fe)];return _0x23cc45=(_0x51f9fc[_0x38a835(0x3e4)]||'')+_0x23cc45+(_0x51f9fc[_0x38a835(0x24d)]||''),_0x23cc45=_0x23cc45[_0x38a835(0x33a)](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x23cc45=_0x23cc45[_0x38a835(0x33a)](/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi,(_0x4bd38b,_0x2f8eb5)=>this[_0x38a835(0x469)](_0x2f8eb5)),_0x23cc45;},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x469)]=function(_0xbe53f4){const _0x367459=_0x4fc126,_0x4c818d=_0xbe53f4[_0x367459(0x2a8)]('|')[_0x367459(0x481)](_0x345b73=>_0x345b73[_0x367459(0x20f)]())[_0x367459(0x374)]('')['remove'](null);return _0x4c818d[Math[_0x367459(0x2f0)](_0x4c818d[_0x367459(0x324)])];},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x39f)]=function(){const _0x54494c=_0x4fc126;if(this['currentCommand']()&&this[_0x54494c(0x445)]()[_0x54494c(0x1dc)][0x0][_0x54494c(0x2b4)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage[_0x54494c(0x345)][_0x54494c(0x324)]>=$gameSystem[_0x54494c(0x44b)]()&&this[_0x54494c(0x489)]()!==0x191;},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x3a9)]=function(_0x108cb7){const _0x4080a2=_0x4fc126;switch(this['nextEventCode']()){case 0x66:this[_0x4080a2(0x4c4)]++,this[_0x4080a2(0x3b4)](this[_0x4080a2(0x445)]()['parameters']);break;case 0x67:this[_0x4080a2(0x4c4)]++,this[_0x4080a2(0x208)](this[_0x4080a2(0x445)]()[_0x4080a2(0x1dc)]);break;case 0x68:this[_0x4080a2(0x4c4)]++,this['setupItemChoice'](this[_0x4080a2(0x445)]()['parameters']);break;case 0x165:const _0x48dec1=this[_0x4080a2(0x300)][this['_index']+0x1],_0x4e8235=_0x48dec1[_0x4080a2(0x1dc)];_0x4e8235[0x0]===Game_Interpreter[_0x4080a2(0x40b)]&&this['prepareShowTextPluginCommandFollowups'](_0x4e8235);break;}},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x45f)]=Game_Interpreter[_0x4fc126(0x460)]['setupChoices'],Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x3b4)]=function(_0x1e5fce){const _0x74d9de=_0x4fc126;_0x1e5fce=this['addContinuousShowChoices'](),VisuMZ[_0x74d9de(0x1b8)][_0x74d9de(0x45f)]['call'](this,_0x1e5fce),$gameMessage[_0x74d9de(0x232)]();},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x568)]=function(){const _0x17f003=_0x4fc126,_0x26cabd=this[_0x17f003(0x4c4)],_0x33a735=[];let _0x9c48b9=0x0;this[_0x17f003(0x4c4)]++;while(this[_0x17f003(0x4c4)]<this[_0x17f003(0x300)]['length']){if(this[_0x17f003(0x445)]()['indent']===this[_0x17f003(0x58a)]){if(this[_0x17f003(0x445)]()[_0x17f003(0x31d)]===0x194&&this['nextEventCode']()!==0x66)break;else{if(this[_0x17f003(0x445)]()[_0x17f003(0x31d)]===0x66)this[_0x17f003(0x3a1)](_0x9c48b9,this[_0x17f003(0x445)](),_0x26cabd),this[_0x17f003(0x4c4)]-=0x2;else this['currentCommand']()[_0x17f003(0x31d)]===0x192&&(this[_0x17f003(0x445)]()[_0x17f003(0x1dc)][0x0]=_0x9c48b9,_0x9c48b9++);}}this['_index']++;}return this[_0x17f003(0x4c4)]=_0x26cabd,this['currentCommand']()[_0x17f003(0x1dc)];},Game_Interpreter[_0x4fc126(0x460)]['adjustShowChoiceExtension']=function(_0x5d1f48,_0x3b4378,_0x27d8ae){const _0x2d74bc=_0x4fc126;this[_0x2d74bc(0x2bd)](_0x5d1f48,_0x3b4378,_0x27d8ae),this['adjustShowChoiceCancel'](_0x5d1f48,_0x3b4378,_0x27d8ae),this[_0x2d74bc(0x42a)](_0x3b4378,_0x27d8ae);},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x2bd)]=function(_0x5976f9,_0x271488,_0x2f5eed){const _0x331016=_0x4fc126;if(_0x271488[_0x331016(0x1dc)][0x2]<0x0)return;const _0x2953c6=_0x271488['parameters'][0x2]+_0x5976f9;this[_0x331016(0x300)][_0x2f5eed][_0x331016(0x1dc)][0x2]=_0x2953c6;},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x3a4)]=function(_0x312424,_0x28ff72,_0x58c66e){const _0xdd8693=_0x4fc126;if(_0x28ff72[_0xdd8693(0x1dc)][0x1]>=0x0){var _0xc4931=_0x28ff72[_0xdd8693(0x1dc)][0x1]+_0x312424;this['_list'][_0x58c66e][_0xdd8693(0x1dc)][0x1]=_0xc4931;}else _0x28ff72[_0xdd8693(0x1dc)][0x1]===-0x2&&(this[_0xdd8693(0x300)][_0x58c66e][_0xdd8693(0x1dc)][0x1]=_0x28ff72[_0xdd8693(0x1dc)][0x1]);},Game_Interpreter[_0x4fc126(0x460)]['addExtraShowChoices']=function(_0x2a2e09,_0x4a106b){const _0x5e735a=_0x4fc126;for(const _0x496aec of _0x2a2e09[_0x5e735a(0x1dc)][0x0]){this[_0x5e735a(0x300)][_0x4a106b][_0x5e735a(0x1dc)][0x0][_0x5e735a(0x55c)](_0x496aec);}this[_0x5e735a(0x300)]['splice'](this[_0x5e735a(0x4c4)]-0x1,0x2);},Game_Interpreter['prototype'][_0x4fc126(0x360)]=function(_0x336cad){const _0x427610=_0x4fc126,_0xf139a3=_0x336cad[0x1];if(_0xf139a3===_0x427610(0x33e))this[_0x427610(0x4c4)]++,this[_0x427610(0x442)](_0x336cad);else{if(_0xf139a3==='SelectArmor')this[_0x427610(0x4c4)]++,this[_0x427610(0x2d4)](_0x336cad);else _0xf139a3==='SelectSkill'&&Imported[_0x427610(0x50e)]&&(this['_index']++,this[_0x427610(0x296)](_0x336cad));}},Game_Interpreter[_0x4fc126(0x460)][_0x4fc126(0x442)]=function(_0x23a62e){const _0x1dd60d=_0x4fc126,_0x27c2e6=JSON['parse'](JSON[_0x1dd60d(0x4ef)](_0x23a62e[0x3]));VisuMZ[_0x1dd60d(0x38f)](_0x27c2e6,_0x27c2e6),$gameMessage[_0x1dd60d(0x442)](_0x27c2e6[_0x1dd60d(0x3cd)]||0x0,_0x27c2e6[_0x1dd60d(0x1eb)]||0x0);},Game_Interpreter['prototype'][_0x4fc126(0x2d4)]=function(_0x103652){const _0x447562=_0x4fc126,_0x10d1ab=JSON[_0x447562(0x264)](JSON[_0x447562(0x4ef)](_0x103652[0x3]));VisuMZ[_0x447562(0x38f)](_0x10d1ab,_0x10d1ab),$gameMessage[_0x447562(0x2d4)](_0x10d1ab['VariableID']||0x0,_0x10d1ab['ArmorTypeID']||0x0,_0x10d1ab[_0x447562(0x4f8)]||0x0);},Game_Interpreter[_0x4fc126(0x460)]['setSkillChoice']=function(_0x39b66e){const _0x79f1a0=_0x4fc126,_0x5ce75b=JSON['parse'](JSON[_0x79f1a0(0x4ef)](_0x39b66e[0x3]));VisuMZ['ConvertParams'](_0x5ce75b,_0x5ce75b),$gameMessage[_0x79f1a0(0x296)](_0x5ce75b[_0x79f1a0(0x3cd)]||0x0,_0x5ce75b[_0x79f1a0(0x253)]||0x0,_0x5ce75b['SkillTypeID']||0x0);};function _0x2a97(){const _0xe1fb42=['अलविदा','Sbohem','_centerMessageWindow','convertEscapeCharacters','MESSAGE_CORE_PLUGIN_NAME','Window_Base_changeTextColor','setHelpWindowWordWrap','English','getPreservedFontSettings','Scene_Boot_onDatabaseLoaded','convertVariableEscapeCharacters','isArmor','VisuMZ_4_ExtraEnemyDrops\x20needs\x20to\x20be\x20updated\x20','\x1bCASING[5]','clamp','registerCommand','updateBitmap','setRelativePosition','245069lRBfSo','FontBiggerCap','setChoiceMessageDistance','upright','#7cc576','AutoColorRegExp','setMessageWindowXyOffsets','setSpeakerName','Danish','ITALIC','fallbackFonts','processControlCharacter','moveTo','getLastPluginCommandInterpreter','DataManager_loadDatabase','_textColorStack','startPause','addExtraShowChoices','ChoiceWindowTextAlign','applyData','floor','bitmap','#ffc8e0','_textDelayCount','Hallo','toLowerCase','\x5c%1','VisuMZ_3_ActSeqCamera','overrideMimeType','partyMemberName','_choiceIndexArray','index','Game_System_initialize','processCommonEvent','AutoColor','isAutoColorAffected','zoomScale','round','_autoSizeRegexp','convertFontSettingsEscapeCharacters','ConfigManager_applyData','setWeaponChoice','ConvertTextAutoColorRegExpFriendly','default','currentCommand','Bonjour','max','\x1bTEXTALIGNMENT[3]','resetFontSettings','down\x20left','getMessageWindowRows','#fbaf5d','makeCommandList','min','launchMessageCommonEvent','midright','obtainEscapeParam','Window_EventItem_includes','follower','registerResetRect','PICTURE','clear','\x1bWrapBreak[0]','map\x20actor','isItem','anchor','autoPositionOffsetY','return\x200','ว้าว','ChoiceWindowDistance','Game_Interpreter_setupChoices','prototype','MessageTextDelay','update','calcWindowHeight','setChoiceListTextAlign','registerActorNameAutoColorChanges','TextManager_message','LanguageImages','clearAllPictureTexts','getRandomTextFromPool','สวัสดี','isPlaytest','_showFast','Window_Base_textSizeEx','<B>','Merhaba','members','processAutoPosition','requestPictureTextRefresh','attachPictureText','prepareShowTextCommand','isInputting','ANY','helpWordWrap','itemPadding','buffer','prepareAutoSizeEscapeCharacters','isPressed','reduce','updateMessageCommonEvents','Press\x20OK\x20to\x20convert\x20to\x20TSV.\x0a','_spriteset','upperleft','map','checkConvertCsvToTsv','convertMessageCoreEscapeReplacements','crisis','\x1bTEXTALIGNMENT','HIDE','Farvel','ALL','nextEventCode','mainFontFace','Spanish','mainModule','unnamed','postConvertEscapeCharacters','enabled','_choices','item','\x1bBOLD[0]','choiceIndexArray','PictureTextChange','onNewPageMessageCore','_pictureTextBuffer','startY','setWordWrap','makeCommandListScriptCall','#ffffff','resetRect','Ciao','Game_Screen_clearPictures','constructor','clearChoiceHelpDescriptions','Window_Base_update','lowerleft','innerHeight','maxLines','AddOption','lower-left','isChoiceWindow','Enable','requestChoiceForegroundImage','forEach','setLastPluginCommandInterpreter','<BR>','onLocalizationXhrError','leader',')))','upper\x20right','itemHeight','battleUserName','currencyUnit','VisuMZ_0_CoreEngine','clearPictures','uppercenter','itemChoiceActor','<LEFT>','DISABLE','outlineColor','AddAutoColor','drawChoiceLocationImage','strokeRect','_autoColorActorNames','description','4568uheVEZ','updateOverlappingY','requestPictureTextRefreshAll','loadDatabase','textSpeed','_index','itemBackColor1','rtl','move','contentsHeight','Window_Base_processEscapeCharacter','onDatabaseLoaded','_messageOffsetX','obtainEscapeString','さようなら','AutoColorBypassList','Hola','skill','updatePictureText','2093352RICPpu','filename','erasePicture','textLocale','\x1bITALIC[1]','_textAlignment','getMessageWindowXyOffsets','outputWidth','drawPictureTextZone','outputHeight','Languages.csv','event','clearActorNameAutoColor','getChoiceIndent','lastGainedObjectName','_pictureTextRefresh','<I>','До\x20свидания','Undefined','ஆஹா','Selamat\x20tinggal','up-left','_data','processTextAlignmentX','system','Window_ChoiceList_updatePlacement','midcenter','안녕하세요','left','stringify','contentsBack','processPxTextCode','ConfigManager_makeData','maxChoiceWidth','outLineColor','drawText','isTriggered','CreateAutoColorRegExpListEntries','EquipTypeID','getSkillTypes','PictureTextErase','Ha\x20det','setup','createTextState','setMessageWindowRows','convertButtonAssistText','anchorPictureText','parseChoiceText','textSpeedStatusText','SelectSkill','Hoşça\x20kal','MessageWidth','Window_Message_newPage','path','battleActionName','ArmorTypeID','STRUCT','Dutch','TextSpeed','%1\x20file\x20has\x20not\x20been\x20made.\x0a','VisuMZ_1_SkillsStatesCore','addedWidth','setChoiceListHelpWindow','Norwegian','indexOf','_wholeMoveDuration','FontSmallerCap','findTargetSprite','Αντίο','Game_Map_initialize','Window_ChoiceList_windowX','addChoiceDistance','loadBitmap','Game_Screen_erasePicture','shift','getChoiceMessageDistance','Window_ItemList_drawItemNumber','안녕히\x20가세요','OffsetX','hasPictureText','Γειά\x20σου','getColor','ParseLocalizationCsv','setChoiceListMinChoiceWidth','autoPositionOffsetX','CreateAutoColorFor','TextCodeActions','#f26c4f','Window_Base_processNewLine','\x1bCOLORLOCK[1]','NameBoxWindowOffsetY','_action','messageCoreTextSpeed','TSV\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.','currentExt','onload','_autoSizeCheck','Tot\x20ziens','ARRAYSTR','_pictureTextWidth','choice','processDrawPicture','refresh','onerror','ActionJS','isOpen','messageCoreLocalization','\x1bCOLORLOCK[0]','resetTextColor','TextColor%1','Greek','Bitmap_drawTextTopAligned','MsgWindowOffsetX','itemRect','easeInOut','_forcedPosition','defeat','actor','\x1bCASING[1]','\x1bTEXTALIGNMENT[1]','application/%1','ARRAYJSON','addedHeight','deactivate','confirmConvertCsvToTsv','getLanguageName','canMove','placeCancelButton','</WORDWRAP>','36UrEVQR','Filename','Hindi','getConfigValue','message','clearPictureTextRefresh','ceil','Guau','down-right','push','setPositionType','setHelpWindow','ParseItemNotetags','battleTargetName','white','_subject','call','<RIGHT>','Slovak','drawBackCenteredPicture','updateMove','addContinuousShowChoices','ParseAddedText','bind','convertLockColorsEscapeCharacters','getLastGainedItemData','list','gradientFillRect','_textMacroFound','You\x20do\x20not\x20have\x20a\x20language\x20%1\x20set\x20up.\x0a','up\x20right','process_VisuMZ_MessageCore_TextMacros','DefaultOutlineWidth','_MessageCoreSettings','createLocalizationCsvFile','_itemChoiceWtypeId','#fff799','processFontChangeItalic','apply','initMessageCore','Farewell','Type','itemChoiceStypeId','LocalizationType','_dimmerSprite','WORD_WRAP_PADDING','openness','processDrawCenteredPicture','choiceAlignText','_messageOffsetY','includes','_pictureText','isClosing','isSceneMap','Key','_indent','convertBaseEscapeCharacters','upcenter','upper\x20center','etypeId','grey','normalColor','updateTransform','#6dcff6','makeFontBigger','Näkemiin','\x1bC[%1]%2\x1bPREVCOLOR[0]','return\x20\x27','Uau','dimColor2','addMessageCoreCommands','show','boxWidth','processTextCasing','updateEvents','ParseEnemyNotetags','colSpacing','_relativePosition','getCurrentLanguage','SelectArmor','MessageCore','cancel','Salut','center','Armors','equipSlots','resetWordWrap','itemChoiceActorId','faceWidth','Bitmap_drawText','Hei','inputtingAction','toUpperCase','initialize','Game_Party_gainItem','Window_Base_processControlCharacter','down\x20right','HelpWindow','drawSkillCost','_cancelButton','Actors','createContents','Romanian','upper\x20left','data/','csv','4353LalAys','contents','choiceDistance','battle\x20actor','Window_Message_updatePlacement','createChoiceListWindow','Window_NameBox_updatePlacement','up-center','FontChangeValue','some','parameters','red','child_process','changeValue','updateAutoSizePosition','VisuMZ_1_EventsMoveCore','right','Italian','easeIn','processAutoSize','_target','getTextAlignment','6XrXjxC','Olá','addMessageCommonEvent','WeaponTypeID','_choiceListWindow','startX','Press\x20Cancel\x20to\x20create\x20new\x20TSV.','Vau','isSkill','ParseStateNotetags','convertCasingEscapeCharacters','loadPicture','_moveTargetX','Wah','true','CheckCompatibility','WRAPJPBREAK','setChoiceListMaxRows','Languages.tsv','Window_Message_needsNewPage','down\x20center','_itemChoiceVariableId','General','maxCommands','BOLD','choiceCols','addLoadListener','CENTERPICTURE','</B>','databaseObjectName','_itemChoiceActorId','filter','setupNumInput','choices','%1\x20file\x20cannot\x20be\x20created.\x0aPlease\x20enter\x20Playtest\x20mode.\x0a','_textDelay','\x1bI[%1]','in\x20order\x20for\x20VisuMZ_1_MessageCore\x20to\x20work.','obtainGold','trim','GET','7515690ABwqIG','isHelpWindowWordWrap','instantTextSpeed','wtypeId','getPictureTextData','newPage','applyDatabaseAutoColor','Wow','Turkish','TextCodeReplace','%1\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.\x0a','messageWordWrap','updateXyOffsets','Game_Message_setChoices','380yINuIa','LineHeight','TextJS','upper-right','textSizeExRaw','addWrapBreakAfterPunctuation','TextStr','down','requestChoiceBackgroundImage','getPictureTextBuffer','Classes','itemRectWithPadding','getChoiceListMinChoiceWidth','calcMoveEasing','$dataLocalization','returnPreservedFontSettings','Sprite_Picture_update','_targets','createPictureText','setupShuffleChoices','_itemChoiceStypeId','addMessageCoreTextSpeedCommand','#c69c6d','isVisuMzLocalizationEnabled','textCodeCheck','Window_Message_processEscapeCharacter','messageWindowRect','Zbohom','drawCustomBackgroundColor','innerWidth','join','applyMoveEasing','Would\x20you\x20like\x20the\x20plugin\x20to\x20create\x20the\x20base\x20%1\x20file?\x0a\x0a','_messagePositionReset','process_VisuMZ_MessageCore_TextCodes_Action','Window_Message_clearFlags','applyChoiceHelpDescriptions','hide','scale','displayName','PictureIDs','Settings','_choiceListHelpWindow','convertTextMacros','none','Polish','EachMessageEnd','वाह','Window_Message_terminateMessage','isSceneBattle','lowerright','\x1bBOLD[1]','ActorID','open','LineBreakSpace','textColor','Localization','StretchDimmedBg','systemColor','Greeting','Weapons','processColorLock','processAllText','callOkHandler','Do\x20widzenia','needsNewPage','_itemChoiceEtypeId','ChoiceWindowLineHeight','makeCommandListShuffle','parse','exec','itemChoiceAtypeId','processCharacter','_messageCommonEvents','isChoiceEnabled','isRTL','Вау','lower\x20right','processWrapBreak','anyPictureTextChanges','resizePictureText','Instant','unshift','\x1bCASING[0]','WAIT','_moveTargetWidth','பிரியாவிடை','MsgWindowOffsetY','MessageWindow','convertBackslashCharacters','onProcessCharacter','\x1bCASING[2]','</RIGHT>','lower\x20left','open\x20.\x5cdata','loadLocalization','choiceRows','ChoiceWindowMinWidth','Vay','Window_ChoiceList','centered','armor','flushTextState','setWaitMode','Scene_Options_maxCommands','ARRAYNUM','Portuguese','loadCustomFontsMessageCore','addWindow','measureTextWidth','_choiceHelpDescriptions','4597428VQJPPI','setChoices','refreshWithTextCodeSupport','onLocalizationXhrLoad','Width','Scene_Boot_loadGameFonts','convertChoiceMacros','SkillTypeID','setSkillChoice','makeData','(((','blue','drawing','Match','Items','French','isOptionValid','easeOut','_macroBypassWordWrap','Window_Options_statusText','selectDefault','drawBackground','erasePictureTextBuffer','updateChoiceListHelpWindowPlacement','_interpreter','processFontChangeBold','split','Game_Party_initialize','ShuffleArray','getLanguageAt','process_VisuMZ_MessageCore_TextCodes_Replace','brown','Skills','Korean','up\x20left','statusText','writeFileSync','name','match','textCodeResult','isContinuePrepareShowTextCommands','green','ImageManager_loadBitmap','atypeId','black','eraseAllPictureTexts','processAutoColorWords','adjustShowChoiceDefault','messagePositionReset','convertMessageCoreEscapeActions','NonSupportedTextCodes','#707070','_resetRect','DefaultLocale','processCustomWait','add','_eventId','processPreviousColor','_moveTargetHeight','changeTextSpeed','Chinese(Traditional)','isWordWrapEnabled','quantity','String_format','commandName','SplitJpCnCharacters','refreshDimmerBitmap','boxHeight','setLastGainedItemData','91fBedff','setArmorChoice','padding','parseLocalizedText','Window_Base_processAllText','TsvFilename','setText','ARRAYEVAL','makeDeepCopy','_textCasing','Enemies','textSizeEx','openLocalizationFolder','textSizeExTextAlignment','defaultColor','messageRows','obtainExp','isChoiceVisible','menu','width','NameBoxWindowOffsetX','followers','ParseWeaponNotetags','fontSize','start\x20.\x5cdata','getChoiceListLineHeight','maxCols','_pictureTextCache','setPictureTextBuffer','randomInt','updateOffsetPosition','RelativePXPY','_textCasingUpperState','TEXTALIGNMENT','processMessageCoreEscapeActions','changeVisuMzTextLocale','isSkillTypeMatchForUse','text','drawItemContents','processActorNameAutoColorChanges','_pictures','clearRect','updateAutoPosition','convertTextAlignmentEscapeCharacters','substr','_list','battle\x20enemy','_moveTargetY','up\x20center','advanced','\x1bTEXTALIGNMENT[0]','updateDimensions','drawItemNumber','realignMapName','getChoiceListMaxColumns','drawMessageFace','Game_System_mainFontFace','Chinese(Simplified)','setFaceImage','Hello','Rows','Window_Options_isVolumeSymbol','numVisibleRows','addChildAt','Bengali','ParseSkillNotetags','MessageWindowXyOffsets','realPictureId','Window_MessageLog','Game_Map_updateEvents','_positionType','_helpWindow','_currentAutoSize','isColorLocked','code','choiceListHelpWindowRect','convertCsvToTsvFile','status','_scene','processPyTextCode','ChoiceWindowMaxCols','length','send','textFont','convertButtonAssistEscapeCharacters','visible','_nameBoxWindow','map\x20event','changeChoiceBackgroundColor','paintOpacity','iconIndex','setMessageWindowWidth','CASING','नमस्ते','3779590SkwBHv','NUM','prepareForcedPositionEscapeCharacters','victory','TightWrap','processFailsafeChoice','ARRAYFUNC','choiceTextAlign','getMessageWindowWidth','replace','isClosed','preemptive','processNewLine','SelectWeapon','up-right','_autoPosRegExp','map\x20player','callCancelHandler','fontFace','Default','_texts','map\x20party','</LEFT>','setTextAlignment','Please\x20restart\x20the\x20game.','height','slice','Window_Base_initialize','updateRelativePosition','sort','8WTyrPs','MaxRows','Finnish','fontItalic','processEscapeCharacter','வணக்கம்','updatePlacement','_pictureTextHeight','stretchDimmerSprite','process_VisuMZ_MessageCore_AutoColor','_maxShuffleChoices','\x1bWrapJpBreak[0]','lineHeight','type','blt','UNDEFINED!','changeVolume','prepareShowTextPluginCommandFollowups','Russian','1089ZGuAIw','ENABLE','downleft','charCodeAt','Adiós','TextMacros','updateForcedPlacement','States','COMMONEVENT','isVolumeSymbol','drawTextEx','battle\x20party','ওহে','_itemChoiceItypeId','addCommand','faceName','setMessageWindowWordWrap','clearFlags','remove','makeSkillList','ARRAYSTRUCT','_lastPluginCommandInterpreter','</CENTER>','mainFontSize','close','setTextDelay','version','every','_scriptCall','addGeneralOptions','STR','makeItemList','MinWidth','initTextAlignement','convertNewPageTextStateMacros','_itemChoiceAtypeId','fontBold','Scene_Message_createChoiceListWindow','prepareWordWrapEscapeCharacters','tsv','_messageWindow','windowWidth','updateNameBoxMove','setupEvents','setBackground','ConvertParams','_lastAltCase','upperright','_pictureTextSprite','Window_Command_addCommand','application/csv','_refreshPauseSign','Name','switchOutTextForLocalization','preFlushTextState','getStartingChoiceWidth','command101','_colorLock','skills','getLocalizedText','clearCommandList','isBreakShowTextCommands','CsvFilename','adjustShowChoiceExtension','windowX','clampPlacementPosition','adjustShowChoiceCancel','preConvertEscapeCharacters','maxShuffleChoices','Padding','terminateMessage','prepareShowTextFollowups','Indonesian','createTsvFile','setChoiceListMaxColumns','Game_Interpreter_PluginCommand','EVAL','Window_Help_refresh','Window_ChoiceList_callCancelHandler','こんにちは','registerSelfEvent','ParseArmorNotetags','setupChoices','JSON','load','violet','down-center','levelUp','Window_Message_synchronizeNameBox','itemChoiceEtypeId','orange','setChoiceListLineHeight','হ্যালো','Sprite_Picture_updateBitmap','pageup','gainItem','SortObjectByKeyLength','_lastGainedItemData','Window_Options_changeVolume','ลาก่อน','_pictureId','Au\x20revoir','WordWrap','Viszontlátásra','Distance','purple','_moveDuration','VariableID','Hej','\x1bCASING[3]','choiceLineHeight','getChoiceListTextAlign','_commonEventId','middlecenter','\x1bTEXTALIGNMENT[2]','needsPictureTextRefresh','format','messageWidth','convertShowChoiceEscapeCodes','setPictureText','setColorLock','TextColor','_moveEasingType','getPictureText','lower\x20center','getChoiceListMaxRows','Window_Options_addGeneralOptions','[0]','itemChoiceItypeId','postFlushTextState','EachMessageStart','বিদায়','_autoPositionTarget','powerUpColor','value','</I>','addContinuousShowTextCommands','drawTextTopAligned','charAt','NameBoxWindowDefaultColor','drawPictureText','visuMzTextLocaleStatusText','isWeapon','AdjustRect','Window_Message_isTriggered','substring','gray','convertHardcodedEscapeReplacements','_pictureTextWindow','processFsTextCode','isMessageWindowWordWrap','exit','responseText','test','Hűha','Languages','createChoiceListHelpWindow','CreateAutoColorRegExpLists','%1,\x20does\x20not\x20support\x20attempted\x20text\x20code\x20usage.','MaxCols','random','Ahoj','Wauw','resetPositionX','Game_Map_setupEvents'];_0x2a97=function(){return _0xe1fb42;};return _0x2a97();}function Game_MessageCommonEvent(){this['initialize'](...arguments);}Game_MessageCommonEvent[_0x4fc126(0x460)]['initialize']=function(_0x3302da,_0x5b89c0){const _0x5ef89e=_0x4fc126;this[_0x5ef89e(0x3d2)]=_0x3302da,this[_0x5ef89e(0x2c6)]=_0x5b89c0||0x0,this[_0x5ef89e(0x538)]();},Game_MessageCommonEvent['prototype']['event']=function(){const _0x2905ea=_0x4fc126;return $dataCommonEvents[this[_0x2905ea(0x3d2)]];},Game_MessageCommonEvent[_0x4fc126(0x460)][_0x4fc126(0x56d)]=function(){const _0x16048=_0x4fc126;return this[_0x16048(0x4dd)]()[_0x16048(0x56d)];},Game_MessageCommonEvent[_0x4fc126(0x460)][_0x4fc126(0x538)]=function(){const _0x46d335=_0x4fc126;this['_interpreter']=new Game_Interpreter(),this[_0x46d335(0x2a6)][_0x46d335(0x4fc)](this[_0x46d335(0x56d)](),this['_eventId']);},Game_MessageCommonEvent['prototype'][_0x4fc126(0x462)]=function(){const _0x11f27d=_0x4fc126;this[_0x11f27d(0x2a6)]&&(this[_0x11f27d(0x2a6)]['isRunning']()?this[_0x11f27d(0x2a6)][_0x11f27d(0x462)]():this[_0x11f27d(0x456)]());},Game_MessageCommonEvent['prototype'][_0x4fc126(0x456)]=function(){const _0x193b4f=_0x4fc126;this[_0x193b4f(0x2a6)]=null;},Scene_Message['prototype'][_0x4fc126(0x239)]=function(){const _0x2e0ec1=_0x4fc126,_0x3f2047=Math['min'](Graphics[_0x2e0ec1(0x2e6)],$gameSystem['getMessageWindowWidth']()),_0x460f78=$gameSystem[_0x2e0ec1(0x44b)](),_0x4f69a4=this[_0x2e0ec1(0x463)](_0x460f78,![]),_0x268ebf=(Graphics[_0x2e0ec1(0x1b0)]-_0x3f2047)/0x2,_0x443a4d=0x0;return new Rectangle(_0x268ebf,_0x443a4d,_0x3f2047,_0x4f69a4);},VisuMZ[_0x4fc126(0x1b8)]['Scene_Message_createChoiceListWindow']=Scene_Message[_0x4fc126(0x460)][_0x4fc126(0x1d7)],Scene_Message['prototype'][_0x4fc126(0x1d7)]=function(){const _0x2550c1=_0x4fc126;VisuMZ[_0x2550c1(0x1b8)][_0x2550c1(0x387)][_0x2550c1(0x563)](this),this['createChoiceListHelpWindow']();},Scene_Message[_0x4fc126(0x460)][_0x4fc126(0x3fe)]=function(){const _0x157ec1=_0x4fc126,_0x545c4d=this['choiceListHelpWindowRect'](),_0x1b4c46=new Window_Help(_0x545c4d);_0x1b4c46[_0x157ec1(0x244)](),this[_0x157ec1(0x1ec)][_0x157ec1(0x55e)](_0x1b4c46),this[_0x157ec1(0x38a)][_0x157ec1(0x510)](_0x1b4c46),this[_0x157ec1(0x28b)](_0x1b4c46),this[_0x157ec1(0x249)]=_0x1b4c46;},Scene_Message[_0x4fc126(0x460)][_0x4fc126(0x31e)]=function(){const _0x5e2723=_0x4fc126,_0x18e882=0x0,_0xd6b982=0x0,_0x31a24f=Graphics[_0x5e2723(0x1b0)],_0x59a032=this['calcWindowHeight'](0x2,![]);return new Rectangle(_0x18e882,_0xd6b982,_0x31a24f,_0x59a032);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x510)]=function(_0x93b31e){const _0x1b6f75=_0x4fc126;this[_0x1b6f75(0x249)]=_0x93b31e;},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x2a5)]=function(){const _0x478784=_0x4fc126;if(!this[_0x478784(0x249)])return;const _0x4413d6=this['_choiceListHelpWindow'];_0x4413d6&&(_0x4413d6['y']=this['y']>0x0?0x0:Graphics[_0x478784(0x2d1)]-_0x4413d6[_0x478784(0x34a)]);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x287)]=Scene_Options['prototype'][_0x4fc126(0x1ff)],Scene_Options[_0x4fc126(0x460)][_0x4fc126(0x1ff)]=function(){const _0x307f7d=_0x4fc126;let _0x168550=VisuMZ[_0x307f7d(0x1b8)]['Scene_Options_maxCommands']['call'](this);const _0x38ba50=VisuMZ[_0x307f7d(0x1b8)][_0x307f7d(0x248)];if(_0x38ba50[_0x307f7d(0x50c)][_0x307f7d(0x3f1)]){_0x38ba50[_0x307f7d(0x257)][_0x307f7d(0x4a4)]&&TextManager['isVisuMzLocalizationEnabled']()&&_0x168550++;if(_0x38ba50[_0x307f7d(0x50c)][_0x307f7d(0x4a4)])_0x168550++;}return _0x168550;},VisuMZ['MessageCore'][_0x4fc126(0x3bf)]=Sprite_Picture[_0x4fc126(0x460)]['updateBitmap'],Sprite_Picture[_0x4fc126(0x460)][_0x4fc126(0x417)]=function(){const _0x214e62=_0x4fc126;VisuMZ['MessageCore']['Sprite_Picture_updateBitmap'][_0x214e62(0x563)](this),this[_0x214e62(0x231)]();},VisuMZ['MessageCore'][_0x4fc126(0x22f)]=Sprite_Picture[_0x4fc126(0x460)][_0x4fc126(0x462)],Sprite_Picture[_0x4fc126(0x460)][_0x4fc126(0x462)]=function(){const _0x27283f=_0x4fc126;VisuMZ[_0x27283f(0x1b8)][_0x27283f(0x22f)][_0x27283f(0x563)](this),this[_0x27283f(0x4d1)]();},Sprite_Picture[_0x4fc126(0x460)][_0x4fc126(0x4d1)]=function(){const _0x1e4da3=_0x4fc126;if(!this[_0x1e4da3(0x328)])return;this[_0x1e4da3(0x26f)](),this[_0x1e4da3(0x500)](),this[_0x1e4da3(0x3ee)](),this[_0x1e4da3(0x473)]();},Sprite_Picture[_0x4fc126(0x460)][_0x4fc126(0x231)]=function(){const _0x3a686a=_0x4fc126;if(this[_0x3a686a(0x3f6)])return;if(this['_pictureTextSprite'])return;const _0x209696=new Rectangle(0x0,0x0,0x0,0x0);this[_0x3a686a(0x3f6)]=new Window_Base(_0x209696),this[_0x3a686a(0x3f6)][_0x3a686a(0x2d5)]=0x0,this[_0x3a686a(0x392)]=new Sprite(),this[_0x3a686a(0x312)](this[_0x3a686a(0x392)],0x0),this[_0x3a686a(0x535)]=0x0,this[_0x3a686a(0x356)]=0x0,this[_0x3a686a(0x2ee)]={};},Sprite_Picture['prototype'][_0x4fc126(0x26f)]=function(){const _0x48a9e3=_0x4fc126;if(!this['_pictureTextWindow'])return;if(this[_0x48a9e3(0x535)]===this[_0x48a9e3(0x2e6)]&&this[_0x48a9e3(0x356)]===this[_0x48a9e3(0x34a)])return;this[_0x48a9e3(0x535)]=this[_0x48a9e3(0x2e6)],this[_0x48a9e3(0x356)]=this[_0x48a9e3(0x34a)],this[_0x48a9e3(0x2ee)]={},this[_0x48a9e3(0x3f6)][_0x48a9e3(0x4c7)](0x0,0x0,this[_0x48a9e3(0x2e6)],this['height']);},Sprite_Picture[_0x4fc126(0x460)][_0x4fc126(0x500)]=function(){const _0xc71a79=_0x4fc126;if(!this['_pictureTextSprite'])return;this[_0xc71a79(0x392)][_0xc71a79(0x45a)]['x']=this[_0xc71a79(0x45a)]['x'],this['_pictureTextSprite']['anchor']['y']=this[_0xc71a79(0x45a)]['y'];},Sprite_Picture['prototype'][_0x4fc126(0x3ee)]=function(){const _0x498cee=_0x4fc126;if(!this['_pictureTextWindow'])return;if(!this['anyPictureTextChanges']())return;const _0x4813bb=[_0x498cee(0x480),'up',_0x498cee(0x391),'left',_0x498cee(0x1bb),_0x498cee(0x1e2),'lowerleft','down',_0x498cee(0x251)];this[_0x498cee(0x3f6)][_0x498cee(0x1cd)]();for(const _0x41a592 of _0x4813bb){this['drawPictureTextZone'](_0x41a592);}},Sprite_Picture['prototype'][_0x4fc126(0x26e)]=function(){const _0x1374fe=_0x4fc126;if($gameScreen[_0x1374fe(0x3d5)](this[_0x1374fe(0x3c6)]))return!![];const _0x577d82=[_0x1374fe(0x480),'up',_0x1374fe(0x391),'left','center',_0x1374fe(0x1e2),_0x1374fe(0x4a1),_0x1374fe(0x226),_0x1374fe(0x251)];for(const _0x965c3f of _0x577d82){const _0x51df8d=$gameScreen[_0x1374fe(0x3dd)](this[_0x1374fe(0x3c6)],_0x965c3f);if(this[_0x1374fe(0x2ee)][_0x965c3f]===_0x51df8d)continue;return!![];}return![];},Sprite_Picture[_0x4fc126(0x460)][_0x4fc126(0x4da)]=function(_0x1f6570){const _0x58982d=_0x4fc126;$gameScreen[_0x58982d(0x558)](this[_0x58982d(0x3c6)]);const _0x44d4c6=$gameScreen[_0x58982d(0x3dd)](this['_pictureId'],_0x1f6570);this[_0x58982d(0x2ee)][_0x1f6570]=_0x44d4c6;const _0x5e8fe3=this[_0x58982d(0x3f6)][_0x58982d(0x2de)](_0x44d4c6);let _0xe3af7=$gameScreen[_0x58982d(0x228)](this[_0x58982d(0x3c6)]),_0x38e544=_0xe3af7,_0x24af82=_0xe3af7;if(['up',_0x58982d(0x1bb),'down'][_0x58982d(0x585)](_0x1f6570))_0x38e544=Math[_0x58982d(0x42d)]((this[_0x58982d(0x2e6)]-_0x5e8fe3[_0x58982d(0x2e6)])/0x2);else['upperright',_0x58982d(0x1e2),_0x58982d(0x251)][_0x58982d(0x585)](_0x1f6570)&&(_0x38e544=Math['floor'](this[_0x58982d(0x2e6)]-_0x5e8fe3[_0x58982d(0x2e6)]-_0xe3af7));if(['left',_0x58982d(0x1bb),'right'][_0x58982d(0x585)](_0x1f6570))_0x24af82=Math[_0x58982d(0x42d)]((this[_0x58982d(0x34a)]-_0x5e8fe3[_0x58982d(0x34a)])/0x2);else[_0x58982d(0x4a1),_0x58982d(0x226),_0x58982d(0x251)][_0x58982d(0x585)](_0x1f6570)&&(_0x24af82=Math['floor'](this[_0x58982d(0x34a)]-_0x5e8fe3[_0x58982d(0x34a)]-_0xe3af7));this[_0x58982d(0x3f6)][_0x58982d(0x36c)](_0x44d4c6,_0x38e544,_0x24af82);},Sprite_Picture['prototype']['attachPictureText']=function(){const _0x45bb5d=_0x4fc126;if(!this[_0x45bb5d(0x3f6)])return;if(!this[_0x45bb5d(0x392)])return;this[_0x45bb5d(0x392)][_0x45bb5d(0x42e)]=this[_0x45bb5d(0x3f6)][_0x45bb5d(0x1d3)];},VisuMZ['MessageCore'][_0x4fc126(0x34c)]=Window_Base[_0x4fc126(0x460)][_0x4fc126(0x1c5)],Window_Base[_0x4fc126(0x460)][_0x4fc126(0x1c5)]=function(_0x1ad51b){const _0x40ed3a=_0x4fc126;this[_0x40ed3a(0x57a)](_0x1ad51b),VisuMZ[_0x40ed3a(0x1b8)]['Window_Base_initialize'][_0x40ed3a(0x563)](this,_0x1ad51b);},Window_Base[_0x4fc126(0x460)]['initMessageCore']=function(_0x207c54){const _0x31579e=_0x4fc126;this[_0x31579e(0x383)](),this[_0x31579e(0x1be)](),this[_0x31579e(0x454)](_0x207c54);},Window_Base[_0x4fc126(0x460)]['initTextAlignement']=function(){const _0xdff640=_0x4fc126;this['setTextAlignment'](_0xdff640(0x444));},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x348)]=function(_0x5a20b5){const _0xdb6a25=_0x4fc126;this[_0xdb6a25(0x4d7)]=_0x5a20b5;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x1e7)]=function(){const _0x53b259=_0x4fc126;return this[_0x53b259(0x4d7)];},VisuMZ['MessageCore'][_0x4fc126(0x46d)]=Window_Base['prototype'][_0x4fc126(0x2de)],Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2de)]=function(_0x58ed45){const _0x321369=_0x4fc126;return this[_0x321369(0x1be)](),VisuMZ[_0x321369(0x1b8)][_0x321369(0x46d)][_0x321369(0x563)](this,_0x58ed45);},Window_Base[_0x4fc126(0x460)]['textSizeExRaw']=function(_0x22fcf6){const _0x143f70=_0x4fc126;return VisuMZ[_0x143f70(0x1b8)][_0x143f70(0x46d)][_0x143f70(0x563)](this,_0x22fcf6);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x2d7)]=Window_Base[_0x4fc126(0x460)][_0x4fc126(0x25d)],Window_Base[_0x4fc126(0x460)][_0x4fc126(0x25d)]=function(_0x23e3f2){const _0x32887d=_0x4fc126;VisuMZ[_0x32887d(0x1b8)][_0x32887d(0x2d7)][_0x32887d(0x563)](this,_0x23e3f2);if(_0x23e3f2[_0x32887d(0x29a)])this[_0x32887d(0x348)](_0x32887d(0x444));},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x1be)]=function(){this['setWordWrap'](![]);},Window_Base[_0x4fc126(0x460)]['isWordWrapEnabled']=function(){return this['_wordWrap'];},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x498)]=function(_0x171928){return this['_wordWrap']=_0x171928,'';},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x454)]=function(_0x145f6e){const _0x10c1f3=_0x4fc126;this[_0x10c1f3(0x2c2)]=JsonEx['makeDeepCopy'](_0x145f6e);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x449)]=function(){const _0x3d6b9e=_0x4fc126;this[_0x3d6b9e(0x1d3)][_0x3d6b9e(0x343)]=$gameSystem[_0x3d6b9e(0x48a)](),this[_0x3d6b9e(0x1d3)][_0x3d6b9e(0x2ea)]=$gameSystem[_0x3d6b9e(0x379)](),this['contents'][_0x3d6b9e(0x386)]=![],this[_0x3d6b9e(0x1d3)][_0x3d6b9e(0x352)]=![],this[_0x3d6b9e(0x2dc)]=0x0,this[_0x3d6b9e(0x2f3)]=!![],this['resetTextColor']();},Window_Base[_0x4fc126(0x460)]['resetTextColor']=function(){const _0x5b1d60=_0x4fc126;this['changeTextColor'](ColorManager[_0x5b1d60(0x590)]()),this['changeOutlineColor'](ColorManager[_0x5b1d60(0x4b9)]());const _0x74675e=VisuMZ[_0x5b1d60(0x1b8)][_0x5b1d60(0x248)][_0x5b1d60(0x1fe)];_0x74675e[_0x5b1d60(0x573)]===undefined&&(_0x74675e[_0x5b1d60(0x573)]=0x3),this['contents']['outlineWidth']=_0x74675e[_0x5b1d60(0x573)],this[_0x5b1d60(0x3da)](![]);},Window_Base['prototype'][_0x4fc126(0x3da)]=function(_0x1b8a76){const _0x160643=_0x4fc126;this[_0x160643(0x39b)]=_0x1b8a76;},Window_Base[_0x4fc126(0x460)]['isColorLocked']=function(){const _0x1ea3de=_0x4fc126;return this[_0x1ea3de(0x39b)];},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x43c)]=function(){return![];},Window_Base['prototype'][_0x4fc126(0x40f)]=function(){const _0xf30f33=_0x4fc126,_0x579fe3=[_0xf30f33(0x343),_0xf30f33(0x2ea),_0xf30f33(0x386),_0xf30f33(0x352),_0xf30f33(0x256),_0xf30f33(0x4f4),'outlineWidth',_0xf30f33(0x32c)];let _0x216d63={};for(const _0xc8dab5 of _0x579fe3){_0x216d63[_0xc8dab5]=this['contents'][_0xc8dab5];}return _0x216d63;},Window_Base['prototype']['returnPreservedFontSettings']=function(_0x59db8e){const _0x3b7cd8=_0x4fc126;for(const _0xadc907 in _0x59db8e){this[_0x3b7cd8(0x1d3)][_0xadc907]=_0x59db8e[_0xadc907];}},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x4a0)]=Window_Base['prototype'][_0x4fc126(0x462)],Window_Base[_0x4fc126(0x460)][_0x4fc126(0x462)]=function(){const _0x1ad802=_0x4fc126;VisuMZ[_0x1ad802(0x1b8)][_0x1ad802(0x4a0)][_0x1ad802(0x563)](this),this[_0x1ad802(0x567)]();},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x550)]=function(){return![];},Window_Base['prototype'][_0x4fc126(0x567)]=function(){const _0x4b05d6=_0x4fc126;this[_0x4b05d6(0x3cc)]>0x0&&(this[_0x4b05d6(0x550)]()&&(this['x']=this[_0x4b05d6(0x23e)](this['x'],this[_0x4b05d6(0x1f4)]),this['y']=this['applyMoveEasing'](this['y'],this[_0x4b05d6(0x302)]),this['width']=this['applyMoveEasing'](this[_0x4b05d6(0x2e6)],this[_0x4b05d6(0x274)]),this[_0x4b05d6(0x34a)]=this['applyMoveEasing'](this[_0x4b05d6(0x34a)],this['_moveTargetHeight']),this[_0x4b05d6(0x3a3)]()),this[_0x4b05d6(0x3cc)]--);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x3a3)]=function(_0x17a65f,_0x2044a4){const _0x42d544=_0x4fc126;!_0x17a65f&&(this[_0x42d544(0x2e6)]=Math[_0x42d544(0x44e)](this['width'],Graphics['width']),this[_0x42d544(0x34a)]=Math[_0x42d544(0x44e)](this['height'],Graphics[_0x42d544(0x34a)]));if(!_0x2044a4){const _0x4ed8c9=-(Math[_0x42d544(0x42d)](Graphics['width']-Graphics[_0x42d544(0x1b0)])/0x2),_0x4866=_0x4ed8c9+Graphics['width']-this[_0x42d544(0x2e6)],_0x409c95=-(Math[_0x42d544(0x42d)](Graphics[_0x42d544(0x34a)]-Graphics[_0x42d544(0x2d1)])/0x2),_0x482749=_0x409c95+Graphics[_0x42d544(0x34a)]-this[_0x42d544(0x34a)];this['x']=this['x'][_0x42d544(0x415)](_0x4ed8c9,_0x4866),this['y']=this['y'][_0x42d544(0x415)](_0x409c95,_0x482749);}},Window_Base[_0x4fc126(0x460)]['applyMoveEasing']=function(_0x471b78,_0x5109bd){const _0x1f44b8=_0x4fc126,_0x3150ee=this['_moveDuration'],_0x36a07c=this['_wholeMoveDuration'],_0x3d0187=this['calcMoveEasing']((_0x36a07c-_0x3150ee)/_0x36a07c),_0x1a1cb6=this[_0x1f44b8(0x22c)]((_0x36a07c-_0x3150ee+0x1)/_0x36a07c),_0x137302=(_0x471b78-_0x5109bd*_0x3d0187)/(0x1-_0x3d0187);return _0x137302+(_0x5109bd-_0x137302)*_0x1a1cb6;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x22c)]=function(_0x15eed9){const _0x59cfc6=_0x4fc126,_0x4c00c4=0x2;switch(this[_0x59cfc6(0x3dc)]){case 0x0:return _0x15eed9;case 0x1:return this[_0x59cfc6(0x1e4)](_0x15eed9,_0x4c00c4);case 0x2:return this[_0x59cfc6(0x29f)](_0x15eed9,_0x4c00c4);case 0x3:return this[_0x59cfc6(0x544)](_0x15eed9,_0x4c00c4);default:return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x59cfc6(0x23e)](_0x15eed9,this[_0x59cfc6(0x3dc)]):_0x15eed9;}},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x425)]=function(_0x2b5b16,_0x31e77d,_0x4aa308,_0xae2cc2,_0xcd72ce,_0x2452e1){const _0x397e33=_0x4fc126;this['_moveTargetX']=_0x2b5b16,this[_0x397e33(0x302)]=_0x31e77d,this[_0x397e33(0x274)]=_0x4aa308||this['width'],this[_0x397e33(0x2c8)]=_0xae2cc2||this[_0x397e33(0x34a)],this[_0x397e33(0x3cc)]=_0xcd72ce||0x1;if(this[_0x397e33(0x3cc)]<=0x0)this[_0x397e33(0x3cc)]=0x1;this[_0x397e33(0x513)]=this['_moveDuration'],this['_moveEasingType']=_0x2452e1||0x0;if(_0xcd72ce<=0x0)this[_0x397e33(0x567)]();},Window_Base['prototype']['moveBy']=function(_0x1418bd,_0x20f8cd,_0x132da9,_0x15f7ec,_0xe2f807,_0x3f45a8){const _0x57bc58=_0x4fc126;this['_moveTargetX']=this['x']+_0x1418bd,this[_0x57bc58(0x302)]=this['y']+_0x20f8cd,this[_0x57bc58(0x274)]=this[_0x57bc58(0x2e6)]+(_0x132da9||0x0),this['_moveTargetHeight']=this['height']+(_0x15f7ec||0x0),this[_0x57bc58(0x3cc)]=_0xe2f807||0x1;if(this[_0x57bc58(0x3cc)]<=0x0)this['_moveDuration']=0x1;this['_wholeMoveDuration']=this[_0x57bc58(0x3cc)],this['_moveEasingType']=_0x3f45a8||0x0;if(_0xe2f807<=0x0)this[_0x57bc58(0x567)]();},Window_Base['prototype'][_0x4fc126(0x49b)]=function(_0x4addae,_0x207da8){const _0x4c6c81=_0x4fc126;this[_0x4c6c81(0x425)](this[_0x4c6c81(0x2c2)]['x'],this[_0x4c6c81(0x2c2)]['y'],this['_resetRect'][_0x4c6c81(0x2e6)],this[_0x4c6c81(0x2c2)][_0x4c6c81(0x34a)],_0x4addae,_0x207da8);},VisuMZ[_0x4fc126(0x1b8)]['Window_Base_changeTextColor']=Window_Base['prototype']['changeTextColor'],Window_Base[_0x4fc126(0x460)]['changeTextColor']=function(_0x1b13f1){const _0x43bacc=_0x4fc126;if(this[_0x43bacc(0x31c)]())return;_0x1b13f1=_0x1b13f1[_0x43bacc(0x33a)](/\,/g,''),this[_0x43bacc(0x428)]=this['_textColorStack']||[],this['_textColorStack'][_0x43bacc(0x271)](this['contents']['textColor']),VisuMZ[_0x43bacc(0x1b8)][_0x43bacc(0x40c)]['call'](this,_0x1b13f1);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2c7)]=function(_0x23c46a){const _0x40a769=_0x4fc126;this[_0x40a769(0x451)](_0x23c46a);if(this[_0x40a769(0x31c)]())return;_0x23c46a[_0x40a769(0x29a)]&&(this[_0x40a769(0x428)]=this[_0x40a769(0x428)]||[],this[_0x40a769(0x1d3)][_0x40a769(0x256)]=this[_0x40a769(0x428)][_0x40a769(0x51c)]()||ColorManager[_0x40a769(0x590)]());},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x40a)]=function(_0x83b687){const _0x4b17a5=_0x4fc126;return _0x83b687=this[_0x4b17a5(0x24a)](_0x83b687),_0x83b687=this[_0x4b17a5(0x278)](_0x83b687),_0x83b687=this[_0x4b17a5(0x411)](_0x83b687),_0x83b687=this[_0x4b17a5(0x327)](_0x83b687),_0x83b687=this[_0x4b17a5(0x3a5)](_0x83b687),_0x83b687=this[_0x4b17a5(0x3d8)](_0x83b687),_0x83b687=this[_0x4b17a5(0x440)](_0x83b687),_0x83b687=this[_0x4b17a5(0x2fe)](_0x83b687),_0x83b687=this[_0x4b17a5(0x56b)](_0x83b687),_0x83b687=this[_0x4b17a5(0x1f2)](_0x83b687),_0x83b687=this['convertBaseEscapeCharacters'](_0x83b687),_0x83b687=this[_0x4b17a5(0x3f5)](_0x83b687),_0x83b687=this[_0x4b17a5(0x2bf)](_0x83b687),_0x83b687=this[_0x4b17a5(0x483)](_0x83b687),_0x83b687=this[_0x4b17a5(0x48e)](_0x83b687),_0x83b687=this['convertVariableEscapeCharacters'](_0x83b687),_0x83b687=this[_0x4b17a5(0x2bc)](_0x83b687),_0x83b687=this[_0x4b17a5(0x388)](_0x83b687),_0x83b687;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x24a)]=function(_0x41c716){const _0x1e96f7=_0x4fc126;this[_0x1e96f7(0x56f)]=![];for(const _0x2ebc84 of VisuMZ[_0x1e96f7(0x1b8)][_0x1e96f7(0x248)]['TextMacros']){_0x41c716&&_0x41c716['match'](_0x2ebc84[_0x1e96f7(0x237)])&&(this[_0x1e96f7(0x56f)]=!![],_0x41c716=_0x41c716[_0x1e96f7(0x33a)](_0x2ebc84[_0x1e96f7(0x237)],_0x2ebc84[_0x1e96f7(0x2b5)]['bind'](this)));}return _0x41c716||'';},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x278)]=function(_0x5c259b){const _0x33c0df=_0x4fc126;return _0x5c259b=_0x5c259b[_0x33c0df(0x33a)](/\\/g,'\x1b'),_0x5c259b=_0x5c259b[_0x33c0df(0x33a)](/\x1b\x1b/g,'\x5c'),_0x5c259b;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x411)]=function(_0x3fef84){const _0x2ead3f=_0x4fc126;for(;;){if(_0x3fef84[_0x2ead3f(0x2b4)](/\\V\[(\d+)\]/gi))_0x3fef84=_0x3fef84[_0x2ead3f(0x33a)](/\\V\[(\d+)\]/gi,(_0x47c752,_0x250d7c)=>this['convertBackslashCharacters'](String($gameVariables['value'](parseInt(_0x250d7c)))));else{if(_0x3fef84['match'](/\x1bV\[(\d+)\]/gi))_0x3fef84=_0x3fef84[_0x2ead3f(0x33a)](/\x1bV\[(\d+)\]/gi,(_0x2d65c9,_0x2de18c)=>this[_0x2ead3f(0x278)](String($gameVariables[_0x2ead3f(0x3e8)](parseInt(_0x2de18c)))));else break;}}return _0x3fef84;},Window_Base['prototype']['convertButtonAssistEscapeCharacters']=function(_0x2cd133){const _0x41295e=_0x4fc126;return Imported[_0x41295e(0x4b3)]&&(_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<Up (?:KEY|BUTTON)>/gi,this['convertButtonAssistText']('up')),_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<Left (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)](_0x41295e(0x4ee))),_0x2cd133=_0x2cd133['replace'](/<Right (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)](_0x41295e(0x1e2))),_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<Down (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)](_0x41295e(0x226))),_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<Ok (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)]('ok')),_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<Cancel (?:KEY|BUTTON)>/gi,this['convertButtonAssistText'](_0x41295e(0x1b9))),_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<Menu (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)](_0x41295e(0x2e5))),_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<Shift (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)](_0x41295e(0x51c))),_0x2cd133=_0x2cd133[_0x41295e(0x33a)](/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)](_0x41295e(0x3c0))),_0x2cd133=_0x2cd133['replace'](/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi,this[_0x41295e(0x4ff)]('pagedown'))),_0x2cd133;},Window_Base[_0x4fc126(0x460)]['convertButtonAssistText']=function(_0x3f01b4){const _0x4886b4=_0x4fc126;let _0x4cfe69=TextManager['getInputButtonString'](_0x3f01b4)||'';return _0x4cfe69=this['convertBackslashCharacters'](_0x4cfe69),_0x4cfe69=this[_0x4886b4(0x411)](_0x4cfe69),_0x4cfe69['trim']();},Window_Base[_0x4fc126(0x460)]['preConvertEscapeCharacters']=function(_0x59c42f){const _0x2ce1d3=_0x4fc126;return _0x59c42f=this[_0x2ce1d3(0x397)](_0x59c42f),this[_0x2ce1d3(0x465)](),_0x59c42f;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x397)]=function(_0x19099a){const _0x534426=_0x4fc126;return _0x19099a=TextManager[_0x534426(0x2d6)](_0x19099a),_0x19099a;},VisuMZ[_0x4fc126(0x1b8)]['String_format']=String['prototype'][_0x4fc126(0x3d6)],String[_0x4fc126(0x460)]['format']=function(){const _0x318b69=_0x4fc126;let _0x4c31fa=this;return _0x4c31fa=TextManager['parseLocalizedText'](_0x4c31fa),VisuMZ[_0x318b69(0x1b8)][_0x318b69(0x2cd)][_0x318b69(0x579)](_0x4c31fa,arguments);},VisuMZ['MessageCore'][_0x4fc126(0x1c1)]=Bitmap['prototype'][_0x4fc126(0x4f5)],Bitmap['prototype'][_0x4fc126(0x4f5)]=function(_0x486f30,_0x41a9eb,_0x203796,_0x46ecb6,_0x1a3b7b,_0x15ddd2){const _0x28f1e1=_0x4fc126;_0x486f30=TextManager[_0x28f1e1(0x2d6)](_0x486f30),VisuMZ['MessageCore'][_0x28f1e1(0x1c1)][_0x28f1e1(0x563)](this,_0x486f30,_0x41a9eb,_0x203796,_0x46ecb6,_0x1a3b7b,_0x15ddd2);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x541)]=Bitmap[_0x4fc126(0x460)][_0x4fc126(0x3eb)],Bitmap['prototype'][_0x4fc126(0x3eb)]=function(_0x5892a1,_0x86e36f,_0x5ac296,_0x498f31,_0x1f0cac,_0x4b66ad){const _0x2bf7b9=_0x4fc126;_0x5892a1=TextManager['parseLocalizedText'](_0x5892a1),VisuMZ[_0x2bf7b9(0x1b8)]['Bitmap_drawTextTopAligned']['call'](this,_0x5892a1,_0x86e36f,_0x5ac296,_0x498f31,_0x1f0cac,_0x4b66ad);},Window_Base[_0x4fc126(0x460)]['postConvertEscapeCharacters']=function(_0x8e6abc){return _0x8e6abc;},Window_Base['prototype'][_0x4fc126(0x3d8)]=function(_0xd47b8){const _0x4d9811=_0x4fc126;return this[_0x4d9811(0x4a6)]()&&(_0xd47b8=_0xd47b8[_0x4d9811(0x33a)](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0xd47b8=_0xd47b8[_0x4d9811(0x33a)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0xd47b8=_0xd47b8[_0x4d9811(0x33a)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0xd47b8=_0xd47b8[_0x4d9811(0x33a)](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0xd47b8=_0xd47b8[_0x4d9811(0x33a)](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0xd47b8=_0xd47b8['replace'](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi,''),_0xd47b8=_0xd47b8[_0x4d9811(0x33a)](/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi,''),_0xd47b8=_0xd47b8[_0x4d9811(0x33a)](/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi,'')),_0xd47b8;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x4a6)]=function(){const _0x25b99a=_0x4fc126,_0xe2673e=[_0x25b99a(0x282),_0x25b99a(0x317)];return _0xe2673e[_0x25b99a(0x585)](this[_0x25b99a(0x49e)][_0x25b99a(0x2b3)]);},Window_Base['prototype'][_0x4fc126(0x440)]=function(_0x2c0258){const _0x52436c=_0x4fc126;return _0x2c0258=_0x2c0258[_0x52436c(0x33a)](/<B>/gi,_0x52436c(0x252)),_0x2c0258=_0x2c0258[_0x52436c(0x33a)](/<\/B>/gi,_0x52436c(0x492)),_0x2c0258=_0x2c0258[_0x52436c(0x33a)](/<I>/gi,_0x52436c(0x4d6)),_0x2c0258=_0x2c0258[_0x52436c(0x33a)](/<\/I>/gi,'\x1bITALIC[0]'),_0x2c0258;},Window_Base['prototype'][_0x4fc126(0x2fe)]=function(_0xac1be5){const _0x229b38=_0x4fc126;return _0xac1be5=_0xac1be5[_0x229b38(0x33a)](/<LEFT>/gi,_0x229b38(0x549)),_0xac1be5=_0xac1be5['replace'](/<\/LEFT>/gi,_0x229b38(0x305)),_0xac1be5=_0xac1be5[_0x229b38(0x33a)](/<CENTER>/gi,_0x229b38(0x3d4)),_0xac1be5=_0xac1be5[_0x229b38(0x33a)](/<\/CENTER>/gi,_0x229b38(0x305)),_0xac1be5=_0xac1be5[_0x229b38(0x33a)](/<RIGHT>/gi,_0x229b38(0x448)),_0xac1be5=_0xac1be5[_0x229b38(0x33a)](/<\/RIGHT>/gi,_0x229b38(0x305)),_0xac1be5;},Window_Base['prototype']['convertLockColorsEscapeCharacters']=function(_0x33e67d){const _0x37d370=_0x4fc126;return _0x33e67d=_0x33e67d[_0x37d370(0x33a)](/<COLORLOCK>/gi,_0x37d370(0x52b)),_0x33e67d=_0x33e67d['replace'](/<\/COLORLOCK>/gi,_0x37d370(0x53d)),_0x33e67d=_0x33e67d[_0x37d370(0x33a)](/\(\(\(/gi,_0x37d370(0x52b)),_0x33e67d=_0x33e67d[_0x37d370(0x33a)](/\)\)\)/gi,_0x37d370(0x53d)),_0x33e67d;},Window_Base['prototype'][_0x4fc126(0x1f2)]=function(_0x575367){const _0x5be8c2=_0x4fc126;return _0x575367=_0x575367[_0x5be8c2(0x33a)](/<(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,_0x5be8c2(0x548)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<\/(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,_0x5be8c2(0x272)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x5be8c2(0x27a)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<\/(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x5be8c2(0x272)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,_0x5be8c2(0x3cf)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<\/(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,_0x5be8c2(0x272)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<(?:ALT|ALTERNATE|ALT CASE)>/gi,'\x1bCASING[4]'),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<\/(?:ALT|ALTERNATE|ALT CASE)>/gi,_0x5be8c2(0x272)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,_0x5be8c2(0x414)),_0x575367=_0x575367[_0x5be8c2(0x33a)](/<\/(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,'\x1bCASING[0]'),_0x575367;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x58b)]=function(_0x46a7cc){const _0x3c29e9=_0x4fc126;return _0x46a7cc=_0x46a7cc['replace'](/\x1bN\[(\d+)\]/gi,(_0x1ea868,_0x46dbd7)=>this['actorName'](parseInt(_0x46dbd7))),_0x46a7cc=_0x46a7cc[_0x3c29e9(0x33a)](/\x1bP\[(\d+)\]/gi,(_0xd60312,_0x433337)=>this[_0x3c29e9(0x436)](parseInt(_0x433337))),_0x46a7cc=_0x46a7cc[_0x3c29e9(0x33a)](/\x1bG/gi,TextManager[_0x3c29e9(0x4b2)]),_0x46a7cc;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x3f5)]=function(_0x343c3d){const _0x41d9cd=_0x4fc126;return _0x343c3d=_0x343c3d[_0x41d9cd(0x33a)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x41d9cd(0x560)]()),_0x343c3d=_0x343c3d[_0x41d9cd(0x33a)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this['battleUserName']()),_0x343c3d=_0x343c3d[_0x41d9cd(0x33a)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x41d9cd(0x508)](!![])),_0x343c3d=_0x343c3d[_0x41d9cd(0x33a)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this[_0x41d9cd(0x508)](![])),_0x343c3d;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x560)]=function(){const _0xf8c707=_0x4fc126;if(!SceneManager[_0xf8c707(0x250)]())return'';if(BattleManager['_target'])return BattleManager[_0xf8c707(0x1e6)][_0xf8c707(0x2b3)]();if(BattleManager['_targets'][0x0])return BattleManager[_0xf8c707(0x230)][0x0]['name']();return'';},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x4b1)]=function(){const _0x18c2fa=_0x4fc126;if(!SceneManager[_0x18c2fa(0x250)]())return'';let _0x279a89=null;return _0x279a89=BattleManager[_0x18c2fa(0x562)],!_0x279a89&&BattleManager[_0x18c2fa(0x475)]()&&(_0x279a89=BattleManager[_0x18c2fa(0x547)]()),_0x279a89?_0x279a89[_0x18c2fa(0x2b3)]():'';},Window_Base['prototype']['battleActionName']=function(_0x496644){const _0x51bb2c=_0x4fc126;if(!SceneManager['isSceneBattle']())return'';let _0x47563b=BattleManager[_0x51bb2c(0x52d)]||null;!_0x47563b&&BattleManager[_0x51bb2c(0x475)]()&&(_0x47563b=BattleManager[_0x51bb2c(0x1c3)]());if(_0x47563b&&_0x47563b[_0x51bb2c(0x491)]()){let _0x2bc979='';if(_0x496644)_0x2bc979+=_0x51bb2c(0x20c)[_0x51bb2c(0x3d6)](_0x47563b[_0x51bb2c(0x491)]()[_0x51bb2c(0x32d)]);return _0x2bc979+=_0x47563b['item']()['name'],_0x2bc979;}return'';},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2bf)]=function(_0x46f98d){const _0x5c7df4=_0x4fc126;for(const _0x49808e of VisuMZ[_0x5c7df4(0x1b8)][_0x5c7df4(0x248)]['TextCodeActions']){_0x46f98d[_0x5c7df4(0x2b4)](_0x49808e['textCodeCheck'])&&(_0x46f98d=_0x46f98d[_0x5c7df4(0x33a)](_0x49808e[_0x5c7df4(0x237)],_0x49808e[_0x5c7df4(0x2b5)]),_0x46f98d=this[_0x5c7df4(0x411)](_0x46f98d));}return _0x46f98d;},Window_Base[_0x4fc126(0x460)]['convertMessageCoreEscapeReplacements']=function(_0x13c26a){const _0x27c838=_0x4fc126;for(const _0x168a1f of VisuMZ['MessageCore'][_0x27c838(0x248)][_0x27c838(0x21a)]){_0x13c26a[_0x27c838(0x2b4)](_0x168a1f[_0x27c838(0x237)])&&(_0x13c26a=_0x13c26a['replace'](_0x168a1f[_0x27c838(0x237)],_0x168a1f[_0x27c838(0x2b5)]['bind'](this)),_0x13c26a=this[_0x27c838(0x411)](_0x13c26a));}return _0x13c26a;},Window_Base[_0x4fc126(0x460)]['actorName']=function(_0x4081a2){const _0x43ce22=_0x4fc126,_0x4cb606=_0x4081a2>=0x1?$gameActors[_0x43ce22(0x547)](_0x4081a2):null,_0x118d3b=_0x4cb606?_0x4cb606[_0x43ce22(0x2b3)]():'',_0x28e32d=Number(VisuMZ[_0x43ce22(0x1b8)]['Settings']['AutoColor'][_0x43ce22(0x1cc)]);return this[_0x43ce22(0x43c)]()&&_0x28e32d!==0x0?'\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x43ce22(0x3d6)](_0x28e32d,_0x118d3b):_0x118d3b;},Window_Base['prototype'][_0x4fc126(0x436)]=function(_0x422db6){const _0x1aaed8=_0x4fc126,_0xeed7d5=_0x422db6>=0x1?$gameParty[_0x1aaed8(0x470)]()[_0x422db6-0x1]:null,_0x4cf982=_0xeed7d5?_0xeed7d5['name']():'',_0x5585d5=Number(VisuMZ[_0x1aaed8(0x1b8)][_0x1aaed8(0x248)][_0x1aaed8(0x43b)][_0x1aaed8(0x1cc)]);return this[_0x1aaed8(0x43c)]()&&_0x5585d5!==0x0?_0x1aaed8(0x595)[_0x1aaed8(0x3d6)](_0x5585d5,_0x4cf982):_0x4cf982;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2bc)]=function(_0x42d066){const _0x11a71f=_0x4fc126;return this[_0x11a71f(0x43c)]()&&(_0x42d066=this['processStoredAutoColorChanges'](_0x42d066),_0x42d066=this['processActorNameAutoColorChanges'](_0x42d066)),_0x42d066;},Window_Base[_0x4fc126(0x460)]['processStoredAutoColorChanges']=function(_0x245505){const _0x535833=_0x4fc126;for(autoColor of VisuMZ[_0x535833(0x1b8)][_0x535833(0x41e)]){_0x245505=_0x245505['replace'](autoColor[0x0],autoColor[0x1]);}return _0x245505;},Window_Base['prototype'][_0x4fc126(0x4de)]=function(){this['_autoColorActorNames']=[];},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x465)]=function(){const _0x5a982d=_0x4fc126;this[_0x5a982d(0x4de)]();const _0x134cef=VisuMZ[_0x5a982d(0x1b8)][_0x5a982d(0x248)][_0x5a982d(0x43b)],_0x299c2f=_0x134cef[_0x5a982d(0x1cc)];if(_0x299c2f<=0x0)return;for(const _0x4e58f9 of $gameActors['_data']){if(!_0x4e58f9)continue;const _0x405481=_0x4e58f9[_0x5a982d(0x2b3)]();if(_0x405481[_0x5a982d(0x20f)]()[_0x5a982d(0x324)]<=0x0)continue;if(/^\d+$/[_0x5a982d(0x3fb)](_0x405481))continue;if(_0x405481[_0x5a982d(0x2b4)](/-----/i))continue;let _0x4bf084=VisuMZ[_0x5a982d(0x1b8)][_0x5a982d(0x443)](_0x405481);const _0x3d62e5=new RegExp('\x5cb'+_0x4bf084+'\x5cb','g'),_0x452e4=_0x5a982d(0x595)[_0x5a982d(0x3d6)](_0x299c2f,_0x405481);this[_0x5a982d(0x4bd)][_0x5a982d(0x55c)]([_0x3d62e5,_0x452e4]);}},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2fa)]=function(_0xbad13){const _0x1ab643=_0x4fc126;this[_0x1ab643(0x4bd)]===undefined&&this['registerActorNameAutoColorChanges']();for(autoColor of this[_0x1ab643(0x4bd)]){_0xbad13=_0xbad13[_0x1ab643(0x33a)](autoColor[0x0],autoColor[0x1]);}return _0xbad13;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x205)]=function(_0x3f5a1c,_0x33ce49,_0x5120d8){const _0x4a93db=_0x4fc126;if(!_0x3f5a1c)return'';const _0x2af3b9=_0x3f5a1c[_0x33ce49];let _0x1255f3='';if(_0x2af3b9&&_0x5120d8&&_0x2af3b9[_0x4a93db(0x32d)]){const _0x10d152='\x1bi[%1]%2';_0x1255f3=_0x10d152[_0x4a93db(0x3d6)](_0x2af3b9[_0x4a93db(0x32d)],_0x2af3b9['name']);}else _0x2af3b9?_0x1255f3=_0x2af3b9[_0x4a93db(0x2b3)]:_0x1255f3='';return _0x1255f3=TextManager[_0x4a93db(0x2d6)](_0x1255f3),this['isAutoColorAffected']()&&(_0x1255f3=this[_0x4a93db(0x217)](_0x1255f3,_0x3f5a1c)),_0x1255f3;},Window_Base['prototype']['lastGainedObjectIcon']=function(){const _0x575750=_0x4fc126,_0x62adbf=$gameParty[_0x575750(0x56c)]();if(_0x62adbf['id']<0x0)return'';let _0x41d28b=null;if(_0x62adbf[_0x575750(0x35c)]===0x0)_0x41d28b=$dataItems[_0x62adbf['id']];if(_0x62adbf[_0x575750(0x35c)]===0x1)_0x41d28b=$dataWeapons[_0x62adbf['id']];if(_0x62adbf[_0x575750(0x35c)]===0x2)_0x41d28b=$dataArmors[_0x62adbf['id']];if(!_0x41d28b)return'';return'\x1bi[%1]'[_0x575750(0x3d6)](_0x41d28b[_0x575750(0x32d)]);},Window_Base['prototype'][_0x4fc126(0x4e0)]=function(_0x5097a8){const _0x582c38=_0x4fc126,_0x568169=$gameParty[_0x582c38(0x56c)]();if(_0x568169['id']<0x0)return'';let _0x363e43=null;if(_0x568169['type']===0x0)_0x363e43=$dataItems[_0x568169['id']];if(_0x568169[_0x582c38(0x35c)]===0x1)_0x363e43=$dataWeapons[_0x568169['id']];if(_0x568169['type']===0x2)_0x363e43=$dataArmors[_0x568169['id']];if(!_0x363e43)return'';let _0x289416=_0x363e43[_0x582c38(0x2b3)]||'';return TextManager[_0x582c38(0x236)]()&&(_0x289416=TextManager[_0x582c38(0x2d6)](_0x289416)),_0x5097a8?'\x1bi[%1]%2'[_0x582c38(0x3d6)](_0x363e43[_0x582c38(0x32d)],_0x289416):_0x289416;},Window_Base[_0x4fc126(0x460)]['lastGainedObjectQuantity']=function(){const _0x5c0569=_0x4fc126,_0x50da40=$gameParty[_0x5c0569(0x56c)]();if(_0x50da40['id']<=0x0)return'';return _0x50da40[_0x5c0569(0x2cc)];},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x217)]=function(_0x84a3aa,_0x11b4e9){const _0x1c200b=_0x4fc126,_0x3b5941=VisuMZ[_0x1c200b(0x1b8)][_0x1c200b(0x248)][_0x1c200b(0x43b)];let _0x121976=0x0;if(_0x11b4e9===$dataActors)_0x121976=_0x3b5941[_0x1c200b(0x1cc)];if(_0x11b4e9===$dataClasses)_0x121976=_0x3b5941['Classes'];if(_0x11b4e9===$dataSkills)_0x121976=_0x3b5941['Skills'];if(_0x11b4e9===$dataItems)_0x121976=_0x3b5941[_0x1c200b(0x29c)];if(_0x11b4e9===$dataWeapons)_0x121976=_0x3b5941[_0x1c200b(0x25b)];if(_0x11b4e9===$dataArmors)_0x121976=_0x3b5941[_0x1c200b(0x1bc)];if(_0x11b4e9===$dataEnemies)_0x121976=_0x3b5941['Enemies'];if(_0x11b4e9===$dataStates)_0x121976=_0x3b5941[_0x1c200b(0x369)];return _0x121976>0x0&&(_0x84a3aa=_0x1c200b(0x595)[_0x1c200b(0x3d6)](_0x121976,_0x84a3aa)),_0x84a3aa;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x388)]=function(_0x151bbd){const _0x350852=_0x4fc126;if(_0x151bbd['includes'](_0x350852(0x485)))return this['setWordWrap'](![]),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x151bbd=_0x151bbd['replace'](/<(?:WORDWRAP|WORD WRAP)>/gi,''),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x151bbd=_0x151bbd['replace'](/<\/(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x151bbd;_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x238d58,_0x42f657)=>this[_0x350852(0x498)](!![])),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x4ac1fb,_0x46943b)=>this['setWordWrap'](![])),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x31b8fe,_0x11f021)=>this[_0x350852(0x498)](![]));if(_0x151bbd[_0x350852(0x2b4)](Window_Message[_0x350852(0x43f)]))this[_0x350852(0x498)](![]);else _0x151bbd['match'](Window_Message[_0x350852(0x340)])&&this['setWordWrap'](![]);if(!this[_0x350852(0x2cb)]())return _0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x151bbd;if(_0x151bbd['length']<=0x0)return _0x151bbd;return _0x151bbd['match'](/[\u3040-\u30FF\u4E00-\u9FFF]/g)&&(_0x151bbd=VisuMZ[_0x350852(0x1b8)][_0x350852(0x2cf)](_0x151bbd)['join']('')),VisuMZ[_0x350852(0x1b8)][_0x350852(0x248)][_0x350852(0x3c8)][_0x350852(0x255)]?(_0x151bbd=_0x151bbd[_0x350852(0x33a)](/[\n\r]+/g,'\x20'),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):(_0x151bbd=_0x151bbd[_0x350852(0x33a)](/[\n\r]+/g,''),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:BR|LINEBREAK)>/gi,'\x0a')),_0x151bbd=this[_0x350852(0x224)](_0x151bbd),_0x151bbd=_0x151bbd['split']('\x20')[_0x350852(0x23d)](_0x350852(0x457)),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x151bbd=_0x151bbd[_0x350852(0x33a)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x151bbd;},VisuMZ[_0x4fc126(0x1b8)]['SplitJpCnCharacters']=function(_0x16f372){const _0x41c0c1=_0x4fc126;let _0x401a7c=[],_0x552fac='';while(_0x16f372['length']>0x0){const _0x2497c7=_0x16f372[_0x41c0c1(0x3ec)](0x0);_0x16f372=_0x16f372[_0x41c0c1(0x34b)](0x1),_0x2497c7['match'](/[\u3040-\u30FF\u4E00-\u9FFF]/g)?(_0x552fac[_0x41c0c1(0x324)]>0x0&&(_0x401a7c['push'](_0x552fac),_0x552fac=''),_0x401a7c['push'](_0x2497c7+_0x41c0c1(0x35a))):_0x552fac+=_0x2497c7;}return _0x552fac[_0x41c0c1(0x324)]>0x0&&(_0x401a7c[_0x41c0c1(0x55c)](_0x552fac),_0x552fac=''),_0x401a7c;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x224)]=function(_0x448a73){return _0x448a73;},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x52a)]=Window_Base[_0x4fc126(0x460)][_0x4fc126(0x33d)],Window_Base[_0x4fc126(0x460)]['processNewLine']=function(_0x2f5ee1){const _0xe54887=_0x4fc126;VisuMZ[_0xe54887(0x1b8)]['Window_Base_processNewLine']['call'](this,_0x2f5ee1),this[_0xe54887(0x4e9)](_0x2f5ee1);},Window_Base['prototype'][_0x4fc126(0x267)]=function(_0x180e39){const _0x113672=_0x4fc126;let _0x94987=_0x180e39['text'][_0x180e39[_0x113672(0x438)]++];if(_0x94987[_0x113672(0x365)](0x0)<0x20)this[_0x113672(0x285)](_0x180e39),this['processControlCharacter'](_0x180e39,_0x94987);else{if(this[_0x113672(0x2dc)]===0x1)_0x94987=_0x94987[_0x113672(0x432)]();if(this[_0x113672(0x2dc)]===0x2){if(this[_0x113672(0x2f3)])_0x94987=_0x94987[_0x113672(0x1c4)]();this[_0x113672(0x2f3)]=/\s/[_0x113672(0x3fb)](_0x94987);}if(this[_0x113672(0x2dc)]===0x3)_0x94987=_0x94987[_0x113672(0x1c4)]();this[_0x113672(0x2dc)]===0x4&&(_0x94987=this[_0x113672(0x390)]?_0x94987[_0x113672(0x1c4)]():_0x94987[_0x113672(0x432)](),this[_0x113672(0x390)]=!this[_0x113672(0x390)]),this['_textCasing']===0x5&&(_0x94987=Math['random']()<0.5?_0x94987[_0x113672(0x1c4)]():_0x94987[_0x113672(0x432)]()),_0x180e39[_0x113672(0x479)]+=_0x94987;}},VisuMZ['MessageCore'][_0x4fc126(0x1c7)]=Window_Base['prototype'][_0x4fc126(0x424)],Window_Base['prototype']['processControlCharacter']=function(_0x1cbe25,_0x54c239){const _0x10bb9d=_0x4fc126;VisuMZ[_0x10bb9d(0x1b8)][_0x10bb9d(0x1c7)]['call'](this,_0x1cbe25,_0x54c239);if(_0x54c239===_0x10bb9d(0x457))this[_0x10bb9d(0x26d)](_0x1cbe25);else _0x54c239===_0x10bb9d(0x35a)&&this[_0x10bb9d(0x26d)](_0x1cbe25,!![]);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x4cc)]=function(_0x1a4203){const _0x232663=_0x4fc126;var _0x14d107=/^\<(.*?)\>/[_0x232663(0x265)](_0x1a4203['text'][_0x232663(0x34b)](_0x1a4203[_0x232663(0x438)]));return _0x14d107?(_0x1a4203[_0x232663(0x438)]+=_0x14d107[0x0]['length'],String(_0x14d107[0x0]['slice'](0x1,_0x14d107[0x0][_0x232663(0x324)]-0x1))):'';},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x4c9)]=Window_Base[_0x4fc126(0x460)][_0x4fc126(0x353)],Window_Base['prototype'][_0x4fc126(0x353)]=function(_0xbc362d,_0x43aa89){const _0x7d6620=_0x4fc126;switch(_0xbc362d){case'C':_0x43aa89[_0x7d6620(0x29a)]?VisuMZ[_0x7d6620(0x1b8)]['Window_Base_processEscapeCharacter'][_0x7d6620(0x563)](this,_0xbc362d,_0x43aa89):this['obtainEscapeParam'](_0x43aa89);break;case'I':case'{':case'}':VisuMZ[_0x7d6620(0x1b8)][_0x7d6620(0x4c9)]['call'](this,_0xbc362d,_0x43aa89);break;case'FS':this[_0x7d6620(0x3f7)](_0x43aa89);break;case'PX':this[_0x7d6620(0x4f1)](_0x43aa89);break;case'PY':this[_0x7d6620(0x322)](_0x43aa89);break;case _0x7d6620(0x200):this[_0x7d6620(0x2a7)](this['obtainEscapeParam'](_0x43aa89));break;case _0x7d6620(0x32f):this[_0x7d6620(0x1b1)](_0x43aa89);break;case _0x7d6620(0x203):this['processDrawCenteredPicture'](_0x43aa89);break;case'COLORLOCK':this['processColorLock'](_0x43aa89);break;case _0x7d6620(0x36a):this[_0x7d6620(0x43a)](_0x43aa89);break;case _0x7d6620(0x422):this[_0x7d6620(0x578)](this[_0x7d6620(0x451)](_0x43aa89));break;case _0x7d6620(0x455):this[_0x7d6620(0x537)](_0x43aa89);break;case'PREVCOLOR':this['processPreviousColor'](_0x43aa89);break;case _0x7d6620(0x2f4):this['processTextAlignmentChange'](_0x43aa89);break;case'WAIT':this[_0x7d6620(0x2c4)](_0x43aa89);break;case'WRAPBREAK':this[_0x7d6620(0x26d)](_0x43aa89);break;case _0x7d6620(0x1f8):this[_0x7d6620(0x26d)](_0x43aa89,!![]);break;default:this[_0x7d6620(0x2f5)](_0xbc362d,_0x43aa89);}},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2f5)]=function(_0x175405,_0x1043f3){const _0x440d30=_0x4fc126;for(const _0x5c609a of VisuMZ[_0x440d30(0x1b8)]['Settings'][_0x440d30(0x528)]){if(_0x5c609a[_0x440d30(0x29b)]===_0x175405){if(_0x5c609a[_0x440d30(0x57c)]==='')this[_0x440d30(0x451)](_0x1043f3);_0x5c609a[_0x440d30(0x53a)][_0x440d30(0x563)](this,_0x1043f3);if(this[_0x440d30(0x49e)]===Window_Message){const _0x374e88=_0x5c609a['CommonEvent']||0x0;if(_0x374e88>0x0)this['launchMessageCommonEvent'](_0x374e88);}}}},Window_Base['prototype'][_0x4fc126(0x593)]=function(){const _0x4ba61d=_0x4fc126;this['contents'][_0x4ba61d(0x2ea)]+=VisuMZ['MessageCore'][_0x4ba61d(0x248)][_0x4ba61d(0x1fe)][_0x4ba61d(0x1da)],this[_0x4ba61d(0x1d3)][_0x4ba61d(0x2ea)]=Math[_0x4ba61d(0x44e)](this[_0x4ba61d(0x1d3)]['fontSize'],VisuMZ[_0x4ba61d(0x1b8)][_0x4ba61d(0x248)][_0x4ba61d(0x1fe)][_0x4ba61d(0x41a)]);},Window_Base['prototype']['makeFontSmaller']=function(){const _0x19affe=_0x4fc126;this[_0x19affe(0x1d3)][_0x19affe(0x2ea)]-=VisuMZ[_0x19affe(0x1b8)]['Settings'][_0x19affe(0x1fe)][_0x19affe(0x1da)],this[_0x19affe(0x1d3)]['fontSize']=Math[_0x19affe(0x447)](this[_0x19affe(0x1d3)][_0x19affe(0x2ea)],VisuMZ[_0x19affe(0x1b8)][_0x19affe(0x248)][_0x19affe(0x1fe)]['FontSmallerCap']);},Window_Base['prototype'][_0x4fc126(0x3f7)]=function(_0x1ad661){const _0x447d09=_0x4fc126,_0x48e59b=this['obtainEscapeParam'](_0x1ad661);this[_0x447d09(0x1d3)]['fontSize']=_0x48e59b[_0x447d09(0x415)](VisuMZ[_0x447d09(0x1b8)][_0x447d09(0x248)][_0x447d09(0x1fe)][_0x447d09(0x514)],VisuMZ[_0x447d09(0x1b8)][_0x447d09(0x248)][_0x447d09(0x1fe)][_0x447d09(0x41a)]);},Window_Base[_0x4fc126(0x460)]['maxFontSizeInLine']=function(_0x4dad2c){const _0x1b16c2=_0x4fc126;let _0x83b298=this['contents']['fontSize'];const _0x43ece9=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x55e96b=_0x43ece9[_0x1b16c2(0x265)](_0x4dad2c);if(!_0x55e96b)break;const _0x2d7cf5=String(_0x55e96b[0x1])[_0x1b16c2(0x1c4)]();if(_0x2d7cf5==='{')this[_0x1b16c2(0x593)]();else{if(_0x2d7cf5==='}')this['makeFontSmaller']();else _0x2d7cf5==='FS'&&(this['contents'][_0x1b16c2(0x2ea)]=parseInt(_0x55e96b[0x3])[_0x1b16c2(0x415)](VisuMZ[_0x1b16c2(0x1b8)][_0x1b16c2(0x248)]['General']['FontSmallerCap'],VisuMZ[_0x1b16c2(0x1b8)][_0x1b16c2(0x248)]['General'][_0x1b16c2(0x41a)]));}this[_0x1b16c2(0x1d3)]['fontSize']>_0x83b298&&(_0x83b298=this[_0x1b16c2(0x1d3)][_0x1b16c2(0x2ea)]);}return _0x83b298;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x4f1)]=function(_0x1a424a){const _0x3222f4=_0x4fc126;_0x1a424a['x']=this['obtainEscapeParam'](_0x1a424a),VisuMZ['MessageCore'][_0x3222f4(0x248)]['General'][_0x3222f4(0x2f2)]&&(_0x1a424a['x']+=_0x1a424a[_0x3222f4(0x1ed)]);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x322)]=function(_0x30d966){const _0x10fd12=_0x4fc126;_0x30d966['y']=this['obtainEscapeParam'](_0x30d966),VisuMZ['MessageCore']['Settings'][_0x10fd12(0x1fe)][_0x10fd12(0x2f2)]&&(_0x30d966['y']+=_0x30d966['startY']);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2a7)]=function(_0xe8b27e){const _0x49f7cb=_0x4fc126;this[_0x49f7cb(0x1d3)][_0x49f7cb(0x386)]=!!_0xe8b27e;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x578)]=function(_0x201264){const _0x47cb9c=_0x4fc126;this['contents'][_0x47cb9c(0x352)]=!!_0x201264;},Window_Base[_0x4fc126(0x460)]['processTextAlignmentChange']=function(_0x238405){const _0x55d003=_0x4fc126,_0x21d539=this[_0x55d003(0x451)](_0x238405);if(!_0x238405[_0x55d003(0x29a)])return;switch(_0x21d539){case 0x0:this[_0x55d003(0x348)](_0x55d003(0x444));return;case 0x1:this[_0x55d003(0x348)](_0x55d003(0x4ee));break;case 0x2:this[_0x55d003(0x348)]('center');break;case 0x3:this[_0x55d003(0x348)](_0x55d003(0x1e2));break;}this[_0x55d003(0x4e9)](_0x238405);},Window_Base[_0x4fc126(0x460)]['processTextAlignmentX']=function(_0x215558){const _0x5d99fe=_0x4fc126;if(!_0x215558[_0x5d99fe(0x29a)])return;if(_0x215558[_0x5d99fe(0x4c6)])return;if(this['getTextAlignment']()===_0x5d99fe(0x444))return;let _0x4f3415=_0x215558[_0x5d99fe(0x2f8)][_0x5d99fe(0x512)](_0x5d99fe(0x485),_0x215558['index']+0x1),_0x29d9a7=_0x215558['text']['indexOf']('\x0a',_0x215558[_0x5d99fe(0x438)]+0x1);if(_0x4f3415<0x0)_0x4f3415=_0x215558[_0x5d99fe(0x2f8)]['length']+0x1;if(_0x29d9a7>0x0)_0x4f3415=Math[_0x5d99fe(0x44e)](_0x4f3415,_0x29d9a7);const _0x5ab762=_0x215558[_0x5d99fe(0x2f8)]['substring'](_0x215558[_0x5d99fe(0x438)],_0x4f3415),_0x2acfd8=this[_0x5d99fe(0x2e0)](_0x5ab762)['width'],_0x5d983b=_0x215558['width']||this[_0x5d99fe(0x23c)]-0x8,_0x53f65a=this['constructor']===Window_Message&&$gameMessage[_0x5d99fe(0x371)]()!=='';switch(this['getTextAlignment']()){case'left':_0x215558['x']=_0x215558[_0x5d99fe(0x1ed)];break;case _0x5d99fe(0x1bb):_0x215558['x']=_0x215558[_0x5d99fe(0x1ed)],_0x215558['x']+=Math[_0x5d99fe(0x42d)]((_0x5d983b-_0x2acfd8)/0x2);_0x53f65a&&(_0x215558['x']-=_0x215558['startX']/0x2);break;case _0x5d99fe(0x1e2):_0x215558['x']=_0x5d983b-_0x2acfd8+_0x215558[_0x5d99fe(0x1ed)];_0x53f65a&&(_0x215558['x']-=_0x215558[_0x5d99fe(0x1ed)]);break;}},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2e0)]=function(_0x59a094){const _0x408f4d=_0x4fc126;_0x59a094=_0x59a094[_0x408f4d(0x33a)](/\x1b!/g,''),_0x59a094=_0x59a094[_0x408f4d(0x33a)](/\x1b\|/g,''),_0x59a094=_0x59a094[_0x408f4d(0x33a)](/\x1b\./g,'');const _0x55172d=this['createTextState'](_0x59a094,0x0,0x0,0x0),_0x20b292=this[_0x408f4d(0x40f)]();return _0x55172d['drawing']=![],this[_0x408f4d(0x25d)](_0x55172d),this['returnPreservedFontSettings'](_0x20b292),{'width':_0x55172d['outputWidth'],'height':_0x55172d[_0x408f4d(0x4db)]};},Window_Base[_0x4fc126(0x580)]=VisuMZ[_0x4fc126(0x1b8)]['Settings'][_0x4fc126(0x3c8)]['EndPadding']||0x0,Window_Base['prototype'][_0x4fc126(0x26d)]=function(_0xa5d3dc,_0x56b472){const _0x456aea=_0x4fc126,_0x1c1d23=(_0xa5d3dc[_0x456aea(0x4c6)]?-0x1:0x1)*this['textWidth']('\x20');if(!_0x56b472)_0xa5d3dc['x']+=_0x1c1d23;if(this['obtainEscapeParam'](_0xa5d3dc)>0x0&&!_0x56b472)_0xa5d3dc['x']+=_0x1c1d23;if(_0xa5d3dc[_0x456aea(0x4c6)])return;let _0x182e51;_0x56b472?_0x182e51=_0xa5d3dc[_0x456aea(0x2f8)][_0x456aea(0x512)](_0x456aea(0x35a),_0xa5d3dc[_0x456aea(0x438)]+0x1):_0x182e51=_0xa5d3dc['text']['indexOf'](_0x456aea(0x457),_0xa5d3dc[_0x456aea(0x438)]+0x1);let _0x4b220e=_0xa5d3dc[_0x456aea(0x2f8)][_0x456aea(0x512)]('\x0a',_0xa5d3dc[_0x456aea(0x438)]+0x1);if(_0x182e51<0x0)_0x182e51=_0xa5d3dc[_0x456aea(0x2f8)][_0x456aea(0x324)]+0x1;if(_0x4b220e>0x0)_0x182e51=Math[_0x456aea(0x44e)](_0x182e51,_0x4b220e);const _0x44ccf6=_0xa5d3dc[_0x456aea(0x2f8)][_0x456aea(0x3f3)](_0xa5d3dc[_0x456aea(0x438)],_0x182e51),_0x34aa8c=this['textSizeExWordWrap'](_0x44ccf6)[_0x456aea(0x2e6)];let _0x8907a0=_0xa5d3dc[_0x456aea(0x2e6)]||this['innerWidth'];_0x8907a0-=Window_Base['WORD_WRAP_PADDING'];if(this['constructor']===Window_Message){const _0x55395c=$gameMessage[_0x456aea(0x371)]()===''?0x0:ImageManager['faceWidth']+0x14;_0x8907a0-=_0x55395c,VisuMZ['MessageCore'][_0x456aea(0x248)][_0x456aea(0x3c8)][_0x456aea(0x335)]&&(_0x8907a0-=_0x55395c);}let _0x589127=![];_0xa5d3dc['x']+_0x34aa8c>_0xa5d3dc[_0x456aea(0x1ed)]+_0x8907a0&&(_0x589127=!![]),_0x34aa8c===0x0&&(_0x589127=![]),_0x589127&&(_0xa5d3dc['text']=_0xa5d3dc[_0x456aea(0x2f8)][_0x456aea(0x34b)](0x0,_0xa5d3dc[_0x456aea(0x438)])+'\x0a'+_0xa5d3dc[_0x456aea(0x2f8)][_0x456aea(0x2ff)](_0xa5d3dc[_0x456aea(0x438)]));},Window_Base[_0x4fc126(0x460)]['textSizeExWordWrap']=function(_0x4d6f71){const _0x3c24f0=_0x4fc126,_0x38b40c=this[_0x3c24f0(0x4fd)](_0x4d6f71,0x0,0x0,0x0),_0x200859=this[_0x3c24f0(0x40f)]();return _0x38b40c['drawing']=![],this[_0x3c24f0(0x498)](![]),this[_0x3c24f0(0x25d)](_0x38b40c),this['setWordWrap'](!![]),this[_0x3c24f0(0x22e)](_0x200859),{'width':_0x38b40c[_0x3c24f0(0x4d9)],'height':_0x38b40c[_0x3c24f0(0x4db)]};},Window_Base['prototype'][_0x4fc126(0x43a)]=function(_0x51e435){const _0x46b93e=_0x4fc126;return this[_0x46b93e(0x451)](_0x51e435);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x537)]=function(_0x312335){const _0x528b67=_0x4fc126,_0x3e5737=this[_0x528b67(0x4cc)](_0x312335)['split'](',');if(!_0x312335[_0x528b67(0x29a)])return;const _0x3fa53f=_0x3e5737[0x0]['trim'](),_0x3922e5=_0x3e5737[0x1]||0x0,_0x190516=_0x3e5737[0x2]||0x0,_0x5a9042=ImageManager[_0x528b67(0x1f3)](_0x3fa53f),_0x14f8dd=this[_0x528b67(0x1d3)][_0x528b67(0x32c)];_0x5a9042[_0x528b67(0x202)](this['drawBackPicture'][_0x528b67(0x56a)](this,_0x5a9042,_0x312335['x'],_0x312335['y'],_0x3922e5,_0x190516,_0x14f8dd));},Window_Base['prototype']['drawBackPicture']=function(_0x2671b3,_0x3eee41,_0x386a13,_0x56061d,_0x181391,_0x49b529){const _0x1d4ed0=_0x4fc126;_0x56061d=_0x56061d||_0x2671b3[_0x1d4ed0(0x2e6)],_0x181391=_0x181391||_0x2671b3['height'],this[_0x1d4ed0(0x4f0)][_0x1d4ed0(0x32c)]=_0x49b529,this[_0x1d4ed0(0x4f0)][_0x1d4ed0(0x35d)](_0x2671b3,0x0,0x0,_0x2671b3[_0x1d4ed0(0x2e6)],_0x2671b3['height'],_0x3eee41,_0x386a13,_0x56061d,_0x181391),this[_0x1d4ed0(0x4f0)][_0x1d4ed0(0x32c)]=0xff;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x582)]=function(_0xb21e2d){const _0x5d9533=_0x4fc126,_0x4ab7b5=this[_0x5d9533(0x4cc)](_0xb21e2d)['split'](',');if(!_0xb21e2d[_0x5d9533(0x29a)])return;const _0x1667e0=_0x4ab7b5[0x0][_0x5d9533(0x20f)](),_0x3dbddb=ImageManager['loadPicture'](_0x1667e0),_0x3f516d=JsonEx[_0x5d9533(0x2db)](_0xb21e2d),_0x5757fd=this[_0x5d9533(0x1d3)][_0x5d9533(0x32c)];_0x3dbddb[_0x5d9533(0x202)](this[_0x5d9533(0x566)][_0x5d9533(0x56a)](this,_0x3dbddb,_0x3f516d,_0x5757fd));},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x566)]=function(_0x3d1fbc,_0x131d79,_0x502f9d){const _0x3da696=_0x4fc126,_0x191a24=_0x131d79[_0x3da696(0x2e6)]||this[_0x3da696(0x23c)],_0x47089f=this[_0x3da696(0x4c4)]!==undefined?this[_0x3da696(0x4b0)]():this[_0x3da696(0x4a2)],_0x32f115=_0x191a24/_0x3d1fbc[_0x3da696(0x2e6)],_0x586da2=_0x47089f/_0x3d1fbc[_0x3da696(0x34a)],_0x2d3e9a=Math['min'](_0x32f115,_0x586da2,0x1),_0xf8dbc6=this[_0x3da696(0x4c4)]!==undefined?(this['itemRectWithPadding'](0x0)['height']-this['lineHeight']())/0x2:0x0,_0x1e9420=_0x3d1fbc[_0x3da696(0x2e6)]*_0x2d3e9a,_0x318e74=_0x3d1fbc[_0x3da696(0x34a)]*_0x2d3e9a,_0x284a9b=Math[_0x3da696(0x42d)]((_0x191a24-_0x1e9420)/0x2)+_0x131d79['startX'],_0x523521=Math[_0x3da696(0x42d)]((_0x47089f-_0x318e74)/0x2)+_0x131d79[_0x3da696(0x497)]-_0xf8dbc6*0x2;this['contentsBack']['paintOpacity']=_0x502f9d,this[_0x3da696(0x4f0)][_0x3da696(0x35d)](_0x3d1fbc,0x0,0x0,_0x3d1fbc[_0x3da696(0x2e6)],_0x3d1fbc['height'],_0x284a9b,_0x523521,_0x1e9420,_0x318e74),this['contentsBack'][_0x3da696(0x32c)]=0xff;},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x25c)]=function(_0x12f74b){const _0x1bfe0c=_0x4fc126,_0x5a597e=this[_0x1bfe0c(0x451)](_0x12f74b);if(_0x12f74b[_0x1bfe0c(0x29a)])this[_0x1bfe0c(0x3da)](_0x5a597e>0x0);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x2c4)]=function(_0x1338f8){const _0x338c59=_0x4fc126,_0x4e4c53=this['obtainEscapeParam'](_0x1338f8);this[_0x338c59(0x49e)]===Window_Message&&_0x1338f8[_0x338c59(0x29a)]&&this['startWait'](_0x4e4c53);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x1b1)]=function(_0x4344e9){const _0x372147=_0x4fc126;this[_0x372147(0x2dc)]=this[_0x372147(0x451)](_0x4344e9),this[_0x372147(0x2f3)]=!![],this[_0x372147(0x390)]=!![];},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x2c0)]=function(_0x2ef9b3){const _0x10ad7c=_0x4fc126;if($gameTemp[_0x10ad7c(0x46b)]()){let _0x5c3e5a=_0x10ad7c(0x400)['format'](_0x2ef9b3['constructor'][_0x10ad7c(0x2b3)]);alert(_0x5c3e5a),SceneManager[_0x10ad7c(0x3f9)]();}},Window_Base['prototype']['loadMessageFace']=function(){const _0xf35a87=_0x4fc126;VisuMZ[_0xf35a87(0x1b8)]['NonSupportedTextCodes'](this);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x30a)]=function(){const _0x399b0d=_0x4fc126;VisuMZ['MessageCore'][_0x399b0d(0x2c0)](this);},Window_Base[_0x4fc126(0x460)][_0x4fc126(0x37b)]=function(){const _0x1f66e8=_0x4fc126;VisuMZ[_0x1f66e8(0x1b8)][_0x1f66e8(0x2c0)](this);},Window_Help['prototype'][_0x4fc126(0x1be)]=function(){this['setWordWrap']($gameSystem['isHelpWindowWordWrap']());},Window_Help[_0x4fc126(0x460)][_0x4fc126(0x43c)]=function(){return!![];},VisuMZ['MessageCore'][_0x4fc126(0x3af)]=Window_Help[_0x4fc126(0x460)][_0x4fc126(0x538)],Window_Help[_0x4fc126(0x460)]['refresh']=function(){const _0x408753=_0x4fc126;this[_0x408753(0x4de)]();if(this[_0x408753(0x4f0)])this[_0x408753(0x4f0)]['clear']();VisuMZ['MessageCore'][_0x408753(0x3af)]['call'](this),this[_0x408753(0x1be)]();},VisuMZ[_0x4fc126(0x1b8)]['Window_Options_addGeneralOptions']=Window_Options['prototype'][_0x4fc126(0x37f)],Window_Options['prototype']['addGeneralOptions']=function(){const _0x2ea9b0=_0x4fc126;VisuMZ[_0x2ea9b0(0x1b8)][_0x2ea9b0(0x3e0)][_0x2ea9b0(0x563)](this),this[_0x2ea9b0(0x599)]();},Window_Options[_0x4fc126(0x460)][_0x4fc126(0x599)]=function(){const _0xfc800=_0x4fc126;VisuMZ['MessageCore'][_0xfc800(0x248)][_0xfc800(0x257)][_0xfc800(0x4a4)]&&TextManager[_0xfc800(0x236)]()&&this['addMessageCoreLocalizationCommand'](),VisuMZ[_0xfc800(0x1b8)][_0xfc800(0x248)][_0xfc800(0x50c)]['AddOption']&&this[_0xfc800(0x234)]();},Window_Options['prototype']['addMessageCoreLocalizationCommand']=function(){const _0x5046d6=_0x4fc126,_0x125c43=TextManager['messageCoreLocalization'],_0x831a5f=_0x5046d6(0x4d5);this[_0x5046d6(0x370)](_0x125c43,_0x831a5f);},Window_Options[_0x4fc126(0x460)]['addMessageCoreTextSpeedCommand']=function(){const _0x4dca1e=_0x4fc126,_0xc76942=TextManager[_0x4dca1e(0x52e)],_0x5a5b2f=_0x4dca1e(0x4c3);this[_0x4dca1e(0x370)](_0xc76942,_0x5a5b2f);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x2a1)]=Window_Options[_0x4fc126(0x460)][_0x4fc126(0x2b1)],Window_Options[_0x4fc126(0x460)]['statusText']=function(_0x358802){const _0x55be23=_0x4fc126,_0x5682f4=this['commandSymbol'](_0x358802);if(_0x5682f4===_0x55be23(0x4d5))return this['visuMzTextLocaleStatusText']();if(_0x5682f4===_0x55be23(0x4c3))return this['textSpeedStatusText']();return VisuMZ['MessageCore'][_0x55be23(0x2a1)]['call'](this,_0x358802);},Window_Options[_0x4fc126(0x460)][_0x4fc126(0x3ef)]=function(){const _0x5e7d4c=_0x4fc126,_0x4be61a=ConfigManager[_0x5e7d4c(0x4d5)];return TextManager[_0x5e7d4c(0x54f)](_0x4be61a);},Window_Options[_0x4fc126(0x460)][_0x4fc126(0x502)]=function(){const _0x37944e=_0x4fc126,_0x429901=this[_0x37944e(0x556)](_0x37944e(0x4c3));return _0x429901>0xa?TextManager[_0x37944e(0x213)]:_0x429901;},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x310)]=Window_Options['prototype'][_0x4fc126(0x36b)],Window_Options[_0x4fc126(0x460)][_0x4fc126(0x36b)]=function(_0x5668bf){const _0x2bebbf=_0x4fc126;if(_0x5668bf===_0x2bebbf(0x4d5))return!![];if(_0x5668bf===_0x2bebbf(0x4c3))return!![];return VisuMZ[_0x2bebbf(0x1b8)][_0x2bebbf(0x310)][_0x2bebbf(0x563)](this,_0x5668bf);},VisuMZ['MessageCore'][_0x4fc126(0x3c4)]=Window_Options[_0x4fc126(0x460)][_0x4fc126(0x35f)],Window_Options[_0x4fc126(0x460)]['changeVolume']=function(_0x29e740,_0x583cfb,_0x3bcda4){const _0x429c5a=_0x4fc126;if(_0x29e740===_0x429c5a(0x4d5))return this[_0x429c5a(0x2f6)](_0x583cfb,_0x3bcda4);if(_0x29e740==='textSpeed')return this[_0x429c5a(0x2c9)](_0x29e740,_0x583cfb,_0x3bcda4);VisuMZ[_0x429c5a(0x1b8)][_0x429c5a(0x3c4)][_0x429c5a(0x563)](this,_0x29e740,_0x583cfb,_0x3bcda4);},Window_Options['prototype'][_0x4fc126(0x2f6)]=function(_0x167d79,_0x4fcfe0){const _0x49a9a7=_0x4fc126,_0x560c83=VisuMZ[_0x49a9a7(0x1b8)][_0x49a9a7(0x248)][_0x49a9a7(0x257)][_0x49a9a7(0x3fd)]||[],_0x4f709c=ConfigManager['textLocale'];let _0xc94753=_0x560c83[_0x49a9a7(0x512)](_0x4f709c);_0xc94753+=_0x167d79?0x1:-0x1;if(_0xc94753>=_0x560c83[_0x49a9a7(0x324)])_0xc94753=_0x4fcfe0?0x0:_0x560c83[_0x49a9a7(0x324)]-0x1;if(_0xc94753<0x0)_0xc94753=_0x4fcfe0?_0x560c83[_0x49a9a7(0x324)]-0x1:0x0;this[_0x49a9a7(0x1df)]('textLocale',_0x560c83[_0xc94753]);},Window_Options[_0x4fc126(0x460)][_0x4fc126(0x2c9)]=function(_0x1b02f9,_0x283645,_0x2e519d){const _0x5d52fe=_0x4fc126,_0x3cf218=this[_0x5d52fe(0x556)](_0x1b02f9),_0x50e9a3=0x1,_0x3de2a6=_0x3cf218+(_0x283645?_0x50e9a3:-_0x50e9a3);_0x3de2a6>0xb&&_0x2e519d?this[_0x5d52fe(0x1df)](_0x1b02f9,0x1):this[_0x5d52fe(0x1df)](_0x1b02f9,_0x3de2a6[_0x5d52fe(0x415)](0x1,0xb));},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x4c8)]=function(){const _0x20faaf=_0x4fc126;let _0x186c12=Window_Base[_0x20faaf(0x460)][_0x20faaf(0x4c8)][_0x20faaf(0x563)](this);return _0x186c12-=this[_0x20faaf(0x54c)](),_0x186c12;},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x2d0)]=function(){const _0x4b9e9e=_0x4fc126;Window_Base['prototype'][_0x4b9e9e(0x2d0)][_0x4b9e9e(0x563)](this),VisuMZ[_0x4b9e9e(0x1b8)][_0x4b9e9e(0x248)][_0x4b9e9e(0x1fe)][_0x4b9e9e(0x258)]&&this[_0x4b9e9e(0x357)]();},Window_Message['prototype'][_0x4fc126(0x357)]=function(){const _0x31461c=_0x4fc126;this[_0x31461c(0x57f)]['x']=Math[_0x31461c(0x43e)](this[_0x31461c(0x2e6)]/0x2),this[_0x31461c(0x57f)][_0x31461c(0x45a)]['x']=0.5,this[_0x31461c(0x57f)][_0x31461c(0x245)]['x']=Graphics[_0x31461c(0x2e6)];},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x242)]=Window_Message[_0x4fc126(0x460)][_0x4fc126(0x373)],Window_Message[_0x4fc126(0x460)][_0x4fc126(0x373)]=function(){const _0x3379cd=_0x4fc126;VisuMZ[_0x3379cd(0x1b8)][_0x3379cd(0x242)][_0x3379cd(0x563)](this),this[_0x3379cd(0x4de)](),this[_0x3379cd(0x1be)](),this[_0x3379cd(0x3da)](![]),this['setTextAlignment']('default'),this[_0x3379cd(0x37b)](VisuMZ[_0x3379cd(0x1b8)][_0x3379cd(0x248)][_0x3379cd(0x1fe)][_0x3379cd(0x461)]);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x1be)]=function(){const _0x12746a=_0x4fc126;this[_0x12746a(0x498)]($gameSystem[_0x12746a(0x3f8)]());},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x43c)]=function(){return!![];},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x37b)]=function(_0x2aa363){const _0x691bfa=_0x4fc126,_0x4d7a84=0xb-ConfigManager['textSpeed'];_0x2aa363=Math[_0x691bfa(0x43e)](_0x2aa363*_0x4d7a84),this[_0x691bfa(0x430)]=_0x2aa363,this[_0x691bfa(0x20b)]=_0x2aa363;},VisuMZ['MessageCore']['Window_Message_isTriggered']=Window_Message[_0x4fc126(0x460)][_0x4fc126(0x4f6)],Window_Message[_0x4fc126(0x460)]['isTriggered']=function(){const _0x18833c=_0x4fc126;return VisuMZ[_0x18833c(0x1b8)][_0x18833c(0x3f2)][_0x18833c(0x563)](this)||Input[_0x18833c(0x47b)](VisuMZ[_0x18833c(0x1b8)][_0x18833c(0x248)][_0x18833c(0x1fe)]['FastForwardKey']);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x1d6)]=Window_Message[_0x4fc126(0x460)]['updatePlacement'],Window_Message[_0x4fc126(0x460)]['updatePlacement']=function(){const _0x4be229=_0x4fc126;let _0x2f7e59=this['y'];this['x']=Math[_0x4be229(0x43e)]((Graphics[_0x4be229(0x1b0)]-this[_0x4be229(0x2e6)])/0x2),VisuMZ[_0x4be229(0x1b8)][_0x4be229(0x1d6)][_0x4be229(0x563)](this);if(this['_autoPositionTarget'])this['y']=_0x2f7e59;this[_0x4be229(0x21d)](),this['updateForcedPlacement'](),this[_0x4be229(0x3a3)](),this[_0x4be229(0x2a5)]();},VisuMZ[_0x4fc126(0x1b8)]['Window_Message_newPage']=Window_Message[_0x4fc126(0x460)][_0x4fc126(0x216)],Window_Message[_0x4fc126(0x460)][_0x4fc126(0x216)]=function(_0x2d564a){const _0x3835e1=_0x4fc126;this[_0x3835e1(0x384)](_0x2d564a),this[_0x3835e1(0x495)](_0x2d564a),VisuMZ[_0x3835e1(0x1b8)][_0x3835e1(0x506)][_0x3835e1(0x563)](this,_0x2d564a),this['createContents']();},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x384)]=function(_0x5d3892){const _0x2aa56a=_0x4fc126;if(!_0x5d3892)return;this[_0x2aa56a(0x2a0)]=![],_0x5d3892['text']=this[_0x2aa56a(0x24a)](_0x5d3892[_0x2aa56a(0x2f8)]),this[_0x2aa56a(0x56f)]&&(_0x5d3892[_0x2aa56a(0x2f8)]=this[_0x2aa56a(0x388)](_0x5d3892[_0x2aa56a(0x2f8)]),this[_0x2aa56a(0x2a0)]=!![]);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x388)]=function(_0x2f932a){const _0x4cdcaa=_0x4fc126;if(this[_0x4cdcaa(0x2a0)])return _0x2f932a;return Window_Base['prototype'][_0x4cdcaa(0x388)]['call'](this,_0x2f932a);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x495)]=function(_0xf697a5){const _0x34d0e0=_0x4fc126;this[_0x34d0e0(0x333)](_0xf697a5),this[_0x34d0e0(0x47a)](_0xf697a5),this[_0x34d0e0(0x306)]();},VisuMZ[_0x4fc126(0x1b8)]['Window_Message_terminateMessage']=Window_Message[_0x4fc126(0x460)][_0x4fc126(0x3a8)],Window_Message['prototype'][_0x4fc126(0x3a8)]=function(){const _0x3c10c4=_0x4fc126;VisuMZ[_0x3c10c4(0x1b8)][_0x3c10c4(0x24f)][_0x3c10c4(0x563)](this),this[_0x3c10c4(0x373)]();if(this[_0x3c10c4(0x240)])this['messagePositionReset']();},Window_Message[_0x4fc126(0x460)]['updateDimensions']=function(){const _0x590d58=_0x4fc126;this[_0x590d58(0x2e6)]=$gameSystem[_0x590d58(0x339)]()+this[_0x590d58(0x50f)]();;this[_0x590d58(0x2e6)]=Math['min'](Graphics[_0x590d58(0x2e6)],this[_0x590d58(0x2e6)]);const _0x330200=$gameSystem[_0x590d58(0x44b)]();this[_0x590d58(0x34a)]=SceneManager['_scene'][_0x590d58(0x463)](_0x330200,![])+this['addedHeight'](),this[_0x590d58(0x34a)]=Math[_0x590d58(0x44e)](Graphics[_0x590d58(0x34a)],this[_0x590d58(0x34a)]);if($gameTemp[_0x590d58(0x409)])this[_0x590d58(0x405)]();},Window_Message[_0x4fc126(0x460)]['addedWidth']=function(){return 0x0;},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x54c)]=function(){return 0x0;},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x405)]=function(){const _0x577bc2=_0x4fc126;this['x']=(Graphics[_0x577bc2(0x1b0)]-this['width'])/0x2,$gameTemp[_0x577bc2(0x409)]=undefined,this[_0x577bc2(0x3a3)]();},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x567)]=function(){const _0x171c4d=_0x4fc126,_0x34e9a1={'x':this['x'],'y':this['y']};Window_Base[_0x171c4d(0x460)][_0x171c4d(0x567)][_0x171c4d(0x563)](this),this[_0x171c4d(0x38c)](_0x34e9a1);},Window_Message[_0x4fc126(0x460)]['canMove']=function(){return!![];},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x38c)]=function(_0x5ab965){const _0x4c51fe=_0x4fc126;this[_0x4c51fe(0x329)]&&(this[_0x4c51fe(0x329)]['x']+=this['x']-_0x5ab965['x'],this[_0x4c51fe(0x329)]['y']+=this['y']-_0x5ab965['y']);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x49b)]=function(_0x4a2739,_0x2b6aa2){const _0x5df5b8=_0x4fc126;this[_0x5df5b8(0x425)](this['_resetRect']['x'],this[_0x5df5b8(0x319)]*(Graphics[_0x5df5b8(0x2d1)]-this[_0x5df5b8(0x34a)])/0x2,this[_0x5df5b8(0x2c2)][_0x5df5b8(0x2e6)],this[_0x5df5b8(0x2c2)][_0x5df5b8(0x34a)],_0x4a2739,_0x2b6aa2);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x43a)]=function(_0x12892d){const _0x2f4ef4=_0x4fc126,_0xfc35ac=Window_Base[_0x2f4ef4(0x460)]['processCommonEvent']['call'](this,_0x12892d);_0x12892d[_0x2f4ef4(0x29a)]&&this[_0x2f4ef4(0x44f)](_0xfc35ac);},Window_Message['prototype'][_0x4fc126(0x44f)]=function(_0x1c851a){const _0x6209dc=_0x4fc126;if($gameParty['inBattle']()){}else $gameMap[_0x6209dc(0x1ea)](_0x1c851a);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x267)]=function(_0x141baa){const _0x1c8af0=_0x4fc126;this[_0x1c8af0(0x430)]--,this['_textDelayCount']<=0x0&&(this[_0x1c8af0(0x279)](_0x141baa),Window_Base[_0x1c8af0(0x460)]['processCharacter']['call'](this,_0x141baa));},Window_Message[_0x4fc126(0x460)]['onProcessCharacter']=function(_0x1e83d9){const _0x4c8ccf=_0x4fc126;this['_textDelayCount']=this[_0x4c8ccf(0x20b)];if(this['_textDelay']<=0x0)this[_0x4c8ccf(0x46c)]=!![];},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x238)]=Window_Message[_0x4fc126(0x460)][_0x4fc126(0x353)],Window_Message[_0x4fc126(0x460)][_0x4fc126(0x353)]=function(_0x389e3d,_0x19aa87){const _0xc48f7c=_0x4fc126;!_0x19aa87[_0xc48f7c(0x29a)]?Window_Base[_0xc48f7c(0x460)]['processEscapeCharacter'][_0xc48f7c(0x563)](this,_0x389e3d,_0x19aa87):VisuMZ[_0xc48f7c(0x1b8)]['Window_Message_processEscapeCharacter'][_0xc48f7c(0x563)](this,_0x389e3d,_0x19aa87);},VisuMZ['MessageCore']['Window_Message_needsNewPage']=Window_Message[_0x4fc126(0x460)][_0x4fc126(0x260)],Window_Message[_0x4fc126(0x460)][_0x4fc126(0x260)]=function(_0x208aca){const _0x2060df=_0x4fc126;if(this['_currentAutoSize'])return![];return VisuMZ[_0x2060df(0x1b8)][_0x2060df(0x1fb)]['call'](this,_0x208aca);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x333)]=function(_0x196a7c){const _0x50fa0f=_0x4fc126;let _0x5867fa=_0x196a7c[_0x50fa0f(0x2f8)];this[_0x50fa0f(0x545)]={};if(this['isWordWrapEnabled']())return _0x5867fa;_0x5867fa=_0x5867fa['replace'](/<POSITION:[ ]*(.*?)>/gi,(_0x2997b3,_0x193252)=>{const _0x10cd73=_0x50fa0f,_0x5d73a3=_0x193252[_0x10cd73(0x2a8)](',')['map'](_0x4e4c65=>Number(_0x4e4c65)||0x0);if(_0x5d73a3[0x0]!==undefined)this[_0x10cd73(0x545)]['x']=Number(_0x5d73a3[0x0]);if(_0x5d73a3[0x1]!==undefined)this[_0x10cd73(0x545)]['y']=Number(_0x5d73a3[0x1]);if(_0x5d73a3[0x2]!==undefined)this[_0x10cd73(0x545)][_0x10cd73(0x2e6)]=Number(_0x5d73a3[0x2]);if(_0x5d73a3[0x3]!==undefined)this[_0x10cd73(0x545)][_0x10cd73(0x34a)]=Number(_0x5d73a3[0x3]);return'';}),_0x5867fa=_0x5867fa[_0x50fa0f(0x33a)](/<COORDINATES:[ ]*(.*?)>/gi,(_0x23c1e0,_0x569661)=>{const _0x4d294a=_0x50fa0f,_0x3d15c1=_0x569661[_0x4d294a(0x2a8)](',')[_0x4d294a(0x481)](_0x30ee41=>Number(_0x30ee41)||0x0);if(_0x3d15c1[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x3d15c1[0x0]);if(_0x3d15c1[0x1]!==undefined)this['_forcedPosition']['y']=Number(_0x3d15c1[0x1]);return'';}),_0x5867fa=_0x5867fa[_0x50fa0f(0x33a)](/<DIMENSIONS:[ ]*(.*?)>/gi,(_0x1830a1,_0x5024f3)=>{const _0x4e7bcf=_0x50fa0f,_0x184870=_0x5024f3[_0x4e7bcf(0x2a8)](',')['map'](_0x340fb8=>Number(_0x340fb8)||0x0);if(_0x184870[0x0]!==undefined)this[_0x4e7bcf(0x545)][_0x4e7bcf(0x2e6)]=Number(_0x184870[0x2]);if(_0x184870[0x1]!==undefined)this[_0x4e7bcf(0x545)][_0x4e7bcf(0x34a)]=Number(_0x184870[0x3]);return'';}),_0x5867fa=_0x5867fa[_0x50fa0f(0x33a)](/<OFFSET:[ ]*(.*?)>/gi,(_0x59a597,_0x2a1083)=>{const _0x547225=_0x50fa0f,_0x5baedd=_0x2a1083[_0x547225(0x2a8)](',')[_0x547225(0x481)](_0x359400=>Number(_0x359400)||0x0);let _0x5e556a=_0x5baedd[0x0]||0x0,_0x4f0117=_0x5baedd[0x1]||0x0;return $gameSystem[_0x547225(0x41f)](_0x5e556a,_0x4f0117),'';}),_0x196a7c[_0x50fa0f(0x2f8)]=_0x5867fa;},Window_Message[_0x4fc126(0x460)]['updateXyOffsets']=function(){const _0x304f27=_0x4fc126,_0x1f7296=$gameSystem[_0x304f27(0x4d8)]();this['x']+=_0x1f7296['x'],this['y']+=_0x1f7296['y'];},Window_Message['prototype'][_0x4fc126(0x368)]=function(){const _0x571e5a=_0x4fc126;this[_0x571e5a(0x545)]=this[_0x571e5a(0x545)]||{};const _0x35e30c=['x','y','width','height'];for(const _0x1ba8e5 of _0x35e30c){this['_forcedPosition'][_0x1ba8e5]!==undefined&&(this[_0x1ba8e5]=Number(this[_0x571e5a(0x545)][_0x1ba8e5]));}},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x47a)]=function(_0x5a4457){const _0x4a1187=_0x4fc126;this[_0x4a1187(0x31b)]=![];let _0x2c8b16=_0x5a4457['text'];_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{return this['processAutoSize'](_0x2c8b16,!![],!![]),this['processAutoPosition']('none'),'';}),_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x3ed362=_0x4a1187;return this['processAutoSize'](_0x2c8b16,!![],![]),this[_0x3ed362(0x471)]('none'),'';}),_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x503087=_0x4a1187;return this[_0x503087(0x1e5)](_0x2c8b16,![],!![]),this['processAutoPosition'](_0x503087(0x24b)),'';});if(SceneManager['isSceneBattle']())_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x4113c6,_0x37d234)=>{const _0x257841=_0x4a1187;return this[_0x257841(0x1e5)](_0x2c8b16,!![],!![]),this[_0x257841(0x471)](_0x257841(0x1d5),Number(_0x37d234)||0x1),'';}),_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x377def,_0x435781)=>{const _0x376cfe=_0x4a1187;return this[_0x376cfe(0x1e5)](_0x2c8b16,!![],!![]),this[_0x376cfe(0x471)](_0x376cfe(0x36d),Number(_0x435781)||0x0),'';}),_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x55da41,_0x3172a5)=>{const _0x4da52d=_0x4a1187;return this[_0x4da52d(0x1e5)](_0x2c8b16,!![],!![]),this[_0x4da52d(0x471)](_0x4da52d(0x301),Number(_0x3172a5)||0x0),'';});else SceneManager[_0x4a1187(0x588)]()&&(_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x2d36aa,_0x496001)=>{const _0x55c068=_0x4a1187;return this[_0x55c068(0x1e5)](_0x2c8b16,!![],!![]),this[_0x55c068(0x471)]('map\x20player',0x0),'';}),_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x3353e6,_0x53b7b1)=>{const _0x167d75=_0x4a1187;return this[_0x167d75(0x1e5)](_0x2c8b16,!![],!![]),this[_0x167d75(0x471)](_0x167d75(0x458),Number(_0x53b7b1)||0x1),'';}),_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x409e06,_0x1fed46)=>{const _0x27557a=_0x4a1187;return this[_0x27557a(0x1e5)](_0x2c8b16,!![],!![]),this['processAutoPosition']('map\x20party',Number(_0x1fed46)||0x0),'';}),_0x2c8b16=_0x2c8b16[_0x4a1187(0x33a)](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x105c41,_0x5419f4)=>{const _0x2a1788=_0x4a1187;return this[_0x2a1788(0x1e5)](_0x2c8b16,!![],!![]),this['processAutoPosition'](_0x2a1788(0x32a),Number(_0x5419f4)||0x0),'';}));_0x5a4457[_0x4a1187(0x2f8)]=_0x2c8b16;},Window_Message[_0x4fc126(0x43f)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message[_0x4fc126(0x340)]=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message[_0x4fc126(0x460)]['processAutoSize']=function(_0x44e2fe,_0x2b14ae,_0x2d1dbe){const _0x255286=_0x4fc126;_0x44e2fe=_0x44e2fe['replace'](Window_Message[_0x255286(0x43f)],''),_0x44e2fe=_0x44e2fe[_0x255286(0x33a)](Window_Message[_0x255286(0x340)],''),this[_0x255286(0x532)]=!![],this[_0x255286(0x31b)]=!![],this[_0x255286(0x498)](![]);const _0x448a06=this[_0x255286(0x223)](_0x44e2fe);if(_0x2b14ae){let _0x516248=_0x448a06[_0x255286(0x2e6)]+$gameSystem['windowPadding']()*0x2+0x6;const _0x5c9991=$gameMessage[_0x255286(0x371)]()!=='',_0x913d2e=ImageManager[_0x255286(0x1c0)],_0x6dc535=0x14;_0x516248+=_0x5c9991?_0x913d2e+_0x6dc535:0x4;if(_0x516248%0x2!==0x0)_0x516248+=0x1;$gameSystem[_0x255286(0x32e)](_0x516248);}if(_0x2d1dbe){let _0x5459a3=Math[_0x255286(0x559)](_0x448a06[_0x255286(0x34a)]/this['lineHeight']());$gameSystem[_0x255286(0x4fe)](_0x5459a3);}this[_0x255286(0x1e0)](),this[_0x255286(0x395)](),this[_0x255286(0x532)]=![],this[_0x255286(0x240)]=!![];},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x1e0)]=function(){const _0x25d72f=_0x4fc126;this[_0x25d72f(0x306)](),this[_0x25d72f(0x355)](),this['resetPositionX'](),this[_0x25d72f(0x591)](),this['contents']['clear'](),this[_0x25d72f(0x1cd)]();},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x471)]=function(_0x3c877b,_0x151b41){const _0x1231c0=_0x4fc126;switch(_0x3c877b[_0x1231c0(0x432)]()[_0x1231c0(0x20f)]()){case'battle\x20actor':this[_0x1231c0(0x3e6)]=$gameActors['actor'](_0x151b41);break;case _0x1231c0(0x36d):this[_0x1231c0(0x3e6)]=$gameParty[_0x1231c0(0x470)]()[_0x151b41-0x1];break;case _0x1231c0(0x301):this['_autoPositionTarget']=$gameTroop[_0x1231c0(0x470)]()[_0x151b41-0x1];break;case _0x1231c0(0x341):this[_0x1231c0(0x3e6)]=$gamePlayer;break;case _0x1231c0(0x458):const _0x3b492e=$gameActors[_0x1231c0(0x547)](_0x151b41)[_0x1231c0(0x438)]();_0x3b492e===0x0?this['_autoPositionTarget']=$gamePlayer:this[_0x1231c0(0x3e6)]=$gamePlayer[_0x1231c0(0x2e8)]()['follower'](_0x3b492e-0x1);break;case _0x1231c0(0x346):_0x151b41===0x1?this[_0x1231c0(0x3e6)]=$gamePlayer:this['_autoPositionTarget']=$gamePlayer[_0x1231c0(0x2e8)]()[_0x1231c0(0x453)](_0x151b41-0x2);break;case _0x1231c0(0x32a):this[_0x1231c0(0x3e6)]=$gameMap[_0x1231c0(0x4dd)](_0x151b41);break;}this[_0x1231c0(0x3e6)]&&this[_0x1231c0(0x2fd)]();},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x3ba)]=Window_Message[_0x4fc126(0x460)]['synchronizeNameBox'],Window_Message[_0x4fc126(0x460)]['synchronizeNameBox']=function(){const _0x3e664b=_0x4fc126;this[_0x3e664b(0x2fd)](),VisuMZ['MessageCore']['Window_Message_synchronizeNameBox'][_0x3e664b(0x563)](this);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x2fd)]=function(){const _0x1be11e=_0x4fc126;if(!this[_0x1be11e(0x3e6)])return;const _0x155ae9=SceneManager[_0x1be11e(0x321)];if(!_0x155ae9)return;const _0x527cfc=_0x155ae9[_0x1be11e(0x47f)];if(!_0x527cfc)return;const _0x5d966c=_0x527cfc[_0x1be11e(0x515)](this[_0x1be11e(0x3e6)]);if(!_0x5d966c)return;let _0x198791=_0x5d966c['x'];if(SceneManager[_0x1be11e(0x588)]())_0x198791*=$gameScreen[_0x1be11e(0x43d)]();else{if(SceneManager['isSceneBattle']()&&Imported[_0x1be11e(0x434)]){let _0x2918f4=_0x5d966c['x']-Graphics[_0x1be11e(0x1b0)]*_0x527cfc[_0x1be11e(0x45a)]['x'];_0x198791+=_0x2918f4*(_0x527cfc['scale']['x']-0x1);}}_0x198791-=this[_0x1be11e(0x2e6)]/0x2,_0x198791-=(Graphics['width']-Graphics[_0x1be11e(0x1b0)])/0x2,_0x198791+=this[_0x1be11e(0x526)]();let _0x26a67b=_0x5d966c['y'];if(SceneManager[_0x1be11e(0x588)]())_0x26a67b-=_0x5d966c[_0x1be11e(0x34a)]+0x8,_0x26a67b*=$gameScreen[_0x1be11e(0x43d)](),_0x26a67b-=this[_0x1be11e(0x34a)]*$gameScreen[_0x1be11e(0x43d)]();else{if(SceneManager[_0x1be11e(0x250)]()&&Imported['VisuMZ_3_ActSeqCamera']){let _0x21a71d=_0x5d966c[_0x1be11e(0x34a)]*_0x527cfc[_0x1be11e(0x245)]['y'];_0x26a67b-=this[_0x1be11e(0x34a)]*_0x527cfc[_0x1be11e(0x245)]['y']+_0x21a71d+0x8;let _0x567c5d=_0x5d966c['y']-Graphics[_0x1be11e(0x2d1)]*_0x527cfc[_0x1be11e(0x45a)]['y'];_0x26a67b+=_0x567c5d*(_0x527cfc[_0x1be11e(0x245)]['y']-0x1);}else _0x26a67b-=_0x5d966c[_0x1be11e(0x34a)]+0x8,_0x26a67b-=this['height'];}_0x26a67b-=(Graphics[_0x1be11e(0x34a)]-Graphics[_0x1be11e(0x2d1)])/0x2,_0x26a67b+=this['autoPositionOffsetY']();const _0x2f0b19=$gameSystem['getMessageWindowXyOffsets']();_0x198791+=_0x2f0b19['x'],_0x26a67b+=_0x2f0b19['y'],this['x']=Math['round'](_0x198791),this['y']=Math['round'](_0x26a67b),this[_0x1be11e(0x3a3)](!![],![]),this[_0x1be11e(0x545)]=this[_0x1be11e(0x545)]||{},this[_0x1be11e(0x545)]['x']=this['x'],this[_0x1be11e(0x545)]['y']=this['y'],this['_forcedPosition'][_0x1be11e(0x2e6)]=this['width'],this[_0x1be11e(0x545)][_0x1be11e(0x34a)]=this[_0x1be11e(0x34a)],this['_nameBoxWindow']['updatePlacement']();},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x526)]=function(){return 0x0;},Window_Message['prototype'][_0x4fc126(0x45b)]=function(){return 0x0;},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x2be)]=function(){const _0x33258b=_0x4fc126;this['_messagePositionReset']=![],this['_autoPositionTarget']=undefined,$gameSystem[_0x33258b(0x57a)](),this[_0x33258b(0x1e0)](),this[_0x33258b(0x581)]=0x0;},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x3a5)]=function(_0x3029ef){const _0x24ef81=_0x4fc126;return Window_Base[_0x24ef81(0x460)][_0x24ef81(0x3a5)][_0x24ef81(0x563)](this,_0x3029ef);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x48e)]=function(_0x5be020){const _0x22649f=_0x4fc126;return Window_Base[_0x22649f(0x460)][_0x22649f(0x48e)]['call'](this,_0x5be020);},Window_Message[_0x4fc126(0x460)]['flushTextState']=function(_0x341a7c){const _0xf6fd9a=_0x4fc126;this[_0xf6fd9a(0x398)](_0x341a7c),Window_Base[_0xf6fd9a(0x460)]['flushTextState'][_0xf6fd9a(0x563)](this,_0x341a7c),this[_0xf6fd9a(0x3e3)](_0x341a7c);},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x398)]=function(_0xafe96b){},Window_Message[_0x4fc126(0x460)][_0x4fc126(0x3e3)]=function(_0x281747){},Window_NameBox['prototype'][_0x4fc126(0x43c)]=function(){return![];},Window_NameBox[_0x4fc126(0x460)][_0x4fc126(0x53e)]=function(){const _0x39ef32=_0x4fc126;Window_Base[_0x39ef32(0x460)][_0x39ef32(0x53e)][_0x39ef32(0x563)](this),this['changeTextColor'](this['defaultColor']());},Window_NameBox['prototype'][_0x4fc126(0x2e1)]=function(){const _0x53ad81=_0x4fc126,_0x3cb871=VisuMZ[_0x53ad81(0x1b8)]['Settings'][_0x53ad81(0x1fe)][_0x53ad81(0x3ed)];return ColorManager['textColor'](_0x3cb871);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x1d8)]=Window_NameBox['prototype']['updatePlacement'],Window_NameBox[_0x4fc126(0x460)][_0x4fc126(0x355)]=function(){const _0x3ebd7b=_0x4fc126;VisuMZ[_0x3ebd7b(0x1b8)][_0x3ebd7b(0x1d8)][_0x3ebd7b(0x563)](this),this[_0x3ebd7b(0x34d)](),this[_0x3ebd7b(0x2f1)](),this[_0x3ebd7b(0x3a3)](),this[_0x3ebd7b(0x4c0)]();},Window_NameBox['prototype'][_0x4fc126(0x3a5)]=function(_0x42ccd4){const _0x17843d=_0x4fc126;return _0x42ccd4=_0x42ccd4[_0x17843d(0x33a)](/<LEFT>/gi,this[_0x17843d(0x418)][_0x17843d(0x56a)](this,0x0)),_0x42ccd4=_0x42ccd4['replace'](/<CENTER>/gi,this[_0x17843d(0x418)][_0x17843d(0x56a)](this,0x5)),_0x42ccd4=_0x42ccd4[_0x17843d(0x33a)](/<RIGHT>/gi,this[_0x17843d(0x418)][_0x17843d(0x56a)](this,0xa)),_0x42ccd4=_0x42ccd4[_0x17843d(0x33a)](/<POSITION:[ ](\d+)>/gi,(_0x464b7e,_0x41d32a)=>this[_0x17843d(0x418)](parseInt(_0x41d32a))),_0x42ccd4=_0x42ccd4['replace'](/<\/LEFT>/gi,''),_0x42ccd4=_0x42ccd4[_0x17843d(0x33a)](/<\/CENTER>/gi,''),_0x42ccd4=_0x42ccd4[_0x17843d(0x33a)](/<\/RIGHT>/gi,''),_0x42ccd4=_0x42ccd4[_0x17843d(0x20f)](),Window_Base['prototype'][_0x17843d(0x3a5)][_0x17843d(0x563)](this,_0x42ccd4);},Window_NameBox['prototype'][_0x4fc126(0x418)]=function(_0x5461fc){return this['_relativePosition']=_0x5461fc,'';},Window_NameBox[_0x4fc126(0x460)][_0x4fc126(0x34d)]=function(){const _0x1e9cfe=_0x4fc126;if($gameMessage['isRTL']())return;this[_0x1e9cfe(0x1b5)]=this['_relativePosition']||0x0;const _0x433d14=this['_messageWindow'],_0x3dc585=Math['floor'](_0x433d14['width']*this[_0x1e9cfe(0x1b5)]/0xa);this['x']=_0x433d14['x']+_0x3dc585-Math[_0x1e9cfe(0x42d)](this[_0x1e9cfe(0x2e6)]/0x2),this['x']=this['x'][_0x1e9cfe(0x415)](_0x433d14['x'],_0x433d14['x']+_0x433d14[_0x1e9cfe(0x2e6)]-this['width']);},Window_NameBox[_0x4fc126(0x460)]['updateOffsetPosition']=function(){const _0xdfd932=_0x4fc126;if($gameMessage[_0xdfd932(0x26a)]())return;this[_0xdfd932(0x1b5)]=this['_relativePosition']||0x0;const _0x4c3927=VisuMZ[_0xdfd932(0x1b8)]['Settings'][_0xdfd932(0x1fe)][_0xdfd932(0x2e7)],_0x17388c=VisuMZ[_0xdfd932(0x1b8)][_0xdfd932(0x248)][_0xdfd932(0x1fe)]['NameBoxWindowOffsetY'],_0x2367b1=(0x5-this[_0xdfd932(0x1b5)])/0x5;this['x']+=Math[_0xdfd932(0x42d)](_0x4c3927*_0x2367b1),this['y']+=_0x17388c;},Window_NameBox[_0x4fc126(0x460)]['updateOverlappingY']=function(){const _0x47fb03=_0x4fc126,_0x141395=this[_0x47fb03(0x38a)],_0x139611=_0x141395['y'],_0x252f0d=VisuMZ[_0x47fb03(0x1b8)][_0x47fb03(0x248)][_0x47fb03(0x1fe)][_0x47fb03(0x52c)];_0x139611>this['y']&&_0x139611<this['y']+this[_0x47fb03(0x34a)]-_0x252f0d&&(this['y']=_0x141395['y']+_0x141395[_0x47fb03(0x34a)]);},VisuMZ[_0x4fc126(0x1b8)]['Window_NameBox_refresh']=Window_NameBox[_0x4fc126(0x460)][_0x4fc126(0x538)],Window_NameBox[_0x4fc126(0x460)][_0x4fc126(0x538)]=function(){const _0x4a8d92=_0x4fc126;this[_0x4a8d92(0x1b5)]=0x0,VisuMZ[_0x4a8d92(0x1b8)]['Window_NameBox_refresh']['call'](this);},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x2cb)]=function(){return![];},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x43c)]=function(){return!![];},Window_ChoiceList['prototype'][_0x4fc126(0x4b0)]=function(){const _0x512018=_0x4fc126;return $gameSystem[_0x512018(0x2ec)]()+0x8;},Window_ChoiceList['prototype'][_0x4fc126(0x2ed)]=function(){return $gameSystem['getChoiceListMaxColumns']();},Window_ChoiceList[_0x4fc126(0x460)]['start']=function(){const _0x5b0eac=_0x4fc126;this['refresh'](),this[_0x5b0eac(0x2a2)](),this[_0x5b0eac(0x254)](),this['activate'](),this[_0x5b0eac(0x336)]();},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x25e)]=function(){const _0x426a36=_0x4fc126;$gameMessage['onChoice'](this[_0x426a36(0x530)]()),this[_0x426a36(0x38a)]['terminateMessage'](),this[_0x426a36(0x37a)](),this[_0x426a36(0x31a)]&&(this['_helpWindow']['clear'](),this['_helpWindow'][_0x426a36(0x244)]());},VisuMZ['MessageCore'][_0x4fc126(0x3b0)]=Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x342)],Window_ChoiceList[_0x4fc126(0x460)]['callCancelHandler']=function(){const _0x4fc6ec=_0x4fc126;VisuMZ[_0x4fc6ec(0x1b8)][_0x4fc6ec(0x3b0)]['call'](this),this[_0x4fc6ec(0x31a)]&&(this[_0x4fc6ec(0x31a)][_0x4fc6ec(0x456)](),this[_0x4fc6ec(0x31a)][_0x4fc6ec(0x244)]());},Window_ChoiceList['prototype']['refresh']=function(){const _0x41b84b=_0x4fc126;this[_0x41b84b(0x39e)](),this[_0x41b84b(0x44d)](),this['_messageWindow']&&(this[_0x41b84b(0x355)](),this[_0x41b84b(0x551)]()),this[_0x41b84b(0x1cd)](),this['updateBackground'](),this[_0x41b84b(0x2d0)](),Window_Selectable['prototype']['refresh']['call'](this);},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x44d)]=function(){const _0x4cb877=_0x4fc126;$gameMessage[_0x4cb877(0x37e)]?this['makeCommandListScriptCall']():this[_0x4cb877(0x263)](),this[_0x4cb877(0x49f)](),this[_0x4cb877(0x243)]();},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x499)]=function(){const _0x1a3d7c=_0x4fc126,_0xf0905a=$gameMessage[_0x1a3d7c(0x209)]();let _0x3af704=0x0;for(let _0x480e3a of _0xf0905a){_0x480e3a=this[_0x1a3d7c(0x294)](_0x480e3a);if(this[_0x1a3d7c(0x2e4)](_0x480e3a)){const _0x2d129f=this[_0x1a3d7c(0x501)](_0x480e3a),_0xa6b59e=this[_0x1a3d7c(0x269)](_0x480e3a);this[_0x1a3d7c(0x370)](_0x2d129f,_0x1a3d7c(0x536),_0xa6b59e,_0x3af704);}_0x3af704++;}},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x263)]=function(){const _0x51b1e2=_0x4fc126,_0x2eb04d=$gameMessage[_0x51b1e2(0x209)](),_0x1e655c=$gameMessage[_0x51b1e2(0x493)](),_0x3105a2=$gameMessage[_0x51b1e2(0x3a6)](),_0x985018=_0x2eb04d[_0x51b1e2(0x324)];let _0xd17cb=0x0;for(let _0x3e0d02=0x0;_0x3e0d02<_0x985018;_0x3e0d02++){if(this[_0x51b1e2(0x300)]['length']>=_0x3105a2)break;const _0x475148=_0x1e655c[_0x3e0d02];let _0x3b005b=_0x2eb04d[_0x475148];if(_0x3b005b===undefined)continue;_0x3b005b=this[_0x51b1e2(0x294)](_0x3b005b);if(this[_0x51b1e2(0x2e4)](_0x3b005b)){const _0xdf892b=this[_0x51b1e2(0x501)](_0x3b005b),_0x4ae33=this[_0x51b1e2(0x269)](_0x3b005b);this['addCommand'](_0xdf892b,'choice',_0x4ae33,_0x475148);}_0xd17cb++;}},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x294)]=function(_0xf3083){const _0x5807e8=_0x4fc126;return Window_Base[_0x5807e8(0x460)][_0x5807e8(0x24a)]['call'](this,_0xf3083);},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x2e4)]=function(_0x14232c){const _0x44dc86=_0x4fc126;if(Imported[_0x44dc86(0x1e1)])$gameMessage[_0x44dc86(0x3b2)]();if(_0x14232c[_0x44dc86(0x2b4)](/<HIDE>/i))return![];if(_0x14232c['match'](/<SHOW>/i))return!![];if(_0x14232c[_0x44dc86(0x2b4)](/<SHOW[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x461d06=RegExp['$1'][_0x44dc86(0x2a8)](',')[_0x44dc86(0x481)](_0x45740f=>Number(_0x45740f)||0x0);if(_0x461d06[_0x44dc86(0x1db)](_0x35df74=>!$gameSwitches[_0x44dc86(0x3e8)](_0x35df74)))return![];}if(_0x14232c['match'](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x54f5b8=RegExp['$1']['split'](',')['map'](_0x177d78=>Number(_0x177d78)||0x0);if(_0x54f5b8[_0x44dc86(0x37d)](_0x53dfdb=>!$gameSwitches[_0x44dc86(0x3e8)](_0x53dfdb)))return![];}if(_0x14232c[_0x44dc86(0x2b4)](/<HIDE[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x44f2c5=RegExp['$1'][_0x44dc86(0x2a8)](',')[_0x44dc86(0x481)](_0x2d2507=>Number(_0x2d2507)||0x0);if(_0x44f2c5[_0x44dc86(0x37d)](_0xe3a9cb=>$gameSwitches[_0x44dc86(0x3e8)](_0xe3a9cb)))return![];}if(_0x14232c[_0x44dc86(0x2b4)](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x36f01d=RegExp['$1']['split'](',')[_0x44dc86(0x481)](_0x13bea9=>Number(_0x13bea9)||0x0);if(_0x36f01d[_0x44dc86(0x1db)](_0x2fb69e=>$gameSwitches[_0x44dc86(0x3e8)](_0x2fb69e)))return![];}return!![];},Window_ChoiceList[_0x4fc126(0x460)]['parseChoiceText']=function(_0x1d1b5a){const _0x49f6cd=_0x4fc126;let _0x304d24=_0x1d1b5a;return _0x304d24=_0x304d24[_0x49f6cd(0x33a)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x304d24=_0x304d24['replace'](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x304d24;},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x269)]=function(_0x60fca7){const _0x418b39=_0x4fc126;if(Imported[_0x418b39(0x1e1)])$gameMessage['registerSelfEvent']();if(_0x60fca7['match'](/<DISABLE>/i))return![];if(_0x60fca7[_0x418b39(0x2b4)](/<ENABLE>/i))return!![];if(_0x60fca7[_0x418b39(0x2b4)](/<ENABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4a2698=RegExp['$1'][_0x418b39(0x2a8)](',')['map'](_0xc97792=>Number(_0xc97792)||0x0);if(_0x4a2698[_0x418b39(0x1db)](_0x4957a5=>!$gameSwitches[_0x418b39(0x3e8)](_0x4957a5)))return![];}if(_0x60fca7[_0x418b39(0x2b4)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x5263b8=RegExp['$1'][_0x418b39(0x2a8)](',')[_0x418b39(0x481)](_0x5b2d60=>Number(_0x5b2d60)||0x0);if(_0x5263b8[_0x418b39(0x37d)](_0x5b39f6=>!$gameSwitches[_0x418b39(0x3e8)](_0x5b39f6)))return![];}if(_0x60fca7[_0x418b39(0x2b4)](/<DISABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x44df05=RegExp['$1'][_0x418b39(0x2a8)](',')[_0x418b39(0x481)](_0x46565a=>Number(_0x46565a)||0x0);if(_0x44df05[_0x418b39(0x37d)](_0x29c5a5=>$gameSwitches[_0x418b39(0x3e8)](_0x29c5a5)))return![];}if(_0x60fca7[_0x418b39(0x2b4)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x688e65=RegExp['$1'][_0x418b39(0x2a8)](',')[_0x418b39(0x481)](_0x4b7b5a=>Number(_0x4b7b5a)||0x0);if(_0x688e65[_0x418b39(0x1db)](_0x1d54c2=>$gameSwitches[_0x418b39(0x3e8)](_0x1d54c2)))return![];}return!![];},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x49f)]=function(){const _0x5d673c=_0x4fc126;this['_choiceHelpDescriptions']={},this[_0x5d673c(0x31a)]&&(this[_0x5d673c(0x31a)][_0x5d673c(0x456)](),this[_0x5d673c(0x31a)][_0x5d673c(0x244)]());},Window_ChoiceList['prototype'][_0x4fc126(0x243)]=function(){const _0x127d9b=_0x4fc126,_0x3113de=/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;for(const _0x25cb2d of this[_0x127d9b(0x300)]){if(!_0x25cb2d)continue;const _0x36be8d=this['_list']['indexOf'](_0x25cb2d);if(_0x25cb2d['name'][_0x127d9b(0x2b4)](_0x3113de)){const _0x474151=String(RegExp['$1']);this[_0x127d9b(0x28d)][_0x36be8d]=_0x474151[_0x127d9b(0x20f)](),_0x25cb2d[_0x127d9b(0x2b3)]=_0x25cb2d['name']['replace'](_0x3113de,'')['trim']();}else this['_choiceHelpDescriptions'][_0x36be8d]='';}},Window_ChoiceList[_0x4fc126(0x460)]['processFailsafeChoice']=function(){const _0x22a795=_0x4fc126;if(this[_0x22a795(0x300)][_0x22a795(0x1db)](_0x8e3c8e=>_0x8e3c8e[_0x22a795(0x48f)]))return;this[_0x22a795(0x54d)](),this[_0x22a795(0x37a)](),$gameMessage[_0x22a795(0x490)]=[],this[_0x22a795(0x38a)][_0x22a795(0x53b)]()&&this[_0x22a795(0x38a)][_0x22a795(0x429)]();},VisuMZ['MessageCore'][_0x4fc126(0x4eb)]=Window_ChoiceList['prototype'][_0x4fc126(0x355)],Window_ChoiceList['prototype'][_0x4fc126(0x355)]=function(){const _0x992037=_0x4fc126;VisuMZ['MessageCore']['Window_ChoiceList_updatePlacement'][_0x992037(0x563)](this),this[_0x992037(0x519)](),this[_0x992037(0x3a3)]();},Window_ChoiceList['prototype']['placeCancelButton']=function(){const _0x175d7e=_0x4fc126;if(!this[_0x175d7e(0x1cb)])return;const _0x37ee36=0x8,_0x4cda61=this['_cancelButton'],_0x1ecd7b=this['x']+this[_0x175d7e(0x2e6)],_0x313c46=Math[_0x175d7e(0x42d)]((Graphics[_0x175d7e(0x2e6)]-Graphics[_0x175d7e(0x1b0)])/0x2);_0x1ecd7b>=Graphics[_0x175d7e(0x1b0)]+_0x313c46-_0x4cda61['width']+_0x37ee36?_0x4cda61['x']=-_0x4cda61[_0x175d7e(0x2e6)]-_0x37ee36:_0x4cda61['x']=this[_0x175d7e(0x2e6)]+_0x37ee36,_0x4cda61['y']=this['height']/0x2-_0x4cda61[_0x175d7e(0x34a)]/0x2;},VisuMZ['MessageCore']['Window_ChoiceList_windowX']=Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x3a2)],Window_ChoiceList['prototype']['windowX']=function(){const _0x4f83b9=_0x4fc126;return this[_0x4f83b9(0x38a)]?this['messageCoreWindowX']():VisuMZ[_0x4f83b9(0x1b8)][_0x4f83b9(0x518)][_0x4f83b9(0x563)](this);},Window_ChoiceList[_0x4fc126(0x460)]['messageCoreWindowX']=function(){const _0x2c9959=_0x4fc126,_0x4a1f68=$gameMessage['choicePositionType']();if(_0x4a1f68===0x1)return(Graphics[_0x2c9959(0x1b0)]-this[_0x2c9959(0x38b)]())/0x2;else return _0x4a1f68===0x2?this['_messageWindow']['x']+this[_0x2c9959(0x38a)][_0x2c9959(0x2e6)]-this[_0x2c9959(0x38b)]():this['_messageWindow']['x'];},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x38b)]=function(){const _0x36ab79=_0x4fc126,_0x29fe02=(this[_0x36ab79(0x4f3)]()+this[_0x36ab79(0x1b4)]())*this[_0x36ab79(0x2ed)]()+this[_0x36ab79(0x2d5)]*0x2;return Math['min'](_0x29fe02,Graphics[_0x36ab79(0x2e6)]);},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x311)]=function(){const _0x444706=_0x4fc126,_0xbf46c3=$gameMessage[_0x444706(0x209)]()[_0x444706(0x481)](_0x136bb5=>this['convertChoiceMacros'](_0x136bb5))[_0x444706(0x207)](_0x1e7a97=>this[_0x444706(0x2e4)](_0x1e7a97));let _0x9f5ede=Math[_0x444706(0x559)](_0xbf46c3[_0x444706(0x324)]/this[_0x444706(0x2ed)]());if(!$gameMessage[_0x444706(0x37e)]){const _0x58c92d=$gameMessage[_0x444706(0x3a6)]();_0x9f5ede=Math['ceil'](Math[_0x444706(0x44e)](_0x58c92d,_0xbf46c3[_0x444706(0x324)])/this[_0x444706(0x2ed)]());}return Math[_0x444706(0x447)](0x1,Math[_0x444706(0x44e)](_0x9f5ede,this[_0x444706(0x4a3)]()));},Window_ChoiceList['prototype'][_0x4fc126(0x4a3)]=function(){const _0x1de354=_0x4fc126,_0x8080b8=this['_messageWindow'],_0x3626a5=_0x8080b8?_0x8080b8['y']:0x0,_0x1a991b=_0x8080b8?_0x8080b8[_0x1de354(0x34a)]:0x0,_0x31986a=Graphics[_0x1de354(0x2d1)]/0x2;return _0x3626a5<_0x31986a&&_0x3626a5+_0x1a991b>_0x31986a?0x4:$gameSystem[_0x1de354(0x3df)]();},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x4f3)]=function(){const _0x37ca6e=_0x4fc126;let _0xd0d3bc=this[_0x37ca6e(0x399)]();for(const _0x447aa8 of this['_list']){const _0x5c1ece=_0x447aa8[_0x37ca6e(0x2b3)],_0x21ea67=this[_0x37ca6e(0x4df)](_0x5c1ece),_0x287a11=this[_0x37ca6e(0x2de)](_0x5c1ece)['width']+_0x21ea67,_0x30b7ab=Math[_0x37ca6e(0x559)](_0x287a11)+this[_0x37ca6e(0x478)]()*0x2;_0xd0d3bc=Math[_0x37ca6e(0x447)](_0xd0d3bc,_0x30b7ab);}return _0xd0d3bc;},Window_ChoiceList[_0x4fc126(0x460)]['getStartingChoiceWidth']=function(){const _0x10381c=_0x4fc126;let _0x5bf3d1=$gameSystem[_0x10381c(0x22b)]();const _0x52434f=$gameMessage['choices']();for(const _0x1d5969 of _0x52434f){_0x1d5969[_0x10381c(0x2b4)](/<CHOICE WIDTH:[ ](\d+)>/gi)&&(_0x5bf3d1=Math[_0x10381c(0x447)](_0x5bf3d1,Number(RegExp['$1'])));}return Math['max'](_0x5bf3d1,0x1);},Window_ChoiceList['prototype'][_0x4fc126(0x519)]=function(){const _0x209c81=_0x4fc126,_0x565017=$gameSystem[_0x209c81(0x51d)]()||0x0,_0x4868dc=this[_0x209c81(0x38a)]['y'],_0x1e579a=this[_0x209c81(0x38a)]['height'],_0x32682c=this[_0x209c81(0x38a)][_0x209c81(0x329)],_0x28d4bb=_0x32682c['openness']>0x0&&_0x32682c[_0x209c81(0x2e6)]>0x0,_0x546e5c=_0x28d4bb?_0x32682c[_0x209c81(0x34a)]:0x0;if(_0x565017<0x0&&(this[_0x209c81(0x38a)][_0x209c81(0x33b)]()||this['_messageWindow'][_0x209c81(0x587)]()))this['y']=Math[_0x209c81(0x43e)]((Graphics['boxHeight']-this[_0x209c81(0x34a)])/0x2);else{if(_0x4868dc>=Graphics[_0x209c81(0x2d1)]/0x2)_0x565017>=0x0?this['y']-=_0x565017:this['y']=Math[_0x209c81(0x42d)]((_0x4868dc-this[_0x209c81(0x34a)]-_0x546e5c)/0x2);else{if(_0x565017>=0x0)this['y']+=_0x565017;else{const _0x350e7c=Graphics[_0x209c81(0x2d1)]-(_0x4868dc+_0x1e579a+_0x546e5c);this['y']+=Math[_0x209c81(0x42d)]((_0x350e7c-this[_0x209c81(0x34a)])/0x2)+_0x546e5c;}}}},Window_ChoiceList[_0x4fc126(0x460)]['drawItem']=function(_0x159fdc){const _0x3c3c34=_0x4fc126,_0x4e68d8=this[_0x3c3c34(0x4a8)](_0x159fdc);if(_0x4e68d8){const _0x3ffe82=ImageManager['loadPicture'](_0x4e68d8),_0x359e07=this[_0x3c3c34(0x583)](),_0x3f6fbf=_0x359e07+this[_0x3c3c34(0x2ce)](_0x159fdc),_0x4a35ff=this['itemRectWithPadding'](_0x159fdc);_0x3ffe82[_0x3c3c34(0x202)](this[_0x3c3c34(0x4bb)][_0x3c3c34(0x56a)](this,_0x159fdc,!![],_0x3f6fbf,_0x4a35ff,_0x3ffe82));return;}this[_0x3c3c34(0x2f9)](_0x159fdc);},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x2f9)]=function(_0x312ee6){const _0x4908e1=_0x4fc126,_0x4b9e31=this[_0x4908e1(0x22a)](_0x312ee6),_0x512953=this[_0x4908e1(0x583)](),_0x744389=_0x512953+this[_0x4908e1(0x2ce)](_0x312ee6);this['changePaintOpacity'](this['isCommandEnabled'](_0x312ee6));const _0x1cdbe7=this['textSizeEx'](_0x744389)[_0x4908e1(0x34a)],_0x18414c=_0x4b9e31['x']+this[_0x4908e1(0x4df)](_0x744389),_0x47d5d4=Math['max'](_0x4b9e31['y'],_0x4b9e31['y']+Math['round']((_0x4b9e31[_0x4908e1(0x34a)]-_0x1cdbe7)/0x2));this[_0x4908e1(0x36c)](_0x744389,_0x18414c,_0x47d5d4,_0x4b9e31[_0x4908e1(0x2e6)]),this[_0x4908e1(0x32b)](_0x312ee6),this[_0x4908e1(0x227)](_0x312ee6,_0x744389,_0x4b9e31);},Window_ChoiceList[_0x4fc126(0x460)]['choiceAlignText']=function(){const _0x40fb71=_0x4fc126;return $gameSystem[_0x40fb71(0x3d1)]()!==_0x40fb71(0x444)?'<%1>'[_0x40fb71(0x3d6)]($gameSystem[_0x40fb71(0x3d1)]()):'';},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x4df)]=function(_0x3e655f){let _0x282c70=0x0;return _0x3e655f['match'](/<(?:CHOICE|CHOICE |)INDENT:[ ](\d+)>/gi)&&(_0x282c70=Number(RegExp['$1'])),_0x282c70;},Window_ChoiceList['prototype'][_0x4fc126(0x32b)]=function(_0x428677){const _0x2693f1=_0x4fc126;if(!Imported[_0x2693f1(0x4b3)])return;const _0x5c2a9c=this[_0x2693f1(0x2ce)](_0x428677);let _0x5470bd=![],_0x3a51c4=![],_0x3feec0=ColorManager[_0x2693f1(0x4c5)](),_0x1547fa=ColorManager['itemBackColor2']();if(_0x5c2a9c['match'](/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi))_0x3feec0=ColorManager[_0x2693f1(0x523)](RegExp['$1'])[_0x2693f1(0x20f)](),_0x1547fa=ColorManager[_0x2693f1(0x523)](RegExp['$2'])[_0x2693f1(0x20f)](),_0x5470bd=!![];else{if(_0x5c2a9c[_0x2693f1(0x2b4)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)){let _0x4d08fc=String(RegExp['$1'])[_0x2693f1(0x432)]()[_0x2693f1(0x20f)]();switch(_0x4d08fc){case _0x2693f1(0x1dd):_0x3feec0=_0x1547fa=_0x2693f1(0x529),_0x3a51c4=!![];break;case _0x2693f1(0x3bc):_0x3feec0=_0x1547fa=_0x2693f1(0x44c),_0x3a51c4=!![];break;case'yellow':_0x3feec0=_0x1547fa=_0x2693f1(0x577),_0x3a51c4=!![];break;case _0x2693f1(0x2b7):_0x3feec0=_0x1547fa=_0x2693f1(0x41d),_0x3a51c4=!![];break;case _0x2693f1(0x299):_0x3feec0=_0x1547fa=_0x2693f1(0x592),_0x3a51c4=!![];break;case _0x2693f1(0x3cb):case _0x2693f1(0x3b7):_0x3feec0=_0x1547fa='#a186be',_0x3a51c4=!![];break;case _0x2693f1(0x2ad):_0x3feec0=_0x1547fa=_0x2693f1(0x235),_0x3a51c4=!![];break;case'pink':_0x3feec0=_0x1547fa=_0x2693f1(0x42f),_0x3a51c4=!![];break;case _0x2693f1(0x561):_0x3feec0=_0x1547fa=_0x2693f1(0x49a),_0x3a51c4=!![];break;case _0x2693f1(0x3f4):case _0x2693f1(0x58f):_0x3feec0=_0x1547fa='#acacac',_0x3a51c4=!![];break;case _0x2693f1(0x2ba):_0x3feec0=_0x1547fa=_0x2693f1(0x2c1),_0x3a51c4=!![];break;case'yes':_0x3feec0=_0x1547fa=ColorManager[_0x2693f1(0x3e7)](),_0x3a51c4=!![];break;case'no':_0x3feec0=_0x1547fa=ColorManager['powerDownColor'](),_0x3a51c4=!![];break;case _0x2693f1(0x4ea):_0x3feec0=_0x1547fa=ColorManager[_0x2693f1(0x259)](),_0x3a51c4=!![];break;case _0x2693f1(0x484):_0x3feec0=_0x1547fa=ColorManager['crisisColor'](),_0x3a51c4=!![];break;default:_0x3feec0=_0x1547fa=ColorManager['getColor'](_0x4d08fc),_0x3a51c4=!![];break;}_0x5470bd=!![];}}if(!_0x5470bd)return;const _0x21e545=this[_0x2693f1(0x543)](_0x428677);this['contentsBack'][_0x2693f1(0x2fc)](_0x21e545['x'],_0x21e545['y'],_0x21e545[_0x2693f1(0x2e6)],_0x21e545[_0x2693f1(0x34a)]),this[_0x2693f1(0x23b)](_0x21e545,_0x3feec0,_0x1547fa,_0x3a51c4);},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x23b)]=function(_0x13d171,_0x413900,_0xa53729,_0x59442d){const _0x196e54=_0x4fc126,_0x57e916=ColorManager[_0x196e54(0x4c5)](),_0x211d78=ColorManager[_0x196e54(0x598)](),_0x3e075b=_0x413900??ColorManager['itemBackColor1'](),_0x4d23e9=_0xa53729??_0x413900,_0xfd97ce=_0x13d171['x'],_0x3aaff5=_0x13d171['y'],_0x16ea38=_0x13d171[_0x196e54(0x2e6)],_0x38e25d=_0x13d171[_0x196e54(0x34a)];this[_0x196e54(0x4f0)][_0x196e54(0x56e)](_0xfd97ce,_0x3aaff5,_0x16ea38,_0x38e25d,_0x3e075b,_0x4d23e9,!![]),_0x59442d&&this['contentsBack'][_0x196e54(0x56e)](_0xfd97ce,_0x3aaff5,_0x16ea38,_0x38e25d,_0x57e916,_0x4d23e9,!![]),this[_0x196e54(0x4f0)][_0x196e54(0x4bc)](_0xfd97ce,_0x3aaff5,_0x16ea38,_0x38e25d,_0x57e916);},Window_ChoiceList[_0x4fc126(0x460)][_0x4fc126(0x4a8)]=function(_0x2dbc62){const _0x51b106=_0x4fc126,_0x2907a1=this[_0x51b106(0x583)](),_0x3e7832=_0x2907a1+this[_0x51b106(0x2ce)](_0x2dbc62);let _0x457958='';if(_0x3e7832[_0x51b106(0x2b4)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x457958=String(RegExp['$1'])[_0x51b106(0x20f)]();else _0x3e7832[_0x51b106(0x2b4)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x457958=String(RegExp['$2'])[_0x51b106(0x20f)]());return _0x457958;},Window_ChoiceList[_0x4fc126(0x460)]['requestChoiceBackgroundImage']=function(_0x4af12e,_0x944a27,_0x5cb0a7){const _0x17c883=_0x4fc126;let _0x2f72ee='';if(_0x944a27[_0x17c883(0x2b4)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x2f72ee=String(RegExp['$1'])[_0x17c883(0x20f)]();else _0x944a27['match'](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x2f72ee=String(RegExp['$2'])[_0x17c883(0x20f)]());if(_0x2f72ee){const _0xf62e90=ImageManager['loadPicture'](_0x2f72ee);_0xf62e90[_0x17c883(0x202)](this[_0x17c883(0x4bb)]['bind'](this,_0x4af12e,![],_0x944a27,_0x5cb0a7,_0xf62e90));}},Window_ChoiceList['prototype'][_0x4fc126(0x4bb)]=function(_0x4ff7a4,_0x15f1a1,_0x480d90,_0xbdbdd1,_0x4fb2d0){const _0x12e42c=_0x4fc126,_0x420e4a=this[_0x12e42c(0x583)](),_0x3f5e6c=_0x420e4a+this[_0x12e42c(0x2ce)](_0x4ff7a4);if(_0x480d90!==_0x3f5e6c)return;const _0x213aa7=this[_0x12e42c(0x22a)](_0x4ff7a4);if(['x','y',_0x12e42c(0x2e6),_0x12e42c(0x34a)]['some'](_0x28d0ef=>_0x213aa7[_0x28d0ef]!==_0xbdbdd1[_0x28d0ef]))return;let _0x43dfdd=0x0,_0x185734='';if(_0x15f1a1&&_0x3f5e6c[_0x12e42c(0x2b4)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)){}else{if(_0x15f1a1&&_0x3f5e6c[_0x12e42c(0x2b4)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i))_0x185734=String(RegExp['$1'])[_0x12e42c(0x432)]()[_0x12e42c(0x20f)]();else!_0x15f1a1&&_0x3f5e6c[_0x12e42c(0x2b4)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x185734=String(RegExp['$1'])[_0x12e42c(0x432)]()['trim']());}switch(_0x185734){case _0x12e42c(0x4a1):case _0x12e42c(0x4a5):case _0x12e42c(0x27c):case _0x12e42c(0x364):case'down-left':case _0x12e42c(0x44a):case'1':_0x43dfdd=0x1;break;case'lowercenter':case'lower-center':case _0x12e42c(0x3de):case'downcenter':case _0x12e42c(0x3b8):case _0x12e42c(0x1fc):case _0x12e42c(0x226):case'2':_0x43dfdd=0x2;break;case'lowerright':case'lower-right':case _0x12e42c(0x26c):case'downright':case _0x12e42c(0x55b):case _0x12e42c(0x1c8):case'3':_0x43dfdd=0x3;break;case'midleft':case'middleleft':case'left':case'4':_0x43dfdd=0x4;break;case _0x12e42c(0x4ec):case _0x12e42c(0x3d3):case _0x12e42c(0x1bb):case _0x12e42c(0x283):case'5':_0x43dfdd=0x5;break;case _0x12e42c(0x450):case'middleright':case'right':case'6':_0x43dfdd=0x6;break;case _0x12e42c(0x480):case'upper-left':case _0x12e42c(0x1cf):case'upleft':case _0x12e42c(0x4e7):case _0x12e42c(0x2b0):case'7':_0x43dfdd=0x7;break;case _0x12e42c(0x4b5):case'upper-center':case _0x12e42c(0x58d):case _0x12e42c(0x58c):case _0x12e42c(0x1d9):case _0x12e42c(0x303):case'up':case'8':_0x43dfdd=0x8;break;case _0x12e42c(0x391):case _0x12e42c(0x222):case _0x12e42c(0x4af):case _0x12e42c(0x41c):case _0x12e42c(0x33f):case _0x12e42c(0x571):case'9':_0x43dfdd=0x9;break;}const _0x444ba1=_0x15f1a1?this[_0x12e42c(0x1d3)]:this[_0x12e42c(0x4f0)],_0x4cf61=this['itemRect'](_0x4ff7a4);!_0x15f1a1&&_0x444ba1[_0x12e42c(0x2fc)](_0x4cf61['x']-0x1,_0x4cf61['y']-0x1,_0x4cf61[_0x12e42c(0x2e6)]+0x2,_0x4cf61[_0x12e42c(0x34a)]+0x2);const _0x2fc667=_0x4cf61['x']+0x2,_0x175d20=_0x4cf61['y']+0x2,_0x1935d8=_0x4cf61['width']-0x4,_0x4088b2=_0x4cf61[_0x12e42c(0x34a)]-0x4,_0x5e354e=_0x4fb2d0[_0x12e42c(0x2e6)],_0x1e66af=_0x4fb2d0[_0x12e42c(0x34a)];let _0x52c914=_0x2fc667,_0x54bf80=_0x175d20,_0x143b06=_0x1935d8,_0xd7861a=_0x4088b2;const _0x3a91be=_0x1935d8/_0x5e354e,_0x18eb51=_0x4088b2/_0x1e66af;let _0x5d5918=Math[_0x12e42c(0x44e)](_0x3a91be,_0x18eb51);if(_0x15f1a1)_0x5d5918=Math[_0x12e42c(0x44e)](_0x5d5918,0x1);_0x43dfdd!==0x0&&(_0x143b06=Math[_0x12e42c(0x43e)](_0x5e354e*_0x5d5918),_0xd7861a=Math['round'](_0x1e66af*_0x5d5918));switch(_0x43dfdd){case 0x1:case 0x4:case 0x7:_0x52c914=_0x2fc667;break;case 0x2:case 0x5:case 0x8:_0x52c914+=Math[_0x12e42c(0x43e)]((_0x1935d8-_0x143b06)/0x2);break;case 0x3:case 0x6:case 0x9:_0x52c914+=_0x1935d8-_0x143b06;break;}switch(_0x43dfdd){case 0x7:case 0x8:case 0x9:_0x54bf80=_0x175d20;break;case 0x4:case 0x5:case 0x6:_0x54bf80+=Math[_0x12e42c(0x43e)]((_0x4088b2-_0xd7861a)/0x2);break;case 0x1:case 0x2:case 0x3:_0x54bf80+=_0x4088b2-_0xd7861a;break;}_0x444ba1[_0x12e42c(0x35d)](_0x4fb2d0,0x0,0x0,_0x5e354e,_0x1e66af,_0x52c914,_0x54bf80,_0x143b06,_0xd7861a),_0x15f1a1&&this[_0x12e42c(0x2f9)](_0x4ff7a4);},Window_ChoiceList[_0x4fc126(0x460)]['updateHelp']=function(){const _0x20e49e=_0x4fc126;this[_0x20e49e(0x31a)]['clear']();if(!this[_0x20e49e(0x28d)])return;const _0x555280=this[_0x20e49e(0x438)]();this['_choiceHelpDescriptions'][_0x555280]?(this['_helpWindow'][_0x20e49e(0x2d9)](this[_0x20e49e(0x28d)][_0x555280]),this[_0x20e49e(0x31a)][_0x20e49e(0x1af)]()):(this['_helpWindow'][_0x20e49e(0x456)](),this[_0x20e49e(0x31a)][_0x20e49e(0x244)]());},Window_EventItem['prototype'][_0x4fc126(0x381)]=function(){const _0x30d5b1=_0x4fc126,_0x144bb2=$gameMessage[_0x30d5b1(0x3e2)]();_0x144bb2===_0x30d5b1(0x4d0)&&Imported[_0x30d5b1(0x50e)]?this[_0x30d5b1(0x375)]():Window_ItemList[_0x30d5b1(0x460)][_0x30d5b1(0x381)][_0x30d5b1(0x563)](this);},Window_EventItem[_0x4fc126(0x460)]['makeSkillList']=function(){const _0x4a8b7f=_0x4fc126,_0x109125=$gameMessage['itemChoiceActor']();this[_0x4a8b7f(0x4e8)]=_0x109125?_0x109125[_0x4a8b7f(0x39c)]()[_0x4a8b7f(0x207)](_0x9d5fd2=>this[_0x4a8b7f(0x585)](_0x9d5fd2)):[],this[_0x4a8b7f(0x585)](null)&&this[_0x4a8b7f(0x4e8)]['push'](null);},VisuMZ[_0x4fc126(0x1b8)][_0x4fc126(0x452)]=Window_EventItem['prototype']['includes'],Window_EventItem['prototype']['includes']=function(_0x3c9753){const _0x4bd56a=_0x4fc126,_0x31792a=$gameMessage[_0x4bd56a(0x3e2)]();if(_0x31792a==='weapon'){if(!DataManager['isWeapon'](_0x3c9753))return![];const _0x5ae68e=$gameMessage['itemChoiceWtypeId']();if(_0x5ae68e>0x0){if(_0x3c9753[_0x4bd56a(0x214)]!==_0x5ae68e)return![];}return!![];}else{if(_0x31792a===_0x4bd56a(0x284)){if(!DataManager[_0x4bd56a(0x412)](_0x3c9753))return![];const _0x562794=$gameMessage['itemChoiceAtypeId']();if(_0x562794>0x0){if(_0x3c9753[_0x4bd56a(0x2b9)]!==_0x562794)return![];}const _0x28d6f9=$gameMessage[_0x4bd56a(0x3bb)]();if(_0x28d6f9>0x0){if(_0x3c9753[_0x4bd56a(0x58e)]!==_0x28d6f9)return![];}return!![];}else{if(_0x31792a===_0x4bd56a(0x4d0)){if(!DataManager[_0x4bd56a(0x1f0)](_0x3c9753))return![];const _0x3ab03f=$gameMessage[_0x4bd56a(0x4b6)]();if(_0x3ab03f['isSkillHidden'](_0x3c9753))return![];if(!_0x3ab03f[_0x4bd56a(0x2f7)](_0x3c9753))return![];const _0xe040a=$gameMessage[_0x4bd56a(0x57d)]();if(_0xe040a>0x0){const _0x3380ae=DataManager[_0x4bd56a(0x4f9)](_0x3c9753);if(!_0x3380ae[_0x4bd56a(0x585)](_0xe040a))return![];}return!![];}else return VisuMZ['MessageCore'][_0x4bd56a(0x452)]['call'](this,_0x3c9753);}}},VisuMZ['MessageCore'][_0x4fc126(0x51e)]=Window_ItemList[_0x4fc126(0x460)][_0x4fc126(0x307)],Window_ItemList['prototype'][_0x4fc126(0x307)]=function(_0x265009,_0x322333,_0x56c5c2,_0x5b7ea1){const _0x1d4914=_0x4fc126,_0x434b6a=$gameMessage[_0x1d4914(0x3e2)]();if(_0x434b6a===_0x1d4914(0x4d0)){const _0x50faa4=$gameMessage['itemChoiceActor']();this[_0x1d4914(0x1ca)](_0x50faa4,_0x265009,_0x322333,_0x56c5c2,_0x5b7ea1);}else VisuMZ[_0x1d4914(0x1b8)][_0x1d4914(0x51e)][_0x1d4914(0x563)](this,_0x265009,_0x322333,_0x56c5c2,_0x5b7ea1);},Window_MapName[_0x4fc126(0x460)][_0x4fc126(0x290)]=function(){const _0xe0ea71=_0x4fc126;this[_0xe0ea71(0x1d3)]['clear']();let _0x3ae092=$gameMap[_0xe0ea71(0x246)]();if(_0x3ae092){const _0x5dba6d=this['innerWidth'];this[_0xe0ea71(0x2a3)](0x0,0x0,_0x5dba6d,this[_0xe0ea71(0x35b)]()),_0x3ae092=this['realignMapName'](_0x3ae092);const _0x4fd982=this[_0xe0ea71(0x2de)](_0x3ae092)['width'];this[_0xe0ea71(0x36c)](_0x3ae092,Math['floor']((_0x5dba6d-_0x4fd982)/0x2),0x0);}},Window_MapName['prototype'][_0x4fc126(0x308)]=function(_0x2b194f){const _0x7624fa=_0x4fc126;if(_0x2b194f[_0x7624fa(0x2b4)](/<LEFT>/gi))this['x']=0x0;else{if(_0x2b194f[_0x7624fa(0x2b4)](/<CENTER>/gi))this['x']=Math['floor']((Graphics[_0x7624fa(0x1b0)]-this[_0x7624fa(0x2e6)])/0x2);else _0x2b194f[_0x7624fa(0x2b4)](/<RIGHT>/gi)&&(this['x']=Graphics[_0x7624fa(0x1b0)]-this[_0x7624fa(0x2e6)]);}_0x2b194f=_0x2b194f[_0x7624fa(0x33a)](/<(?:LEFT|CENTER|RIGHT)>/gi,''),_0x2b194f=_0x2b194f[_0x7624fa(0x33a)](/<\/(?:LEFT|CENTER|RIGHT)>/gi,'');if(_0x2b194f[_0x7624fa(0x2b4)](/<TOP>/gi))this['y']=0x0;else{if(_0x2b194f['match'](/<MIDDLE>/gi))this['y']=Math[_0x7624fa(0x42d)]((Graphics[_0x7624fa(0x2d1)]-this[_0x7624fa(0x34a)])/0x2);else _0x2b194f[_0x7624fa(0x2b4)](/<BOTTOM>/gi)&&(this['y']=Graphics[_0x7624fa(0x2d1)]-this['height']);}return _0x2b194f=_0x2b194f[_0x7624fa(0x33a)](/<(?:TOP|MIDDLE|BOTTOM)>/gi,''),_0x2b194f=_0x2b194f[_0x7624fa(0x33a)](/<\/(?:TOP|MIDDLE|BOTTOM)>/gi,''),_0x2b194f[_0x7624fa(0x2b4)](/<X:[ ]([\+\-]\d+)>/gi)&&(this['x']+=Number(RegExp['$1']),_0x2b194f=_0x2b194f[_0x7624fa(0x33a)](/<X:[ ]([\+\-]\d+)>/gi,'')),_0x2b194f[_0x7624fa(0x2b4)](/<Y:[ ]([\+\-]\d+)>/gi)&&(this['y']+=Number(RegExp['$1']),_0x2b194f=_0x2b194f[_0x7624fa(0x33a)](/<Y:[ ]([\+\-]\d+)>/gi,'')),_0x2b194f;};