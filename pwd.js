module.exports = function() {
    let pwdStr = process.cwd().toString();
    process.stdout.write(pwdStr);
    process.stdout.write("\nprompt > ");
};
