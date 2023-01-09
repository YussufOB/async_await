const axios = require('axios');

const getExchangeRate = async (clientRequest) => {
  const response = await axios.get(`https://restcountries.com/v2/currency/${clientRequest}`);
  return response.data.map(country => country.name)
}

getExchangeRate('usd')
  .then((message) => {
    console.log(message)
  });

const stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'mango'],
  holder: ['cone', 'cup', 'stick'],
  topping: ['peanuts', 'chocolate', 'butter'],
  liquid: ['water', 'ice']
}

const production = () => {
  setTimeout(() => {
    console.log('production begins');

    setTimeout(() => {
      console.log('the fruit has been chopped')

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log('machine starting')

          setTimeout(() => {
            console.log(`${stocks.holder[0]} holder is picked`);

            setTimeout(() => {
              console.log(`${stocks.topping[1]} topping added`);

              setTimeout(() => {
                console.log('Ice served')
              }, 2000);
            }, 3000)
          }, 2000)
        }, 1000)
      }, 1000)
    }, 2000)
  }, 0000)
}

const order = (fruit_name, production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);
    production();
  }, 2000)
};

order('mango', production);

let is_shop_open = true;
let orderTask = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time)
    } else {
      reject(console.log('Lo siento, el supermecado es cerrado'))
    }
  });
};

orderTask(2000, () => console.log(`${stocks.fruits[1]} was selected`))
  .then(() => {
    return order(0000, () => console.log('Producing'));
  })

  .then(() => {
    return order(2000, () => console.log('fruit chopped'));
  })

  .then(() => {
    return order(1000, () => console.log(`${stocks.liquid[1]} and ${stocks.holder[0]} selected`));
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.topping[1]} choosed`));
  })

  .then(() => {
    return order(1000, () => console.log('ice cream served'));
  })

  .catch(() => console.log('customer left'))

  .finally(() => console.log('Cerrado'))


async function orderB() {
  try {
    await abc;
  }
  catch (error) {
    console.log('error occured')
  } finally {
    console.log('code still run anyway')
  }
}

let topping_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('which topping woud you like'))
    }, 3000);
  })
}

async function kitchen() {
  console.log('task A')
  console.log('task B')
  console.log('task C')

  await topping_choice();
  console.log('task D')
  console.log('task E')
}

kitchen();
console.log('task other A')
console.log('task other B')

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('Supermecado es cerrado!'))
    }
  })
}

async function kitchenOrder() {
  try {
    await time(2000)
    console.log(`${stocks.fruits[2]}`)

    await time(2000)
    console.log('Producing now')

    await time(2000)
    console.log(`ice cream placed on ${stocks.holder[2]}`)

    await time(2000)
    console.log(`${stocks.liquid[0]} chosed`)

    await time(2000)
    console.log(`${stocks.topping[1]} topping selected`)

    await time(2000)
    console.log('serve ice cream')
  }
  catch (error) {
    console.log('error occured')
  } finally {
    console.log('code still run anyway or shop is closed')
  }
}

kitchenOrder();

const person = {
  isHuman: true,
  printIntro: function () {
    console.log(`my name ${this.name} is given by me not my parent`)
  }
}

const me = Object.create(person);
me.name = 'Wale';

me.printIntro();

//Literal notation
const circle = {
  radius: 1,
  location: {
    x: 1, y: 2
  },
  draw: function () {
    console.log('this is a method not a property');
  }
}

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('this is a method not a property');
    }
  }
}

//Constructor Function
function Tricircle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  }

  let computedOptimumLocation = function (factor) {
    console.log(factor);
  }

  this.draw = function () {
    defaultLocation = computedOptimumLocation(9.4);
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {

    }
  });
}

const newTri = new Tricircle(34);
newTri.getDefaultLocation;

for (let key in newTri) {
  if (typeof newTri[key] !== 'function')
    console.log(key, newTri[key])
}

const keys = Object.keys(newTri);
console.log(keys);

if ('radius' in newTri)
  console.log('Circle has radius');

function Stopwatch() {
  let startTime, stopTime, ongoing, duration = 0;

  this.start = function () {
    if (ongoing)
      throw new Error('Watch already started');
    ongoing = true
    startTime = new Date();
  }

  this.stop = function () {
    if (!ongoing)
      throw new Error('watch already stopped')
    ongoing = false;
    stopTime = new Date();
    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  }

  this.reset = function () {
    ongoing = false;
    startTime = null;
    stopTime = null;
    duration = 0;
  }
}

Object.defineProperty(this, 'duration', {
  get: function () { return duration },
  set: function (duration) {
    if (duration === 0 || duration === null) {
      return 'It takes no time to execute this'
    }
  }
})

const timing = new Stopwatch();

timing.start();
timing.stop();
timing.duration;

const getData = async (requestCountry) => {
  const response = await axios.get(`https://restcountries.com/v2/name/${requestCountry}`)
  return response.data;
}

const countryData = getData('nigeria')
  .then((data) => {
    console.log(data)
  })

function CountryProfile(countryData) {
  // const requestCountry = document.getElementById('country_name');
  this.data = countryData;
  console.log(this.data);
}

const Naija = new CountryProfile(countryData);
Naija.data;
