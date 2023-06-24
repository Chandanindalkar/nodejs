const fs = require('fs')
const path = require('path')

// // creates folder
// fs.mkdir(path.join(__dirname, 'test'), {}, function(err){
//     if(err) throw err;
//     console.log('folder created')
// })


// create & write file
// fs.writeFile(
//     path.join(__dirname, '/test', 'test.txt'),
//     'hello node', err => {
//         if(err) throw err
//         console.log('file created and written to')
//     }
// )

// // create & write file within a directory
// fs.writeFile(
//     path.join(__dirname, '/test/test2', 'test.txt'), // just pass the directory name without /
//     'hello node', 
//     err => {
//         if(err) throw err
//         console.log('file created and written to')
//     }
// )

// // just write file overrites everything present in a file
// fs.writeFile(
//     path.join(__dirname, '/test', 'test.txt'),
//     'hello node im overwriting your data', err => {
//         if(err) throw err
//         console.log('file overwritten to')
//     }
// )

// // to append data to a file without overwriting... use appedFile
// fs.appendFile(
//     path.join(__dirname, '/test', 'test.txt'),
//     '\nhello node im not overwriting your data, just appending', err => {
//         if(err) throw err
//         console.log('file appended')
//     }
// )//since its an async operation... nest append as callback

// // read data from a file
// fs.readFile(
//     path.join(__dirname, '/test', 'test.txt'), 'utf8', (err, data) => {
//         if(err) throw err
//         console.log(data)
//     }
// )

// rename a file
fs.rename(
    path.join(__dirname, 'test', 'test.txt'), path.join(__dirname, 'test', 'hello.txt'),
    err => {
        if(err) throw err
        console.log('file renamed')
    }
)

