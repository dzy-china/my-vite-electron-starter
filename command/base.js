const { exec } = require('child_process');

module.exports = (command)=>{
    // 执行命令
    const child = exec(command, { maxBuffer: 1024 * 1024 }); // 避免内存溢出设置允许的最大缓存大小


    child.stderr.on('data', (data) => {
        console.error(data);
    });

    child.stdout.on('data', (data) => {
        console.log(data);
    });

    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
}
