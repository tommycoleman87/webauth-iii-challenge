
exports.up = function(knex) {
 return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128).notNullable().unique();
        tbl.string('password', 128).notNullable();
        tbl.text('departments', 1000)

    })
};

exports.down = function(knex) {
 return knex.schema
    .dropTableIfExists('users');
};
