const { pool } = require('../psql');
const testmodel = require('../models/testmodel');

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

    //* Please read: https://opensourcelibs.com/lib/sequelize-handlers
    //* Please read: https://github.com/mattkrea/sequelize-handlers
    console.log(req.body);
    res.send("<h1>Data inserted</h1>");
    
}

module.exports = {
    // ! This is iqual to key:value
    testing,
    index,
    guardar
}