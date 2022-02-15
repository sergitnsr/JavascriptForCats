// Variables & funciones
var string = "cats are better"
function makeMoreExciting(string) {
  return string + '!!!!'
}

var sleep = "time for a nap"
sleep = makeMoreExciting(sleep)

//function yellIt(string) {
//  string = string.toUpperCase()
//  string = makeMoreExciting(string)
//  console.log(string)
//}

// Funciones anidadas
function yellIt(string) {
  string = string.toUpperCase()
  return makeMoreExciting(string)
}

console.log(yellIt("i fear no human"))

// Bucles
function logANumber(someNumber) {
  console.log(someNumber)
}
_.times(10, logANumber)

// Arrays
var myCatFriends = ["mimi", "ares", "salem"]

myCatFriends.push("pegaso")

// Objetos
var firstCat = { name: "mimi", lastName: "mumu", address: "Kitchen" }
var secondCat = { name: "ares", lastName: "god", address: "Living room" }
var thirdCat = { name: "salem", lastName: "black", address: "Cupboard" }
var thirdCat = { name: "pegaso", lastName: "wings", address: "Attic" }

// Callbacks
function measureLoopSpeed() {
  var count = 0
  function addOne() { count = count + 1 }

  // Date.now() returns a big number representing the number of milliseconds that have elapsed since Jan 01 1970
  var now = Date.now()

  // Loop until Date.now() is 1000 milliseconds (1 second) or more into the future from when we started looping. On each loop, call addOne
  while (Date.now() - now < 1000) addOne()

  // Finally it has been >= 1000ms, so let's print out our total count
  console.log(count)
}

measureLoopSpeed()

function a(done) {
  download('https://pbs.twimg.com/media/B4DDWBrCEAA8u4O.jpg:large', function doneDownloading(error, png) {
    // handle error if there was one
    if (err) console.log('uh-oh!', error)

    // call done when you are all done
    done()
  })
}