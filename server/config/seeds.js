const db = require('./connection');
const { Post } = require('../models');

db.once('open', async () => {
    await Post.deleteMany();

    await Post.insertMany([
        {
            game_name: "Starfield (PC, XBOX SERIES X|S)",
            avg_score: 7,
            messages: "Starfield is a next-generation roleplaying game set in space, created by the acclaimed team behind The Elder Scrolls and Fallout.",
            image: 'Starfield-hero-instant-classic.jpeg'
        },
        {
            game_name: "Dead Island 2 (PC, PS4, PS5, Xbox One, Xbox Series X|S)",
            avg_score: 7,
            messages: "Dead Island 2 is a first-person action-RPG set in a glorious sun and blood-drenched setting -- a hellish, yet stylish and vibrant, gore-ridden version of Los Angeles, nicknamed HELL-A.",
            image: 'dead-island-2_akre.jpg'
        },
        {
            game_name: "Baldur's Gate 3 (PC, PS5, Xbox Series X|S)",
            avg_score: 10,
            messages: "Baldur's Gate III is the official third adventure in the venerable Baldur's Gate role-playing series. Adventure, loot, battle and romance as you journey through the Forgotten Realms and beyond. Play alone, and select your companions carefully, or as a party of up to four in multiplayer.",
            image: 'f321c065cf3f405b6d0ac06fd5a550d6a95b5a5e-scaled.jpeg'
        },
        {
            game_name: "Diablo IV (Xbox Series X/S, PS5, PS4, Xbox One, PC)",
            avg_score: 9,
            messages: "The endless battle between the High Heavens and the Burning Hells rages on as chaos threatens to consume Sanctuary in Diablo IV, the fourth chapter of Blizzard's hellacious action-RPG saga.",
            image: 'mL6754_1024x1024.jpeg'
        },
        {
            game_name: "The Legend of Zelda: Tears of the Kingdom -(Nintendo Switch)",
            avg_score: 10,
            messages: "The Legend of Zelda: Tears of the Kingdom, the sequel to Nintendo's Switch launch title, continues Link's adventures in an open-world Hyrule, this time letting Link explore floating islands and soar high in the skies above the vast lands of Hyrule.",
            image: 'share-fb.jpg'
        },
        {
            game_name: "Wild Hearts - (PC, PS5, Xbox Series X/S)",
            avg_score: 8,
            messages: "Wild Hearts is a monster hunting game set in Azuma – effectively a fantasy feudal Japan – in which teams of up to three players take on giant nature-infused beasts called Kemono.",
            image: 'Wild_Hearts_cover_art.jpg'
        },
        {
            game_name: "Lies of P - PC, PS4, PS5, Xbox One, Xbox Series X/S",
            avg_score: 8,
            messages: "Lies of P is a challenging action game with a unique 'lie' system where what you do & say as the main character dynamically affects gameplay. The game's story is a unique, darker twist on the classic story of Pinocchio.",
            image: 'Lies_of_p_cover_art.jpg'
        },
        {
            game_name: "Redfall - PC, Xbox Series X/S",
            avg_score: 4,
            messages: "Open-world co-operative FPS from the makers of Prey and Dishonored, Arkane Studios.",
            image: 'Redfall_cover.jpg'
        },
    
    ]);

    console.log('posts seeded');

    process.exit();
});