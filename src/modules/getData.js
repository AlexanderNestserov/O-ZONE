const getData = () => {

   return fetch('https://o-zone-2d020-default-rtdb.firebaseio.com/goods.json')
      .then(response => response.json());
}

export default getData;