# Keyword MatchTypes README

This extension is useful for anyone that uses VS code to work with keyword match types. You can use the commands in this extension to quickly and easily convert between various match types.

## Features

This extension adds 4 commands to VS code for the 4 different keyword matchtypes. Match type examples and descriptions of the commands are below. Simply highlight the lines of text that you want to convert to a specific match type and then run the corresponding command.

[exact match]<br/>
"phrase match"<br/>
+broad +match +modified<br/>
broad match

Exact Match: Returns lines of text which are wrapped in brackets. If this command is run on text lines that are arleady exact match, it returns text lines with no special keyword formatting (in other words, broad match). By default this command is associated with the keyboard shortcut "shift + alt + e" but it can also be run by directly searching for the command after pressing "shift + cmd + p" (for mac) or "shift + ctrl + p" (for Windows).

Phrase Match: Returns lines of text which are wrapped in double quotes. If this command is run on text lines that are arleady phrase match, it returns text lines with no special keyword formatting (in other words, broad match). By default this command is associated with the keyboard shortcut "shift + alt + p" but it can also be run by directly searching for the command after pressing "shift + cmd + p" (for mac) or "shift + ctrl + p" (for Windows).

Broad Match Modified (BMM): Returns lines of text with each word starting with a plus sign. If this command is run on text lines that are arleady BMM, it returns text lines with no special keyword formatting (in other words, broad match). By default this command is associated with the keyboard shortcut "shift + alt + m" but it can also be run by directly searching for the command after pressing "shift + cmd + p" (for mac) or "shift + ctrl + p" (for Windows).

Broad Match: Returns lines of text with no special match type formatting. If this command is run on text lines that are arleady broad match, it doesn't change anything. By default this command is associated with the keyboard shortcut "shift + alt + b" but it can also be run by directly searching for the command after pressing "shift + cmd + p" (for mac) or "shift + ctrl + p" (for Windows).

## Known Issues

There are no known issues with this extension at this time.

## Release Notes

### 1.0.0

Initial release of the extension.

-----------------------------------------------------------------------------------------------------------
