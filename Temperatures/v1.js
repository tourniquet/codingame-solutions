var n = parseInt(readline()) // the number of temperatures to analyse
var temps = readline() // the n temperatures expressed as integers ranging from -273 to 5526

const arr = temps.split(' ')
let min = arr[0]

for (let i = 0; i < arr.length; i++) {
 for (let j = 0; j < arr.length; j++) {
   if (Math.abs(arr[i]) <= Math.abs(min)) {
     if (Math.abs(arr[i]) <= Math.abs(arr[j])) {
       if (arr[i] > arr[j]) min = arr[i]
     } else {
       min = arr[j]
     }
   }
 }
}

// Display 0 (zero) if no temperatures are provided
if (!min) {
  print(0)
} else {
  print(min)
}
