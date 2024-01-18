const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

const ask = (questionText) =>
  new Promise((resolve, reject) =>
    readlineInterface.question(questionText + "\n", (input) =>
      input.length > 0 ? resolve(input.toLowerCase()) : reject("Provide Input")
    )
  );

// Creates command variables for user to use
const lookCommands = ["search", "look","read"];

const interactCommands = [
  "drop",
  "use",
  "interact",
  "int",
  "use key",
];

const helpCommands = ["help", "h"];

const invCommands = [
  "inv",
  "i",
  "inventory",
  "bag",
  "backpack",
  "b",
  "open",
  "o",
];

const moveCommands = ["move", "m"];

const takeCommands = ["take", "t", "pick up"];

// Creates a player inventory
let inventory = {
  compass: {
    name: "Compass",
    description: "A compass from your past. It is broken.",
    look() {
      console.log(`${this.name} ⚔️:`);
      return this.description;
    },
  },
};

// Sets up Location constructor for state transitions
class Location {
  constructor(name, description, lock, search) {
    this.name = name;
    this.description = description;
    this.lock = lock;
    this.search = search;
  }
}

// Creates Locaiton Objects to move through
let outside = new Location(
  `outside`,
  `You are standing on Main Street between Church and South Winooski. There is a door here. A keypad sits on the handle. On the door is a handwritten sign. \n`,
  `unlocked`,
  `Looking closer at the sign, you notice on the back it has a code. 12345.`
);

let door = new Location(
  `door`,
  `On the door there is a handwritten sign.\n`,
  `unlocked`,
  ` You see a sign on the door`
);

let sign = new Location(
  `sign`,
  `Looking closer at the sign, you notice on the back it has a code. 12345.`,
  `unlocked`,
  `The passcode is 12345`
);

let foyer = new Location(
  `foyer`,
  `You are standing in a very broken down foyer, or antechamber. It appears this building has not been entered in years. Dust and cobwebs line everything. You see a half-broken statue, a broken table, and 2 doors down the way both of which are closed.\n`,
  `password locked`
);

let kitchen = new Location(
  `kitchen`,
  `You enter what appears to be a dark and musty kitchen. The floors creak and groan as you walk upon them. Looking around you see the typical refrigerator, a dining table, a pantry, a small desk, and another door. Everything is in dissary except the door which appears untouched by time. Pristine as ever.\n`,
  `unlocked`
);

let office = new Location(
  `office`,
  `You enter what appears to be an office. The large desk in the center is almost broken in half and the drawers are all falling out. To your left you see a large trunk partially opened, and to your right you see an antique cabinet that appears to have a lock on it.\n`,
  `unlocked`
);

let basement = new Location(
  `basement`,
  `You walk down the stairs into a large cellar basement. Stone floors which look almost untouched. You see a feint blue glow under some of the stones. And at the back wall, the vault you came searching for.\n`,
  `key lock`
);

let vault = new Location(
  `vault`,
  `You enter the vault, and see the treasure that awaits you. Now all that's left is to get it outisde to your friend who is waiting in the cab. Using the large sack you have with you, you grab what you can and run out of there.\n`,
  `magical lock`
);

// Sets the starting location, and allows movement through locations
let locationCurrent = "outside";

// Looks up locations to ensure the user can move through them all
let locationLookUp = {
  outside: outside,
  door: door,
  sign: sign,
  foyer: foyer,
  kitchen: kitchen,
  office: office,
  basement: basement,
  vault: vault,
};

// Creates room objects that have items, to allow user to take items
let rooms = {
  outside: {
    password: "12345",
    description:
      "On the back of the sign is a set of numbers carved into the wood. 12345.",
    read() {
      return this.description;
    },
  },
  foyer: {
    items: {
      name: "Brass Key",
      description:
        "An old brass key, that looks like it can be used to open a door or desk drawer.",
      use() {
        console.log(`You use the ${this.name}.`);
        return this.description;
      },
    },
    description: {
      main: "You see a half-broken statue, a broken table, and 2 doors down the way both of which are closed.",
      searchStatue:
        "Looking at the broken statue, you see that there is something slightly metal inside. It appears there is a key inside the bust.",
      searchTable:
        "The table is broken, you do not find anything worth your time.",
      searchDoorLeft:
        "The door is partially broken. Through the openings you can see the remnants of an office. The door is open.",
      searchDoorRight:
        "The door is partially broken. Through the openings you can see the kitchen. The door is unlocked.",
    },
  },
  kitchen: {
    items: {
      key: "UV Flashlight",
      info: "An old but somehow still working UV Flashlight. Maybe it shows a hidden message somewhere?",
      use() {
        console.log(`You use the ${this.name}.`);
        return this.description;
      },
    },
    description: {
      main: "Looking around you see the typical refrigerator, a dining table, a pantry, a small desk, and another door.",
      searchFridge:
        "Looking at the refrigerator, you see nothing more than an old broken, somewhat stinking, fridge.",
      searchDiningTable:
        "Looking over the table, you find an old UV flashlight sitting on it. No batteries in sight, unfortunately",
      searchPantry: "You see and smell nothing but old rotten food.",
      searchSmallDesk:
        "The desk has some old batteries in them. Maybe there is a bit of juice left in them.",
      searchDoor:
        "The door appears untouched by time. Pristine as ever. It is locked unfortunately.",
    },
  },
  office: {
    items: {
      key: "Scribbled Notes",
      description:
        "This old and tattered paper has scribbles of unreadable notes on it. Letters? Pictures? Who knows what is on it...",
      use() {
        console.log(`You use the ${this.name}.`);
        return this.description;
      },
      key: "Journals",
      description:
        "Within them you find out that the vault is in the basement, and is protected by a magical lock. But no way of disarming it.",
      use() {
        console.log(`You use the ${this.name}.`);
        return this.description;
      },
    },
    description: {
      main: "The large desk in the center is almost broken in half and the drawers are all falling out. To your left you see a large trunk partially opened, and to your right you see an antique cabinet that appears to have a lock on it.",
      searchDesk:
        "Looking through the desk, you find the remnants of the owner. A Mr. Valen Lostrestril. Scouring through the papers you find something worth taking. A note scribble with various symbols or pictures.",
      searchTrunk:
        "Looking through the trunk, you find some old notebooks or journals from the owner. Within them you find out that the vault is in the basement, and is protected by a magical lock.",
      searchCabinet:
        "You look through the cabinet after pulling on the lock. The cabinet does not have anything worthwhile in it. Maybe it was a red herring?",
    },
  },
  basement: {
    description:
      "You see a feint blue glow under some of the stones. And at the back wall, the vault you came searching for.",
    read() {
      return this.description;
    },
  },
  vault: {
    description:
      "You enter the vault, and see the treasure that awaits you. Now all that's left is to get it outisde to your friend who is waiting in the cab. Using the large sack you have with you, you grab what you can and run out of there.",
    read() {
      return this.description;
    },
  },
};

// Creates the states that the user can transition through
let roomStates = {
  outside: ["door", "sign"],
  door: ["sign", "foyer", "outside"],
  sign: ["door"],
  foyer: ["outside", "kitchen", "office"],
  kitchen: ["foyer", "basement"],
  office: ["foyer"],
  basement: ["kitchen", "vault"],
  vault: ["basement"],
};

// Checks if the current location is locked.
function checkLock(newLocation) {
  if (locationLookUp[newLocation].lock === "password locked") {
    console.log(`The door is locked.`);
  } else if (locationLookUp[newLocation].lock === "door lock") {
    console.log("It appears you need a key.");
  } else if (locationLookUp[newLocation].lock === "magical lock") {
    console.log(
      `It appears there is some sort of Arcane or Magical lock on this vault door.`
    );
  } else {
    console.log(locationLookUp[locationCurrent].description);
  }
}

// Moves through location states, if possible
function moveLocation(newLocation) {
  if (roomStates[locationCurrent].includes(newLocation)) {
    locationCurrent = newLocation;
    checkLock(newLocation);
  } else {
    console.log(`You cannot go from ${locationCurrent} to ${newLocation}.`);
  }
}
// Searches the current location for information
function lookLocation(search) {
  if (roomStates[locationCurrent].includes(search)) {
    locationCurrent = newLocation;
    console.log(locationLookUp[locationCurrent].description);
  } else {
    console.log(`You cannot search ${newLocation}.`)
  }
}

// Unlocks roomstates if they are locked
function unlockFoyer(input) {
  const correctPassword = "12345";
  //const useKey = ;
  if (input === correctPassword) {
    foyer.lock = "unlocked";
    console.log("You have unlocked the foyer.");
  } else {
    console.log("Incorrect password. The foyer remains locked.");
  }
}

// Takes items that are objects in the current room
function takeItem(currentRoom, itemName) {
  if (rooms[currentRoom].items && rooms[currentRoom].items[itemName]) {
    inventory.push(rooms[currentRoom].items[itemName]);
    delete rooms[currentRoom].items[itemName]
  } else {
    console.log(`There is no ${itemName} in the ${currentRoom}`)
  }
}

// Logs a description of a room for the user
// function printDescription(roomName) {
//   if (rooms[roomName] && rooms[roomName].description) {
//     console.log(rooms[roomName].description);
//   } else {
//     console.log("Room not found or does not have a description.");
//   }
// }

// Shows the objects in the players inventory
const showInventory = () => {
  console.log("-----------");
  console.log("Inventory:");
  Object.keys(inventory).forEach((item) => {
    console.log(item + ":", inventory[item].name);
  });
  console.log("-----------");
};

const interact = (action, target) => {
  if (inventory[action]) {
    console.log("Available Actions:");
    Object.keys(inventory[action]).forEach((property) => {
      if (typeof inventory[action][property] === "function") {
        console.log(property);
      }
    });
    return;
  }
  if (invCommands.includes(action)) {
    showInventory();
    return;
  }
};

// Interacts with objects in inventory
const interaction = () => {
  let splitResponse = answer.split(" ");
  let [action, target] = splitResponse;
  if (action && target) {
    interact(action, target);
  } else if (action) {
    interact(action, " ");
  } else {
    console.log("I don't know how to do that.");
  }

  const validItem = inventory[target];
  const validAction = inventory[target]?.[action];
  if (validAction && typeof validAction === "function") {
    console.log("Action can be done 👍.");
    if (validItem) {
      console.log("Item was found 👍.");
      console.log(inventory[target][action]());
    } else {
      console.log("Item not found 😒.");
    }
  } else {
    console.log(`Are you crazy?! You cannot ${action} a ${target}!`);
  }
};

// Runs game
async function start() {
  try {
    let answer;
    while (answer !== "exit") {
      const reply1 = `What would you like to do?`;
      let answer = await ask(
        locationLookUp[locationCurrent].description + reply1
      );
      if (moveCommands.includes(answer)) {
        let moveSpot = await ask(`Where would you like to move?`);
        moveLocation(moveSpot);
        if (
          locationLookUp[locationCurrent].lock === "password locked" ||
          locationLookUp[locationCurrent].lock === "key lock" ||
          locationLookUp[locationCurrent].lock === "magical lock"
        ) {
          answer = await ask(`Do you want to unlock the lock?`);
          if (answer === "y") {
            answer = await ask(`What's the password?`);
            unlockFoyer(answer);
          } else if (answer === "n") {
            answer = await ask(reply1);
          }
        }
      } else if (lookCommands.includes(answer)) {
        // printDescription(locationCurrent);
        let searchSpot = await ask (`Where would you like to search?`);
        lookLocation(searchSpot);
        answer = await ask(reply1);
      } else if (invCommands.includes(answer)) {
        showInventory();
        answer = await ask(reply1);
        if (interactCommands.includes(answer)) {
          interaction(action, target);
        } else {
          console.log("I don't know what that is.");
        }
      } else if (interactCommands.includes(answer)) {
        interactDescription(answer);
      } else if (helpCommands.includes(answer)) {
        console.log(`Here is a list of things you can do: \n`);
        console.log(`Search: ${lookCommands}`);
        console.log(`Interact: ${interactCommands}`);
        console.log(`Inventory: ${invCommands}`);
        console.log(`Move: ${moveCommands}`);
        console.log(`----------`);
      } else if (takeCommands.includes(answer)) {
        let location = locationCurrent;
        let item = rooms[location].items;
        takeItem(locationCurrent, item);
      } else {
        console.log(`${answer} is not a valid command.`);
        let answer = await ask(reply1);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

start();
