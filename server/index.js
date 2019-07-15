const express = require('express')
const messageCtrl = require('./controllers/messages_controller')
const app = express()
const PORT = 3001
app.listen(PORT, () => {
    console.log(`CHARLIE MURPHY!!! ${PORT}`)
})
app.use(express.static(__dirname + '/../public/build'))
app.use(express.json())
const messagesBaseUrl = '/api/messages'
app.post(messagesBaseUrl, messageCtrl.create);
app.get(messagesBaseUrl, messageCtrl.read);
app.put(`${messagesBaseUrl}/:id`, messageCtrl.update);
app.delete(`${messagesBaseUrl}/:id`, messageCtrl.delete);

