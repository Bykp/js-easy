// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
  // Якщо масив порожній, повертаємо undefined (або можна повернути 0, залежно від вимог)
  if (numbers.length === 0) {
    return undefined; 
  }

  // Приймаємо перше число масиву за максимальне
  let max = numbers[0];

  // Перебираємо масив починаючи з другого елемента
  for (let i = 1; i < numbers.length; i++) {
    // Якщо поточний елемент більший за поточний максимум, оновлюємо максимум
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;