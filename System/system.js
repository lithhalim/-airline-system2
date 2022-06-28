require('dotenv').config();
const PORT = process.env.PORT || 3020;
const { faker } = require('@faker-js/faker');
const ioServer = require('socket.io')(PORT);


const airlines_io = ioServer.of('/airline');

airlines_io.on('connection', (socket) => {
  socket.on('new-flight', (payload) => {
    airlines_io.emit('new-flight');
    console.log(payload)
  });
  socket.on('took-off', Flight2);
});

ioServer.on('connection', (socket) => {
  socket.on('new-flight', (payload) => {
    Flight1();
    ioServer.emit('new-flight');
    console.log(payload)

  });
  socket.on('Arrived', Flight3);
  socket.on('Arrived', (payload) => {
    ioServer.emit('Arrived');
    console.log(payload)
  });
});

function Flight1() {
  let slight101 = {
    Flight: {
      event: 'new-flight',
      time: faker.date.past(),
      Details: {
        airLine: 'Air Arabia Airlines',
        destination: faker.address.city(),
        pilot: faker.internet.userName(),
        flightID: faker.datatype.uuid(),
      },
    },
  };
  console.log(slight101);
}

function Flight2() {
  let Flight202 = {
    Flight: {
      event: 'took_off',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatat airWayes',
        destination: faker.address.city(),
        pilot: faker.internet.userName(),
        flightID: faker.datatype.uuid(),
      },
    },
  };
  console.log(Flight202);
}
function Flight3() {
  let Flight303 = {
    Flight: {
      event: 'arrived',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatat airWayes',
        destination: faker.address.city(),
        pilot: faker.internet.userName(),
        flightID: faker.datatype.uuid(),
      },
    },
  };
  console.log(Flight303);
}
