//this program generates a random fortune cookie style message and outputs it to the terminal//
// Author: Trayton Keyes//
// Date: 08/11/2022 //

// a series of lists tha hold components to create a random fortune//

const date = ['today ', 'tomorrow ', 'soon ', 'next week ', 'very soon ', '2023 ', 'in the near future ', 'now ' ];
const person = ['you ', 'your family ', ' someone ', 'the ones closest to you ', 'your loved one '];
const saying = ['look incredible', 'will have the best day', 'is/are in danger!', 'will fall in love', ' will have a surprise'];

const generateDate =() => {
    const randomNumber= Math.floor(Math.random() *date.length);
    const d = date[randomNumber];
    return d;
};

const generatePerson = () => {
    const randomNumber= Math.floor(Math.random() *person.length);
    const p = person[randomNumber];
    return p;
};

const generateSaying = () => {
    const randomNumber= Math.floor(Math.random() *saying.length);
    const s = saying[randomNumber];
    return s;
};

const createMessage = (thisDate, thisPerson, thisSaying) => {
const message = thisDate+thisPerson+thisSaying;
return message;
};

const displayMessage = (message) => {
    console.log('Todays Fortune!!');
    console.log('-----------------');
    console.log(message);

};

const init = () => {
    const thisDate = generateDate();
    const thisPerson = generatePerson();
    const thisSaying = generateSaying();
    const message = createMessage(thisDate, thisPerson, thisSaying);
    displayMessage(message);
};
init();