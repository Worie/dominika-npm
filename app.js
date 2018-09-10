const helloWorld = require('hello-world-npm');
const text = require('./text.js');

const fs = require('fs');
const path = require('path');
const url = require('url');

// JSON.parse(strObj, censor) 
// JSON.stringify(obj, censor) 

const config = require('./config.json');

const filePath = './text';
if (fs.existsSync(filePath)) {
  const fileContents = fs.readFileSync('./text').toString();
  const newFileContents = fileContents.replace(/ /g, '&');
  
  fs.writeFileSync('./text-modified', newFileContents);
} else {
  console.error(`File ${filePath} does not exists`);
}
// więcej na https://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position bądź @wojtek || @nullptr128
// fs.readdirSync('./');
// process.chdir();
// process.cwd();

const fileNameThatIWantToFind = `kotek.png`;

// ogarnąć zadanie z fibonnacim (rekurencja)
// a potem 👇

// (wywolywac rekurencyjnie)
// przejść do głównego katalogu w którym wiesz ze gdzies on byl
// zebrać wszystkie pliki i foldery z tego katalogu
// sprawdzic czy dany katalog zawiera plik o nazwie kotek.pmng
// jak nie to kontynuować 
// jak tak, to zwrócić pełną lokalizacje pliku (process.cwd() + kotek.png)


// fs.writeFileSync('./text.txt', newFileContents);
// console.log(config.API_URL);
