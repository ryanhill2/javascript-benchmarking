const startTime = performance.now();
// Code or operation you want to benchmark
// start of the real code

const object = {};
// populate the object with keys from 1 to 10000000 and set the value to true
try {
    for (let i = 1; i <= 20000000; i++) {
        object[i] = true;
    }
} catch (error) {
    console.log(error);
}

// look in the object for the key 30000000 and print true or false
object.forEach((key, value) => {
    if (key === 30000000) {
        console.log(value);
    }
})

const getObjectSizeInMB = (object) => {
    const jsonString = JSON.stringify(object);
    const bytes = new TextEncoder().encode(jsonString).length;
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2); // Rounded to 2 decimal places
};

const objectSizeInMB = getObjectSizeInMB(object);
console.log('Object size:', objectSizeInMB, 'MB');



// const array = [];
// for (let i = 1; i <= 100000000; i++) {
//     array.push(i);
// }

// end of the real code
const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log("Elapsed time:", elapsedTime, "ms");

