const {getResult} = require('./services.js');

const express = require('express');
const app = express();

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/calculate', (req, res) => {
    const wholeInput = req.body.wholeInput
    let token = 'color'
    let answer = getResult(wholeInput, token);
    res.send({ 'answer' : answer })
})

app.listen(3001)
