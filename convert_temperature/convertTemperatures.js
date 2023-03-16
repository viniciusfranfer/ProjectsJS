//current temperature in kelvin
const kelvin = 293;
//subtracting 273 from the kelvin temperature is the celsius temperature
let celsius = kelvin - 273;
//To convert celsius in fahrenheit we multiply the celsius temperature for (9/5) and add 32
let fahrenheit = celsius * (9 / 5) + 32;
//Using the Math method we round down and get the value without de decimals
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);

//CELSIUS TO NEWTON CONVERSION
// const celsius = 30;
// let newton = celsius * (33/100);
// newton = Math.floor(newton);
// console.log(`The temperature converted in newtom is ${newton} `);