// seed.js
const mongoose = require('mongoose');
const Game = require('./models/Game'); // Import your Mongoose model for games
const cheerio = require('cheerio'); // Require cheerio for parsing HTML
const fs = require('fs');

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDatabase() {
  try {
    // Read index.html file 
    const html = fs.readFileSync('index.html', 'utf8');
    const $ = cheerio.load(html);

    // Extract game data from the HTML
    const gameData = [];

    $('.game').each((index, element) => {
      const title = $(element).find('h2').text();
      const description = $(element).find('.game-review p').text();
      const releaseDate = $(element).find('p:contains("Release Date:")').text().replace('Release Date:', '').trim();

      

      gameData.push({
        title,
        description,
        releaseDate,
        
      });
    });

    // Remove existing game data 
    await Game.deleteMany();

    // Seed the database with new game data
    await Game.insertMany(gameData);

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
