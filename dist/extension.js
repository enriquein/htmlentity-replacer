module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const n=r(1),c=r(2),o={"Á":"&Aacute;","á":"&aacute;","Â":"&Acirc;","â":"&acirc;","À":"&Agrave;","à":"&agrave;","Å":"&Aring;","å":"&aring;","Ã":"&Atilde;","ã":"&atilde;","Ä":"&Auml;","ā":"&#257;","Ă":"&#258;","ă":"&#259;","Ą":"&#260;","ą":"&#261;","ä":"&auml;","Æ":"&AElig;","æ":"&aelig;","¢":"&cent;","œ":"&#339;","Ć":"&#262;","ć":"&#263;","Ĉ":"&#264;","ĉ":"&#265;","Ċ":"&#266;","ċ":"&#267;","Č":"&#268;","č":"&#269;","Ď":"&#270;","ď":"&#271;","Đ":"&#272;","đ":"&#273;","Ð":"&ETH;","É":"&Eacute;","é":"&eacute;","Ê":"&Ecirc;","ê":"&ecirc;","È":"&Egrave;","è":"&egrave;","Ë":"&Euml;","ë":"&euml;","Ē":"&#274;","ē":"&#275;","Ĕ":"&#276;","ĕ":"&#277;","Ė":"&#278;","ė":"&#279;","Ę":"&#280;","ę":"&#281;","Ě":"&#282;","ě":"&#283;","ƒ":"&#402;","Ĝ":"&#284;","ĝ":"&#285;","Ğ":"&#286;","ğ":"&#287;","Ġ":"&#288;","ġ":"&#289;","Ģ":"&#290;","ģ":"&#291;","Ĥ":"&#292;","ĥ":"&#293;","Ħ":"&#294;","ħ":"&#295;","ð":"&eth;","Í":"&Iacute;","í":"&iacute;","Î":"&Icirc;","î":"&icirc;","Ì":"&Igrave;","ì":"&igrave;","Ï":"&Iuml;","ï":"&iuml;","Ĩ":"&#296;","ĩ":"&#297;","Ī":"&#298;","ī":"&#299;","Ĭ":"&#300;","ĭ":"&#301;","Į":"&#302;","į":"&#303;","İ":"&#304;","İ":"&Idot;","Ĳ":"&IJlig;","ĳ":"&ijlig;","Ĵ":"&Jcirc;","ĵ":"&jcirc;","Ķ":"&Kcedil;","ķ":"&kcedil;","Ĺ":"&Lacute;","ĺ":"&lacute;","Ļ":"&Lcedil;","ļ":"&lcedil;","Ľ":"&Lcaron;","ľ":"&lcaron;","Ł":"&Lstrok;","ł":"&lstrok;","Ń":"&Nacute;","ń":"&nacute;","Ņ":"&Ncedil;","ņ":"&ncedil;","Ň":"&Ncaron;","ň":"&ncaron;","ŋ":"&eng;","Ó":"&Oacute;","ó":"&oacute;","Ô":"&Ocirc;","ô":"&ocirc;","Ò":"&Ograve;","ò":"&ograve;","Ø":"&Oslash;","ø":"&oslash;","Õ":"&Otilde;","õ":"&otilde;","Ö":"&Ouml;","ö":"&ouml;","Ō":"&Omacr;","ō":"&omacr;","Ŏ":"&#334;","ŏ":"&#335;","Ő":"&Odblac;","ő":"&odblac;","Œ":"&OElig;","œ":"&oelig;","Ŕ":"&Racute;","ŕ":"&racute;","Ŗ":"&Rcedil;","ŗ":"&rcedil;","Ř":"&Rcaron;","ř":"&rcaron;","Ś":"&Sacute;","ś":"&sacute;","Ŝ":"&Scirc;","ŝ":"&scirc;","Ş":"&Scedil;","ş":"&scedil;","Š":"&Scaron;","š":"&scaron;","Ţ":"&Tcedil;","ţ":"&tcedil;","Ť":"&Tcaron;","ť":"&tcaron;","Ŧ":"&Tstrok;","ŧ":"&tstrok;","Ú":"&Uacute;","ú":"&uacute;","Û":"&Ucirc;","û":"&ucirc;","Ù":"&Ugrave;","ù":"&ugrave;","Ü":"&Uuml;","ü":"&uuml;","µ":"&micro;","Ũ":"&Utilde;","ũ":"&utilde;","Ū":"&Umacr;","ū":"&umacr;","Ŭ":"&Ubreve;","ŭ":"&ubreve;","Ů":"&Uring;","ů":"&uring;","Ű":"&Udblac;","ű":"&udblac;","Ų":"&Uogon;","ų":"&uogon;","Ŵ":"&Wcirc;","ŵ":"&wcirc;","Ŷ":"&Ycirc;","ŷ":"&ycirc;","Ÿ":"&Yuml;","Ź":"&Zacute;","ź":"&zacute;","Ż":"&Zdot;","ż":"&zdot;","Ž":"&Zcaron;","ž":"&zcaron;","Ç":"&Ccedil;","ç":"&ccedil;","Ñ":"&Ntilde;","ñ":"&ntilde;","§":"&sect;","®":"&reg;","©":"&copy;","Ý":"&Yacute;","ý":"&yacute;","ÿ":"&yuml;","Ÿ":"&#376;","Þ":"&THORN;","þ":"&thorn;","ß":"&szlig;","£":"&pound;","¥":"&yen;","€":"&euro;","¿":"&iquest;","¡":"&iexcl;"};let u="[";c.forIn(o,(e,t)=>{u+=t}),u+="]",t.activate=function(e){let t=n.commands.registerCommand("extension.htmlentity-replacer",function(){let e=n.window.activeTextEditor;e&&async function(e){let t=!0,r=-1;for(let l=0;l<e.document.lineCount;l++){for(;t;){let f=e.document.lineAt(l).text;if(c=u,i=r+1,a=void 0,a=f.substring(i||0).search(c),(r=a>=0?a+(i||0):a)>=0){let c=o[f[r]];await e.edit(e=>{e.delete(new n.Range(new n.Position(l,r),new n.Position(l,r+1))),e.insert(new n.Position(l,r),c)}),t=!0}else t=!1}t=!0,r=-1}var c,i,a}(e)});e.subscriptions.push(t)},t.deactivate=function(){}},function(e,t){e.exports=require("vscode")},function(e,t){var r=9007199254740991,n="[object Arguments]",c="[object Function]",o="[object GeneratorFunction]",u=/^(?:0|[1-9]\d*)$/;var i=Object.prototype,a=i.hasOwnProperty,l=i.toString,f=i.propertyIsEnumerable;function d(e,t){var r=m(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&b(e)}(e)&&a.call(e,"callee")&&(!f.call(e,"callee")||l.call(e)==n)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],c=r.length,o=!!c;for(var u in e)!t&&!a.call(e,u)||o&&("length"==u||p(u,c))||r.push(u);return r}var s,g=function(e,t,r){for(var n=-1,c=Object(e),o=r(e),u=o.length;u--;){var i=o[s?u:++n];if(!1===t(c[i],i,c))break}return e};function v(e){if(!y(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t,r,n,c=(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||i,t===n),o=[];for(var u in e)("constructor"!=u||!c&&a.call(e,u))&&o.push(u);return o}function p(e,t){return!!(t=null==t?r:t)&&("number"==typeof e||u.test(e))&&e>-1&&e%1==0&&e<t}var m=Array.isArray;function b(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}(e.length)&&!function(e){var t=y(e)?l.call(e):"";return t==c||t==o}(e)}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){return b(e)?d(e,!0):v(e)}function h(e){return e}e.exports=function(e,t){return null==e?e:g(e,"function"==typeof t?t:h,O)}}]);