const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "app/preload.js"), // Tùy chọn
      nodeIntegration: true, // Để sử dụng các API của Node.js
    },
  });

  // Load ứng dụng React đã build
  const appUrl = `file://${path.join(__dirname, "/build/index.html")}`;
  mainWindow.loadURL(appUrl);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
