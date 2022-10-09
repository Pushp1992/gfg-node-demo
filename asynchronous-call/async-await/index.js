
/** Using async await */
/** result will be displayed one by one */

async function withAsyncCall() {
    const result1 = await new Promise((resolve) =>
        setTimeout(() => {
            resolve(console.log("2"))
        }, 2000)
    );
    const result2 = await new Promise((resolve) =>
        setTimeout(() => {
            resolve(console.log("1"))
        }, 2000)
    );
}

withAsyncCall();

/** Withoutasync await > result will be displayed all-togeather */

function withoutAsyncCall() {
    const result1 = new Promise((resolve) =>
      setTimeout(() => {
          resolve(console.log("2"))
      }, 2000)
    );
    const result2 = new Promise((resolve) =>
      setTimeout(() => {
          resolve(console.log("1"))
      }, 2000)
    );
  }
  withoutAsyncCall();