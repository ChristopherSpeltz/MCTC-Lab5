/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log(
  "For this lab, please write the code requested at the //TODO markers."
);

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  timestamp: 1515784140,
  iss_position: {
    latitude: "49.2167",
    longitude: "100.5363",
  },
  message: "success",
};
// DONE
// Code created to get the latitude value, and log it to the console.
console.log(iss_location.iss_position.latitude);
// DONE
// Code created to get the longitude value, and log it to the console.
console.log(iss_location.iss_position.longitude);

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

let rates = {
  AUD: 1.5417,
  BGN: 1.9558,
  BRL: 3.8959,
  CAD: 1.5194,
};

// DONE
// Code create to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787;
console.log(rates);
// DONE
// Code create to get the exchange rate from the object, then calculate the equivalent value in Australian Dollars (AUD)
let audRate = rates.AUD;
let eurAmount = 100;
let currencyConverter = audRate * eurAmount;
console.log(
  `Your ${eurAmount} Euros will be converted to ${currencyConverter.toFixed(
    2
  )} Australian Dollars, using the AUD exchange rate of ${audRate}`
);
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value.
// The answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
let largestCode = '' // placeholder value
let largestRateAmount = 0
for (let code in rates) { //loop over each property in an object
  let rateAmount = rates[code] // reads the value for the code property
  if (rateAmount > largestRateAmount) { //is this larger than any other seen so far
    largestRateAmount =rateAmount // update largest value
    largestCode = code // and it's corresponding code
  }
}

console.log(largestCode, largestRateAmount)
/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" },
];
// DONE
// Code created to print object from array
console.log(`Gary Oldman's cat's name is ${cats_and_owners[1].cat}`);
// DONE
// Code created to add new object to array
cats_and_owners.push({ name: "Taylor Swift", cat: "Meredith" });
console.log(cats_and_owners);
// DONE
// Code creaed to print each cat owner, and their cat's name, one per line. 
cats_and_owners.forEach(function (element) {
  console.log(`${element.name}'s cat is called ${element.cat}`);
});

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
  prizes: [
    {
      year: "2017",
      category: "physics",
      laureates: [
        {
          id: "941",
          firstname: "Rainer",
          surname: "Weiss",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "2",
        },
        {
          id: "942",
          firstname: "Barry C.",
          surname: "Barish",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
        {
          id: "943",
          firstname: "Kip S.",
          surname: "Thorne",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
      ],
    },
    {
      year: "2017",
      category: "chemistry",
      laureates: [
        {
          id: "944",
          firstname: "Jacques",
          surname: "Dubochet",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "945",
          firstname: "Joachim",
          surname: "Frank",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "946",
          firstname: "Richard",
          surname: "Henderson",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
      ],
    },
    {
      year: "2017",
      category: "medicine",
      laureates: [
        {
          id: "938",
          firstname: "Jeffrey C.",
          surname: "Hall",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "939",
          firstname: "Michael",
          surname: "Rosbash",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "940",
          firstname: "Michael W.",
          surname: "Young",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
      ],
    },
    {
      year: "2017",
      category: "literature",
      laureates: [
        {
          id: "947",
          firstname: "Kazuo",
          surname: "Ishiguro",
          motivation:
            '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"',
          share: "1",
        },
      ],
    },
    {
      year: "2017",
      category: "peace",
      laureates: [
        {
          id: "948",
          firstname: "International Campaign to Abolish Nuclear Weapons (ICAN)",
          motivation:
            '"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons"',
          share: "1",
          surname: "",
        },
      ],
    },
    {
      year: "2017",
      category: "economics",
      laureates: [
        {
          id: "949",
          firstname: "Richard H.",
          surname: "Thaler",
          motivation: '"for his contributions to behavioural economics"',
          share: "1",
        },
      ],
    },
  ],
};
// DONE
// Code created to  print the full name of the Literature Nobel laureate.
let firstName = nobel_prize_winners_2017.prizes[3].laureates[0].firstname;
let lastName = nobel_prize_winners_2017.prizes[3].laureates[0].surname;
console.log(`${firstName} ${lastName}`);

// DONE
// Code to print the ids of each of the Physics Nobel laureates.
let laureateIDarray = nobel_prize_winners_2017.prizes[0].laureates
let array = [];
laureateIDarray.forEach(function (laureateID) {
    array.push(laureateID.id)
})
console.log(array)

// DONE
// Code created to print the names of all the prize categories

let categoriesArray = nobel_prize_winners_2017.prizes
let categories = []
categoriesArray.forEach(function (prizeCategory) {
    categories.push(prizeCategory.category)
})

let prizeCategories = categories.join(', ')
console.log('The prize categories are ' + prizeCategories)

// DONE
// Code created to count the total number of prize categories
let categoriesArray2 = nobel_prize_winners_2017.prizes
let categories2 = []
categoriesArray2.forEach(function (prizeCategory) {
    categories2.push(prizeCategory.category)
})
console.log(categories2.length)

// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.