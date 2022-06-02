//* Creating a model for the database 
const Sequelize = require('sequelize');
const sequelize = require('../connection');

const Note = sequelize.define('notes', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    subject: Sequelize.STRING,
    message: Sequelize.TEXT
});

/**
 **Testing a query 
 * sequelize.sync({force:true})
    .then(() => {
        console.log(`Database & tables created!`);
        //* sample notes that we'll then persist in the database
        Note.bulkCreate([
            {
            name: 'Ronaldo', 
            email: 'ronaldodjj@correo.com',
            subject: 'Contrato indefinido',
            message: 'Contratar'
            }
        ]).then(function(){
            return Note.findAll();
        }).then(function(notes){
            console.log(notes);
        });
    });
 * 
 * 
 * 
 */


module.exports = Note;