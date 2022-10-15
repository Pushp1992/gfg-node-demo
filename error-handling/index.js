
function validateNameUsingtryCatch(name) {
    try {
        if (names === '') {
            console.log('name should not be emoty')
        }
    } catch (err) {
        console.log(`message from catch block: ${err}`)
    }
};

// validateNameUsingtryCatch('');

function validateNameWithoutThrow(name) {
    try {
        if (name !== '') { // undefined !== ''
            console.log(`Hello ${name}`)
        } else {
            console.log(`name is empty`);
        }
    } catch (err) {
        console.log(err)
    }
};

// validateNameWithoutThrow();


function usingThrow() {
    if (name === '') throw 'name is empty';
}
// usingThrow('');


function validateNameWithThrow(name) {

    try {
        if(name !== '') {
            console.log(`hello ${name}`)
        } else {
            // console.log('name is empty') >> this is worng
            throw 'name is empty';
        }

    } catch (err) {
        console.log(`catch block: ${err}`)
    }
};

// validateNameWithThrow('');



function validateNameWithFinally(name) {
    try {
        if (name !== '') {
            console.info(`My name is ${name}`);
        };
    } catch (err) {
        console.log(err);
    } finally {
        if(name === '') {
            console.log('your program terminated with unhandled exceptions');
        } else {
            console.log('yeyeyey you did that')
        }
    }
}

// validateNameWithFinally('raj');