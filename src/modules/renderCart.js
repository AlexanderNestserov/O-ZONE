const renderCart = (goods) => {

   const cartWrapper = document.querySelector('.cart-wrapper');


   cartWrapper.innerHTML = '';

   if (goods.length === 0) {
      cartWrapper.insertAdjacentHTML('beforeend', `<div id="cart-empty">
      Ваша корзина пока пуста
   </div>`);
   } else {

      goods.forEach((element) => {
         cartWrapper.insertAdjacentHTML('beforeend',
            `
            <div class="card" data-key="${element.id}">
            ${element.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
               <div class="card-img-wrapper">
               <span class="card-img-top"
                  style="background-image: url('${element.img}')"></span>
               </div>
               <div class="card-body justify-content-between">
                  <div class="card-price">${element.price}</div>
                  <h5 class="card-title">${element.title}</h5>
                  <button class="btn btn-primary">Удалить</button>
               </div>
            </div>
         `)
      });
   }
};


export default renderCart;