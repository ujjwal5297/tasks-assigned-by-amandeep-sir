
// <<<<<<<<<<<<<<ex1>>>>>>>>>>>>
function ex1() {
    const ex1 = "The quick brown fox jumps over the lazy dog";
    const pattern = /\b\w{3}\b/g;
    const threeLetterWords = ex1.match(pattern);
    document.getElementById("demo").innerHTML = threeLetterWords;
}

// <<<<<<<<<<<<<<ex2>>>>>>>>>>>>
function ex2() {
    const ex2 = "A1B2C3D4E5F6G7H8I9J10";
    const regex = /\d+/g;
    const result = ex2.replace(regex, '');
    document.getElementById("demo").innerHTML = result;
}

// <<<<<<<<<<<<<<ex3>>>>>>>>>>>>

function ex3() {
    const ex3 = 'The salad costs $9.99';
    const regex = /\$\d+\.\d{2}/;
    const result = ex3.match(regex)
    document.getElementById('demo').innerHTML = result;
}

// <<<<<<<<<<<<<<ex4>>>>>>>>>>>>
function ex4() {
    const ex4 = 'Contact customer support on 0800 300 500';
    const regex = /\d{4} \d{3} \d{3}/g;
    const result = ex4.match(regex);
    document.getElementById('demo').innerHTML = result;
}

// <<<<<<<<<<<<<<ex5>>>>>>>>>>>>>>
function ex5() {
    const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
    const regex = /\b@[A-Za-z0-9-]{2,}/; 
    const result = ex5.match(regex);
    console.log(result);
    document.getElementById('demo').innerHTML = result;
}

// <<<<<<<<<<<<<<ex6>>>>>>>>>>>>
function ex6() {
    const ex6 = 'Grade 1Grade 2Grade 3Grade 4Grade 5';
    const regex = /Grade\s+\d/g
    const result = ex6.match(regex);
    document.getElementById('demo').innerHTML = result;
    console.log(result);
}

// <<<<<<<<<<<<<<ex7>>>>>>>>>>>>
function ex7() {
    const ex7 = 'The pheasant has no agenda';
    const regex = /agenda|age/g;
    const result = regex.test(ex7)
    console.log(result)
    if (result == true) {
        document.getElementById('demo').innerHTML = "Yes the string contains agenda or age";
    }
    else {
        document.getElementById('demo').innerHTML = 'Sting does not contain agenda or age';
    }
}

// <<<<<<<<<<<<<<ex8>>>>>>>>>>>>
function ex8() {
    const ex8 = '75, 50 : 123 / 900 - 321 + 900 = 55';
    const regex = /\d+/g;
    const result = ex8.match(regex);
    console.log(result);
    document.getElementById('demo').innerHTML = result;
}

// <<<<<<<<<<<<<<ex9>>>>>>>>>>>>
function ex9() {
    const ex9 = 'My name is: James';
    const regex = /:\s+\w+/
    // const regex = /(?<=:\s)\w+/
    const result = ex9.match(regex)
    console.log(result)
    document.getElementById('demo').innerHTML = result;
}

// <<<<<<<<<<<<<<ex10>>>>>>>>>>>>
function ex10() {
    const ex10 = `Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... Get me a scanning crew in here on the double. I want every part of this ship checked! Boy, it's lucky you've these compartments. I use them for smuggling. I never thought I'd be smuggling myself in them. This is ridiculous. Even if I could take off, I'd never get past the tractor beam.`
    const regex = /'\w+/g;
    const result = ex10.match(regex)
    document.getElementById('demo').innerHTML = result;
    console.log(result)
}