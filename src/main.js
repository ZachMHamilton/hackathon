// Create an object with pairs to replace
const replaced = {
  Dog: "🐶",
  Cat: "🐱",
  Chimpanzee: "🐒",
  Tortoise: "🐢",
  Iguana: "🦎",
  Jaguar: "🐆",
  Tuna: "🐟",
  Rhino: "🦏",
  Mouse: "🐭",
  Hamster: "🐹",
  Rabbit: "🐰",
  Fox: "🦊",
  Bear: "🐻",
  Panda: "🐼",
  Lion: "🦁",
  Tiger: "🐅",
  Leopard: "🐆",
  Horse: "🐴",
  Unicorn: "🦄",
  Pig: "🐷",
  Cow: "🐮",
  Sheep: "🐑",
  Goat: "🐐",
  Camel: "🐫",
  Elephant: "🐘",
  Giraffe: "🦒",
  Rhinoceros: "🦏",
  Hippopotamus: "🦛",
  Kangaroo: "🦘",
  Koala: "🐨",
  Opossum: "🦔",
  Zebra: "🦓",
  Deer: "🦌",
  Gorilla: "🦍",
  Monkey: "🐒",
  Orangutan: "🦧",
  Penguin: "🐧",
  Bird: "🐦",
  Duck: "🦆",
  Swan: "🦢",
  Owl: "🦉",
  Peacock: "🦚",
  Parrot: "🦜",
  Turkey: "🦃",
  Eagle: "🦅",
  Dove: "🕊️",
  Flamingo: "🦩",
  Lizard: "🦎",
  Snake: "🐍",
  Turtle: "🐢",
  Crocodile: "🐊",
  Alligator: "🐊",
  Dinosaur: "🦕",
  Sauropod: "🦕",
  "T-Rex": "🦖",
  Fish: "🐟",
  "Tropical Fish": "🐠",
  Blowfish: "🐡",
  Shark: "🦈",
  Octopus: "🐙",
  Squid: "🦑",
  Whale: "🐳",
  Dolphin: "🐬",
  Seal: "🦭",
  Seahorse: "🦄",
  Crab: "🦀",
  Lobster: "🦞",
  Shrimp: "🦐",
  Ant: "🐜",
  Honeybee: "🐝",
  "Lady Beetle": "🐞",
  Butterfly: "🦋",
  Snail: "🐌",
  Mosquito: "🦟",
  Scorpion: "🦂",
  Centipede: "🐛",
  Spider: "🕷️",
  "Spider Web": "🕸️",
  Microbe: "🦠",
  Pizza: "🍕",
  Hamburger: "🍔",
  Taco: "🌮",
  Sushi: "🍣",
  Spaghetti: "🍝",
  Doughnut: "🍩",
  "Ice Cream": "🍦",
  Cake: "🍰",
  Cookie: "🍪",
  "Chocolate Bar": "🍫",
  Popcorn: "🍿",
  "Hot Dog": "🌭",
  "French Fries": "🍟",
  Burrito: "🌯",
  Pancakes: "🥞",
  Milkshake: "🥤",
  Coffee: "☕️",
  Tea: "🍵",
  Beer: "🍺",
  Cocktail: "🍸",
  Wine: "🍷",
  Champagne: "🍾",
  Soda: "🥤",
  Watermelon: "🍉",
  Banana: "🍌",
  Apple: "🍎",
  Grapes: "🍇",
  Strawberry: "🍓",
  Lemon: "🍋",
  Pineapple: "🍍",
  Watermelon: "🍉",
  Cherries: "🍒",
  Avocado: "🥑",
  Carrot: "🥕",
  Broccoli: "🥦",
  Mushroom: "🍄",
  Tomato: "🍅",
  Pepper: "🌶️",
  Eggplant: "🍆",
  Corn: "🌽",
  Bread: "🍞",
  Football: "⚽️",
  Basketball: "🏀",
  Baseball: "⚾️",
  Soccer: "⚽️",
  Tennis: "🎾",
  Golf: "⛳️",
  Swimming: "🏊‍♂️",
  Surfing: "🏄‍♂️",
  Running: "🏃‍♂️",
  Cycling: "🚴‍♂️",
  Hiking: "🚶‍♂️",
  Dancing: "💃",
  Weightlifting: "🏋️‍♂️",
  Yoga: "🧘‍♀️",
  Skiing: "⛷️",
  Snowboarding: "🏂",
  Skateboarding: "🛹",
  Gaming: "🎮",
  Bowling: "🎳",
  Fishing: "🎣",
  Music: "🎵",
  "Musical Notes": "🎶",
  Microphone: "🎤",
  Movie: "🎬",
  Theater: "🎭",
  Art: "🎨",
  Books: "📚",
  Writing: "✍️",
  Travel: "✈️",
  Hiking: "🚶‍♂️",
  Camping: "🏕️",
  Beach: "🏖️",
  Sunset: "🌅",
  Stars: "🌟",
  Fireworks: "🎆",
  "Roller Coaster": "🎢",
  "Carousel Horse": "🎠",
  "Ferris Wheel": "🎡",
  "Circus Tent": "🎪",
  Car: "🚗",
  Taxi: "🚕",
  Bus: "🚌",
  Train: "🚆",
  Tram: "🚊",
  Bicycle: "🚲",
  Motorcycle: "🏍️",
  Ship: "🚢",
  Airplane: "✈️",
  Helicopter: "🚁",
  Rocket: "🚀",
  Sailboat: "⛵️",
  Speedboat: "🚤",
  Bridge: "🌉",
  "Statue of Liberty": "🗽",
  House: "🏠",
  Building: "🏢",
  Hospital: "🏥",
  School: "🏫",
  Bank: "🏦",
  Hotel: "🏨",
  "Convenience Store": "🏪",
  "Gas Station": "⛽️",
  Church: "⛪️",
  Mosque: "🕌",
  Synagogue: "🕍",
  Temple: "🛕",
  Cityscape: "🏙️",
  Sunrise: "🌅",
  Sunset: "🌇",
  Desert: "🏜️",
  Mountain: "⛰️",
  Volcano: "🌋",
  Beach: "🏖️",
  Island: "🏝️",
  "National Park": "🏞️",
  Campground: "🏕️",
  Watch: "⌚️",
  "Mobile Phone": "📱",
  Laptop: "💻",
  Computer: "🖥️",
  Keyboard: "⌨️",
  Mouse: "🖱️",
  Printer: "🖨️",
  Telephone: "☎️",
  Camera: "📷",
  "Video Camera": "📹",
  Television: "📺",
  Radio: "📻",
  Headphones: "🎧",
  Microphone: "🎤",
  Briefcase: "💼",
  "Money Bag": "💰",
  "Credit Card": "💳",
  "Shopping Cart": "🛒",
  Envelope: "✉️",
  Mailbox: "📫",
  Package: "📦",
  Lock: "🔒",
  Key: "🔑",
  Hammer: "🔨",
  Wrench: "🔧",
  Screwdriver: "🪛",
  Scissors: "✂️",
  Pencil: "📝",
  Book: "📖",
  Newspaper: "📰",
  Fire: "🔥",
  "Electric Light Bulb": "💡",
  Battery: "🔋",
  Lightning: "⚡️",
  Hourglass: "⌛️",
  "Alarm Clock": "⏰",
  Stopwatch: "⏱️",
  "Telephone Receiver": "📞",
  Pager: "📟",
  "Fax Machine": "📠",
};

function replaceText() {
  // get all text in document
  const allText = document.querySelectorAll(
    "h1, h2, h3, h4, h5, p, span, a, td"
  );
  // iterate thru textå
  for (let i = 0; i < allText.length; i++) {
    // iterate thru obj
    for (const key in replaced) {
      // replace with corresponding emoji
      const regex = new RegExp(key, "gi");
      allText[i].innerHTML = allText[i].innerHTML.replace(regex, replaced[key]);
    }
  }
}

// boolean to store active state
let isActive = false;

// get button by query select
const button = document.querySelector("#toggleButton");

// event listener for button
button.addEventListener("click", toggleOnOff);

// function to toggle on and off
function toggleOnOff() {
  isActive = !isActive;
  if (isActive) {
    // gets current tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // execute script on current tab
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: replaceText,
      });
    });
  } else {
    // reloads tab
    chrome.tabs.reload();
  }
}