const Contact = require('../models/contact.js');

   exports.submitForm = async (req, res, next) => {
       try {
           const { name, email, message } = req.body;
           
           if (!name || !email || !message) {
               return res.status(400).json({ message: 'Name, email, and message are required fields' });
           }
           
           const newContact = new Contact({
               name: name,
               email: email,
               message: message,
           });
           
           await newContact.save();

           res.status(201).json({ message: 'Contact form submitted successfully' });
       } catch (error) {
           console.error(error);
           res.status(500).json({ message: 'Internal server error' });
       }
   };