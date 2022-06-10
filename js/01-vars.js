// const cart = [54, 28, 105, 70, 92, 17];
// let total = 0;
// for (const value of cart) {
//    total += value; 
// }
// console.log('Total: ', total);

const calculateTotalPrice = function (items) {
    let total = 0;
    for (const item of items) {
        total += item;
    }
    return total; 
};