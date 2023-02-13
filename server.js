const express = require('express')

const app = express()
const PORT = 8000

app.use(express.json())

app.post('/validate', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send('ding dong')
})
app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname}))
app.get('/client.js', (req, res) => res.sendFile('client.js', {root: __dirname}))
app.get('/client.css', (req, res) => res.sendFile('client.css', {root: __dirname}))


app.listen(PORT, () => console.log(`application listening on port: ${PORT}`))