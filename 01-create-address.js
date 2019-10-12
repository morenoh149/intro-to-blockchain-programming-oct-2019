const bitcore = require('bitcore-lib');

const privateKey = new bitcore.PrivateKey();
const address = privateKey.toAddress().toString();
console.log('address', address);
