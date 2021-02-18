class Products {
   data = [];
   products = [];
   container = null;

   constructor(selector) {
      this.container = document.querySelector(selector);
      this._getTotalPrice();
      this._fetchData();
      this._render();
   }

   _getTotalPrice() {
      let totalPrice = 0;
      this.products.forEach((item) => {
         totalPrice += Number(item.price);
      });
   }

   _fetchData() {
      this.data = [
         { title: 'Notebook', id: 1, price: 2000 },
         { title: 'Keyboard', id: 2, price: 200 },
         { title: 'Mouse', id: 3, price: 100 },
         { title: 'Gamepad', id: 4, price: 87 }
      ];
   }

   _render() {
      for (let data of this.data) {
         const product = new ProductItem(data);
         this.products.push(product);
         this.container.insertAdjacentHTML('beforeend', product.render());
      }
      return this._getTotalPrice();
   }
}

class ProductItem {
   title = '';
   price = 0;
   id = 0;
   img = '';

   constructor(product, img = 'https://placehold.it/200x150') {
      ({ title: this.title, price: this.price, id: this.id } = product);
      this.img = img;
   }

   render() {
      return `<div class="product-item">
               <img src="${this.img}" alt="${this.title}">
               <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                  <button class="buy-btn">Купить</button>
               </div>
            </div>`
   }
}

const list = new Products('.products');



// class Cart {
//     data = [];
//     products = [];
//     block = null;
//     price = 0;
//
//     constructor(div) {
//         this.block = document.querySelector(div);
//         this._fetchData();
//         this._totalPrice();
//         this._render();
//     }
//
//     _fetchData() {
//         this.data = [
//            тут то, что человек добавил в корзину
//         ];
//     }
//
//     _totalPrice() {
//         this.price = 0;
//         метод, который считает общую стоимость товаров
//     }
//
//     _render() {
//         for (let data of this.data) {
//             const product = new CartItem(data);
//             this.products.push(product);
//             this.block.insertAdjacentHTML('beforeend', product.render())
//         }
//              вёрстка вывода общей цены return ...
//     }
// }

//        _delete () {
//        метод,который удаляет товар из корзины
//        }
//
// class CartItem {
//     title = '';
//     price = 0;
//     id = 0;
//     img = '';
//
//     constructor(product, img = 'https://placehold.it/200x150') {
//         ({ title: this.title, price: this.price, id: this.id } = product);
//         this.img = img;
//     }
//
//     render() {
//            вёрстка товара в корзине
//     }
// }




