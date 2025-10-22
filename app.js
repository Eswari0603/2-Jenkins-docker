const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Jenkins CI/CD!,This is My task2 Jenksins demo app'));
app.listen(3000, () => console.log('App running on port 3000'));
