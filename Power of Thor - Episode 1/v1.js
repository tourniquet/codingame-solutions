var inputs = readline().split(' ')
var lightX = parseInt(inputs[0]) // the X position of the light of power
var lightY = parseInt(inputs[1]) // the Y position of the light of power
var initialTX = parseInt(inputs[2]) // Thor's starting X position
var initialTY = parseInt(inputs[3]) // Thor's starting Y position

// game loop
while (true) {
  var remainingTurns = parseInt(readline()) // The remaining amount of turns Thor can move. Do not remove this line.

  // A single line providing the move to be made: N NE E SE S SW W or NW
  // Straight line
  if (initialTY === lightY) {
    if (initialTX < lightX) print('E')
    if (initialTX > lightX) print('W')
  }

  // Up and down
  if (initialTX === lightX) {
    if (initialTY < lightY) print('S')
    if (initialTY > lightY) print('N')
  }

  // Easy angle
  if (initialTX > lightX) {
    if (initialTY < lightY && lightY === 17) {
      print('SW')
      initialTY++
    } else {
      print('W')
    }
  }

  // Optimal angle
  if (initialTX < lightX) {
    if (initialTY < lightY) {
      print('SE')
      initialTY++
    } else {
      print('E')
    }        
  }
}
