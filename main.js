
// let x = "" + 20;
// if(x==="20"){
//     alert("ayo")
// }


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
  Tic Tac Toe
  ------------------------------------------------------------------------
  A game for two players, X and O, who take turns marking the spaces 
  in a 3×3 grid. The player who succeeds in placing three of their marks 
  in a horizontal, vertical, or diagonal row is the winner.
*/

let stringifyBoard = function(board) {
	return board[0].join("   ") + 
       "\n" + 
       board[1].join("   ") +
       "\n" +
       board[2].join("   ");
};

let didWeWin = function(board, player) {

	// check rows
  
  if(board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    return true;
  }
  
  if(board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    return true;
  }
  
  if(board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    return true;
  }
  
  // check columns
  
  if(board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true;
  }
  
  if(board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true;
  }
  
  if(board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    return true;
  }
  
  
  // check diagonal
  
  if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  
  if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  
  return false;
};

let isFull = function(board) {
  let i = 0;
  while(i < board.length) {
    const row = board[i];
    
    let i2 = 0;
    while(i2 < row.length) {
      if(row[i2] === "_") {
         return false;
      }
      i2 = i2 + 1;
    }
    i = i + 1;
  }
  
  return true;
};


let board = [
  [ "_", "_", "_" ],
  [ "_", "_", "_" ],
  [ "_", "_", "_" ]
];

let player = "x";

while(true) {
  let boardStr = stringifyBoard(board);
     
  let row = +prompt("Dear user, please provider the value for the row \n\n"+boardStr);
  let column = +prompt("Dear user, please provider the value for the column \n\n"+boardStr);
  
  if(board[row][column] !== "_") {
    alert("Not a legal move, you lose!");
    break;
  }
  
  board[row][column] = player;
  
  
  const won = didWeWin(board, player);
  
  if(won) {
    alert("Player " + player +" won the game!");
    break;
  }
  
  if(isFull(board)) {
    alert("The board is full, nobody won");
    break;
  }
  
  
  if(player === "x") {
    player = "o";
  } else {
    player = "x";
  }
}
  





* Զանգվածի հետ կապված տարբեր ֆունկցիաներ

Կոդի օրինակ
-------------------------

unshift - Ինչպես զանգվածի սկզբում ավելացնել արժեք

    let a = [2, 13, 20];
    a.unshift(10); // aը այժմ ունի [10, 2, 13, 20];

shift - Ինչպես կարդալ և հանել զանգվածի առաջին արժեքը

    let a = [2, 13, 20];
    a.shift(); // aը այժմ ունի [13, 20];

push - Ինչպես զանգվածի վերջում ավելացնել արժեք

    let a = [2, 13, 20];
    a.push(10); // aը այժմ ունի [2, 13, 20, 10];


pop - Ինչպես կարդալ և հանել զանգվածի վերջին արժեքը

    let a = [2, 13, 20];
    a.pop(); // aը այժմ ունի [2, 13];

concat - Ինչպես միավորել երկու զանգված միասին և ստանալ նոր զանգված

    let a = [2, 13, 20];
    let b = [7, 9];
    let z = a.concat(b); // zն այժմ ունի [2, 13, 20, 7, 9];

findIndex - Ինչպես գտնել զանգվածի արժեքի ինդեքսը

    let a = [2, 13, 20];
    let b = a.findIndex(function(val) { // bն այժմ ունի 1
        return val === 13;
    });

find - Ինչպես գտնել արժեք զանգվածում

    let a = [{name: "Joe", age: 10}, {name: "Mike", age: 30}, {name: "Jill", age: 24}];
    let b = a.find(function(val) {  // bն այժմ ունի {name: "Mike", age: 30}
        return val.age === 24;
    })



    * Տեքստի հետ կապված տարբեր ֆունկցիաներ

Կոդի օրինակ
-------------------------

toUpperCase - տեքստի բոլոր նիշերը վերափոխում է մեծատառի

    let a = "Hello World";
    let b = a.toUpperCase(); // bն այժմ ունի "HELLO WORLD"

toLowerCase - տեքստի բոլոր նիշերը վերափոխում է փոքրատառերի

    let a = "Hello World";
    let b = a.toLowerCase(); // bն այժմ ունի "hello world"

substring - ստանալ տեքստի մի մասը

    let a = "Hello World";
    let b = a.substring(1, 5); // bն այժմ ունի "ello"

split - ինչպես բաժանել տեքստը մասերի

    let a = "Hello World";
    let b = a.split(" "); // bն այժմ ունի ["Hello", "World"]

* replaceAll - փոխարինել տրված արժեքին համապատասխանող բոլոր արժեքները

    let a = "Hello World";
    let b = a.replaceAll("l", "iii"); // bն այժմ ունի "Heiiiiiio Woriiid"

* search - ինչպես գտնել տվյալ տեքստը մեկ այլ տեքստի ներսում

    let a = "Hello World";
    let b = a.search("ll"); // bն այժմ ունի 2




    * Մաթեմատիկական տարբեր ֆունկցիաներ

Կոդի օրինակ
-------------------------

round - կլորացնել տրված արժեքը

    let a = 2.4;
    let b = Math.round(a);  // bն այժմ ունի 2

floor - կլորացնել տրված արժեքը վայրընթաց

    let a = 2.8;
    let b = Math.floor(a);  // bն այժմ ունի 2

ceil - կլորացնել տրված արժեքը վեր

    let a = 2.1;
    let b = Math.ceil(a);  // bն այժմ ունի 3


min - ստանալ նվազագույն արժեքը

    let a = 2.8;
    let b = 2;
    let c = Math.min(a, b);  // cն այժմ ունի 2

max - ստանալ առավելագույն արժեքը

    let a = 2.8;
    let b = 2;
    let c = Math.max(a, b);  // cն այժմ ունի 2.8

pow - Ինչպես գտնել զանգվածի արժեքի ինդեքսը

    let a = 2;
    let b = Math.pow(2, 3); // bն այժմ ունի 8  (2 * 2 * 2)

random - ստացիր պատահական թիվ 0-ի և 1-ի միջև

    let a = Math.floor(Math.random() * 10) + 1; // պատահական թիվ  1 - 10
    





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
  
  alert(JSON.stringify(magic({
    firstName: "Michael",
    lastName: "Jackson"
  }), undefined, 2));





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




  /*
Գրել ֆունկցիա reverse անունով, որը կստանա թիվ և կվերադարձնի նոր թիվ՝ սկզբնական թվի թվանշանները հակառակ շրջած:

	Օրինակներ՝

  reverse(123);  // վերադարձնում է 321
	reverse(5829); // վերադարձնում է 9285
*/

function reverse(num) {
    const numStr = "" + num; // "5829"
    const reversedNumStr = numStr.split("") // ["5", "8", "2", "9"]
          .reverse() // ["9", "2", "8", "5"]
          .join(""); // "9285"
    return +reversedNumStr;
  }
  
  alert(reverse(5829));



  * Ինչպես օգտագործել ... օպերատորը օբյեկտներն ու զանգվածները բաժանելու համար

Կոդի օրինակ
-------------------------

    let a = {
        name: "Joe"
    };
    let b = {
        lastName: "Johnson",
        age: 23,
        ...a
    };
    // bն այժմ ունի { name: "Joe", lastName: "Johnson", age: 23 }

    let c = [4, 3, 2];
    let d = [44, ...c, 9];  // dն այժմ ունի [44, 4, 3, 2, 9]


    function run(i, ...args) {
        alert(i);         // 99
        alert(args);  //  [3, 44, 5]
    }
    run(99, 3, 44, 5);



    /*
Ստեղծել max անունով ֆունկցիա, որը կվերադարձնի տրված զանգվածի ամենամեծ թիվը

  Օրինակ՝
  
  max([5, 28, 99, 23, 100, 32]); // վերադարձնում է 100
*/



function max(arr) {
  return Math.max(...arr);  // Math.max(5, 28, 99, 23, 100, 32);
}

alert(max([5, 28, 99, 23, 100, 32]));



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





    Կոդի օրինակներ
    -------------------------------
    
        let a = 3;
        let b = 3;
        alert(a === b); // true քանի որ արժեքները նույնն են
    
        let c = { name: "Joe" };
        let d = { name: "Joe" };
        alert(c === d); // false քանի որ հղումները տարբեր են
    
    Հղումներ
    ----------------


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



Ստեղծել pow անունով ֆունկցիա, որը կգործի ճիշտ այնպես, ինչպես Math.pow. խնդրում ենք օգտագործել ռեկուրսիա!!!

Օրինակ

    pow(5, 3); // 125

Լուծումը
---------------

  function pow(x, y) {
    if(y === 0) {
      return 1;
    }
    return x * pow(x, y-1); // 5 * pow(5, y-1)
  }
  alert(pow(5, 3));






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

//lucumyyyyyyyyyyyyyyyyyyyyyyyyy

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
      

      Նկարագրություն
      ------------------------------
      
      this-ի օգնությամբ կարելի է դիմել այն կոնտեքստին, որում ֆունկցիան է իրականացվում 
      
      Կոդի օրինակներ
      -------------------------------
      
          function func(a) {
              alert(this);
              alert(a);
          }
          
          const obj = {
            func: func
          };
          
          obj.func(5);  // this = obj
      
          func(5);  // this = global object (window in the browser) OR undefined in script mode
      
          func.apply(obj, [5]); // this = obj
          func.call(obj, 5);      // this = obj
         
          const boundFunc = func.bind(obj);
          boundFunc(5);  // this = obj
         
          new func(5);  // this = {}





          Կոդի օրինակներ
-------------------------------

    function func(a) {
        alert(this);
        alert(a);
    }

    const obj = {
      func: func
    };

    obj.func(5); // this = obj

    func(5); // this = window/undefined

    func.apply(obj, [5]); // this = obj
     func.call(obj, 5);      // this = obj

    const boundFunc = func.bind(obj);
     boundFunc(5);

    new func(5); // this = {}





    Առաջադրանք
--------------------------

    // վարժություն 1
    // Փոխեք այս կոդը այնպես, որ այն alert անի 45
    const a = {
        age: 23,
        foo: function(arr) {
            arr.forEach(function(val) {
                alert(this.age + val);
            });
        }
    };
    a.foo([22]);




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




Կոդի օրինակներ
-------------------------------

    let x = 10;
    let y = x === 10 ? 25 : 44;
    alert(y); // 25

    


    Կոդի օրինակներ
-------------------------------

    let person = {
        name: "Joe",
        age: 23
    };
    const {name, age, foo=99} = person;
    alert(name); // "Joe"
    alert(age);    // 23
    alert(foo);    // 99

    let arr = [8, 33, 5];
    const [a, b, c] = arr;
    alert(a); // 8
    alert(b); // 33
    alert(c); // 5



    function func1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 1000);
      });
    }
    function func2(val) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(val + 3), 1000);
      });
    }
    function func3(val) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(val + 4), 1000);
      });
    }
    
    func1()
      .then((result) => func2(result))
      .catch((error) => 5)
      .then((result) => {
        alert(result);
        throw new Error("oops");
       })
      .then((result) => func3(result))
      .catch((error) => func3(2)) 
      .then((result) => func2(result))
      .then((result) => alert(result));





      Կոդի օրինակ
-------------------------

    function job(state) {
        return new Promise(function(resolve, reject) {
            if (state) {
                resolve('success');
            } else {
                reject('error');
            }
        });
    }

    job(true).then(function(data) {
        console.log(data);
        return job(true);
    }).then(function(data) {
        if (data !== 'victory') {
            throw 'Defeat';
        }
        return job(true);
    }).then(function(data) {
        console.log(data);
    }).catch(function(error) {
        console.log(error);
        return job(false);
    }).then(function(data) {
        console.log(data);
        return job(true);
    }).catch(function(error) {
        console.log(error);
        return 'Error caught';
    }).then(function(data) {
        console.log(data);
        return new Error('test');
    }).then(function(data) {
        console.log('Success:', data.message);
    }).catch(function(data) {
        console.log('Error:', data.message);
    });

    /*
      Code example from https://www.codingame.com/playgrounds...
    */




// ???///////////////////////////////////


      Promise.all([
        fetch("https://corona-api.com/countries/am"),
        fetch("https://corona-api.com/countries/ru"),
        fetch("https://corona-api.com/countries/us")
       ]).then((streams) => {
         return Promise.all(streams.map((stream) => stream.json()));
       }).then((results) => {
         alert(JSON.stringify(results, null, 2));
       }).catch((error) => {
         alert(error);
       });




       Հրամաններ
       ----------------------
       
       * mkdir:  Դիրեկտորի ստեղծելու համար
       * touch: Ֆայլ ստեղծելու համար
       * rm: Ֆայլ հեռացնելու համար
       * rm -r: Դիրեկտորի հեռացնելու համար
       * cd: Դիրեկտորի փոխելու  համար
       * ls: Ցուցադրել դիրեկտորիների և ֆայլերի ցուցակը
       * pwd: Ընթացիկ դիրեկտորիի ուղին ստանալու համար
       * clear: Կոնսոլը մաքրելու համար


