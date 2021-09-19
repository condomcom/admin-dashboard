const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(serveStatic(path.join(__dirname, '/dist')))

app.set('port', (process.env.PORT || 8081))
app.listen(app.get('port'))

console.log('Listening on port: ' + port)