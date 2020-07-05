module.exports = {
  apps: [
    {
      name: "server",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      //increment_var: "PORT",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
