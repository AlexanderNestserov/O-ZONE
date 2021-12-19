import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilters } from "./filters";

const search = () => {
   const searchInput = document.querySelector('input[type=text]');

   searchInput.addEventListener('input', (e) => {

      let val = e.target.value;
      getData().then((data) => {
         renderGoods(searchFilters(data, val));
      });
   });
};

export default search;