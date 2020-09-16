const {
  app,
  Menu,
  BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')

// 避免JavaScript对象被垃圾回收(暂时不太清楚有没有必要)
let mainWindow

// Menu.setApplicationMenu(null)

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  // 也可以隐藏menu
  // mainWindow.menuBarVisible = false

  //  * 加载应用-----  electron-quick-start中默认的加载入口
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))

  // 加载应用
  mainWindow.loadURL('http://localhost:3000/');

  // 开发者工具
  // mainWindow.webContents.openDevTools()

  // 关闭window时触发下列事件.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})

// 你可以在这个脚本中续写或者使用require引入独立的js文件.
