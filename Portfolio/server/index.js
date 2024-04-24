import express from 'express';
import { json } from 'body-parser';
import { MongoClient as _MongoClient } from 'mongodb';

const app = express();

app.use(json());


const MongoClient = _MongoClient;
const mongoURI = 'mongodb://localhost:27017'; 
const dbName = 'contactFormDB'; 

require('dotenv').config(); 

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;
const port = process.env.PORT || 3000;


app.post('/submitMessage', (req, res) => {
    MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).json({ message: 'Database error' });
            return;
        }

        const db = client.db(dbName);
        const messagesCollection = db.collection('messages');

        
        const { name, email, message } = req.body;

        
        messagesCollection.insertOne({ name, email, message }, (insertErr, result) => {
            if (insertErr) {
                console.error('Error inserting message into MongoDB:', insertErr);
                res.status(500).json({ message: 'Database error' });
            } else {            

                res.status(200).json({ message: 'Message saved successfully' });
            }
            client.close();
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
