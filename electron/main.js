const path = require("path");

//一、引入electron模块，并导入app和BrowserWindow对象
let {
    app,
    BrowserWindow
} = require("electron");

const VITE_PORT = process.env.VITE_PORT  //新增

//二、创建主窗口
let mainWindow = null;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        //开启渲染进程访问node模块
        webPreferences: {
            nodeIntegration: true, // 开启在渲染进程中融入node
            contextIsolation:false, // 关闭上下文隔离
            enableRemoteModule:true,  // 开启可在渲染进程中直接引入node模块
        }
    });

    /*根据不同开发环境加载不同index.html*/
    if(app.isPackaged){
        mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
    }else{
        mainWindow.loadURL(`http://localhost:${VITE_PORT}`)
        // 打开 DevTools
        mainWindow.webContents.openDevTools({mode:'undocked'});
        // 消除electron控制台警告
        process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
    }
}


// 三、app事件监听
// electron准备就绪事件
app.on('ready', createWindow);

//软件复活事件：兼容 macOS
//当 Linux 和 Windows 应用在没有窗口打开时退出了，macOS 应用通常即使在没有打开任何窗口的情况下也继续运行，并且在没有窗口可用的情况下激活应用时会打开新的窗口。
// 为了实现这一特性，监听 app 模块的 activate 事件
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// linux or windows
// 在Windows和Linux上，关闭所有窗口通常会完全退出一个应用程序。
app.on('window-all-closed',function(){
    //不是在 macOS
    if (process.platform !== 'darwin') app.quit()
});