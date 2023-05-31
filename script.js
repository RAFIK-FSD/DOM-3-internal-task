// Question: functional approach
// a. firstname
// b. middlename
// c. lastname
// d. email
// f. state

// creating label tag:
function labelelement (tagname, attrname, attrvalue, content) {
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

// Creating Break tag:
function linebreakers (tagname) {
    let ele = document.createElement(tagname);
    return ele;

}

// creating input tag:
function inputelement (tagname, attrname, attrvalue, attrname1, attrvalue1,) {
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    return ele;
}

// Firstname:
let firstnamelabel = labelelement('label', 'for', 'firstname', 'Firstname');
let linebreak1 = linebreakers('br');
let firstnameinput = inputelement('input', 'type', 'text', 'id', 'firstname')
let linebreak2 = linebreakers('br');

// Middlename:
let middlenamelabel = labelelement('label', 'for', 'middlename', 'Middlename');
let linebreak3 = linebreakers('br');
let middlenameinput = inputelement('input', 'type', 'text', 'id', 'middlename');
let linebreak4 = linebreakers('br');

// Lastname:
let lastnamelabel = labelelement('label', 'for', 'lastname', 'Lastname');
let linebreak5 = linebreakers('br');
let lastnameinput = inputelement('input', 'type', 'text', 'id', 'lastname');
let linebreak6 = linebreakers('br');

// Email:
let emaillabel = labelelement('label', 'for', 'email', 'Email');
let linebreak7 = linebreakers('br');
let emailinput = inputelement('input', 'type', 'email', 'id', 'email');
let linebreak8 = linebreakers('br');

// State:
let statelabel = labelelement('label', 'for', 'state', 'State');
let linebreak9 = linebreakers('br');
let stateinput = inputelement('input', 'type', 'text', 'id', 'state');
let linebreak10 = linebreakers('br');

document.body.append(firstnamelabel, linebreak1, firstnameinput, linebreak2, middlenamelabel, linebreak3, middlenameinput, linebreak4, 
    lastnamelabel, linebreak5, lastnameinput, linebreak6, emaillabel, linebreak7, emailinput, linebreak8, statelabel, linebreak9, stateinput, linebreak10);

 

