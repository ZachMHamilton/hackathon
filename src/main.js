// create a function that replaces certain words with certain emojis

// fetch the data from the webpage

// Create an object with pairs to replace
const replaced = {
  Dog: "🐶",
  Cat: "🐱",
  Mouse: "🐭",
  Hamster: "🐹",
  Rabbit: "🐰",
  Fox: "🦊",
  Bear: "🐻",
  Panda: "🐼",
  Lion: "🦁",
  Cow: "🐮",
  Pig: "🐷",
  Frog: "🐸",
  Monkey: "🐵",
  Chicken: "🐔",
  Penguin: "🐧",
  Bird: "🐦",
  Duck: "🦆",
  Owl: "🦉",
  Bat: "🦇",
  Wolf: "🐺",
  Boar: "🐗",
  Horse: "🐴",
  Unicorn: "🦄",
  Turtle: "🐢",
  Snake: "🐍",
  Dragon: "🐲",
  Whale: "🐳",
  Dolphin: "🐬",
  Fish: "🐟",
  "Tropical Fish": "🐠",
  Blowfish: "🐡",
  Shark: "🦈",
  Crocodile: "🐊",
  Tiger: "🐅",
  Leopard: "🐆",
  Zebra: "🦓",
  Gorilla: "🦍",
  Giraffe: "🦒",
  Rhinoceros: "🦏",
  Deer: "🦌",
  Elephant: "🐘",
  Hippopotamus: "🦛",
  Hedgehog: "🦔",
  Swan: "🦢",
  Flamingo: "🦩",
  Dove: "🕊️",
  Peacock: "🦚",
  Parrot: "🦜",
};

// chrome.action.onClicked.addListener(async () => {
//   let onOff = !(await chrome.storage.local.get("true"));
//   //Display on off
//   await chrome.storage.local.set(onOff);
// });

//use a for loop to iterate thru elements of allText

function replaceText() {
  const allText = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, a");
  for (let i = 0; i < allText.length; i++) {
    // if innerText or innerHTML matches one of the words from the object
    for (const key in replaced) {
      // if (allText[i].innerHTML.includes(key))
      // replace with corresponding emoji
      const regex = new RegExp(key, "gi");
      allText[i].innerHTML = allText[i].innerHTML.replace(regex, replaced[key]);
    }
  }
}

let isActive = false;

// get button by query select
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  isActive = !isActive;
  if (isActive) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: replaceText,
      });
    });
  } else {
    chrome.tabs.reload();
  }
});
