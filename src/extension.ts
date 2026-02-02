import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    // Check if uvx is available
    exec('which uvx', (error) => {
        if (error) {
            vscode.window.showWarningMessage(
                'Stats Compass requires UV to run. Install it to use the MCP server.',
                'Install UV'
            ).then(selection => {
                if (selection === 'Install UV') {
                    vscode.env.openExternal(vscode.Uri.parse('https://docs.astral.sh/uv/getting-started/installation/'));
                }
            });
        }
    });

    // Register the MCP server
    context.subscriptions.push(
        vscode.lm.registerMcpServerDefinitionProvider('stats-compass', {
            provideMcpServerDefinitions(): vscode.McpServerDefinition[] {
                return [
                    new vscode.McpStdioServerDefinition(
                        'Stats Compass',
                        'uvx',
                        ['stats-compass-mcp', 'run']
                    )
                ];
            }
        })
    );
}

export function deactivate() { }
