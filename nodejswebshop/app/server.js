const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();

// Certificats
const keys = {
  key: fs.readFileSync("./keys/server.key"),
  cert: fs.readFileSync("./keys/server.cert"),
};

// Middleware pour rediriger les requêtes
function requireHTTPS(req, res, next) {
  if (!req.secure) {
    // Redirection vers HTTPS
    return res.redirect("https://" + req.headers.host + req.url);
  }
  next();
}
app.use(requireHTTPS);

// Définition des routes
const mainRoute = require("./routes/Main");
const userRoute = require("./routes/User");
const loginRoute = require("./routes/Login");
app.use("/", mainRoute);
app.use("/users", userRoute);
app.use("/login", loginRoute);

const https_port = 8080;
https.createServer(keys, app).listen(https_port, () => {
  console.log(` > Serveur HTTPS (sécurisé)     :${https_port}`);
});
