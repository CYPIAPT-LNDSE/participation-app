const hapiWrapper = require('@matthewglover/hapi-wrapper');

const port = process.env.PORT || 3000;
const connectionOptions = { port };

hapiWrapper.createServer()
  .then(hapiWrapper.setConnection(connectionOptions))
  .then(hapiWrapper.registerPlugins([]))
  .then(hapiWrapper.startServer)
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(err => console.log(err));
