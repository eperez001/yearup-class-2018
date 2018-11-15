console.log('🚀');
 function display(){
   axios.get("https://www.redbullshopus.com/products.json")
   .then(something);

   let number = [0, 1, 2, 3, 4, 5]
   function something(response){
     for(var i=0; i< number.length; i++){
       let randNumber = number[i]
       let product = document.querySelector('#images')
       let img = response.data.products[2].images[2].src
       product.src = img
       console.log(product)
     }
   }
 }
 let button = document.querySelector('button')
 button.addEventListener('click', display);
