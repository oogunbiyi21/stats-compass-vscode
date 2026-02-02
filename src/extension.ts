import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider('stats-compass', {
      provideMcpServerDefinitions(): vscode.McpServerDefinition[] {
        return [
          new vscode.McpStdioServerDefinition(
            'stats-compass',
            'uvx',
            ['stats-compass-mcp', 'run']
          )
        ];
      }
    })
  );
}

export function deactivate() {}
