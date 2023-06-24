const path =  require('path') 

// console.log(path.basename(__filename))

// console.log(path.dirname(__filename))

// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

// join only returns a string with complete normalized path containing all the segments.
// it does not create a dir or file
console.log(path.join(__dirname, 'newFolder', 'test.html')) 

