const express = require("express");
const app = express();
const requestIp = require("request-ip");
const path = require('path');

// Known bot IP ranges to block (add more from blocklists if needed)
const blockedIps = [
  "66.249.64.0", // Googlebot
  "157.240.0.0", // Facebook
  "40.77.167.0"  // Bing
];

// Filter traffic by IP
app.use((req, res, next) => {
  const clientIp = requestIp.getClientIp(req).split(".")[0];
  if (blockedIps.some(ip => clientIp.startsWith(ip))) {
    res.send("<h1>Welcome to Our Site</h1><p>Nothing to see here!</p>");
  } else {
    next();
  }
});

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the landing page
app.get("/", (req, res) => {
  res.sendFile(__dirname, 'public',  '/index.html');
});

// Redirect for link protection
app.get("/redirect", (req, res) => {
  const affiliateLink = "https://glstrck.com/aff_c?offer_id=144&aff_id=106500"; // Replace with your real link
  res.redirect(affiliateLink);
});

app.get("/privacy", (req, res) => {
  res.sendFile(__dirname, 'public', "/privacy.html");
});

app.get("/terms", (req, res) => {
  res.sendFile(__dirname, 'public', "/terms.html");
});

app.get('/conditions', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'conditions.html'));
});
app.listen(3000, () => console.log("Server runnin’ on port 3000!"));
