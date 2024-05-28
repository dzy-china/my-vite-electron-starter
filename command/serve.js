// 加载环境变量，通过 process.env.VITE_PORT 获取值
require('dotenv').config();

// 命令字符串
const command = `concurrently -k "vite" "wait-on tcp:${process.env.VITE_PORT} && electron ."`;

// 运行命令
require('./base')(command);