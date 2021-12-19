export const searchFilters = (goods, value) => {

   return goods.filter((item) => {

      return item.title.toLowerCase().includes(value.toLowerCase());
   });
};

export const categoryFilters = (goods, value) => {

   return goods.filter((item) => {

      return item.category === value;
   });
};

