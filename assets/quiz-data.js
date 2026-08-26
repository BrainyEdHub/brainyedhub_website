// BrainyEdHub Quiz Arena question bank — 7 subjects, ~4 topics each, 10 questions per topic.
const QUESTION_BANK = {
  "maths": {
    "label": "Mathematics",
    "topics": {
      "number": {
        "label": "Number",
        "questions": [
          {
            "q": "34 + 128 = ?",
            "options": [
              "162",
              "152",
              "172",
              "160"
            ],
            "correct": 0
          },
          {
            "q": "503 − 268 = ?",
            "options": [
              "245",
              "235",
              "225",
              "335"
            ],
            "correct": 1
          },
          {
            "q": "Round 3847 to the nearest hundred.",
            "options": [
              "3900",
              "3840",
              "3800",
              "3850"
            ],
            "correct": 2
          },
          {
            "q": "Write 3/8 as a decimal.",
            "options": [
              "0.38",
              "0.375",
              "0.35",
              "0.425"
            ],
            "correct": 1
          },
          {
            "q": "Work out 15% of £240.",
            "options": [
              "£24",
              "£30",
              "£40",
              "£36"
            ],
            "correct": 3
          },
          {
            "q": "What is 7 × 8?",
            "options": [
              "48",
              "54",
              "56",
              "64"
            ],
            "correct": 2
          },
          {
            "q": "What is 144 ÷ 12?",
            "options": [
              "11",
              "12",
              "13",
              "14"
            ],
            "correct": 1
          },
          {
            "q": "Simplify 18/24 to its lowest terms.",
            "options": [
              "2/3",
              "3/4",
              "4/5",
              "5/6"
            ],
            "correct": 1
          },
          {
            "q": "What is 2<sup>5</sup>?",
            "options": [
              "10",
              "16",
              "25",
              "32"
            ],
            "correct": 3
          },
          {
            "q": "Which of these is the smallest? 0.3, 1/4, 30%, 0.35",
            "options": [
              "0.3",
              "1/4",
              "30%",
              "0.35"
            ],
            "correct": 1
          }
        ]
      },
      "algebra": {
        "label": "Algebra",
        "questions": [
          {
            "q": "Simplify 5x + 3x − 2x.",
            "options": [
              "10x",
              "4x",
              "6x",
              "8x"
            ],
            "correct": 2
          },
          {
            "q": "Solve 2x + 7 = 19.",
            "options": [
              "x = 5",
              "x = 6",
              "x = 7",
              "x = 12"
            ],
            "correct": 1
          },
          {
            "q": "Expand 3(x + 4) − 2x.",
            "options": [
              "5x + 12",
              "x + 4",
              "x + 12",
              "3x + 12"
            ],
            "correct": 2
          },
          {
            "q": "Factorise 4x + 12.",
            "options": [
              "4(x + 12)",
              "x(4 + 3)",
              "4(x + 3)",
              "2(2x + 3)"
            ],
            "correct": 2
          },
          {
            "q": "Solve 3x − 5 = 16.",
            "options": [
              "x = 21",
              "x = 6",
              "x = 7",
              "x = 8"
            ],
            "correct": 2
          },
          {
            "q": "Simplify 7y − 2y + y.",
            "options": [
              "4y",
              "5y",
              "6y",
              "10y"
            ],
            "correct": 2
          },
          {
            "q": "Solve 5x = 35.",
            "options": [
              "x = 5",
              "x = 6",
              "x = 7",
              "x = 8"
            ],
            "correct": 2
          },
          {
            "q": "Expand 2(x − 3).",
            "options": [
              "2x − 3",
              "2x − 6",
              "x − 6",
              "2x + 6"
            ],
            "correct": 1
          },
          {
            "q": "If y = 3x + 2 and x = 4, find y.",
            "options": [
              "10",
              "12",
              "14",
              "16"
            ],
            "correct": 2
          },
          {
            "q": "Simplify x<sup>2</sup> × x<sup>3</sup>.",
            "options": [
              "x<sup>5</sup>",
              "x<sup>6</sup>",
              "2x<sup>5</sup>",
              "x<sup>2</sup>"
            ],
            "correct": 0
          }
        ]
      },
      "ratio": {
        "label": "Ratio & Proportion",
        "questions": [
          {
            "q": "A £24 shirt is reduced by 25%. Sale price?",
            "options": [
              "£20",
              "£18",
              "£16",
              "£6"
            ],
            "correct": 1
          },
          {
            "q": "Share £180 in ratio 2:3:4. Smallest share?",
            "options": [
              "£20",
              "£40",
              "£60",
              "£80"
            ],
            "correct": 1
          },
          {
            "q": "A train travels 240km in 3 hours. Average speed?",
            "options": [
              "60 km/h",
              "72 km/h",
              "80 km/h",
              "90 km/h"
            ],
            "correct": 2
          },
          {
            "q": "Convert 3.5 kg to grams.",
            "options": [
              "350 g",
              "3050 g",
              "35000 g",
              "3500 g"
            ],
            "correct": 3
          },
          {
            "q": "200g flour serves 4. How much for 10 people?",
            "options": [
              "400 g",
              "500 g",
              "250 g",
              "800 g"
            ],
            "correct": 1
          },
          {
            "q": "Simplify the ratio 12:18 to its simplest form.",
            "options": [
              "2:3",
              "3:4",
              "4:6",
              "6:9"
            ],
            "correct": 0
          },
          {
            "q": "A map scale is 1:50000. 4cm on the map = ? in real life.",
            "options": [
              "1 km",
              "2 km",
              "4 km",
              "5 km"
            ],
            "correct": 1
          },
          {
            "q": "Increase £80 by 20%.",
            "options": [
              "£84",
              "£90",
              "£96",
              "£100"
            ],
            "correct": 2
          },
          {
            "q": "5 books cost £25. How much do 8 books cost?",
            "options": [
              "£30",
              "£35",
              "£40",
              "£45"
            ],
            "correct": 2
          },
          {
            "q": "Write 3:5 as a fraction of the whole (first part).",
            "options": [
              "3/5",
              "3/8",
              "5/8",
              "5/3"
            ],
            "correct": 1
          }
        ]
      },
      "geometry": {
        "label": "Geometry",
        "questions": [
          {
            "q": "Area of a rectangle 8cm by 5cm?",
            "options": [
              "13 cm<sup>2</sup>",
              "26 cm<sup>2</sup>",
              "40 cm<sup>2</sup>",
              "30 cm<sup>2</sup>"
            ],
            "correct": 2
          },
          {
            "q": "Perimeter of that same rectangle?",
            "options": [
              "40 cm",
              "13 cm",
              "20 cm",
              "26 cm"
            ],
            "correct": 3
          },
          {
            "q": "Triangle angles 55° and 65°. Third angle?",
            "options": [
              "70°",
              "55°",
              "60°",
              "65°"
            ],
            "correct": 2
          },
          {
            "q": "Area of a triangle, base 10cm, height 6cm?",
            "options": [
              "60 cm<sup>2</sup>",
              "16 cm<sup>2</sup>",
              "20 cm<sup>2</sup>",
              "30 cm<sup>2</sup>"
            ],
            "correct": 3
          },
          {
            "q": "Lines of symmetry in a square?",
            "options": [
              "2",
              "4",
              "6",
              "8"
            ],
            "correct": 1
          },
          {
            "q": "How many degrees are in a full circle?",
            "options": [
              "180°",
              "270°",
              "360°",
              "90°"
            ],
            "correct": 2
          },
          {
            "q": "What type of angle is 120°?",
            "options": [
              "Acute",
              "Right",
              "Obtuse",
              "Reflex"
            ],
            "correct": 2
          },
          {
            "q": "Volume of a cuboid 4cm × 3cm × 2cm?",
            "options": [
              "9 cm<sup>3</sup>",
              "24 cm<sup>3</sup>",
              "20 cm<sup>3</sup>",
              "18 cm<sup>3</sup>"
            ],
            "correct": 1
          },
          {
            "q": "How many sides does a hexagon have?",
            "options": [
              "5",
              "6",
              "7",
              "8"
            ],
            "correct": 1
          },
          {
            "q": "A square has side length 6cm. What is its area?",
            "options": [
              "12 cm<sup>2</sup>",
              "24 cm<sup>2</sup>",
              "36 cm<sup>2</sup>",
              "64 cm<sup>2</sup>"
            ],
            "correct": 2
          }
        ]
      },
      "stats": {
        "label": "Statistics & Probability",
        "questions": [
          {
            "q": "Mean of 4, 7, 9, 12, 18?",
            "options": [
              "9",
              "10",
              "12",
              "50"
            ],
            "correct": 1
          },
          {
            "q": "P(red) = 0.35. What is P(not red)?",
            "options": [
              "0.35",
              "0.5",
              "0.65",
              "1.35"
            ],
            "correct": 2
          },
          {
            "q": "Median of 3, 8, 5, 12, 7?",
            "options": [
              "8",
              "5",
              "6",
              "7"
            ],
            "correct": 3
          },
          {
            "q": "A fair dice is rolled. P(even number)?",
            "options": [
              "1/3",
              "1/2",
              "1/6",
              "2/3"
            ],
            "correct": 1
          },
          {
            "q": "Mode of 2, 3, 3, 4, 5, 3, 6?",
            "options": [
              "2",
              "3",
              "4",
              "6"
            ],
            "correct": 1
          },
          {
            "q": "Find the range of 5, 12, 8, 20, 3.",
            "options": [
              "15",
              "17",
              "20",
              "23"
            ],
            "correct": 1
          },
          {
            "q": "A coin is flipped once. What is P(heads)?",
            "options": [
              "1/4",
              "1/3",
              "1/2",
              "1"
            ],
            "correct": 2
          },
          {
            "q": "Mode of 4, 6, 6, 7, 9, 6, 2?",
            "options": [
              "4",
              "6",
              "7",
              "9"
            ],
            "correct": 1
          },
          {
            "q": "Spinner has 5 equal sections (1–5). P(number greater than 3)?",
            "options": [
              "1/5",
              "2/5",
              "3/5",
              "4/5"
            ],
            "correct": 1
          },
          {
            "q": "Median of 2, 9, 4, 11, 6, 15, 7?",
            "options": [
              "6",
              "7",
              "9",
              "11"
            ],
            "correct": 1
          }
        ]
      },
      "trigonometry": {
        "label": "Trigonometry",
        "questions": [
          {
            "q": "In a right-angled triangle, which ratio is opposite/hypotenuse?",
            "options": [
              "Cosine",
              "Sine",
              "Tangent",
              "Secant"
            ],
            "correct": 1
          },
          {
            "q": "In a right-angled triangle, which ratio is adjacent/hypotenuse?",
            "options": [
              "Cosine",
              "Sine",
              "Tangent",
              "Cotangent"
            ],
            "correct": 0
          },
          {
            "q": "In a right-angled triangle, which ratio is opposite/adjacent?",
            "options": [
              "Cosine",
              "Sine",
              "Tangent",
              "Cosecant"
            ],
            "correct": 2
          },
          {
            "q": "What is the value of sin(90&deg;)?",
            "options": [
              "0",
              "0.5",
              "1",
              "Undefined"
            ],
            "correct": 2
          },
          {
            "q": "What is the value of cos(0&deg;)?",
            "options": [
              "0",
              "0.5",
              "1",
              "-1"
            ],
            "correct": 2
          },
          {
            "q": "A right-angled triangle has an opposite side of 6 and hypotenuse of 10. Find sin of the angle.",
            "options": [
              "0.4",
              "0.6",
              "0.8",
              "1.6"
            ],
            "correct": 1
          },
          {
            "q": "Which theorem finds a missing side in a right-angled triangle from the other two sides?",
            "options": [
              "Sine rule",
              "Cosine rule",
              "Pythagoras' theorem",
              "Bayes' theorem"
            ],
            "correct": 2
          },
          {
            "q": "You know the opposite and hypotenuse of a right-angled triangle. Which ratio finds the angle?",
            "options": [
              "Sine",
              "Cosine",
              "Tangent",
              "Pythagoras"
            ],
            "correct": 0
          },
          {
            "q": "What is the value of tan(45&deg;)?",
            "options": [
              "0",
              "0.5",
              "1",
              "2"
            ],
            "correct": 2
          },
          {
            "q": "In SOHCAHTOA, what does 'CAH' represent?",
            "options": [
              "Sin = Opposite/Hypotenuse",
              "Cos = Adjacent/Hypotenuse",
              "Tan = Opposite/Adjacent",
              "Cos = Opposite/Adjacent"
            ],
            "correct": 1
          }
        ]
      },
      "sequences": {
        "label": "Sequences",
        "questions": [
          {
            "q": "Find the next term: 3, 7, 11, 15, ...?",
            "options": [
              "17",
              "18",
              "19",
              "21"
            ],
            "correct": 2
          },
          {
            "q": "What type of sequence has a constant difference between terms?",
            "options": [
              "Geometric",
              "Arithmetic",
              "Fibonacci",
              "Quadratic"
            ],
            "correct": 1
          },
          {
            "q": "Find the next term: 2, 6, 18, 54, ...?",
            "options": [
              "108",
              "144",
              "162",
              "216"
            ],
            "correct": 2
          },
          {
            "q": "What type of sequence has a constant ratio between terms?",
            "options": [
              "Arithmetic",
              "Geometric",
              "Triangular",
              "Linear"
            ],
            "correct": 1
          },
          {
            "q": "Find the nth term formula for 5, 8, 11, 14, ...?",
            "options": [
              "3n + 2",
              "2n + 3",
              "n + 5",
              "3n − 2"
            ],
            "correct": 0
          },
          {
            "q": "Using the formula 3n + 2, find the 10th term.",
            "options": [
              "30",
              "32",
              "35",
              "23"
            ],
            "correct": 1
          },
          {
            "q": "Find the next two terms: 1, 1, 2, 3, 5, ...?",
            "options": [
              "6, 7",
              "7, 9",
              "8, 13",
              "8, 11"
            ],
            "correct": 2
          },
          {
            "q": "Find the missing term: 4, 9, 16, 25, __, 49",
            "options": [
              "30",
              "32",
              "36",
              "40"
            ],
            "correct": 2
          },
          {
            "q": "What is the common difference in 20, 15, 10, 5, ...?",
            "options": [
              "5",
              "-5",
              "4",
              "-4"
            ],
            "correct": 1
          },
          {
            "q": "Find the next term: 100, 50, 25, 12.5, ...?",
            "options": [
              "6.25",
              "6",
              "6.5",
              "5"
            ],
            "correct": 0
          }
        ]
      }
    }
  },
  "english": {
    "label": "English",
    "topics": {
      "grammar": {
        "label": "Grammar",
        "questions": [
          {
            "q": "Identify the verb: 'The children played happily in the park.'",
            "options": [
              "children",
              "played",
              "happily",
              "park"
            ],
            "correct": 1
          },
          {
            "q": "Identify the word class of 'quickly' in: 'She ran quickly to the door.'",
            "options": [
              "Noun",
              "Verb",
              "Adverb",
              "Adjective"
            ],
            "correct": 2
          },
          {
            "q": "Which sentence is in the passive voice?",
            "options": [
              "The cat chased the mouse.",
              "The mouse was chased by the cat.",
              "The cat is chasing the mouse.",
              "The cat will chase the mouse."
            ],
            "correct": 1
          },
          {
            "q": "Identify the sentence type: 'Close the door.'",
            "options": [
              "Question",
              "Statement",
              "Command",
              "Exclamation"
            ],
            "correct": 2
          },
          {
            "q": "Which of these is a compound sentence?",
            "options": [
              "I like tea.",
              "I like tea, but I prefer coffee.",
              "Although I like tea, I prefer coffee.",
              "Tea."
            ],
            "correct": 1
          },
          {
            "q": "What is the correct plural of 'child'?",
            "options": [
              "Childs",
              "Childes",
              "Children",
              "Childrens"
            ],
            "correct": 2
          },
          {
            "q": "Which is grammatically correct?",
            "options": [
              "Him and me went to the shop.",
              "Me and he went to the shop.",
              "He and I went to the shop.",
              "I and him went to the shop."
            ],
            "correct": 2
          },
          {
            "q": "Identify the tense: 'She had already left when I arrived.'",
            "options": [
              "Present simple",
              "Past simple",
              "Past perfect",
              "Future perfect"
            ],
            "correct": 2
          },
          {
            "q": "Which is the main clause in: 'Although it was raining, we went for a walk.'?",
            "options": [
              "Although it was raining",
              "we went for a walk",
              "it was raining",
              "Although we went"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'noun'?",
            "options": [
              "A describing word",
              "A person, place, or thing",
              "An action word",
              "A joining word"
            ],
            "correct": 1
          }
        ]
      },
      "vocabulary": {
        "label": "Vocabulary",
        "questions": [
          {
            "q": "Which word is a synonym for 'happy'?",
            "options": [
              "Miserable",
              "Joyful",
              "Furious",
              "Tired"
            ],
            "correct": 1
          },
          {
            "q": "Which word is an antonym for 'expand'?",
            "options": [
              "Grow",
              "Enlarge",
              "Shrink",
              "Stretch"
            ],
            "correct": 2
          },
          {
            "q": "What does 'enormous' mean?",
            "options": [
              "Very small",
              "Very large",
              "Very quiet",
              "Very fast"
            ],
            "correct": 1
          },
          {
            "q": "Which word means the same as 'ancient'?",
            "options": [
              "Modern",
              "New",
              "Old",
              "Future"
            ],
            "correct": 2
          },
          {
            "q": "What is a synonym for 'difficult'?",
            "options": [
              "Easy",
              "Simple",
              "Challenging",
              "Quick"
            ],
            "correct": 2
          },
          {
            "q": "What does 'reluctant' mean?",
            "options": [
              "Eager",
              "Unwilling",
              "Excited",
              "Confident"
            ],
            "correct": 1
          },
          {
            "q": "Which word means 'to make something clear'?",
            "options": [
              "Confuse",
              "Obscure",
              "Clarify",
              "Hide"
            ],
            "correct": 2
          },
          {
            "q": "What is an antonym for 'generous'?",
            "options": [
              "Kind",
              "Selfish",
              "Giving",
              "Charitable"
            ],
            "correct": 1
          },
          {
            "q": "What does 'curious' mean?",
            "options": [
              "Bored",
              "Eager to learn or know something",
              "Angry",
              "Tired"
            ],
            "correct": 1
          },
          {
            "q": "Which word best means 'to examine closely'?",
            "options": [
              "Ignore",
              "Scrutinise",
              "Forget",
              "Dismiss"
            ],
            "correct": 1
          }
        ]
      },
      "spag": {
        "label": "Punctuation & Spelling",
        "questions": [
          {
            "q": "Which is the correct spelling?",
            "options": [
              "Recieve",
              "Receive",
              "Receeve",
              "Receve"
            ],
            "correct": 1
          },
          {
            "q": "Where does the apostrophe go? 'The dogs bone was buried.' (one dog)",
            "options": [
              "Dog's bone",
              "Dogs' bone",
              "Dogs's bone",
              "Do'gs bone"
            ],
            "correct": 0
          },
          {
            "q": "Which sentence is correctly punctuated?",
            "options": [
              "Its a lovely day.",
              "It's a lovely day.",
              "Its' a lovely day.",
              "I'ts a lovely day."
            ],
            "correct": 1
          },
          {
            "q": "Which spelling is correct?",
            "options": [
              "Definately",
              "Definitely",
              "Definitly",
              "Definetly"
            ],
            "correct": 1
          },
          {
            "q": "Which sentence uses a comma correctly?",
            "options": [
              "I bought apples oranges and bananas.",
              "I bought apples, oranges, and bananas.",
              "I bought, apples oranges and bananas.",
              "I bought apples oranges, and, bananas."
            ],
            "correct": 1
          },
          {
            "q": "Spot the correctly spelled word.",
            "options": [
              "Seperate",
              "Separate",
              "Separrate",
              "Seperete"
            ],
            "correct": 1
          },
          {
            "q": "What punctuation mark ends a question?",
            "options": [
              "Full stop",
              "Exclamation mark",
              "Question mark",
              "Comma"
            ],
            "correct": 2
          },
          {
            "q": "Which sentence uses 'their'/'there'/'they're' correctly?",
            "options": [
              "Their going to the park.",
              "They're going to the park.",
              "There going to the park.",
              "Theyre going to the park."
            ],
            "correct": 1
          },
          {
            "q": "Which of these words is spelled correctly?",
            "options": [
              "Occured",
              "Occurred",
              "Occureed",
              "Ocurred"
            ],
            "correct": 1
          },
          {
            "q": "Which uses an apostrophe correctly (more than one dog)?",
            "options": [
              "The dogs' bones were buried.",
              "The dog's bones were buried.",
              "The dogs's bones were buried.",
              "The dogs bones' were buried."
            ],
            "correct": 0
          }
        ]
      },
      "reading": {
        "label": "Reading & Comprehension Skills",
        "questions": [
          {
            "q": "What is 'inference' in reading?",
            "options": [
              "Reading the text aloud",
              "Working out something not directly stated, using clues",
              "Copying the text exactly",
              "Ignoring the text"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'simile'?",
            "options": [
              "A comparison using 'like' or 'as'",
              "A word that sounds like its meaning",
              "A type of punctuation",
              "A rhyming pattern"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'metaphor'?",
            "options": [
              "A direct comparison saying one thing IS another",
              "A list of facts",
              "A type of question",
              "A grammar rule"
            ],
            "correct": 0
          },
          {
            "q": "What does 'retrieval' mean in a comprehension question?",
            "options": [
              "Making up an answer",
              "Finding information directly stated in the text",
              "Ignoring the question",
              "Writing a summary only"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of a topic sentence?",
            "options": [
              "To end the paragraph",
              "To introduce the main idea of the paragraph",
              "To list punctuation",
              "To repeat the title"
            ],
            "correct": 1
          },
          {
            "q": "What is 'personification'?",
            "options": [
              "Giving human qualities to a non-human thing",
              "A type of rhyme",
              "A grammar error",
              "A punctuation mark"
            ],
            "correct": 0
          },
          {
            "q": "When analysing structure, what might you comment on?",
            "options": [
              "Only spelling mistakes",
              "How the text is organised and builds tension or focus",
              "The font used",
              "The page number"
            ],
            "correct": 1
          },
          {
            "q": "What does it mean to 'evaluate' a text?",
            "options": [
              "To copy it word for word",
              "To judge its effectiveness with a supported opinion",
              "To ignore the author's choices",
              "To translate it"
            ],
            "correct": 1
          },
          {
            "q": "What effect can short sentences create in writing?",
            "options": [
              "They always confuse the reader",
              "Tension, pace, or emphasis",
              "No effect at all",
              "They are grammatically incorrect"
            ],
            "correct": 1
          },
          {
            "q": "What should you always do in an evaluation answer?",
            "options": [
              "Give an opinion with no evidence",
              "Support your point with evidence from the text",
              "Ignore the text completely",
              "Write only one word"
            ],
            "correct": 1
          }
        ]
      },
      "devices": {
        "label": "Figurative Language & Literary Devices",
        "questions": [
          {
            "q": "What is an example of a simile?",
            "options": [
              "The wind whispered",
              "As brave as a lion",
              "Time is a thief",
              "Bang! Crash!"
            ],
            "correct": 1
          },
          {
            "q": "What is an example of a metaphor?",
            "options": [
              "As cold as ice",
              "Like a shining star",
              "Time is a thief",
              "Quickly and quietly"
            ],
            "correct": 2
          },
          {
            "q": "What literary device gives human qualities to non-human things?",
            "options": [
              "Simile",
              "Metaphor",
              "Personification",
              "Alliteration"
            ],
            "correct": 2
          },
          {
            "q": "What is 'alliteration'?",
            "options": [
              "Repetition of the same consonant sound at the start of nearby words",
              "A comparison using like or as",
              "Giving human traits to objects",
              "Exaggeration for effect"
            ],
            "correct": 0
          },
          {
            "q": "What is 'onomatopoeia'?",
            "options": [
              "A word that imitates the sound it describes",
              "A type of rhyme",
              "A repeated phrase",
              "A type of question"
            ],
            "correct": 0
          },
          {
            "q": "What is 'hyperbole'?",
            "options": [
              "Understatement",
              "Deliberate exaggeration for effect",
              "A direct comparison",
              "A sound-alike word"
            ],
            "correct": 1
          },
          {
            "q": "Identify the device: 'I've told you a million times!'",
            "options": [
              "Simile",
              "Hyperbole",
              "Onomatopoeia",
              "Alliteration"
            ],
            "correct": 1
          },
          {
            "q": "What is 'irony'?",
            "options": [
              "When the opposite of what's expected happens or is said",
              "A type of rhyme",
              "A repeated sound",
              "A formal writing style"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'symbol' in literature?",
            "options": [
              "An object or image representing a deeper meaning",
              "A punctuation mark",
              "A grammar rule",
              "A type of sentence"
            ],
            "correct": 0
          },
          {
            "q": "Identify the device: 'The classroom was a zoo.'",
            "options": [
              "Simile",
              "Metaphor",
              "Onomatopoeia",
              "Hyperbole"
            ],
            "correct": 1
          }
        ]
      },
      "writing": {
        "label": "Writing Skills",
        "questions": [
          {
            "q": "What is the purpose of descriptive writing?",
            "options": [
              "To persuade the reader",
              "To create a vivid picture using the senses",
              "To argue a point",
              "To give instructions"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of persuasive writing?",
            "options": [
              "To describe a scene",
              "To convince the reader of a viewpoint",
              "To tell a story",
              "To list facts only"
            ],
            "correct": 1
          },
          {
            "q": "What should a strong opening line of a story do?",
            "options": [
              "List all the characters",
              "Hook the reader's interest immediately",
              "Explain the ending",
              "Use as many adjectives as possible"
            ],
            "correct": 1
          },
          {
            "q": "What is 'audience' in writing?",
            "options": [
              "The topic of the piece",
              "The people the writing is intended for",
              "The writer's name",
              "The number of paragraphs"
            ],
            "correct": 1
          },
          {
            "q": "What is 'tone' in writing?",
            "options": [
              "The writer's attitude conveyed through word choice",
              "The font used",
              "The number of sentences",
              "The title of the piece"
            ],
            "correct": 0
          },
          {
            "q": "In a narrative, what does 'structure' refer to?",
            "options": [
              "The spelling used",
              "How the story is organised, e.g. beginning, middle, end",
              "The characters' names",
              "The page count"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'topic sentence' used for in persuasive writing?",
            "options": [
              "To end the paragraph",
              "To introduce the main point of the paragraph",
              "To provide a definition",
              "To ask a question"
            ],
            "correct": 1
          },
          {
            "q": "Which technique helps vary sentence structure in writing?",
            "options": [
              "Using only short sentences",
              "Mixing short and long sentences for effect",
              "Repeating the same sentence",
              "Avoiding punctuation"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of a conclusion in persuasive writing?",
            "options": [
              "To introduce a new argument",
              "To summarise and reinforce the main argument",
              "To describe a setting",
              "To ask unrelated questions"
            ],
            "correct": 1
          },
          {
            "q": "What does 'show, don't tell' mean in descriptive writing?",
            "options": [
              "State facts directly without detail",
              "Use sensory detail and action to convey feeling rather than stating it outright",
              "Only use dialogue",
              "Avoid describing emotions at all"
            ],
            "correct": 1
          }
        ]
      }
    }
  },
  "physics": {
    "label": "Physics",
    "topics": {
      "forces": {
        "label": "Forces & Motion",
        "questions": [
          {
            "q": "What is the unit of force?",
            "options": [
              "Joule",
              "Newton",
              "Watt",
              "Pascal"
            ],
            "correct": 1
          },
          {
            "q": "Which equation links force, mass and acceleration?",
            "options": [
              "F=ma",
              "F=mv",
              "F=m/a",
              "F=m+a"
            ],
            "correct": 0
          },
          {
            "q": "A 5kg object accelerates at 2m/s<sup>2</sup>. Find the force.",
            "options": [
              "5N",
              "10N",
              "15N",
              "20N"
            ],
            "correct": 1
          },
          {
            "q": "A car travels 150m in 10s. Find its average speed.",
            "options": [
              "10 m/s",
              "12 m/s",
              "15 m/s",
              "20 m/s"
            ],
            "correct": 2
          },
          {
            "q": "What is the equation for momentum?",
            "options": [
              "p=mv",
              "p=ma",
              "p=m/v",
              "p=mgh"
            ],
            "correct": 0
          },
          {
            "q": "Newton's First Law: an object stays at rest or constant velocity unless acted on by a ____.",
            "options": [
              "field",
              "resultant force",
              "vacuum",
              "friction only"
            ],
            "correct": 1
          },
          {
            "q": "Calculate the weight of a 10kg object (g=10N/kg).",
            "options": [
              "10N",
              "50N",
              "100N",
              "1000N"
            ],
            "correct": 2
          },
          {
            "q": "What is the unit of acceleration?",
            "options": [
              "m/s",
              "m/s<sup>2</sup>",
              "N",
              "kg"
            ],
            "correct": 1
          },
          {
            "q": "Which quantity is a vector (has direction as well as size)?",
            "options": [
              "Speed",
              "Mass",
              "Velocity",
              "Energy"
            ],
            "correct": 2
          },
          {
            "q": "A 10N and a 4N force act in opposite directions. Find the resultant.",
            "options": [
              "4N",
              "6N",
              "10N",
              "14N"
            ],
            "correct": 1
          }
        ]
      },
      "energy": {
        "label": "Energy",
        "questions": [
          {
            "q": "What is the formula for kinetic energy?",
            "options": [
              "KE=mv",
              "KE=½mv<sup>2</sup>",
              "KE=mgh",
              "KE=ma"
            ],
            "correct": 1
          },
          {
            "q": "Calculate the kinetic energy of a 2kg object moving at 3m/s.",
            "options": [
              "6J",
              "9J",
              "12J",
              "18J"
            ],
            "correct": 1
          },
          {
            "q": "What does the conservation of energy principle state?",
            "options": [
              "Energy can be created",
              "Energy can be destroyed",
              "Energy cannot be created or destroyed, only transferred",
              "Energy always increases"
            ],
            "correct": 2
          },
          {
            "q": "Which energy store does a stretched spring have?",
            "options": [
              "Kinetic",
              "Elastic potential",
              "Thermal",
              "Chemical"
            ],
            "correct": 1
          },
          {
            "q": "What is the unit of energy?",
            "options": [
              "Newton",
              "Watt",
              "Joule",
              "Volt"
            ],
            "correct": 2
          },
          {
            "q": "Calculate the GPE of a 2kg object raised 5m (g=10N/kg).",
            "options": [
              "20J",
              "50J",
              "100J",
              "200J"
            ],
            "correct": 2
          },
          {
            "q": "Which energy store is gained by an object raised above the ground?",
            "options": [
              "Kinetic",
              "Gravitational potential",
              "Elastic",
              "Nuclear"
            ],
            "correct": 1
          },
          {
            "q": "What is the unit of power?",
            "options": [
              "Joule",
              "Newton",
              "Watt",
              "Pascal"
            ],
            "correct": 2
          },
          {
            "q": "A lamp mainly transfers electrical energy into which two forms?",
            "options": [
              "Light and heat",
              "Sound and heat",
              "Kinetic and sound",
              "Chemical and light"
            ],
            "correct": 0
          },
          {
            "q": "What happens to energy 'wasted' in a system?",
            "options": [
              "It disappears",
              "It is usually transferred to the surroundings as heat",
              "It turns into mass",
              "It is stored forever"
            ],
            "correct": 1
          }
        ]
      },
      "electricity": {
        "label": "Electricity",
        "questions": [
          {
            "q": "What is the unit of electrical current?",
            "options": [
              "Volt",
              "Watt",
              "Ampere",
              "Ohm"
            ],
            "correct": 2
          },
          {
            "q": "Which equation links voltage, current and resistance?",
            "options": [
              "V=IR",
              "V=I/R",
              "V=I+R",
              "V=IR<sup>2</sup>"
            ],
            "correct": 0
          },
          {
            "q": "A circuit has current 2A and resistance 5Ω. Find the voltage.",
            "options": [
              "5V",
              "7V",
              "10V",
              "15V"
            ],
            "correct": 2
          },
          {
            "q": "What component measures current?",
            "options": [
              "Voltmeter",
              "Ammeter",
              "Ohmmeter",
              "Thermometer"
            ],
            "correct": 1
          },
          {
            "q": "What component measures potential difference?",
            "options": [
              "Ammeter",
              "Voltmeter",
              "Galvanometer",
              "Barometer"
            ],
            "correct": 1
          },
          {
            "q": "In a series circuit, what happens to current at different points?",
            "options": [
              "It varies",
              "It stays the same",
              "It doubles",
              "It disappears"
            ],
            "correct": 1
          },
          {
            "q": "In a parallel circuit, what happens to current across branches?",
            "options": [
              "It stays the same",
              "It splits between branches",
              "It disappears",
              "It reverses"
            ],
            "correct": 1
          },
          {
            "q": "What is the unit of resistance?",
            "options": [
              "Ampere",
              "Volt",
              "Ohm",
              "Watt"
            ],
            "correct": 2
          },
          {
            "q": "What happens to a wire's resistance as its length increases?",
            "options": [
              "Decreases",
              "Stays the same",
              "Increases",
              "Becomes zero"
            ],
            "correct": 2
          },
          {
            "q": "Which of these is a good electrical insulator?",
            "options": [
              "Copper",
              "Rubber",
              "Iron",
              "Aluminium"
            ],
            "correct": 1
          }
        ]
      },
      "waves": {
        "label": "Waves",
        "questions": [
          {
            "q": "Are sound waves longitudinal or transverse?",
            "options": [
              "Transverse",
              "Longitudinal",
              "Both",
              "Neither"
            ],
            "correct": 1
          },
          {
            "q": "Are light waves longitudinal or transverse?",
            "options": [
              "Transverse",
              "Longitudinal",
              "Both",
              "Neither"
            ],
            "correct": 0
          },
          {
            "q": "What is 'wavelength'?",
            "options": [
              "The height of a wave",
              "The distance between two identical points on a wave",
              "The speed of a wave",
              "The number of waves per second"
            ],
            "correct": 1
          },
          {
            "q": "Calculate the wave speed for frequency 50Hz and wavelength 4m.",
            "options": [
              "50 m/s",
              "100 m/s",
              "200 m/s",
              "400 m/s"
            ],
            "correct": 2
          },
          {
            "q": "What is the unit of frequency?",
            "options": [
              "Metre",
              "Hertz",
              "Second",
              "Newton"
            ],
            "correct": 1
          },
          {
            "q": "Which part of the EM spectrum has the longest wavelength?",
            "options": [
              "Gamma rays",
              "X-rays",
              "Visible light",
              "Radio waves"
            ],
            "correct": 3
          },
          {
            "q": "Which part of the EM spectrum has the shortest wavelength?",
            "options": [
              "Radio waves",
              "Microwaves",
              "Gamma rays",
              "Infrared"
            ],
            "correct": 2
          },
          {
            "q": "What does 'amplitude' of a wave measure?",
            "options": [
              "Its speed",
              "Its maximum displacement from rest",
              "Its wavelength",
              "Its frequency"
            ],
            "correct": 1
          },
          {
            "q": "What happens to a wave when it reflects off a surface?",
            "options": [
              "It speeds up",
              "It disappears",
              "It bounces back",
              "It changes into a particle"
            ],
            "correct": 2
          },
          {
            "q": "Sound cannot travel through which of these?",
            "options": [
              "Air",
              "Water",
              "Steel",
              "A vacuum"
            ],
            "correct": 3
          }
        ]
      },
      "magnetism": {
        "label": "Magnetism",
        "questions": [
          {
            "q": "What are the two poles of a magnet called?",
            "options": [
              "Positive and negative",
              "North and south",
              "Up and down",
              "Left and right"
            ],
            "correct": 1
          },
          {
            "q": "Do like poles of a magnet attract or repel?",
            "options": [
              "Attract",
              "Repel",
              "Neither",
              "Both"
            ],
            "correct": 1
          },
          {
            "q": "Do opposite poles of a magnet attract or repel?",
            "options": [
              "Attract",
              "Repel",
              "Neither",
              "Both"
            ],
            "correct": 0
          },
          {
            "q": "What is used to show the pattern of a magnetic field?",
            "options": [
              "Field lines",
              "Sound waves",
              "Light rays",
              "Circuit diagrams"
            ],
            "correct": 0
          },
          {
            "q": "What creates a magnetic field around a wire?",
            "options": [
              "A current flowing through it",
              "The colour of the wire",
              "The temperature of the wire",
              "The length of the wire only"
            ],
            "correct": 0
          },
          {
            "q": "What is an electromagnet?",
            "options": [
              "A permanent magnet that never loses its field",
              "A magnet created using an electric current, usually with a coil",
              "A type of battery",
              "A magnetic rock"
            ],
            "correct": 1
          },
          {
            "q": "How can you increase the strength of an electromagnet?",
            "options": [
              "Decrease the current",
              "Add more coils/turns of wire",
              "Remove the iron core",
              "Use a shorter wire"
            ],
            "correct": 1
          },
          {
            "q": "What material is commonly used as a core inside an electromagnet?",
            "options": [
              "Plastic",
              "Iron",
              "Rubber",
              "Wood"
            ],
            "correct": 1
          },
          {
            "q": "What happens to a compass needle near a strong magnet?",
            "options": [
              "It stays still",
              "It aligns with the magnetic field",
              "It melts",
              "It spins randomly forever"
            ],
            "correct": 1
          },
          {
            "q": "What do we call a magnetic material that keeps its magnetism after the field is removed?",
            "options": [
              "Temporary magnet",
              "Permanent magnet",
              "Electromagnet",
              "Non-magnet"
            ],
            "correct": 1
          }
        ]
      },
      "radioactivity": {
        "label": "Radioactivity",
        "questions": [
          {
            "q": "What is radioactive decay?",
            "options": [
              "When an atom's nucleus loses electrons only",
              "When an unstable nucleus emits radiation to become more stable",
              "When atoms combine to form molecules",
              "When a substance melts"
            ],
            "correct": 1
          },
          {
            "q": "Name the three main types of radioactive emission.",
            "options": [
              "Alpha, beta, gamma",
              "Proton, neutron, electron",
              "Solid, liquid, gas",
              "Red, blue, green"
            ],
            "correct": 0
          },
          {
            "q": "Which emission is the most ionising but least penetrating?",
            "options": [
              "Alpha",
              "Beta",
              "Gamma",
              "X-ray"
            ],
            "correct": 0
          },
          {
            "q": "Which emission is the most penetrating?",
            "options": [
              "Alpha",
              "Beta",
              "Gamma",
              "None"
            ],
            "correct": 2
          },
          {
            "q": "What is an alpha particle made of?",
            "options": [
              "A single electron",
              "Two protons and two neutrons",
              "A photon of energy",
              "A single neutron"
            ],
            "correct": 1
          },
          {
            "q": "What is a beta particle?",
            "options": [
              "A high-energy electron",
              "A helium nucleus",
              "A photon",
              "A neutron"
            ],
            "correct": 0
          },
          {
            "q": "What is 'half-life'?",
            "options": [
              "The total lifespan of a radioactive source",
              "The time for half the radioactive nuclei in a sample to decay",
              "Half the mass of an atom",
              "The time to fully charge a battery"
            ],
            "correct": 1
          },
          {
            "q": "What can be used to block alpha radiation?",
            "options": [
              "A sheet of paper",
              "Several centimetres of lead",
              "Nothing can block it",
              "Only water"
            ],
            "correct": 0
          },
          {
            "q": "What is needed to block gamma radiation effectively?",
            "options": [
              "A sheet of paper",
              "A few cm of aluminium",
              "Thick lead or concrete",
              "A layer of skin"
            ],
            "correct": 2
          },
          {
            "q": "What is an isotope?",
            "options": [
              "An atom with a different number of protons",
              "An atom of the same element with a different number of neutrons",
              "A type of molecule",
              "A radioactive compound only"
            ],
            "correct": 1
          }
        ]
      }
    }
  },
  "chemistry": {
    "label": "Chemistry",
    "topics": {
      "atomic": {
        "label": "Atomic Structure",
        "questions": [
          {
            "q": "What is the charge of a proton?",
            "options": [
              "-1",
              "0",
              "+1",
              "+2"
            ],
            "correct": 2
          },
          {
            "q": "What is the charge of an electron?",
            "options": [
              "-1",
              "0",
              "+1",
              "+2"
            ],
            "correct": 0
          },
          {
            "q": "Where are neutrons found in an atom?",
            "options": [
              "Orbiting the nucleus",
              "In the nucleus",
              "Outside the atom",
              "In the electron shell"
            ],
            "correct": 1
          },
          {
            "q": "What does 'atomic number' tell you?",
            "options": [
              "Number of neutrons",
              "Number of protons",
              "Number of electron shells",
              "Mass of the atom"
            ],
            "correct": 1
          },
          {
            "q": "An atom has 11 protons and 12 neutrons. Mass number?",
            "options": [
              "11",
              "12",
              "22",
              "23"
            ],
            "correct": 3
          },
          {
            "q": "Which group contains the noble gases?",
            "options": [
              "Group 1",
              "Group 2",
              "Group 7",
              "Group 0"
            ],
            "correct": 3
          },
          {
            "q": "A neutral atom has atomic number 8. How many electrons?",
            "options": [
              "6",
              "7",
              "8",
              "9"
            ],
            "correct": 2
          },
          {
            "q": "What is an isotope?",
            "options": [
              "An atom with a different number of protons",
              "An atom of the same element with a different number of neutrons",
              "A charged atom",
              "A type of molecule"
            ],
            "correct": 1
          },
          {
            "q": "Which particle has almost no mass?",
            "options": [
              "Proton",
              "Neutron",
              "Electron",
              "Nucleus"
            ],
            "correct": 2
          },
          {
            "q": "Which group contains highly reactive metals like sodium?",
            "options": [
              "Group 0",
              "Group 1",
              "Group 7",
              "Group 4"
            ],
            "correct": 1
          }
        ]
      },
      "bonding": {
        "label": "Bonding",
        "questions": [
          {
            "q": "What happens when atoms form an ionic bond?",
            "options": [
              "They share electrons",
              "Electrons transfer between atoms, forming ions",
              "Protons transfer between atoms",
              "They fuse together"
            ],
            "correct": 1
          },
          {
            "q": "What type of bonding is found in metals?",
            "options": [
              "Ionic",
              "Covalent",
              "Metallic",
              "No bonding"
            ],
            "correct": 2
          },
          {
            "q": "What happens when atoms form a covalent bond?",
            "options": [
              "They transfer electrons",
              "They share pairs of electrons",
              "They repel each other",
              "They lose protons"
            ],
            "correct": 1
          },
          {
            "q": "Which structure do giant covalent substances like diamond form?",
            "options": [
              "Simple molecular",
              "Giant covalent structure",
              "Ionic lattice",
              "Metallic lattice"
            ],
            "correct": 1
          },
          {
            "q": "Which property is typical of ionic compounds?",
            "options": [
              "Low melting point",
              "High melting point",
              "Cannot conduct electricity ever",
              "Always a gas at room temperature"
            ],
            "correct": 1
          },
          {
            "q": "Which property is typical of simple molecular substances?",
            "options": [
              "High melting point",
              "Low melting point",
              "Conducts electricity as a solid",
              "Giant structure"
            ],
            "correct": 1
          },
          {
            "q": "What holds ions together in an ionic compound?",
            "options": [
              "Shared electrons",
              "Strong electrostatic attraction",
              "Weak forces only",
              "Gravity"
            ],
            "correct": 1
          },
          {
            "q": "Which element would you expect to bond ionically with chlorine?",
            "options": [
              "Sodium",
              "Oxygen",
              "Carbon",
              "Nitrogen"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'molecule'?",
            "options": [
              "A single atom",
              "Two or more atoms chemically bonded together",
              "A type of ion",
              "A mixture of elements"
            ],
            "correct": 1
          },
          {
            "q": "Why do metals conduct electricity well?",
            "options": [
              "They have delocalised electrons that can move freely",
              "They have no electrons",
              "Their ions cannot move",
              "They are giant covalent structures"
            ],
            "correct": 0
          }
        ]
      },
      "reactions": {
        "label": "Chemical Reactions",
        "questions": [
          {
            "q": "Balance: Mg + O<sub>2</sub> → MgO.",
            "options": [
              "Mg + O<sub>2</sub> → MgO",
              "2Mg + O<sub>2</sub> → 2MgO",
              "Mg + 2O<sub>2</sub> → MgO<sub>2</sub>",
              "2Mg + O<sub>2</sub> → MgO"
            ],
            "correct": 1
          },
          {
            "q": "What is an exothermic reaction?",
            "options": [
              "A reaction that takes in energy",
              "A reaction that releases energy to the surroundings",
              "A reaction with no energy change",
              "A reaction that only happens in water"
            ],
            "correct": 1
          },
          {
            "q": "What is an endothermic reaction?",
            "options": [
              "A reaction that releases energy",
              "A reaction that takes in energy from the surroundings",
              "A reaction that never happens",
              "A reaction that produces light only"
            ],
            "correct": 1
          },
          {
            "q": "What does the law of conservation of mass state?",
            "options": [
              "Mass can be created in a reaction",
              "Mass can be destroyed in a reaction",
              "Mass is neither created nor destroyed",
              "Mass always increases"
            ],
            "correct": 2
          },
          {
            "q": "Which process separates a soluble solid from a solution?",
            "options": [
              "Filtration",
              "Evaporation",
              "Distillation only",
              "Magnetism"
            ],
            "correct": 1
          },
          {
            "q": "Which process separates an insoluble solid from a liquid?",
            "options": [
              "Filtration",
              "Evaporation",
              "Crystallisation",
              "Chromatography"
            ],
            "correct": 0
          },
          {
            "q": "What is produced when a metal reacts with oxygen?",
            "options": [
              "A metal oxide",
              "A salt and hydrogen",
              "A gas only",
              "Water"
            ],
            "correct": 0
          },
          {
            "q": "What type of reaction is burning (combustion)?",
            "options": [
              "Endothermic",
              "Exothermic",
              "Neutral",
              "Reversible only"
            ],
            "correct": 1
          },
          {
            "q": "What is a catalyst?",
            "options": [
              "A substance that slows a reaction",
              "A substance that speeds up a reaction without being used up",
              "A type of acid",
              "A product of a reaction"
            ],
            "correct": 1
          },
          {
            "q": "What do you call the starting substances in a reaction?",
            "options": [
              "Products",
              "Reactants",
              "Catalysts",
              "Solutes"
            ],
            "correct": 1
          }
        ]
      },
      "acids": {
        "label": "Acids & Bases",
        "questions": [
          {
            "q": "What is the pH of a neutral solution?",
            "options": [
              "0",
              "7",
              "14",
              "1"
            ],
            "correct": 1
          },
          {
            "q": "What two products form when an acid reacts with a metal?",
            "options": [
              "A salt and water",
              "A salt and hydrogen gas",
              "Oxygen and water",
              "A base and a salt"
            ],
            "correct": 1
          },
          {
            "q": "What salt forms when hydrochloric acid reacts with sodium hydroxide?",
            "options": [
              "Sodium sulfate",
              "Sodium chloride",
              "Sodium nitrate",
              "Sodium carbonate"
            ],
            "correct": 1
          },
          {
            "q": "Is a solution with pH 3 acidic, neutral, or alkaline?",
            "options": [
              "Acidic",
              "Neutral",
              "Alkaline",
              "Cannot tell"
            ],
            "correct": 0
          },
          {
            "q": "What gas forms when an acid reacts with a carbonate?",
            "options": [
              "Oxygen",
              "Hydrogen",
              "Carbon dioxide",
              "Nitrogen"
            ],
            "correct": 2
          },
          {
            "q": "What is neutralisation?",
            "options": [
              "A reaction between two acids",
              "A reaction between an acid and a base producing a salt and water",
              "A reaction that only produces gas",
              "A physical change only"
            ],
            "correct": 1
          },
          {
            "q": "Which equipment accurately measures acid volume in a titration?",
            "options": [
              "Beaker",
              "Burette",
              "Test tube",
              "Funnel"
            ],
            "correct": 1
          },
          {
            "q": "What colour does universal indicator turn in a strongly alkaline solution?",
            "options": [
              "Red",
              "Green",
              "Purple/blue",
              "Orange"
            ],
            "correct": 2
          },
          {
            "q": "What is the pH range of acids?",
            "options": [
              "0–6",
              "7 only",
              "8–14",
              "Below -1"
            ],
            "correct": 0
          },
          {
            "q": "What is the pH range of alkalis?",
            "options": [
              "0–6",
              "7 only",
              "8–14",
              "Negative numbers"
            ],
            "correct": 2
          }
        ]
      },
      "periodic-table": {
        "label": "The Periodic Table",
        "questions": [
          {
            "q": "How are elements arranged in the modern periodic table?",
            "options": [
              "Alphabetically",
              "By increasing atomic number",
              "By colour",
              "Randomly"
            ],
            "correct": 1
          },
          {
            "q": "What do elements in the same group of the periodic table share?",
            "options": [
              "The same number of protons",
              "The same number of outer electrons, giving similar properties",
              "The same mass number",
              "Nothing in common"
            ],
            "correct": 1
          },
          {
            "q": "What is Group 1 of the periodic table commonly known as?",
            "options": [
              "Noble gases",
              "Alkali metals",
              "Halogens",
              "Transition metals"
            ],
            "correct": 1
          },
          {
            "q": "What is Group 7 of the periodic table commonly known as?",
            "options": [
              "Alkali metals",
              "Noble gases",
              "Halogens",
              "Alkaline earth metals"
            ],
            "correct": 2
          },
          {
            "q": "What is Group 0 (or Group 8) commonly known as?",
            "options": [
              "Halogens",
              "Noble gases",
              "Alkali metals",
              "Transition metals"
            ],
            "correct": 1
          },
          {
            "q": "How does reactivity change going down Group 1 (alkali metals)?",
            "options": [
              "It decreases",
              "It increases",
              "It stays the same",
              "It becomes zero"
            ],
            "correct": 1
          },
          {
            "q": "How does reactivity change going down Group 7 (halogens)?",
            "options": [
              "It increases",
              "It decreases",
              "It stays the same",
              "It becomes negative"
            ],
            "correct": 1
          },
          {
            "q": "Why are noble gases mostly unreactive?",
            "options": [
              "They have a full outer shell of electrons",
              "They have no electrons",
              "They are always liquids",
              "They have no protons"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'period' in the periodic table?",
            "options": [
              "A vertical column",
              "A horizontal row",
              "A type of bond",
              "A measure of reactivity"
            ],
            "correct": 1
          },
          {
            "q": "Which part of the periodic table contains most metals?",
            "options": [
              "The far right",
              "The top row only",
              "The left and centre",
              "Only Group 0"
            ],
            "correct": 2
          }
        ]
      },
      "rates": {
        "label": "Rates of Reaction",
        "questions": [
          {
            "q": "What happens to the rate of reaction when temperature increases?",
            "options": [
              "It decreases",
              "It increases",
              "It stays the same",
              "It stops completely"
            ],
            "correct": 1
          },
          {
            "q": "What happens to the rate of reaction when concentration increases?",
            "options": [
              "It decreases",
              "It generally increases",
              "It stays exactly the same",
              "It becomes negative"
            ],
            "correct": 1
          },
          {
            "q": "What is a catalyst's role in a reaction?",
            "options": [
              "It slows the reaction down",
              "It speeds up the reaction without being used up",
              "It is a type of product",
              "It stops the reaction permanently"
            ],
            "correct": 1
          },
          {
            "q": "How does increasing surface area of a solid affect reaction rate?",
            "options": [
              "It has no effect",
              "It generally increases the rate",
              "It always decreases the rate",
              "It stops the reaction"
            ],
            "correct": 1
          },
          {
            "q": "What is 'collision theory'?",
            "options": [
              "Reactions only happen when particles collide with enough energy and correct orientation",
              "A theory about planetary motion",
              "A rule about ionic bonding",
              "A law about gas pressure only"
            ],
            "correct": 0
          },
          {
            "q": "What is 'activation energy'?",
            "options": [
              "The total energy released in a reaction",
              "The minimum energy needed for a reaction to occur",
              "The energy of the products only",
              "The energy stored in a catalyst"
            ],
            "correct": 1
          },
          {
            "q": "What would generally speed up a reaction between a solid and a liquid?",
            "options": [
              "Cooling the mixture down",
              "Increasing the surface area of the solid",
              "Removing the liquid",
              "Using bigger lumps of solid"
            ],
            "correct": 1
          },
          {
            "q": "How can you measure the rate of a reaction that produces gas?",
            "options": [
              "By measuring the volume of gas produced over time",
              "By weighing the reactants before the reaction only",
              "By checking the colour of the container",
              "By counting bubbles in the sky"
            ],
            "correct": 0
          },
          {
            "q": "What effect does a catalyst have on activation energy?",
            "options": [
              "It increases it",
              "It lowers it",
              "It has no effect on it",
              "It doubles it"
            ],
            "correct": 1
          },
          {
            "q": "Why does powdered chalk react faster with acid than one lump of the same mass?",
            "options": [
              "Powdered chalk has a smaller total surface area",
              "Powdered chalk has a larger total surface area, so more collisions can occur",
              "Powder is a different chemical",
              "Lumps are more reactive"
            ],
            "correct": 1
          }
        ]
      }
    }
  },
  "biology": {
    "label": "Biology",
    "topics": {
      "cells": {
        "label": "Cell Biology",
        "questions": [
          {
            "q": "Which organelle is responsible for photosynthesis?",
            "options": [
              "Nucleus",
              "Mitochondria",
              "Chloroplast",
              "Ribosome"
            ],
            "correct": 2
          },
          {
            "q": "Which organelle controls a cell's activities?",
            "options": [
              "Nucleus",
              "Cytoplasm",
              "Cell membrane",
              "Vacuole"
            ],
            "correct": 0
          },
          {
            "q": "What is the function of the cell membrane?",
            "options": [
              "Produces energy",
              "Controls what enters and leaves the cell",
              "Stores DNA",
              "Produces proteins"
            ],
            "correct": 1
          },
          {
            "q": "What is diffusion?",
            "options": [
              "Movement of particles from low to high concentration",
              "Net movement of particles from high to low concentration",
              "Movement of water only",
              "Cell division"
            ],
            "correct": 1
          },
          {
            "q": "Which organelle is the site of most aerobic respiration?",
            "options": [
              "Nucleus",
              "Mitochondria",
              "Chloroplast",
              "Cell wall"
            ],
            "correct": 1
          },
          {
            "q": "Which structure is found in plant cells but not animal cells?",
            "options": [
              "Nucleus",
              "Mitochondria",
              "Cell wall",
              "Cell membrane"
            ],
            "correct": 2
          },
          {
            "q": "Which does NOT affect the rate of diffusion?",
            "options": [
              "Temperature",
              "Concentration gradient",
              "Surface area",
              "Colour of the substance"
            ],
            "correct": 3
          },
          {
            "q": "What is osmosis?",
            "options": [
              "Movement of any particle across a membrane",
              "Movement of water across a partially permeable membrane",
              "Cell division",
              "Movement of glucose only"
            ],
            "correct": 1
          },
          {
            "q": "What is the function of a red blood cell?",
            "options": [
              "Fight infection",
              "Carry oxygen around the body",
              "Produce hormones",
              "Digest food"
            ],
            "correct": 1
          },
          {
            "q": "Which of these is a single-celled organism?",
            "options": [
              "Human",
              "Bacterium",
              "Oak tree",
              "Mushroom"
            ],
            "correct": 1
          }
        ]
      },
      "photorespiration": {
        "label": "Photosynthesis & Respiration",
        "questions": [
          {
            "q": "What are the reactants of photosynthesis?",
            "options": [
              "Glucose and oxygen",
              "Carbon dioxide and water",
              "Water and oxygen",
              "Glucose and water"
            ],
            "correct": 1
          },
          {
            "q": "What are the products of photosynthesis?",
            "options": [
              "Carbon dioxide and water",
              "Glucose and oxygen",
              "Oxygen and water",
              "Glucose and carbon dioxide"
            ],
            "correct": 1
          },
          {
            "q": "What gas is needed for aerobic respiration?",
            "options": [
              "Carbon dioxide",
              "Nitrogen",
              "Oxygen",
              "Hydrogen"
            ],
            "correct": 2
          },
          {
            "q": "What are the products of aerobic respiration?",
            "options": [
              "Glucose and oxygen",
              "Carbon dioxide and water",
              "Oxygen and water",
              "Glucose and water"
            ],
            "correct": 1
          },
          {
            "q": "Where in a plant cell does photosynthesis happen?",
            "options": [
              "Nucleus",
              "Mitochondria",
              "Chloroplast",
              "Cell wall"
            ],
            "correct": 2
          },
          {
            "q": "Which of these can limit the rate of photosynthesis?",
            "options": [
              "Light intensity",
              "Eye colour",
              "Blood type",
              "Height"
            ],
            "correct": 0
          },
          {
            "q": "Which process releases energy from glucose in cells?",
            "options": [
              "Photosynthesis",
              "Respiration",
              "Diffusion",
              "Osmosis"
            ],
            "correct": 1
          },
          {
            "q": "Does respiration happen all the time, or only in daylight?",
            "options": [
              "Only in daylight",
              "Only at night",
              "All the time",
              "Only during exercise"
            ],
            "correct": 2
          },
          {
            "q": "What is the main difference between photosynthesis and respiration?",
            "options": [
              "Photosynthesis releases energy, respiration stores it",
              "Photosynthesis stores energy, respiration releases it",
              "They are the same process",
              "Neither involves energy"
            ],
            "correct": 1
          },
          {
            "q": "Which pigment absorbs light for photosynthesis?",
            "options": [
              "Melanin",
              "Chlorophyll",
              "Haemoglobin",
              "Keratin"
            ],
            "correct": 1
          }
        ]
      },
      "genetics": {
        "label": "Genetics & Inheritance",
        "questions": [
          {
            "q": "What is a gene?",
            "options": [
              "A whole chromosome",
              "A section of DNA that codes for a characteristic",
              "A type of cell",
              "A protein"
            ],
            "correct": 1
          },
          {
            "q": "Pea plant Tt is crossed with tt. Expected ratio of Tt:tt offspring?",
            "options": [
              "1:1",
              "3:1",
              "1:3",
              "2:1"
            ],
            "correct": 0
          },
          {
            "q": "What does 'dominant allele' mean?",
            "options": [
              "It never appears in offspring",
              "Its characteristic appears even with only one copy",
              "It only appears with two copies",
              "It is always harmful"
            ],
            "correct": 1
          },
          {
            "q": "What does 'recessive allele' mean?",
            "options": [
              "Its characteristic appears with one copy",
              "Its characteristic only appears with two copies",
              "It is always dominant",
              "It cannot be inherited"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'genotype'?",
            "options": [
              "The observable characteristic",
              "The genetic makeup for a characteristic",
              "A type of cell",
              "A protein structure"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'phenotype'?",
            "options": [
              "The genetic makeup",
              "The observable characteristic resulting from genotype",
              "A chromosome",
              "A type of gamete"
            ],
            "correct": 1
          },
          {
            "q": "Are human body cells haploid or diploid?",
            "options": [
              "Haploid",
              "Diploid",
              "Neither",
              "Both equally"
            ],
            "correct": 1
          },
          {
            "q": "What carries genetic information in a cell?",
            "options": [
              "Mitochondria",
              "DNA",
              "Ribosomes",
              "Cytoplasm"
            ],
            "correct": 1
          },
          {
            "q": "What is a chromosome made of?",
            "options": [
              "Protein only",
              "A coiled molecule of DNA",
              "Fat",
              "Sugar"
            ],
            "correct": 1
          },
          {
            "q": "How many chromosomes are in a typical human body cell?",
            "options": [
              "23",
              "46",
              "44",
              "48"
            ],
            "correct": 1
          }
        ]
      },
      "ecology": {
        "label": "Ecology",
        "questions": [
          {
            "q": "What is an ecosystem?",
            "options": [
              "Only the living organisms in an area",
              "Living organisms and their non-living environment together",
              "A single species",
              "A food chain only"
            ],
            "correct": 1
          },
          {
            "q": "In Grass → Rabbit → Fox, what does the arrow represent?",
            "options": [
              "Direction of energy flow",
              "Direction of water flow",
              "Size comparison",
              "Time order only"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'habitat'?",
            "options": [
              "The food an organism eats",
              "The natural environment where an organism lives",
              "A type of predator",
              "A chemical process"
            ],
            "correct": 1
          },
          {
            "q": "Which human activity commonly reduces biodiversity?",
            "options": [
              "Recycling",
              "Deforestation",
              "Planting trees",
              "Composting"
            ],
            "correct": 1
          },
          {
            "q": "What is 'competition' between organisms?",
            "options": [
              "Organisms helping each other",
              "Organisms competing for the same limited resource",
              "A type of migration",
              "A type of camouflage"
            ],
            "correct": 1
          },
          {
            "q": "What is biodiversity?",
            "options": [
              "The number of trees in a forest only",
              "The variety of living species in an area",
              "The weight of an ecosystem",
              "The temperature of a habitat"
            ],
            "correct": 1
          },
          {
            "q": "What do we call an organism that makes its own food?",
            "options": [
              "Consumer",
              "Producer",
              "Decomposer",
              "Predator"
            ],
            "correct": 1
          },
          {
            "q": "What role do decomposers play in an ecosystem?",
            "options": [
              "They produce oxygen",
              "They break down dead material and recycle nutrients",
              "They hunt other animals",
              "They photosynthesise"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'predator'?",
            "options": [
              "An animal that is hunted",
              "An animal that hunts other animals for food",
              "A type of plant",
              "A decomposer"
            ],
            "correct": 1
          },
          {
            "q": "How is energy commonly lost between trophic levels?",
            "options": [
              "Stored as fat only",
              "Lost as heat through respiration",
              "Converted into water",
              "Never lost"
            ],
            "correct": 1
          }
        ]
      },
      "body-systems": {
        "label": "Human Body Systems",
        "questions": [
          {
            "q": "Which organ pumps blood around the body?",
            "options": [
              "Lungs",
              "Heart",
              "Liver",
              "Kidney"
            ],
            "correct": 1
          },
          {
            "q": "Which system carries oxygen and nutrients around the body?",
            "options": [
              "Digestive system",
              "Circulatory system",
              "Nervous system",
              "Skeletal system"
            ],
            "correct": 1
          },
          {
            "q": "Which organ is mainly responsible for gas exchange in the body?",
            "options": [
              "Heart",
              "Lungs",
              "Stomach",
              "Liver"
            ],
            "correct": 1
          },
          {
            "q": "What is the main function of the digestive system?",
            "options": [
              "To pump blood",
              "To break down food into nutrients the body can absorb",
              "To send electrical signals",
              "To filter air"
            ],
            "correct": 1
          },
          {
            "q": "Which organ produces insulin to help regulate blood sugar?",
            "options": [
              "Liver",
              "Pancreas",
              "Kidney",
              "Stomach"
            ],
            "correct": 1
          },
          {
            "q": "What is the function of red blood cells?",
            "options": [
              "Fight infection",
              "Carry oxygen around the body",
              "Clot blood",
              "Digest food"
            ],
            "correct": 1
          },
          {
            "q": "What is the function of white blood cells?",
            "options": [
              "Carry oxygen",
              "Help fight infection",
              "Clot wounds",
              "Digest fats"
            ],
            "correct": 1
          },
          {
            "q": "Which organs filter waste from the blood to produce urine?",
            "options": [
              "Lungs",
              "Kidneys",
              "Liver",
              "Heart"
            ],
            "correct": 1
          },
          {
            "q": "What is the role of the trachea (windpipe)?",
            "options": [
              "To pump blood",
              "To carry air to and from the lungs",
              "To digest food",
              "To produce hormones"
            ],
            "correct": 1
          },
          {
            "q": "Which part of the nervous system processes information and controls the body?",
            "options": [
              "The spinal cord only",
              "The brain",
              "The skin",
              "The heart"
            ],
            "correct": 1
          }
        ]
      },
      "health": {
        "label": "Health & Disease",
        "questions": [
          {
            "q": "What is a pathogen?",
            "options": [
              "A helpful bacterium",
              "A microorganism that causes disease",
              "A type of white blood cell",
              "A healthy body cell"
            ],
            "correct": 1
          },
          {
            "q": "Name a type of pathogen.",
            "options": [
              "Bacteria",
              "Bone",
              "Blood cell",
              "Enzyme"
            ],
            "correct": 0
          },
          {
            "q": "How do vaccines help protect against disease?",
            "options": [
              "They cure any illness instantly",
              "They expose the body to a safe form of a pathogen so the immune system learns to fight it",
              "They replace white blood cells",
              "They remove the need for a healthy diet"
            ],
            "correct": 1
          },
          {
            "q": "What is the role of white blood cells in fighting infection?",
            "options": [
              "They carry oxygen",
              "They identify and destroy pathogens",
              "They digest food",
              "They transport nutrients only"
            ],
            "correct": 1
          },
          {
            "q": "What is an 'antibody'?",
            "options": [
              "A protein produced by the immune system to fight a specific pathogen",
              "A type of pathogen",
              "A digestive enzyme",
              "A blood vessel"
            ],
            "correct": 0
          },
          {
            "q": "How can infectious diseases commonly spread between people?",
            "options": [
              "Only through direct blood transfusion",
              "Through the air, contact, or contaminated water/food",
              "They cannot spread between people",
              "Only through sunlight"
            ],
            "correct": 1
          },
          {
            "q": "What is a non-communicable disease?",
            "options": [
              "A disease that can spread between people",
              "A disease that cannot be passed from person to person, e.g. heart disease",
              "A type of pathogen",
              "A vaccine"
            ],
            "correct": 1
          },
          {
            "q": "Which lifestyle factor is most linked to increased risk of heart disease?",
            "options": [
              "Regular exercise",
              "A diet high in saturated fat",
              "Drinking water",
              "Sleeping well"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of antibiotics?",
            "options": [
              "To treat viral infections like colds",
              "To treat bacterial infections",
              "To replace vaccines",
              "To cause disease"
            ],
            "correct": 1
          },
          {
            "q": "Why don't antibiotics work against viruses?",
            "options": [
              "Viruses are too large",
              "Viruses lack the cell structures/processes antibiotics target, and reproduce inside host cells",
              "Antibiotics only work on plants",
              "Viruses are immune to all chemicals"
            ],
            "correct": 1
          }
        ]
      }
    }
  },
  "computer-science": {
    "label": "Computer Science",
    "topics": {
      "thinking": {
        "label": "Computational Thinking",
        "questions": [
          {
            "q": "What is an algorithm?",
            "options": [
              "A programming language",
              "A step-by-step set of instructions to solve a problem",
              "A type of computer",
              "A hardware component"
            ],
            "correct": 1
          },
          {
            "q": "What is 'decomposition' in computational thinking?",
            "options": [
              "Deleting code",
              "Breaking a problem into smaller parts",
              "Running a program",
              "Debugging code"
            ],
            "correct": 1
          },
          {
            "q": "What is 'abstraction'?",
            "options": [
              "Adding more detail to a problem",
              "Removing unnecessary detail to focus on what matters",
              "Deleting a program",
              "Making code longer"
            ],
            "correct": 1
          },
          {
            "q": "What is a flowchart used for?",
            "options": [
              "Storing data",
              "Visually representing the steps of an algorithm",
              "Connecting to the internet",
              "Encrypting data"
            ],
            "correct": 1
          },
          {
            "q": "What is 'pseudocode'?",
            "options": [
              "A real programming language",
              "An informal, code-like way of describing an algorithm",
              "A type of virus",
              "A hardware device"
            ],
            "correct": 1
          },
          {
            "q": "Which is an example of computational thinking?",
            "options": [
              "Breaking a large task into smaller steps",
              "Randomly guessing an answer",
              "Ignoring the problem",
              "Memorising without understanding"
            ],
            "correct": 0
          },
          {
            "q": "What does 'debugging' mean?",
            "options": [
              "Writing new code",
              "Finding and fixing errors in code",
              "Deleting a program",
              "Installing software"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'pattern' in computational thinking?",
            "options": [
              "A random error",
              "A similarity or trend used to solve similar problems",
              "A type of virus",
              "A hardware fault"
            ],
            "correct": 1
          },
          {
            "q": "Why plan an algorithm before writing code?",
            "options": [
              "To make the problem more complicated",
              "To plan a clear solution before coding it",
              "To slow down development",
              "To avoid using computers"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of testing an algorithm?",
            "options": [
              "To make it longer",
              "To check it works correctly for different inputs",
              "To delete it",
              "To hide errors"
            ],
            "correct": 1
          }
        ]
      },
      "data": {
        "label": "Data Representation",
        "questions": [
          {
            "q": "What two digits are used in binary?",
            "options": [
              "1 and 2",
              "0 and 1",
              "0 and 9",
              "A and B"
            ],
            "correct": 1
          },
          {
            "q": "Convert the denary number 13 to binary.",
            "options": [
              "1100",
              "1101",
              "1110",
              "1011"
            ],
            "correct": 1
          },
          {
            "q": "Convert the binary number 1010 to denary.",
            "options": [
              "8",
              "9",
              "10",
              "12"
            ],
            "correct": 2
          },
          {
            "q": "What is a single binary digit called?",
            "options": [
              "A byte",
              "A bit",
              "A pixel",
              "A nibble"
            ],
            "correct": 1
          },
          {
            "q": "How many bits make up one byte?",
            "options": [
              "4",
              "8",
              "16",
              "32"
            ],
            "correct": 1
          },
          {
            "q": "Convert the denary number 20 to binary.",
            "options": [
              "10100",
              "10010",
              "11000",
              "10001"
            ],
            "correct": 0
          },
          {
            "q": "Why must images and sound be converted to binary for storage?",
            "options": [
              "Computers can only store and process data as binary signals",
              "It makes files bigger",
              "It is required by law",
              "It makes files colourful"
            ],
            "correct": 0
          },
          {
            "q": "What is 'hexadecimal' commonly used for?",
            "options": [
              "Representing colours and memory addresses compactly",
              "Storing sound only",
              "Deleting files",
              "Connecting to WiFi"
            ],
            "correct": 0
          },
          {
            "q": "What does 'ASCII' represent?",
            "options": [
              "A type of hardware",
              "A character encoding standard for text",
              "A programming language",
              "A network protocol"
            ],
            "correct": 1
          },
          {
            "q": "What is the denary value of binary 1111?",
            "options": [
              "14",
              "15",
              "16",
              "11"
            ],
            "correct": 1
          }
        ]
      },
      "programming": {
        "label": "Programming",
        "questions": [
          {
            "q": "What is a 'variable'?",
            "options": [
              "A fixed value that never changes",
              "A named memory location storing a value that can change",
              "A type of hardware",
              "A programming error"
            ],
            "correct": 1
          },
          {
            "q": "Which data type stores a whole number?",
            "options": [
              "String",
              "Boolean",
              "Integer",
              "Float only"
            ],
            "correct": 2
          },
          {
            "q": "Which data type stores a True/False value?",
            "options": [
              "Integer",
              "Boolean",
              "String",
              "Character"
            ],
            "correct": 1
          },
          {
            "q": "What does an IF...ELSE statement do?",
            "options": [
              "Repeats code forever",
              "Makes a decision, running different code based on a condition",
              "Stores data permanently",
              "Deletes a variable"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'loop' used for?",
            "options": [
              "Storing text",
              "Repeating a set of instructions",
              "Connecting to a network",
              "Displaying an error"
            ],
            "correct": 1
          },
          {
            "q": "Which data type stores someone's name?",
            "options": [
              "Integer",
              "Boolean",
              "String",
              "Float"
            ],
            "correct": 2
          },
          {
            "q": "What is a 'syntax error'?",
            "options": [
              "A logical mistake in the plan",
              "Code that doesn't follow the rules of the language",
              "A hardware fault",
              "A slow-running program"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of a 'comment' in code?",
            "options": [
              "To make the program run faster",
              "To explain the code to a reader, without affecting how it runs",
              "To delete unused code",
              "To fix all errors automatically"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'function' (or procedure)?",
            "options": [
              "A single variable",
              "A named, reusable block of code that performs a task",
              "A type of error",
              "A hardware device"
            ],
            "correct": 1
          },
          {
            "q": "What does it mean for a loop to be 'infinite'?",
            "options": [
              "It runs a fixed number of times",
              "It never stops running under normal conditions",
              "It runs once only",
              "It never starts"
            ],
            "correct": 1
          }
        ]
      },
      "networks": {
        "label": "Networks & Security",
        "questions": [
          {
            "q": "What does CPU stand for?",
            "options": [
              "Computer Processing Unit",
              "Central Processing Unit",
              "Central Program Utility",
              "Computer Program Unit"
            ],
            "correct": 1
          },
          {
            "q": "What is one function of RAM?",
            "options": [
              "Permanently stores files",
              "Temporarily stores data for programs currently running",
              "Connects to the internet",
              "Displays graphics only"
            ],
            "correct": 1
          },
          {
            "q": "What does LAN stand for?",
            "options": [
              "Large Area Network",
              "Local Area Network",
              "Long Access Network",
              "Linked Area Node"
            ],
            "correct": 1
          },
          {
            "q": "What is a key difference between a LAN and a WAN?",
            "options": [
              "A LAN covers a small area, a WAN covers a large area",
              "A LAN is always faster",
              "A WAN has no internet access",
              "They are identical"
            ],
            "correct": 0
          },
          {
            "q": "What is 'malware'?",
            "options": [
              "Helpful system software",
              "Software designed to damage or gain unauthorised access to a system",
              "A type of hardware",
              "A network cable"
            ],
            "correct": 1
          },
          {
            "q": "What helps keep an online account secure?",
            "options": [
              "Using the same simple password everywhere",
              "Using a strong, unique password",
              "Sharing your password with friends",
              "Disabling all security features"
            ],
            "correct": 1
          },
          {
            "q": "What does 'phishing' typically try to do?",
            "options": [
              "Speed up your computer",
              "Trick you into giving away personal information",
              "Improve your WiFi signal",
              "Backup your files automatically"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of a firewall?",
            "options": [
              "To physically cool a computer",
              "To monitor and control network traffic for security",
              "To increase internet speed",
              "To store passwords in plain text"
            ],
            "correct": 1
          },
          {
            "q": "What does 'encryption' do to data?",
            "options": [
              "Deletes it permanently",
              "Scrambles it so only authorised parties can read it",
              "Makes it load faster",
              "Compresses it for storage only"
            ],
            "correct": 1
          },
          {
            "q": "What is two-factor authentication?",
            "options": [
              "Using two different browsers",
              "An extra security step beyond just a password",
              "A type of virus",
              "A way to speed up login"
            ],
            "correct": 1
          }
        ]
      }
    }
  },
  "chess": {
    "label": "Chess",
    "topics": {
      "basics": {
        "label": "Rules & Basics",
        "questions": [
          {
            "q": "How many squares are on a chessboard?",
            "options": [
              "32",
              "48",
              "64",
              "100"
            ],
            "correct": 2
          },
          {
            "q": "How many pawns does each player start with?",
            "options": [
              "6",
              "8",
              "10",
              "4"
            ],
            "correct": 1
          },
          {
            "q": "Which piece can only move diagonally?",
            "options": [
              "Rook",
              "Bishop",
              "Knight",
              "Queen"
            ],
            "correct": 1
          },
          {
            "q": "Which piece moves in an L-shape?",
            "options": [
              "Bishop",
              "Rook",
              "Knight",
              "King"
            ],
            "correct": 2
          },
          {
            "q": "How does a rook move?",
            "options": [
              "Diagonally only",
              "In an L-shape",
              "Horizontally and vertically",
              "One square in any direction"
            ],
            "correct": 2
          },
          {
            "q": "Which piece is the most powerful on the board?",
            "options": [
              "Rook",
              "Bishop",
              "Knight",
              "Queen"
            ],
            "correct": 3
          },
          {
            "q": "How many squares can the King normally move at a time?",
            "options": [
              "One",
              "Two",
              "Three",
              "As many as it likes"
            ],
            "correct": 0
          },
          {
            "q": "What is 'check'?",
            "options": [
              "When the game ends in a draw",
              "When the King is under direct attack",
              "When a pawn reaches the last row",
              "When a player runs out of time"
            ],
            "correct": 1
          },
          {
            "q": "What is 'checkmate'?",
            "options": [
              "A draw by agreement",
              "When the King is in check with no legal escape",
              "When a player loses all their pawns",
              "When time runs out"
            ],
            "correct": 1
          },
          {
            "q": "What happens when a pawn reaches the opponent's back row?",
            "options": [
              "It is removed from the board",
              "It can be promoted to another piece",
              "Nothing happens",
              "It moves backward"
            ],
            "correct": 1
          }
        ]
      },
      "openings": {
        "label": "Openings",
        "questions": [
          {
            "q": "What is the term for the first phase of a chess game?",
            "options": [
              "Endgame",
              "Middlegame",
              "Opening",
              "Stalemate"
            ],
            "correct": 2
          },
          {
            "q": "Why is controlling the centre important in the opening?",
            "options": [
              "It isn't important",
              "It gives your pieces more mobility and influence",
              "It only matters in the endgame",
              "It guarantees checkmate"
            ],
            "correct": 1
          },
          {
            "q": "Which is generally good opening practice?",
            "options": [
              "Moving the same piece repeatedly",
              "Developing your pieces and controlling the centre",
              "Bringing your queen out alone immediately",
              "Ignoring king safety"
            ],
            "correct": 1
          },
          {
            "q": "What does 'castling' allow a player to do?",
            "options": [
              "Move two pawns at once",
              "Move the King and Rook together to improve safety",
              "Capture two pieces at once",
              "Skip a turn"
            ],
            "correct": 1
          },
          {
            "q": "What is 'development' in opening theory?",
            "options": [
              "Getting pieces off starting squares into useful positions",
              "Capturing as many pawns as possible",
              "Attacking immediately with the queen",
              "Trading all your pieces"
            ],
            "correct": 0
          },
          {
            "q": "Which piece should generally NOT be developed too early?",
            "options": [
              "Knight",
              "Bishop",
              "Queen",
              "Pawn"
            ],
            "correct": 2
          },
          {
            "q": "What is 'tempo' in chess?",
            "options": [
              "The speed the clock ticks",
              "A measure of time/moves gained or lost in development",
              "A type of checkmate",
              "A chess piece"
            ],
            "correct": 1
          },
          {
            "q": "Why is king safety important early in the game?",
            "options": [
              "It isn't important",
              "An exposed king is easier to attack and harder to defend",
              "Kings can't be captured anyway",
              "It only matters at the very end"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'gambit'?",
            "options": [
              "A type of checkmate",
              "An opening sacrificing material for a positional advantage",
              "An illegal move",
              "A drawing technique"
            ],
            "correct": 1
          },
          {
            "q": "Which side moves first in a game of chess?",
            "options": [
              "Black",
              "White",
              "Whoever is higher rated",
              "Decided by a coin flip each move"
            ],
            "correct": 1
          }
        ]
      },
      "tactics": {
        "label": "Tactics",
        "questions": [
          {
            "q": "What is a 'fork'?",
            "options": [
              "A piece attacking two or more enemy pieces at once",
              "A type of checkmate",
              "An illegal move",
              "A way to end the game in a draw"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'pin'?",
            "options": [
              "Moving a piece backward",
              "A piece unable to move without exposing a more valuable piece behind it",
              "A type of opening",
              "A way to promote a pawn"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'skewer'?",
            "options": [
              "An attack forcing a valuable piece to move, exposing a weaker one behind it",
              "A type of castling",
              "A drawing rule",
              "A pawn structure"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'discovered attack'?",
            "options": [
              "An attack revealed when a piece moves out of another's way",
              "An attack that is illegal",
              "A type of stalemate",
              "A way to promote a pawn early"
            ],
            "correct": 0
          },
          {
            "q": "What does 'sacrifice' mean in chess tactics?",
            "options": [
              "Refusing to move a piece",
              "Deliberately giving up material for a greater advantage",
              "Resigning the game",
              "Ending the game in a draw"
            ],
            "correct": 1
          },
          {
            "q": "What is 'zugzwang'?",
            "options": [
              "A situation where any move worsens a player's position",
              "A type of opening",
              "An illegal move",
              "A drawing agreement"
            ],
            "correct": 0
          },
          {
            "q": "What is a 'double attack'?",
            "options": [
              "Attacking one piece twice",
              "A single move creating two threats at once",
              "Moving two pieces in one turn",
              "An illegal move"
            ],
            "correct": 1
          },
          {
            "q": "What is the purpose of trading pieces as a tactic?",
            "options": [
              "It's always a mistake",
              "It can simplify a position to your advantage when ahead",
              "It always leads to checkmate",
              "It has no strategic value"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'battery' in chess?",
            "options": [
              "Two or more pieces lined up to attack along the same line",
              "An illegal move",
              "A chess clock",
              "A drawing rule"
            ],
            "correct": 0
          },
          {
            "q": "Spotting tactics well usually requires noticing which of these?",
            "options": [
              "Undefended or overloaded pieces",
              "Only the pawns",
              "The time on the clock",
              "The colour of the board"
            ],
            "correct": 0
          }
        ]
      },
      "endgames": {
        "label": "Endgames",
        "questions": [
          {
            "q": "Why does the King often become more active in the endgame?",
            "options": [
              "It's too dangerous, so it stays passive",
              "With fewer pieces, the King is safer to use actively",
              "Kings can't move in the endgame",
              "It has no effect"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'stalemate'?",
            "options": [
              "A type of checkmate",
              "No legal moves but not in check, resulting in a draw",
              "When a King is captured",
              "An illegal position"
            ],
            "correct": 1
          },
          {
            "q": "Which of these typically results in a draw?",
            "options": [
              "Checkmate",
              "Stalemate",
              "Losing your queen",
              "Castling"
            ],
            "correct": 1
          },
          {
            "q": "In a King and pawn endgame, what is 'opposition'?",
            "options": [
              "A type of opening",
              "Kings facing each other, affecting who must move back",
              "A pawn formation",
              "A type of check"
            ],
            "correct": 1
          },
          {
            "q": "Why is pawn promotion especially important in the endgame?",
            "options": [
              "It isn't important",
              "Converting a pawn into a queen can decide the game",
              "Pawns can't promote in the endgame",
              "It always causes a draw"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'theoretical draw'?",
            "options": [
              "A position known to be drawn with correct play",
              "A position that always ends in checkmate",
              "An illegal position",
              "A position that hasn't been studied"
            ],
            "correct": 0
          },
          {
            "q": "In a king-and-pawns-only endgame, what usually matters most?",
            "options": [
              "Piece development",
              "King activity and pawn structure",
              "Castling rights",
              "Opening theory"
            ],
            "correct": 1
          },
          {
            "q": "What is a 'passed pawn'?",
            "options": [
              "A pawn that has been captured",
              "A pawn with no opposing pawns blocking its path to promotion",
              "A pawn that moved sideways",
              "A pawn stuck in the starting row"
            ],
            "correct": 1
          },
          {
            "q": "Why are rook endgames especially important to study?",
            "options": [
              "They rarely occur in real games",
              "They occur very frequently and have well-known techniques",
              "Rooks are the weakest piece",
              "They always end in stalemate"
            ],
            "correct": 1
          },
          {
            "q": "What is the general endgame principle about the King?",
            "options": [
              "Keep it as far from the action as possible",
              "Activate it — it becomes a strong piece with fewer pieces on board",
              "Trade it immediately",
              "Castle repeatedly"
            ],
            "correct": 1
          }
        ]
      }
    }
  }
}
