const cors_proxy = require('cors-anywhere');

// Port
const port = process.env.PORT || 3000;

cors_proxy.createServer({
  originWhitelist: [], // Allowing all origins
}).listen(port, () => {
  console.log(`CORS Anywhere server running on ${port}`);
}); 