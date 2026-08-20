const serviceItems=document.querySelectorAll('.service-item');
let currentIndex=0;
const cart=[];
const logoutBtn=document.getElementById('logoutBtn');
const emptyCart=document.getElementById('emptyCart');
const cartTable=document.getElementById('cartTable');
const cartTablebody=document.getElementById('cartTableBody');
const totalAmount=document.getElementById('totalAmount');
const bookingForm=document.getElementById('bookingForm');
const bookNowBtn=document.getElementById('bookNowBtn');
function updateServiceVisibility()
{
  serviceItems.forEach((iten,index) =>{
    if(index===currentIndex){
      iten.classList.remove('hidden');
    }
    else{
      iten.classList.add('hidden');
    }
  });
}
function updateCartUI(){
  if(cart.length===0){
    emptyCart.classList.remove('hidden');
    cartTable.classList.add('hidden');
    bookNowBtn.disabled=true;
  }
  else{
    emptyCart.classList.add('hidden');
    cartTable.classList.remove('hidden');
    bookNowBtn.disabled=false;
  }
  cartTablebody.innerHTML='';
  let grandTotal=0;
  cart.forEach((item,index)=>{
    grandTotal += item.price;
    const row=document.createElement('tr');
    row.innerHTML = `
     <td>${index+1}</td>
     <td>${item.name}</td>
     <td>${item.price}</td>
    `;
    cartTablebody.appendChild(row);
  });
  totalAmount.textContent= `₹${grandTotal}`;

}
function showNextService(){
  currentIndex++;
  if(currentIndex >= serviceItems.length){
    currentIndex=0;
  }
  updateServiceVisibility();
}
serviceItems.forEach((item)=> {
  const addBtn=item.querySelector('.btn-add');
  const skipBtn=item.querySelector('.btn-skip');
  addBtn.addEventListener('click' ,()=> {
    const name=item.getAttribute('data-name');
    const price=parseFloat(item.getAttribute('data-price'));
    cart.push({name,price});
    updateCartUI();
    showNextService();
  });
  skipBtn.addEventListener('click', () => {
    showNextService();
  });
});
logoutBtn.addEventListener('click', () =>{
  alert('Logged out successfully');
});
bookingForm.addEventListener('submit',(e)=> {
  e.preventDefault();
  if(cart.length ===0) return;
  alert('Booking Confirmed Successfully');
  cart.length=0;
  updateCartUI();
  bookingForm.reset();
});
updateServiceVisibility();
