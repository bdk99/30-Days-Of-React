//(1)
const EmptyArray = []; 

//(2)
const countries = [ 
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
]

//(3)
console.log(countries.length)

//(4)
console.log('First element of countries array: ' + countries[0])
console.log('Middle element of countries array: ' + countries[3])
console.log('Last element of countries array: ' + countries[countries.length-1])

//(5)
let mixedDataTypes = ['Numbers','Strings','Booleans','Null','Undefined','Symbol','Array']
console.log('mixedDataTypes array length: '+mixedDataTypes.length)

//(6)
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'] 

//(7)
console.log(itCompanies)

//(8)
console.log(itCompanies.length)

//(9)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length-1])

//(10)
for(let i=0; i<itCompanies.length-1; i++)
{
    console.log(itCompanies[i]);
}

//(11)
for(let i=0; i<itCompanies.length-1; i++)
    console.log(itCompanies[i].toUpperCase())

//(12)
console.log(itCompanies.join(', ')+', are big IT companies')

//(13)
let indexOfBing = itCompanies.indexOf('bing') // -1, if the element not found index is -1
if (indexOfBing != -1) 
  console.log('Bing')
else
  console.log('Company is not found')

//(14)


//(15)
console.log(itCompanies.sort())

//(16)
console.log(itCompanies.reverse())

//(17)
console.log(itCompanies.slice(0,3))

//(18)
console.log(itCompanies.slice(4,8))

//(19)
console.log(itCompanies.slice(3,4))

//(20) Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

//(21) Remove the middle IT company or companies from the array
itCompanies.splice(2,2)
console.log(itCompanies)

//(22)
itCompanies.pop()
console.log(itCompanies)

//(23)
itCompanies = []
console.log(itCompanies)