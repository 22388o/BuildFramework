'use strict';

const Peer = require('../types/peer');

async function main () {
  const peer = new Peer({

  });

  peer.on('ready', (info) => {
    console.log('[EXAMPLES:PEER]', 'Peer emitted "ready" event with info:', info);
  });

  peer.on('error', (error) => {
    console.error('[EXAMPLES:PEER]', 'Peer emitted "error" event:', error);
  });

  peer.on('peer', (peer) => {
    console.log('[EXAMPLES:PEER]', 'Peer emitted "peer" event:', peer);
  });

  await peer.start();
}

main().catch((exception) => {
  console.error('[EXAMPLES:PEER]', 'Main Process Exception:', exception);
});
