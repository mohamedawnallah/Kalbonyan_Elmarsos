const express = require('express');
const carts = require('../repositories/carts');
const cartsRepo = require('../repositories/carts')
const productsRepo = require('../repositories/products')

const cartShowTemplate = require('../views/carts/show')

/////onst productsRepo = require('../repositories/prod..ucts')

const router = express.Router();
/////
// Rece/ive a Post Request to add an item to a cart
router.post('/cart/products', async (req, res) => {
    let cart; 
    if (!req.session.cartId) {
        // We don't have a cart, we need to create one,
        // and store the cart id on the req.session.cartId
        // property
    
         cart = await cartsRepo.create({items:[]});
        req.session.cartId = cart.id;
    } else{
        // We have a cart! Let's get It from repository
         cart = await cartsRepo.getOne(req.session.cartId );
    
    }
    console.log(cart);  
    const existingItem = cart.items.find(item => item.id === req.body.productId);

    if (existingItem) {
        // increment quantity for existing product
        existingItem.quantity++;
    } else {
        // add new product to items array
        cart.items.push({id:req.body.productId, quantity:1 });
    }
    await cartsRepo.update(cart.id, {
        items:cart.items
    })

    return res.redirect('/cart');

  });

// GET REQUEST SHOW ALL ITEMS IN THE CART
router.get('/cart', async (req, res) => {
    if (!req.session.cartId) {
        return res.redirect('/');
    }
   const cart = await cartsRepo.getOne(req.session.cartId );
    for (let item of cart.items) {
        // item == {id,quantity}
        const product = await productsRepo.getOne(item.id);
        item.product = product;
        
    }
    res.send(cartShowTemplate({items: cart.items}))
});
// RECEIVE A POST RQUEST TO DELETE AN ITEM FROM CART

router.post('/cart/products/delete', async (req,res) => {
    const {itemId} = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);
    const items = cart.items.filter(item => item.id !== itemId);
    await cartsRepo.update(req.session.cartId, {items});
     res.redirect('/cart')
});

module.exports = router;