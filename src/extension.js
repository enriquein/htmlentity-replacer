const vscode = require('vscode');
const forIn = require('lodash.forin');

const overrides = vscode.workspace.getConfiguration('htmlentityreplacer').get('overrides');

const charMap = Object.assign({
    'Á':'&Aacute;',
    'á':'&aacute;',
    'Â':'&Acirc;',
    'â':'&acirc;',
    'À':'&Agrave;',
    'à':'&agrave;',
    'Å':'&Aring;',
    'å':'&aring;',
    'Ã':'&Atilde;',
    'ã':'&atilde;',
    'Ä':'&Auml;',
    'ā':'&auml;',
    'Ă':'&#258;',
    'ă':'&#259;',
    'Ą':'&#260;',
    'ą':'&#261;',
    'ä':'&auml;',
    'Æ':'&AElig;',
    'æ':'&aelig;',
    '¢':'&cent;',
    'œ':'&#339;',
    'Ć':'&#262;',
    'ć':'&#263;',
    'Ĉ':'&#264;',
    'ĉ':'&#265;',
    'Ċ':'&#266;',
    'ċ':'&#267;',
    'Č':'&#268;',
    'č':'&#269;',
    'Ď':'&#270;',
    'ď':'&#271;',
    'Đ':'&#272;',
    'đ':'&#273;',
    'Ð':'&ETH;',
    'É':'&Eacute;',
    'é':'&eacute;',
    'Ê':'&Ecirc;',
    'ê':'&ecirc;',
    'È':'&Egrave;',
    'è':'&egrave;',
    'Ë':'&Euml;',
    'ë':'&euml;',
    'Ē':'&#274;',
    'ē':'&#275;',
    'Ĕ':'&#276;',
    'ĕ':'&#277;',
    'Ė':'&#278;',
    'ė':'&#279;',
    'Ę':'&#280;',
    'ę':'&#281;',
    'Ě':'&#282;',
    'ě':'&#283;',
    'ƒ':'&#402;',
    'Ĝ':'&#284;',
    'ĝ':'&#285;',
    'Ğ':'&#286;',
    'ğ':'&#287;',
    'Ġ':'&#288;',
    'ġ':'&#289;',
    'Ģ':'&#290;',
    'ģ':'&#291;',
    'Ĥ':'&#292;',
    'ĥ':'&#293;',
    'Ħ':'&#294;',
    'ħ':'&#295;',
    'ð':'&eth;',
    'Í':'&Iacute;',
    'í':'&iacute;',
    'Î':'&Icirc;',
    'î':'&icirc;',
    'Ì':'&Igrave;',
    'ì':'&igrave;',
    'Ï':'&Iuml;',
    'ï':'&iuml;',
    'Ĩ':'&#296;',
    'ĩ':'&#297;',
    'Ī':'&#298;',
    'ī':'&#299;',
    'Ĭ':'&#300;',
    'ĭ':'&#301;',
    'Į':'&#302;',
    'į':'&#303;',
    'İ':'&#304;',
    'İ':'&#305;',
    'Ĳ':'&#306;',
    'ĳ':'&#307;',
    'Ĵ':'&#308;',
    'ĵ':'&#309;',
    'Ķ':'&#310;',
    'ķ':'&#311;',
    'Ĺ':'&#313;',
    'ĺ':'&#314;',
    'Ļ':'&#315;',
    'ļ':'&#316;',
    'Ľ':'&#317;',
    'ľ':'&#318;',
    'Ł':'&#321;',
    'ł':'&#322;',
    'Ń':'&#323;',
    'ń':'&#324;',
    'Ņ':'&#325;',
    'ņ':'&#326;',
    'Ň':'&#327;',
    'ň':'&#328;',
    'ŋ':'&#331;',
    'Ó':'&Oacute;',
    'ó':'&oacute;',
    'Ô':'&Ocirc;',
    'ô':'&ocirc;',
    'Ò':'&Ograve;',
    'ò':'&ograve;',
    'Ø':'&Oslash;',
    'ø':'&oslash;',
    'Õ':'&Otilde;',
    'õ':'&otilde;',
    'Ö':'&Ouml;',
    'ö':'&ouml;',
    'Ō':'&#332;',
    'ō':'&#333;',
    'Ŏ':'&#334;',
    'ŏ':'&#335;',
    'Ő':'&#336;',
    'ő':'&#337;',
    'Œ':'&#338;',
    'œ':'&#339;',
    'Ŕ':'&#340;',
    'ŕ':'&#341;',
    'Ŗ':'&#342;',
    'ŗ':'&#343;',
    'Ř':'&#344;',
    'ř':'&#345;',
    'Ś':'&#346;',
    'ś':'&#347;',
    'Ŝ':'&#348;',
    'ŝ':'&#349;',
    'Ş':'&#350;',
    'ş':'&#351;',
    'Ș':'&#536;',
    'ș':'&#537;',
    'Š':'&#352;',
    'š':'&#353;',
    'Ţ':'&#354;',
    'ţ':'&#355;',
    'Ț':'&#538;',
    'ț':'&#539;',
    'Ť':'&#356;',
    'ť':'&#357;',
    'Ŧ':'&#358;',
    'ŧ':'&#359;',
    'Ú':'&Uacute;',
    'ú':'&uacute;',
    'Û':'&Ucirc;',
    'û':'&ucirc;',
    'Ù':'&Ugrave;',
    'ù':'&ugrave;',
    'Ü':'&Uuml;',
    'ü':'&uuml;',
    'µ':'&micro;',
    'Ũ':'&#360;',
    'ũ':'&#361;',
    'Ū':'&#362;',
    'ū':'&#363;',
    'Ŭ':'&#364;',
    'ŭ':'&#365;',
    'Ů':'&#366;',
    'ů':'&#367;',
    'Ű':'&#368;',
    'ű':'&#369;',
    'Ų':'&#370;',
    'ų':'&#371;',
    'Ŵ':'&#372;',
    'ŵ':'&#373;',
    'Ŷ':'&#374;',
    'ŷ':'&#375;',
    'Ÿ':'&#376;',
    'Ź':'&#377;',
    'ź':'&#378;',
    'Ż':'&#379;',
    'ż':'&#380;',
    'Ž':'&#381;',
    'ž':'&#382;',
    'Ç':'&Ccedil;',
    'ç':'&ccedil;',
    'Ñ':'&Ntilde;',
    'ñ':'&ntilde;',
    '§':'&sect;',
    '®':'&reg;',
    '©':'&copy;',
    'Ý':'&Yacute;',
    'ý':'&yacute;',
    'ÿ':'&yuml;',
    'Ÿ':'&#376;',
    'Þ':'&THORN;',
    'þ':'&thorn;',
    'ß':'&szlig;',
    '£':'&pound;',
    '¥':'&yen;',
    '€':'&euro;',
    '¿':'&iquest;',
    '¡':'&iexcl;',
    '™':'&trade;',
    '℠':'&#8480;',
    '°':'&deg;',
    'º':'&ordm;',
    'ª':'&ordf;'
}, overrides);

// build match regex based on charmap
let regexMap = '[';
forIn(charMap, (value, key) => { regexMap += key; });
regexMap += "]";

function activate(context) {
    let mainCommand = vscode.commands.registerCommand('extension.htmlentity-replacer.main', function () {
        let editor = vscode.window.activeTextEditor;

        if (!editor) {
            return;
        }

        replaceEntities(editor);
    });

    let commandInSelection = vscode.commands.registerCommand('extension.htmlentity-replacer.inSelection', function () {
        let editor = vscode.window.activeTextEditor;

        if (!editor) {
            return;
        }

        let selection = editor.selection;

        if (selection.start.line === 0 && selection.start.character === 0 && selection.end.line === 0 && selection.end.character === 0 ) {
            return;
        }

        replaceEntitiesInSelection(editor);
    });

    context.subscriptions.push(mainCommand);
    context.subscriptions.push(commandInSelection);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;

function regexIndexOf(value, regex, startpos) {
    var indexOf = value.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

async function replaceEntities(editor) {
    let found = true;
    let lastFoundIndex = -1;

    for (let line = 0; line < editor.document.lineCount; line++) {
        while(found) {
            // need to re-read the line text because we potentially modified it on a previous iteration.
            let lineContents = editor.document.lineAt(line).text;
            lastFoundIndex = regexIndexOf(lineContents, regexMap, lastFoundIndex + 1);
            if (lastFoundIndex >= 0) {
                let replaceWith = charMap[lineContents[lastFoundIndex]]
                await editor.edit((edit) => {
                    edit.delete(new vscode.Range(new vscode.Position(line, lastFoundIndex), new vscode.Position(line, lastFoundIndex + 1)));
                    edit.insert(new vscode.Position(line, lastFoundIndex), replaceWith);
                });
                found = true;
            } else {
                found = false;
            }
        }

        // reset for next iteration
        found = true;
        lastFoundIndex = -1;
    }
}

async function replaceEntitiesInSelection(editor) {
    let found = true;
    let lastFoundIndex = -1;

    for (let line = editor.selection.start.line; line <= editor.selection.end.line; line++) {
        while(found) {
            // need to re-read the line text because we potentially modified it on a previous iteration.
            let fullLine = editor.document.lineAt(line).text;
            let lineContents = '';
            let selectionOffset = 0;

            if (line === editor.selection.start.line && line === editor.selection.end.line) {
                lineContents = fullLine.substring(editor.selection.start.character, editor.selection.end.character);
                // need to account for the characters in the line that come before the beginning of the selection.
                selectionOffset = editor.selection.start.character;
            } else if (line === editor.selection.start.line) {
                lineContents = fullLine.substring(editor.selection.start.character);
                // need to account for the characters in the line that come before the beginning of the selection.
                selectionOffset = editor.selection.start.character;
            } else if (line === editor.selection.end.line) {
                // make sure we don't replace characters in the line that come after the end of the selection.
                lineContents = fullLine.substring(0, editor.selection.end.character);
            } else {
                lineContents = fullLine;
            }

            lastFoundIndex = regexIndexOf(lineContents, regexMap, lastFoundIndex + 1);
            if (lastFoundIndex >= 0) {
                let replaceWith = charMap[lineContents[lastFoundIndex]]
                await editor.edit((edit) => {
                    edit.delete(new vscode.Range(new vscode.Position(line, lastFoundIndex + selectionOffset), new vscode.Position(line, lastFoundIndex + selectionOffset + 1)));
                    edit.insert(new vscode.Position(line, lastFoundIndex + selectionOffset), replaceWith);
                });
                found = true;
            } else {
                found = false;
            }
        }

        // reset for next iteration
        found = true;
        lastFoundIndex = -1;
    }
}