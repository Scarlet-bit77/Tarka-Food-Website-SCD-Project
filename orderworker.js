// orderWorker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (taskData) => {
    console.log('Worker started processing tasks...');

    // Simulate heavy computation: calculate totals
    const results = taskData.orders.map(order => {
        let total = 0;
        for (let item of order.items) {
            total += item.price * item.quantity;
        }
        return { orderId: order.id, total };
    });

    // Simulate delay (like heavy CPU work)
    setTimeout(() => {
        parentPort.postMessage({ results });
        console.log('Worker finished processing tasks.');
    }, 1000);
});