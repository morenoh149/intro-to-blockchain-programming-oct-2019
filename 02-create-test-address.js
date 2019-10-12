const bitcore = require('bitcore-lib');

// make random 32 byte number
const rand_buffer = bitcore.crypto.Random.getRandomBuffer(32);

// convert to number format
const rand_number = bitcore.crypto.BN.fromBuffer(rand_buffer);

// representation is the hex version
console.log(rand_number);

// toString for decimal representation
console.log(rand_number.toString());

// make address
let address = new bitcore.PrivateKey(rand_number).toAddress();

// representation is address,
// can take representation paste it into any wallet program
console.log(address);

// make testnet address
address = new bitcore.PrivateKey(rand_number).toAddress('testnet');

// test address,
// most real wallets will complain that this is an invalid address
console.log(address);
