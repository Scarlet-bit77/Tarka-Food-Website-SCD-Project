const { Worker } = require('worker_threads');

// Function to run worker
function runOrderWorker(taskData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./orderWorker.js');

        worker.postMessage(taskData);

        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

// Sample orders to test
const sampleOrders = [
    { id: 1, items: [{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }] },
    { id: 2, items: [{ price: 200, quantity: 1 }, { price: 150, quantity: 3 }] },
    { id: 3, items: [{ price: 75, quantity: 4 }] }
];

// Run the worker
(async () => {
    console.log('Main thread: sending orders to worker...');
    const result = await runOrderWorker({ orders: sampleOrders });
    console.log('Main thread: received results from worker:');
    console.log(result.results);
})();