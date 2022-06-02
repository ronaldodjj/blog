const { pool } = require('../psql');
const testmodel = require('../models/testmodel');
const sequelize = require('../connection');

const index = async (req, res) => {

    console.log(req.body)
    res.render('index', {
        hello:'world'
    })
    
}
const testing = async (req, res) => {

    try {

        const date = await pool.query("SELECT now()")
        const now = date.rows[0].now
        res.render('test', {
            now:now,
        })

    } catch (error) {
        res.send({
            error: error.message
        })
        
    }    

}

const guardar = async (req, res) => {
    
    //* Validate information
    
    

    //* Posting data to the database
    sequelize.sync({force:false})//*Sync model to the database if it is false it won't erase anything from the database
    .then(() => {
        console.log(`Database & tables created!`);
        //* sample notes that we'll then persist in the database
        testmodel.bulkCreate([
            {
            name: req.body.name, 
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
            }
        ]).then(function(){
            return testmodel.findAll();
        }).then(function(notes){
            console.log(notes);
        });
    });
       
    res.redirect('/');
    
}

module.exports = {
    // ! This is iqual to key:value
    testing,
    index,
    guardar
}