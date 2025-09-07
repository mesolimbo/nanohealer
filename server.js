const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Dynamic version endpoint - proves Node.js is running
app.get('/version', (req, res) => {
    try {
        const versionData = JSON.parse(fs.readFileSync('./version.json', 'utf8'));
        res.json({
            ...versionData,
            nodeVersion: process.version,
            uptime: process.uptime(),
            serverTime: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({ error: 'Could not read version file' });
    }
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Nanohealer game running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
    console.log(`Version info: http://localhost:${PORT}/version`);
});
