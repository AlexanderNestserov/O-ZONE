const cart = () => {

   const cartBtn = document.getElementById('cart');
   const cartModal = document.querySelector('.cart');

   cartBtn.addEventListener('click', () => {
      cartModal.style.display = 'flex';
   });

   cartModal.addEventListener('click', (e) => {
      e.preventDefault();
      if (!e.target.closest('.cart-body') || e.target.classList.contains('cart-close')) {
         cartModal.style.display = "none";
      }
   });
   document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.key == 'Escape') {
         cartModal.style.display = "none";
      }
   });
}

export default cart;