import readlineSync from 'readline-sync';

export const callName = (ask = 'Your answer: ') => {
    const name = answer(ask);
    console.log(`Hello, ${name}!`)
    return name;
}

export const answer = (question) => {
    return readlineSync.question(question); // thats the function that return the users input 
}