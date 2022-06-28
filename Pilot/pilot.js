require('dotenv').config()


const io = require('socket.io-client');
const soket=io.connect(`http://localhost:${process.env.PORT}`)
const { faker } = require('@faker-js/faker');
const airline_soket=io.connect(`http://localhost:${process.env.PORT}/airline`)



let ID = faker.datatype.uuid();
let pilot = faker.internet.userName();

airline_soket.on('new-flight', pilot1);


function pilot1() {
  setTimeout(() => {
    let PilotTackOff = `Pilot Number ${ID} Have Been TackOff`;
    console.log(PilotTackOff);
    //Emit Tack off
    airline_soket.emit('took_off', PilotTackOff);
  }, 4000);

  setTimeout(() => {
    let arrived = `Pilut Number ${ID} have Been Arrived`;
    console.log(arrived);
    //Emit arrive
    soket.emit('Arrived', arrived);
    airline_soket.emit('Arrived', arrived);
  }, 7000);

}