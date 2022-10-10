const redis = require("redis");

(async () => {

  const client = redis.createClient();

  const subscriber = client.duplicate();

  await subscriber.connect();

  await subscriber.subscribe('log', (message) => {
    console.log(message); // 'message'
  });

})();

