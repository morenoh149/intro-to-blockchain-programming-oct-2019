/*
 * exercise, fix the code to properly create and sign a transaction
 */
utxo = {
  txId: transaction id containing an unspent output,
  outputIndex: output index e.g. 0,
  address: addressOfUtxo,
  script: bitcore.Script.buildPublicKeyHashOut(addressOfUtxo).toString(),
  satoshis: amount sent to the address
};
fee = 3000; //set appropriately for conditions on the network
tx = new bitcore.Transaction()
        .from(utxo)
        .to(address, 35000)
        .fee(fee)
        .enableRBF()
        .sign(privateKeyOfUtxo);
console.log('transaction:', tx);
