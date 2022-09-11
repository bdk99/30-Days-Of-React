//(1)
const ages = [19, 22, 19, 24, 20, 24, 25, 26, 25, 24];

ages.sort();
let minage = ages[0];
let maxage = ages[ages.length-1];
console.log('Min age: '+minage);
console.log('Max age: '+maxage);

//Gets the median value from the array based on the length of the array
let medianAge = 0;
if((ages.length % 2) == 0)   //If the length of ages is an even number
    medianAge = (( ages[((ages.length/2))] + ages[((ages.length/2)+1)])/2);
else                         //Length of ages is an odd number
    medianAge = (ages[(((ages.length-1)/2))]);

console.log('Median Age: '+medianAge);


//Gets the average of all of the numbers in the age array
let average=0;
for(let i=0; i<ages.length; i++)
    average = average + ages[i];

average = (average/ages.length);
console.log('Average age: '+average);

let range = maxage - minage;
console.log('Range: '+ range);


//Slices the first 10 countries from the country array and prints it
console.log(countries.slice(0,10));

//(2)
console.log(countries[(countries.length)/2])

//(3)
let array1=[];
let array2=[];

if((countries.length % 2) == 0)   //If the length of ages is an even number
{
    array1 = countries.slice(0,countries.length/2);
    array2 = countries.slice((countries.length/2), countries.length);
}
else                              //Length of array is odd
{
    array1 = countries.slice(0,(countries.length/2)+1);
    array2 = countries.slice((countries.length/2)+1, countries.length);
}

console.log(array1);
console.log(array2);