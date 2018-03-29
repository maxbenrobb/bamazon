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

var choiceArray = [];

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
            type: "rawlist",
                choices: function() {
                    for (i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].product_name);
                    }
                return choiceArray;
                },
            message: "What auction would you like to purchase?"
            },       
        ]).then(function(value){
            console.log(value.choice);
            var number = choiceArray.indexOf(value.choice)
            quantity(number, res);
        })
        //connection.end();
    })
}

function quantity(stock, res) {
    inquirer
    .prompt([
        {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
        }
    ])
    .then(function(x) {
        if (x.quantity > res[stock].stock_quantity) {
            console.log("Sorry, insufficient quantity!")
        }
        else {
            var updatedQuantity = res[stock].stock_quantity - x.quantity;
            console.log(updatedQuantity);          
            connection.query("UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: updatedQuantity
                    },
                    {
                        item_id: stock
                    }
                ],
            function(err, res) {
                if (err) throw err;
                console.log("Order received!");
                connection.end();
            });
            }
        }
    )
}