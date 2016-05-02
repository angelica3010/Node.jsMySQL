// Challenge #2: Manager View (Next Level)

// Create a new Node application called BamazonManager.js. Running this application will:

// List a set of menu options: 1) View Products for Sale 2) View Low Inventory 3) Add to Inventory 4) Add New Product

// If a manager selectis option 1 it should list all of the products available for sale: the item IDs, names, prices, and quantities.

// If a manager selects option 2 it should list all items for which the quantity available in stores is less than 5.

// If a manager selects option 3 it should provide the manager with the ability to "add more" of any item currently in the store.

// If a manager selects option 4 it should provide the manager with the ability to add a completely new product to the store.

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

prompt.start();


	console.log("\n");
	console.log("Welcome to Bamazon!");

// List a set of menu options: 1) View Products for Sale 2) View Low Inventory 3) Add to Inventory 4) Add New Product

	
	
		console.log("Option 1: View Products for Sale ");
		console.log("Option 2: View Low Inventory");
		console.log("Option 3: Add to Inventory");
		console.log("Option 4: Add New Product")

//Make a Prompt here for Options that a User can choose from. Then make functions for each option
//Prompt package info is here https://www.npmjs.com/package/prompt
prompt.get(["Option"], function (err, result){
 if (result.Option==1) {
 	viewProductsforSale();
 } else if (result.Option==2) {
 	lowInventoryItems();

 }else if (result.Option==3) {
 	addItemtoInventory();

 } else if (result.Option ==4) {
 	addNewProduct()
 }else {
 	console.log("Sorry that option is not valid.") 
 }

})
// If a manager selectis option 1 it should list all of the products available for sale: the item IDs, names, prices, and quantities.
	
function viewProductsforSale(){
	connection.query("SELECT * FROM Bamazon.Products", function(err, rows, fields) {
	if (err) throw err;
		console.log(rows)


		for(var j=0;j<rows.length;j++){
			console.log("Item ID:", rows[j].ITEMID, "Product Name:", rows[j].ProductName, "Prices: ", rows[j].Price, "Stock Quantity:", rows[j].StockQuantity)
		}
	});
};


function lowInventoryItems(){
	connection.query("SELECT * FROM Bamazon.Products", function(err, rows, fields) {
	if (err) throw err;
		console.log(rows)


		for(var j=0;j<rows.length;j++){


			if (rows[j].StockQuantity < 9){
				console.log("There are low quantities of", rows[j].ProductName + ".");
			}

		}
	});
};


function addItemtoInventory(){


	prompt.get(["ProductName", 'StockQuantity'], function (err, result) {

			connection.query("UPDATE Products SET Products.StockQuantity = Products.StockQuantity + "+ result.StockQuantity +" where Products.ProductName = '"+result.ProductName+"';", function(err, res){

			if (err) {
				console.log(err);

			}
			else {
				console.log(res);
				console.log("Update Successful!");
			}
			})

			})

};




function addNewProduct(){
	// connection.query("SELECT * FROM Bamazon.Products", function(err, rows, fields) {
	// if (err) throw err;
	// 	console.log(rows)

	prompt.get(["ProductName", "DepartmentName", "Price", 'StockQuantity'], function (err, result) {
					//testing it works! console.log( "INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('"+result.ProductName+"', '"+result.DepartmentName+"', '"+result.Price+"', '"+result.StockQuantity+"');")

		connection.query( "INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('"+result.ProductName+"', '"+result.DepartmentName+"', '"+result.Price+"', '"+result.StockQuantity+"');", function (err, res){

			if (err) {
				console.log(err);

			}
			else {
				console.log(result);
			}
		})

	});
		// });

}



	

			

	

