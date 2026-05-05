const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

const seedProducts = async () => {
  await connectDB();
  
  try {
    // Check if products already exist
    const count = await Product.countDocuments();
    if (count > 0) {
      console.log('Products already seeded.');
      process.exit(0);
    }

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    // The fakestore API uses 'id', which matches our schema
    await Product.insertMany(data);
    
    console.log('Database seeded with products successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedProducts();
