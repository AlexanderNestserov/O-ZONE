import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilters } from "./filters";

const search = () => {
   const searchInput = document.querySelector('.search-wrapper_input');

   searchInput.addEventListener('input', (e) => {
      e.preventDefault();
      const val = e.target.value;
      console.log(val);
      getData().then((data) => {
         renderGoods(searchFilters(data, val));
      });
   });
};

export default search;