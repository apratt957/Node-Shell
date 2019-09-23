process.stdout.write('prompt > ');
const pwd = require('./pwd');
const ls = require('./ls');

process.stdin.on('data', (data) => {
    const dataString = data.toString().trim()
    
    switch(dataString) {
        case 'pwd':
            pwd();
            break;
        case 'ls':
            ls();
            break;
        default:
            process.stdout.write('You typed: ' + dataString);
            process.stdout.write('\nprompt > ');
    }
});
