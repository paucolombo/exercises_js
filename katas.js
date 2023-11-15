/* Ejercicio 1: 
1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
*/
let myFavoriteHero = 'Hulk';
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
/* EJERCICIO 2:
1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};

1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

1.3 Dado el siguiente código, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
*/
const character = { name: 'Jack Sparrow', age: 10 };
character.age = 25;
console.log(character);
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
);
const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };

console.log(toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(
  `car1 final price ${car1.finalPrice} and car2 final price ${car2.finalPrice}`
);
/*EJERCICIO 3
1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

1.2 Divide 10 por 2 y muestra el resultado en un console.

1.3 Muestra mediante un console el resto de dividir 15 por 9.

1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.

1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.
*/
console.log(10 * 5);
console.log(10 / 2);
console.log(15 % 9);
let p = 10;
let j = 5;
let o = p + j;
let c = 10;
let m = 5;
let i = c * m;

/*EJERCICIO 4
1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
*/
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
console.log(avengers1[0]);
avengers1[0] = 'IRONMAN';
console.log(avengers1.length);
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
];
rickAndMortyCharacters2.pop();
console.log(
  `Primer elemento del array: ${rickAndMortyCharacters2[0]} y el ultimo ${
    rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]
  }`
);
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3);
//Ejercicio 5

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 === 2) {
  console.log('number2 dividido entre number1 es igual a 2');
}

if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2');
}

if (number3 != number1) {
  console.log('number3 es distinto number1');
}

if (number3 * 5 === number1) {
  console.log('number3 por 5 es igual a number1');
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log(
    'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
  );
}

if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log(
    'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
  );
}

//ejercicio 6
/*
1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.
*/

for (let i = 0; i <= 9; i++) {
  console.log(i);
}
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 0; i <= 9; i++) {
  if (i === 9) {
    console.log('Dormido!');
  } else {
    console.log('Intentando dormir 🐑');
  }
}
//Ejercicio 7 devuelve el numero mas alto
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
console.log(sum(5, 7));
//Ejercicio [8]
//Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en
//caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.',
];
function findLongestWord(avengers) {
  let numLetters = 0;
  let longestWord = '';
  for (i = 0; i < avengers.length; i++) {
    if (avengers[i].length > numLetters) {
      longestWord = avengers[i];
      numLetters = avengers[i].length;
    }
  }
  return longestWord;
}
console.log(`Ejercicio 8 -Resultado: ${findLongestWord(avengers)}`);

//Ejercicio [9]
/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los
números de la matriz. Puedes usar este array para probar tu función:
*/
const numbers = [12, 21, 38, 5, 45, 37, 6];
function sumAll(param) {
  let sum = 0;
  for (i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum;
}
console.log(`Ejercicio 9 -Resultado: ${sumAll(numbers)}`);

//EJERCICIO 10 Calcular promedio de un array de numeros
function average(param) {
  let sum = 0;
  for (i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum / param.length;
}

console.log(`Ejercicio 10 -Resultado: ${average(numbers)}`);

//EJERCICIO 11
//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo
//contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let sum = 0;
  for (i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      sum += param[i];
    } else {
      sum += param[i].length;
    }
  }
  return sum / param.length;
}
console.log(`Ejercicio 11 -Resultado: ${averageWord(mixedElements)}`);

//EJERCICIO 12
//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que
//existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
const duplicates = [
  'sushi',
  'pizza', //duplicado
  'burger',
  'potatoe',
  'pasta', //duplicado
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
];
//param.slice(1, 2);
function removeDuplicates(param) {
  for (i = 0; i < param.length; i++) {
    for (j = 0; j < param.length - 1; j++) {
      if (param[i] === param[j] && i != j) {
        //console.log(`Los duplicados son ${param[i]}`);
        param.splice(i, 1);
      }
    }
  }
  return param;
}
//removeDuplicates(duplicates);
console.log(`Ejercicio 12 -Resultado: ${removeDuplicates(duplicates)}`);

//EJERCICIO 13
//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de
//dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la
//contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc',
];
function finderName(listado, nombre) {
  for (i = 0; i < listado.length; i++) {
    if (nombre === listado[i]) {
      return `${true} ${i}`;
    }
  }
  return false;
}

console.log(`Ejercicio 13 -Resultado: ${finderName(nameFinder, 'Pau')}`);

//EJERCICIO 14
//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo
//conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code', //3
  'repeat', //0
  'eat', //0
  'sleep', //1
  'code',
  'enjoy', //1
  'sleep',
  'code',
  'enjoy',
  'upgrade', //0
  'code',
];
function repeatCounter(param) {
  let phrase = '';
  for (i = 0; i < param.length; i++) {
    let counter = 0;
    for (j = 0; j < param.length; j++) {
      if (param[i] === param[j] && i != j) {
        counter++;
      }
    }
    if (!phrase.includes(' ' + param[i] + ' ')) {
      phrase = phrase + `la palabra: ${param[i]} se repite ${counter}, `;
    }
  }
  return phrase;
}

console.log(repeatCounter(counterWords));

//Ejercicio [15]
//Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la
//función .includes de javascript

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta',
];

const getProducts = (products) => {
  for (i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) {
      console.log(products[i]);
    }
  }
};

getProducts(products);

//Ejercicio 16
//Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar',
];

for (place of placesToTravel) {
  console.log(place);
}

//Ejercicio 17
//Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg',
};
for (clave in alien) {
  console.log(`El alien es de ${clave} ${alien[clave]}`);
}

//Ejercicio 18
//Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
//Imprime en un console log el array
const placesToTravels = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Barcelona' },
];

function deletePlaces(places) {
  for (i = 0; i < places.length; i++) {
    let place = places[i];
    for (id in place) {
      if (place[id] === 11 || place[id] === 40) {
        places.splice(i, 1);
      }
    }
  }
  return places;
}
console.log(deletePlaces(placesToTravels));

//Ejercicio 19
//Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
//Recuerda que puedes usar la función .includes() para comprobarlo.
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' },
];
function findToy(toys) {
  for (let toy of toys) {
    if (toy.name.includes('gato')) {
      delete toy.name;
      delete toy.id;
    }
  }
  return toys;
}
console.log('toys: ', findToy(toys));

//Ejercicio 20
//For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al
//array popularToys. Imprimelo por consola..
const popularToys = [];
const toys2 = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 },
];
for (let toy of toys2) {
  if (toy.sellCount >= 15) {
    popularToys.push(toy);
  }
}
console.log(popularToys);

// EJERCICIO 21 Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
//"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad,
//precedido del texto "Usuarios mayores de edad:"
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 },
];

let usersUnderAge = [];
let usersUpAge = [];
for (i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    usersUnderAge.push(users[i].name);
  } else {
    usersUpAge.push(users[i].name);
  }
}
console.log(
  `Los usuarios menores de edad son ${usersUnderAge} y los usuarios mayores de edad son ${usersUpAge}`
);
//EJERCICIO 22
//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas
//duplicadas. Finalmente,imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: false },
  { name: 'Pasta', isVegan: true },
];

function veganFood(foodSchedule, fruits) {
  let num = 0;
  for (i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
      foodSchedule[i].isVegan = true;
      while (foodSchedule.includes(fruits[num])) {
        num++;
      }
      foodSchedule[i].name = fruits[num];
      num++;
    }
  }
  return foodSchedule;
}
console.log(veganFood(foodSchedule, fruits));

//EJERCICIO 23
//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
//Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos
//y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 90 },
];

const shortMovies = movies.filter((movie) => movie.durationInMinutes < 100);
const middleMovies = movies.filter(
  (movie) => movie.durationInMinutes > 100 && movie.durationInMinutes < 200
);
const longMovies = movies.filter((movie) => movie.durationInMinutes > 200);
console.table(
  'Short Movies: ' +
    JSON.stringify(shortMovies) +
    ' Middle movies: ' +
    JSON.stringify(middleMovies) +
    ' Long Movies: ' +
    JSON.stringify(longMovies)
);

//EJERCICIO 24, 25 y 26
//Usa un bucle para sumar el total de las ventas (sellCount)
//de todos los productos.

const products2 = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 },
];
let sumSells = 0;
const goodProducts = [];
const badProducts = [];
for (i = 0; i < products2.length; i++) {
  sumSells = products2[i].sellCount + sumSells;
  if (products2[i].sellCount >= 20) {
    goodProducts.push(products[i]);
  } else {
    badProducts.push(products[i]);
  }
}
console.log('El total de las ventas es: ' + sumSells);
console.log('El promedio de las ventas es: ' + sumSells / products2.length);
console.log('Los bad products son: ' + JSON.stringify(badProducts));
console.log('Los good products son: ' + JSON.stringify(goodProducts));
