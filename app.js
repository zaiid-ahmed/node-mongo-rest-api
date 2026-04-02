const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://zk4467450_db_user:BcaQlkxxTJchOLVF@cluster0.cxrehlt.mongodb.net/?appName=Cluster0')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Error', err));

const itemSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model('Item', itemSchema);


app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});


app.get('/items/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.json(item);
});


app.post('/items', async (req, res) => {
    const newItem = new Item({ name: req.body.name});
    await newItem.save();
    res.json(newItem);
});


app.put('/items/:id', async (req, res) => {
    const updated = await Item.findByIdAndUpdate(
        req.params.id,
        {name: req.body.name},
        {new: true} 
    );
    res.json(updated);
});


app.delete('/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({message: 'Deleted'});
});


app.listen(3000, () => console.log('Server running on port 3000'));
