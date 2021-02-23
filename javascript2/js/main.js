const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

let getRequest = (url, cb) => {
   let xhr = new XMLHttpRequest();
   // window.ActiveXObject -> new ActiveXObject();
   xhr.open('GET', url, true);
   xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
         return;
      }

      if (xhr.status !== 200) {
         console.log('some error');
         return;
      }

      cb(xhr.responseText);
   }
};

class Products {
   products = [];
   container = null;

   constructor(selector) {
      this.container = document.querySelector(selector);
      this._getTotalPrice();
      this._fetchData()
         .then(() => this._render());
   }

   _getTotalPrice() {
      let totalPrice = 0;
      this.products.forEach((item) => {
         return totalPrice += (+item.price);
      });
   }

   _fetchData() {
      return fetch(`${API}/catalogData.json`)
         .then(result => result.json())
         .then(data => {
            for (let product of data) {
               this.products.push(new ProductItem(product));
            }
         })
   }

   _render() {
      for (let product of this.products) {
         if (product.rendered) {
            continue;
         }

         this.container.insertAdjacentHTML('beforeend', product.render())
      }
   }
}

class ProductItem {
   title = '';
   price = 0;
   id = 0;
   img = '';
   rendered = false;

   constructor(product, img = 'https://placehold.it/200x150') {
      ({ product_name: this.title, price: this.price, id_product: this.id } = product);
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
console.log(list._getTotalPrice());


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




