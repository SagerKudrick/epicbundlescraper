const { website } = require("./scraper.js")

website((result) => {
    console.log(result)
})

/*
result:

[
  Article {
    _title: 'The 2022 All-In-One Piano & Musician Training Bundle',
    _desc: "Enter the Music World Equipped with the Fundamentals! 55 Hours of Playing Instruments, Writing Your Own Songs, & Producing Them! A new e-Learning bundle. What's included? Pianoforall: The Incredib...",
    _link: 'https://www.epicbundle.com/the-2022-all-in-one-piano-musician-training-bundle/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/piano-bundle-400x225.jpeg'
  },
  Article {
    _title: 'Humble "Health & Wellness" Bundle',
    _desc: 'Pay what you want starting at only $1. Take care of every aspect of your life. You can follow many roads to self-improvement—exercise, nutrition, rest, mindfulness, and all manner of therapeutic act...',
    _link: 'https://www.epicbundle.com/humble-health-wellness-bundle/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/Screenshot-2022-02-06-at-20.36.20-400x225.jpg'
  },
  Article {
    _title: 'GAME for FREE: Figment',
    _desc: `Grab another great FREE game! This time it's the musical action-adventure game "Figment" with 86% positive reviews. It's playable on your Windows PC. Hint: Follow us on facebook... and you won't miss...`,
    _link: 'https://www.epicbundle.com/game-for-free-figment/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2020/03/free-game-figment-400x225.jpg'
  },
  Article {
    _title: 'Platinum Collection - Build your own Bundle (February)',
    _desc: "Welcome to February’s Platinum Collection! Choose 3, 5 or 7 awesome Steam games in our monthly Platinum Collection, which this month includes 10 new-to-bundle selections! Hint: Don't miss the epic H...",
    _link: 'https://www.epicbundle.com/platinum-collection-build-your-own-bundle-february/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/fanatical-platinum-february-400x225.jpeg'
  },
  Article {
    _title: 'Humble "F*CK CANCER" Game Bundle',
    _desc: '100% donated to cancer research. To celebrate the life and legacy of father, husband, and former Starbreeze Studios head Mikael Nermark, friends, family, and colleagues across the game industry rallie...',
    _link: 'https://www.epicbundle.com/humble-fck-cancer-game-bundle/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/Screenshot-2022-02-04-at-20.12.09-400x225.jpg'
  },
  Article {
    _title: 'Fanatical - "Safe In Our World" Charity Bundle',
    _desc: 'In support of mental health awareness and assistance, Fanatical is proud to present the Safe In Our World Charity Bundle - a superb collection of Steam keys featuring highly-rated titles, with seven n...',
    _link: 'https://www.epicbundle.com/fanatical-safe-in-our-world-charity-bundle/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/safe-the-world-charity-bundle-400x225.jpeg'
  },
  Article {
    _title: 'GAME for FREE: Yooka-Laylee and the Impossible Lair',
    _desc: `Grab another game for FREE. This time it's the platform adventure Game "Yooka-Laylee Impossible Lair". (93% positive reviews!) The game is playable on your Windows PC. Hint: Follow us on facebook...`,
    _link: 'https://www.epicbundle.com/game-for-free-yooka-laylee-and-the-impossible-lair/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2019/12/Yooka-Laylee-and-the-Impossible-Lair_for-free-400x225.jpg'
  },
  Article {
    _title: 'The Complete GameCreators Mega Maker Pack Bundle',
    _desc: "Develop Your Dream Video Game & Publish on Multiple Platforms with Thousands of Royalty-Free 2D Sprite & 3D Assets from This Mega Bundle. A new e-Learning bundle. What's included? AppGameKit S...",
    _link: 'https://www.epicbundle.com/game-creators-mega-pack-dev/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/game-dev-bunlde-400x225.jpeg'
  },
  Article {
    _title: 'Indie Gala - Smart Move Bundle',
    _desc: "Pay $2.99 or more to get this bundle full of Steam games before price increases and SAVE 92% OFF. Save your money. Support indie developers. Get awesome games. Hint: Don't miss the latest Humble CHOIC...",
    _link: 'https://www.epicbundle.com/indie-gala-smart-move-bundle/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/smart-move-bundle-400x225.jpeg'
  },
  Article {
    _title: 'Humble "The Battle Box VFX" Bundle',
    _desc: 'Pay what you want starting at only $1. Get ActionVFX - The Battle Box 4K, ActionVFX - The Battle Box 2K and more! Make your video projects go boom with this hyperkinetic bundle of visual effects (VFX)...',
    _link: 'https://www.epicbundle.com/humble-the-battle-box-vfx-bundle/',
    _imgsrc: 'https://www.epicbundle.com/wp-content/uploads/2022/02/Screenshot-2022-02-02-at-08.31.25-400x225.jpg'
  }
]
*/
