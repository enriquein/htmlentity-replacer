# HTML accented character converter

VSCode extension for quick replacements of accented characters into html entities.

Originally named htmlentity-replacer because I'm pretty bad at naming things.

![Demo](https://github.com/enriquein/htmlentity-replacer/raw/master/demo.gif)

## Features

This extension adds a command to Visual Studio Code to replace some special characters into html entities. The command will appear in your command palette as `Replace special characters with Html entities`. The list of supported characters is:
- &Aacute; -> `&Aacute;`
- &aacute; -> `&aacute;`
- &Acirc; -> `&Acirc;`
- &acirc; -> `&acirc;`
- &Agrave; -> `&Agrave;`
- &agrave; -> `&agrave;`
- &Aring; -> `&Aring;`
- &aring; -> `&aring;`
- &Atilde; -> `&Atilde;`
- &atilde; -> `&atilde;`
- &Auml; -> `&Auml;`
- &auml; -> `&auml;`
- &AElig; -> `&AElig;`
- &aelig; -> `&aelig;`
- &Eacute; -> `&Eacute;`
- &eacute; -> `&eacute;`
- &Ecirc; -> `&Ecirc;`
- &ecirc; -> `&ecirc;`
- &Egrave; -> `&Egrave;`
- &egrave; -> `&egrave;`
- &Euml; -> `&Euml;`
- &euml; -> `&euml;`
- &ETH; -> `&ETH;`
- &eth; -> `&eth;`
- &Iacute; -> `&Iacute;`
- &iacute; -> `&iacute;`
- &Icirc; -> `&Icirc;`
- &icirc; -> `&icirc;`
- &Igrave; -> `&Igrave;`
- &igrave; -> `&igrave;`
- &Iuml; -> `&Iuml;`
- &iuml; -> `&iuml;`
- &Oacute; -> `&Oacute;`
- &oacute; -> `&oacute;`
- &Ocirc; -> `&Ocirc;`
- &ocirc; -> `&ocirc;`
- &Ograve; -> `&Ograve;`
- &ograve; -> `&ograve;`
- &Oslash; -> `&Oslash;`
- &oslash; -> `&oslash;`
- &Otilde; -> `&Otilde;`
- &otilde; -> `&otilde;`
- &Ouml; -> `&Ouml;`
- &ouml; -> `&ouml;`
- &Uacute; -> `&Uacute;`
- &uacute; -> `&uacute;`
- &Ucirc; -> `&Ucirc;`
- &ucirc; -> `&ucirc;`
- &Ugrave; -> `&Ugrave;`
- &ugrave; -> `&ugrave;`
- &Uuml; -> `&Uuml;`
- &uuml; -> `&uuml;`
- &Ccedil; -> `&Ccedil;`
- &ccedil; -> `&ccedil;`
- &Ntilde; -> `&Ntilde;`
- &ntilde; -> `&ntilde;`
- &iquest; -> `&iquest;` 
- &iexcl; -> `&iexcl;` 
- &iquest; -> `&iquest;`

The idea behind this extension (and the reason why it won't replace any of the other HTML entities) is that if you have a file that contains the listed characters you can replace all of these at once just by running the command. This is very useful if you are working with localizable strings, and your source contains these special characters.

In a future release I intend to add an option to extend/override the character maps, and also provide an additional command to run only within a selection.

## Requirements

Requires a recent version of Visual Studio Code running on NodeJS 7+ (async / await support).
