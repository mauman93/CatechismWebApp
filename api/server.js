const express = require('express');
const cors = require('cors');
const feastDayController = require('./controllers/feastDayController');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('CatechismApp API is running.');
});

app.get('/api/feastDay/today', feastDayController.getTodayFeastDay);

app.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});