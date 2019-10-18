module.exports = {
  apps: [
    {
      name: "ebanking-server",
      script: "./server.js",
      watch: false,
      env: {
        PORT: 3500
      }
    }
  ]
};
