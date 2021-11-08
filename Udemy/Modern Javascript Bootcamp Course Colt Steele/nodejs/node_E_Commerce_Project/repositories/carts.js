const Repository = require('./repository');


class CarstRepository extends Repository {

}
//Exporting a Products Repository Instance

module.exports = new CarstRepository('carts.json');
