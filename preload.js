const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("electronAPI", {
  toggleFullScreen: () => ipcRenderer.send("toggle-full-screen"),
});
