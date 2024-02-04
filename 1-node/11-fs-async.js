const { log } = require('console');
const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8' , (err, result) => {
    if(err){
        console.log(err);
        return null;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return null;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return null;
                }
                console.log(result);
                console.log('done with the task');
            }
        );
    });
});
console.log('starting the next task'); 