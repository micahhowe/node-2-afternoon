let messages = [];
// this global id is used in the module exports for incrementing
let id = 0

//this object will be exported to the index.js file for more actions
//this object contains methods to be added to the endpoints
module.exports = {
    //this particular method will create a new message, which will then get pushed to messages
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({id,text,time})
        //this id incrementing is an attempt to give these messages unique ids
        id++
        res.status(200).send(messages)
    },
    //this method will return the entire messages array to the server
    read: (req, res) => {
        res.status(200).send(messages);
    },
    //this method will update a specific message
    update: (req, res) => {
        //this destructures the text off of the body for easy access
        const {text} = req.body 
        //this determines which ID we will be updating
        const updateID = req.params.id
        //this uses the updateID to compare in order to find a match so we know which message to update
        const messageIndex = messages.findIndex(message => message.id == updateID)
        // we will use "message" for our full endpoint to access && update the correct thing
        let message = messages[messageIndex]
        //this updates "message" with the new info
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
          };
        //this will return the array after the changes have been made
        res.status(200).send(messages);
    },
    // this delete method will be accessed in order to delete a specific message
    delete: (req, res) => {
        //this determines which ID we will be deleting
        const deleteID = req.params.id;  
        //this uses the deleteID to compare in order to find a match so we know which message to delete
        messageIndex = messages.findIndex(message => message.id == deleteID);
        //this line will splice out one item at the index item of messageIndex
        messages.splice(messageIndex, 1);
        //this will return the array after the changes have been made (the item has been deleted)
        res.status(200).send(messages);
    }
}