const express = require('express')
const Ajv = require('ajv')

const searchSpec = require('./schema/search')

const app = express()
const PORT = 8000

app.use(express.json())

app.post('/validate', (req, res) => {
    console.log(JSON.parse(atob(req.body.payload)))
    const ajv = new Ajv()
    const validate = ajv.compile(searchSpec)
    const valid = validate(JSON.parse(atob(req.body.payload)))
    if (!valid) {
        errors = validate.errors.map(x => `path: ${x.schemaPath}, error: ${x.message}`)
        res.json({errors: errors})
    } else {
        res.json({errors: []})
    }
})
app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname}))
app.get('/client.js', (req, res) => res.sendFile('client.js', {root: __dirname}))
app.get('/client.css', (req, res) => res.sendFile('client.css', {root: __dirname}))


app.listen(PORT, () => console.log(`application listening on port: ${PORT}`))