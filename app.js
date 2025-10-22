const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Jenkins CI/CD!,This is Eswari from Elavate labs - task2'));
app.listen(3000, () => console.log('App running on port 3000'));
