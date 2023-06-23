setTimeout(() => {
    const string = "satyam";
    const splitInArrayString = string.split("");  
    const reverseArrayString = splitInArrayString.reverse();
    const joinArrayString = reverseArrayString.join(""); 
    console.log(joinArrayString);
}, 2000);

