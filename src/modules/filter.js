import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";
import { hotSaleFilter } from "./filters";

const filter = () => {
   const min = document.getElementById('min');
   const max = document.getElementById('max');
   const input = document.querySelector('.filter-check_checkbox');
   const span = document.querySelector('.filter-check_checkmark');

   min.addEventListener('input', () => {
      getData().then((data) => {
         renderGoods(priceFilter(hotSaleFilter(data, input.checked), min.value, max.value));
      });
   })

   max.addEventListener('input', () => {
      getData().then((data) => {
         renderGoods(priceFilter(hotSaleFilter(data, input.checked), min.value, max.value));
      });
   })

   input.addEventListener('change', () => {
      if (input.checked) {
         span.classList.add('checked');
      } else {
         span.classList.remove('checked');
      }

      getData().then((data) => {
         renderGoods(priceFilter(hotSaleFilter(data, input.checked), min.value, max.value));
      });

   })


}

export default filter;