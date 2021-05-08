import { answer, callName } from '../cli.js'

export const brainEven = () => {
    const name = callName("May I have your name?")
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let isLoose = false;
    for (let index = 0; index < 3; index++) {
        let random_number = randomNumber();
        console.log(`Question: ${random_number}`)
        let users_answer = answer("Your answer: "); // thats the answer of a user=NO 
        if (random_number % 2 == 0 && users_answer !== 'yes' || random_number % 2 !== 0 && users_answer == 'yes') {
            console.log(`Let's try again, ${name}!`)
            isLoose = true;
            break;
        }
        console.log("Correct!")
    }
    if (!isLoose) {
        console.log(`Congratulations, ${name}!`)
    }
}

const randomNumber = () => Math.floor(Math.random() * 100) + 1;