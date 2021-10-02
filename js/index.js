// const subTotal = product.querySelector('.subtotal span');

// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent);//
  const quantity = Number(product.querySelector('.quantity input').value);
  const subTotal = product.querySelector('.subtotal span');
  let result = quantity * price;
  subTotal.innerHTML = `${result}`;
  return result;
}


function calculateAll() {
  const multipleProduct = document.querySelectorAll('.product');
  const totalPrice = document.querySelector('#total-value span');
  let total = 0;
  for (let index = 0; index < multipleProduct.length; index++) {
    total += updateSubtotal(multipleProduct[index]);        
  }
  totalPrice.innerHTML = `${total}`;  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  // for (let i = 0; i < removeProductBtn.length; i++) { // On parcours le tableau des buttons    
  //    removeProductBtn[i].addEventListener('click', removeProduct);    
  // }
  removeProductBtn.forEach((product) => {
    product.addEventListener('click',removeProduct);
  });
  
})

   //  btn.addEventListener("click",  () => product.remove())
