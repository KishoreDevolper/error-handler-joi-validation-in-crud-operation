
exports.up = function(knex) {
    return knex.schema.createTable('Users',(table)=>{
        table.increments();
        table.string('Name')
        table.string('Designation')
        table.string('DateOfBirth')
        table.string('Phonenumber')
        table.string('Email')
        
        table.timestamps(true,true)
    })  
};

exports.down = function(knex) {
  return knex.schema.dropTableExists('Users');
};
