# HTML accented character converter

VSCode extension for quick replacements of accented characters into html entities.

Originally named htmlentity-replacer because I'm pretty bad at naming things.

![Demo](https://github.com/enriquein/htmlentity-replacer/raw/master/demo.gif)

## Features

This extension adds a command to Visual Studio Code to replace some special characters into html entities. The command will appear in your command palette as `Replace special characters with Html entities`. The list of supported characters is:
- &aacute; -> `&aacute;`
- &eacute; -> `&eacute;`
- &iacute; -> `&iacute;`
- &oacute; -> `&oacute;`
- &uacute; -> `&uacute;`
- &ntilde; -> `&ntilde;`
- &Aacute; -> `&Aacute;`
- &Eacute; -> `&Eacute;`
- &Iacute; -> `&Iacute;`
- &Oacute; -> `&Oacute;`
- &Uacute; -> `&Uacute;`
- &Ntilde; -> `&Ntilde;`
- &iquest; -> `&iquest;`
- &iexcl; -> `&iexcl;`
- &uuml; -> `&uuml;`
- &Uuml; -> `&Uuml;`

The idea behind this extension (and the reason why it won't replace any of the other HTML entities) is that if you have a file that contains the listed characters you can replace all of these at once just by running the command. This is very useful if you are working with localizable strings, and your source contains these special characters.

In a future release I intend to add an option to extend/override the character maps, and also provide an additional command to run only within a selection.

## Requirements

Requires a recent version of Visual Studio Code running on NodeJS 7+ (async / await support).
