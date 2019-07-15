const express = require('express')
const messageCtrl = require('./controllers/messages_controller')
const app = express()
const PORT = 3001

//this is using express static to open a particular file
app.use(express.static(__dirname + '/../public/build'))
app.use(express.json())

const messagesBaseUrl = '/api/messages'
//this creates my create method from the controller
app.post(messagesBaseUrl, messageCtrl.create);
//this reads my read method from the controller
app.get(messagesBaseUrl, messageCtrl.read);
//this updates the message and runs the corresponding method from the controller
//it is also worth noting that we need to escape the javascript surrounding the messagesBaseUrl in order to add the 
// :id in plain text or what I would call string text
app.put(`${messagesBaseUrl}/:id`, messageCtrl.update);
app.delete(`${messagesBaseUrl}/:id`, messageCtrl.delete);

//this listen line of code makes sure that the server is always listening for my actions
app.listen(PORT, () => {
    console.log(`CHARLIE MURPHY!!! ${PORT}`)
})
