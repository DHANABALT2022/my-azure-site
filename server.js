const express = require("express");
const path = require("path");

const app = express();

// Azure App Service tells the app which port to use through process.env.PORT.
const PORT = process.env.PORT || 3000;

// Serve everything inside the "public" folder (index.html, style.css, images...)
app.use(express.static(path.join(__dirname, "public")));

// Simple health check endpoint: https://<your-app>.azurewebsites.net/health
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Any unknown page goes back to the home page
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
