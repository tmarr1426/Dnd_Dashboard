// Do not change this code

const placeholderQuestions = [
    {
      category: "Nature",
      question: "The human heart has how many chambers?",
      answer: "4",
    },
    {
      category: "Nature",
      question: "What is the largest animal currently on Earth?",
      answer: "Blue Whale",
    },
    {
      category: "Nature",
      question: "What is the hottest planet in the Solar System?",
      answer: "Venus",
    },
    {
      category: "Nature",
      question: "What is the first element on the periodic table?",
      answer: "Hydrogen",
    },
    {
      category: "Nature",
      question: "Which gas forms about 78% of the Earth's atmosphere?",
      answer: "Nitrogen",
    },
    {
      category: "Nature",
      question:
        "Alzheimer's disease primarily affects which part of the human body?",
      answer: "Brain",
    },
    {
      category: "Nature",
      question:
        "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
      answer: "Sputnik 1",
    },
    {
      category: "Nature",
      question: "The asteroid belt is located between which two planets?",
      answer: "Mars and Jupiter",
    },
    {
      category: "Nature",
      question: "What does LASER stand for?",
      answer: "Light amplification by stimulated emission of radiation",
    },
    {
      category: "Nature",
      question: "Dry ice is the solid form of what substance?",
      answer: "Carbon dioxide",
    },
    {
      category: "Animals",
      question: "What is the fastest  land animal?",
      answer: "Cheetah",
    },
    {
      category: "Animals",
      question: "What is the scientific name for modern day humans?",
      answer: "Homo Sapiens",
    },
    {
      category: "Animals",
      question:
        "The Kakapo is a large, flightless, nocturnal parrot native to which country?",
      answer: "New Zealand",
    },
    {
      category: "Animals",
      question: "Hippocampus is the Latin name for which marine creature?",
      answer: "Seahorse",
    },
    {
      category: "Animals",
      question: "What is Grumpy Cat's real name?",
      answer: "Tardar Sauce",
    },
    {
      category: "Animals",
      question: "Which class of animals are newts members of?",
      answer: "Amphibian",
    },
    {
      category: "Animals",
      question: "What is the collective noun for a group of crows?",
      answer: "Murder",
    },
    {
      category: "Animals",
      question: "By definition, where does an abyssopelagic animal live?",
      answer: "Bottom of the ocean",
    },
    {
      category: "Animals",
      question: "What colour is the female blackbird?",
      answer: "Brown",
    },
    {
      category: "Animals",
      question: "What is the name of a rabbit's house?",
      answer: "Burrow",
    },
    {
      category: "Computers",
      question: "What does GHz stand for?",
      answer: "Gigahertz",
    },
    {
      category: "Computers",
      question: "HTML is what type of language?",
      answer: "Markup Language",
    },
    {
      category: "Computers",
      question: "What amount of bits commonly equals one byte?",
      answer: "8",
    },
    {
      category: "Computers",
      question: "In computing, what does MIDI stand for?",
      answer: "Musical Instrument Digital Interface",
    },
    {
      category: "Computers",
      question: "In web design, what does CSS stand for?",
      answer: "Cascading Style Sheet",
    },
    {
      category: "Computers",
      question:
        "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      answer: "HD Graphics 500",
    },
    {
      category: "Computers",
      question: "On Twitter, what was the original character limit for a Tweet?",
      answer: "140",
    },
    {
      category: "Computers",
      question: "In JavaScript, what is the = operator?",
      answer: "Assignment",
    },
    {
      category: "Computers",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      answer: "Java",
    },
    {
      category: "Computers",
      question: "In computing, what does LAN stand for?",
      answer: "Local Area Network",
    },
    {
      category: "Mythology",
      question:
        "Who was the only god from Greece who did not get a name change in Rome?",
      answer: "Apollo",
    },
    {
      category: "Mythology",
      question:
        "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
      answer: "Jason",
    },
    {
      category: "Mythology",
      question:
        "This Greek goddess's name was chosen for the dwarf planet responsible for discord on Pluto's classification amongst astronomers.",
      answer: "Eris",
    },
    {
      category: "Mythology",
      question:
        "Which Greek and Roman god was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more?",
      answer: "Apollo",
    },
    {
      category: "Mythology",
      question:
        "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
      answer: "Orpheus",
    },
    {
      category: "Mythology",
      question: "In most traditions, who was the wife of Zeus?",
      answer: "Hera",
    },
    {
      category: "Mythology",
      question:
        "Which of these mythological creatures is said to be half-man and half-horse?",
      answer: "Centaur",
    },
    {
      category: "Mythology",
      question: "What mythology did the god Apollo come from?",
      answer: "Greek and Roman",
    },
    {
      category: "Mythology",
      question:
        "What mytological creatures have women's faces and vultures' bodies?",
      answer: "Harpies",
    },
    {
      category: "Mythology",
      question:
        "The Nike apparel and footwear brand takes it's name from the Greek goddess of what?",
      answer: "Victory",
    },
    {
      category: "History",
      question: "How many manned moon landings have there been?",
      answer: "6",
    },
    {
      category: "History",
      question:
        "The original Roman alphabet lacked the following letters EXCEPT:",
      answer: "X",
    },
    {
      category: "History",
      question: "The collapse of the Soviet Union took place in which year?",
      answer: "1991",
    },
    {
      category: "History",
      question: "What was Manfred von Richthofen's nickname?",
      answer: "The Red Baron",
    },
    {
      category: "History",
      question:
        "Which modern day country is the region that was known as Phrygia in ancient times?",
      answer: "Turkey",
    },
    {
      category: "History",
      question: "Who was the first president of the United States?",
      answer: "George Washington",
    },
    {
      category: "History",
      question: "What was the first sport to have been played on the moon?",
      answer: "Golf",
    },
    {
      category: "History",
      question: "What year did World War I begin?",
      answer: "1914",
    },
    {
      category: "History",
      question: "How old was Adolf Hitler when he died?",
      answer: "56",
    },
    {
      category: "History",
      question:
        "Abolitionist John Brown raided the arsenal in which Virginia Town?",
      answer: "Harper's Ferry",
    },
    {
      category: "General",
      question:
        "Which company did Valve cooperate with in the creation of the Vive?",
      answer: "HTC",
    },
    {
      category: "General",
      question: "What alcoholic drink is made from molasses?",
      answer: "Rum",
    },
    {
      category: "General",
      question: "What is the French word for &quot;hat&quot;?",
      answer: "Chapeau",
    },
    {
      category: "General",
      question: "Who is depicted on the US hundred dollar bill?",
      answer: "Benjamin Franklin",
    },
    {
      category: "General",
      question: "What do the letters in the GMT time zone stand for?",
      answer: "Greenwich Mean Time",
    },
    {
      category: "General",
      question: "How tall is the Burj Khalifa?",
      answer: "2,722 ft",
    },
    {
      category: "General",
      question:
        "When someone is cowardly, they are said to have what color belly?",
      answer: "Yellow",
    },
    {
      category: "General",
      question: "What is the name of NASA's most famous space telescope?",
      answer: "Hubble Space Telescope",
    },
    {
      category: "General",
      question: "Who is the youngest person to recieve a Nobel Prize?",
      answer: "Malala Yousafzai",
    },
    {
      category: "General",
      question: "What is the famous Papa John's last name?",
      answer: "Schnatter",
    },
    {
      category: "Final",
      question: "What name was the bootcamp formerly known as?",
      answer: "Burlington Code Academy",
    },
  ];
  
  export default placeholderQuestions;