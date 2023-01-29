/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertIp = document.getElementById("convert-ip")
const convertBtn = document.getElementById("convert-btn")
let lengthP = document.getElementById("length-p")
let volumeP = document.getElementById("volume-p")
let massP = document.getElementById("mass-p")

baseStringLength = `0 meters = 0.000 feet | 0 feet = 0.000 meters`
baseStringVolume = `0 liters = 0.000 gallons | 0 gallons = 0.000 liters`
baseStringMass = `0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos`

convertBtn.addEventListener("click", function() {
    convertLengthToFeet()
    convertLengthToMeter()
    convertVolumeToGallons()
    convertVolumeToLiters()
    convertMassToPounds()
    convertMassToKilograms()
})

function convertLengthToFeet() {}
function convertLengthToMeter() {}
function convertVolumeToGallons() {}
function convertVolumeToLiters() {}
function convertMassToPounds() {}
function convertMassToKilograms() {}
