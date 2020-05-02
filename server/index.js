const express = require ('express');
app = express()
app.use(express.json())

//This is my table for may data base
const contacts= []

app.get('/api/contacts', (req, res) =>{
    res.send(contacts)
})

app.post('/api/contacts', (req,res)=>{
   // console.log('What is REQ?', req.body )
    const newContact={
        id:contacts.length,
        name:req.body.name,
        phoneNumber: req.body.phoneNumber,
        email:req.body.email,
    }
    contacts.push(newContact)
    res.send(contacts)
})
app.delete('/api/contacts/:id', (req, res)=>{
    //console.log('what is REQ.PARAMS?', req.params)
    const id=req.params.id
    const deleteIndex = contacts.findIndex(contact=>contact.id == req.params.id)
    const deleteContact =contacts.splice(deleteIndex, 1)
    res.send(contacts)
})

app.put('/api/contacts/:id', (req, res)=>{
    const id= req.params.id
    const updateIndex=contacts.findIndex(contact=>contact.id == req.params.id)
    if(updateIndex !== -1){
        //console.log('What is REQ.Params?', req.params)
        console.log('what is REQ.Body?', req.body)
        contacts[updateIndex].name=req.body.name,
        contacts[updateIndex].phoneNumber=req.body.phoneNumber,
        contacts[updateIndex].email=req.body.email
    }
    res.send(contacts)
})









app.listen(4000,()=>console.log('Server Started!'))