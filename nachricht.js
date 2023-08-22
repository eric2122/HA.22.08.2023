const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    console.log('GET /api/nachricht ', req.ip);
    res.json({ nachricht: 'Hallo von der API!' });
});
router.post('/update', (req, res) => {
    console.log('PUT /api/nachricht/update ', req.ip);
});
module.exports = router;
