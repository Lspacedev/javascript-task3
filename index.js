//3 Copy the object as given on the GitHub link, and do the following
const developers = [
  {
    name: "Vee",
    laptops: ["Dell"],
    phones: ["Samsung", "Xiaomi"],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
    ],
  },
  {
    name: "Katlego",
    laptops: ["HP", "Samsung"],
    phones: ["Apple", "Samsung", "Tecno", "Samsung"],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
    ],
  },
  {
    name: "Rethabile",
    laptops: ["Samsung"],
    phones: ["Samsung", "Huawei", "Poco"],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
    ],
  },
  {
    name: "Gift",
    laptops: [],
    phones: ["Samsung"],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
    ],
  },
  {
    name: "Thokozile",
    laptops: ["Lenovo"],
    phones: ["Apple"],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0,
        mice: 1,
        speakers: 1,
      },
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
    ],
  },
];

//3.a. Create an array with just the names of all the developers

let developerNames = [];
for (let i = 0; i < developers.length; i++) {
  const name = developers[i].name;
  developerNames.push(name);
}

console.log(developerNames);

//3.b. Count how many total phones all the developers have

let totalPhones = 0;
for (let i = 0; i < developers.length; i++) {
  const developersPhones = developers[i].phones;
  totalPhones += developersPhones.length;
}

console.log(totalPhones);

//3.c. Count the number of incomplete setups i.e. setups that have 0 mice, keyboards, speakers, or monitors.

let incompleteSetups = 0;
for (let i = 0; i < developers.length; i++) {
  const computerSetups = developers[i].computerSetups;
  for (let j = 0; j < computerSetups.length; j++) {
    const setup = computerSetups[j];
    if (
      setup.monitors === 0 ||
      setup.keyboards === 0 ||
      setup.mice === 0 ||
      setup.speakers === 0
    ) {
      incompleteSetups++;
    }
  }
}

console.log(incompleteSetups);

//3.d. Check what is the most trusted phone brand

//create brands count array

let brandsArray = [
  {
    brand: "Samsung",
    count: 0,
  },
  {
    brand: "Huawei",
    count: 0,
  },
  {
    brand: "Poco",
    count: 0,
  },
  {
    brand: "Apple",
    count: 0,
  },
  {
    brand: "Xiaomi",
    count: 0,
  },
  {
    brand: "Tecno",
    count: 0,
  },
];

for (let i = 0; i < developers.length; i++) {
  const phones = developers[i].phones;

  //loop through all phones and add brands
  for (let j = 0; j < phones.length; j++) {
    let phone = phones[j];
    brandsArray.map((brand) => {
      if (brand.brand === phone) {
        brand.count++;
      } else {
        return brand;
      }
    });
  }
}

//create array with brands obj to keep track of count.
let mostTrusted = brandsArray;

//find the brand with the most count
let mostPopular;
let mostCount = 0;

for (let k = 0; k < mostTrusted.length; k++) {
  if (mostTrusted[k].count > mostCount) {
    mostCount = mostTrusted[k].count;
    mostPopular = mostTrusted[k].brand;
  }
}

console.log(mostPopular);

//3.e. Check what phone brand is least trusted

//create array with brands obj to keep track of count.
let leastTrusted = brandsArray;

//find the brand with the most count
let leastPopular;
let leastCount = leastTrusted[0].count;

for (let k = 1; k < leastTrusted.length; k++) {
  if (leastTrusted[k].count < leastCount) {
    leastCount = leastTrusted[k].count;
    leastPopular = leastTrusted[k].brand;
  }
}

console.log(leastPopular);

//3.f. Check how many people do not have a phone

let developersNoPhones = 0;

for (let i = 0; i < developers.length; i++) {
  const developersPhones = developers[i].phones;

  if (developersPhones.length === 0) {
    developersNoPhones++;
  }
}

console.log(developersNoPhones);

//3.g. Check how many people do not have a laptop

let developersNoLaptop = 0;

for (let i = 0; i < developers.length; i++) {
  const developersLaptop = developers[i].laptops;

  if (developersLaptop.length === 0) {
    developersNoLaptop++;
  }
}

console.log(developersNoLaptop);

//3.h. Check how many people do not have a computer setup (desktop)

let noComputerSetup = 0;

for (let i = 0; i < developers.length; i++) {
  const computerSetups = developers[i].computerSetups;

  if (computerSetups.length === 0) {
    noComputerSetup++;
  }
}

console.log(noComputerSetup);

//3.i. Check which developer has the most total gadgets. In your answer provide the name as well as all the gadgets they have.

let gadgetsArray = [
  {
    developer: "Vee",
    gadgetCount: 0,
    gadgets: [],
  },
  {
    developer: "Katlego",
    gadgetCount: 0,
    gadgets: [],
  },
  {
    developer: "Rethabile",
    gadgetCount: 0,
    gadgets: [],
  },
  {
    developer: "Gift",
    gadgetCount: 0,
    gadgets: [],
  },
  {
    developer: "Thokozile",
    gadgetCount: 0,
    gadgets: [],
  },
];

for (let i = 0; i < developers.length; i++) {
  const developer = developers[i];
  gadgetsArray.map((obj) => {
    if (obj.developer === developer.name) {
      //increase count
      obj.gadgetCount += developer.laptops.length;
      obj.gadgetCount += developer.phones.length;
      obj.gadgetCount += developer.computerSetups.length;

      //push gadgets inside gadget array
      //concat laptops array and phones array
      let arr = developer.laptops.concat(developer.phones);
      obj.gadgets = arr;

      //loop through computer setup and add the computer names
      developer.computerSetups.forEach((computer) => {
        obj.gadgets.push(computer.brand);
      });
    } else {
      return obj;
    }
  });
}

//find the developer with the most gadgets
let mostTotalGadgets;
let mostTotalGadgetsCount = 0;

for (let k = 0; k < gadgetsArray.length; k++) {
  if (gadgetsArray[k].gadgetCount > mostTotalGadgetsCount) {
    mostTotalGadgetsCount = gadgetsArray[k].gadgetCount;
    mostTotalGadgets = gadgetsArray[k];
  }
}

console.log(
  `${mostTotalGadgets.developer}, has these gadgets: ${[
    mostTotalGadgets.gadgets,
  ]}.`
);

//3.j. Check which developer has the most phones. In your answer provide the name and the phones they have

let phonesArray = [
  {
    developer: "Vee",
    phonetCount: 0,
    phones: [],
  },
  {
    developer: "Katlego",
    phoneCount: 0,
    phones: [],
  },
  {
    developer: "Rethabile",
    phoneCount: 0,
    phones: [],
  },
  {
    developer: "Gift",
    phoneCount: 0,
    phones: [],
  },
  {
    developer: "Thokozile",
    phoneCount: 0,
    phones: [],
  },
];

for (let i = 0; i < developers.length; i++) {
  const developer = developers[i];
  phonesArray.map((obj) => {
    if (obj.developer === developer.name) {
      //increase count
      obj.phoneCount += developer.phones.length;

      //assign the phones to the phones array
      obj.phones = developer.phones;
    } else {
      return obj;
    }
  });
}

//find the developer with the most phones
let mostPhones;
let mostPhonesCount = 0;

for (let k = 0; k < phonesArray.length; k++) {
  if (phonesArray[k].phoneCount > mostPhonesCount) {
    mostPhonesCount = phonesArray[k].phoneCount;
    mostPhones = phonesArray[k];
  }
}

console.log(
  `${mostPhones.developer}, has these phones: ${[mostPhones.phones]}.`
);

//3.k. Check which developer has the most computer setups. In your answer provide the name as well as their computer setups.

let computersArray = [
  {
    developer: "Vee",
    computerCount: 0,
    computers: [],
  },
  {
    developer: "Katlego",
    computerCount: 0,
    computers: [],
  },
  {
    developer: "Rethabile",
    computerCount: 0,
    computers: [],
  },
  {
    developer: "Gift",
    computerCount: 0,
    computers: [],
  },
  {
    developer: "Thokozile",
    computerCount: 0,
    computers: [],
  },
];

for (let i = 0; i < developers.length; i++) {
  const developer = developers[i];
  computersArray.map((obj) => {
    if (obj.developer === developer.name) {
      //increase count
      obj.computerCount += developer.computerSetups.length;

      //loop through computer setup and add the computer names
      developer.computerSetups.forEach((computer) => {
        obj.computers.push(computer.brand);
      });
    } else {
      return obj;
    }
  });
}

//find the developer with the most computer setups
let mostComputerSetups;
let mostComputerSetupsCount = 0;

for (let k = 0; k < computersArray.length; k++) {
  if (computersArray[k].computerCount > mostComputerSetupsCount) {
    mostComputerSetupsCount = computersArray[k].computerCount;
    mostComputerSetups = computersArray[k];
  }
}

console.log(
  `${mostComputerSetups.developer}, has these computer setups: ${[
    mostComputerSetups.computers,
  ]}.`
);

//3.l. Check which developer has the most monitors (combining all their computer setups). In your answer provide their name and the monitor count.

let monitorsArray = [
  {
    developer: "Vee",
    monitorCount: 0,
  },
  {
    developer: "Katlego",
    monitorCount: 0,
  },
  {
    developer: "Rethabile",
    monitorCount: 0,
  },
  {
    developer: "Gift",
    monitorCount: 0,
  },
  {
    developer: "Thokozile",
    monitorCount: 0,
  },
];

for (let i = 0; i < developers.length; i++) {
  const developer = developers[i];

  monitorsArray.map((obj) => {
    if (obj.developer === developer.name) {
      let computerSetups = developer.computerSetups;
      //increase count of computer monitor
      obj.monitorCount = computerSetups.reduce((count, computer) => {
        return (count += computer.monitors);
      }, 0);
    } else {
      return obj;
    }
  });
}
//console.log(monitorsArray);
//find the developer with the most computer setups
let mostMonitors;
let mostMonitorsCount = 0;

for (let k = 0; k < monitorsArray.length; k++) {
  if (monitorsArray[k].monitorCount > mostMonitorsCount) {
    mostMonitorsCount = monitorsArray[k].monitorCount;
    mostMonitors = monitorsArray[k];
    //console.log(mostMonitors);
  }
}

console.log(
  `${mostMonitors.developer}, has these many monitors: ${[
    mostMonitors.monitorCount,
  ]}.`
);
