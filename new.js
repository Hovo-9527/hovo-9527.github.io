 Պարզ խաղի ստեղծում

let points = 0;

let resp0 = prompt("What is the capital of Armenia?");

if(resp0 === "Yerevan") {
  points = points + 1;
}

let resp1 = prompt("What is the capital of Russia?");

if(resp1 === "Moscow") {
  points = points + 1;
}

let resp2 = prompt("What is the capital of France?");

if(resp2 === "Paris") {
  points = points + 1;
}

alert("You received "+points+" out of 3");


* Tic Tac Toe խաղի տրամաբանությունը
* Ինչպես ստանալ հաջորդ քայլը
* Տախտակը նկարագրելու համար կօգտագործենք երկչափ զանգված
* Հիմնական խաղի տրամաբանությունը `պայմանների հայտարարմամբ

Առաջադրանք
-------------------------

Խնդրում ենք ավարտին հասցնել Tic Tac Toe խաղը։  Փորձեք լինել ստեղծարար և ավելացրեք ինչքան կարող եք շատ նոր հնարավորություններ։ 

Կոդի օրինակ




let board = [
    [ "_", "_", "_" ],
    [ "_", "_", "_" ],
    [ "_", "_", "_" ]
  ];
  
  let player = "x";
  
  while(true) {
    let boardStr = board[0].join("   ") + 
         "\n" + 
         board[1].join("   ") +
         "\n" +
         board[2].join("   ");
       
    let row = +prompt("Dear user, please provider the value for the row \n\n"+boardStr);
    
    let column = +prompt("Dear user, please provider the value for the column \n\n"+boardStr);
    
    if(board[row][column] !== "_") {
      alert("Not a legal move, you lose!");
      break;
    }
    
    board[row][column] = player;
    
    if(player === "x") {
      player = "o";
    } else {
      player = "x";
    }
       
  }





  /*
Ստեղծել ֆունցկիա, getAvgAgeByColor անունով,  որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտ է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, տարիք, մազերի գույն) եվ ստանում է երկրորդ արգումենտ մազերի գույն։  Ֆունկցիան պետք է վերադարձնի միջին տարիքը այն մարդկանց ում մազերի գույնը համապատասխանում է երկրորդ արգումենտով փոխանցված գույնին։

օրինակ։ 
getAvgAgeByColor([
	{name: "Joe", age: 13, hairColor: "red"}, 
	{name: "Mike", age: 10, hairColor: "brown"}, 
	{name: "Jane", age: 4, hairColor: "red"}, 
	{name: "Susan", age: 30, hairColor: "brown"}
], "brown"); // պետք է վերադարձնի 20,  միջին տարիքը այն մարդկանց ում մազերի գույնը շագանակագույն է։
*/

function getAvgAgeByColor(arr, hairColor) {
  let filteredArray = arr.filter(function(obj) {
    return obj.hairColor === hairColor;
  });
  
  let totalAge = filteredArray.reduce(function(aggr, obj) {
    return aggr + obj.age;
  }, 0);
  
  return totalAge / filteredArray.length;
}

alert(getAvgAgeByColor([
	{name: "Joe", age: 13, hairColor: "red"}, 
	{name: "Mike", age: 10, hairColor: "brown"}, 
	{name: "Jane", age: 4, hairColor: "red"}, 
	{name: "Susan", age: 30, hairColor: "brown"}
], "brown"));














/*
Ստեղծել ֆունկցիա getPersonWithMostFriendsByName անունով , որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտ է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, ընկերների ցուցակ) եվ ստանում է երկրորդ արգումենտ անուն։ Ֆունկցիան պետք է վերադարձնի այն մարդու անունը ով ունի ամենաշատ քանակությամբ ընկերներ տրված անունով (երկրորդ արգումենտով փոխանցած անունը)։ 

getPersonWithMostFriendsByName([
	{
  name: "Joe", 
  friends: [
{name: "Susan", age: 12}, 
{name: "Jane", age: 43}, 
{name: "Susan", age: 33}
   ]
 			}, 
	{
  name: "Liz", 
  friends: [
{name: "Mila", age: 12}, 
{name: "Susan", age: 43}, 
{name: "Jane", age: 33}
   ]
 			},
{
  name: "Mike", 
  friends: [
{name: "Susan", age: 12}, 
{name: "Susan", age: 43}, 
{name: "Susan", age: 33}
   ]
 			}
], "Susan"); // պետք է վերադարձնի “Mike”, քանի որ նա ունի ամենաշատ քանակությամբ ընկերներ Susan անունով։
*/


function getPersonWithMostFriendsByName(people, friendName) {
  let filteredPeople = people.map(function(personObj) {
    return {
      name: personObj.name,
      count: personObj.friends.filter(function(friendObj) {
        return friendObj.name === friendName;
      }).length
    };
  });
  
  const max = filteredPeople.reduce(function(aggr, obj) {  // name, count
    if(aggr === undefined) {
      return obj;
    }
    if(obj.count > aggr.count) {
      return obj;
    }
    return aggr;
  }, undefined);
  
  return max.name;
}

alert(getPersonWithMostFriendsByName([
	{
  name: "Joe", 
  friends: [
{name: "Susan", age: 12}, 
{name: "Jane", age: 43}, 
{name: "Susan", age: 33}
   ]
 			}, 
	{
  name: "Liz", 
  friends: [
{name: "Mila", age: 12}, 
{name: "Susan", age: 43}, 
{name: "Jane", age: 33}
   ]
 			},
{
  name: "Mike", 
  friends: [
{name: "Susan", age: 12}, 
{name: "Susan", age: 43}, 
{name: "Susan", age: 33}
   ]
 			}
], "Susan"));
       









/*
Գրել ֆունկցիա removeAtIndex անունով, որը կստանա զանգված ու թիվ և կվերադարձնի նոր զանգված: Նոր զանգվածը կպարունակի առաջինի բոլոր արժեքները, բայց տրված թվով ինդեքսի արժեքը հեռացված կլինի:

	Օրինակ՝
	
	removeAtIndex([5, 10, 15, 20], 2); // վերադարձնում է [5, 10, 20]
*/

function removeAtIndex(arr, index) {
  return arr.filter(function(val, i) {
    return i !== index;
  });
}

alert(removeAtIndex([5, 10, 15, 20], 2));







/*
Գրեք ֆունկցիա toNumber անունով, որն ընդունում է բինարյան string և վերադաձնում տվային արժեք, որն համարժեք է հաշվարկման երկուական համակարգի թվերին։ Կարդացեք բինարյան տվերն աջից դեպի ձախ։
Բինարյան թվերի մասին կարող եք կարդալ գուգլից։

Օրինակ՝

  toNumber("101") պետք է վերադարձնի 5
  toNumber("111") պետք է վերադարձնի 7

*/
function toNumber(binaryStr) {
  return binaryStr.split("") // ["1", "0", "0", "1", "0", "1"]
                  .reverse() // ["1", "0", "1", "0", "0", "1"]
                  .map(function(val, i) {
                     if(val === "1") {
                       return Math.pow(2, i);
                     } 
                     return 0;
                  })
                  .reduce(function(aggr, val) {
                    return aggr + val;
                  }, 0);
}


alert(toNumber("100101"));





/*
հավելյալ ինֆորմացիա:
Տրված նախադասության վրա կարող ենք օգտագործել search ֆունկիցան գտնելու համար մեզ հետաքրքրող տեքստի ինդեքսը։ Օրինակ.
"Hello world".search("world"); // կվերդարձնի 6
եթե փնտրվող տեքստը առկա չէ նախադասության մեջ կվերդարձնի -1.  Օրինակ:
"Hello world".search("pizza"); // կվերդարձնի -1

Օգտագործեք search ֆունկցիան ՝ ստեղծելու համար find ֆունկցիա, որը որպես արգումենտ ստանում է զանգված բաղկացած օբյեկտներից, եւ փնտրվող տեքստը որպես երկրորդ արգումենտ։ Ֆունկցիան պետք է վերադարձնի զանգված, որը կպարունակի բոլոր այն օբյեկտները որոնց մեջ առկա է փնտրվող տեքստը որպես արժեք։ Ենթադրեք որ արգումենտում ստացած զանգվածի օբյեկտները չունեն ներկառուցված(nested) օբյեկտներ կամ զանգվածներ։

Հուշում։ Օգտագործեք Object.keys , օբյեկտի բանալիները զանգվածի մեջ ունենալու համար, որոնց վրայով կարող եք ցիկլ պտտվել եւ գտնել համապատասխանողները

Օրինակ: 

find([
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Orange", color: "orange" },
  { name: "Apple", color: "yellow" }
], "yellow"); // this should return [{ name: "Banana", color: "yellow" }, { name: "Apple", color: "yellow" }]

find([
  { title: "White Fang", author: "Jack London" },
  { title: "The Adventures of Tom Sawyer", author: "Mark Twain" }
], "Twain"); // this should return [{ title: "The Adventures of Tom Sawyer”, author: "Mark Twain" }]
*/

function find(arr, searchText) {
  return arr.filter(function(obj) {
    const values = Object.values(obj);
    for(let i = 0; i < values.length; i++) {
      const valueTxt = ""+values[i];
      if(valueTxt.search(searchText) !== -1) {
        return true;
      }
    }
    return false;
  });
}

alert(JSON.stringify(find([
  { name: "Apple", color: "red" },
  { name: "Banana", color: "my favorite color is yellow" },
  { name: "Orange", color: "orange" },
  { name: "Apple", color: "yellow" }
], "yellow")));




/*

Ստեղծել ֆունկցիա magic անունով, որն ընդունում է արգումենտ որպես օբյեկտ, և վերադարձնում նոր օբյեկտ, որտեղ բանալիները(keys) կդառնան արժեքներ(values), իսկ արժեքնեը(values) բանալիներ(keys)։

Օրինակ՝

  magic({
    firstName: "Michael",
    lastName: "Jackson"
  });

// պիտի վերադարձնի:

  {
    Michael: "firstName",
    Jackson: "lastName"
  }

*/

function magic(obj) {
  return Object.keys(obj).reduce(function(aggr, key) {
    aggr[obj[key]] = key;
    return aggr;
  }, {});
}






/*
Ստեղծեք ֆունկցիա, անվանեք diamond, որը կստեղծի տեքստ որը նման կլինի ադամանդի, որտեղ ադամանդի բարձրությունը ֆունկցիային տրված կենտ թիվն է որպես արգումենտ. Տրված թիվը միշտ պետք է լինի դրական, կենտ եւ ամբողջ թիվ։
 
Հուշում: Երբ նախադասության մեջ առկա է “\n” ապա այն տեղափոխելու է նոր տող 
Օրինակ: 
  alert(diamond(5)); // Կվերադարձնի հետեւյալը

      *
     ***
    *****
     ***
      *
*/

function spaces(num) {
  let str = "";
  for(let i = 0; i < num; i++) {
    str += " ";
  }
  return str;
}

function stars(num) {
  let str = "";
  for(let i = 0; i < num; i++) {
    str += "*";
  }
  return str;
}

function diamond(height) {
  let str = "";
  
  let topSpaces = height/2-1;
  for(let i = 1; i <= height; i += 2) {
    str += spaces(topSpaces) + stars(i) + "\n";
    topSpaces--;
  }
  
  let bottomSpaces = 1;
  for(let x = height-2; x > 0; x -= 2) {
    str += spaces(bottomSpaces) + stars(x) + "\n";
    bottomSpaces++;
  }
  
  return str;
}

alert(diamond(5));




/*
Գրել ֆունկցիա pow անունով, որը կստանա երկու թիվ, և առաջին թիվը կբազմապատկի ինքն իրենով այնքան անգամ, որքան երկրորդ թիվն է: Չօգտագործել Math.pow ֆունկցիան, այլ գրել այն ինքնուրույն:

Օրինակ՝

  pow(5, 3); // վերադարձնում է 125 (5 * 5 * 5)
  pow(3, 2); // վերադարձնում է 9 (3 * 3)
*/


function pow(num1, num2) {
  let result = num1;
  while(num2 > 1) { 
    result *= num1;
    num2--;
  }
  return result;
}

alert(pow(2, 4));





* Ինչպես պարզել տարբեր արժեքների տեսակները

Կոդի օրինակ
-------------------------

    typeof(33) // "number"
    typeof("hello world") // "string"
    typeof(function() {}) // "function"
    typeof({}) // "object"
    typeof(true) // "boolean"
    typeof(undefined) // "undefined"

    typeof([]) // "object"
    Array.isArray([]) // true

    typeof(NaN) // "number"
    isNaN(NaN) // true

    let a = null;
    typeof(a) // "object"
    a === null // true




    /*

    Ստեղծել forEach անունով ֆունկցիա, որը կգործի ճիշտ այնպես, ինչպես Array.forEach. խնդրում ենք օգտագործել ռեկուրսիա!!!
    
    Օրինակ
    forEach([5, 4, 3], function(val, index) {
      alert(val);
    });
    
    */
    
    function forEach(arr, func) {
      
      function loop(i) {
        if(i >= arr.length) {
          return;
        }
        func(arr[i], i);
        loop(i + 1);
      }
      loop(0);
    }
    
    forEach([5, 4, 3], function(val, i) {
      alert(val + " at index " + i);
    });


    /*

    Ստեղծել sum անունով ֆունկցիա, որը գումարվում է զանգվածի բոլոր արժեքները: Նշենք, որ զանգվածը որպես արժեք կարող է ունենալ զանգված:
    Մի օգտագործեք Array.flat
    
    Օրինակ
    sum([ 4, 3, [8, 2], [3, 6, [9, 12, 33], 6 ], 7, 8, 9 ]) // 110
    
    */
    
    function sum(arr) {
      return arr.reduce(function(aggr, val) {
        if(Array.isArray(val)) {
          return aggr + sum(val);
        }
        return aggr + val;
      }, 0);
    }
    
    alert(sum([ 4, 3, [8, 2], [3, 6, [9, 12, 33], 6 ], 7, 8, 9 ]));










            Առաջադրանք
        --------------------------

        Ստեղծել «stringifyJSON» անունով ֆունկցիա, որն ընդունում է օբյեկտ, որը կարող է ունենալ կամայական խորությամբ ենթաօբյեկտներ և զանգվածներ, և վերադարձնում է JSON տեքստ։ Ձեր ֆունկցիան պետք է վերադարձնի այն, ինչ վերադարձնում է\  JSON.stringify ֆունկցիան, բայց բնականաբար JSON.stringify֊ը Ձեր ֆունկցիայի ներսում օգտագործելու իրավունք չունեք :)

        Հուշում՝ օգտագործել ռեկուրսիա և յուրաքանչյուր արժեքի համար ստուգել դրա տիպը՝ համապատասխան որոշում կայացնելու համար։

        ---

        Implement a function called stringifyJSON which takes an object that can have an arbitrarily deep nesting of objects and arrays and converts it into a valid JSON string.  The output of calling your stringifyJSON should be the same as calling JSON.stringify with the same input.  Do not use JSON.stringify, write the logic yourself.

        Hint: Use recursion and check the types of each value to serialize it correctly

        ---

        Օրինակ Ձեր ֆունկցիան ստուգելու համար՝
        Sample data you can use to test your code:

            let sampleData = {
            "destination_addresses": [
                "Washington, DC, USA",
                "Philadelphia, PA, USA",
                "Santa Barbara, CA, USA",
                "Miami, FL, USA",
                "Austin, TX, USA",
                "Napa County, CA, USA"
            ],
            "origin_addresses": [
                "New York, NY, USA"
            ],
            "rows": [{
                "elements": [{
                    "distance": {
                    "text": "227 mi",
                    "value": 365468,
                    "isFar": true
                    },
                    "duration": {
                    "text": "3 hours 54 mins",
                    "value": 14064
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                    "text": "94.6 mi",
                    "value": 152193
                    },
                    "duration": {
                    "text": "1 hour 44 mins",
                    "value": 6227
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                    "text": "2,878 mi",
                    "value": 4632197
                    },
                    "duration": {
                    "text": "1 day 18 hours",
                    "value": 151772
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                    "text": "1,286 mi",
                    "value": 2069031
                    },
                    "duration": {
                    "text": "18 hours 43 mins",
                    "value": 67405
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                    "text": "1,742 mi",
                    "value": 2802972
                    },
                    "duration": {
                    "text": "1 day 2 hours",
                    "value": 93070
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                    "text": "2,871 mi",
                    "value": 4620514
                    },
                    "duration": {
                    "text": "1 day 18 hours",
                    "value": 152913
                    },
                    "status": "OK"
                }
                ]
            }],
            "status": "OK"
            }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
function stringifyJSON(input) {
    // undefined
    if(input === undefined) {
       return input;
    }
    
    // null
    if(input === null) {
      return "null"; // 
    }
    
    
    // NaN
    // number
    if(typeof(input) === "number") {
      if(isNaN(input)) {
        return "null";
      }
      
      return "" + input;
    }
    
    // boolean
    if(typeof(input) === "boolean") {
      return "" + input;
    }
    
    // string
    if(typeof(input) === "string") {
      return "\"" + input + "\"";
    }
    
    
    // array
    if(Array.isArray(input)) {
      return "[" + input.map(function(val) {
        if(val === undefined) {
          return null;
        }
        return val;
      }).filter(function(val) {
        return typeof(val) !== "function";
      }).map(stringifyJSON).join(",") + "]";
    }
    
    // object
    return "{" + Object.keys(input).filter(function(key) {
      return typeof(input[key]) !== "function" &&
        input[key] !== undefined;
    }).map(function(key) {
      const value = input[key];
      return "\"" + key + "\":" + stringifyJSON(value);
    }) + "}";
  }
  
  const data = {
    d: [1, 2, undefined, 3, 4],
    a: null,
    b: NaN,
    c: undefined,
    "destination_addresses": [
      "Washington, DC, USA",
      "Philadelphia, PA, USA",
      "Santa Barbara, CA, USA",
      "Miami, FL, USA",
      "Austin, TX, USA",
      "Napa County, CA, USA"
    ],
    "origin_addresses": [
      "New York, NY, USA"
    ],
    "rows": [{
      "elements": [{
          "distance": {
            "text": "227 mi",
            "value": 365468,
            "isFar": true
          },
          "duration": {
            "text": "3 hours 54 mins",
            "value": 14064
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "94.6 mi",
            "value": 152193
          },
          "duration": {
            "text": "1 hour 44 mins",
            "value": 6227
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "2,878 mi",
            "value": 4632197
          },
          "duration": {
            "text": "1 day 18 hours",
            "value": 151772
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "1,286 mi",
            "value": 2069031
          },
          "duration": {
            "text": "18 hours 43 mins",
            "value": 67405
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "1,742 mi",
            "value": 2802972
          },
          "duration": {
            "text": "1 day 2 hours",
            "value": 93070
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "2,871 mi",
            "value": 4620514
          },
          "duration": {
            "text": "1 day 18 hours",
            "value": 152913
          },
          "status": "OK"
        }
      ]
    }],
    "status": "OK"
  };
  
  
  alert(JSON.stringify(data) === stringifyJSON(data));




  Կոդի օրինակներ
-------------------------------

    function func(a) {
        alert(this);
        alert(a);
    }

    const obj = {
      func: func
    };

    // obj.func(5); // this = obj

    // func(5); // this = window/undefined

    // func.apply(obj, [5]); // this = obj
    //  func.call(obj, 5);      // this = obj

    // const boundFunc = func.bind(obj);
    //  boundFunc(5);

    // new func(5); // this = {}












    // վարժություն 1
// Փոխեք այս կոդը այնպես, որ այն alert անի 45

const a = {
  age: 23,
  foo: function(arr) {
    arr.forEach(function(val) {
      alert(this.age + val);
    }.bind(this));
  }
};

a.foo([22]);




// վարժություն 1
//   -Մաքրեք այս կոդը
//   -Ինչ է արդյունքը?

const a = {
  age: 22,
  name: "Joe",
  getName: function() {
    return this.name;
  },
  getAge: () => {
    return this.age;
  }
};

alert(a.getName());
alert(a.getAge()); 




// վարժություն 2
//   -Մաքրեք այս կոդը
//   -Ինչ է արդյունքը?

window.name = "Khachatur"; // this.name = "Khachatur"

const f = () => this.name;

const a = {
  name: "Mike"
};

alert(f.call(a));



// վարժություն 3
//   -Մաքրեք այս կոդը
//   -Ինչ է արդյունքը?

function f() {
  return () => {
    return this.age;
  };
}

const a = {
  age: 22
};

const z = f.call(a);
alert(z());




// վարժություն 4
//   -Մաքրեք այս կոդը

let a = [5, 40, 29, 44, 33];

function o() {
  let b = [];
  a.map(function(val) {
    b.push(val + 1);
  });

  let z = b.filter(function(val) {
    return val % 2 === 0;
  });
  
  return z;
}



// վարժություն 1

let x = 7;

function a(y) {
  return x + y;
}

function b(z) {
  let x = 99;
  return z(4);
}

alert(b(a)); // Ի՞նչ կցուցադրի





// վարժություն 2

function a(x) {
   return (y) => x + y;
}

alert(a(2)(4)); // Ի՞նչ կցուցադրի




// վարժություն 3

function a(x) {
   return function(y) {
      return function(z) {
        return x + y + z;
      };
   };
}

alert(a);          // Ի՞նչ կցուցադրի
alert(a(2));       // Ի՞նչ կցուցադրի
alert(a(2)(4));    // Ի՞նչ կցուցադրի
alert(a(2)(4)(9)); // Ի՞նչ կցուցադրի




// վարժություն 4

function Cat() {
  let numLives = 7;
  let name = "Jack";
  
  this.age = 5;
  this.getName = () => {
    return name;
  };
  this.getAge = () => {
    return this.age;
  };
  this.catDies = () => {
    numLives--;
  };
  this.isDead = () => {
    return numLives <= 0;
  };
};

let a = new Cat();
a.catDies();
a.catDies();
a.catDies();
a.catDies();
alert(a.isDead());   // Ի՞նչ կցուցադրի
a.catDies();
a.catDies();
a.catDies();
alert(a.isDead());   // Ի՞նչ կցուցադրի
alert(a.getName());  // Ի՞նչ կցուցադրի
a.age = 99;
alert(a.age);        // Ի՞նչ կցուցադրի



///////////////////////////////////



function Cat() {
    this.saySomething = () => {
       alert("mew");
    };
  }
  
  function Person(name, lastName, age) {
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.friends = [];
    this.getFullName = () => {
      return this.name + " " + this.lastName
    };
  }
  
  const person1 = new Person("Joe", "Jaspers", 55);
  const person2 = new Person("Mike", "Jackson", 66);
  
  const cat1 = new Cat();
  
  cat1.saySomething();










  /////////////////////////////




  const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function Hero(x, y, width, height) {

   const heroImg = document.createElement("img");
   heroImg.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/135655/nicubunu_Game_baddie_Ninja.png";

   let xDelta = 0;
   let yDelta = 0;
   
   
   this.update = () => {
     x += xDelta;
     y += yDelta;
   };
   
   this.render = () => {
     context.drawImage(heroImg, x, y, width, height);
   };
   
   this.goRight = () => {
     xDelta = 1;
   };
   this.goLeft = () => {
     xDelta = -1;
   };
   this.stop = () => {
     xDelta = 0;
   };
}

let data = {
  hero: new Hero(20, 20, 40, 40)
};

function update() {
  data.hero.update();
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  data.hero.render();
}

function loop() {
  requestAnimationFrame(loop);
  update();
  render();
}

loop();


document.addEventListener("keydown", (evt) => {
  if (evt.code === "ArrowRight") {
    data.hero.goRight();
  } else if (evt.code === "ArrowLeft") {
    data.hero.goLeft();
  }
});

document.addEventListener("keyup", (evt) => {
  data.hero.stop();
});







