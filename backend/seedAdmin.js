const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const seedAdmin = async () => {
  await connectDB();
  
  try {
    const adminExists = await User.findOne({ email: 'admin@swadesi.com' });
    if (adminExists) {
      console.log('Admin already seeded.');
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    const admin = new User({
      name: 'Super Admin',
      email: 'admin@swadesi.com',
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();
    console.log('Admin seeded successfully! Use admin@swadesi.com / admin123');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
