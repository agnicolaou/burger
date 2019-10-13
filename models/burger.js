// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables for columns and values are arrays
    insertOne: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;