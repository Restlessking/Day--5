// For the above JSON,iterate over all for loops (for,for in,for of,for each loop):-

const PERSON={
    "name": "vicky",
    "gender":"Male",
    "place": "Chennai",
    "mobileNo":"0123456789",
    "email":"vigneshjayachandiran95@gmail.com",
    "work": "Mern Stack Devop",
    "hobby": ["Eating","Sleeping","Coding","cooking","playing cricket"]
 }

 const DATA=Object.entries(PERSON);   //The object.entries() method returns an Iterator object with the key/value pairs from an array:
//  console.log(DATA);

//For loop:-       // Going to print "hobby" array so using for loop

 for (let i=0;i<PERSON.hobby.length;i++)    // For condition slected "object name.array name.array length"
    {
        console.log(PERSON.hobby[i]);
    }

//For in loop:-

// for (key in PERSON)     //what shuold declare the variable name same as mentioned in key name
// {
//     console.log(PERSON[key]);
// }

//for of loop:-

// for (let [key,value] of DATA) 
//     {
//         console.log(key,value);
//     }

//For each loop:-

// Syntax:- array1.forEach((element) => console.log(element));

// DATA.forEach(details => {
//     const [key,value]=details;
//     console.log(key,value);
// })
