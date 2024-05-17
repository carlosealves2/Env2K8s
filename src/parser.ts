import * as vscode from "vscode";

const envParser = (envText: string): string => {
    const lines = envText.split("\n");

  let envVariables: Array<string> = [];

  lines.forEach((line) => {
    if (line.trim() === "" || line.startsWith("#")) {
      return;
    }

    const [key, value] = line.split("=");

    envVariables.push(
      `            - name: ${key.trim()}\n              value: "${value.trim()}"`
    );
  });

  return `          env:\n${envVariables.join("\n")}`;
};

export { envParser };