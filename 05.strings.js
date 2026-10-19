const name="hiitesh"
const repoCount=50

// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

// const gameName= new String('kunal-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('a'));

// const newString=gameName.substring(-8,4)
// console.log(newString);

// const anotherString=gameName.slice(-8,4)
// console.log(anotherString);

// const newString1 = "  hitesh  "
// console.log(newString1);
// console.log(newString1.trim());

// const url ="https://study-mate-ai-capstone-eta.vercel.app/"
// console.log(url.replace('-eta',''))

// console.log(url.includes('sunder'))

// console.log(gameName.split('-'));

let str = "  Hello JavaScript  ";

str.length;                    // String ki length
str.at(1);                     // " "
str.charAt(2);                 // "H"
str.indexOf("Java");           // 8
str.includes("Script");        // true
str.startsWith("  He");        // true
str.endsWith("  ");            // true
str.slice(2, 7);               // "Hello"
str.substring(2, 7);           // "Hello"
str.toUpperCase();             // "  HELLO JAVASCRIPT  "
str.toLowerCase();             // "  hello javascript  "
str.trim();                    // "Hello JavaScript"
str.replace("Hello", "Hi");    // "  Hi JavaScript  "
str.replaceAll(" ", "-");      // Spaces ko hyphen se replace karega
str.split(" ");                // Separator ke basis par array
"Hi".concat(" ", "Bro");       // "Hi Bro"
"5".padStart(3, "0");          // "005"
"Ha".repeat(3);                // "HaHaHa"
"banana".lastIndexOf("a");     // 5
"hello".match(/l/g);           // ["l", "l"]
"hello".search(/e/);           // 1