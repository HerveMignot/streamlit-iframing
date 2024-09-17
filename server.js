const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Function to load app URLs from YAML
const loadAppUrls = () => {
  try {
    const fileContents = fs.readFileSync('./config_apps.yaml', 'utf8');
    const data = yaml.load(fileContents);
    return data.apps;
  } catch (e) {
    console.error(e);
    return [];
  }
};

// Serve app URLs to the frontend
app.get('/api/app-urls', (req, res) => {
  const urls = loadAppUrls();
  res.json(urls);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
