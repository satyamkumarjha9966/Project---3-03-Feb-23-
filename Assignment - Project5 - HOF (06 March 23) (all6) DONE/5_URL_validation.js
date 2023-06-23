// Making Regexp Program to varify URL 
const URLvalidator = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

const URL1 = 'https://saty22@@am.codsvfcm/'

if (URLvalidator.test(URL1)) {
    console.log("This is a Valid URL");
}else {
    console.log("This is not a Valid URL");
}


// or (To check Multiple URL) .-------------------------------------------.


function URLvalidatingRegEx(URL) {
    const URLvalidator = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
    return URLvalidator.test(URL)
}

const URL = ['https://saty22@@am.codsvfcm/', 'https://saty22@@am.com/']

URL.forEach((url) => {
    if (URLvalidatingRegEx(url)) {
        console.log("Valid URL");
    }else {
        console.log("Not a Valid URL");
    }
});