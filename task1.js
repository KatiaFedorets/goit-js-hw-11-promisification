

const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Resolved after ${ms}ms`);
        }, ms);
    });

};

const logger = time => console.log(`Resolved after ${time}ms`);


delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger); 