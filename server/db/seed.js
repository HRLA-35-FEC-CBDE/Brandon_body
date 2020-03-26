const db = require('./index.js');
const Product = require('./product.js');
const faker=require('faker');

// var category=faker.commerce.productAdjective();
// var subCategory=faker.commerce.productMaterial();
// var categoryType=faker.commerce.product();
// var company=faker.company.companyName();
// var title=faker.commerce.productName();
// var price=faker.commerce.productName();
// var itemNumber=faker.address.zipCode();
var id;
var category;
var subCategory;
var categoryType;
var company;
var title;
var price;
var itemNumber;


// const sampleProducts = [
//   {
//     category: category,
//     subCategory: subCategory,
//     categoryType: categoryType,
//     company: company,
//     title: title,
//     price: price,
//     itemNumber: itemNumber,
//   }
// ];
var data =  (()=>{
  category= faker.commerce.productAdjective();
  subCategory= faker.commerce.productMaterial();
  categoryType= faker.commerce.product();
  company= faker.company.companyName();
  title= faker.commerce.productName();
  price=faker.commerce.price();
  itemNumber= faker.address.zipCode();
});


const insertSampleBlogs = async function () {
  for(var i=0; i<=100; i++){
    var x = i;
    await data()
    Product.create([
      {
        productId:x,
        category: category,
        subCategory: subCategory,
        categoryType: categoryType,
        company: company,
        title: title,
        price: price,
        itemNumber: itemNumber,
      }
    ])
   .then(()=> {db.disconnect();})
  }
};


insertSampleBlogs();
