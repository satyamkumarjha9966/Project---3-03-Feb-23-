const LinkedinUrlvalidator = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/gi;

const URL1 = 'https://www.linkedin.com/in/jane-doe'

if (LinkedinUrlvalidator.test(URL1)) {
    console.log(`${URL1} is Valid Linkdin Profile URL`);
}else {
    console.log(`${URL1} is Valid not a Linkdin Profile URL`);

}


// or (To check Multiple URL) .-------------------------------------------.


const UrlValidation = (URL) => {
    const URLVALIDATOR = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/gi;
    return URLVALIDATOR.test(URL); 
}

const URL = ['https://www.linkedin.com/in/john-doe-12345a', 'https://www.linkedcxcin.com/in/jane-cxc  doe']

URL.forEach((url) => {
    if (UrlValidation(url)){
    console.log('Valid Linkdin Profile URL');
    }else{
        console.log('Not a Valid Linkdin Profile URL');
    }
});