process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const dataString = data.toString().trim()
    if (dataString === 'pwd'){
        let pwdStr = process.cwd().toString();
        process.stdout.write(pwdStr);
        process.stdout.write('\nprompt > ');
    } else {
        process.stdout.write('You typed: ' + dataString);
        process.stdout.write('\nprompt > ');
    }
});
