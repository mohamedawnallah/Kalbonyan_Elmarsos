const Repository = require('./repository');


class ProductsRepository extends Repository {

}
//Exporting a Products Repository Instance

module.exports = new ProductsRepository('products.json');
