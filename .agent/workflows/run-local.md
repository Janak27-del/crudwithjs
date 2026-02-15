---
description: How to run the project locally
---

# How to Run the Project

Since this project uses modern JavaScript modules (`type="module"` in `index.html`), it **cannot** be run directly by opening the file in a browser. It requires a local web server.

## Option 1: VS Code Live Server (Fastest)

1.  Open the **Extensions** view in VS Code (`Ctrl+Shift+X`).
2.  Search for **"Live Server"** (by Ritwick Dey).
3.  Install it.
4.  Right-click on `index.html` in your file explorer.
5.  Select **"Open with Live Server"**.

## Option 2: Python Simple HTTP Server (No install needed)

Since you have Python installed, you can run a server directly from the terminal.

1.  Open your terminal in VS Code (`Ctrl+` `).
2.  Run the following command:
    ```powershell
    python -m http.server 8080
    ```
// turbo
3.  Open your browser and go to: [http://localhost:8080](http://localhost:8080)

## Option 3: Node.js `http-server`

1.  Open your terminal.
2.  Run:
    ```powershell
    npx http-server
    ```
3.  It will verify installation if needed (press `y`), then show you the URL (usually `http://127.0.0.1:8080`).

## Why your Debugger didn't work

Your `.vscode/launch.json` is configured to look for a server at `http://localhost:8080`:

```json
"url": "http://localhost:8080",
```

But **VS Code does not automatically start a server for you** with this configuration. You must start the server (using one of the methods above) *before* you press F5 to debug.
