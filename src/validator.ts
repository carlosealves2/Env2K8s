import * as vscode from "vscode";

const isDotEnvFile = (document: vscode.TextDocument): boolean => {
  const fileName = document.fileName;
  const languageId = document.languageId;

  if (fileName.endsWith(".env") || languageId === "dotenv") {
    return true;
  }
  return false;
};

export { isDotEnvFile };
