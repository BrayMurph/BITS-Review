// Import necessary dependencies
const mongoose = require('mongoose');
const Game = require('./models/Game'); // Import your Mongoose model for games

// Connect to your MongoDB database (adjust the connection string)
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your seed data (replace with your actual data)
const seedData = [
  {
    title: 'Game 1',
    description: 'Description for Game 1',
    rating: 4.5,
    platform: 'PlayStation 5',
    // Add more fields and data as needed
  },
  {
    title: 'Game 2',
    description: 'Description for Game 2',
    rating: 4.0,
    platform: 'Xbox Series X',
    // Add more fields and data as needed
  },
  // Add more data entries as needed
];

// Function to seed the database with the provided data
async function seedDatabase() {
  try {
    // Remove existing game data (optional, based on your needs)
    await Game.deleteMany();

    // Seed the database with new game data
    await Game.insertMany(seedData);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Run the seed function
seedDatabase();

