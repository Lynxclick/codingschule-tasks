/* const arr = [1, 12, 6, 92]

// Größte Zahl mit Funktion
function highest(zahlenfolge) {
    let hoechsteZahl = null;
    for (let zahl of zahlenfolge) {
        if (zahl > hoechsteZahl) {
            hoechsteZahl = zahl;
        }
    }
    return hoechsteZahl;
}
console.log(highest(arr));

// Sortieren - Bubble Sort
for (let n = arr.length; n>1; n--) { // arr.length gibt die Anzahl der Elemente zurück.
    for(let i = 0; i < n-1; i++) {
        if(arr[i] > arr[i+1]) {
            let arr_old = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = arr_old;
        }
        console.log(arr);
    }
    console.log("---");
}
console.log("---");
console.log(arr);
*/

/*const arr = [1, 11, 13, 12, 6, 92]

arr.sort().reverse();

console.log(arr);
*/

const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10]

function isEven(value) {
    if (value%2 == 0)
     return true;
      else
     return false;
   }

console.log(arr.filter(isEven));