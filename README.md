# Mein Full-Stack Mini-Projekt

In diesem Projekt habe ich eine einfache Full-Stack-Anwendung erstellt, die eine Nachricht vom Backend an das Frontend sendet und die Möglichkeit bietet, diese Nachricht zu aktualisieren.

## Backend

Das Backend wurde mit Node.js und Express.js erstellt.

### Code-Erklärung:

```javascript
// Initialisierung der notwendigen Module und Variablen
const express = require('express'); 
const cors = require('cors');
const api = require('./routes/api');

const app = express();

// Verwendung von CORS, um Cross-Origin-Anfragen zu ermöglichen
app.use(cors());

// Einbindung der API-Routen aus dem "api"-Modul
app.use('/api', api);

// Endpunkt, um die aktuelle Nachricht zurückzugeben
app.get('/api/nachricht', (req, res) => { 
  console.log('GET /api/nachricht ', req.ip); 
  res.json({ nachricht: nachricht }); 
});

const port = 8080; 

// Grundlegender Endpunkt, um zu überprüfen, ob der Server läuft
app.get('/', (req, res) => { 
  res.send('Hallo von Express!'); 
}); 

// Starten des Servers auf dem angegebenen Port
app.listen(port, () => { 
  console.log(`Server läuft auf Port ${port}`); 
});








