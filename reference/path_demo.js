const path =  require('path') 

// console.log(__filename) ///mnt/d/workspace/nodejs/reference/path_demo.js

// basename is the filename with extension
// console.log(path.basename(__filename)) //path_demo.js

// console.log(path.dirname(__filename)) // /mnt/d/workspace/nodejs/reference

// console.log(path.extname(__filename)) // .js

// console.log(path.parse(__filename))
// {
//   root: '/',
//   dir: '/mnt/d/workspace/nodejs/reference',

//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// } 

// join only returns a string with complete normalized path containing all the segments.
// it does not create a dir or file
console.log(path.join(__dirname, 'newFolder', 'test.html')) 
