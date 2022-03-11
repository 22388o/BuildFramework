'use strict';

const Oracle = require('@fabric/core/types/oracle');

const config = require('./config');

/**
 * An {@link Oracle} offers a simple, self-contained {@link Service} for Fabric-
 * capable agents.  The `main()` function allocates necessary resources, then
 * starts the service.
 */
async function main () {
  
    const oracle = new Oracle(config);
  
  oracle.define('Request', {
    attributes: {
      
   input: { type: 'String', required: true, max: 2048 }
    }
  });
    await oracle.start();
  
  console.log('oracle started!');
  console.log('oracle:', oracle);
}
module.exports = main();

