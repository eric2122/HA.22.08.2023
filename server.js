const fs = require('fs');
const express = require('express'); 
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware für das Parsen von JSON im Request-Body

const NACHRICHT_FILE = './nachricht.txt';

app.get('/api/nachricht', (req, res) => { 
  const nachricht = fs.readFileSync(NACHRICHT_FILE, 'utf8');
  res.json({ nachricht }); 
});

app.post('/api/nachricht/update', (req, res) => {
  const neueNachricht = req.body.nachricht;
  fs.writeFileSync(NACHRICHT_FILE, neueNachricht);
  res.json({ success: true });
});

const port = 8080; 

app.get('/', (req, res) => { 
  res.send('Hallo von Express!'); 
}); 

app.listen(port, () => { 
  console.log(`Server läuft auf Port ${port}`); 
});

