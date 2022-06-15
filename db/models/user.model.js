const {Model} = require('objection');

class user extends Model {
    static get tableName(){
        return 'Users'
    }
   
} 

module.exports = user