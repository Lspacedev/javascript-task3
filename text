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
function developerNames(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i].name;
    newArr.push(name);
  }
  return newArr;
}
console.log(developerNames(developers));

//3.b. Count how many total phones all the developers have

function totalPhoneNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const developersPhones = arr[i].phones;
    count += developersPhones.length;
  }
  return count;
}

console.log(totalPhoneNumbers(developers));

//3.c. Count the number of incomplete setups i.e. setups that have 0 mice, keyboards, speakers, or monitors.

function incompleteSetups(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const computerSetups = arr[i].computerSetups;
    for (let j = 0; j < computerSetups.length; j++) {
      const setup = computerSetups[j];
      if (
        setup.monitors === 0 ||
        setup.keyboards === 0 ||
        setup.mice === 0 ||
        setup.speakers === 0
      ) {
        count++;
      }
    }
  }
  return count;
}
console.log(incompleteSetups(developers));

//3.d. Check what is the most trusted phone brand

//create brands count array
function brandsCountArr(arr) {
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

  for (let i = 0; i < arr.length; i++) {
    const phones = arr[i].phones;

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
  return brandsArray;
}

function mostTrustedPhoneBrands(arr) {
  //create array with brands obj to keep track of count.
  let brandsArray = brandsCountArr(arr);

  //find the brand with the most count
  let mostPopular;
  let mostCount = 0;

  for (let k = 0; k < brandsArray.length; k++) {
    if (brandsArray[k].count > mostCount) {
      mostCount = brandsArray[k].count;
      mostPopular = brandsArray[k].brand;
    }
  }
  return mostPopular;
}
console.log(mostTrustedPhoneBrands(developers));

//3.e. Check what phone brand is least trusted
function leastTrustedPhoneBrands(arr) {
  //create array with brands obj to keep track of count.
  let brandsArray = brandsCountArr(arr);

  //find the brand with the most count
  let leastPopular;
  let leastCount = brandsArray[0].count;

  for (let k = 1; k < brandsArray.length; k++) {
    if (brandsArray[k].count < leastCount) {
      leastCount = brandsArray[k].count;
      leastPopular = brandsArray[k].brand;
    }
  }
  return leastPopular;
}
console.log(leastTrustedPhoneBrands(developers));

//3.f. Check how many people do not have a phone

function developersNoPhones(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const developersPhones = arr[i].phones;

    if (developersPhones.length === 0) {
      count++;
    }
  }
  return count;
}

console.log(developersNoPhones(developers));

//3.g. Check how many people do not have a laptop
function developersNoLaptop(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const developersLaptop = arr[i].laptops;

    if (developersLaptop.length === 0) {
      count++;
    }
  }
  return count;
}

console.log(developersNoLaptop(developers));

//3.h. Check how many people do not have a computer setup (desktop)
function noComputerSetup(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const computerSetups = arr[i].computerSetups;

    if (computerSetups.length === 0) {
      count++;
    }
  }
  return count;
}

console.log(noComputerSetup(developers));

//3.i. Check which developer has the most total gadgets. In your answer provide the name as well as all the gadgets they have.

function mostTotalGadgets(arr) {
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

  for (let i = 0; i < arr.length; i++) {
    const developer = arr[i];
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
  let mostCount = 0;

  for (let k = 0; k < gadgetsArray.length; k++) {
    if (gadgetsArray[k].gadgetCount > mostCount) {
      mostCount = gadgetsArray[k].gadgetCount;
      mostTotalGadgets = gadgetsArray[k];
    }
  }
  return `${mostTotalGadgets.developer}, has these gadgets: ${[
    mostTotalGadgets.gadgets,
  ]}.`;
}
console.log(mostTotalGadgets(developers));

//3.j. Check which developer has the most phones. In your answer provide the name and the phones they have

function mostPhones(arr) {
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

  for (let i = 0; i < arr.length; i++) {
    const developer = arr[i];
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
  let mostCount = 0;

  for (let k = 0; k < phonesArray.length; k++) {
    if (phonesArray[k].phoneCount > mostCount) {
      mostCount = phonesArray[k].phoneCount;
      mostPhones = phonesArray[k];
    }
  }
  return `${mostPhones.developer}, has these phones: ${[mostPhones.phones]}.`;
}
console.log(mostPhones(developers));

//3.k. Check which developer has the most computer setups. In your answer provide the name as well as their computer setups.

function mostComputerSetups(arr) {
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

  for (let i = 0; i < arr.length; i++) {
    const developer = arr[i];
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
  let mostCount = 0;

  for (let k = 0; k < computersArray.length; k++) {
    if (computersArray[k].computerCount > mostCount) {
      mostCount = computersArray[k].computerCount;
      mostComputerSetups = computersArray[k];
    }
  }
  return `${mostComputerSetups.developer}, has these computer setups: ${[
    mostComputerSetups.computers,
  ]}.`;
}
console.log(mostComputerSetups(developers));

//3.j. Check which developer has the most phones. In your answer provide the name and the phones they have

function mostPhones(arr) {
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

  for (let i = 0; i < arr.length; i++) {
    const developer = arr[i];
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
  let mostCount = 0;

  for (let k = 0; k < phonesArray.length; k++) {
    if (phonesArray[k].phoneCount > mostCount) {
      mostCount = phonesArray[k].phoneCount;
      mostPhones = phonesArray[k];
    }
  }
  return `${mostPhones.developer}, has these phones: ${[mostPhones.phones]}.`;
}
console.log(mostPhones(developers));

//3.l. Check which developer has the most monitors (combining all their computer setups). In your answer provide their name and the monitor count.

function mostMonitors(arr) {
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

  for (let i = 0; i < arr.length; i++) {
    const developer = arr[i];
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

  //find the developer with the most computer setups
  let mostMonitors;
  let mostCount = 0;

  for (let k = 0; k < monitorsArray.length; k++) {
    if (monitorsArray[k].monitorCount > mostCount) {
      mostCount = monitorsArray[k].monitorCount;
      mostMonitors = monitorsArray[k];
    }
  }
  return `${mostMonitors.developer}, has these many monitors: ${[
    mostMonitors.monitorCount,
  ]}.`;
}
console.log(mostMonitors(developers));
