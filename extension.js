// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	let disposable = vscode.commands.registerCommand("extension.exactMatch", function() {
		let editor = vscode.window.activeTextEditor;
		let lines = [];
		let updatedLines = [];
		let cleanLine;
		let newLine;
		let selectionLength;

		const selection = editor.selection;
		const startPoint = selection.start.line;
		const endPoint = selection.end.line;
		const isSingleLine = selection.isSingleLine;

		if (isSingleLine) {
			selectionLength = editor.document.getText(selection).length;
			lines = editor.document.getText(selection).split(",");
		} else {
			selectionLength = editor.document.lineAt(endPoint).text.length;
			for (let i = startPoint; i <= endPoint; i++) {
				lines.push(editor.document.lineAt(i).text);
			}
		}

		for (let i = 0; i < lines.length; i++) {
			if (lines[i]) {
				if (lines[i].includes("+") || lines[i].includes('"')) {
					//removes non exact characters from the line if they exist
					cleanLine = lines[i].replace(/\+|"/g, "");
				} else {
					cleanLine = lines[i];
				}

				if (lines[i].includes("[") || lines[i].includes("]")) {
					//removes exact characters if they exist
					newLine = cleanLine.replace(/\[|\]/g, "");
					updatedLines.push(newLine);
				} else {
					newLine = cleanLine.replace(/^/g, "[").replace(/$/g, "]"); //adds exact characters if they don't exist
					updatedLines.push(newLine);
				}
			}
		}

		editor.edit((editBuilder) => {
			isSingleLine
				? editBuilder.replace(selection, updatedLines.join(","))
				: editBuilder.replace(
						new vscode.Range(startPoint, 0, endPoint, selectionLength),
						updatedLines.join("\n")
					);
		});
	});

	disposable = vscode.commands.registerCommand("extension.phraseMatch", function() {
		let editor = vscode.window.activeTextEditor;
		let lines = [];
		let updatedLines = [];
		let cleanLine;
		let newLine;
		let selectionLength;

		const selection = editor.selection;
		const startPoint = selection.start.line;
		const endPoint = selection.end.line;
		const isSingleLine = selection.isSingleLine;

		if (isSingleLine) {
			selectionLength = editor.document.getText(selection).length;
			lines = editor.document.getText(selection).split(",");
		} else {
			selectionLength = editor.document.lineAt(endPoint).text.length;
			for (let i = startPoint; i <= endPoint; i++) {
				lines.push(editor.document.lineAt(i).text);
			}
		}

		for (let i = 0; i < lines.length; i++) {
			if (lines[i]) {
				//if line exists

				lines[i].trim(); //removes leading or trailing whitespace from the line

				if (lines[i].includes("+") || lines[i].includes("[") || lines[i].includes("]")) {
					//removes non phrase characters from the line if they exist
					cleanLine = lines[i].replace(/\+|\[|\]/g, "");
				} else {
					cleanLine = lines[i];
				}

				if (lines[i].includes('"')) {
					//remove phrase syntax if it already exists
					newLine = cleanLine.replace(/"/g, "");
					updatedLines.push(newLine);
				} else {
					newLine = cleanLine.replace(/^/g, '"').replace(/$/g, '"'); //add phrase syntax if it doesn't exist
					updatedLines.push(newLine);
				}
			}
		}

		editor.edit((editBuilder) => {
			isSingleLine
				? editBuilder.replace(selection, updatedLines.join(","))
				: editBuilder.replace(
						new vscode.Range(startPoint, 0, endPoint, selectionLength),
						updatedLines.join("\n")
					);
		});
	});

	disposable = vscode.commands.registerCommand("extension.BMM", function() {
		let editor = vscode.window.activeTextEditor;
		let lines = [];
		let updatedLines = [];
		let cleanLine;
		let newLine;
		let selectionLength;

		const selection = editor.selection;
		const startPoint = selection.start.line;
		const endPoint = selection.end.line;
		const isSingleLine = selection.isSingleLine;

		if (isSingleLine) {
			selectionLength = editor.document.getText(selection).length;
			lines = editor.document.getText(selection).split(",");
		} else {
			selectionLength = editor.document.lineAt(endPoint).text.length;
			for (let i = startPoint; i <= endPoint; i++) {
				lines.push(editor.document.lineAt(i).text);
			}
		}

		for (let i = 0; i < lines.length; i++) {
			if (lines[i]) {
				lines[i].trim(); //removes leading or trailing whitespace from the line

				//removes non BMM characters from the line if they exist
				if (lines[i].includes("[") || lines[i].includes("]") || lines[i].includes('"')) {
					cleanLine = lines[i].replace(/\[|\]|"/g, "");
				} else {
					cleanLine = lines[i];
				}

				if (lines[i].includes("+")) {
					//removes BMM characters if they exist
					newLine = cleanLine.replace(/\+/g, "");
					updatedLines.push(newLine);
				} else {
					newLine = cleanLine.replace(/^/g, "+").replace(/\s/g, " +"); //adds BMM characters if they don't exist
					updatedLines.push(newLine);
				}
			}
		}

		editor.edit((editBuilder) => {
			isSingleLine
				? editBuilder.replace(selection, updatedLines.join(","))
				: editBuilder.replace(
						new vscode.Range(startPoint, 0, endPoint, selectionLength),
						updatedLines.join("\n")
					);
		});
	});

	disposable = vscode.commands.registerCommand("extension.broadMatch", function() {
		let editor = vscode.window.activeTextEditor;
		let lines = [];
		let updatedLines = [];
		let newLine;
		let selectionLength;

		const selection = editor.selection;
		const startPoint = selection.start.line;
		const endPoint = selection.end.line;
		const isSingleLine = selection.isSingleLine;

		if (isSingleLine) {
			selectionLength = editor.document.getText(selection).length;
			lines = editor.document.getText(selection).split(",");
		} else {
			selectionLength = editor.document.lineAt(endPoint).text.length;
			for (let i = startPoint; i <= endPoint; i++) {
				lines.push(editor.document.lineAt(i).text);
			}
		}

		for (let i = 0; i < lines.length; i++) {
			if (lines[i]) {
				lines[i].trim(); //removes leading or trailing whitespace from the line

				//removes all characters for BMM, exact, & phrase, reverts line to regular broad match
				if (
					lines[i].includes("+") ||
					lines[i].includes('"') ||
					lines[i].includes("[") ||
					lines[i].includes("]")
				) {
					newLine = lines[i].replace(/\+|\[|\]|"/g, "");
					updatedLines.push(newLine);
				} else {
					//if line is already broad match leave it unchanged
					newLine = lines[i];
					updatedLines.push(newLine);
				}
			}
		}

		editor.edit((editBuilder) => {
			isSingleLine
				? editBuilder.replace(selection, updatedLines.join(","))
				: editBuilder.replace(
						new vscode.Range(startPoint, 0, endPoint, selectionLength),
						updatedLines.join("\n")
					);
		});
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
};
