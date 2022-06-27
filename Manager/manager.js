require('dotenv').config()


const io = require('socket.io-client');
const soket=io.connect(`http://localhost:${process.env.PORT}`)
const airline_soket=io.connect(`http://localhost:${process.env.PORT}/airline`)

const { faker } = require('@faker-js/faker');


let ID = faker.datatype.uuid();
let pilot = faker.internet.userName();

//Alert when a new flight is scheduled every 10 secand
setInterval(()=>{
    let data=`The New Flight Id${ID}`
    console.log(data)
    airline_soket.emit("new-flight",data)
    soket.emit("new-flight",data)
    //Log the new flight event with its ID to the console.
},10000)

//Notify the manager when a flight arrived.
soket.on("Arrived",()=>{
    console.log(`We Arrive With The Pilot ${pilot}`)
})
