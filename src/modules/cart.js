import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {

   const cartBtn = document.getElementById('cart');
   const cartModal = document.querySelector('.cart');
   const goodsWrapper = document.querySelector('.goods');
   const cartTotal = cartModal.querySelector('.cart-total>span');
   const cartWrapper = cartModal.querySelector('.cart-wrapper');
   const cartConfirm = cartModal.querySelector('.cart-confirm');
   const cartLengthCounter = document.querySelector("#cart > .counter");

   updateCartLength();

   cartBtn.addEventListener('click', () => {
      const cart = localStorage.getItem('cart') ?
         JSON.parse(localStorage.getItem('cart')) :
         [];
      cartModal.style.display = 'flex';

      renderCart(cart)
      cartTotal.textContent = cart.reduce((sum, item) => {
         return sum + item.price;
      }, 0)

   });

   cartModal.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('cart-close')) {
         cartModal.style.display = "none";
      }
   });

   goodsWrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-primary')) {
         const card = e.target.closest('.card');
         const key = card.dataset.key;
         const goods = JSON.parse(localStorage.getItem('goods'));
         const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) :
            [];
         const goodItem = goods.find((item) => {
            return item.id === +key;
         })
         cart.push(goodItem);
         localStorage.setItem('cart', JSON.stringify(cart));
         updateCartLength();
      }
   })

   cartWrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-primary')) {
         const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) :
            [];
         const card = e.target.closest('.card');
         const key = card.dataset.key;
         const index = cart.findIndex((item) => {
            return item.id === +key;
         })

         cart.splice(index, 1);

         localStorage.setItem('cart', JSON.stringify(cart));

         renderCart(cart);
         cartTotal.textContent = cart.reduce((sum, item) => {
            return sum + item.price;
         }, 0);
         updateCartLength();
      }
   })
   cartConfirm.addEventListener('click', () => {
      const cart = localStorage.getItem('cart') ?
         JSON.parse(localStorage.getItem('cart')) :
         [];
      postData(cart).then(() => {
         localStorage.removeItem('cart');
         renderCart([]);
         cartTotal.textContent = 0;
         updateCartLength();
      })
   })
   function updateCartLength() {
      let cartLength = 0;
      const cart = localStorage.getItem("cart")
         ? JSON.parse(localStorage.getItem("cart"))
         : [];
      cartLength = cart.length;
      cartLengthCounter.innerHTML = cartLength;
   }

}

export default cart;