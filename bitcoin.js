'use strict';

require('debug-trace')({ always: true });

const Fabric = require('../');
const Bitcoin = require('../services/bitcoin');
const Wallet = require('../types/wallet');

async function main () {
  let fabric = new Fabric();
  let bitcoin = new Bitcoin({ network: 'regtest' });
  
  bitcoin.on('message', function (msg) {
    console.log('[DEVELOP]', 'Bitcoin emitted message:', msg);
  });
  await bitcoin.start();

    console.log('bitcoin state:', bitcoin.state);
}

module.exports = main();
