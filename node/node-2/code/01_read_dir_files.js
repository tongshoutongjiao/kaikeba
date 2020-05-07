// 接收命令行参数，根据该目录，读取目录下的所有文件并输出（遍历文件夹）
const path = require('path');
const fs = require('fs');
 //引入别人包的入口的文件



// 1: 接收命令行参数  node ./01_read_dir_files.js .//xxx//xxx//xx
// 2: 修正该路径 path.resolve(process.agrv[2]);
let inputPath = path.resolve(process.argv[2]);
// 3: 判断该路径是否存在 fs.access(fs.constants.F_OK)
                        // ./a/b
  function testReadFiles(dir) {   //  ./a/b
    try {

        //  判断当前目录中是否存在该文件
        fs.accessSync(dir, fs.constants.F_OK);

        //  判断是否是文件夹
        let state = fs.statSync(dir); //a

        // console.log('文件夹对象');
        // console.dir(state);

        //  判断是否是文件夹
        if (state.isFile()) {
            console.log(dir);
        } else if (state.isDirectory()) {
          
            //  读取文件夹
            let files = fs.readdirSync(dir);  // ./a  
            
            // console.log(files);
         
          
            files.forEach( file => {
                console.log(path.join(dir,file))
                testReadFiles(path.join(dir,file)); 
            });
        }
    } catch (e) {
        console.log(e);
        console.log('该文件或文件夹不存在!');
    }
}

// 只判断一次
// fs.accessSync(dir, fs.constants.F_OK);
testReadFiles(inputPath);