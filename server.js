const app = require('./app');
const http = require("http");
const server = http.createServer(app);

// SERVER RUN RESPONSE
app.get("/", (req, res) => {
  res.send("login_app server is running!");
});

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});