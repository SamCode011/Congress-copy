/* Submenu */
let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{
        listElement.classList.toggle('arrow');
        let height = 0 ;
        let menu =listElement.nextElementSibling; 
       if(menu.clientHeight=="0") {
        height=menu.scrollHeight;
       }
       menu.style.height= `${height}px` 
    })
}) 
 /* menu */
 let navActive = document.querySelectorAll('.click-active');

navActive.forEach(activation => {
    activation.classList.remove('active');
      let principal = activation.nextElementSibling;
      principal.style.width = '0';

    activation.addEventListener('click',()=> {
        activation.classList.toggle('active');
        let width = 0 ;
        let principal = activation.nextElementSibling;
        if (principal.clientWidth=="0") {
            width=null ;
        }
        principal.style.width=width;
    })
})
/* submenu-image */
document.addEventListener('DOMContentLoaded',function() {
    let img = document.getElementById('bars');
    img.addEventListener('click',function() {
      img.classList.toggle('oculto');
       

       
       })
    })

    document.addEventListener('DOMContentLoaded',function (){
        let ghostElement =document.querySelector('.ghost');
        let triggerElement =document.querySelector('.ghost-click');
        triggerElement.addEventListener('click',function (){
            ghostElement.style.display =ghostElement.style.display ==='none' ? 'flex' : 'none';
        })
    })
 