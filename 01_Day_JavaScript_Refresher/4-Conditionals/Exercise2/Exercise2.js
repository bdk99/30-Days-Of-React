//(1)
let userInput = prompt('Please enter student score: ');
console.log('Please enter student score '+userInput);

if(userInput>=90)
    console.log('Corresponding grade: A');
else if (userInput>=80 && userInput<=89)
    console.log('Corresponding grade: B');
else if (userInput>=70 && userInput<=79)
    console.log('Corresponding grade: C');
else if (userInput>=60 && userInput<=69)
    console.log('Corresponding grade: D');
else if (userInput>=0 && userInput<=59)
    console.log('Corresponding grade: F');
else
    console.log('Invalid or unknown input.  Please reload page and try again');


//(2)
//Function takes a user entered month and outputs the season of the year
let month = prompt('Please enter a month: ');
console.log('Please enter a month: '+month);

month=month.toLowerCase();
if(month == 'september' || month == 'october' || month == 'november')
    console.log('The season is Autumn');
else if(month == 'december' || month == 'january' || month == 'february')
    console.log('The season is Winter');
else if(month == 'march' || month == 'april' || month == 'may')
    console.log('The season is Spring');
else if(month == 'june' || month == 'july' || month == 'august')
    console.log('The season is Summer');
else
    console.log('Invalid or unknown input.  Please reload page and try again');


//(3)
//Takes a user entered day of the week and tells the user weither it is a week day or a weekend day
let dayArray = [];
let day = prompt('What is the day today?');
console.log('What is the day today: '+day);
dayArray = day.split('');

for(let i=0; i<dayArray.length;i++)
{
    if(i == 0)
        dayArray[i] = dayArray[i].toUpperCase();
    else
        dayArray[i] = dayArray[i].toLowerCase();
}
day = dayArray.join('');

if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday')
    console.log(day + " is a weekday")
else if (day == 'Saturday' || day == 'Sunday')
    console.log(day + " is a weekend")
else 
    console.log('Invalid or unknown input.  Please reload page and try again');