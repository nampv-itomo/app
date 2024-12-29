const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1120,
    // resizable: true,
    // frame: true,
    // fullscreen: true,
    // transparent: true,
    icon: path.join(__dirname, "public/logo192.png"), // Đường dẫn đến icon
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Tùy chọn
      contextIsolation: true, // Bật cách ly context để bảo mật
      enableRemoteModule: false, // Tắt module remote (không cần thiết)
      nodeIntegration: true,
    },
  });

  mainWindow.setMenuBarVisibility(false); // Ẩn menu bar

  ipcMain.on("toggle-full-screen", (event) => {
    const currentWindow = BrowserWindow.getFocusedWindow();
    if (currentWindow) {
      currentWindow.setFullScreen(!currentWindow.isFullScreen());
    }
  });

  // Load ứng dụng React đã build
  const appUrl = `file://${path.join(__dirname, "/build/index.html")}`;
  mainWindow.loadURL(appUrl);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
