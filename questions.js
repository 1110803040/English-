// 題庫檔案：questions.js (已剔除 Exercise F)
const quizData = [
    // --- EXERCISE E ---
    { question: "1. Flight 209 is a _______ flight.", options: ["three hours", "three-hour"], correct: 1 },
    { question: "2. Your grandfather looks young for a _______ man.", options: ["75 years old", "75-year-old"], correct: 1 },
    { question: "3. Lunch usually costs about _______.", options: ["five dollars", "five-dollar"], correct: 0 },
    { question: "4. It's nice to have a _______ vacation.", options: ["two weeks", "two-week"], correct: 1 },
    { question: "5. Robert's house has _______.", options: ["three bedrooms", "three-bedroom"], correct: 0 },
    { question: "6. I'd like to take a _______ break.", options: ["ten minutes", "ten-minute"], correct: 1 },
    { question: "7. Lt Lee's new sports car has _______.", options: ["two doors", "two-door"], correct: 0 },
    { question: "8. You need to use a _______ pot to cook the rice.", options: ["three quarts", "three-quart"], correct: 1 },

    // --- EXERCISE G ---
    { question: "9. It _______ a new car.", options: ["to look like", "looks like", "like to look", "looks like it"], correct: 1 },
    { question: "10. The letter has six pages. It's a _______ letter.", options: ["page six", "six-pages", "six-page", "pages six"], correct: 2 },
    { question: "11. That house _______ over a hundred years ago.", options: ["built", "was built", "is built", "was building"], correct: 1 },
    { question: "12. I think he's about 35 years old. He's in his _______-thirties.", options: ["mid", "neat", "elderly", "early"], correct: 0 },
    { question: "13. _______ to the library?", options: ["The books were return", "Did the books return", "Were the books returned", "The books returned"], correct: 2 },
    { question: "14. If John says he's coming at 8:00, he'll be here. He's a very _______ person.", options: ["reliable", "neat", "messy", "stingy"], correct: 0 },
    { question: "15. Many men become _______ when they get older. They lose a lot of their hair.", options: ["curly", "bald", "wavy", "blond"], correct: 1 },
    { question: "16. This homework isn't extremely difficult, but it's very _______.", options: ["demanding", "dependable", "neat", "reliable"], correct: 0 },
    { question: "17. He appears _______ the boss.", options: ["be", "to be", "being", "to be he's"], correct: 1 },
    { question: "18. Ann: What's the best hotel in the city? Roger: Well, the Grande Hotel is a _______ hotel.", options: ["five-star", "gets five stars", "five stars", "with five stars"], correct: 0 },
    { question: "19. My parents' _______ is very important to me. That's why I always tell them the truth.", options: ["character", "brunette", "quality", "trust"], correct: 3 },
    { question: "20. The angry customer _______ his money back.", options: ["shared", "relied on", "demanded", "depended on"], correct: 2 },

    // --- 第二部分 EXERCISE E ---
    { question: "21. I really can't remember _______.", options: ["is the apartment furnished", "if the apartment is furnished", "the apartment isn't furnished"], correct: 1 },
    { question: "22. It's really hot in here. Can we turn on the _______?", options: ["efficiency", "heating", "air conditioning"], correct: 2 },
    { question: "23. This library book is due. You'd better _______.", options: ["return it", "check it out", "lend it to me"], correct: 0 },
    { question: "24. I need to save money so I can furnish my _______.", options: ["apartment", "car", "lease"], correct: 0 },
    { question: "25. Can you please tell me when _______ to arrive?", options: ["if flight 35 is scheduled", "is flight 35 scheduled", "flight 35 is scheduled"], correct: 2 },
    { question: "26. John: Why do you exercise so much? Mike: Because it keeps _______.", options: ["me to fit", "I'm fit", "me fit"], correct: 2 },
    { question: "27. Let's take highway 95 because it's a _______.", options: ["four-lanes highway", "four-lane highway", "four lane of highway"], correct: 1 },
    { question: "28. Excuse me, do you know _______ credit cards?", options: ["does this store accepts", "if this store accepts", "whether accepts this store"], correct: 1 },
    { question: "29. What utilities do you pay?", options: ["efficiency and lease", "garbage and paint", "gas and water"], correct: 2 },
    { question: "30. Maria is upset because she had _______ with her husband.", options: ["a lease", "an argument", "a section"], correct: 1 },
    { question: "31. I wonder _______ right now in China.", options: ["what the weather is like", "how is the weather like", "if the weather is like"], correct: 0 },
    { question: "32. I'd like to play tennis. Are there any _______ around here?", options: ["courts", "sections", "districts"], correct: 0 },
    { question: "33. Transportation in this city is difficult. There is too much _______.", options: ["paint", "traffic", "privacy"], correct: 1 },
    { question: "34. Julia works in real estate. She sells _______.", options: ["furniture", "transportation", "houses and apartments"], correct: 2 },
    { question: "35. Because of problems at work, Bob was _______ from the promotion list.", options: ["excluded", "included", "considered"], correct: 0 },
    { question: "36. I'd like to lease _______.", options: ["a pet", "an apartment", "a classified ad"], correct: 1 },
    { question: "37. Tickets for the play are _______ at the theater box office.", options: ["public", "including", "available"], correct: 2 },
    { question: "38. The Smith's have three _______: a cat and two dogs.", options: ["pets", "sections", "arguments"], correct: 0 },
    { question: "39. Do you have an invitation? This is a _______ party.", options: ["due", "furnished", "private"], correct: 2 },
    { question: "40. Brad and Mark always _______ about who gets to go first.", options: ["include", "argue", "lease"], correct: 1 }
];
