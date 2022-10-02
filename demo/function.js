
const compareNumber = (input, number) => {
    if(input > number) {
        console.log(`${input} is greater than ${number}`);
    } else {
        console.log(`${input} is lesser than ${number}`);
    }
};

module.exports = compareNumber;