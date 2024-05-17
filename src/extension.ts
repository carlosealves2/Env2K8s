import * as vscode from "vscode";
import { isDotEnvFile } from "./validator";
import { envParser } from "./parser";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "env2k8s" is now active!');

  let disposable = vscode.commands.registerCommand(
    "env2k8s.parseEnv",
    async () => {
      const activeEditor = vscode.window.activeTextEditor;

      if (activeEditor) {
		const document = activeEditor.document;

		if (isDotEnvFile(document)) {
			const text = document.getText();
			const parsedText = envParser(text);
			const newDocument = await vscode.workspace.openTextDocument({
				content: parsedText
			});

			await vscode.window.showTextDocument(newDocument);
		} else {
			vscode.window.showInformationMessage("This is not a .env file");
		}
      } else {
        vscode.window.showInformationMessage("No acitve editor");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
