var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "Bamazon"

});

//what does err.stack do and mean?
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 

});



// Challenge #1: Customer View (Minimum Requirement)

// Create a MySQL Database called Bamazon.

//Create new database: create database [database];

//create database Bamazon;



//Then create a Table inside of that database called Products.


// The products table should have each of the following columns:

// ITEMID (unique id for each product)

// ProductName (Name of product)

// DepartmentName

// Price (cost to customer)

// StockQuantity (how much of the product is available in stores)

//create table Products

//To enable MySQL in console, do the following:

//mysql.server start

// mysql -u root -p


// click enter for password to override
//type in exit to exit mysql


//mysql> create table Products (ITEMID int AUTO_INCREMENT, ProductName VARCHAR(120), DepartmentName VARCHAR(120), Price int, StockQuantity int, PRIMARY KEY(ITEMID));


//Populate this database with approximately 10 different products. (i.e. Insert "mock" data rows into this database and table).



//NEW
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Strawberries", "Produce", 2, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Chocolate", "Candy", 1, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Lobster", "Frozen Food", 10, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Penne Pasta", "Pasta", 1, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Lemonade", "Juices", 2, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Almonds", "Nuts", 5, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Yogurt", "Dairy", 2, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Ice Cream", "Frozen Food", 2, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Ham", "Meat", 2, 10);
//INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity) VALUES ("Chicken", "Meat", 6, 10);



//Then create a Node application called BamazonCustomer.js. Running this application will:

// App setup:

// 1.create App Dir named 'Bamazon'
// 2.npm init
// 4.create 'index.js' file

// Database setup:
// 1.npm install mysql
// 2.mysql config


// Run app

// node index.js


// First Display All of the Items available for sale. This initial display, should include the ids, names, and prices of products for sale

// Users should then be prompted with two messages. The first message should ask them the ID of the product they would like to buy. The second message should ask them how many of the product they would like to buy.

// Once the customer has placed the order: Your application should...

// Check if your store has enough quantity of the product to meet the customer's request. If not, you should respond to the user by saying: "Insufficient quantity" and prevent the order from going through.

// If your store DOES have enough of the product to meet the customer's request, you should fulfill their order. This means that you should show them the total cost of their puchase. Then update the SQL database to reflect the remaining quantity.


// //why do you have to do connection twice? What are rows and fields?
// connection.query('SELECT * from Bamazon.Products', function(err, rows, fields) {
//   if (err) throw err;


// console.log("Welcome to Bamazon");

// // This is showing up as error
// for(var i=0;i<rows.length;i++) {

// //this console log should display All of the Items available for sale. 
// //This initial display, should include the ids, names, and prices of products for sale


// //This Works!!
// //console.log("ITEMID:" + rows[i].ITEMID) 

// //This Works!!
// //console.log("ProductName:" + rows[i].ProductName) 

// // This Works!!
// //console.log("Prices:" + rows[i].Price) 

// //This Works but has needs spaces
// //console.log(("ITEMID:" + rows[i].ITEMID) + ("ProductName:" + rows[i].ProductName) + ("Prices:" + rows[i].Price)) 

// //Added Spaces in between columns
// console.log(("ITEMID:" + rows[i].ITEMID) + "   " + ("ProductName:" + rows[i].ProductName) + "   "  + ("Prices:" + rows[i].Price)) 


// };

// });
// Rows 113-145 work!!


//(ITEMID int AUTO_INCREMENT, ProductName VARCHAR(120), DepartmentName VARCHAR(120), Price int, StockQuantity int, PRIMARY KEY(ITEMID));



// prompt.start ()



// prompt.get(["ITEMID", "ProductName", "StockQuantity"], function (err, result){

// //var itemWanted = new itemWanted(result.ITEMID, result.ProductName, result.DepartmentName, result.Price, result.StockQuantity)
// for(var j=0;j<rows.length;j++) {
// 	if (result.ITEMID == rows[j].ITEMID){
// 		console.log("Item Matches")
// 	}
// }
// })
		// if (result.StockQuantity <= rows[j].StockQuantity){
		// 	//console.log("Stock Quanitity Matches")
		

//console.log("Thanks for your purchase!")

// 	}
// }else{
// 	console.log("We only have" + rows[j].StockQuantity + "of" + result.ProductName + "in stock")

// 	//console.log("Item not avaiable")
// }
// };

// });




//prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
// 	var student = new Student (result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
// 	if (student.canStudentHaveFun()){
// 			console.log ("You can have fun");
// 	} else {
// 			console.log("You cannot have fun!")
// 	}
// 	console.log( "**********")
// 	 if (err){
// 	 	console.log(err);
// 	 }
// 	// return student;
// });


connection.query("SELECT * FROM Bamazon.Products", function(err, rows, fields) {
	if (err) throw err;
	console.log("\n");
	console.log("Welcome to Bamazon!");
	
//this means round to 2 decimal spaces
	for(var i=0;i<rows.length;i++){
		console.log(("ITEMID: " + rows[i].ITEMID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price.toFixed(2) + " | " + rows[i].StockQuantity + " available");
	}
	console.log("\n");
	prompt.get(['ITEMID', 'StockQuantity'], function (err, result) {
		for(var j=0;j<rows.length;j++){
			var totalSales = result.StockQuantity*rows[j].Price;
			if (result.ITEMID == rows[j].ITEMID){
				if (result.StockQuantity <= rows[j].StockQuantity){
					console.log("\n");
					console.log("Thank You for purchasing " + result.StockQuantity + " packages of " + rows[j].ProductName);
					console.log("Total cost of your purchase: " + "$" + (totalSales));
					connection.query("UPDATE Bamazon.Products SET StockQuantity = ? Where ITEMID = ?", [(rows[j].StockQuantity - result.StockQuantity), result.ITEMID], function (err, result) {
					    if (err) throw err;
					    connection.end();
					  });					    
				}else{
					console.log(rows[j].StockQuantity + " Insufficient quantity");
					connection.end();
				};
			}else if (result.ITEMID != rows[j].ITEMID){
				// console.log("You did not select available ITEMID");
			}else{
				// console.log("Broken");
			}
		};
	});
});
