'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let newFile = vscode.commands.registerCommand('rcf.newFile', () => {
        vscode.commands.executeCommand('explorer.newFile');
    });
    context.subscriptions.push(newFile);

    let newFolder = vscode.commands.registerCommand('rcf.newFolder', () => {
        vscode.commands.executeCommand('explorer.newFolder');
    });
    context.subscriptions.push(newFolder);

}

export function deactivate() {
}
