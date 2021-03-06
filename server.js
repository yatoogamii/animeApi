const fastify = require("fastify")();

fastify.get("/", async (req, res) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (e) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
