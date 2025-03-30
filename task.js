"use strict";

// Задача 1. Форматтер чисел

function parseCount(value) {
  const result = Number.parseFloat(value);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задача 2. Класс Triangle

class Triangle {
  constructor(a, b, c) {
    if (
      a + b <= c ||
      a + c <= b ||
      b + c <= a
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    const s = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c)
    );
    return +s.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}


//тесты
function testCase() {
    console.log(validateCount("123.45")); // 123.45
    console.log(validateCount("abc")); // Error
  
    const validTriangle = getTriangle(3, 4, 5);
    console.log(validTriangle.perimeter); // 12
    console.log(validTriangle.area); // 6.000
  
    const invalidTriangle = getTriangle(1, 1, 100);
    console.log(invalidTriangle.perimeter); // "Ошибка! Треугольник не существует"
    console.log(invalidTriangle.area);      // "Ошибка! Треугольник не существует"
  }
  