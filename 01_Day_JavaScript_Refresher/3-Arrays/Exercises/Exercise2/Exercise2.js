//(1) (See Exercise2_driver.html for import statements)
console.log(countries);
console.log(webTechs);

//(2)
let text = 'I love teaching and empowering people. I teach HTML CSS JS React Python.';
let array = [];
array = text.split(' ');
console.log(array);
console.log(array.length);

//(3)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//If shoppingCart does not include Meat, then add it to the beginning of array
if(!shoppingCart.includes('Meat'));
    shoppingCart.unshift('Meat');

//If shoppingCart does not include Sugar, then add it to the end of array
if(!shoppingCart.includes('Sugar'));
    shoppingCart.push('Sugar');

//If Tea exists in the shoppingCart array, get the index and replace 'Tea' with 'Green Tea'
if(shoppingCart.includes('Tea'))
{
    let TeaLocation = shoppingCart.lastIndexOf('Tea');
    shoppingCart[TeaLocation] = 'Green Tea';
}

//(4)
if(countries.includes('Ethiopia'))
{
    let EthiopiaLocation = countries.lastIndexOf('Ethiopia');
    console.log(countries[EthiopiaLocation].toUpperCase());
}

//(5)
if(webTechs.includes('Sass'))
    console.log('Sass is a CSS preprocess');
else //Sass does not exist in the array
{
    webTechs.push('Sass');
    console.log(webTechs);
}

//(6)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)