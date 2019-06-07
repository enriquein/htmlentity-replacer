const vscode = require('vscode');
const _ = require('lodash.forin');

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
    'ā':'&#257;',
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
    'İ':'&Idot;',
    'Ĳ':'&IJlig;',
    'ĳ':'&ijlig;',
    'Ĵ':'&Jcirc;',
    'ĵ':'&jcirc;',
    'Ķ':'&Kcedil;',
    'ķ':'&kcedil;',
    'Ĺ':'&Lacute;',
    'ĺ':'&lacute;',
    'Ļ':'&Lcedil;',
    'ļ':'&lcedil;',
    'Ľ':'&Lcaron;',
    'ľ':'&lcaron;',
    'Ł':'&Lstrok;',
    'ł':'&lstrok;',
    'Ń':'&Nacute;',
    'ń':'&nacute;',
    'Ņ':'&Ncedil;',
    'ņ':'&ncedil;',
    'Ň':'&Ncaron;',
    'ň':'&ncaron;',
    'ŋ':'&eng;',
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
    'Ō':'&Omacr;',
    'ō':'&omacr;',
    'Ŏ':'&#334;',
    'ŏ':'&#335;',
    'Ő':'&Odblac;',
    'ő':'&odblac;',
    'Œ':'&OElig;',
    'œ':'&oelig;',
    'Ŕ':'&Racute;',
    'ŕ':'&racute;',
    'Ŗ':'&Rcedil;',
    'ŗ':'&rcedil;',
    'Ř':'&Rcaron;',
    'ř':'&rcaron;',
    'Ś':'&Sacute;',
    'ś':'&sacute;',
    'Ŝ':'&Scirc;',
    'ŝ':'&scirc;',
    'Ş':'&Scedil;',
    'ş':'&scedil;',
    'Š':'&Scaron;',
    'š':'&scaron;',
    'Ţ':'&Tcedil;',
    'ţ':'&tcedil;',
    'Ť':'&Tcaron;',
    'ť':'&tcaron;',
    'Ŧ':'&Tstrok;',
    'ŧ':'&tstrok;',
    'Ú':'&Uacute;',
    'ú':'&uacute;',
    'Û':'&Ucirc;',
    'û':'&ucirc;',
    'Ù':'&Ugrave;',
    'ù':'&ugrave;',
    'Ü':'&Uuml;',
    'ü':'&uuml;',
    'µ':'&micro;',
    'Ũ':'&Utilde;',
    'ũ':'&utilde;',
    'Ū':'&Umacr;',
    'ū':'&umacr;',
    'Ŭ':'&Ubreve;',
    'ŭ':'&ubreve;',
    'Ů':'&Uring;',
    'ů':'&uring;',
    'Ű':'&Udblac;',
    'ű':'&udblac;',
    'Ų':'&Uogon;',
    'ų':'&uogon;',
    'Ŵ':'&Wcirc;',
    'ŵ':'&wcirc;',
    'Ŷ':'&Ycirc;',
    'ŷ':'&ycirc;',
    'Ÿ':'&Yuml;',
    'Ź':'&Zacute;',
    'ź':'&zacute;',
    'Ż':'&Zdot;',
    'ż':'&zdot;',
    'Ž':'&Zcaron;',
    'ž':'&zcaron;',
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