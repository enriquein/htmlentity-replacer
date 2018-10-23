const vscode = require('vscode');
const _ = require('lodash');

const charMap = {
    'á': '&aacute;',
    'é': '&eacute;',
    'í': '&iacute;',
    'ó': '&oacute;',
    'ú': '&uacute;',
    'ñ': '&ntilde;',
    'Á': '&Aacute;',
    'É': '&Eacute;',
    'Í': '&Iacute;',
    'Ó': '&Oacute;',
    'Ú': '&Uacute;',
    'Ñ': '&Ntilde;',
    '¿': '&iquest;',
    '¡': '&iexcl;',
    'ü': '&uuml;',
    'Ü': '&Uuml;'
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