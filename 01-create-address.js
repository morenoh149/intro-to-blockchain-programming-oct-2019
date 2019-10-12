bitcore = require('bitcore-lib');
privateKey = new bitcore.PrivateKey();
address = privateKey.toAddress().toString();
console.log('address', address);
