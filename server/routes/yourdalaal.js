const express = require('express');
const Product = require('../models/Product')
const catchAsync=require('../utilities/catchAsync')
const ExpressError=require('../utilities/ExpressError')

const router = express.Router({mergeParams:true});




router.get('/', catchAsync(async (req, res) => {
    const products =await Product.find({});
    // console.log(products);
    res.render('yourdalaal/index',{products})
}))



router.get('/new', (req, res) => {
    res.render('yourdalaal/new')
})



router.get('/:productId', catchAsync(async (req, res) => {
    
    const product = await Product.findById(req.params.productId);
    res.render('yourdalaal/show',{product});
}))



router.get('/:productId/edit', catchAsync(async (req, res) => {
    const product=await Product.findById(req.params.productId)
    res.render('yourdalaal/edit',{product});
}))



router.post('/', catchAsync(async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/yourdalaal/${product._id}`);
}))



router.put('/:productId', catchAsync(async (req, res) => {
    await Product.findByIdAndUpdate(req.params.productId, { ...req.body })
    res.redirect(`/yourdalaal/${req.params.productId}`)
}))



router.delete('/:productId', catchAsync(async (req, res) => {
    
    await Product.findByIdAndDelete(req.params.productId)
    res.redirect('/yourdalaal')
    
}))



module.exports = router;