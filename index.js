const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const imagesDir = path.join(__dirname, 'images');

app.get('/v1/weaponBilder/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(imagesDir, imageName);
    
    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).send('Bild nicht gefunden');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
