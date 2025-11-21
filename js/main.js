"use strict";

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  getArea() {
    return Math.PI * this._radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const c = new Circle(5);

console.log("Початковий радіус:", c.radius);
console.log("Діаметр:", c.diameter);
console.log("Площа:", c.getArea());
console.log("Довжина кола:", c.getCircumference());

// Змінюємо радіус через setter
c.radius = 10;

console.log("Новий радіус:", c.radius);
console.log("Новий діаметр:", c.diameter);
console.log("Нова площа:", c.getArea());
console.log("Нова довжина кола:", c.getCircumference());

// ========================================

class Marker {
  constructor(color, ink = 100) {
    this.color = color;
    this.ink = ink;
  }

  get availableChars() {
    return Math.floor(this.ink / 0.5);
  }

  print(text) {
    if (this.ink <= 0) {
      console.log("У маркері немає чорнила");
      return;
    }

    let result = "";
    let inkLeft = this.ink;

    for (const ch of text) {
      if (ch === " ") {
        result += ch;
        continue;
      }

      if (inkLeft < 0.5) {
        break;
      }

      result += ch;
      inkLeft -= 0.5;
    }

    this.ink = inkLeft;

    if (result.length === 0) {
      console.log("Чорнила недостатньо навіть для одного символу");
      return;
    }

    console.log(`%c${result}`, `color: ${this.color};`);
  }
}
