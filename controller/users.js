const knex = require("../knexfile");

module.exports = {
    getuser,
    adduser
}


function getuser (req,res) {

    knex.raw(`SELECT * FROM dbo.users`).then(resul => {
        res.send(resul)
    }).catch(err => {
        console.error(err)
    })
    
}

function adduser (req, res) {
    
    const { Name, LastName } = req.body
    
    knex.raw(`INSERT INTO dbo.users (first_name,last_name) values(?, ?) `, [Name, LastName]).then(resul => {
        res.send('ok')
    }).catch(err => {
        console.error(err)
    })
    

}


