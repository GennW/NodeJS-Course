let isRunning = true;

setTimeout(() => {
    isRunning = false;
}, 10);

process.nextTick(() => console.log('Next tick'))

// основной поток зациклен и другие даже nextTick не будут выполняться
while (isRunning) {
    console.log('While loop is running...')
}

