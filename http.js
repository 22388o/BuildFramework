const HTTP = require('@fabric/http');

async function main () {

  const server = new HTTP.Server();

 
  await server.define('Person', {
    name: 'Person',
    properties: {
      username: { type: String , maxLength: 55 }
    },
    routes: {
      list: '/people',
      view: '/people/:id'
    }
  });

 
  await server.start();
}
 
main().catch((exception) => {
  console.log('[EXAMPLES:HTTP]', 'HTTP Exception:', exception);
});
