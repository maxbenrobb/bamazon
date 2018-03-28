var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "tuck*123",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        inquirer
        .prompt([
            {
            name: "choice",
            type: "list",
                choices: function() {
                    var choiceArray = [];
                    for (i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].product_name);
                    choiceArray.push(res[i].product_name);
                    }
                return choiceArray;
                },
            message: "What auction would you like to purchase?"
            },       
        ])
        connection.end();
    })
}


