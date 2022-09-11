//(1)

//Function to return true if a year is a leap year, false if a year is not a leap year
function leapyear(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

let userInput = prompt('Please enter a month: ');
console.log('Please enter a month: '+userInput);

let monthArray = [];
let days = 0;
monthArray = userInput.split('');

//For loop to correct random user capitalizations
for(let i=0; i<monthArray.length;i++)
{
    if(i == 0)
        monthArray[i] = monthArray[i].toUpperCase();
    else
        monthArray[i] = monthArray[i].toLowerCase();
}

month = monthArray.join('');

if(month == 'Janurary')
    days = 31;
else if(month == 'February')
{
    days = 28;
    let yearInput = prompt('Please enter the year: ');
    console.log('Please enter the year: '+yearInput);

    if( leapyear(yearInput) && month == 'February' )
        days = days+1;
}
else if(month == 'March')
    days = 31;
else if(month == 'April')
    days = 30;
else if(month == 'May')
    days = 31;
else if(month == 'June')
    days = 30;
else if(month == 'July')
    days = 31;
else if(month == 'August')
    days = 31;
else if(month == 'September')
    days = 30;
else if(month == 'October')
    days = 31;
else if(month == 'November')
    days = 30;
else if(month == 'December')
    days = 31;
else
    days = 0;

if(days>0)
    console.log(month+' has '+days+' days');
else
    console.log('Invalid or unknown input.  Please reload page and try again');