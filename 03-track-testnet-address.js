const bitcore = require('bitcore-lib');

// WIF -> Wallet Import Format, has error checking to make it less likely to
// make typos when using address
// run bitcore.PrivateKey('testnet').toWIF();
// in a node repl, copy the output into the following line
const privateKeyWIF = 'cSxr9J73WcPtXm7cHTtzfgQMXv8LHwrQxuaAPQMctkV7qQpfiA8v';

const privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);
const address = privateKey.toAddress();

// output will be pasted into faucet, https://tbtc.bitaps.com
console.log('address:', address.toString());

// make another address from a string, bad idea!
const value = Buffer.from('this is a way to generate and address from a string');
const hash = bitcore.crypto.Hash.sha256(value);
const bn = bitcore.crypto.BN.fromBuffer(hash);
const address2 = new bitcore.PrivateKey(bn, 'testnet').toAddress();

console.log('address2:', address2);


// https://github.com/bitpay/bitcore/blob/master/packages/bitcore-lib/docs/examples.md#generate-a-random-address

const Insight = require('bitcore-explorers').Insight;
const insight = new Insight('testnet');

insight.getUnspentUtxos(address, function(err, utxos) {
  if (err) {
    // handle errors...
  } else {
    // use the utxos to create a transaction
    console.log(utxos);
  }
});
