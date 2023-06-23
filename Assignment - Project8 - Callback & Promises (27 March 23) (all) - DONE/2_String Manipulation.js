function manipulateString(str, logString) {
    const manipulatedStr = str.toUpperCase();
    return logString(manipulatedStr)
}

function logString(manipulatedStr) {
    console.log(`The manipulated string is: ${manipulatedStr}`);
}

manipulateString('hello world', logString)    // The manipulated string is: HELLO WORLD
