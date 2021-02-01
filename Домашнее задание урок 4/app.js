'use strict';

/*1.1 ES5 */

function Product(name, price) {
   this.name = name;
   this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
   this.price = this.price - this.price * 0.25;
}

let product1 = new Product('samsung', 1000);
product1.make25PercentDiscount();
console.log(product1);

/*1.1 ES6 */

class Product {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }
   make25PercentDiscount() {
      this.price = this.price - this.price * 0.25;
   }
}

let product1 = new Product('samsung', 1000);
product1.make25PercentDiscount();
console.log(product1);

/* 1.2 ES5*/

function Post(author, text, date) {
   this.author = author;
   this.text = text;
   this.date = date;
}

Post.prototype.edit = function () {
   this.text = prompt('введите текст');
}

function AttachedPost(author, text, date) {
   Post.call(this, author, text, date);
   this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
   this.highlighted = true;
}


let post1 = new AttachedPost('John', 'im from America', 2020);
post1.edit();
post1.makeTextHighlighted()
console.log(post1);


/* 1.2 ES6*/

class Post {
   constructor(author, text, date) {
      this.author = author;
      this.text = text;
      this.date = date;
   }
   edit() {
      this.text = prompt('введите текст');
   }
}

class AttachedPost extends Post {
   constructor(author, text, date) {
      super(author, text, date);
      this.highlighted = false;
   }
   makeTextHighlighted() {
      this.highlighted = true;
   }
}

let post1 = new AttachedPost('John', 'im from America', 2020);
post1.edit();
post1.makeTextHighlighted()
console.log(post1);


/* 1.Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds) */

let userAnswer = +prompt('Введите число в диапазоне  от 0 -  до 999')
let maxNumber = 999;
let digit = {
   number: userAnswer,
   units: 0,
   tens: 0,
   hundreds: 0,
};
if (digit.number <= 9) {
   digit.units = digit.number;
} else if (digit.number <= 999) {
   digit.units = Math.floor(digit.number % 10);
   digit.tens = Math.floor(digit.number / 10 % 10);
   digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
   digit.number = 0;
   console.log('Вы ввели неверное число, введите число в диапазоне  от 0 -  до 999');
}
console.log(digit);

