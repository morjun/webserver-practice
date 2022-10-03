const fs = require('fs');
const path = require('path');

// fs (File System): readdir, stat, stats.isDirectory
// • path: extname, join

const recursive_readDir = (dir) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err)
        }
        else {
            for (let i = 0; i < files.length; i++) {
                fs.stat(path.join(dir, files[i]), (err, stats) => {
                    if (err) {
                        console.error(err)
                    }
                    else{
                        if (stats.isDirectory()) {
                            recursive_readDir(path.join(dir, files[i]));
                        }
                        else if (path.extname(files[i]) === '.js') {
                            console.log(`${path.join(dir, files[i])}`);
                        }
                    }
                })
            }
        }
    })
}

recursive_readDir('test');