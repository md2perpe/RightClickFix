'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        
        vscode.commands.registerCommand('rcf.newFile', () => {
            vscode.commands.executeCommand('explorer.newFile');
        }),
        
        vscode.commands.registerCommand('rcf.newFolder', () => {
            vscode.commands.executeCommand('explorer.newFolder');
        })
        
    );
}

export function deactivate() {
}
