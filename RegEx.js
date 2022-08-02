        // // RegEx (Regular Expression)

let reg=/herry/;    //this is a regular expression literal in js
// reg=/herry/i //i means insensitive
// reg=/herry/g //g means global

console.log(reg);
console.log(reg.source)

let s="This a great code with herry and also with herry";

        // // Functions to match expression....

// // 1) exec():- this function will return array for match or null for no match

// let result =reg.exec(s);
// console.log(result)
result =reg.exec(s);
console.log(result)
// result =reg.exec(s);
// console.log(result) //we can use multiple exec() with global flag

// console.log(result.input)

// // 2) . test()-->Returns true or false
result=reg.test(s);
console.log(result)

// // 3) match()--> It wiil return an array of result or null

result=s.match(reg);
console.log(result)  // in global flag it will return an array of that perticular element ["herry","herry"]

//// 4) search()--> Returns index of first match or in else -1

result=s.search(reg);
console.log(result)

// 5) replace()--> Returns new replaced string with all the replacements(if no flag is given the first match will be replaced)

result=s.replace(reg,"meena")
console.log(result) 


        // // Let's look into some metacharaters symbols

let regex=/^harry/;  //^ means expressions will match if string starts with 
regex=/ry$/;  //$ at end of the string means "string ends with"
regex=/h.rry/ //. matches any one charater
regex=/h*rry/ //* matches any 0 or more charater
regex=/ha?rryi?/ // ? after charater means character is optional
regex=/h\*rry/ // now it is a natural asterisk(*) not a metacharacter

let str ="h*rry is harry";
 
let results=regex.exec(str);
console.log("the result from exec is",results);

if (regex.test(str)){
    console.log(`the string ${str} match with expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not match with expression ${regex.source}`)
}


        // // character sets :-we use []
let regular=/h[a-z]rry/ ; //can be any character from ato z
regular=/h[aty]rry/; // can be an a ,t or y
regular=/h[^aty]rry/ //cannot be any of a,t or y
regular=/h[^aty]rr[yYu]/; //can not be any of a,t or y + can be y,Y or u
regular=/h[a-zA-Z]rr[yu0-9][0-9]/; // we can hav eas many character sets as we want 

let str1="harry";

        //// quantifirs :- we use {}
regular=/har{2}y/ //r occurs exactly two times
regular=/har{0,2}y/ //r occurs exactly 0 to 2 (0 or 1 or 2) times

        // // grouping :-we use paranthese for grouping()
regular=/(har){2}([0-9]r){5}y/ //
str1="harhar1r2r3r4r5ry";

let results1=regular.exec(str1);
console.log("the result from exec is",results1);

if (regular.test(str1)){
    console.log(`the string ${str1} match with expression ${regular.source}`)
}
else{
    console.log(`The string ${str1} does not match with expression ${regular.source}`)
}