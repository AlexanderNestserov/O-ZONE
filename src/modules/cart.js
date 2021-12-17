const cart = () => {

   const cartBtn = document.getElementById('cart');
   const cartModal = document.querySelector('.cart');

   cartBtn.addEventListener('click', () => {
      cartModal.style.display = 'flex';
   });

   cartModal.addEventListener('click', (e) => {
      if (!e.target.closest('.cart-body') || e.target.classList.contains('cart-close')) {
         cartModal.style.display = "none";
      }
   });
}

export default cart;