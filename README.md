Mein Full-Stack Mini-Projekt
In diesem Projekt habe ich eine einfache Full-Stack-Anwendung erstellt, die eine Nachricht vom Backend an das Frontend sendet und die Möglichkeit bietet, diese Nachricht zu aktualisieren.

Backend
Das Backend wurde mit Node.js und Express.js erstellt.

Code-Erklärung:
javascript
Copy code
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
Frontend
Das Frontend wurde mit React erstellt.

Code-Erklärung:
Nachricht.js:

javascript
Copy code
import React, { useState, useEffect } from 'react';
import NachrichtUpdate from './NachrichtUpdate';

function Nachricht() {
  const [nachricht, setNachricht] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/nachricht')
      .then(response => response.json())
      .then(json => {
        console.log(json); 
        setNachricht(json.nachricht); 
      });
  }, []);

  return (
    <div className="Nachricht">
      <h1>Aktuelle Nachricht:</h1>
      <h2>{nachricht}</h2>
      <NachrichtUpdate />
    </div>
  );
}
NachrichtUpdate.js:

javascript
Copy code
import React, {useState} from 'react';

function NachrichtUpdate() {
  const [nachricht, setNachricht] = useState('');

  function handleUpdate(e) {
    e.preventDefault();
    console.log('Update Nachricht: ', nachricht); 
  }

  return (
    <div className="NachrichtUpdate">
      <h2>Update Nachricht</h2>
      <input type="text" value={nachricht} onChange={e => setNachricht(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}








