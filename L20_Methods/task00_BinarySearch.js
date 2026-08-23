// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

// npm init

// npm install axios



//     https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true


// "type": "commonjs",  ->   "type": "module",

// ===========================================



let numbers = [1, 5, 2, 9, 4];

// 1. Простая сортировка пузырьком
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 2. Бинарный поиск (работает только с сортированным массивом!!)
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return mid; 
    }

    if (num > arr[mid]) {
      start = mid + 1; 
    } else {
      end = mid - 1; 
    }
  }

  return -1; 
}


console.log("До сортировки:", numbers);


let sorted = bubbleSort(numbers);
console.log("После сортировки:", sorted);


console.log("Индекс числа 5:", binarySearch(sorted, 5));
console.log("Индекс числа 2:", binarySearch(sorted, 2));
console.log("Индекс числа 77 (которого нет):", binarySearch(sorted, 77));