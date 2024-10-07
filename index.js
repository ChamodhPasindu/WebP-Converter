const fs = require('fs');
const exec = require('child_process').execFileSync;
const folders = fs.readdirSync('./images');


for(let i = 0 ; i < folders.length ; i++) {
    if (!fs.existsSync(`./output/${folders[i]}`)) {
        fs.mkdirSync(`./output/${folders[i]}`);
    }
    

    const files = fs.readdirSync('./images/' + folders[i]);
    
    for(let j = 0 ; j < files.length ; j++) {
        exec('cwebp.exe', ['-q','80', `./images/${folders[i]}/${files[j]}`, '-o', `./output/${folders[i]}/${files[j].split('.')[0]}.webp`], {});
    }
}

// 