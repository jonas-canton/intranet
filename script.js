const myRequest = new Request('systems.json');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const product of data.sistemas) {
      console.log(product.titulo)
    }
  })
  .catch(console.error);

