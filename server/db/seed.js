const db = require('./index.js');
const Product = require('./product.js');
const faker = require('faker');

var id;
var category;
var subCategory;
var categoryType;
var company;
var title;
var price;
var itemNumber;

var data = () => {
  category = faker.commerce.productAdjective();
  subCategory = faker.commerce.productMaterial();
  categoryType = faker.commerce.product();
  company = faker.company.companyName();
  title = faker.commerce.productName();
  price = faker.commerce.price();
  itemNumber = faker.address.zipCode();
};

const insertSampleBlogs = async function() {
  for (var i = 0; i <= 100; i++) {
    var x = i;
    await data();
    Product.create([
      {
        productId: x,
        category: category,
        subCategory: subCategory,
        categoryType: categoryType,
        company: company,
        title: title,
        price: price,
        itemNumber: itemNumber
      }
    ])
      .then(() => {
        db.connection.close();
      })
      .catch((err) => console.error(err));
  }
};

insertSampleBlogs();
