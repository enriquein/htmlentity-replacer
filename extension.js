const vscode = require('vscode');
const _ = require('lodash');

const charMap = {
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
    'ä':'&auml;',
    'Æ':'&AElig;',
    'æ':'&aelig;',
    'É':'&Eacute;',
    'é':'&eacute;',
    'Ê':'&Ecirc;',
    'ê':'&ecirc;',
    'È':'&Egrave;',
    'è':'&egrave;',
    'Ë':'&Euml;',
    'ë':'&euml;',
    'Ð':'&ETH;',
    'ð':'&eth;',
    'Í':'&Iacute;',
    'í':'&iacute;',
    'Î':'&Icirc;',
    'î':'&icirc;',
    'Ì':'&Igrave;',
    'ì':'&igrave;',
    'Ï':'&Iuml;',
    'ï':'&iuml;',
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
    'Ú':'&Uacute;',
    'ú':'&uacute;',
    'Û':'&Ucirc;',
    'û':'&ucirc;',
    'Ù':'&Ugrave;',
    'ù':'&ugrave;',
    'Ü':'&Uuml;',
    'ü':'&uuml;',
    'Ç':'&Ccedil;',
    'ç':'&ccedil;',
    'Ñ':'&Ntilde;',
    'ñ':'&ntilde;',
    '®':'&reg;',
    '©':'&copy;',
    'Ý':'&Yacute;',
    'ý':'&yacute;',
    'Þ':'&THORN;',
    'þ':'&thorn;',
    'ß':'&szlig;',
    '¿': '&iquest;',
    '¡': '&iexcl;'
};

// build match regex based on charmap
let regexMap = '[';
_.forIn(charMap, (value, key) => { regexMap += key; });
regexMap += "]";

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.htmlentity-replacer', function () {
        let editor = vscode.window.activeTextEditor;

        if (!editor) {
            return;
        }

        replaceEntities(editor);
    });

    context.subscriptions.push(disposable);
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

        // reset for next iteration. god damned function-level scoping in js.
        found = true;
        lastFoundIndex = -1;
    }
}