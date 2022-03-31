// PATH module
const path = require('path')

//separator property chge torna la platform separata!
console.log(path.sep);

// join sequence of path sequence!
// creo ora un nuovo FOLDER e folder e test file
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);

// posso anche avere solo il base name
const base = path.basename(filePath)
console.log(base);

//return absolute path e serve saperlo per fare server tipo...
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);